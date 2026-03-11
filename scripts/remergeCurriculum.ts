import * as fs from 'fs';
import * as path from 'path';
import { storyContent } from '../src/data/story';

const storyPath = path.join(process.cwd(), 'src', 'data', 'story.ts');

const oldKo = storyContent.ko;
const oldEn = storyContent.en;

const newKo = [];
const newEn = [];

for (let i = 1; i <= 40; i++) {
    let vol = Math.floor((i - 1) / 10) + 1;
    
    // Default dummy chapter
    let chapterKo = {
        id: i,
        volume: `VOL. ${vol}`,
        title: `제${i}장 (준비 중)`,
        subtitle: "새로운 금융 수학의 역사",
        year: "TBD",
        tutorialType: 'compound',
        imagePath: '/assets/images/ch1.png',
        content: ["(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"]
    };
    
    let chapterEn = {
        id: i,
        volume: `VOL. ${vol}`,
        title: `Chapter ${i} (TBD)`,
        subtitle: "A New History of Financial Mathematics",
        year: "TBD",
        tutorialType: 'compound',
        imagePath: '/assets/images/ch1.png',
        content: ["(This chapter will be filled with detailed history and mathematical narratives by the PaulSam Virtual Team.)"]
    };

    if (i === 1) {
        // Use user's new content for Week 1 (from old chapter 1 template but updated)
        chapterKo = {
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
            ],
            theoryDetail: oldKo.find(c => c.id === 1)?.theoryDetail // preserve the high quality theory detail from original chapter 1
        };

        chapterEn = {
            id: 1,
            volume: "VOL. 1",
            title: "Birth of Interest",
            subtitle: "Money has a 'Price of Time'",
            year: "15th C",
            imagePath: '/assets/images/ch1.png',
            tutorialType: 'compound',
            content: [
                "During the Age of Discovery in the 15th century, Venetian merchants lent funds to explorers heading out to sea. There was an immense risk of losing all the money if a storm or pirates caused the ship to sink. Merchants began demanding an additional amount on top of the principal as compensation for this 'risk' and the 'time spent waiting', which is the modern concept of [[Interest|It is not simply the cost of borrowing someone else's money, but translating 'time value' and 'uncertainty (risk)' into numbers!]].",
                "Initially, Simple Interest, where interest is carefully applied only to the principal, was used. However, Renaissance merchants and mathematicians soon realized a much more terrifying and enchanting truth: the magic of money breeding interest, and that interest breeding new interest, known as [[Compound Interest|The magic of interest on interest! It's a massive principle where your assets grow exponentially over time like an exponential function.]].",
                "While simple interest grows slowly and predictably like a linear function, compound interest rockets at frightening speeds like a curved exponential function. The mathematical clash between these two functions accumulated massive capital in Europe, which later became the core driving force behind humanity's first 'stock market'."
            ],
            theoryDetail: oldEn.find(c => c.id === 1)?.theoryDetail
        };
    } else if (i === 5) {
        chapterKo = { ...oldKo.find(c => c.id === 2), id: 5, volume: "VOL. 1", title: "1929 대공황과 데이터의 배신", subtitle: "위험을 숫자로 지배하라", year: "1929" };
        chapterEn = { ...oldEn.find(c => c.id === 2), id: 5, volume: "VOL. 1", title: "Great Depression of 1929", subtitle: "Rule risk with numbers", year: "1929" };
    } else if (i === 18) {
        chapterKo = { ...oldKo.find(c => c.id === 3), id: 18, volume: "VOL. 2" };
        chapterEn = { ...oldEn.find(c => c.id === 3), id: 18, volume: "VOL. 2" };
    } else if (i === 38) {
        chapterKo = { ...oldKo.find(c => c.id === 4), id: 38, volume: "VOL. 4" };
        chapterEn = { ...oldEn.find(c => c.id === 4), id: 38, volume: "VOL. 4" };
    }

    newKo.push(chapterKo);
    newEn.push(chapterEn);
}

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
    ko: ${JSON.stringify(newKo, null, 4)},
    en: ${JSON.stringify(newEn, null, 4)}
};
`;

fs.writeFileSync(storyPath, fileContent, 'utf-8');
console.log('Successfully re-generated story.ts while keeping rich original theories.');
