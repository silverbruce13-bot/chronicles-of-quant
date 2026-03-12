import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai';
import * as fs from 'fs';
import * as path from 'path';
import 'dotenv/config';

// Initialize Gemini API
const apiKey = process.env.VITE_GEMINI_API_KEY;
if (!apiKey) throw new Error("Missing VITE_GEMINI_API_KEY in .env");
const genAI = new GoogleGenerativeAI(apiKey);

import { storyContent } from '../src/data/story';

const schema = {
    type: SchemaType.OBJECT,
    properties: {
        ko: {
            type: SchemaType.ARRAY,
            items: { type: SchemaType.STRING },
            description: "한국어 어나더 딥 스토리 (3문단 내외). 주인공과 메인 스토리에서 부드럽게 수학적/이론적 핵심으로 넘어가는 서사를 작성할 것."
        },
        en: {
            type: SchemaType.ARRAY,
            items: { type: SchemaType.STRING },
            description: "English another deep story (around 3 paragraphs). Bridging the main narrative beautifully into the mathematical/theoretical core."
        }
    }
};

async function generateDeepStory(chapterKo: any, chapterEn: any) {
    console.log(`Generating Deep Story for Chapter ${chapterKo.id}: ${chapterKo.title}...`);
    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        generationConfig: {
            temperature: 0.7,
            responseMimeType: "application/json",
            // @ts-ignore
            responseSchema: schema
        }
    });

    const prompt = `당신은 Chronicles of Quant의 수석 작가이자 투명한 지식 공유(헤븐 프로젝트)를 추구하는 일타강사팀인 폴샘팀입니다.

현재 사용자가 '딥 다이브(심화 학습)' 버튼을 누르면 화면 왼쪽에 원래의 메인 스토리가 한 번 더 나오고, 오른쪽에 심화 수학 이론이 나옵니다.
이것을 개선하여, 왼쪽 화면에는 **메인 스토리에서 심화 학습으로 부드럽게 넘어가는 '어나더 스토리(Another Deep Story)'**를 제공하려고 합니다.
메인 스토리의 배경과 인물들의 상황을 빌려, 이어질 수학(튜토리얼 주제)의 서론과 철학적, 역사적 배경을 흥미진진하게 열어주는 3개의 문단을 한국어와 번역된 영어로 작성해 주세요. 

[에피소드 정보]
에피소드 번호: ${chapterKo.id}
제목: ${chapterKo.title}
메인 스토리: ${chapterKo.content.join(' ')}

[연결할 튜토리얼 (이론적 주제)]
${chapterKo.tutorialType}

출력 포맷 가이드:
- ko: 한국어 문단 배열 (3개)
- en: 영어 문단 배열 (3개)
`;

    try {
        const result = await model.generateContent(prompt);
        let text = result.response.text();
        text = text.replace(/^```json/g, "").replace(/```$/g, "").trim();
        return JSON.parse(text);
    } catch (e) {
        console.error(`Failed on chapter ${chapterKo.id}`, e);
        return null;
    }
}

async function main() {
    const numChapters = storyContent.ko.length; // 40
    let generatedCount = 0;
    
    for (let i = 0; i < numChapters; i++) {
        // Skip if already generated
        if (storyContent.ko[i].deepStory && storyContent.ko[i].deepStory!.length > 0) {
            console.log(`Chapter ${storyContent.ko[i].id} already has a deep story. Skipping...`);
            continue;
        }

        let retries = 3;
        let success = false;
        while (retries > 0 && !success) {
            const deepStoryResults = await generateDeepStory(storyContent.ko[i], storyContent.en[i]);
            if (deepStoryResults) {
                storyContent.ko[i].deepStory = deepStoryResults.ko;
                storyContent.en[i].deepStory = deepStoryResults.en;
                success = true;
                generatedCount++;
            } else {
                console.log("Retrying in 5 seconds...");
                await new Promise(r => setTimeout(r, 5000));
                retries--;
            }
        }
        
        // Every 5 chapters, write to disk to save progress
        if ((i + 1) % 5 === 0 || i === numChapters - 1) {
            const fileContent = `export type ChapterType = {
    id: number;
    volume: string | number;
    title: string;
    subtitle: string;
    year: string;
    imagePath?: string;
    content: string[];
    deepStory?: string[];
    tutorialType: 'compound' | 'randomWalk' | 'amm' | 'blackScholes' | 'portfolio' | 'derivatives' | 'calculus' | 'probability' | 'matrix' | 'behavioral' | 'algorithm' | 'ai';
    tutorialTitle?: string;
    theoryDetail?: {
        title: string;
        content: string[];
    };
};

export const storyContent: Record<string, ChapterType[]> = {
    ko: ${JSON.stringify(storyContent.ko, null, 4)},
    en: ${JSON.stringify(storyContent.en, null, 4)}
};
`;
            fs.writeFileSync(path.join(process.cwd(), 'src', 'data', 'story.ts'), fileContent, 'utf-8');
            console.log(`Progress saved: ${i+1} chapters.`);
        }
    }

    console.log(`Successfully generated deep stories for ${generatedCount} chapters.`);
}

main();
