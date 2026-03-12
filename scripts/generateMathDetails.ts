import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai';
import * as fs from 'fs';
import * as path from 'path';

const apiKey = process.env.VITE_GEMINI_API_KEY || "REDACTED";
const genAI = new GoogleGenerativeAI(apiKey);

const types = [
    'portfolio', 'derivatives', 'calculus', 'probability', 'matrix', 'behavioral', 'algorithm', 'ai'
];

const schema = {
    type: SchemaType.OBJECT,
    properties: {
        ko: {
            type: SchemaType.OBJECT,
            properties: {
                concepts: { type: SchemaType.ARRAY, items: { type: SchemaType.OBJECT, properties: { name: { type: SchemaType.STRING }, desc: { type: SchemaType.STRING } } } },
                detailedLearning: { type: SchemaType.ARRAY, items: { type: SchemaType.OBJECT, properties: { title: { type: SchemaType.STRING }, content: { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } } } } },
                quizzes: { type: SchemaType.ARRAY, items: { type: SchemaType.OBJECT, properties: { question: { type: SchemaType.STRING }, options: { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } }, answer: { type: SchemaType.INTEGER }, explanation: { type: SchemaType.STRING } } } },
                flowchart: { type: SchemaType.ARRAY, items: { type: SchemaType.OBJECT, properties: { step: { type: SchemaType.INTEGER }, title: { type: SchemaType.STRING }, desc: { type: SchemaType.STRING }, formula: { type: SchemaType.STRING } } } },
                discussionAndAssignment: { type: SchemaType.OBJECT, properties: { discussion: { type: SchemaType.STRING }, assignment: { type: SchemaType.STRING } } }
            }
        },
        en: {
            type: SchemaType.OBJECT,
            properties: {
                concepts: { type: SchemaType.ARRAY, items: { type: SchemaType.OBJECT, properties: { name: { type: SchemaType.STRING }, desc: { type: SchemaType.STRING } } } },
                detailedLearning: { type: SchemaType.ARRAY, items: { type: SchemaType.OBJECT, properties: { title: { type: SchemaType.STRING }, content: { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } } } } },
                quizzes: { type: SchemaType.ARRAY, items: { type: SchemaType.OBJECT, properties: { question: { type: SchemaType.STRING }, options: { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } }, answer: { type: SchemaType.INTEGER }, explanation: { type: SchemaType.STRING } } } },
                flowchart: { type: SchemaType.ARRAY, items: { type: SchemaType.OBJECT, properties: { step: { type: SchemaType.INTEGER }, title: { type: SchemaType.STRING }, desc: { type: SchemaType.STRING }, formula: { type: SchemaType.STRING } } } },
                discussionAndAssignment: { type: SchemaType.OBJECT, properties: { discussion: { type: SchemaType.STRING }, assignment: { type: SchemaType.STRING } } }
            }
        }
    }
};

async function generateType(type: string) {
    console.log("Generating for:", type);
    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        generationConfig: {
            temperature: 0.7,
            responseMimeType: "application/json",
            // @ts-ignore
            responseSchema: schema
        }
    });

    const prompt = `당신은 Chronicles of Quant의 수석 퀀트 금융 소설가이자 투명한 지식 공유(헤븐 프로젝트)를 추구하는 일타강사팀입니다.
이번 주제는 '${type}' 분야입니다. 
ko 와 en 을 완벽히 번역해서 짝맞춰주세요. 
개념(concepts 3개), 심화이론(detailedLearning 2개), 퀴즈(quizzes 2개, answer는 0~3 인덱스), 수식과 흐름도(flowchart 4단계), 그리고 토론/과제(discussionAndAssignment)를 모두 채워주세요.

예시주제설명:
probability: 대항해시대 보험, 기대값, 파스칼의 도박 등 확률론
portfolio: 분산 투자, 상관계수, 포트폴리오 리스크 등
derivatives: 헤지, 선물 거래, 마진콜 등 파생상품 기초
calculus: 미분과 적분, 변화율, 한계효용 등
matrix: 행렬 연산, 마코비츠 포트폴리오 최적화 등
behavioral: 행동재무학, 군중심리, 공포와 탐욕 지수 등
algorithm: 알고리즘 매매, 차익거래 수학 등
ai: 인공지능 트레이딩, 신경망, 머신러닝 최적화 등
`;

    const result = await model.generateContent(prompt);
    return JSON.parse(result.response.text());
}

async function main() {
    const results: any = {};
    for (const type of types) {
        try {
            results[type] = await generateType(type);
        } catch (e) {
            console.error(e);
            console.log("Retrying...");
            await new Promise(r => setTimeout(r, 5000));
            results[type] = await generateType(type);
        }
    }
    fs.writeFileSync(path.join(process.cwd(), 'src', 'data', 'gen_math_details.json'), JSON.stringify(results, null, 2));
    console.log("Done generating math details.");
}

main();
