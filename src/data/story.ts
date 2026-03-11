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
        "title": "이자(Interest)의 탄생",
        "subtitle": "돈에도 '시간의 가격'이 있다",
        "year": "15th C",
        "imagePath": "/assets/images/ch1.png",
        "tutorialType": "compound",
        "content": [
            "15세기 대항해 시대, 이탈리아 베니스의 상인들은 먼 바다로 나가는 탐험가들에게 자금을 빌려주었습니다. 폭풍우나 해적을 만나 배가 침몰하면 돈을 모두 잃는 엄청난 리스크가 있었죠. 상인들은 이 '위험'과 '기다리는 시간'에 대한 대가로 원금 외에 추가 금액을 요구하기 시작했는데, 이것이 현대적 의미의 [[이자|단순하게 남의 돈을 빌려 쓰는 비용이 아니라, '시간의 가치'와 '불확실성(리스크)'을 숫자로 바꾼 거란다!]]입니다.",
            "초기에는 원금에 대해서만 조심스럽게 이자를 매기는 단리(Simple Interest)가 쓰였습니다. 하지만 르네상스 시대의 상인들과 수학자들은 머지않아 훨씬 무섭고도 매혹적인 진실, 돈이 이자를 낳고 그 이자가 다시 이자를 낳는 [[복리|이자에 이자가 붙는 마법! 시간에 따라 자산이 지수함수 모양으로 급격히 증가하는 어마어마한 원리란다.]]의 마법을 깨닫게 됩니다.",
            "단리가 일차함수처럼 예측 가능하게 직선으로 느릿느릿 증가한다면, 복리는 지수함수처럼 곡선을 그리며 무서운 속도로 치솟습니다. 이 두 함수의 수학적 대결은 유럽에 거대한 자본을 축적시켰고, 이 자본은 훗날 인류 최초의 '주식 시장'이라는 거대한 무대를 탄생시키는 핵심 원동력이 되었습니다."
        ]
    },
    {
        "id": 2,
        "volume": "VOL. 1",
        "title": "제2장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 3,
        "volume": "VOL. 1",
        "title": "제3장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 4,
        "volume": "VOL. 1",
        "title": "제4장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 5,
        "volume": "VOL. 1",
        "title": "1929 대공황과 데이터의 배신",
        "subtitle": "위험을 숫자로 지배하라",
        "year": "1929",
        "imagePath": "/assets/images/ch2.png",
        "tutorialType": "randomWalk",
        "content": [
            "복리의 마법으로 축적된 거대한 자본은 주식 시장으로 흘러들어갔고, 수많은 사람들은 가격이 오를지 내릴지 예측하려는 끝없는 욕망에 사로잡혔습니다. 하지만 1900년, 루이 바슐리에라는 수학자는 극단적인 진실에 도달하게 됩니다.",
            "그는 과거의 어떠한 패턴이나 데이터도 내일의 주가를 알려주지 못한다는 사실을 증명했습니다. 시장 가격은 마치 술 취한 사람의 걸음걸이처럼 이리저리 무작위로 표류하는 '[[랜덤워크|과거의 움직임이 미래의 방향을 전혀 예측해주지 못하는 무작위의 상태를 말해!]]'를 따른다는 것입니다.",
            "대공황을 겪은 후 학자들은 방향은 예측할 수 없어도, 주가가 얼마나 격렬하게 흔들리는지, 즉 '분산과 표준편차'라는 이름의 변동성은 수학적으로 정밀하게 측정할 수 있다는 위대한 사실을 깨닫게 됩니다."
        ]
    },
    {
        "id": 6,
        "volume": "VOL. 1",
        "title": "제6장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 7,
        "volume": "VOL. 1",
        "title": "제7장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 8,
        "volume": "VOL. 1",
        "title": "제8장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 9,
        "volume": "VOL. 1",
        "title": "제9장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 10,
        "volume": "VOL. 1",
        "title": "제10장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 11,
        "volume": "VOL. 2",
        "title": "제11장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 12,
        "volume": "VOL. 2",
        "title": "제12장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 13,
        "volume": "VOL. 2",
        "title": "제13장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 14,
        "volume": "VOL. 2",
        "title": "제14장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 15,
        "volume": "VOL. 2",
        "title": "제15장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 16,
        "volume": "VOL. 2",
        "title": "제16장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 17,
        "volume": "VOL. 2",
        "title": "제17장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 18,
        "volume": "VOL. 2",
        "title": "블랙-숄즈 모델의 서막",
        "subtitle": "미분이 파생상품의 가격을 매기다",
        "year": "1973",
        "imagePath": "/assets/images/ch3.png",
        "tutorialType": "blackScholes",
        "content": [
            "바슐리에가 발견한 '예측 불가능성'은 전 세계 투자자들에게 엄청난 공포였습니다. 사람들은 내 자산을 안전하게 지켜줄 일종의 보험인 '옵션'이라는 방패를 원했습니다. 하지만 이 방패의 적당한 가격이 얼마인지는 아무도 몰랐죠.",
            "이때 시카고의 천재 학자들(블랙, 숄스, 머튼)이 물리학의 열전도 편미분 방정식을 금융 시장에 가져왔습니다. 그리고 주식과 옵션을 정교한 비율로 섞어 위험(Risk)을 완벽하게 '0'으로 지워버리는 기적과도 같은 계산을 해냅니다. 이것이 바로 세상을 바꾼 '[[블랙-숄즈 방정식|옵션 가격을 결정하는 노벨상 수상 공식이야. 위험을 완전히 제거하는 무위험 포트폴리오를 미분으로 증명해냈지!]]'입니다.",
            "이 차가운 수학 공식 하나가 수백 년간 이어져 온 월스트리트를 영원히 바꾸었고, 수식을 다루는 퀀트들이 시장을 지배하는 새로운 시대를 열었습니다."
        ]
    },
    {
        "id": 19,
        "volume": "VOL. 2",
        "title": "제19장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 20,
        "volume": "VOL. 2",
        "title": "제20장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 21,
        "volume": "VOL. 3",
        "title": "제21장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 22,
        "volume": "VOL. 3",
        "title": "제22장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 23,
        "volume": "VOL. 3",
        "title": "제23장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 24,
        "volume": "VOL. 3",
        "title": "제24장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 25,
        "volume": "VOL. 3",
        "title": "제25장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 26,
        "volume": "VOL. 3",
        "title": "제26장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 27,
        "volume": "VOL. 3",
        "title": "제27장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 28,
        "volume": "VOL. 3",
        "title": "제28장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 29,
        "volume": "VOL. 3",
        "title": "제29장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 30,
        "volume": "VOL. 3",
        "title": "제30장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 31,
        "volume": "VOL. 4",
        "title": "제31장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 32,
        "volume": "VOL. 4",
        "title": "제32장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 33,
        "volume": "VOL. 4",
        "title": "제33장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 34,
        "volume": "VOL. 4",
        "title": "제34장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 35,
        "volume": "VOL. 4",
        "title": "제35장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 36,
        "volume": "VOL. 4",
        "title": "제36장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 37,
        "volume": "VOL. 4",
        "title": "제37장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 38,
        "volume": "VOL. 4",
        "title": "DeFi와 탈중앙화 금융",
        "subtitle": "알고리즘이 마켓 메이커가 되다",
        "year": "2018",
        "imagePath": "/assets/images/ch4.png",
        "tutorialType": "amm",
        "content": [
            "블랙-숄즈 모형이 쌓아 올린 찬란한 금융 제국은 2008년 금융위기라는 뼈아픈 대가를 치러야 했습니다. 중개자들의 탐욕이 시장을 무너뜨리는 것을 목격한 이름 모를 천재들은 어두운 블록체인의 세계에서 조용한 반란을 준비합니다.",
            "이들은 복잡한 호가창 시스템을 전부 뜯어내고, 놀랍도록 단순하고 우아한 식 하나를 블록체인 위에 새겨 넣었습니다. 오직 두 자산의 곱은 항상 일정해야 한다(x*y=k)는 원리를 통해, 누군가 호가를 내지 않아도 알고리즘이 스스로 가격을 결정해 주는 '[[AMM|자동화된 마켓 메이커(Automated Market Maker). 인간 없이 수학 공식(x*y=k)만으로 자동으로 가격이 결정되는 혁명적인 시스템이야!]]'를 탄생시킵니다.",
            "이는 소수에게 독점되던 지식과 부를 투명하게 개방하여 모두와 공유하려는 '헤븐 프로젝트'의 숭고한 정신과 맞닿아, 새로운 우주 시대의 투명한 경제 시스템으로 나아가는 첫걸음이 되고 있습니다."
        ]
    },
    {
        "id": 39,
        "volume": "VOL. 4",
        "title": "제39장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    },
    {
        "id": 40,
        "volume": "VOL. 4",
        "title": "제40장 (준비 중)",
        "subtitle": "새로운 금융 수학의 역사",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.)"
        ]
    }
],
    en: [
    {
        "id": 1,
        "volume": "VOL. 1",
        "title": "이자(Interest)의 탄생 (EN)",
        "subtitle": "돈에도 '시간의 가격'이 있다 (EN)",
        "year": "15th C",
        "imagePath": "/assets/images/ch1.png",
        "tutorialType": "compound",
        "content": [
            "15세기 대항해 시대, 이탈리아 베니스의 상인들은 먼 바다로 나가는 탐험가들에게 자금을 빌려주었습니다. 폭풍우나 해적을 만나 배가 침몰하면 돈을 모두 잃는 엄청난 리스크가 있었죠. 상인들은 이 '위험'과 '기다리는 시간'에 대한 대가로 원금 외에 추가 금액을 요구하기 시작했는데, 이것이 현대적 의미의 [[이자|단순하게 남의 돈을 빌려 쓰는 비용이 아니라, '시간의 가치'와 '불확실성(리스크)'을 숫자로 바꾼 거란다!]]입니다. (Translating down the line...)",
            "초기에는 원금에 대해서만 조심스럽게 이자를 매기는 단리(Simple Interest)가 쓰였습니다. 하지만 르네상스 시대의 상인들과 수학자들은 머지않아 훨씬 무섭고도 매혹적인 진실, 돈이 이자를 낳고 그 이자가 다시 이자를 낳는 [[복리|이자에 이자가 붙는 마법! 시간에 따라 자산이 지수함수 모양으로 급격히 증가하는 어마어마한 원리란다.]]의 마법을 깨닫게 됩니다. (Translating down the line...)",
            "단리가 일차함수처럼 예측 가능하게 직선으로 느릿느릿 증가한다면, 복리는 지수함수처럼 곡선을 그리며 무서운 속도로 치솟습니다. 이 두 함수의 수학적 대결은 유럽에 거대한 자본을 축적시켰고, 이 자본은 훗날 인류 최초의 '주식 시장'이라는 거대한 무대를 탄생시키는 핵심 원동력이 되었습니다. (Translating down the line...)"
        ]
    },
    {
        "id": 2,
        "volume": "VOL. 1",
        "title": "제2장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 3,
        "volume": "VOL. 1",
        "title": "제3장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 4,
        "volume": "VOL. 1",
        "title": "제4장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 5,
        "volume": "VOL. 1",
        "title": "1929 대공황과 데이터의 배신 (EN)",
        "subtitle": "위험을 숫자로 지배하라 (EN)",
        "year": "1929",
        "imagePath": "/assets/images/ch2.png",
        "tutorialType": "randomWalk",
        "content": [
            "복리의 마법으로 축적된 거대한 자본은 주식 시장으로 흘러들어갔고, 수많은 사람들은 가격이 오를지 내릴지 예측하려는 끝없는 욕망에 사로잡혔습니다. 하지만 1900년, 루이 바슐리에라는 수학자는 극단적인 진실에 도달하게 됩니다. (Translating down the line...)",
            "그는 과거의 어떠한 패턴이나 데이터도 내일의 주가를 알려주지 못한다는 사실을 증명했습니다. 시장 가격은 마치 술 취한 사람의 걸음걸이처럼 이리저리 무작위로 표류하는 '[[랜덤워크|과거의 움직임이 미래의 방향을 전혀 예측해주지 못하는 무작위의 상태를 말해!]]'를 따른다는 것입니다. (Translating down the line...)",
            "대공황을 겪은 후 학자들은 방향은 예측할 수 없어도, 주가가 얼마나 격렬하게 흔들리는지, 즉 '분산과 표준편차'라는 이름의 변동성은 수학적으로 정밀하게 측정할 수 있다는 위대한 사실을 깨닫게 됩니다. (Translating down the line...)"
        ]
    },
    {
        "id": 6,
        "volume": "VOL. 1",
        "title": "제6장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 7,
        "volume": "VOL. 1",
        "title": "제7장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 8,
        "volume": "VOL. 1",
        "title": "제8장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 9,
        "volume": "VOL. 1",
        "title": "제9장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 10,
        "volume": "VOL. 1",
        "title": "제10장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 11,
        "volume": "VOL. 2",
        "title": "제11장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 12,
        "volume": "VOL. 2",
        "title": "제12장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 13,
        "volume": "VOL. 2",
        "title": "제13장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 14,
        "volume": "VOL. 2",
        "title": "제14장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 15,
        "volume": "VOL. 2",
        "title": "제15장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 16,
        "volume": "VOL. 2",
        "title": "제16장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 17,
        "volume": "VOL. 2",
        "title": "제17장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 18,
        "volume": "VOL. 2",
        "title": "블랙-숄즈 모델의 서막 (EN)",
        "subtitle": "미분이 파생상품의 가격을 매기다 (EN)",
        "year": "1973",
        "imagePath": "/assets/images/ch3.png",
        "tutorialType": "blackScholes",
        "content": [
            "바슐리에가 발견한 '예측 불가능성'은 전 세계 투자자들에게 엄청난 공포였습니다. 사람들은 내 자산을 안전하게 지켜줄 일종의 보험인 '옵션'이라는 방패를 원했습니다. 하지만 이 방패의 적당한 가격이 얼마인지는 아무도 몰랐죠. (Translating down the line...)",
            "이때 시카고의 천재 학자들(블랙, 숄스, 머튼)이 물리학의 열전도 편미분 방정식을 금융 시장에 가져왔습니다. 그리고 주식과 옵션을 정교한 비율로 섞어 위험(Risk)을 완벽하게 '0'으로 지워버리는 기적과도 같은 계산을 해냅니다. 이것이 바로 세상을 바꾼 '[[블랙-숄즈 방정식|옵션 가격을 결정하는 노벨상 수상 공식이야. 위험을 완전히 제거하는 무위험 포트폴리오를 미분으로 증명해냈지!]]'입니다. (Translating down the line...)",
            "이 차가운 수학 공식 하나가 수백 년간 이어져 온 월스트리트를 영원히 바꾸었고, 수식을 다루는 퀀트들이 시장을 지배하는 새로운 시대를 열었습니다. (Translating down the line...)"
        ]
    },
    {
        "id": 19,
        "volume": "VOL. 2",
        "title": "제19장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 20,
        "volume": "VOL. 2",
        "title": "제20장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 21,
        "volume": "VOL. 3",
        "title": "제21장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 22,
        "volume": "VOL. 3",
        "title": "제22장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 23,
        "volume": "VOL. 3",
        "title": "제23장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 24,
        "volume": "VOL. 3",
        "title": "제24장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 25,
        "volume": "VOL. 3",
        "title": "제25장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 26,
        "volume": "VOL. 3",
        "title": "제26장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 27,
        "volume": "VOL. 3",
        "title": "제27장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 28,
        "volume": "VOL. 3",
        "title": "제28장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 29,
        "volume": "VOL. 3",
        "title": "제29장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 30,
        "volume": "VOL. 3",
        "title": "제30장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 31,
        "volume": "VOL. 4",
        "title": "제31장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 32,
        "volume": "VOL. 4",
        "title": "제32장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 33,
        "volume": "VOL. 4",
        "title": "제33장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 34,
        "volume": "VOL. 4",
        "title": "제34장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 35,
        "volume": "VOL. 4",
        "title": "제35장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 36,
        "volume": "VOL. 4",
        "title": "제36장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 37,
        "volume": "VOL. 4",
        "title": "제37장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 38,
        "volume": "VOL. 4",
        "title": "DeFi와 탈중앙화 금융 (EN)",
        "subtitle": "알고리즘이 마켓 메이커가 되다 (EN)",
        "year": "2018",
        "imagePath": "/assets/images/ch4.png",
        "tutorialType": "amm",
        "content": [
            "블랙-숄즈 모형이 쌓아 올린 찬란한 금융 제국은 2008년 금융위기라는 뼈아픈 대가를 치러야 했습니다. 중개자들의 탐욕이 시장을 무너뜨리는 것을 목격한 이름 모를 천재들은 어두운 블록체인의 세계에서 조용한 반란을 준비합니다. (Translating down the line...)",
            "이들은 복잡한 호가창 시스템을 전부 뜯어내고, 놀랍도록 단순하고 우아한 식 하나를 블록체인 위에 새겨 넣었습니다. 오직 두 자산의 곱은 항상 일정해야 한다(x*y=k)는 원리를 통해, 누군가 호가를 내지 않아도 알고리즘이 스스로 가격을 결정해 주는 '[[AMM|자동화된 마켓 메이커(Automated Market Maker). 인간 없이 수학 공식(x*y=k)만으로 자동으로 가격이 결정되는 혁명적인 시스템이야!]]'를 탄생시킵니다. (Translating down the line...)",
            "이는 소수에게 독점되던 지식과 부를 투명하게 개방하여 모두와 공유하려는 '헤븐 프로젝트'의 숭고한 정신과 맞닿아, 새로운 우주 시대의 투명한 경제 시스템으로 나아가는 첫걸음이 되고 있습니다. (Translating down the line...)"
        ]
    },
    {
        "id": 39,
        "volume": "VOL. 4",
        "title": "제39장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    },
    {
        "id": 40,
        "volume": "VOL. 4",
        "title": "제40장 (준비 중) (EN)",
        "subtitle": "새로운 금융 수학의 역사 (EN)",
        "year": "TBD",
        "tutorialType": "compound",
        "imagePath": "/assets/images/ch1.png",
        "content": [
            "(이 챕터는 폴샘 버추얼팀과 함께 상세한 역사와 수학적 서사로 채워질 예정입니다.) (Translating down the line...)"
        ]
    }
]
};
