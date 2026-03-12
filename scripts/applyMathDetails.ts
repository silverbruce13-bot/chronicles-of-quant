import * as fs from 'fs';
import * as path from 'path';
import { mathDetailsContent } from '../src/data/mathDetails';

function main() {
    const generatedPath = path.join(process.cwd(), 'src/data/gen_math_details.json');
    if (!fs.existsSync(generatedPath)) {
        console.error("No generated file found");
        return;
    }

    const genData = JSON.parse(fs.readFileSync(generatedPath, 'utf8'));

    const newKo = { ...mathDetailsContent.ko };
    const newEn = { ...mathDetailsContent.en };

    const types = [
        'portfolio', 'derivatives', 'calculus', 'probability', 'matrix', 'behavioral', 'algorithm', 'ai'
    ];

    for (const type of types) {
        if (genData[type]) {
            newKo[type] = genData[type].ko;
            newEn[type] = genData[type].en;
        }
    }

    const fileOutput = `export type MathDetail = {
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
    ko: ${JSON.stringify(newKo, null, 4)},
    en: ${JSON.stringify(newEn, null, 4)}
};
`;

    fs.writeFileSync(path.join(process.cwd(), 'src/data/mathDetails.ts'), fileOutput, 'utf8');
    console.log("Successfully merged generated MathDetails!");
}

main();
