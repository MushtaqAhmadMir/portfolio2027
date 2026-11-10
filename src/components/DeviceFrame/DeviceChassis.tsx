import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';
import { StatusBar } from './StatusBar';
import { AppHeader } from '../Navigation/AppHeader';
import { BottomNav } from '../Navigation/BottomNav';

interface DeviceChassisProps {
  children: React.ReactNode;
}

export const DeviceChassis: React.FC<DeviceChassisProps> = ({ children }) => {
  const {
    deviceMode,
    platform,
    theme,
    setActiveTab,
    togglePlatform,
    toggleTheme,
    toggleSound,
  } = useApp();

  const [isMobileScreen, setIsMobileScreen] = useState(false);

  // Detect physical mobile/tablet browser screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // Global keyboard shortcuts for quick exploration
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input or textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === '1') setActiveTab('home');
      else if (e.key === '2') setActiveTab('about');
      else if (e.key === '3') setActiveTab('projects');
      else if (e.key === '4') setActiveTab('experience');
      else if (e.key === '5') setActiveTab('skills');
      else if (e.key === '6') setActiveTab('more');
      else if (e.key.toLowerCase() === 'p') togglePlatform();
      else if (e.key.toLowerCase() === 't') toggleTheme();
      else if (e.key.toLowerCase() === 'm') toggleSound();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setActiveTab, togglePlatform, toggleTheme, toggleSound]);

  const isDark = theme === 'dark';

  // If visitor is on an actual mobile device screen, render edge-to-edge without chassis
  if (isMobileScreen) {
    return (
      <div
        className={`w-full h-[100dvh] flex flex-col transition-colors overflow-hidden ${
          isDark ? 'bg-[#090c15] text-slate-100' : 'bg-slate-50 text-slate-900'
        }`}
      >
        <StatusBar />
        <AppHeader />
        <main className="flex-1 min-h-0 overflow-y-auto custom-scrollbar flex flex-col relative">
          {children}
        </main>
        <div className="flex-shrink-0 z-30 relative">
          <BottomNav />
        </div>
      </div>
    );
  }

  // Desktop viewport container
  return (
    <div className="flex-1 w-full flex items-center justify-center p-3 sm:p-6 lg:p-8 select-none relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Frame Dimensions according to Device Mode */}
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        className={`relative flex flex-col transition-all shadow-2xl z-10 ${
          deviceMode === 'mobile'
            ? 'w-[420px] h-[870px] max-h-[92vh] rounded-[48px] p-3'
            : deviceMode === 'tablet'
            ? 'w-[780px] h-[880px] max-h-[92vh] rounded-[36px] p-3.5'
            : 'w-full max-w-5xl h-[880px] max-h-[92vh] rounded-3xl p-3'
        } ${
          isDark
            ? 'bg-[#151824] border-[3px] border-[#2c3144] shadow-purple-950/40 glow-ambient'
            : 'bg-slate-200 border-[3px] border-slate-300 shadow-slate-400/40'
        }`}
      >
        {/* Hardware side buttons (Only on Mobile/Tablet preview frames) */}
        {deviceMode === 'mobile' && (
          <>
            {/* Left Volume Up / Down */}
            <div className="absolute -left-[5px] top-28 w-[3px] h-12 bg-slate-600 rounded-l" />
            <div className="absolute -left-[5px] top-44 w-[3px] h-12 bg-slate-600 rounded-l" />
            {/* Right Power Button */}
            <div className="absolute -right-[5px] top-36 w-[3px] h-16 bg-slate-600 rounded-r" />
          </>
        )}

        {/* Inner Screen Area */}
        <div
          className={`w-full h-full flex flex-col overflow-hidden relative transition-colors ${
            deviceMode === 'mobile'
              ? 'rounded-[38px]'
              : deviceMode === 'tablet'
              ? 'rounded-[28px]'
              : 'rounded-2xl'
          } ${
            isDark
              ? 'bg-[#090c15] text-slate-100 ring-1 ring-white/10'
              : 'bg-[#fafafa] text-slate-900 ring-1 ring-black/10'
          }`}
        >
          {/* macOS title bar dots on Desktop preview mode */}
          {deviceMode === 'desktop' && (
            <div className="w-full px-4 py-2 bg-slate-950/40 border-b border-white/5 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] text-slate-400 font-mono ml-3 font-medium">
                Mushtaq Ahmad Mir — Senior Mobile App Studio (React Native & Flutter)
              </span>
            </div>
          )}

          {/* Device Status Bar */}
          <StatusBar />

          {/* In-App Application Header */}
          <AppHeader />

          {/* Scrollable Content Viewport */}
          <main className="flex-1 min-h-0 overflow-y-auto custom-scrollbar flex flex-col relative">
            {children}
          </main>

          {/* In-App Bottom Navigation */}
          <div className="flex-shrink-0 z-30 relative">
            <BottomNav />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
