import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ko' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    ko: {
        'app.title': 'Chronicles of Quant',
        'app.subtitle': '금융 역사를 관통하는 수학적 아름다움의 탐험. 오픈 소스의 정신으로 엮어낸 첫 번째 튜토리얼.',
        'app.welcome': 'Welcome Collaborator',
        'app.welcome_desc': '"우리는 폴샘 버추얼팀과 함께 일합니다. 모든 지식은 투명하게 공개되며, 협력과 공유를 통해 더 나은 세계를 구축합니다. 이 튜토리얼 앱은 과거의 지혜를 모아 우주시대로 나아가는 헤븐 프로젝트의 첫 걸음입니다."',
        'app.system_ready': 'System Ready • No Human Bottleneck',
        'app.enter_library': '역사의 도서관 입장하기',
        'app.vol': 'VOL',
        'chapter.theory_button': '딥다이브: 이론 보기',
        'chapter.core_concepts': '핵심 개념',
        'chapter.algorithm_flow': '알고리즘 흐름',
        'chapter.detailed_learning': '상세 개념 학습',
        'chapter.quiz_title': '기본 개념 확인 퀴즈',
        'chapter.check_answer': '정답 확인',
        'chapter.correct': '정답입니다! 🎉',
        'chapter.incorrect': '오답입니다. 다시 시도해보세요.',
        'chapter.explanation': '해설:',
        'chapter.footer_hint': 'HEAVEN PROJECT : PaulSam Virtual Team Active'
    },
    en: {
        'app.title': 'Chronicles of Quant',
        'app.subtitle': 'An exploration of mathematical beauty through financial history. The first tutorial woven with the spirit of open source.',
        'app.welcome': 'Welcome Collaborator',
        'app.welcome_desc': '"We work with PaulSam Virtual Team. All knowledge is transparently shared, and we build a better world through cooperation and sharing. This tutorial app is the first step of the Heaven Project, gathering past wisdom to advance into the space age."',
        'app.system_ready': 'System Ready • No Human Bottleneck',
        'app.enter_library': 'Enter the Library of History',
        'app.vol': 'VOL',
        'chapter.theory_button': 'Deep Dive: View Theory',
        'chapter.core_concepts': 'Core Concepts',
        'chapter.algorithm_flow': 'Algorithm Flow',
        'chapter.detailed_learning': 'Detailed Concept Learning',
        'chapter.quiz_title': 'Basic Concept Quiz',
        'chapter.check_answer': 'Check Answer',
        'chapter.correct': 'Correct! 🎉',
        'chapter.incorrect': 'Incorrect. Try again.',
        'chapter.explanation': 'Explanation:',
        'chapter.footer_hint': 'HEAVEN PROJECT : PaulSam Virtual Team Active'
    }
};

const LanguageContext = createContext<LanguageContextType>({
    language: 'ko',
    setLanguage: () => { },
    t: () => ''
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>('ko');

    useEffect(() => {
        const saved = localStorage.getItem('language') as Language;
        if (saved && (saved === 'ko' || saved === 'en')) {
            setLanguageState(saved);
        } else {
            const browserLang = navigator.language;
            if (browserLang.toLowerCase().includes('ko')) {
                setLanguageState('ko');
            } else {
                setLanguageState('en');
            }
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    const t = (key: string): string => {
        return (translations[language] as any)[key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
