import * as fs from 'fs';
import * as path from 'path';
import { storyContent } from '../src/data/story';

function main() {
    const p = path.join(process.cwd(), 'src/data/story.ts');
    
    // Update data
    const newKo = storyContent.ko.map(c => ({
        ...c,
        imagePath: `/assets/images/${c.tutorialType}.png`
    }));
    const newEn = storyContent.en.map(c => ({
        ...c,
        imagePath: `/assets/images/${c.tutorialType}.png`
    }));

    const fileContent = `export type ChapterType = {
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
    ko: ${JSON.stringify(newKo, null, 4)},
    en: ${JSON.stringify(newEn, null, 4)}
};
`;

    fs.writeFileSync(p, fileContent, 'utf-8');
    console.log("Updated imagePaths in story.ts!");
}

main();
