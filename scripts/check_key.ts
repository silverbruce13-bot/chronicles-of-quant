import { GoogleGenerativeAI } from '@google/generative-ai';
const genAI = new GoogleGenerativeAI("AIzaSyCBPZVmorbPchWcWepAK8wegnV4oCOQz7Y");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
model.generateContent("hello").then(r => console.log(r.response.text())).catch(e => console.error(e));
