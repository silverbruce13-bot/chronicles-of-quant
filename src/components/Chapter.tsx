import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen, Fingerprint, Sparkles, X } from 'lucide-react';
import type { ChapterType } from '../data/story';
import { mathDetailsContent } from '../data/mathDetails';
import TooltipText from './TooltipText';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { useLanguage } from '../lib/LanguageContext';

interface ChapterProps {
    chapter: ChapterType;
    onNext: () => void;
    onPrev: () => void;
    isFirst: boolean;
    isLast: boolean;
    totalChapters: number;
}

// Helper to parse content with [[text|tooltip]] syntax
const renderText = (text: string) => {
    const parts = text.split(/(\[\[.*?\]\])/g);
    return parts.map((part, i) => {
        if (part.startsWith('[[') && part.endsWith(']]')) {
            const inner = part.slice(2, -2);
            const [word, tooltip] = inner.split('|');
            return <TooltipText key={i} text={word} tooltipText={tooltip} />;
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
    });
};

const DUMMY_RANDOM_WALK = Array.from({ length: 50 }, (_, i) => ({ time: i, price: 100 + Math.random() * 40 - 20 }));

export default function Chapter({ chapter, onNext, onPrev, isFirst, isLast, totalChapters }: ChapterProps) {
    const [isTheoryOpen, setIsTheoryOpen] = useState(false);
    const [quizAnswers, setQuizAnswers] = useState<Record<number, number | null>>({});
    const [quizSubmitted, setQuizSubmitted] = useState<Record<number, boolean>>({});
    const { language, t } = useLanguage();
    const mathData = mathDetailsContent[language][chapter.tutorialType];

    // Reset state when chapter changes
    useEffect(() => {
        setIsTheoryOpen(false);
        setQuizAnswers({});
        setQuizSubmitted({});
    }, [chapter.id]);

    const handleQuizSelect = (qIndex: number, optionIndex: number) => {
        if (!quizSubmitted[qIndex]) {
            setQuizAnswers(prev => ({ ...prev, [qIndex]: optionIndex }));
        }
    };

    const handleQuizSubmit = (qIndex: number) => {
        if (quizAnswers[qIndex] !== null && quizAnswers[qIndex] !== undefined) {
            setQuizSubmitted(prev => ({ ...prev, [qIndex]: true }));
        }
    };

    const renderTutorialGraph = () => {
        if (chapter.tutorialType === 'randomWalk') {
            return (
                <div className="h-48 w-full mt-4 bg-neutral-900 border border-neutral-800 rounded-lg p-2 overflow-hidden shadow-inner">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={DUMMY_RANDOM_WALK}>
                            <XAxis dataKey="time" hide />
                            <YAxis domain={['auto', 'auto']} hide />
                            <Line type="stepAfter" dataKey="price" stroke="#fbbf24" strokeWidth={2} dot={false} animationDuration={2000} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            );
        }
        if (chapter.tutorialType === 'compound') {
            const cmpData = Array.from({ length: 20 }, (_, i) => ({ year: i, amount: 100 * Math.pow(1.1, i) }));
            return (
                <div className="h-48 w-full mt-4 bg-neutral-900 border border-neutral-800 rounded-lg p-2 overflow-hidden shadow-inner">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={cmpData}>
                            <XAxis dataKey="year" hide />
                            <YAxis domain={[0, 'auto']} hide />
                            <Area type="monotone" dataKey="amount" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.2} animationDuration={1500} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            );
        }
        return null;
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center min-h-[85vh] p-4 relative"
        >
            <div className="w-full flex items-center justify-between pointer-events-none absolute top-1/2 -translate-y-1/2 px-2 md:-mx-8 lg:-mx-16 z-10">
                <button
                    onClick={onPrev}
                    disabled={isFirst}
                    className={`pointer-events-auto p-3 rounded-full backdrop-blur-md transition-all ${isFirst ? 'opacity-0' : 'bg-neutral-800/50 hover:bg-neutral-700 hover:scale-110 text-neutral-300'}`}
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={onNext}
                    disabled={isLast}
                    className={`pointer-events-auto p-3 rounded-full backdrop-blur-md transition-all ${isLast ? 'opacity-0' : 'bg-neutral-800/50 hover:bg-amber-500/80 hover:scale-110 text-white shadow-lg'}`}
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            <div className="w-full relative shadow-2xl rounded-3xl overflow-hidden bg-neutral-900/60 backdrop-blur-2xl border border-neutral-800/50 z-0 flex flex-col md:flex-row min-h-[650px]">
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-amber-600 to-amber-400 z-20 transition-all duration-500" style={{ width: `${(chapter.id / totalChapters) * 100}%` }} />

                {/* Narrative Side */}
                <div className={`flex flex-col flex-1 p-8 lg:p-12 transition-all duration-500`}>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="flex items-center justify-center bg-amber-500/10 text-amber-500 w-10 h-10 rounded-xl text-sm font-bold border border-amber-500/20">
                            {chapter.volume}
                        </span>
                        <div className="text-amber-500/80 text-sm font-mono tracking-widest uppercase">{chapter.year}</div>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-neutral-100 to-neutral-400 mb-2 leading-tight">
                        {chapter.title}
                    </h1>
                    <h2 className="text-lg md:text-xl text-neutral-400 font-light mb-8 italic">
                        {chapter.subtitle}
                    </h2>

                    <div className="space-y-6 text-lg md:text-xl text-neutral-300 font-medium leading-relaxed flex-1">
                        {chapter.content.map((paragraph, idx) => (
                            <motion.p
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * idx, duration: 0.5 }}
                            >
                                {renderText(paragraph)}
                            </motion.p>
                        ))}
                    </div>

                    {!isTheoryOpen && chapter.theoryDetail && (
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="mt-8 flex justify-end"
                        >
                            <button
                                onClick={() => setIsTheoryOpen(true)}
                                className="group flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-amber-900/20 transition-all hover:scale-105 active:scale-95"
                            >
                                <BookOpen className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
                                <span>{t('chapter.theory_button')}</span>
                            </button>
                        </motion.div>
                    )}
                </div>

                {/* Theory Side Panel */}
                <AnimatePresence>
                    {isTheoryOpen && (
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: typeof window !== 'undefined' && window.innerWidth >= 768 ? '45%' : '100%', opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            className="bg-neutral-950/80 border-l border-neutral-800 flex flex-col relative overflow-hidden"
                        >
                            <div className="p-8 lg:p-10 h-full overflow-y-auto no-scrollbar relative z-10">
                                <button
                                    onClick={() => setIsTheoryOpen(false)}
                                    className="absolute top-6 right-6 p-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                <h3 className="text-2xl font-bold text-amber-500 mb-6 flex items-center gap-2">
                                    <Sparkles className="w-6 h-6" />
                                    {chapter.theoryDetail?.title}
                                </h3>

                                <div className="space-y-4 text-neutral-300 text-sm leading-relaxed mb-8">
                                    {chapter.theoryDetail?.content.map((p, i) => (
                                        <p key={i}>{p}</p>
                                    ))}
                                </div>

                                {renderTutorialGraph()}

                                {mathData && (
                                    <div className="mt-8">
                                        <h4 className="text-neutral-500 uppercase text-xs font-bold tracking-widest mb-4">{t('chapter.core_concepts')}</h4>
                                        <div className="grid gap-3">
                                            {mathData.concepts.map((concept, i) => (
                                                <div key={i} className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-3">
                                                    <div className="font-bold text-neutral-200 mb-1">{concept.name}</div>
                                                    <div className="text-xs text-neutral-400">{concept.desc}</div>
                                                </div>
                                            ))}
                                        </div>

                                        {mathData.detailedLearning && mathData.detailedLearning.length > 0 && (
                                            <>
                                                <h4 className="text-neutral-500 uppercase text-xs font-bold tracking-widest mt-8 mb-4">{t('chapter.detailed_learning')}</h4>
                                                <div className="grid gap-4">
                                                    {mathData.detailedLearning.map((item, i) => (
                                                        <div key={i} className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-5">
                                                            <div className="font-bold text-amber-500 mb-2">{item.title}</div>
                                                            <div className="space-y-2">
                                                                {item.content.map((p, idx) => (
                                                                    <div key={idx} className="text-sm text-neutral-300 leading-relaxed">{p}</div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        )}

                                        <h4 className="text-neutral-500 uppercase text-xs font-bold tracking-widest mt-8 mb-4">{t('chapter.algorithm_flow')}</h4>
                                        <div className="space-y-0 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-800 before:to-transparent">
                                            {mathData.flowchart.map((step, i) => (
                                                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group py-3">
                                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-neutral-950 bg-neutral-800 text-neutral-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow flex-col absolute left-0 md:left-1/2">
                                                        <span className="text-xs font-bold">{step.step}</span>
                                                    </div>
                                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-neutral-900/80 border border-neutral-800 p-4 rounded-xl shadow ml-14 md:ml-0">
                                                        <div className="flex items-center justify-between mb-1">
                                                            <span className="font-bold text-amber-500 text-sm">{step.title}</span>
                                                        </div>
                                                        <div className="text-xs text-neutral-400 mb-2">{step.desc}</div>
                                                        {step.formula && (
                                                            <div className="bg-black/50 p-2 rounded text-center mx-auto text-amber-200 font-mono text-sm border border-neutral-800/80 inline-block px-3">
                                                                {step.formula}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {mathData.quizzes && mathData.quizzes.length > 0 && (
                                            <>
                                                <h4 className="text-neutral-500 uppercase text-xs font-bold tracking-widest mt-12 mb-4">{t('chapter.quiz_title')}</h4>
                                                <div className="space-y-6">
                                                    {mathData.quizzes.map((quiz, qIndex) => {
                                                        const isSubmitted = quizSubmitted[qIndex];
                                                        const selectedAnswer = quizAnswers[qIndex];
                                                        const isCorrect = selectedAnswer === quiz.answer;

                                                        return (
                                                            <div key={qIndex} className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 shadow-inner">
                                                                <div className="font-bold text-neutral-200 mb-4 text-sm leading-relaxed">
                                                                    <span className="text-amber-500 mr-2">Q{qIndex + 1}.</span>
                                                                    {quiz.question}
                                                                </div>
                                                                <div className="space-y-2">
                                                                    {quiz.options.map((opt, oIndex) => {
                                                                        const isSelected = selectedAnswer === oIndex;
                                                                        let optClass = "border-neutral-700 bg-neutral-800/50 hover:bg-neutral-800 text-neutral-300";

                                                                        if (isSelected) {
                                                                            optClass = "border-amber-500/50 bg-amber-500/10 text-amber-400";
                                                                        }

                                                                        if (isSubmitted) {
                                                                            if (oIndex === quiz.answer) {
                                                                                optClass = "border-emerald-500/50 bg-emerald-500/10 text-emerald-400";
                                                                            } else if (isSelected && !isCorrect) {
                                                                                optClass = "border-red-500/50 bg-red-500/10 text-red-400";
                                                                            } else {
                                                                                optClass = "border-neutral-800 bg-neutral-900 text-neutral-600 opacity-50 cursor-not-allowed";
                                                                            }
                                                                        }

                                                                        return (
                                                                            <button
                                                                                key={oIndex}
                                                                                onClick={() => handleQuizSelect(qIndex, oIndex)}
                                                                                disabled={isSubmitted}
                                                                                className={`w-full text-left p-3 rounded-lg border transition-all text-sm ${optClass} ${!isSubmitted ? 'cursor-pointer hover:border-amber-500/30' : ''}`}
                                                                            >
                                                                                <span className="mr-2 font-mono opacity-50">{oIndex + 1}.</span>
                                                                                {opt}
                                                                            </button>
                                                                        );
                                                                    })}
                                                                </div>

                                                                {!isSubmitted ? (
                                                                    <div className="mt-4 flex justify-end">
                                                                        <button
                                                                            onClick={() => handleQuizSubmit(qIndex)}
                                                                            disabled={selectedAnswer === null || selectedAnswer === undefined}
                                                                            className="px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-500 rounded-lg text-sm font-bold border border-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                                                        >
                                                                            {t('chapter.check_answer')}
                                                                        </button>
                                                                    </div>
                                                                ) : (
                                                                    <motion.div
                                                                        initial={{ opacity: 0, height: 0 }}
                                                                        animate={{ opacity: 1, height: 'auto' }}
                                                                        className={`mt-4 p-4 rounded-lg text-sm border ${isCorrect ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-red-500/10 border-red-500/20'}`}
                                                                    >
                                                                        <div className={`font-bold mb-2 ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                                                                            {isCorrect ? t('chapter.correct') : t('chapter.incorrect')}
                                                                        </div>
                                                                        <div className="text-neutral-300 leading-relaxed">
                                                                            <span className="font-bold opacity-70 mr-2">{t('chapter.explanation')}</span>
                                                                            {quiz.explanation}
                                                                        </div>
                                                                    </motion.div>
                                                                )}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Decorative background glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Footer hint */}
            <div className="mt-8 text-neutral-600 text-sm flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                    <Fingerprint className="w-4 h-4 opacity-50" />
                    <span>{t('chapter.footer_hint')}</span>
                </div>
            </div>
        </motion.div>
    );
}
