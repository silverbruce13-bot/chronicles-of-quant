import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai';
import * as fs from 'fs';
import * as path from 'path';

// Read API Key
const apiKey = process.env.VITE_GEMINI_API_KEY || "AIzaSyBerVAvN7uEr7714_C1ghm1Dll2RsKmelk";
const genAI = new GoogleGenerativeAI(apiKey);

const chapterSchema = {
    type: SchemaType.ARRAY,
    description: "List of 10 chapters for this volume",
    items: {
        type: SchemaType.OBJECT,
        properties: {
            id: { type: SchemaType.INTEGER, description: "chapter number" },
            ko: {
                type: SchemaType.OBJECT,
                properties: {
                    volume: { type: SchemaType.STRING },
                    year: { type: SchemaType.STRING },
                    title: { type: SchemaType.STRING },
                    subtitle: { type: SchemaType.STRING },
                    content: {
                        type: SchemaType.ARRAY,
                        items: { type: SchemaType.STRING },
                        description: "3 paragraphs of storytelling. Include exactly one highlighting toolip string like [[keyword|tooltip explanation]] per chapter"
                    },
                    theoryDetail: {
                        type: SchemaType.OBJECT,
                        properties: {
                            title: { type: SchemaType.STRING },
                            content: { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } }
                        }
                    }
                },
                required: ["volume", "year", "title", "subtitle", "content", "theoryDetail"]
            },
            en: {
                type: SchemaType.OBJECT,
                properties: {
                    volume: { type: SchemaType.STRING },
                    year: { type: SchemaType.STRING },
                    title: { type: SchemaType.STRING },
                    subtitle: { type: SchemaType.STRING },
                    content: {
                        type: SchemaType.ARRAY,
                        items: { type: SchemaType.STRING },
                        description: "English translation of content, maintain [[keyword|tooltip explanation]] format"
                    },
                    theoryDetail: {
                        type: SchemaType.OBJECT,
                        properties: {
                            title: { type: SchemaType.STRING },
                            content: { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } }
                        }
                    }
                },
                required: ["volume", "year", "title", "subtitle", "content", "theoryDetail"]
            },
            tutorialType: {
                type: SchemaType.STRING,
                description: "Must be one of: compound, randomWalk, amm, blackScholes, portfolio, derivatives, calculus, probability, matrix, behavioral, algorithm, ai"
            },
            imagePath: {
                type: SchemaType.STRING,
                description: "e.g., /assets/images/chX.png"
            }
        },
        required: ["id", "ko", "en", "tutorialType", "imagePath"]
    }
};

const curriculumText = `
[Curriculum context]
Vol 1 (Chapter 1-10): 화폐의 시간 가치와 자산 포트폴리오 (목표: 고대 이자부터 포트폴리오 다각화까지)
Vol 2 (Chapter 11-20): 미분과 파생상품의 기원 (목표: 대항해시대 보험에서 블랙숄즈까지)
Vol 3 (Chapter 21-30): 미분의 완성 (목표: 옵션 그릭스와 헤지 실무, 블랙-숄즈 모형 심화)
Vol 4 (Chapter 31-40): 데이터와 알고리즘 (목표: 2008 서브프라임 비극, 초단타매매 알고리즘, 블록체인 스마트컨트랙트, DeFi AMM(x*y=k) 등)
`;

async function generateVolume(volIndex: number) {
    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        generationConfig: {
            temperature: 0.7,
            responseMimeType: "application/json",
            // @ts-ignore
            responseSchema: chapterSchema
        }
    });

    const startWeek = (volIndex - 1) * 10 + 1;
    const endWeek = volIndex * 10;
    
    const prompt = `당신은 Chronicles of Quant의 수석 퀀트 금융 소설가이자 투명한 지식 공유(헤븐 프로젝트)를 추구하는 일타강사팀입니다.
전체 40 챕터 중 Volume ${volIndex} (Chapter ${startWeek} ~ ${endWeek}) 분량 10개의 챕터를 작성해주세요.
내용은 대하소설처럼 흥미진진해야 하며, ko 와 en 을 완벽히 번역해서 짝맞춰주세요. 챕터 본문 중 중요한 용어 하나는 [[단어|강사의 쉽고 친절한 대화체 설명]] 형식으로 꼭 포함해주세요.
참고: ${curriculumText}`;

    console.log(`Generating Volume ${volIndex} (${startWeek}-${endWeek})...`);
    const result = await model.generateContent(prompt);
    return JSON.parse(result.response.text());
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
    let allChapters: any[] = [];
    
    for (let i = 1; i <= 4; i++) {
        const outPath = path.join(process.cwd(), 'src', 'data', `vol${i}_raw.json`);
        if (fs.existsSync(outPath)) {
            console.log(`Volume ${i} already exists. Skipping...`);
            allChapters = allChapters.concat(JSON.parse(fs.readFileSync(outPath, 'utf8')));
            continue;
        }

        let success = false;
        let retries = 3;
        while (!success && retries > 0) {
            try {
                const chapters = await generateVolume(i);
                fs.writeFileSync(outPath, JSON.stringify(chapters, null, 2), 'utf-8');
                allChapters = allChapters.concat(chapters);
                console.log(`Successfully generated and saved Volume ${i}.`);
                success = true;
            } catch (err) {
                retries--;
                console.error(`Error Volume ${i} (Retries left: ${retries}):`, err);
                if (retries > 0) await sleep(5000);
            }
        }
    }

    const merged = path.join(process.cwd(), 'src', 'data', 'generated_40_chapters.json');
    fs.writeFileSync(merged, JSON.stringify(allChapters, null, 2), 'utf-8');
    console.log(`All saved to ${merged}`);
}

main().catch(console.error);
