import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ArrowLeft, Download, Moon, Sun, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { PROFILE_DATA } from '../../data/profile';

export const AppHeader: React.FC = () => {
  const {
    platform,
    setPlatform,
    theme,
    toggleTheme,
    soundEnabled,
    toggleSound,
    activeTab,
    selectedProject,
    closeProject,
    selectedBlog,
    setSelectedBlog,
    showToast,
  } = useApp();

  const isDark = theme === 'dark';

  // Title depending on state
  let headerTitle = 'Mushtaq Ahmad Mir';
  let subtitle = 'Senior Mobile Engineer';

  if (selectedProject) {
    headerTitle = selectedProject.name;
    subtitle = selectedProject.tagline;
  } else if (selectedBlog) {
    headerTitle = 'Article';
    subtitle = selectedBlog.title;
  } else {
    switch (activeTab) {
      case 'home':
        headerTitle = 'Mushtaq Ahmad Mir';
        subtitle = 'Senior Mobile App Developer';
        break;
      case 'about':
        headerTitle = 'About Developer';
        subtitle = 'Journey, Philosophy & Native Core';
        break;
      case 'projects':
        headerTitle = 'Featured Projects';
        subtitle = 'Industrial IoT, Fintech & Mobile Apps';
        break;
      case 'experience':
        headerTitle = 'Career Experience';
        subtitle = '6+ Years Engineering Timeline';
        break;
      case 'skills':
        headerTitle = 'Skills Dashboard';
        subtitle = 'Architecture, SDKs & Tooling';
        break;
      case 'more':
        headerTitle = 'Hub & Contact';
        subtitle = 'Education, Certs & Get in Touch';
        break;
    }
  }

  const isDetailView = Boolean(selectedProject || selectedBlog);

  const handleBack = () => {
    if (selectedProject) closeProject();
    if (selectedBlog) setSelectedBlog(null);
  };

  return (
    <header
      className={`w-full px-4 pt-2 pb-3 transition-colors select-none z-20 border-b ${
        isDark
          ? 'bg-[#0b0e17]/85 border-white/5 backdrop-blur-md text-white'
          : 'bg-white/90 border-slate-200/80 backdrop-blur-md text-slate-900'
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        {/* Left Side: Back button or Profile Avatar */}
        <div className="flex items-center gap-2.5 min-w-0">
          {isDetailView ? (
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={handleBack}
              className={`flex items-center gap-1 text-xs font-medium px-2 py-1.5 rounded-xl transition-all cursor-pointer ${
                platform === 'ios'
                  ? 'text-purple-400 hover:text-purple-300'
                  : isDark
                  ? 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                  : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
              }`}
            >
              {platform === 'ios' ? (
                <>
                  <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
                  <span className="font-ios text-[13px]">Back</span>
                </>
              ) : (
                <>
                  <ArrowLeft className="w-4 h-4" />
                  <span className="font-android text-[12px]">Back</span>
                </>
              )}
            </motion.button>
          ) : (
            <div className="relative group cursor-pointer">
              <img
                src={PROFILE_DATA.avatarUrl}
                alt="Mushtaq Ahmad Mir"
                className="w-9 h-9 rounded-full object-cover ring-2 ring-purple-500/40 shadow-sm"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[#0b0e17] animate-status-pulse" />
            </div>
          )}

          <div className="truncate">
            <h1 className="text-sm font-semibold tracking-tight truncate leading-tight flex items-center gap-1.5">
              <span>{headerTitle}</span>
              {!isDetailView && (
                <span className="inline-flex items-center px-1.5 py-0.2 rounded-full text-[9px] font-mono bg-purple-500/15 text-purple-400 border border-purple-500/20">
                  PRO
                </span>
              )}
            </h1>
            <p className={`text-[10px] truncate leading-tight mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>{subtitle}</p>
          </div>
        </div>

        {/* Right Side: Platform Switcher [Android | iOS] + Theme/Sound */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {/* Platform Switcher */}
          <div
            className={`p-0.5 rounded-full flex items-center border transition-all ${
              isDark ? 'bg-slate-900/90 border-white/10' : 'bg-slate-100 border-slate-300/70'
            }`}
          >
            <button
              type="button"
              onClick={() => setPlatform('android')}
              className={`px-2 py-0.5 rounded-full text-[10px] font-medium transition-all cursor-pointer ${
                platform === 'android'
                  ? 'bg-purple-600 text-white shadow-sm font-bold'
                  : isDark
                  ? 'text-slate-400 hover:text-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Switch to Android Material 3 Design"
            >
              Android
            </button>
            <button
              type="button"
              onClick={() => setPlatform('ios')}
              className={`px-2 py-0.5 rounded-full text-[10px] font-medium transition-all cursor-pointer ${
                platform === 'ios'
                  ? 'bg-purple-600 text-white shadow-sm font-bold'
                  : isDark
                  ? 'text-slate-400 hover:text-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Switch to iOS Cupertino Design"
            >
              iOS
            </button>
          </div>

          {/* Quick Resume Download Icon */}
          <a
            href={PROFILE_DATA.resumeUrl}
            download="Mushtaq_Ahmad_Mir_Resume.pdf"
            onClick={() => showToast('Resume Downloaded', 'Mushtaq Ahmad Mir Resume PDF saved', 'success')}
            className={`p-1.5 rounded-full transition-colors cursor-pointer ${
              isDark ? 'text-slate-300 hover:bg-white/10' : 'text-slate-600 hover:bg-slate-200'
            }`}
            title="Download Resume (PDF)"
          >
            <Download className="w-3.5 h-3.5" />
          </a>

          {/* Theme Switcher */}
          <button
            type="button"
            onClick={toggleTheme}
            className={`p-1.5 rounded-full transition-colors cursor-pointer ${
              isDark ? 'text-amber-300 hover:bg-white/10' : 'text-slate-600 hover:bg-slate-200'
            }`}
            title={`Toggle ${isDark ? 'Light' : 'Dark'} Mode`}
          >
            {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </header>
  );
};
