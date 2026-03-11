import * as fs from 'fs';
import * as path from 'path';

// Define the chapters array manually based on user curriculum + existing content
const generateChapters = () => {
    const chapters = [];
    const weeks = [
        // VOL 1
        { v: 1, title: "이자의 탄생", sub: "돈에도 '시간의 가격'이 있다", type: "compound", year: "15th C" },
        { v: 1, title: "현재가치와 할인율", sub: "내일의 1억보다 오늘의 1억이 비싸다", type: "compound", year: "18th C" },
        { v: 1, title: "연금과 할부의 수학", sub: "티끌 모아 태산을 만드는 수열", type: "compound", year: "19th C" },
        { v: 1, title: "랜덤 워크의 발견", sub: "시장의 움직임은 예측 가능한가?", type: "randomWalk", year: "1900" }, // Added from current
        { v: 1, title: "대공황과 데이터의 배신", sub: "위험을 숫자로 지배하라", type: "randomWalk", year: "1929" },
        { v: 1, title: "위험은 '흩어짐'이다", sub: "변동성 측정과 표준편차", type: "randomWalk", year: "1930s" },
        { v: 1, title: "마코위츠의 혁명", sub: "투자의 지도를 바꾸다", type: "portfolio", year: "1952" },
        { v: 1, title: "함께 움직이는 자산들", sub: "공분산과 상관관계의 이해", type: "portfolio", year: "1950s" },
        { v: 1, title: "상관계수의 마법", sub: "-1의 힘과 분산 효과의 극대화", type: "portfolio", year: "1950s" },
        { v: 1, title: "효율적 투자선", sub: "최적의 위험-수익 조합 찾기", type: "portfolio", year: "1950s" },
        
        // VOL 2
        { v: 2, title: "베타와 CAPM", sub: "시장보다 얼마나 위험한가?", type: "portfolio", year: "1960s" },
        { v: 2, title: "샤프 지수 (Sharpe Ratio)", sub: "가성비 좋은 투자처 고르기", type: "portfolio", year: "1966" },
        { v: 2, title: "포트폴리오 설계 실전", sub: "실제 주가 데이터로 분산투자하기", type: "portfolio", year: "Modern" },
        { v: 2, title: "닉슨 쇼크와 환율", sub: "고정환율제 붕괴와 헤지의 필요성", type: "derivatives", year: "1971" },
        { v: 2, title: "선물(Futures)의 기하학", sub: "미래 가격의 직선적 합의", type: "derivatives", year: "1970s" },
        { v: 2, title: "옵션(Option): 권리의 가격", sub: "콜과 풋의 수학적 수익 구조", type: "derivatives", year: "1970s" },
        { v: 2, title: "순간 변화율과 주가", sub: "주가 움직임의 매순간 포착", type: "calculus", year: "1970s" },
        { v: 2, title: "블랙-숄즈 모델의 서막", sub: "미분방정식이 금융을 만나다", type: "blackScholes", year: "1973" },
        { v: 2, title: "그릭스(Greeks) - 델타", sub: "기초자산의 변화에 따른 민감도", type: "blackScholes", year: "1973" },
        { v: 2, title: "중간점검: 퀀트의 사고방식", sub: "수학 모델로 시장을 극복하다", type: "calculus", year: "1970s" },

        // VOL 3
        { v: 3, title: "델타와 동적 헤지", 실전: true, sub: "리스크를 실시간으로 중화하다", type: "blackScholes", year: "1980s" },
        { v: 3, title: "감마(Gamma)의 공포", sub: "속도의 속도, 델타의 변화율", type: "blackScholes", year: "1980s" },
        { v: 3, title: "세타(Theta)와 시간", sub: "시간이 흐를수록 깎이는 가치", type: "blackScholes", year: "1980s" },
        { v: 3, title: "베가(Vega)와 변동성", sub: "시장이 출렁일 때의 가치 변화", type: "blackScholes", year: "1980s" },
        { v: 3, title: "블랙-숄즈 편미분방정식", sub: "옵션 가격 결정 모형의 총합", type: "blackScholes", year: "1973" },
        { v: 3, title: "연속 확률 분포의 이해", sub: "로그정규분포와 주가 이동", type: "probability", year: "1980s" },
        { v: 3, title: "누적 분포 함수와 확률", sub: "특정 가격대에 도달할 확률", type: "probability", year: "1980s" },
        { v: 3, title: "정적분의 활용", sub: "옵션 만기 수익의 합계와 넓이", type: "calculus", year: "1980s" },
        { v: 3, title: "시뮬레이터를 통한 헤징", sub: "델타 헤징의 실무적 검증", type: "calculus", year: "1990s" },
        { v: 3, title: "나만의 옵션 설계", sub: "매개변수를 이용한 옵션가 계산 실습", type: "calculus", year: "1990s" },

        // VOL 4
        { v: 4, title: "수학으로 무장한 퀀트", sub: "다변수 데이터 처리를 위한 행렬", type: "matrix", year: "1990s" },
        { v: 4, title: "다변수 포트폴리오 최적화", sub: "공분산 행렬의 연산과 적용", type: "matrix", year: "1990s" },
        { v: 4, title: "Value at Risk (VaR)", sub: "내일 최대 얼마를 잃을까?", type: "probability", year: "1990s" },
        { v: 4, title: "몬테카를로 시뮬레이션", sub: "난수를 이용한 가격 예측의 예술", type: "probability", year: "1990s" },
        { v: 4, title: "행동경제학과 수학의 한계", sub: "인간의 심리와 완벽한 수식의 괴리", type: "behavioral", year: "2000s" },
        { v: 4, title: "서브프라임 비극", sub: "완벽해 보였던 상관관계 모델의 붕괴", type: "probability", year: "2008" },
        { v: 4, title: "초단타 알고리즘 매매", sub: "기계가 주도하는 밀리초의 전쟁", type: "algorithm", year: "2010s" },
        { v: 4, title: "DeFi와 탈중앙화 금융", sub: "블록체인 위에 세워진 새로운 시장", type: "amm", year: "2018" }, // Preserved from current structure!
        { v: 4, title: "AMM: 유동성 풀의 수학", sub: "x * y = k, 극적인 단순함의 미학", type: "amm", year: "2018" },  // Preserved AMM details
        { v: 4, title: "헤븐 프로젝트의 비전", sub: "AI와 집단지성이 여는 투명한 금융의 미래", type: "ai", year: "2026" } // AI, Virtual team, Heaven project
    ];

    for (let i = 0; i < weeks.length; i++) {
        const id = i + 1;
        const info = weeks[i];
        
        let introTemplate = "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.";
        let mathContentTemplate = `이 시기 가장 중요한 것은 [[${info.title.split(' ')[0]}|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.`;
        let endingTemplate = `과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다.`;

        // Make the AMM / Heaven Project ones special
        if (info.type === 'amm') {
            introTemplate = "2008년의 비극 이후, 인간의 개입 없이 코드로만 굴러가는 탈중앙화 시장(DeFi)이 등장했습니다.";
            mathContentTemplate = `AMM(자동화된 마켓 메이커)의 핵심은 [[x * y = k|두 자산의 곱이 항상 일정해야 한다는 상수 수식]]입니다. 수요와 공급이 수학에 의해 완벽하게 컨트롤됩니다.`;
            endingTemplate = `이러한 투명한 코드는 헤븐 프로젝트가 지향하는 바와 완전히 일치합니다. 중앙화된 권력 없이 시스템이 리스크를 통제하는 이상적인 세계의 서막입니다.`;
        }

        chapters.push({
            id: id,
            volume: `VOL. ${info.v}`,
            year: info.year,
            tutorialType: info.type,
            imagePath: `/assets/images/ch${info.v}.png`, // Reusing 4 images
            ko: {
                title: info.title,
                subtitle: info.sub,
                content: [
                    introTemplate,
                    mathContentTemplate,
                    endingTemplate
                ]
            },
            en: {
                title: info.title + " (EN)",
                subtitle: info.sub + " (EN)",
                content: [
                    "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
                    "The key is understanding the math principle.",
                    "Past lessons lead us to the transparent future."
                ]
            }
        });
    }

    return chapters;
};

const outputPath = path.join(process.cwd(), 'src', 'data', 'generated_40_chapters.json');
fs.writeFileSync(outputPath, JSON.stringify(generateChapters(), null, 2), 'utf-8');
console.log('Successfully generated 40 chapters manually mapped logic.');
