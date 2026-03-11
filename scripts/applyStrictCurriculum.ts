import * as fs from 'fs';
import * as path from 'path';

const storyPath = path.join(process.cwd(), 'src', 'data', 'story.ts');
const mathPath = path.join(process.cwd(), 'src', 'data', 'mathDetails.ts');

// --- Rebuild story.ts with High Quality Content ---
function generateStoryContent() {
    const chapters = [];
    
    // We will build a template for all 40, but fill in details for specific ones
    // Vol 1 (1~10), Vol 2 (11~20), Vol 3 (21~30), Vol 4 (31~40)
    for (let i = 1; i <= 40; i++) {
        let vol = Math.floor((i - 1) / 10) + 1;
        
        let chapter: any = {
            id: i,
            volume: `VOL. ${vol}`,
            title: `제${i}장 (준비 중)`,
            subtitle: "새로운 금융 수학의 역사",
            year: "TBD",
            tutorialType: 'compound',
            imagePath: '/assets/images/ch1.png',
            content: ["(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"]
        };

        // Week 1: 이자의 탄생 (User provided content)
        if (i === 1) {
            chapter = {
                id: 1,
                volume: "VOL. 1",
                title: "이자(Interest)의 탄생",
                subtitle: "돈에도 '시간의 가격'이 있다",
                year: "15th C",
                imagePath: '/assets/images/ch1.png',
                tutorialType: 'compound',
                content: [
                    "15세기 대항해 시대, 이탈리아 베니스의 상인들은 먼 바다로 나가는 탐험가들에게 자금을 빌려주었습니다. 폭풍우나 해적을 만나 배가 침몰하면 돈을 모두 잃는 엄청난 리스크가 있었죠. 상인들은 이 '위험'과 '기다리는 시간'에 대한 대가로 원금 외에 추가 금액을 요구하기 시작했는데, 이것이 현대적 의미의 [[이자|단순하게 남의 돈을 빌려 쓰는 비용이 아니라, '시간의 가치'와 '불확실성(리스크)'을 숫자로 바꾼 거란다!]]입니다.",
                    "초기에는 원금에 대해서만 조심스럽게 이자를 매기는 단리(Simple Interest)가 쓰였습니다. 하지만 르네상스 시대의 상인들과 수학자들은 머지않아 훨씬 무섭고도 매혹적인 진실, 돈이 이자를 낳고 그 이자가 다시 이자를 낳는 [[복리|이자에 이자가 붙는 마법! 시간에 따라 자산이 지수함수 모양으로 급격히 증가하는 어마어마한 원리란다.]]의 마법을 깨닫게 됩니다.",
                    "단리가 일차함수처럼 예측 가능하게 직선으로 느릿느릿 증가한다면, 복리는 지수함수처럼 곡선을 그리며 무서운 속도로 치솟습니다. 이 두 함수의 수학적 대결은 유럽에 거대한 자본을 축적시켰고, 이 자본은 훗날 인류 최초의 '주식 시장'이라는 거대한 무대를 탄생시키는 핵심 원동력이 되었습니다."
                ]
            };
        }
        
        // Restore original Chapter 2 (Random Walk) to Week 5
        if (i === 5) {
            chapter = {
                id: 5,
                volume: "VOL. 1",
                title: "1929 대공황과 데이터의 배신",
                subtitle: "위험을 숫자로 지배하라",
                year: "1929",
                imagePath: '/assets/images/ch2.png',
                tutorialType: 'randomWalk',
                content: [
                    "복리의 마법으로 축적된 거대한 자본은 주식 시장으로 흘러들어갔고, 수많은 사람들은 가격이 오를지 내릴지 예측하려는 끝없는 욕망에 사로잡혔습니다. 하지만 1900년, 루이 바슐리에라는 수학자는 극단적인 진실에 도달하게 됩니다.",
                    "그는 과거의 어떠한 패턴이나 데이터도 내일의 주가를 알려주지 못한다는 사실을 증명했습니다. 시장 가격은 마치 술 취한 사람의 걸음걸이처럼 이리저리 무작위로 표류하는 '[[랜덤워크|과거의 움직임이 미래의 방향을 전혀 예측해주지 못하는 무작위의 상태를 말해!]]'를 따른다는 것입니다.",
                    "대공황을 겪은 후 학자들은 방향은 예측할 수 없어도, 주가가 얼마나 격렬하게 흔들리는지, 즉 '분산과 표준편차'라는 이름의 변동성은 수학적으로 정밀하게 측정할 수 있다는 위대한 사실을 깨닫게 됩니다."
                ]
            };
        }

        // Restore original Chapter 3 (Black Scholes) to Week 18
        if (i === 18) {
            chapter = {
                id: 18,
                volume: "VOL. 2",
                title: "블랙-숄즈 모델의 서막",
                subtitle: "미분이 파생상품의 가격을 매기다",
                year: "1973",
                imagePath: '/assets/images/ch3.png',
                tutorialType: 'blackScholes',
                content: [
                    "바슐리에가 발견한 '예측 불가능성'은 전 세계 투자자들에게 엄청난 공포였습니다. 사람들은 내 자산을 안전하게 지켜줄 일종의 보험인 '옵션'이라는 방패를 원했습니다. 하지만 이 방패의 적당한 가격이 얼마인지는 아무도 몰랐죠.",
                    "이때 시카고의 천재 학자들(블랙, 숄스, 머튼)이 물리학의 열전도 편미분 방정식을 금융 시장에 가져왔습니다. 그리고 주식과 옵션을 정교한 비율로 섞어 위험(Risk)을 완벽하게 '0'으로 지워버리는 기적과도 같은 계산을 해냅니다. 이것이 바로 세상을 바꾼 '[[블랙-숄즈 방정식|옵션 가격을 결정하는 노벨상 수상 공식이야. 위험을 완전히 제거하는 무위험 포트폴리오를 미분으로 증명해냈지!]]'입니다.",
                    "이 차가운 수학 공식 하나가 수백 년간 이어져 온 월스트리트를 영원히 바꾸었고, 수식을 다루는 퀀트들이 시장을 지배하는 새로운 시대를 열었습니다."
                ]
            };
        }

        // Restore original Chapter 4 (DeFi AMM) to Week 38
        if (i === 38) {
            chapter = {
                id: 38,
                volume: "VOL. 4",
                title: "DeFi와 탈중앙화 금융",
                subtitle: "알고리즘이 마켓 메이커가 되다",
                year: "2018",
                imagePath: '/assets/images/ch4.png',
                tutorialType: 'amm',
                content: [
                    "블랙-숄즈 모형이 쌓아 올린 찬란한 금융 제국은 2008년 금융위기라는 뼈아픈 대가를 치러야 했습니다. 중개자들의 탐욕이 시장을 무너뜨리는 것을 목격한 이름 모를 천재들은 어두운 블록체인의 세계에서 조용한 반란을 준비합니다.",
                    "이들은 복잡한 호가창 시스템을 전부 뜯어내고, 놀랍도록 단순하고 우아한 식 하나를 블록체인 위에 새겨 넣었습니다. 오직 두 자산의 곱은 항상 일정해야 한다(x*y=k)는 원리를 통해, 누군가 호가를 내지 않아도 알고리즘이 스스로 가격을 결정해 주는 '[[AMM|자동화된 마켓 메이커(Automated Market Maker). 인간 없이 수학 공식(x*y=k)만으로 자동으로 가격이 결정되는 혁명적인 시스템이야!]]'를 탄생시킵니다.",
                    "이는 소수에게 독점되던 지식과 부를 투명하게 개방하여 모두와 공유하려는 '헤븐 프로젝트'의 숭고한 정신과 맞닿아, 새로운 우주 시대의 투명한 경제 시스템으로 나아가는 첫걸음이 되고 있습니다."
                ]
            };
        }

        chapters.push(chapter);
    }

    const enChapters = chapters.map(c => ({
        ...c,
        title: c.title + " (EN)", 
        subtitle: c.subtitle + " (EN)",
        content: c.content.map((p: string) => p + " (Translating down the line...)")
    }));

    const fileContent = `export type ChapterType = {
    id: number;
    volume: string | number;
    title: string;
    subtitle: string;
    year: string;
    imagePath?: string;
    content: string[];
    tutorialType: 'compound' | 'randomWalk' | 'amm' | 'blackScholes' | 'portfolio' | 'derivatives' | 'calculus' | 'probability' | 'matrix' | 'behavioral' | 'algorithm' | 'ai';
    tutorialTitle?: string;
    theoryDetail?: {
        title: string;
        content: string[];
    };
};

export const storyContent: Record<string, ChapterType[]> = {
    ko: ${JSON.stringify(chapters, null, 4)},
    en: ${JSON.stringify(enChapters, null, 4)}
};
`;
    fs.writeFileSync(storyPath, fileContent, 'utf-8');
}

// --- Rebuild mathDetails.ts selectively covering the key types ---
function generateMathDetails() {
    // Specifically building Week 1 'compound' based entirely on the user's prompt
    const content = `export type MathDetail = {
    concepts: { name: string; desc: string }[];
    detailedLearning: { title: string; content: string[] }[];
    quizzes: { question: string; options: string[]; answer: number; explanation: string; }[];
    flowchart: { step: number; title: string; desc: string; formula?: string }[];
    discussionAndAssignment?: {
        discussion: string;
        assignment: string;
    };
};

export const mathDetailsContent: Record<string, Record<string, MathDetail>> = {
    ko: {
        compound: {
            concepts: [
                { name: "단리 (Simple Interest)", desc: "원금에 대해서만 이자가 붙는 방식입니다. 이자가 아무리 늘어나도 다음 이자 계산에 영향을 주지 않아요." },
                { name: "복리 (Compound Interest)", desc: "발생한 이자를 원금에 합쳐서 다음 이자를 계산하는 방식이에요. '이자의 이자'가 붙는 진정한 금융의 마법이죠." },
                { name: "지수함수와 일차함수", desc: "단리는 일차함수(직선)처럼 천천히 늘어나지만, 복리는 지수함수(곡선)처럼 폭발적으로 늘어나는 그래프를 그립니다." }
            ],
            detailedLearning: [
                {
                    title: "단리와 복리의 차이 (수학적 원리)",
                    content: [
                        "단리 공식: 총액(S) = 원금(P) × (1 + 이율(r) × 기간(n)). 이는 기울기가 일정하게 증가하는 직선의 방정식 형태입니다.",
                        "복리 공식: 총액(S) = 원금(P) × (1 + 이율(r))^n. 시간이 지날수록 거듭제곱 연산에 의해 자산이 기하급수적으로 부풀어 오르는 아름다운 둥근 곡선을 그립니다."
                    ]
                },
                {
                    title: "72의 법칙 (로그의 맛보기)",
                    content: [
                        "복리 계산에서 원금이 정확히 2배가 되는 시간은 약 '72 / 이자율'로 계산할 수 있습니다.",
                        "예를 들어 연 이율이 6%라면, 72 / 6 = 12년. 즉 12년 뒤에 자산이 두 배가 됩니다. 이 재미있는 공식의 비밀은 4주차에서 배울 로그(log) 함수 속에 숨어 있습니다."
                    ]
                }
            ],
            quizzes: [
                {
                    question: "[문제 1] 철수는 1,000만 원을 연 이율 10%로 저축하려고 합니다. 30년 후 단리 방식과 복리 방식의 수령액 차이는 대략 얼마일까요? (단리는 단순히 %곱하기 년수, 복리는 1.1의 30승으로 생각해보세요)",
                    options: ["1,000만 원", "4,000만 원", "1억 3,450만 원", "차이가 없다"],
                    answer: 2,
                    explanation: "단리 총액은 1000 + (1000 * 0.1 * 30) = 4,000만 원입니다. 그러나 복리 총액은 1000 * (1.1)^30 ≈ 1억 7,449만 원입니다! 두 금액의 차이는 약 1억 3,450만 원에 달합니다."
                },
                {
                    question: "[문제 2] 연 이율이 6%일 때, 72의 법칙을 이용하면 원금이 2배가 되는 데 걸리는 시간은 약 몇 년인가요?",
                    options: ["6년", "10년", "12년", "24년"],
                    answer: 2,
                    explanation: "72를 이자율인 6으로 나누면 됩니다. 72 / 6 = 12. 즉 12년이 걸립니다."
                }
            ],
            flowchart: [
                { step: 1, title: "원금 설정", desc: "초기 투자 금액(P)을 1,000만 원으로 설정합니다." },
                { step: 2, title: "단리 계산 선 그리기", desc: "이자가 원금에만 붙어 직선으로 상승하는 일차함수 그래프 도출.", formula: "S = P(1+rn)" },
                { step: 3, title: "복리 계산 곡선 그리기", desc: "이자에 이자가 붙어 치솟는 지수함수 그래프 도출.", formula: "S = P(1+r)^n" },
                { step: 4, title: "격차 확인", desc: "시간이 지날수록 벌어지는 엄청난 수익의 차이를 확인합니다." }
            ],
            discussionAndAssignment: {
                discussion: "만약 당신이 은행가라면, 대출 고객에게는 어떤 방식을 적용하고 예금 고객에게는 어떤 방식을 권유하겠습니까? 그 이유는 무엇입니까?",
                assignment: "부모님이 가입하신 적금이나 예금 상품의 약관을 확인해보고, 그것이 단리인지 복리인지, 그리고 이율은 얼마인지 조사해 오기."
            }
        },
        // We pad randomWalk, blackScholes, amm with basic valid structures so the app doesn't break
        randomWalk: {
            concepts: [ { name: "랜덤 워크", desc: "준비중" } ],
            detailedLearning: [ { title: "준비중", content: ["준비중"] } ],
            quizzes: [ { question: "Q", options: ["1","2","3","4"], answer: 0, explanation: "A" } ],
            flowchart: [ { step: 1, title: "TBD", desc: "TBD" } ]
        },
        blackScholes: {
            concepts: [ { name: "편미분 방정식", desc: "준비중" } ],
            detailedLearning: [ { title: "준비중", content: ["준비중"] } ],
            quizzes: [ { question: "Q", options: ["1","2","3","4"], answer: 0, explanation: "A" } ],
            flowchart: [ { step: 1, title: "TBD", desc: "TBD" } ]
        },
        amm: {
            concepts: [ { name: "상수곱 공식", desc: "준비중" } ],
            detailedLearning: [ { title: "준비중", content: ["준비중"] } ],
            quizzes: [ { question: "Q", options: ["1","2","3","4"], answer: 0, explanation: "A" } ],
            flowchart: [ { step: 1, title: "TBD", desc: "TBD" } ]
        }
    },
    en: {
        compound: {
            concepts: [ { name: "Simple Interest", desc: "TBD" } ],
            detailedLearning: [ { title: "TBD", content: ["TBD"] } ],
            quizzes: [ { question: "Q", options: ["1","2","3","4"], answer: 0, explanation: "A" } ],
            flowchart: [ { step: 1, title: "TBD", desc: "TBD" } ]
        },
        randomWalk: {
            concepts: [ { name: "Random Walk", desc: "TBD" } ],
            detailedLearning: [ { title: "TBD", content: ["TBD"] } ],
            quizzes: [ { question: "Q", options: ["1","2","3","4"], answer: 0, explanation: "A" } ],
            flowchart: [ { step: 1, title: "TBD", desc: "TBD" } ]
        },
        blackScholes: {
            concepts: [ { name: "Black Scholes", desc: "TBD" } ],
            detailedLearning: [ { title: "TBD", content: ["TBD"] } ],
            quizzes: [ { question: "Q", options: ["1","2","3","4"], answer: 0, explanation: "A" } ],
            flowchart: [ { step: 1, title: "TBD", desc: "TBD" } ]
        },
        amm: {
            concepts: [ { name: "AMM", desc: "TBD" } ],
            detailedLearning: [ { title: "TBD", content: ["TBD"] } ],
            quizzes: [ { question: "Q", options: ["1","2","3","4"], answer: 0, explanation: "A" } ],
            flowchart: [ { step: 1, title: "TBD", desc: "TBD" } ]
        }
    }
};
`;
    fs.writeFileSync(mathPath, content, 'utf-8');
}

generateStoryContent();
generateMathDetails();
console.log('Restored chapter 1 content and preserved app structure.');
