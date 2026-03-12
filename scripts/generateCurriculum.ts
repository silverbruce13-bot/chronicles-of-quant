import { GoogleGenerativeAI } from '@google/generative-ai';
import * as fs from 'fs';
import * as path from 'path';

// Read API Key from .env.local or process.env
const apiKey = process.env.VITE_GEMINI_API_KEY || "REDACTED";
const genAI = new GoogleGenerativeAI(apiKey);

const curriculumText = `
[Curriculum context]
Vol 1 (Week 1-10): 화폐의 시간 가치와 자산 포트폴리오 (단리/복리, 현재가치, 연금수열, 랜덤워크, 위험분산, 마코위츠 포트폴리오 이론 등)
Vol 2 (Week 11-20): 미분과 파생상품의 기원 (헤지, 선물, 콜/풋옵션, 미분계수, 델타 등)
Vol 3 (Week 21-30): 미분의 완성 (옵션 그릭스, 감마, 세타, 베가, 블랙-숄즈 모형의 체계화, 연속확률분포 등)
Vol 4 (Week 31-40): 데이터와 알고리즘, 그리고 새로운 질서 선언 (행렬, VaR, 2008 서브프라임, 몬테카를로, 알고리즘 매매, DeFi AMM(x*y=k) 등)

지금 만든 구조(복리, 랜덤워크, 블랙숄즈, AMM)의 정수와 영성적인 접근(투명성, 헤븐프로젝트)을 포함하여, 40주차를 유기적으로 연결해주세요.
`;

async function generateVolume(volIndex: number) {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" }); // Using a faster model suitable for text gen
    const startWeek = (volIndex - 1) * 10 + 1;
    const endWeek = volIndex * 10;
    
    const prompt = `
당신은 'Chronicles of Quant' (금융 수학 대하소설 튜토리얼)의 수석 작가입니다.
전체 40주차 커리큘럼 중 Volume ${volIndex} (Week ${startWeek} ~ Week ${endWeek})에 해당하는 10개의 챕터 분량을 JSON 직렬화 배열 포맷으로 작성해주세요.

다음의 JSON 스키마를 정확하게 따라야만 합니다 (코드 블록 없이 순수 JSON 배열만 반환하세요).
[
  {
    "id": 숫자 (1~40 중 해당 주차),
    "ko": {
      "volume": "VOL. ${volIndex}",
      "year": "역사적 연도 (예: 1900, 1929, 2008 등)",
      "title": "챕터 메인 제목",
      "subtitle": "챕터 부제목 (1문장)",
      "content": [
         "스토리 문단 1 (대하소설 형식으로 역사적 시대 상황, 약간의 영성적/인문학적 통찰 포함)",
         "스토리 문단 2 (핵심 수학 공식을 스토리텔링에 엮어서 서술. 중요 단어는 [[강조단어|일타강사가 대화체로 쉽게 설명해주는 툴팁 해설 내용]] 형식 포함)",
         "스토리 문단 3 (이 발견이 인류 역사나 헤븐프로젝트의 이상에 어떤 의미를 주는지 서술)"
      ],
      "theoryDetail": {
        "title": "수학 이론 상세 제목",
        "content": ["이론 설명 1", "이론 설명 2"]
      }
    },
    "en": {
       ... (위의 ko 내용을 완벽하게 영어로 번역하되, 문학적이고 고급스러운 영어를 사용. [[word|tooltip explanation]] 포맷 유지)
    },
    "tutorialType": "영문 식별자 (예: compound, randomWalk, blackScholes, amm, matrix, portfolio 등 하나 지정)",
    "imagePath": "/assets/images/ch${volIndex}.png"
  }
]

참고 커리큘럼 맥락:
${curriculumText}

반드시 순수 JSON 배열만 반환하세요.
`;

    console.log(`Generating Volume ${volIndex} (${startWeek}-${endWeek})...`);
    const result = await model.generateContent(prompt);
    let text = await result.response.text();
    text = text.replace(/^\`\`\`json/m, '').replace(/^\`\`\`/m, '').trim();
    return JSON.parse(text);
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
    let allChapters: any[] = [];
    
    // We already have some good templates from remergeCurriculum. We might want to keep the original chapters for 1, 5, 18, 38 later, but let's just generate all 40 right now to get the base text.
    for (let i = 1; i <= 4; i++) {
        const outPath = path.join(process.cwd(), 'src', 'data', `vol${i}_raw.json`);
        if (fs.existsSync(outPath)) {
            console.log(`Volume ${i} already exists. Skipping...`);
            const data = JSON.parse(fs.readFileSync(outPath, 'utf8'));
            allChapters = allChapters.concat(data);
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
                console.error(`Error generating Volume ${i} (Retries left: ${retries}):`, err);
                if (retries > 0) {
                    console.log("Waiting 5 seconds before retrying...");
                    await sleep(5000);
                }
            }
        }
    }

    const outputPath = path.join(process.cwd(), 'src', 'data', 'generated_40_chapters.json');
    fs.writeFileSync(outputPath, JSON.stringify(allChapters, null, 2), 'utf-8');
    console.log(`All 40 chapters generated and saved to ${outputPath}`);
}

main().catch(console.error);
