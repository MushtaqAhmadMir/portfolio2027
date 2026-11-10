import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Layers,
  Cpu,
  Camera,
  Zap,
  WifiOff,
  Mail,
  Copy,
  ExternalLink,
  Terminal,
  Heart,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../components/Common/BrandIcons';
import { useApp } from '../../context/AppContext';
import { PROFILE_DATA } from '../../data/profile';

export const AboutScreen: React.FC = () => {
  const { theme, showToast, triggerCelebration } = useApp();
  const isDark = theme === 'dark';

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.contact.email);
    showToast('Email Copied to Clipboard', PROFILE_DATA.contact.email, 'copied');
    triggerCelebration();
  };

  return (
    <div className="flex-1 w-full p-4 sm:p-5 space-y-5">
      {/* Profile Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-5 rounded-3xl border transition-all ${
          isDark
            ? 'glass-card-dark border-purple-500/20 shadow-xl'
            : 'glass-card-light border-purple-200 shadow-md'
        }`}
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          <img
            src={PROFILE_DATA.avatarUrl}
            alt={PROFILE_DATA.name}
            className="w-20 h-20 rounded-2xl object-cover ring-2 ring-purple-500/30 shadow-md"
          />

          <div className="flex-1">
            <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{PROFILE_DATA.name}</h2>
            <p className={`text-xs font-semibold mt-0.5 ${isDark ? 'text-purple-400' : 'text-purple-700'}`}>
              {PROFILE_DATA.role}
            </p>
            <p className={`text-xs mt-2 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              {PROFILE_DATA.about.intro}
            </p>

            {/* Social Links Row */}
            <div className={`flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-4 pt-3 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
              <a
                href={PROFILE_DATA.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors ${
                  isDark
                    ? 'bg-[#0a66c2]/20 border-[#0a66c2]/40 text-blue-300 hover:bg-[#0a66c2]/30'
                    : 'bg-blue-50 border-blue-200 text-blue-800 hover:bg-blue-100'
                }`}
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
              </a>

              <a
                href={PROFILE_DATA.contact.github}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors ${
                  isDark
                    ? 'bg-white/5 border-white/15 text-slate-200 hover:bg-white/10'
                    : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
                }`}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                  isDark
                    ? 'bg-purple-500/15 border-purple-500/30 text-purple-300 hover:bg-purple-500/25'
                    : 'bg-purple-50 border-purple-200 text-purple-800 hover:bg-purple-100'
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{PROFILE_DATA.contact.email}</span>
                <Copy className="w-2.5 h-2.5 opacity-60" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Developer Journey Card */}
      <div
        className={`p-5 rounded-2xl border transition-all ${
          isDark ? 'bg-[#101422]/70 border-white/5' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-center gap-2 mb-2 text-purple-500">
          <Terminal className="w-4 h-4" />
          <h3 className={`text-xs font-bold uppercase tracking-wider font-mono ${isDark ? 'text-purple-400' : 'text-purple-700'}`}>
            The Developer Journey
          </h3>
        </div>
        <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          {PROFILE_DATA.about.journey}
        </p>
      </div>

      {/* 6 Core Competencies Grid */}
      <div>
        <div className="mb-3 px-1">
          <h3 className={`text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-1.5 ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>
            <Sparkles className="w-3.5 h-3.5 text-purple-500" />
            <span>Technical Pillars & Native Specializations</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PROFILE_DATA.nativeCapabilities.map((cap, idx) => {
            let IconComponent = Layers;
            if (cap.icon === 'Award') IconComponent = Award;
            else if (cap.icon === 'Cpu') IconComponent = Cpu;
            else if (cap.icon === 'Camera') IconComponent = Camera;
            else if (cap.icon === 'Zap') IconComponent = Zap;
            else if (cap.icon === 'WifiOff') IconComponent = WifiOff;

            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.04 }}
                className={`p-4 rounded-2xl border transition-all ${
                  isDark
                    ? 'bg-[#101422]/60 border-white/5 hover:border-purple-500/30'
                    : 'bg-white border-slate-200 hover:border-purple-300'
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-xl bg-purple-500/15 border border-purple-500/25 text-purple-500">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h4 className={`text-xs font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {cap.title}
                  </h4>
                </div>
                <p className={`text-[11px] leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {cap.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Technical Philosophy & Problem-Solving */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div
          className={`p-4 rounded-2xl border transition-all ${
            isDark ? 'bg-[#101422]/60 border-white/5' : 'bg-white border-slate-200'
          }`}
        >
          <h4 className={`text-xs font-bold uppercase tracking-wider font-mono mb-2 ${isDark ? 'text-purple-300' : 'text-purple-800'}`}>
            Technical Philosophy
          </h4>
          <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            {PROFILE_DATA.about.philosophy}
          </p>
        </div>

        <div
          className={`p-4 rounded-2xl border transition-all ${
            isDark ? 'bg-[#101422]/60 border-white/5' : 'bg-white border-slate-200'
          }`}
        >
          <h4 className={`text-xs font-bold uppercase tracking-wider font-mono mb-2 ${isDark ? 'text-indigo-300' : 'text-indigo-800'}`}>
            Problem-Solving Approach
          </h4>
          <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            {PROFILE_DATA.about.problemSolving}
          </p>
        </div>
      </div>

      {/* What I Enjoy Building */}
      <div
        className={`p-4 rounded-2xl border transition-all ${
          isDark ? 'bg-[#101422]/60 border-white/5' : 'bg-white border-slate-200'
        }`}
      >
        <h4 className={`text-xs font-bold uppercase tracking-wider font-mono mb-3 flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          <Heart className="w-3.5 h-3.5 text-pink-500" />
          <span>What I Enjoy Building</span>
        </h4>

        <div className="space-y-2">
          {PROFILE_DATA.about.whatIBuild.map((item) => (
            <div key={item} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
              <span className={`text-xs ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
