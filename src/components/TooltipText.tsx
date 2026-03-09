import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, X } from 'lucide-react';

interface TooltipTextProps {
    text: string;
    tooltipText: string;
}

export default function TooltipText({ text, tooltipText }: TooltipTextProps) {
    const [isOpen, setIsOpen] = useState(false);
    const popoverRef = useRef<HTMLSpanElement>(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <span className="relative inline-block z-10" ref={popoverRef}>
            <span
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    cursor-pointer font-bold transition-all px-1.5 py-0.5 rounded-md mx-[2px] 
                    inline-flex items-center gap-1
                    ${isOpen ? 'bg-amber-500 text-neutral-900 shadow-sm' : 'bg-amber-500/15 text-amber-400 hover:bg-amber-500/25'}
                `}
            >
                {text}
                <HelpCircle className="w-4 h-4 opacity-80" />
            </span>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
                        className="absolute bottom-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-72 md:w-96 p-5 bg-neutral-950/95 backdrop-blur-xl border border-amber-500/40 rounded-2xl shadow-[0_20px_60px_-15px_rgba(245,158,11,0.4)] text-sm font-medium z-50 text-left pointer-events-auto"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-3 text-neutral-400 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 rounded-t-2xl" />

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center shadow-inner border border-amber-500/20 text-2xl">
                                👨‍🏫
                            </div>
                            <div className="flex-1 pr-2">
                                <span className="block text-amber-500 font-extrabold mb-2 text-[10px] md:text-sm uppercase tracking-widest flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                                    일타강사 샌드박스 해설
                                </span>
                                <div className="text-neutral-200 leading-relaxed font-medium whitespace-pre-wrap text-sm md:text-base">
                                    {tooltipText}
                                </div>
                            </div>
                        </div>
                        {/* Downward Arrow */}
                        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-neutral-950 border-r border-b border-amber-500/40 rotate-45 rounded-sm" />
                    </motion.div>
                )}
            </AnimatePresence>
        </span>
    );
}
