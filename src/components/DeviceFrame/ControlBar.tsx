import React from 'react';
import {
  Smartphone,
  Tablet,
  Monitor,
  Download,
  Volume2,
  VolumeX,
  RotateCcw,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { PROFILE_DATA } from '../../data/profile';

export const ControlBar: React.FC = () => {
  const {
    deviceMode,
    setDeviceMode,
    platform,
    setPlatform,
    theme,
    toggleTheme,
    soundEnabled,
    toggleSound,
    setHasLaunched,
    showToast,
  } = useApp();

  const isDark = theme === 'dark';

  const replayLaunch = () => {
    setHasLaunched(false);
    showToast('Replaying Splash Screen', 'Welcome to Mushtaq’s App Experience', 'info');
  };

  return (
    <header
      className={`w-full backdrop-blur-xl border-b px-4 py-2.5 z-40 select-none transition-colors duration-200 ${
        isDark
          ? 'bg-[#080a12]/95 border-white/10 text-white'
          : 'bg-white/95 border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Branding badge & Available Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-violet-400 flex items-center justify-center font-bold text-white text-xs shadow-md shadow-purple-900/30">
              MM
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Mushtaq Ahmad Mir
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] font-mono bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available for Hire
                </span>
              </div>
              <p className={`text-[10px] font-mono hidden sm:block ${isDark ? 'text-purple-300/70' : 'text-purple-700'}`}>
                Senior Mobile App Developer (React Native & Flutter)
              </p>
            </div>
          </div>
        </div>

        {/* Center: Device Preview Switcher [ Mobile | Tablet | Desktop ] */}
        <div
          className={`flex items-center gap-1 p-1 rounded-xl border shadow-inner transition-colors ${
            isDark ? 'bg-black/60 border-white/10' : 'bg-slate-100 border-slate-300'
          }`}
        >
          <button
            type="button"
            onClick={() => setDeviceMode('mobile')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              deviceMode === 'mobile'
                ? 'bg-purple-600 text-white shadow font-semibold'
                : isDark
                ? 'text-slate-400 hover:text-white'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Mobile Phone Frame"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px]">Mobile</span>
          </button>

          <button
            type="button"
            onClick={() => setDeviceMode('tablet')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              deviceMode === 'tablet'
                ? 'bg-purple-600 text-white shadow font-semibold'
                : isDark
                ? 'text-slate-400 hover:text-white'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Tablet Preview"
          >
            <Tablet className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px]">Tablet</span>
          </button>

          <button
            type="button"
            onClick={() => setDeviceMode('desktop')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              deviceMode === 'desktop'
                ? 'bg-purple-600 text-white shadow font-semibold'
                : isDark
                ? 'text-slate-400 hover:text-white'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Desktop Workspace Window"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px]">Desktop</span>
          </button>
        </div>

        {/* Right: Platform & Theme Controls */}
        <div className="flex items-center gap-2">
          {/* OS Switcher */}
          <div
            className={`flex items-center p-0.5 rounded-xl border transition-colors ${
              isDark ? 'bg-black/60 border-white/10' : 'bg-slate-100 border-slate-300'
            }`}
          >
            <button
              type="button"
              onClick={() => setPlatform('android')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all cursor-pointer ${
                platform === 'android'
                  ? 'bg-emerald-600 text-white font-bold shadow'
                  : isDark
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Android
            </button>
            <button
              type="button"
              onClick={() => setPlatform('ios')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all cursor-pointer ${
                platform === 'ios'
                  ? 'bg-indigo-600 text-white font-bold shadow'
                  : isDark
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              iOS
            </button>
          </div>

          {/* Sound FX Toggle */}
          <button
            type="button"
            onClick={toggleSound}
            className={`p-1.5 rounded-xl border transition-colors cursor-pointer ${
              soundEnabled
                ? 'bg-purple-950/60 border-purple-500/40 text-purple-300'
                : isDark
                ? 'bg-black/40 border-white/10 text-slate-500'
                : 'bg-slate-100 border-slate-300 text-slate-500'
            }`}
            title={soundEnabled ? 'UI Sound Effects: On' : 'UI Sound Effects: Muted'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Replay App Launch */}
          <button
            type="button"
            onClick={replayLaunch}
            className={`p-1.5 rounded-xl border transition-colors cursor-pointer ${
              isDark
                ? 'bg-black/40 border-white/10 text-slate-400 hover:text-purple-300 hover:border-purple-500/40'
                : 'bg-slate-100 border-slate-300 text-slate-600 hover:text-purple-700 hover:border-purple-400'
            }`}
            title="Replay Splash Screen"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Resume PDF Download */}
          <a
            href={PROFILE_DATA.resumeUrl}
            download="Mushtaq_Ahmad_Mir_Resume.pdf"
            onClick={() => showToast('Resume Downloaded', 'Mushtaq Ahmad Mir Resume PDF saved', 'success')}
            className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-md shadow-purple-900/30 transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
};
