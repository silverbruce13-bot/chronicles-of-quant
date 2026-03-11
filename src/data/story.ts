export type ChapterType = {
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
    ko: [
    {
        "id": 1,
        "volume": "VOL. 1",
        "title": "이자의 탄생",
        "subtitle": "돈에도 '시간의 가격'이 있다",
        "year": "15th C",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[이자의|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "compound"
    },
    {
        "id": 2,
        "volume": "VOL. 1",
        "title": "현재가치와 할인율",
        "subtitle": "내일의 1억보다 오늘의 1억이 비싸다",
        "year": "18th C",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[현재가치와|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "compound"
    },
    {
        "id": 3,
        "volume": "VOL. 1",
        "title": "연금과 할부의 수학",
        "subtitle": "티끌 모아 태산을 만드는 수열",
        "year": "19th C",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[연금과|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "compound"
    },
    {
        "id": 4,
        "volume": "VOL. 1",
        "title": "랜덤 워크의 발견",
        "subtitle": "시장의 움직임은 예측 가능한가?",
        "year": "1900",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[랜덤|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "randomWalk"
    },
    {
        "id": 5,
        "volume": "VOL. 1",
        "title": "대공황과 데이터의 배신",
        "subtitle": "위험을 숫자로 지배하라",
        "year": "1929",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[대공황과|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "randomWalk"
    },
    {
        "id": 6,
        "volume": "VOL. 1",
        "title": "위험은 '흩어짐'이다",
        "subtitle": "변동성 측정과 표준편차",
        "year": "1930s",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[위험은|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "randomWalk"
    },
    {
        "id": 7,
        "volume": "VOL. 1",
        "title": "마코위츠의 혁명",
        "subtitle": "투자의 지도를 바꾸다",
        "year": "1952",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[마코위츠의|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "portfolio"
    },
    {
        "id": 8,
        "volume": "VOL. 1",
        "title": "함께 움직이는 자산들",
        "subtitle": "공분산과 상관관계의 이해",
        "year": "1950s",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[함께|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "portfolio"
    },
    {
        "id": 9,
        "volume": "VOL. 1",
        "title": "상관계수의 마법",
        "subtitle": "-1의 힘과 분산 효과의 극대화",
        "year": "1950s",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[상관계수의|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "portfolio"
    },
    {
        "id": 10,
        "volume": "VOL. 1",
        "title": "효율적 투자선",
        "subtitle": "최적의 위험-수익 조합 찾기",
        "year": "1950s",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[효율적|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "portfolio"
    },
    {
        "id": 11,
        "volume": "VOL. 2",
        "title": "베타와 CAPM",
        "subtitle": "시장보다 얼마나 위험한가?",
        "year": "1960s",
        "imagePath": "/assets/images/ch2.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[베타와|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "portfolio"
    },
    {
        "id": 12,
        "volume": "VOL. 2",
        "title": "샤프 지수 (Sharpe Ratio)",
        "subtitle": "가성비 좋은 투자처 고르기",
        "year": "1966",
        "imagePath": "/assets/images/ch2.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[샤프|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "portfolio"
    },
    {
        "id": 13,
        "volume": "VOL. 2",
        "title": "포트폴리오 설계 실전",
        "subtitle": "실제 주가 데이터로 분산투자하기",
        "year": "Modern",
        "imagePath": "/assets/images/ch2.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[포트폴리오|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "portfolio"
    },
    {
        "id": 14,
        "volume": "VOL. 2",
        "title": "닉슨 쇼크와 환율",
        "subtitle": "고정환율제 붕괴와 헤지의 필요성",
        "year": "1971",
        "imagePath": "/assets/images/ch2.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[닉슨|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "derivatives"
    },
    {
        "id": 15,
        "volume": "VOL. 2",
        "title": "선물(Futures)의 기하학",
        "subtitle": "미래 가격의 직선적 합의",
        "year": "1970s",
        "imagePath": "/assets/images/ch2.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[선물(Futures)의|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "derivatives"
    },
    {
        "id": 16,
        "volume": "VOL. 2",
        "title": "옵션(Option): 권리의 가격",
        "subtitle": "콜과 풋의 수학적 수익 구조",
        "year": "1970s",
        "imagePath": "/assets/images/ch2.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[옵션(Option):|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "derivatives"
    },
    {
        "id": 17,
        "volume": "VOL. 2",
        "title": "순간 변화율과 주가",
        "subtitle": "주가 움직임의 매순간 포착",
        "year": "1970s",
        "imagePath": "/assets/images/ch2.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[순간|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "calculus"
    },
    {
        "id": 18,
        "volume": "VOL. 2",
        "title": "블랙-숄즈 모델의 서막",
        "subtitle": "미분방정식이 금융을 만나다",
        "year": "1973",
        "imagePath": "/assets/images/ch2.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[블랙-숄즈|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "blackScholes"
    },
    {
        "id": 19,
        "volume": "VOL. 2",
        "title": "그릭스(Greeks) - 델타",
        "subtitle": "기초자산의 변화에 따른 민감도",
        "year": "1973",
        "imagePath": "/assets/images/ch2.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[그릭스(Greeks)|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "blackScholes"
    },
    {
        "id": 20,
        "volume": "VOL. 2",
        "title": "중간점검: 퀀트의 사고방식",
        "subtitle": "수학 모델로 시장을 극복하다",
        "year": "1970s",
        "imagePath": "/assets/images/ch2.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[중간점검:|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "calculus"
    },
    {
        "id": 21,
        "volume": "VOL. 3",
        "title": "델타와 동적 헤지",
        "subtitle": "리스크를 실시간으로 중화하다",
        "year": "1980s",
        "imagePath": "/assets/images/ch3.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[델타와|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "blackScholes"
    },
    {
        "id": 22,
        "volume": "VOL. 3",
        "title": "감마(Gamma)의 공포",
        "subtitle": "속도의 속도, 델타의 변화율",
        "year": "1980s",
        "imagePath": "/assets/images/ch3.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[감마(Gamma)의|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "blackScholes"
    },
    {
        "id": 23,
        "volume": "VOL. 3",
        "title": "세타(Theta)와 시간",
        "subtitle": "시간이 흐를수록 깎이는 가치",
        "year": "1980s",
        "imagePath": "/assets/images/ch3.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[세타(Theta)와|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "blackScholes"
    },
    {
        "id": 24,
        "volume": "VOL. 3",
        "title": "베가(Vega)와 변동성",
        "subtitle": "시장이 출렁일 때의 가치 변화",
        "year": "1980s",
        "imagePath": "/assets/images/ch3.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[베가(Vega)와|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "blackScholes"
    },
    {
        "id": 25,
        "volume": "VOL. 3",
        "title": "블랙-숄즈 편미분방정식",
        "subtitle": "옵션 가격 결정 모형의 총합",
        "year": "1973",
        "imagePath": "/assets/images/ch3.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[블랙-숄즈|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "blackScholes"
    },
    {
        "id": 26,
        "volume": "VOL. 3",
        "title": "연속 확률 분포의 이해",
        "subtitle": "로그정규분포와 주가 이동",
        "year": "1980s",
        "imagePath": "/assets/images/ch3.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[연속|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "probability"
    },
    {
        "id": 27,
        "volume": "VOL. 3",
        "title": "누적 분포 함수와 확률",
        "subtitle": "특정 가격대에 도달할 확률",
        "year": "1980s",
        "imagePath": "/assets/images/ch3.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[누적|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "probability"
    },
    {
        "id": 28,
        "volume": "VOL. 3",
        "title": "정적분의 활용",
        "subtitle": "옵션 만기 수익의 합계와 넓이",
        "year": "1980s",
        "imagePath": "/assets/images/ch3.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[정적분의|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "calculus"
    },
    {
        "id": 29,
        "volume": "VOL. 3",
        "title": "시뮬레이터를 통한 헤징",
        "subtitle": "델타 헤징의 실무적 검증",
        "year": "1990s",
        "imagePath": "/assets/images/ch3.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[시뮬레이터를|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "calculus"
    },
    {
        "id": 30,
        "volume": "VOL. 3",
        "title": "나만의 옵션 설계",
        "subtitle": "매개변수를 이용한 옵션가 계산 실습",
        "year": "1990s",
        "imagePath": "/assets/images/ch3.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[나만의|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "calculus"
    },
    {
        "id": 31,
        "volume": "VOL. 4",
        "title": "수학으로 무장한 퀀트",
        "subtitle": "다변수 데이터 처리를 위한 행렬",
        "year": "1990s",
        "imagePath": "/assets/images/ch4.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[수학으로|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "matrix"
    },
    {
        "id": 32,
        "volume": "VOL. 4",
        "title": "다변수 포트폴리오 최적화",
        "subtitle": "공분산 행렬의 연산과 적용",
        "year": "1990s",
        "imagePath": "/assets/images/ch4.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[다변수|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "matrix"
    },
    {
        "id": 33,
        "volume": "VOL. 4",
        "title": "Value at Risk (VaR)",
        "subtitle": "내일 최대 얼마를 잃을까?",
        "year": "1990s",
        "imagePath": "/assets/images/ch4.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[Value|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "probability"
    },
    {
        "id": 34,
        "volume": "VOL. 4",
        "title": "몬테카를로 시뮬레이션",
        "subtitle": "난수를 이용한 가격 예측의 예술",
        "year": "1990s",
        "imagePath": "/assets/images/ch4.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[몬테카를로|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "probability"
    },
    {
        "id": 35,
        "volume": "VOL. 4",
        "title": "행동경제학과 수학의 한계",
        "subtitle": "인간의 심리와 완벽한 수식의 괴리",
        "year": "2000s",
        "imagePath": "/assets/images/ch4.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[행동경제학과|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "behavioral"
    },
    {
        "id": 36,
        "volume": "VOL. 4",
        "title": "서브프라임 비극",
        "subtitle": "완벽해 보였던 상관관계 모델의 붕괴",
        "year": "2008",
        "imagePath": "/assets/images/ch4.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[서브프라임|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "probability"
    },
    {
        "id": 37,
        "volume": "VOL. 4",
        "title": "초단타 알고리즘 매매",
        "subtitle": "기계가 주도하는 밀리초의 전쟁",
        "year": "2010s",
        "imagePath": "/assets/images/ch4.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[초단타|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "algorithm"
    },
    {
        "id": 38,
        "volume": "VOL. 4",
        "title": "DeFi와 탈중앙화 금융",
        "subtitle": "블록체인 위에 세워진 새로운 시장",
        "year": "2018",
        "imagePath": "/assets/images/ch4.png",
        "content": [
            "2008년의 비극 이후, 인간의 개입 없이 코드로만 굴러가는 탈중앙화 시장(DeFi)이 등장했습니다.",
            "AMM(자동화된 마켓 메이커)의 핵심은 [[x * y = k|두 자산의 곱이 항상 일정해야 한다는 상수 수식]]입니다. 수요와 공급이 수학에 의해 완벽하게 컨트롤됩니다.",
            "이러한 투명한 코드는 헤븐 프로젝트가 지향하는 바와 완전히 일치합니다. 중앙화된 권력 없이 시스템이 리스크를 통제하는 이상적인 세계의 서막입니다."
        ],
        "tutorialType": "amm"
    },
    {
        "id": 39,
        "volume": "VOL. 4",
        "title": "AMM: 유동성 풀의 수학",
        "subtitle": "x * y = k, 극적인 단순함의 미학",
        "year": "2018",
        "imagePath": "/assets/images/ch4.png",
        "content": [
            "2008년의 비극 이후, 인간의 개입 없이 코드로만 굴러가는 탈중앙화 시장(DeFi)이 등장했습니다.",
            "AMM(자동화된 마켓 메이커)의 핵심은 [[x * y = k|두 자산의 곱이 항상 일정해야 한다는 상수 수식]]입니다. 수요와 공급이 수학에 의해 완벽하게 컨트롤됩니다.",
            "이러한 투명한 코드는 헤븐 프로젝트가 지향하는 바와 완전히 일치합니다. 중앙화된 권력 없이 시스템이 리스크를 통제하는 이상적인 세계의 서막입니다."
        ],
        "tutorialType": "amm"
    },
    {
        "id": 40,
        "volume": "VOL. 4",
        "title": "헤븐 프로젝트의 비전",
        "subtitle": "AI와 집단지성이 여는 투명한 금융의 미래",
        "year": "2026",
        "imagePath": "/assets/images/ch4.png",
        "content": [
            "우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식이 공유되는 이 곳, 헤븐 프로젝트의 일환으로 역사 속 금융과 수학의 만남을 추적합니다.",
            "이 시기 가장 중요한 것은 [[헤븐|선생님이 설명해주는 핵심 수학과 금융의 의미]]입니다. 이것이 인류의 자산을 어떻게 증식시켰는지 확인해봅시다.",
            "과거의 뼈아픈 교훈이 오늘날 우리를 이 자리로 이끌었습니다. 숫자의 변동성을 이해하는 것이 곧 미래의 리스크를 줄이는 가장 완벽한 방법입니다."
        ],
        "tutorialType": "ai"
    }
],
    en: [
    {
        "id": 1,
        "volume": "VOL. 1",
        "title": "이자의 탄생 (EN)",
        "subtitle": "돈에도 '시간의 가격'이 있다 (EN)",
        "year": "15th C",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "compound"
    },
    {
        "id": 2,
        "volume": "VOL. 1",
        "title": "현재가치와 할인율 (EN)",
        "subtitle": "내일의 1억보다 오늘의 1억이 비싸다 (EN)",
        "year": "18th C",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "compound"
    },
    {
        "id": 3,
        "volume": "VOL. 1",
        "title": "연금과 할부의 수학 (EN)",
        "subtitle": "티끌 모아 태산을 만드는 수열 (EN)",
        "year": "19th C",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "compound"
    },
    {
        "id": 4,
        "volume": "VOL. 1",
        "title": "랜덤 워크의 발견 (EN)",
        "subtitle": "시장의 움직임은 예측 가능한가? (EN)",
        "year": "1900",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "randomWalk"
    },
    {
        "id": 5,
        "volume": "VOL. 1",
        "title": "대공황과 데이터의 배신 (EN)",
        "subtitle": "위험을 숫자로 지배하라 (EN)",
        "year": "1929",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "randomWalk"
    },
    {
        "id": 6,
        "volume": "VOL. 1",
        "title": "위험은 '흩어짐'이다 (EN)",
        "subtitle": "변동성 측정과 표준편차 (EN)",
        "year": "1930s",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "randomWalk"
    },
    {
        "id": 7,
        "volume": "VOL. 1",
        "title": "마코위츠의 혁명 (EN)",
        "subtitle": "투자의 지도를 바꾸다 (EN)",
        "year": "1952",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "portfolio"
    },
    {
        "id": 8,
        "volume": "VOL. 1",
        "title": "함께 움직이는 자산들 (EN)",
        "subtitle": "공분산과 상관관계의 이해 (EN)",
        "year": "1950s",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "portfolio"
    },
    {
        "id": 9,
        "volume": "VOL. 1",
        "title": "상관계수의 마법 (EN)",
        "subtitle": "-1의 힘과 분산 효과의 극대화 (EN)",
        "year": "1950s",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "portfolio"
    },
    {
        "id": 10,
        "volume": "VOL. 1",
        "title": "효율적 투자선 (EN)",
        "subtitle": "최적의 위험-수익 조합 찾기 (EN)",
        "year": "1950s",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "portfolio"
    },
    {
        "id": 11,
        "volume": "VOL. 2",
        "title": "베타와 CAPM (EN)",
        "subtitle": "시장보다 얼마나 위험한가? (EN)",
        "year": "1960s",
        "imagePath": "/assets/images/ch2.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "portfolio"
    },
    {
        "id": 12,
        "volume": "VOL. 2",
        "title": "샤프 지수 (Sharpe Ratio) (EN)",
        "subtitle": "가성비 좋은 투자처 고르기 (EN)",
        "year": "1966",
        "imagePath": "/assets/images/ch2.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "portfolio"
    },
    {
        "id": 13,
        "volume": "VOL. 2",
        "title": "포트폴리오 설계 실전 (EN)",
        "subtitle": "실제 주가 데이터로 분산투자하기 (EN)",
        "year": "Modern",
        "imagePath": "/assets/images/ch2.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "portfolio"
    },
    {
        "id": 14,
        "volume": "VOL. 2",
        "title": "닉슨 쇼크와 환율 (EN)",
        "subtitle": "고정환율제 붕괴와 헤지의 필요성 (EN)",
        "year": "1971",
        "imagePath": "/assets/images/ch2.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "derivatives"
    },
    {
        "id": 15,
        "volume": "VOL. 2",
        "title": "선물(Futures)의 기하학 (EN)",
        "subtitle": "미래 가격의 직선적 합의 (EN)",
        "year": "1970s",
        "imagePath": "/assets/images/ch2.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "derivatives"
    },
    {
        "id": 16,
        "volume": "VOL. 2",
        "title": "옵션(Option): 권리의 가격 (EN)",
        "subtitle": "콜과 풋의 수학적 수익 구조 (EN)",
        "year": "1970s",
        "imagePath": "/assets/images/ch2.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "derivatives"
    },
    {
        "id": 17,
        "volume": "VOL. 2",
        "title": "순간 변화율과 주가 (EN)",
        "subtitle": "주가 움직임의 매순간 포착 (EN)",
        "year": "1970s",
        "imagePath": "/assets/images/ch2.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "calculus"
    },
    {
        "id": 18,
        "volume": "VOL. 2",
        "title": "블랙-숄즈 모델의 서막 (EN)",
        "subtitle": "미분방정식이 금융을 만나다 (EN)",
        "year": "1973",
        "imagePath": "/assets/images/ch2.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "blackScholes"
    },
    {
        "id": 19,
        "volume": "VOL. 2",
        "title": "그릭스(Greeks) - 델타 (EN)",
        "subtitle": "기초자산의 변화에 따른 민감도 (EN)",
        "year": "1973",
        "imagePath": "/assets/images/ch2.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "blackScholes"
    },
    {
        "id": 20,
        "volume": "VOL. 2",
        "title": "중간점검: 퀀트의 사고방식 (EN)",
        "subtitle": "수학 모델로 시장을 극복하다 (EN)",
        "year": "1970s",
        "imagePath": "/assets/images/ch2.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "calculus"
    },
    {
        "id": 21,
        "volume": "VOL. 3",
        "title": "델타와 동적 헤지 (EN)",
        "subtitle": "리스크를 실시간으로 중화하다 (EN)",
        "year": "1980s",
        "imagePath": "/assets/images/ch3.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "blackScholes"
    },
    {
        "id": 22,
        "volume": "VOL. 3",
        "title": "감마(Gamma)의 공포 (EN)",
        "subtitle": "속도의 속도, 델타의 변화율 (EN)",
        "year": "1980s",
        "imagePath": "/assets/images/ch3.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "blackScholes"
    },
    {
        "id": 23,
        "volume": "VOL. 3",
        "title": "세타(Theta)와 시간 (EN)",
        "subtitle": "시간이 흐를수록 깎이는 가치 (EN)",
        "year": "1980s",
        "imagePath": "/assets/images/ch3.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "blackScholes"
    },
    {
        "id": 24,
        "volume": "VOL. 3",
        "title": "베가(Vega)와 변동성 (EN)",
        "subtitle": "시장이 출렁일 때의 가치 변화 (EN)",
        "year": "1980s",
        "imagePath": "/assets/images/ch3.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "blackScholes"
    },
    {
        "id": 25,
        "volume": "VOL. 3",
        "title": "블랙-숄즈 편미분방정식 (EN)",
        "subtitle": "옵션 가격 결정 모형의 총합 (EN)",
        "year": "1973",
        "imagePath": "/assets/images/ch3.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "blackScholes"
    },
    {
        "id": 26,
        "volume": "VOL. 3",
        "title": "연속 확률 분포의 이해 (EN)",
        "subtitle": "로그정규분포와 주가 이동 (EN)",
        "year": "1980s",
        "imagePath": "/assets/images/ch3.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "probability"
    },
    {
        "id": 27,
        "volume": "VOL. 3",
        "title": "누적 분포 함수와 확률 (EN)",
        "subtitle": "특정 가격대에 도달할 확률 (EN)",
        "year": "1980s",
        "imagePath": "/assets/images/ch3.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "probability"
    },
    {
        "id": 28,
        "volume": "VOL. 3",
        "title": "정적분의 활용 (EN)",
        "subtitle": "옵션 만기 수익의 합계와 넓이 (EN)",
        "year": "1980s",
        "imagePath": "/assets/images/ch3.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "calculus"
    },
    {
        "id": 29,
        "volume": "VOL. 3",
        "title": "시뮬레이터를 통한 헤징 (EN)",
        "subtitle": "델타 헤징의 실무적 검증 (EN)",
        "year": "1990s",
        "imagePath": "/assets/images/ch3.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "calculus"
    },
    {
        "id": 30,
        "volume": "VOL. 3",
        "title": "나만의 옵션 설계 (EN)",
        "subtitle": "매개변수를 이용한 옵션가 계산 실습 (EN)",
        "year": "1990s",
        "imagePath": "/assets/images/ch3.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "calculus"
    },
    {
        "id": 31,
        "volume": "VOL. 4",
        "title": "수학으로 무장한 퀀트 (EN)",
        "subtitle": "다변수 데이터 처리를 위한 행렬 (EN)",
        "year": "1990s",
        "imagePath": "/assets/images/ch4.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "matrix"
    },
    {
        "id": 32,
        "volume": "VOL. 4",
        "title": "다변수 포트폴리오 최적화 (EN)",
        "subtitle": "공분산 행렬의 연산과 적용 (EN)",
        "year": "1990s",
        "imagePath": "/assets/images/ch4.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "matrix"
    },
    {
        "id": 33,
        "volume": "VOL. 4",
        "title": "Value at Risk (VaR) (EN)",
        "subtitle": "내일 최대 얼마를 잃을까? (EN)",
        "year": "1990s",
        "imagePath": "/assets/images/ch4.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "probability"
    },
    {
        "id": 34,
        "volume": "VOL. 4",
        "title": "몬테카를로 시뮬레이션 (EN)",
        "subtitle": "난수를 이용한 가격 예측의 예술 (EN)",
        "year": "1990s",
        "imagePath": "/assets/images/ch4.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "probability"
    },
    {
        "id": 35,
        "volume": "VOL. 4",
        "title": "행동경제학과 수학의 한계 (EN)",
        "subtitle": "인간의 심리와 완벽한 수식의 괴리 (EN)",
        "year": "2000s",
        "imagePath": "/assets/images/ch4.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "behavioral"
    },
    {
        "id": 36,
        "volume": "VOL. 4",
        "title": "서브프라임 비극 (EN)",
        "subtitle": "완벽해 보였던 상관관계 모델의 붕괴 (EN)",
        "year": "2008",
        "imagePath": "/assets/images/ch4.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "probability"
    },
    {
        "id": 37,
        "volume": "VOL. 4",
        "title": "초단타 알고리즘 매매 (EN)",
        "subtitle": "기계가 주도하는 밀리초의 전쟁 (EN)",
        "year": "2010s",
        "imagePath": "/assets/images/ch4.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "algorithm"
    },
    {
        "id": 38,
        "volume": "VOL. 4",
        "title": "DeFi와 탈중앙화 금융 (EN)",
        "subtitle": "블록체인 위에 세워진 새로운 시장 (EN)",
        "year": "2018",
        "imagePath": "/assets/images/ch4.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "amm"
    },
    {
        "id": 39,
        "volume": "VOL. 4",
        "title": "AMM: 유동성 풀의 수학 (EN)",
        "subtitle": "x * y = k, 극적인 단순함의 미학 (EN)",
        "year": "2018",
        "imagePath": "/assets/images/ch4.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "amm"
    },
    {
        "id": 40,
        "volume": "VOL. 4",
        "title": "헤븐 프로젝트의 비전 (EN)",
        "subtitle": "AI와 집단지성이 여는 투명한 금융의 미래 (EN)",
        "year": "2026",
        "imagePath": "/assets/images/ch4.png",
        "content": [
            "We work with PaulSam Virtual Team. Tracking the intersection of finance and math throughout history.",
            "The key is understanding the math principle.",
            "Past lessons lead us to the transparent future."
        ],
        "tutorialType": "ai"
    }
]
};
