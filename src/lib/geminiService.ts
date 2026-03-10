import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
    console.warn("VITE_GEMINI_API_KEY is not defined in the environment variables.");
}

const genAI = new GoogleGenerativeAI(apiKey || "");

export const explainConcept = async (concept: string, contextPhrase: string): Promise<string> => {
    try {
        if (!apiKey) {
            return "API 키가 설정되지 않아 해설을 불러올 수 없습니다.";
        }

        // We use gemini-1.5-flash for fast and cost-effective text generation.
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
당신은 최고의 수학/금융 일타강사 '폴 쌤'입니다. 
학생이 금융의 역사와 수학 원리를 배우는 대하소설 같은 글을 읽다가, 잘 이해가 안 되는 구절을 하이라이트(선택)하여 당신에게 질문했습니다.

[전체 문맥 일부]:
"${contextPhrase}"

[학생이 궁금해하는 하이라이트 구절]:
"${concept}"

이 구절이 어떤 의미인지, 중고등학생도 아주 쉽게 이해할 수 있도록 명쾌하고 생동감 있게 1~3문장으로 짧게 설명해주세요.
말투는 다정하고 열정적인 강사처럼("~에 대해 설명해줄게!", "~란 말이야!") 해 주세요.
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "선생님이 잠시 자리를 비웠어요. 다시 시도해 주세요!";
    }
};
