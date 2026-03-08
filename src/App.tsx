import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { storyContent } from './data/story';
import Chapter from './components/Chapter';
import { Network, ActivitySquare, Globe } from 'lucide-react';
import { useLanguage } from './lib/LanguageContext';

export default function App() {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const chapters = storyContent[language];

  const handleNext = () => {
    if (currentChapterIndex < chapters.length - 1) {
      setCurrentChapterIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex(prev => prev - 1);
    }
  };

  const currentChapter = chapters[currentChapterIndex];

  const toggleLanguage = () => {
    setLanguage(language === 'ko' ? 'en' : 'ko');
  };

  if (!isStarted) {
    return (
      <div className="min-h-screen bg-neutral-950 text-neutral-200 flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-neutral-950 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_20%,#000_100%)]"></div>

        {/* Language Switcher */}
        <div className="absolute top-6 right-6 z-50">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-700 hover:border-amber-500/50 rounded-full text-sm font-bold text-neutral-300 transition-colors"
          >
            <Globe className="w-4 h-4 text-amber-500" />
            {language === 'ko' ? 'English' : '한국어'}
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center max-w-2xl"
        >
          <div className="inline-flex items-center justify-center p-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl mb-8">
            <Network className="w-8 h-8 text-amber-500 mr-3" />
            <span className="font-mono text-amber-500 tracking-widest font-bold">HEAVEN PROJECT</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-neutral-200 to-neutral-600">
            Chronicles of <span className="text-amber-500">Quant</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 mb-10 font-light max-w-xl mx-auto leading-relaxed">
            {t('app.subtitle')}
          </p>

          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl text-left mb-10 shadow-2xl relative">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <ActivitySquare className="w-24 h-24" />
            </div>
            <h3 className="text-amber-500 font-bold mb-2 uppercase tracking-wide text-sm">{t('app.welcome')}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              {t('app.welcome_desc')}
            </p>
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-neutral-800/50">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs font-mono text-neutral-500">{t('app.system_ready')}</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsStarted(true)}
            className="px-10 py-5 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-xl font-bold rounded-full shadow-[0_0_40px_rgba(245,158,11,0.4)] hover:shadow-[0_0_60px_rgba(245,158,11,0.6)] transition-all flex items-center mx-auto gap-3"
          >
            {t('app.enter_library')}
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 flex flex-col font-sans selection:bg-amber-500/30">
      {/* Ambient background glows */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[50%] rounded-full bg-amber-500/5 blur-[120px]" />
        <div className="absolute bottom-[0%] right-[0%] w-[40%] h-[60%] rounded-full bg-orange-500/5 blur-[120px]" />
      </div>

      <nav className="fixed top-0 left-0 w-full p-6 z-50 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center opacity-70 border-b border-neutral-800/50 pb-4">
          <div className="font-bold tracking-widest text-sm flex items-center gap-2 pointer-events-auto cursor-pointer" onClick={() => setIsStarted(false)}>
            <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,1)]"></div>
            {t('app.title')?.toUpperCase()}
          </div>

          <div className="flex flex-col items-end gap-2">
            {/* Nav Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="pointer-events-auto flex items-center gap-1 px-3 py-1 bg-neutral-900 border border-neutral-700 hover:border-amber-500/50 rounded-full text-xs font-bold text-neutral-300 transition-colors"
            >
              <Globe className="w-3 h-3 text-amber-500" />
              {language === 'ko' ? 'EN' : 'KO'}
            </button>
            <div className="font-mono text-xs text-neutral-500">
              {t('app.vol')} {currentChapter.volume} / {chapters.length}
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center pt-16 z-10 w-full">
        <AnimatePresence mode="wait">
          <Chapter
            key={`${language}-${currentChapterIndex}`}
            chapter={currentChapter}
            onNext={handleNext}
            onPrev={handlePrev}
            isFirst={currentChapterIndex === 0}
            isLast={currentChapterIndex === chapters.length - 1}
            totalChapters={chapters.length}
          />
        </AnimatePresence>
      </main>
    </div>
  );
}
