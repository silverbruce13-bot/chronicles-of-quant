import { GoogleGenerativeAI } from '@google/generative-ai';
import * as fs from 'fs';
import * as path from 'path';
import 'dotenv/config';

const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

async function generateHeavenlyContent(chapterId: number, title: string, subtitle: string, tutorialType: string, mainContent: string) {
    const prompt = `
당신은 '헤븐 프로젝트'의 수석 교육 큐레이터이자 퀀트 전문가입니다. 
당신의 목표는 중학생 수준의 수학 지식을 가진 학습자에게 전문 금융 상품과 수학적 원리를 '금융의 미학'과 '역사의 서사'를 통해 교육하는 것입니다.

대상: 중학생 (기초 확률, 일차함수, 피타고라스 정리 정도의 수준)
주제: [${chapterId}] ${title} (${subtitle}) - 유형: ${tutorialType}
본문 내용 요약: ${mainContent}

다음 4가지 형식에 맞춰 컨텐츠를 생성해 주세요. 모든 내용은 한국어로 작성합니다.
반드시 JSON 형식으로 응답해 주세요.

1. intuitionBridge (1단계: 직관의 다리)
   - 중학 수준의 비유를 사용하여 수식 없이 원리를 설명합니다.
   - title: 흥미로운 질문이나 비유 제목
   - content: 3~4개의 짧은 문장 배열

2. deepStory (2단계: 어나더 스토리)
   - 메인 스토리를 보충하거나 수학적 탄생 배경을 다룬 심화 서사. (3~4개 문장 배열)

3. scenario (3단계: 퀀트의 선택)
   - 실전 상황을 가정한 도전 과제.
   - title: 상황 제목
   - challenge: 위기 상황 설명
   - solution: 퀀트로서의 해법 (중학생도 이해할 수 있는 수학적 논리 포함)

4. ethos (4단계: 퀀트의 철학)
   - 이 지식이 공공의 이익과 어떻게 연결되는지에 대한 짧은 메시지.
   - message: 1~2문장의 철학적 문구

JSON 구조:
{
  "intuitionBridge": { "title": "...", "content": ["...", "..."] },
  "deepStory": ["...", "..."],
  "scenario": { "title": "...", "challenge": "...", "solution": "..." },
  "ethos": { "message": "..." }
}
`;

    try {
        const result = await model.generateContent(prompt);
        const text = result.response.text();
        const cleanedText = text.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(cleanedText);
    } catch (e) {
        console.error(`Error generating for ${chapterId}:`, e);
        return null;
    }
}

async function main() {
    const storyPath = path.join(process.cwd(), 'src/data/story.ts');
    const mathPath = path.join(process.cwd(), 'src/data/mathDetails.ts');
    
    // For now, let's just generate for the first 5 chapters to test
    // In a real run, we would loop through all chapters.
    
    console.log("Starting Heavenly Content Generation...");
    // Mock run for testing purposes or limited run
    const result = await generateHeavenlyContent(1, "이자의 탄생", "돈에도 시간의 가격이 있다", "compound", "15세기 대항해 시대...");
    console.log("Result for Chapter 1:", JSON.stringify(result, null, 2));
}

main();
