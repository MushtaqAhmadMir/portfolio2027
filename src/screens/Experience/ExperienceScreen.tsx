import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
  Download,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { EXPERIENCES_DATA } from '../../data/experience';
import { PROFILE_DATA } from '../../data/profile';

export const ExperienceScreen: React.FC = () => {
  const { theme, showToast, triggerCelebration } = useApp();
  const isDark = theme === 'dark';

  const handleDownload = () => {
    showToast('Resume Downloaded', 'Mushtaq Ahmad Mir Resume PDF saved', 'success');
    triggerCelebration();
  };

  return (
    <div className="flex-1 w-full p-4 sm:p-5 space-y-5 pb-6">
      {/* Experience Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-purple-400" />
            <span>Career Experience & Timeline</span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            6+ Years specializing in React Native, Flutter, IoT camera integrations, and enterprise mobile.
          </p>
        </div>

        <a
          href={PROFILE_DATA.resumeUrl}
          download="Mushtaq_Ahmad_Mir_Resume.pdf"
          onClick={handleDownload}
          className="self-start sm:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white shadow-md shadow-purple-900/30 transition-colors cursor-pointer"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Full Resume PDF</span>
        </a>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-6 sm:pl-8 space-y-6 before:content-[''] before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:via-indigo-500 before:to-slate-700">
        {EXPERIENCES_DATA.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.08 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[27px] sm:-left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#0b0e17] ring-4 ring-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-300" />
            </div>

            {/* Experience Card */}
            <div
              className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                isDark
                  ? 'bg-[#101422]/80 border-white/10 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-950/30'
                  : 'bg-white border-slate-200 hover:border-purple-300 hover:shadow-md'
              }`}
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span>{exp.company}</span>
                    {idx === 0 && (
                      <span className="px-1.5 py-0.5 rounded-full text-[9px] font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        Current Role
                      </span>
                    )}
                  </h3>
                  <div className="text-xs font-semibold text-purple-400 mt-0.5">
                    {exp.role}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono mt-1 sm:mt-0">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-purple-400" />
                    <span>{exp.period}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-indigo-400" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                {exp.summary}
              </p>

              {/* Key Achievements Badges */}
              {exp.achievements.length > 0 && (
                <div className="mb-3 p-2.5 rounded-xl bg-purple-950/25 border border-purple-500/20 space-y-1">
                  <span className="text-[10px] font-mono font-bold text-purple-300 uppercase flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    <span>Key Achievements & Impact</span>
                  </span>
                  <div className="space-y-1">
                    {exp.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="text-[11px] text-slate-300 flex items-start gap-1.5">
                        <span className="text-purple-400">•</span>
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Responsibilities Bullets */}
              <div className="space-y-1.5 mb-3">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                  Responsibilities & Contributions
                </span>
                {exp.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-2 border-t border-white/5 flex flex-wrap gap-1">
                {exp.stack.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md text-[9.5px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
