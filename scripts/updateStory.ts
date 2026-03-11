import * as fs from 'fs';
import * as path from 'path';

const generatedPath = path.join(process.cwd(), 'src', 'data', 'generated_40_chapters.json');
const targetPath = path.join(process.cwd(), 'src', 'data', 'story.ts');

const chapters = JSON.parse(fs.readFileSync(generatedPath, 'utf-8'));

const koChapters = chapters.map((c: any) => ({
    id: c.id,
    volume: c.volume,
    title: c.ko.title,
    subtitle: c.ko.subtitle,
    year: c.year,
    imagePath: c.imagePath,
    content: c.ko.content,
    tutorialType: c.tutorialType
}));

const enChapters = chapters.map((c: any) => ({
    id: c.id,
    volume: c.volume,
    title: c.en.title,
    subtitle: c.en.subtitle,
    year: c.year,
    imagePath: c.imagePath,
    content: c.en.content,
    tutorialType: c.tutorialType
}));

const fileHeader = `export type ChapterType = {
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
    ko: ${JSON.stringify(koChapters, null, 4)},
    en: ${JSON.stringify(enChapters, null, 4)}
};
`;

fs.writeFileSync(targetPath, fileHeader, 'utf-8');
console.log('Successfully updated story.ts with 40 chapters.');
