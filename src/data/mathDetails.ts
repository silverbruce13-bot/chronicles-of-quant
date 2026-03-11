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
