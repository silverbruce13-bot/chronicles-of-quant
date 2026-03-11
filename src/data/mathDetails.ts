export type MathDetail = {
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
                { name: "거듭제곱", desc: "같은 수를 여러 번 반복해서 곱하는 마법이에요. 2를 3번 곱하면 2×2×2=8이 되듯, 복리는 내 돈에 이율을 계속 반복해서 곱해서 점점 더 크게 부풀려줘요." },
                { name: "등비수열", desc: "앞의 숫자에 항상 똑같은 일정한 값을 곱해서 다음 숫자를 만드는 규칙적인 나열이에요. 예를 들어 1, 2, 4, 8처럼 2배씩 커지는 경우가 그렇죠. 복리로 돈이 불어나는 모습이 바로 이 등비수열의 형태랍니다." },
                { name: "지수함수와 로그", desc: "지수함수는 시간이 갈수록 마치 로켓이 솟아오르듯 눈덩이처럼 엄청나게 빠르게 커지는 모습을 그래프로 그린 거예요. 반대로 로그(log)는 '내 돈이 2배가 되려면 시간이 얼마나 걸릴까?'를 거꾸로 계산할 때 쓰는 마법의 도구랍니다." }
            ],
            detailedLearning: [
                {
                    title: "단리와 복리의 차이",
                    content: [
                        "단리(Simple Interest)는 오직 '원금'에 대해서만 이자가 발생하는 방식입니다. 반면 복리(Compound Interest)는 원금에서 발생한 이자가 다시 원금에 합산되어, '이자에 이자가 붙는' 기하급수적인 성장을 보입니다.",
                        "예를 들어 원금 100만원을 연이율 10%로 예치할 때, 단리는 매년 10만원씩 일정하게 증가하지만, 복리는 1년 차 110만 원, 2년 차 121만 원, 3년 차 133.1만 원으로 증가 폭이 점점 커집니다."
                    ]
                },
                {
                    title: "72의 법칙 (Rule of 72)",
                    content: [
                        "복리의 힘을 직관적으로 이해하기 위해 자주 쓰이는 공식입니다. 자산이 두 배가 되는 데 걸리는 시간을 아주 쉽게 근사할 수 있습니다.",
                        "시간(년) = 72 / 연간 수익률(%). 예를 들어 연 수익률이 8%라면 72 / 8 = 9년 뒤에 원금이 두 배가 됩니다. 이 공식은 자연로그(ln 2 ≈ 0.693)에서 유도된 수학적 결과입니다."
                    ]
                }
            ],
            quizzes: [
                {
                    question: "원금 100만 원을 연이율 10%의 단리와 복리로 각각 2년 동안 예치했습니다. 2년 후, 복리 예금액은 단리 예금액보다 얼마나 더 많을까요?",
                    options: ["차이가 없다", "1만 원", "2만 원", "10만 원"],
                    answer: 1,
                    explanation: "단리의 경우: 100 + (100 * 0.1 * 2) = 120만 원. 복리의 경우: 100 * (1.1)^2 = 121만 원. 따라서 복리가 1만 원 더 많습니다."
                },
                {
                    question: "어떤 주식 펀드의 연평균 수익률이 12%라고 가정합니다. 72의 법칙에 따르면, 이 펀드에 투자한 돈이 두 배가 되려면 대략 몇 년이 걸릴까요?",
                    options: ["4년", "5년", "6년", "7년"],
                    answer: 2,
                    explanation: "72의 법칙에 따라 72 / 12 = 6. 대략 6년이 걸립니다."
                }
            ],
            flowchart: [
                { step: 1, title: "원금 설정", desc: "초기 투자 금액(P)을 설정합니다." },
                { step: 2, title: "1년 후 이자 계산", desc: "원금에 (1 + 이자율 r)을 곱합니다.", formula: "P × (1+r)" },
                { step: 3, title: "n년 후 복리 계산", desc: "매년 불어난 금액에 다시 이자가 붙으므로 거듭제곱을 사용합니다.", formula: "P × (1+r)^n" },
                { step: 4, title: "72의 법칙 도출", desc: "로그(log)를 취해 원금이 2배가 되는 시간(n)을 근사치로 구합니다.", formula: "n ≈ 72 / (r×100)" }
            ],
            discussionAndAssignment: {
                discussion: "만약 당신이 은행가라면, 대출 고객에게는 어떤 방식을 적용하고 예금 고객에게는 어떤 방식을 권유하겠습니까? 그 이유는 무엇입니까?",
                assignment: "부모님이 가입하신 적금이나 예금 상품의 약관을 확인해보고, 그것이 단리인지 복리인지, 그리고 이율은 얼마인지 조사해 오기."
            }
        },
        randomWalk: {
            concepts: [
                { name: "확률분포", desc: "미래에 일어날 수 있는 여러 가지 일들이 일어날 가능성(확률)을 모아서 한눈에 보기 쉽게 그림이나 표로 나타낸 거예요. 주사위를 던졌을 때 각 숫자가 나올 확률을 정리한 것과 비슷하죠." },
                { name: "정규분포", desc: "세상에서 아주 흔하게 볼 수 있는 '종(Bell) 모양' 그래프예요. 학생들의 키나 시험 점수처럼, 평균 근처에 가장 많은 사람들이 몰려 있고 극단적으로 크거나 작은 경우는 아주 적게 나타나는 현상을 설명해줘요." },
                { name: "위너 과정", desc: "주식 가격이 마치 술 취한 사람의 걸음걸이처럼 아무 데나 맘대로 계속해서 흩어지는 모습을 수학적으로 묘사한 거예요. 시간이 지날수록 어디로 갈지 종잡을 수 없게 확 퍼지는 성질이 있어요." }
            ],
            detailedLearning: [
                {
                    title: "랜덤워크와 효율적 시장 가설",
                    content: [
                        "랜덤워크(Random Walk)는 과거의 주가 움직임이 미래의 주가 방향을 전혀 예측해 주지 못한다는 이론입니다. 내일 주가가 오를지 내릴지는 동전 던지기처럼 알 수 없습니다.",
                        "이는 훗날 '효율적 시장 가설(EMH)'로 이어졌습니다. EMH에 따르면 이미 공개된 모든 정보는 현재 주가에 완벽하게 반영되어 있기 때문에, 과거의 차트 패턴을 분석하여 지속적으로 초과 수익을 내는 것은 수학적으로 불가능합니다."
                    ]
                },
                {
                    title: "브라운 운동과 분산의 증가",
                    content: [
                        "물리학의 브라운 운동을 금융에 적용한 위너 과정(Wiener Process)에서는, 입자(주가)가 무작위로 움직일 때 '퍼지는 범위'가 시간에 비례하여 넓어집니다.",
                        "즉, 시간이 흐를수록 불확실성(분산)은 시간 t에 정비례하여 커지고, 변동성(표준편차)은 시간의 제곱근(√t)에 비례하여 증가합니다. 내일보다 1년 뒤의 주가를 예측하기가 훨씬 더 어려운 수학적 이유입니다."
                    ]
                }
            ],
            quizzes: [
                {
                    question: "랜덤워크 모델(위너 과정)에서 불확실성을 나타내는 '변동성(표준편차)'은 시간(t)이 지남에 따라 어떻게 커지나요?",
                    options: ["시간(t)에 비례하여", "시간(t)의 제곱에 비례하여", "시간(t)의 제곱근(√t)에 비례하여", "시간과 무관하게 일정함"],
                    answer: 2,
                    explanation: "위너 과정에서 분산은 시간(t)에 비례하며, 변동성인 표준편차는 분산의 양의 제곱근이므로 시간의 제곱근(√t)에 비례하여 증가합니다."
                },
                {
                    question: "강형 효율적 시장 가설(Strong Form EMH)에 따르면 다음 중 어느 것도 지속적인 초과 수익을 낼 수 없다고 합니다. 랜덤워크 관점에서 차트 분석(기술적 분석)이 무의미한 이유는 무엇인가요?",
                    options: ["정보가 너무 느리게 반영되기 때문에", "과거의 주가 흐름과 미래의 주가 향방은 독립적이기 때문에", "주식 시장에는 항상 규칙적인 10년 주기 사이클이 있기 때문에", "주가는 항상 오르기만 하기 때문에"],
                    answer: 1,
                    explanation: "랜덤워크 이론은 주가의 연속적인 변화가 서로 독립적이라고 가정합니다. 따라서 과거의 패턴은 미래를 예측하는 지표가 될 수 없습니다."
                }
            ],
            flowchart: [
                { step: 1, title: "주가 변동 가정", desc: "매일 주가가 오르거나 내릴 확률은 독립적이라고 가정합니다." },
                { step: 2, title: "평균과 분산", desc: "장기적인 평균 수익률(Drift)과 변동성(Volatility)을 분리합니다." },
                { step: 3, title: "정규분포 적용", desc: "단기적인 가격 변화는 정규분포를 따른다고 모델링합니다." },
                { step: 4, title: "로그 정규분포", desc: "주가는 0 밑으로 떨어질 수 없으므로 로그 정규분포를 사용하여 미래 가격 확률을 계산합니다." }
            ]
        },
        blackScholes: {
            concepts: [
                { name: "편미분 방정식", desc: "여러 가지 요소들이 섞여 있을 때, 한 가지 요소(예: 시간이나 현재 가격)만 살짝 바뀌면 전체 결과가 얼마나 달라지는지를 계산하는 수학 공구함이에요. 주식시장이라는 복잡한 바다에서 옵션 가격의 작은 변화를 파악할 때 쓰여요." },
                { name: "무위험 고수익 (차익거래)", desc: "아무런 위험(손해 볼 가능성)도 지지 않으면서 공짜로 확실한 이익을 얻을 수 있는 마법 같은 상황을 말해요. 경제학에서는 보통 '세상에 공짜 점심은 없다'고 생각해서, 이런 차익거래는 순식간에 사라진다고 가정해요." },
                { name: "이토의 보조정리", desc: "미래를 알 수 없이 흔들리는 무작위 세계(확률)에서 자동차의 속도(변화율)를 재려고 할 때 쓰는 특별한 미적분 계산법이에요. 일반적인 미분으로는 계산할 수 없는 불확실한 성질들을 다룰 수 있게 해주는 천재적인 규칙이죠." }
            ],
            detailedLearning: [
                {
                    title: "위험을 지우는 마법, 무위험 헤징",
                    content: [
                        "블랙-숄스 모형의 가장 위대한 발견은 옵션과 기초자산(예: 주식)을 적절한 비율로 섞어 '위험이 완전히 제거된 포트폴리오'를 만들고 유지할 수 있다는 수학적 증명입니다.",
                        "이 비율을 델타(Delta)라고 부릅니다. 델타 헤징(Delta Hedging)을 통해 시장이 어떻게 움직이든 흔들리지 않는 포트폴리오를 만들면, 이 포트폴리오의 미래 수익률은 반드시 '무위험 이자율(은행 예금 금리)'과 같아야 한다는 논리를 사용합니다."
                    ]
                },
                {
                    title: "모형의 5가지 핵심 변수",
                    content: [
                        "블랙과 숄스가 만들어낸 옵션 가격 결정 공식은 5개의 숫자로 콜옵션(살 수 있는 권리)의 가격을 정의합니다.",
                        "1. 현재 주가, 2. 행사 가격, 3. 만기까지 남은 시간, 4. 무위험 이자율, 5. 변동성. 이 중 유일하게 미래를 예측해야 하는 값이 기초자산이 얼마나 크게 흔들릴지 나타내는 '변동성(Volatility)'입니다."
                    ]
                }
            ],
            quizzes: [
                {
                    question: "블랙-숄스 모형에서 콜옵션의 가격을 산출하기 위해 필요한 5가지 주요 독립 변수에 해당하지 '않는' 것은?",
                    options: ["물가 상승률 (Inflation Rate)", "기초 자산의 현재 가격", "만기까지의 잔존 기간", "기초 자산의 변동성"],
                    answer: 0,
                    explanation: "블랙-숄스의 5가지 변수는 (1)현재 주가, (2)행사 가격, (3)만기까지 시간, (4)무위험 이자율, (5)변동성 입니다. 물가 상승률은 공식의 직접적 입력 변수가 아닙니다."
                },
                {
                    question: "옵션 가격의 변화량을 기초자산 가격의 변화량으로 나눈 값으로, 옵션 포트폴리오의 위험을 0으로 만들기 위해 주식을 얼마나 섞어야 하는지 알려주는 민감도 지표의 이름은 무엇인가요?",
                    options: ["감마 (Gamma)", "델타 (Delta)", "세타 (Theta)", "베가 (Vega)"],
                    answer: 1,
                    explanation: "델타(Delta)는 기초자산 가격 변화에 대한 옵션 가격의 민감도를 나타내며, 블랙-숄스 무위험 포트폴리오를 구성하는 핵심 비율입니다."
                }
            ],
            flowchart: [
                { step: 1, title: "옵션 포트폴리오 구성", desc: "주식과 파생상품을 조합하여 위험이 0인 무위험 포트폴리오를 구성합니다." },
                { step: 2, title: "무위험 수익률 적용", desc: "위험이 0인 포트폴리오의 수익률은 무위험 이자율이어야 합니다.", formula: "r × V" },
                { step: 3, title: "이토의 보조정리 전개", desc: "기초자산의 무작위 한 움직임을 반영한 미분 방정식을 세웁니다." },
                { step: 4, title: "편미분 방정식 도출", desc: "기초 방정식(블랙-숄스 편미분 방정식)을 풀면 옵션의 이론적 적정 가격이 도출됩니다.", formula: "C = S_0 N(d_1) - K e^{-rT} N(d_2)" }
            ]
        },
        amm: {
            concepts: [
                { name: "상수곱 공식", desc: "주머니 A에 있는 사과 개수(x)와 주머니 B에 있는 오렌지 개수(y)를 곱한 값(k)은 누가 와서 과일을 교환해가도 무조건 항상 똑같아야 한다는 규칙이에요. 즉, x와 y 중 하나가 줄어들면 다른 하나는 반드시 많아져야만 하죠." },
                { name: "유동성 풀(Liquidity Pool)", desc: "누구든지 와서 물건을 바꿀 수 있도록 미리 여러 가지 코인들을 가득 채워둔 '거대한 공동 금고'예요. 은행 직원 없이도 이 금고 안에 들어 있는 코인들의 비율에 따라 자동으로 가격이 정해집니다." },
                { name: "비영구적 손실 (Impermanent Loss)", desc: "내 코인을 금고(유동성 풀)에 빌려줬더니, 내가 그냥 내 지갑에 가만히 들고 있었을 때보다 오히려 손해를 보는 현상이에요. 가격이 오르든 내리든 밖의 시세랑 금고 안의 시세 차이 때문에 일어나는 억울한 손실이죠." }
            ],
            detailedLearning: [
                {
                    title: "상수곱 결정 공식 (x * y = k)",
                    content: [
                        "탈중앙화 거래소(DEX)인 유니스왑은 호가창 대신 하나의 수학 공식을 도입했습니다. 토큰 X의 수량(x)과 토큰 Y의 수량(y)을 곱한 값은 항상 일정한 상수(k)를 유지해야 한다는 것입니다.",
                        "사용자가 토큰 X를 풀에 넣고 Y를 빼갈 때, 풀에 X는 늘어나고 Y는 줄어듭니다. 감소한 Y를 증가한 X로 나눈 비율이 곧 그 순간의 토큰 교환 '가격(Price)'이 됩니다. 이는 쌍곡선 형태의 그래프를 그리며, 어떤 크기의 주문이든 수학적으로 체결될 수 있게 해줍니다."
                    ]
                },
                {
                    title: "비영구적 손실 (Impermanent Loss)",
                    content: [
                        "자산을 개인 지갑에 가만히 들고 있을 때의 가치와, AMM 유동성 풀에 예치했을 때의 가치를 비교했을 때 발생하는 상대적 손실입니다.",
                        "토큰 가격이 외부에 비해 급격하게 변동하면, 차익 거래자(Arbitrager)들이 풀의 비율을 외부 가격에 맞추기 위해 지속적으로 거래를 일으킵니다. 알고리즘 상 풀은 항상 비싼 토큰을 내어주고 싼 토큰을 받아들이게 되어 있어, 유동성 제공자에게 손실이 발생할 수 있습니다."
                    ]
                }
            ],
            quizzes: [
                {
                    question: "탈중앙화 거래소의 한 유동성 풀에 X토큰 100개, Y토큰 400개가 예치되어 있습니다. 상수 k값은 40,000입니다. 체결 수수료를 무시할 때, 누군가 X토큰 100개를 풀에 집어넣고 Y토큰을 교환해 가려 합니다. 이 사람이 받아가는 Y토큰은 몇 개인가요?",
                    options: ["100개", "200개", "300개", "400개"],
                    answer: 1,
                    explanation: "풀에 X 100개가 들어오면 총 X는 200개가 됩니다. 상수 k=40,000을 유지하려면 Y는 40000 / 200 = 200개가 되어야 합니다. 기존 Y가 400개였으므로, 차이인 200개가 사용자에게 지급됩니다."
                },
                {
                    question: "AMM 생태계에서 '비영구적 손실(Impermanent Loss)'이 발생하는 가장 근본적인 원인은 무엇인가요?",
                    options: ["스마트 컨트랙트의 해킹 위험 때문에", "AMM 공식(x*y=k)으로 인해 외부 시장 가격과의 괴리가 생길 때 차익 거래가 발생하면서 유동성 제공자의 자산 비율이 불리하게 바뀌기 때문에", "유동성 풀의 예치 이자율이 너무 낮기 때문에", "네트워크의 트랜잭션 수수료(가스비)가 비싸기 때문에"],
                    answer: 1,
                    explanation: "상수곱 공식에 의해 풀 내부의 자산 비율이 조정되는 과정에서, 외부 시장 가격이 변할 때 차익 거래자들이 개입하여 비싼 자산을 빼가고 싼 자산을 채우게 되면서 예치자의 상대적 손실이 발생합니다."
                }
            ],
            flowchart: [
                { step: 1, title: "풀 생성", desc: "두 종류의 토큰(X, Y)을 풀에 예치하여 유동성을 공급합니다." },
                { step: 2, title: "상수(K) 설정", desc: "초기 토큰 X의 갯수와 Y의 갯수를 곱해 불변의 상수 K를 만듭니다.", formula: "X × Y = K" },
                { step: 3, title: "사용자 스왑(교환)", desc: "사용자가 토큰 X를 내고(Δx) 풀에서 토큰 Y를 가져갑니다(Δy)." },
                { step: 4, title: "가격 자동 조정", desc: "K값을 유지하기 위해 새로운 X수량에 맞게 Y수량이 조정되며, 이로 인해 교환비율(가격)이 형성됩니다.", formula: "(X+Δx) × (Y-Δy) = K" }
            ]
        },
        portfolio: { concepts: [], detailedLearning: [], quizzes: [], flowchart: [] },
        derivatives: { concepts: [], detailedLearning: [], quizzes: [], flowchart: [] },
        calculus: { concepts: [], detailedLearning: [], quizzes: [], flowchart: [] },
        probability: { concepts: [], detailedLearning: [], quizzes: [], flowchart: [] },
        matrix: { concepts: [], detailedLearning: [], quizzes: [], flowchart: [] },
        behavioral: { concepts: [], detailedLearning: [], quizzes: [], flowchart: [] },
        algorithm: { concepts: [], detailedLearning: [], quizzes: [], flowchart: [] },
        ai: { concepts: [], detailedLearning: [], quizzes: [], flowchart: [] }
    },
    en: {
        compound: {
            concepts: [
                { name: "Exponentiation", desc: "It's the magic of multiplying the same number over and over again. Just as 2 multiplied 3 times is 2×2×2=8, compound interest repeatedly multiplies your money by the interest rate, making it grow bigger and bigger." },
                { name: "Geometric Progression", desc: "This is a regular sequence where you always multiply the previous number by the exact same value to get the next one. For example, 1, 2, 4, 8 grows by a factor of 2 each time. The way money grows with compound interest follows this exact geometric pattern." },
                { name: "Exponential & Logarithm", desc: "Exponential growth is graphed to show something growing incredibly fast like a snowball, shooting up like a rocket as time goes by. Conversely, a logarithm (log) is a magic tool used to calculate backwards, like asking 'How long will it take for my money to double?'" }
            ],
            detailedLearning: [
                {
                    title: "Simple vs Compound Interest",
                    content: [
                        "Simple Interest calculates interest only on the 'principal' amount. Compound Interest, however, calculates interest on both the principal and the accumulated interest, leading to 'interest on interest' and exponential growth.",
                        "For example, depositing $1,000 at a 10% annual rate: Simple interest grows by a flat $100 every year. Compound interest grows to $1,100 the first year, $1,210 the second, and $1,331 the third—accelerating its growth over time."
                    ]
                },
                {
                    title: "Rule of 72",
                    content: [
                        "A frequently used formula to intuitively grasp the power of compound interest. It allows you to easily approximate the time required for an asset to double.",
                        "Time (Years) = 72 / Annual Interest Rate (%). For instance, at an 8% return, 72 / 8 = 9 years to double your initial investment. This formula is mathematically derived from the natural logarithm (ln 2 ≈ 0.693)."
                    ]
                }
            ],
            quizzes: [
                {
                    question: "You deposit $1,000 into two accounts for 2 years at an annual interest rate of 10%. One uses simple interest, and the other uses compound interest. What is the difference in returns after 2 years?",
                    options: ["No difference", "$10", "$20", "$100"],
                    answer: 1,
                    explanation: "Simple: 1000 + (1000 * 0.1 * 2) = $1200. Compound: 1000 * (1.1)^2 = $1210. The difference is $10."
                },
                {
                    question: "Assuming a stock fund yields an average annual return of 12%. According to the Rule of 72, approximately how many years will it take for your investment to double?",
                    options: ["4 years", "5 years", "6 years", "7 years"],
                    answer: 2,
                    explanation: "According to the Rule of 72, 72 / 12 = 6. It will take roughly 6 years."
                }
            ],
            flowchart: [
                { step: 1, title: "Set Principal", desc: "Set the initial investment amount (P)." },
                { step: 2, title: "1-Year Interest", desc: "Multiply the principal by (1 + interest rate r).", formula: "P × (1+r)" },
                { step: 3, title: "N-Year Compound", desc: "Use exponentiation since interest grows on accumulated amount each year.", formula: "P × (1+r)^n" },
                { step: 4, title: "Rule of 72", desc: "Derive the approximate time (n) for the principal to double using logarithm.", formula: "n ≈ 72 / (r×100)" }
            ],
            discussionAndAssignment: {
                discussion: "If you were a banker, which interest method would you apply to loan customers, and which would you recommend to deposit customers? What is the reason?",
                assignment: "Check the terms and conditions of a savings or deposit product your parents have subscribed to, and investigate whether it is simple or compound interest, and what the interest rate is."
            }
        },
        randomWalk: {
            concepts: [
                { name: "Probability Distribution", desc: "It's a chart or picture that gathers and clearly shows the chances (probabilities) of various possible outcomes happening in the future. It's similar to listing the probability of getting each number when you roll a dice." },
                { name: "Normal Distribution", desc: "This is a very common 'bell-shaped' curve found in the world. Just like students' heights or test scores, it explains the phenomenon where most people are concentrated near the average, and extreme high or low cases appear very rarely." },
                { name: "Wiener Process", desc: "It's a mathematical description of stock prices constantly and randomly wandering off like a drunkard's walk. It has the property of spreading out broadly over time, making it impossible to confidently predict where it will end up." }
            ],
            detailedLearning: [
                {
                    title: "Random Walk & Efficient Market Hypothesis",
                    content: [
                        "A Random Walk theorizes that past movement or trend of a stock price or market cannot be used to predict its future movement. Like tossing a coin, tomorrow's price direction is a random event.",
                        "This laid the groundwork for the 'Efficient Market Hypothesis (EMH)'. EMH states that current stock prices perfectly reflect all known information. Thus, consistently generating excess returns by analyzing past chart patterns is mathematically impossible."
                    ]
                },
                {
                    title: "Brownian Motion & Variance Growth",
                    content: [
                        "In the Wiener Process, which applies the physics of Brownian Motion to finance, the 'spread' of a randomly moving particle (stock price) expands proportionally to time.",
                        "This means uncertainty (variance) grows in direct proportion to time 't', while volatility (standard deviation) increases in proportion to the square root of time (√t). This is the mathematical reason why predicting the price 1 year out is significantly harder than predicting it tomorrow."
                    ]
                }
            ],
            quizzes: [
                {
                    question: "In the Random Walk model (Wiener Process), how does the 'volatility (standard deviation)' representing uncertainty grow as time (t) passes?",
                    options: ["Proportionally to time (t)", "Proportionally to the square of time (t²)", "Proportionally to the square root of time (√t)", "Remains constant regardless of time"],
                    answer: 2,
                    explanation: "In a Wiener Process, variance is proportional to time (t). Since standard deviation is the positive square root of variance, it increases proportionally to the square root of time (√t)."
                },
                {
                    question: "According to the Strong Form Efficient Market Hypothesis (EMH), no analysis can yield consistent excess returns. Why does the Random Walk theory argue technical chart analysis is meaningless?",
                    options: ["Because information is reflected too slowly.", "Because past price movements are independent of future trajectories.", "Because the stock market always operates in 10-year cycles.", "Because stock prices only ever go up."],
                    answer: 1,
                    explanation: "The Random Walk theory assumes continuous price changes are independent of each other. Therefore, past patterns offer no predictive value for the future."
                }
            ],
            flowchart: [
                { step: 1, title: "Assume Price Fluctuation", desc: "Assume that the probability of stock go up or down daily is independent." },
                { step: 2, title: "Mean and Variance", desc: "Separate long-term average return (Drift) and Volatility." },
                { step: 3, title: "Apply Normal Distribution", desc: "Model short-term price changes following a normal distribution." },
                { step: 4, title: "Log-Normal Distribution", desc: "Since prices cannot fall below 0, use a log-normal distribution to calculate future price probabilities." }
            ]
        },
        blackScholes: {
            concepts: [
                { name: "Partial Differential Equation", desc: "It's a mathematical toolbox for calculating how much the overall result changes when only one tiny factor (like time or current price) changes, out of many mixed factors. It's used to track small changes in option prices in the complex ocean of the stock market." },
                { name: "Risk-Free High Yield (Arbitrage)", desc: "This refers to a magical situation where you can earn a guaranteed free profit without taking any risk of loss. In economics, it's generally assumed that 'there is no free lunch,' so these arbitrage opportunities disappear instantly." },
                { name: "Itô's Lemma", desc: "It's a special calculus method used to measure speed (rate of change) in a random world where the future shakes unpredictably. It's a genius rule that allows us to handle uncertain properties that normal calculus cannot calculate." }
            ],
            detailedLearning: [
                {
                    title: "The Magic of Removing Risk: Risk-Free Hedging",
                    content: [
                        "The greatest discovery of the Black-Scholes model is the mathematical proof that one can construct and continuously adjust a portfolio combining options and underlying assets (e.g., stocks) to completely eliminate risk.",
                        "This holding ratio is called 'Delta'. By Delta Hedging to create an unshakeable portfolio regardless of market movements, logic dictates this portfolio's future return must exactly match the 'risk-free interest rate' (like bank deposit rates)."
                    ]
                },
                {
                    title: "The 5 Core Variables of the Model",
                    content: [
                        "The option pricing formula created by Black and Scholes requires exactly 5 numbers to determine a Call Option's fair price.",
                        "1. Current stock price, 2. Strike price, 3. Time to expiry, 4. Risk-free interest rate, 5. Volatility. Among these, the only value requiring a prediction of the future is 'Volatility'—how violently the underlying asset will swing."
                    ]
                }
            ],
            quizzes: [
                {
                    question: "Which of the following is 'NOT' one of the 5 main independent variables required to calculate the price of a Call Option in the Black-Scholes model?",
                    options: ["Inflation Rate", "Current Price of the Underlying Asset", "Time to Maturity", "Volatility of the Underlying Asset"],
                    answer: 0,
                    explanation: "The 5 variables are (1) Current Price, (2) Strike Price, (3) Time to Maturity, (4) Risk-Free Rate, and (5) Volatility. Inflation is not a direct input variable."
                },
                {
                    question: "What is the name of the sensitivity metric representing the change in option price divided by the change in the underlying asset's price, establishing the exact ratio of stocks needed to neutralize portfolio risk?",
                    options: ["Gamma", "Delta", "Theta", "Vega"],
                    answer: 1,
                    explanation: "Delta measures the sensitivity of the option's theoretical value to changes in the underlying asset's price, functioning as the core ratio for risk-neutral Black-Scholes portfolio construction."
                }
            ],
            flowchart: [
                { step: 1, title: "Build Option Portfolio", desc: "Combine zero-risk portfolio using stocks and derivatives." },
                { step: 2, title: "Apply Risk-Free Rate", desc: "The yield of a zero-risk portfolio must be the risk-free rate.", formula: "r × V" },
                { step: 3, title: "Expand Itô's Lemma", desc: "Build a differential equation reflecting the random movement of underlying assets." },
                { step: 4, title: "Derive PDE", desc: "Solve the basic equation (Black-Scholes PDE) to derive theoretical fair options price.", formula: "C = S_0 N(d_1) - K e^{-rT} N(d_2)" }
            ]
        },
        amm: {
            concepts: [
                { name: "Constant Product Formula", desc: "This is a rule stating that the number of apples in bag A (x) multiplied by the number of oranges in bag B (y) must always equal a constant value (k), no matter who exchanges fruits. So if x decreases, y must increase to compensate." },
                { name: "Liquidity Pool", desc: "It's a 'massive shared safe' filled with various coins in advance so anyone can come and trade. Prices are automatically set based on the ratio of coins inside this safe, without needing bank tellers." },
                { name: "Impermanent Loss", desc: "This is the phenomenon where you lend your coins to a safe (liquidity pool), but end up losing value compared to if you had just kept them quietly in your own wallet. It's a frustrating loss caused by the difference between market prices and the pool's prices." }
            ],
            detailedLearning: [
                {
                    title: "The Constant Product Formula (x * y = k)",
                    content: [
                        "Decentralized Exchanges (DEXs) like Uniswap abandoned order books for a single mathematical equation. The quantity of Token X (x) multiplied by Token Y (y) must always equal a constant (k).",
                        "When a user drops Token X into the pool and withdraws Token Y, the pool's X increases and Y decreases. The ratio of the Y taken out to the X put in dictates the exchange 'Price' for that trade. Plotted, this forms a hyperbolic curve, ensuring mathematically that orders of any magnitude can be fulfilled."
                    ]
                },
                {
                    title: "Impermanent Loss",
                    content: [
                        "This represents the opportunity loss equating the value of holding an asset in a personal wallet versus depositing it in an AMM liquidity pool.",
                        "If external token prices change rapidly, Arbitragers will continuously trade against the pool to realign its ratio with external market parity. Algorithmically, the pool is forced to hand over appreciating assets and stockpile depreciating ones, causing a comparative loss for the liquidity provider."
                    ]
                }
            ],
            quizzes: [
                {
                    question: "A DEX liquidity pool holds 100 Token X and 400 Token Y. The constant k is 40,000. Ignoring fees, a person deposits 100 Token X into the pool to swap for Token Y. How many Token Y will this person receive?",
                    options: ["100", "200", "300", "400"],
                    answer: 1,
                    explanation: "At deposit, pool X becomes 200. To keep k=40,000, Y must become 40,000 / 200 = 200. The pool previously held 400 Y, so the difference of 200 Y is disbursed to the user."
                },
                {
                    question: "What is the primary root cause of 'Impermanent Loss' in the AMM ecosystem?",
                    options: ["Smart contract hacking risks.", "Arbitrage happening when the pool price deviates from the external market price due to (x*y=k), causing the liquidity provider's asset ratio to shift unfavorably.", "Liquidity pool staking yields being too low.", "Expensive network transaction gas fees."],
                    answer: 1,
                    explanation: "When external prices change, arbitragers manipulate the invariant constant pool ratio to extract the more valuable asset and dump the cheaper one, yielding relative losses for the supplier."
                }
            ],
            flowchart: [
                { step: 1, title: "Create Pool", desc: "Deposit two types of tokens (X, Y) to supply liquidity." },
                { step: 2, title: "Set Constant (K)", desc: "Multiply the initial number of tokens X and Y to create a fixed constant K.", formula: "X × Y = K" },
                { step: 3, title: "User Swap", desc: "A user gives token X (Δx) and takes token Y (Δy) from the pool." },
                { step: 4, title: "Auto Adjust Price", desc: "To maintain K, Y adjusts to the new X, forming an exchange rate (price).", formula: "(X+Δx) × (Y-Δy) = K" }
            ]
        },
        portfolio: { concepts: [], detailedLearning: [], quizzes: [], flowchart: [] },
        derivatives: { concepts: [], detailedLearning: [], quizzes: [], flowchart: [] },
        calculus: { concepts: [], detailedLearning: [], quizzes: [], flowchart: [] },
        probability: { concepts: [], detailedLearning: [], quizzes: [], flowchart: [] },
        matrix: { concepts: [], detailedLearning: [], quizzes: [], flowchart: [] },
        behavioral: { concepts: [], detailedLearning: [], quizzes: [], flowchart: [] },
        algorithm: { concepts: [], detailedLearning: [], quizzes: [], flowchart: [] },
        ai: { concepts: [], detailedLearning: [], quizzes: [], flowchart: [] }
    }
};
