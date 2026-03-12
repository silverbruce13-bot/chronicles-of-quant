import * as fs from 'fs';
import * as path from 'path';
import { storyContent } from '../src/data/story';

function main() {
    const imagesDir = path.join(process.cwd(), 'public/assets/images');
    
    // First, map each chapter to a physical ch{id}.png file by copying the tutorialType image
    // This guarantees no 404 images for tonight's release.
    for (const chapter of storyContent.ko) {
        const sourceImg = path.join(imagesDir, `${chapter.tutorialType}.png`);
        const targetImg = path.join(imagesDir, `ch${chapter.id}.png`);
        
        if (fs.existsSync(sourceImg)) {
            // Only copy if target doesn't exist to not overwrite manual changes
            if (!fs.existsSync(targetImg)) {
                fs.copyFileSync(sourceImg, targetImg);
                console.log(`Copied ${chapter.tutorialType}.png to ch${chapter.id}.png`);
            }
        } else {
            console.log(`Source image not found: ${sourceImg}`);
        }
    }
    
    // Then update story.ts to point to these independent image paths
    const p = path.join(process.cwd(), 'src/data/story.ts');
    
    const newKo = storyContent.ko.map(c => ({
        ...c,
        imagePath: `/assets/images/ch${c.id}.png`
    }));
    const newEn = storyContent.en.map(c => ({
        ...c,
        imagePath: `/assets/images/ch${c.id}.png`
    }));

    const fileContent = `export type ChapterType = {
    id: number;
    volume: string | number;
    title: string;
    subtitle: string;
    year: string;
    imagePath?: string;
    content: string[];
    deepStory?: string[];
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
    console.log("Updated imagePaths in story.ts to unique ch{id}.png format!");
}

main();
