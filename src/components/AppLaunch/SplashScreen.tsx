import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Sparkles, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const SplashScreen: React.FC = () => {
  const { hasLaunched, dismissSplash } = useApp();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast automatic progress sequence (~1.3s total)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(dismissSplash, 250);
          return 100;
        }
        // Accelerating progress curve
        const step = prev < 50 ? 12 : prev < 85 ? 18 : 25;
        return Math.min(100, prev + step);
      });
    }, 110);

    return () => clearInterval(interval);
  }, [dismissSplash]);

  return (
    <AnimatePresence>
      {!hasLaunched && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          onClick={dismissSplash}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07090e] text-white cursor-pointer select-none overflow-hidden"
        >
          {/* Ambient luminous background orbs */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* Central Logo & Monogram */}
          <div className="relative flex flex-col items-center text-center px-6 z-10 max-w-sm">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative mb-6"
            >
              {/* Outer glowing halo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 animate-pulse" />

              {/* App Icon Monogram Tile */}
              <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-[#1c1836] via-[#121324] to-[#0c0d18] border border-purple-500/30 flex items-center justify-center shadow-2xl shadow-purple-900/40">
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-transparent">
                      M
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
                    <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-purple-300 via-indigo-200 to-white bg-clip-text text-transparent">
                      M
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mt-0.5 text-[9px] uppercase tracking-widest text-purple-400/90 font-mono font-medium">
                    <Smartphone className="w-2.5 h-2.5" />
                    <span>App OS</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Typography */}
            <motion.h1
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="text-xl font-bold tracking-tight text-white"
            >
              Mushtaq Ahmad Mir
            </motion.h1>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.45 }}
              className="text-xs text-purple-300/80 mt-1 font-medium tracking-wide flex items-center gap-1.5"
            >
              <Sparkles className="w-3 h-3 text-purple-400" />
              Senior Mobile Application Developer
            </motion.p>

            {/* Progress indicator bar */}
            <div className="w-48 h-1 bg-white/10 rounded-full mt-7 overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 via-indigo-400 to-purple-300 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            {/* Tap to enter hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex items-center gap-1.5 text-[11px] text-slate-400 font-mono hover:text-white transition-colors"
            >
              <span>Tap anywhere to launch</span>
              <ArrowRight className="w-3 h-3 text-purple-400" />
            </motion.div>
          </div>

          {/* Footer build meta */}
          <div className="absolute bottom-6 text-[10px] text-slate-500 font-mono tracking-wider flex items-center gap-2">
            <span>React Native & Flutter Edition</span>
            <span>•</span>
            <span className="text-purple-400">v2.7.0</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
