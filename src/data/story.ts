export type ChapterType = {
    id: number;
    volume: number;
    title: string;
    subtitle: string;
    year: string;
    imagePath?: string;
    content: string[];
    tutorialType: 'compound' | 'randomWalk' | 'amm' | 'blackScholes';
    tutorialTitle?: string;
    theoryDetail?: {
        title: string;
        content: string[];
    };
};

export const storyContent: Record<string, ChapterType[]> = {
    ko: [
        {
            id: 1,
            volume: 1,
            title: "바빌론의 점토판",
            subtitle: "이자의 탄생과 시간의 가치",
            year: "B.C. 2000",
            imagePath: '/assets/images/ch1.png',
            content: [
                "메소포타미아의 뜨거운 태양 아래, 상인들은 흙으로 빛어낸 점토판에 곡물과 가축을 빌려주고 그 대가로 더 많은 것을 돌려받는 최초의 규약을 새겨 넣었습니다. 인류 역사상 처음으로 '이자'라는 개념이 탄생하는 순간이었죠.",
                "초기에는 원금에 대해서만 조심스럽게 이자를 매기는 '단리'가 쓰였지만, 르네상스 시대의 거상들과 수학자들은 머지않아 훨씬 무섭고도 매혹적인 진실을 깨닫게 됩니다. 돈이 이자를 낳고, 그 태어난 이자가 다시 새로운 이자를 낳는 기하급수적인 증식, 바로 '[[복리|안녕! 일타 강사 쌤이야! 복리는 이자에 이자가 붙는 마법이야. 눈덩이를 굴리면 처음엔 작지만 나중엔 집채만 해지잖아? 돈도 그렇게 불어나는 거지!]]'의 마법이었습니다.",
                "이 거대한 시간의 무기는 단순한 덧셈을 폭발적인 곱셈으로 바꾸어 놓았습니다. 고대 수학자들은 원금이 대체 언제 두 배로 불어나는지를 가늠하기 위해 치열하게 머리를 맞댔고, 이는 훗날 '72의 법칙'이라는 직관적 공식으로 완성되었습니다. 복리라는 괴물은 거대한 자본을 축적시켰고, 이 자본은 머지않아 인류 최초의 '주식 시장'이라는 거대한 투기장을 탄생시킬 거름이 됩니다."
            ],
            tutorialType: 'compound',
            theoryDetail: {
                title: "시간의 마법, 복리 (Compound Interest)",
                content: [
                    "단리(Simple Interest)는 원금에 대해서만 이자가 붙는 방식입니다. 반면 복리(Compound Interest)는 원금과 그동안 쌓인 이자를 합친 금액에 다시 이자가 붙는 방식입니다.",
                    "아인슈타인이 '세계 8대 불가사의'라고 불렀을 만큼, 시간이 지날수록 자산이 기하급수적으로 늘어나는 강력한 힘을 가집니다.",
                    "72의 법칙을 사용하면 자산이 두 배가 되는 데 걸리는 시간을 쉽게 계산할 수 있습니다 (72 ÷ 연수익률)."
                ]
            }
        },
        {
            id: 2,
            volume: 2,
            title: "브라운 운동과 예측 불가능성",
            subtitle: "시장의 랜덤워크",
            year: "1900",
            imagePath: '/assets/images/ch2.png',
            content: [
                "복리의 마법으로 축적된 거대한 자본은 주식 시장으로 흘러들어갔고, 수많은 사람들은 가격이 오를지 내릴지 예측하려는 끝없는 욕망에 사로잡혔습니다. 1900년, 파리 증권거래소의 광기 어린 외침 속에서, 루이 바슐리에라는 이름 모를 젊은 수학자는 군중과는 전혀 다른 곳을 바라보고 있었습니다.",
                "그는 과거의 어떠한 패턴이나 호재, 악재도 내일의 주가를 알려주지 못한다는 섬뜩한 진실을 수학적으로 증명해냈습니다. 시장 가격은 마치 물 위에 떠 있는 꽃가루처럼 이리저리 부딪히며 무작위로 표류할 뿐이라는 것이죠. 내일의 주가는 오직 오늘의 주가에 아무런 방향성 없는 '[[랜덤워크|마치 술 취한 사람의 걸음걸이처럼, 과거의 움직임이 미래의 방향을 전혀 예측해주지 못하는 상태를 말해요!]]'를 더한 것과 같았습니다.",
                "당대의 당대 최고의 수학자들조차 '시장이 그저 우연의 장난일 뿐'이라는 그의 이론을 비웃으며 철저히 외면했습니다. 하지만 반세기가 지나서야, 방향은 예측할 수 없어도 그 '흔들리는 정도(변동성)'만큼은 수학적으로 측량할 수 있다는 사실이 밝혀지며, 이 잊혀진 논문은 현대 퀀트 금융을 쌓아 올리는 가장 거대한 주춧돌로 화려하게 부활하게 됩니다."
            ],
            tutorialType: 'randomWalk',
            theoryDetail: {
                title: "랜덤 워크 (Random Walk Theory)",
                content: [
                    "주식 시장의 가격 변동이 과거의 기록과 독립적이며 확률적이라는 이론입니다.",
                    "따라서 기술적 분석(차트 분석)만으로는 초과 수익을 내기 어렵다는 효율적 시장 가설(EMH)과 깊은 연관이 있습니다.",
                    "수학적으로는 Winer Process(위너 과정)로 모델링되며, 이는 블랙-숄스 모형의 핵심 가정이 됩니다."
                ]
            }
        },
        {
            id: 3,
            volume: 3,
            title: "블랙-숄스 모형",
            subtitle: "파생상품의 가격을 매기다",
            year: "1973",
            imagePath: '/assets/images/ch3.png',
            content: [
                "바슐리에가 발견한 '예측 불가능성'은 1970년대 이르러 전 세계 투자자들에게 엄청난 공포로 다가왔습니다. 주가가 미친 듯이 요동치는 이 무작위의 폭풍 속에서, 사람들은 내 자산을 안전하게 지켜줄 일종의 보험인 '옵션'이라는 방패를 원했습니다. 하지만 이 방패의 적당한 가격이 얼마인지는 아무도 몰랐습니다.",
                "이때 시카고의 천재 학자들(블랙, 숄스, 머튼)이 등장합니다. 그들은 금속을 타고 퍼져나가는 열의 흐름을 계산하는 물리학의 열전도 방정식을 금융 시장에 가져왔습니다. 그리고 주식과 옵션을 정교한 비율로 섞어 위험(Risk)을 완벽하게 '0'으로 지워버리는 기적과도 같은 계산을 해냅니다. 이것이 바로 세상을 바꾼 '[[블랙-숄스 방정식|옵션 가격을 결정하는 노벨상 수상 공식이야. 위험을 완전히 제거하는 포트폴리오(무위험 헤지)를 수학적으로 증명해냈지!]]'입니다.",
                "이 아름답고 차가운 공식 하나가 수백 년간 이어져 온 야성의 월스트리트를 영원히 바꾸어 놓았습니다. 직감과 짐작으로 거래하던 트레이더들의 자리를 수식을 다루는 '로켓 과학자'들이 대체했고, 인류 역사상 그 유례를 찾아볼 수 없을 만큼 거대한 수백조 달러 규모의 파생상품 제국이 탄생하게 됩니다."
            ],
            tutorialType: 'blackScholes',
            theoryDetail: {
                title: "블랙-숄스 옵션 가격 결정 모형",
                content: [
                    "유러피안 콜옵션과 풋옵션의 이론적 가격을 산출하는 편미분 방정식입니다.",
                    "기초자산의 가격, 행사가격, 이자율, 만기까지의 잔존기간, 그리고 가장 중요한 기초자산의 **변동성(Volatility)** 5가지 변수로 구성됩니다.",
                    "이 모형의 등장은 금융 공학(Financial Engineering)이라는 새로운 학문의 문을 열었습니다."
                ]
            }
        },
        {
            id: 4,
            volume: 4,
            title: "DeFi와 AMM",
            subtitle: "알고리즘이 마켓 메이커가 되다",
            year: "2020",
            imagePath: '/assets/images/ch4.png',
            content: [
                "블랙-숄스 모형이 쌓아 올린 찬란한 금융 제국은 2008년 금융위기라는 뼈아픈 대가를 치러야 했습니다. 거대 은행과 중개자들의 탐욕이 시장을 무너뜨리는 것을 목격한 이름 모를 천재들은 어두운 디지털 블록체인의 세계에서 조용한 반란을 준비합니다. '인간의 개입이나 중개자 없이도 완벽하게 돌아가는 금융 시장을 만들 수는 없을까?'",
                "이들은 복잡한 월스트리트의 호가창 시스템을 전부 뜯어내고, 놀랍도록 단순하고 우아한 식 하나를 블록체인 위에 새겨 넣었습니다. 오직 두 자산의 곱은 항상 일정해야 한다(x*y=k)는 원리를 통해, 누군가 호가를 내지 않아도 알고리즘이 스스로 가격을 결정해 주는 '[[AMM|자동화된 마켓 메이커(Automated Market Maker). 누군가 호가를 내지 않아도, 수학 공식(x*y=k)에 의해 자동으로 가격이 결정되는 스마트 컨트랙트야!]]'를 탄생시킵니다.",
                "바빌론의 점토판에서 시작되어 피같이 뜨거운 탐욕으로 얼룩졌던 금융의 역사는, 이제 영원히 멈추지 않고 스스로 돌아가는 수학의 기어(Gear)로 진화했습니다. 이는 소수에게 독점되던 지식과 부를 투명하게 개방하여 모두와 공유하려는 '헤븐 프로젝트'의 숭고한 정신과 맞닿아, 새로운 우주 시대의 경제 시스템으로 나아가는 첫걸음이 되고 있습니다."
            ],
            tutorialType: 'amm',
            theoryDetail: {
                title: "AMM (Automated Market Maker) & x*y=k",
                content: [
                    "AMM은 유동성 풀에 자산을 예치하고, 스마트 컨트랙트 알고리즘에 의해 자산 간 교환 비율(가격)이 결정되게 하는 시스템입니다.",
                    "가장 대표적인 공식인 x * y = k (상수곱 공식)에서는 한 토큰(x)의 양이 줄어들면, 일정한 상수(k)를 유지하기 위해 다른 토큰(y)의 가격이 기하급수적으로 상승합니다.",
                    "이는 금융의 투명성과 접근성을 극대화하며 새로운 형태의 시장을 창조해내고 있습니다."
                ]
            }
        }
    ],
    en: [
        {
            id: 1,
            volume: 1,
            title: "Clay Tablets of Babylon",
            subtitle: "The birth of interest and the value of time",
            year: "B.C. 2000",
            imagePath: '/assets/images/ch1.png',
            content: [
                "Under the scorching sun of Mesopotamia, merchants inscribed the first profound contract into clay tablets: laws dictating that lending grain and livestock should yield a greater return. In that very moment, the concept of 'interest' was born into human history.",
                "Initially, merchants cautiously applied 'simple interest' only to the original principal. However, brilliant mathematicians and powerful merchant families of the Renaissance soon uncovered a much more terrifying and enchanting truth. Money breeds interest, and that newborn interest in turn breeds even more interest. This was the exponential and unstoppable magic of '[[compound interest|Hello! I'm your top instructor! Compound interest is the magic of interest accumulating on interest. Like rolling a snowball, it starts small but grows as big as a house later! Money grows like that too!]]'.",
                "This colossus weapon of time transformed simple addition into explosive multiplication. Ancient mathematicians fiercely wracked their brains to estimate exactly when the principal would double, efforts which crystallized into the intuitive 'Rule of 72'. The beast known as compound interest amassed unimaginable capital, which soon laid the fertile groundwork for humanity's first monumental arenas of speculation: the stock markets."
            ],
            tutorialType: 'compound',
            theoryDetail: {
                title: "Time's Magic, Compound Interest",
                content: [
                    "Simple interest is applied only to the principal. On the other hand, compound interest is applied to both the accumulated interest and the principal.",
                    "As Einstein called it the '8th wonder of the world', it has the powerful force of assets growing exponentially over time.",
                    "Using the Rule of 72, you can easily calculate the time it takes for an asset to double (72 ÷ annual interest rate)."
                ]
            }
        },
        {
            id: 2,
            volume: 2,
            title: "Brownian Motion",
            subtitle: "The market's random walk",
            year: "1900",
            imagePath: '/assets/images/ch2.png',
            content: [
                "The massive capital accumulated through the magic of compound interest rapidly flooded into the stock market. Countless people became consumed by the endless desire to predict whether prices would rise or fall. In 1900, amid the frantic shouting of the Paris Bourse, a young and obscure mathematician named Louis Bachelier was looking in an entirely different direction from the madness of the crowd.",
                "He mathematically proved a chilling truth: no past pattern, good news, or bad news could ever predict tomorrow's stock price. He argued that market prices merely drift aimlessly, colliding randomly like pollen suspended in water. Tomorrow's price is simply today's price plus a completely unpredictable '[[random walk|Just like a drunkard's walk, the past movement cannot predict the future direction at all!]]'.",
                "Even the greatest mathematicians of his time utterly mocked and dismissed his theory that 'the market is nothing but a plaything of chance'. However, half a century later, his forgotten manuscript experienced a glorious resurrection. While the direction proved impossible to predict, the 'degree of shaking' (volatility) could indeed be mathematically measured—laying the most colossal cornerstone for modern quant finance."
            ],
            tutorialType: 'randomWalk',
            theoryDetail: {
                title: "Random Walk Theory",
                content: [
                    "The theory that stock market price fluctuations are probabilistic and independent of past records.",
                    "Therefore, it is deeply related to the Efficient Market Hypothesis (EMH), which states that it is difficult to generate excess returns through technical analysis alone.",
                    "Mathematically modeled as the Wiener Process, which becomes a key assumption of the Black-Scholes model."
                ]
            }
        },
        {
            id: 3,
            volume: 3,
            title: "Black-Scholes Model",
            subtitle: "Pricing derivatives",
            year: "1973",
            imagePath: '/assets/images/ch3.png',
            content: [
                "The 'unpredictability' discovered by Bachelier returned to haunt global investors in the 1970s as a terrifying reality. Amidst a chaotic storm of wildly fluctuating stock prices, people desperately sought a financial shield called an 'option' to protect their wealth. Yet, absolutely no one knew what the fair price for this shield should be.",
                "This is when brilliant scholars in Chicago (Black, Scholes, and Merton) stepped onto the stage. They essentially borrowed the heat equation from physics, originally designed to calculate how heat dissipates through metal, and applied it to the financial markets. By precisely blending stocks and options, they performed a miraculous calculation that mathematically erased all 'Risk' down to zero. This was the world-changing '[[Black-Scholes Equation|It's the Nobel Prize-winning formula for pricing options. It mathematically proved a portfolio that completely eliminates risk (risk-free hedging)!]]'.",
                "This single, beautifully cold formula forever transformed the wild, untamed jungles of Wall Street. Traders relying on gut feelings were swiftly replaced by 'rocket scientists' wielding complex equations. Overnight, the greatest financial empire in human history was born, paving the way for a derivatives market worth hundreds of trillions of dollars."
            ],
            tutorialType: 'blackScholes',
            theoryDetail: {
                title: "Black-Scholes Option Pricing Model",
                content: [
                    "A partial differential equation for calculating the theoretical price of European call and put options.",
                    "It consists of five variables: underlying asset price, strike price, interest rate, time to maturity, and most importantly, underlying asset **Volatility**.",
                    "The emergence of this model opened the door to a new discipline called Financial Engineering."
                ]
            }
        },
        {
            id: 4,
            volume: 4,
            title: "DeFi and AMM",
            subtitle: "Algorithms become market makers",
            year: "2020",
            imagePath: '/assets/images/ch4.png',
            content: [
                "The magnificent financial empire built upon the Black-Scholes model eventually paid a devastating price during the 2008 financial crisis. After witnessing the uncontrollable greed of mega-banks and hidden intermediaries collapse the market, nameless geniuses began plotting a quiet rebellion within the cryptic realm of the blockchain: 'Could we create a flawless financial market that operates entirely without human intervention or middlemen?'",
                "They completely tore down the complex order book systems of Wall Street and inscribed a shockingly simple, elegant equation onto the blockchain. By utilizing the principle that the product of two reserve assets must always remain constant (x*y=k), they birthed the '[[AMM|Automated Market Maker. Even without someone placing an order, the price is automatically determined by a smart contract mathematically (x*y=k)!]]'. This algorithm inherently determines prices and provides infinite liquidity entirely on its own.",
                "The history of finance, which began with Babylonian clay tablets and was long stained by fervent greed, has now geometrically evolved into eternally spinning gears of mathematics. This perfectly aligns with the noble spirit of the 'Heaven Project'—transparently opening and sharing knowledge and wealth previously monopolized by a few. This automated machine marks our very first monumental step toward the ultimate economic system of the space age."
            ],
            tutorialType: 'amm',
            theoryDetail: {
                title: "AMM (Automated Market Maker) & x*y=k",
                content: [
                    "AMM is a system where trading pairs are provided via liquidity pools, and the exchange rate between assets is determined by a smart contract algorithm.",
                    "In the most representative formula x * y = k (constant product formula), if the amount of one token (x) decreases, the price of the other token (y) increases exponentially to maintain a constant (k).",
                    "This maximizes the transparency and accessibility of finance and creates a new form of market."
                ]
            }
        }
    ]
};
