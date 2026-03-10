import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, X, Sparkles, Loader2 } from 'lucide-react';
import { explainConcept } from '../lib/geminiService';

interface SelectionState {
    text: string;
    context: string;
    x: number;
    y: number;
}

export default function TextSelectionAgent() {
    const [selection, setSelection] = useState<SelectionState | null>(null);
    const [explanation, setExplanation] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);

    // Handle text selection
    useEffect(() => {
        const handleMouseUp = (e: MouseEvent) => {
            // Prevent clearing if clicking inside the popup
            if (popupRef.current && popupRef.current.contains(e.target as Node)) {
                return;
            }

            const currentSelection = window.getSelection();
            if (currentSelection && currentSelection.toString().trim().length > 0) {
                const text = currentSelection.toString().trim();

                // Limit selection length to prevent abuse or UI bugs
                if (text.length < 2 || text.length > 300) {
                    setSelection(null);
                    setIsOpen(false);
                    return;
                }

                // If user selected text that isn't part of the content (e.g., UI stuff), we can try to filter it,
                // but for now, we'll allow selection on most text.

                const range = currentSelection.getRangeAt(0);
                const rect = range.getBoundingClientRect();

                let context = currentSelection.anchorNode?.parentElement?.textContent || "";
                context = context.substring(0, 400); // Send surrounding text for context

                setSelection({
                    text,
                    context,
                    x: rect.left + rect.width / 2 + window.scrollX,
                    y: rect.top + window.scrollY,
                });
                setExplanation(null);
                setIsOpen(false);
            } else {
                // If they clicked outside and there's no selection, clear everything
                setSelection(null);
                setIsOpen(false);
            }
        };

        // Delay slight to handle double click selections properly
        const timerCallback = (e: MouseEvent) => setTimeout(() => handleMouseUp(e), 50);

        document.addEventListener('mouseup', timerCallback);
        return () => document.removeEventListener('mouseup', timerCallback);
    }, []);

    const handleAskInstructor = async () => {
        if (!selection) return;
        setIsOpen(true);
        setIsLoading(true);
        try {
            const answer = await explainConcept(selection.text, selection.context);
            setExplanation(answer);
        } catch (error) {
            setExplanation("오류가 발생했습니다. 다시 시도해 주세요.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {/* The floating Help Button over the selected text */}
            {selection && !isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute z-50 pointer-events-auto"
                    style={{ left: selection.x, top: selection.y - 40, transform: 'translateX(-50%)' }}
                >
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleAskInstructor();
                        }}
                        className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-neutral-900 px-3 py-2 rounded-full shadow-xl shadow-amber-500/20 font-bold text-sm transition-transform hover:scale-105"
                    >
                        <HelpCircle className="w-4 h-4" />
                        일타강사 해설
                    </button>
                    {/* Tick pointing down */}
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-amber-500 rotate-45" />
                </motion.div>
            )}

            {/* The Active Explanation Sandbox */}
            {isOpen && selection && (
                <motion.div
                    ref={popupRef}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", bounce: 0.4 }}
                    className="absolute z-[100] w-80 md:w-96 p-5 bg-neutral-950/95 backdrop-blur-xl border border-amber-500/40 rounded-2xl shadow-[0_20px_60px_-15px_rgba(245,158,11,0.5)] flex flex-col pointer-events-auto"
                    // Positioning the popup either above or below depending on Y position to stay in viewport
                    style={{
                        left: Math.max(16, Math.min(selection.x - 160, window.innerWidth - 380)),
                        top: selection.y > 250 ? selection.y - 200 : selection.y + 30
                    }}
                >
                    <button
                        onClick={() => {
                            setIsOpen(false);
                            setSelection(null);
                        }}
                        className="absolute top-3 right-3 text-neutral-400 hover:text-white bg-neutral-900 rounded-full p-1"
                    >
                        <X className="w-4 h-4" />
                    </button>

                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 rounded-t-2xl" />

                    <div className="flex items-start gap-4 mt-2">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center shadow-inner border border-amber-500/20 text-2xl">
                            👨‍🏫
                        </div>
                        <div className="flex-1 pr-4">
                            <span className="flex items-center gap-1.5 text-amber-500 font-extrabold mb-1 text-xs uppercase tracking-widest">
                                <Sparkles className="w-3.5 h-3.5" />
                                일타강사 폴 쌤 참견
                            </span>
                            <div className="text-amber-200/60 text-xs italic mb-3 line-clamp-2 bg-neutral-900/50 p-2 rounded">
                                "{selection.text}"
                            </div>

                            {isLoading ? (
                                <div className="flex flex-col items-center justify-center py-4 space-y-2">
                                    <Loader2 className="w-6 h-6 text-amber-500 animate-spin" />
                                    <span className="text-neutral-400 text-xs text-center animate-pulse">정확한 해설을<br />가져오고 있어요...</span>
                                </div>
                            ) : (
                                <div className="text-neutral-200 text-sm md:text-base leading-relaxed break-keep">
                                    {explanation}
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
