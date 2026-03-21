import { GoogleGenerativeAI } from '@google/generative-ai';
import 'dotenv/config';

async function main() {
    const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY!);
    try {
        // Unfortunately standard JS SDK doesn't have an easy listModels 
        // We usually hit the REST endpoint or use a different client
        // Let's just try gemini-2.0-flash-001 or gemini-2.0-flash
        const result = await genAI.getGenerativeModel({ model: "gemini-2.0-flash" }).generateContent("Hello");
        console.log("Success:", result.response.text());
    } catch (e) {
        console.error("Error:", e);
    }
}
main();
