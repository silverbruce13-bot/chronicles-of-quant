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
                    cursor-pointer font-bold transition-all px-1 py-0.5 rounded-sm mx-1
                    inline-flex items-center gap-1
                    ${isOpen ? 'bg-blue-500/20 text-blue-400 outline outline-1 outline-blue-500/50' : 'text-blue-400 hover:text-blue-300 hover:bg-blue-500/10'}
                `}
            >
                <span className="underline decoration-dotted underline-offset-4">{text}</span>
                <HelpCircle className="w-4 h-4 text-blue-500" />
            </span>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
                        className="absolute bottom-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-72 md:w-96 p-5 bg-neutral-950/95 backdrop-blur-xl border border-blue-500/40 rounded-2xl shadow-[0_20px_60px_-15px_rgba(59,130,246,0.4)] text-sm font-medium z-50 text-left pointer-events-auto"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-3 text-neutral-400 hover:text-white transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 rounded-t-2xl" />

                        <div className="flex items-start gap-4">
                            <div className="flex-1 pr-2">
                                <span className="block text-blue-400 font-extrabold mb-3 text-[10px] md:text-sm uppercase tracking-widest flex items-center gap-1.5">
                                    <HelpCircle className="w-4 h-4 text-blue-500" />
                                    일타강사 샌드박스 해설
                                </span>
                                <div className="text-neutral-200 leading-relaxed font-medium whitespace-pre-wrap text-sm md:text-base">
                                    {tooltipText}
                                </div>
                            </div>
                        </div>
                        {/* Downward Arrow */}
                        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-neutral-950 border-r border-b border-blue-500/40 rotate-45 rounded-sm" />
                    </motion.div>
                )}
            </AnimatePresence>
        </span>
    );
}
