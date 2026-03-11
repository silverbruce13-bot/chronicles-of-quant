import * as fs from 'fs';
import * as path from 'path';
import { storyContent } from '../src/data/story';

const generatedPath = path.join(process.cwd(), 'src', 'data', 'generated_40_chapters.json');
const storyPath = path.join(process.cwd(), 'src', 'data', 'story.ts');

function main() {
    if (!fs.existsSync(generatedPath)) {
        console.error("Generated chapters not found!");
        return;
    }

    const generated = JSON.parse(fs.readFileSync(generatedPath, 'utf-8'));

    const oldKo = storyContent.ko;
    const oldEn = storyContent.en;

    const newKo = [];
    const newEn = [];

    // Keys of preserved chapters
    const PRESERVED_CHAPTERS = [1, 5, 18, 38];

    for (let i = 1; i <= 40; i++) {
        const oldChapterKo = oldKo.find(c => c.id === i);
        const oldChapterEn = oldEn.find(c => c.id === i);

        if (PRESERVED_CHAPTERS.includes(i)) {
            // Keep completely intact
            newKo.push(oldChapterKo);
            newEn.push(oldChapterEn);
            continue;
        }

        const genChapter = generated.find((c: any) => c.id === i);
        if (!genChapter) {
            newKo.push(oldChapterKo);
            newEn.push(oldChapterEn);
            continue;
        }

        // Apply generated 
        const mappedKo = {
            id: i,
            volume: genChapter.ko.volume,
            title: genChapter.ko.title,
            subtitle: genChapter.ko.subtitle,
            year: genChapter.ko.year,
            imagePath: genChapter.imagePath,
            tutorialType: genChapter.tutorialType,
            content: genChapter.ko.content,
            theoryDetail: genChapter.ko.theoryDetail
        };

        const mappedEn = {
            id: i,
            volume: genChapter.en.volume || genChapter.ko.volume,
            title: genChapter.en.title,
            subtitle: genChapter.en.subtitle,
            year: genChapter.en.year || genChapter.ko.year,
            imagePath: genChapter.imagePath,
            tutorialType: genChapter.tutorialType,
            content: genChapter.en.content,
            theoryDetail: genChapter.en.theoryDetail
        };

        newKo.push(mappedKo);
        newEn.push(mappedEn);
    }

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

    fs.writeFileSync(storyPath, fileContent, 'utf-8');
    console.log("Applied 40 completely generated chapters while preserving the core chapters!");
}

main();
