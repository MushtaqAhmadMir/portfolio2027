import React from 'react';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ArrowLeft,
  ExternalLink,
  Layers,
  Cpu,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Radio,
  Download,
  Share2,
} from 'lucide-react';
import type { Project } from '../../types';
import { useApp } from '../../context/AppContext';

interface ProjectDetailSheetProps {
  project: Project;
}

export const ProjectDetailSheet: React.FC<ProjectDetailSheetProps> = ({ project }) => {
  const { closeProject, platform, theme, showToast, triggerCelebration } = useApp();
  const isDark = theme === 'dark';

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Project Link Copied', `${project.name} URL saved to clipboard`, 'copied');
      triggerCelebration();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="flex-1 w-full p-4 sm:p-5 space-y-5 pb-8"
    >
      {/* Top Navigation & Action Row */}
      <div className="flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={closeProject}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
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
              <span>Back to Projects</span>
            </>
          ) : (
            <>
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </>
          )}
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleShare}
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${
              isDark
                ? 'bg-slate-800/80 border-white/10 text-slate-300 hover:text-white'
                : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900'
            }`}
            title="Share Project"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>

          {project.links?.playStore && (
            <a
              href={project.links.playStore}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-colors cursor-pointer"
            >
              <span>Google Play</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}

          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white shadow-sm transition-colors cursor-pointer"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>

      {/* Hero Visual Presentation */}
      <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-xl bg-slate-950">
        <div className="relative h-48 sm:h-64 w-full">
          <img
            src={project.heroImage || project.thumbnail}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e17] via-[#0b0e17]/50 to-transparent" />

          {/* Badges Overlay */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {project.platforms.map((p) => (
              <span
                key={p}
                className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase font-mono bg-black/75 text-purple-300 border border-purple-500/30 backdrop-blur-md"
              >
                {p}
              </span>
            ))}
            {project.company && (
              <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold font-mono bg-purple-950/80 text-purple-200 border border-purple-500/40 backdrop-blur-md">
                {project.company}
              </span>
            )}
          </div>

          <div className="absolute bottom-3 left-4 right-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              {project.name}
            </h2>
            <p className="text-xs text-purple-200/90 font-medium mt-1">
              {project.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Role & Key Metrics Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <div
          className={`p-3 rounded-2xl border ${
            isDark ? 'bg-[#101422]/60 border-white/5' : 'bg-white border-slate-200'
          }`}
        >
          <span className={`text-[10px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>My Role</span>
          <p className={`text-xs font-bold mt-0.5 leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>{project.role}</p>
        </div>

        <div
          className={`p-3 rounded-2xl border ${
            isDark ? 'bg-[#101422]/60 border-white/5' : 'bg-white border-slate-200'
          }`}
        >
          <span className={`text-[10px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Timeline</span>
          <p className={`text-xs font-bold mt-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>{project.period}</p>
        </div>

        {project.stats?.map((stat) => (
          <div
            key={stat.label}
            className={`p-3 rounded-2xl border ${
              isDark ? 'bg-[#101422]/60 border-white/5' : 'bg-white border-slate-200'
            }`}
          >
            <span className={`text-[10px] font-mono ${isDark ? 'text-purple-400' : 'text-purple-700'}`}>{stat.label}</span>
            <p className={`text-sm font-extrabold mt-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Overview Section */}
      <div
        className={`p-5 rounded-2xl border ${
          isDark ? 'bg-[#101422]/70 border-white/5' : 'bg-white border-slate-200'
        }`}
      >
        <h3 className={`text-xs font-bold uppercase tracking-wider font-mono mb-2 flex items-center gap-1.5 ${isDark ? 'text-purple-400' : 'text-purple-700'}`}>
          <BookOpen className="w-3.5 h-3.5" />
          <span>Project Overview</span>
        </h3>
        <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          {project.overview}
        </p>
      </div>

      {/* Problem & Solution Comparison (if available) */}
      {project.problemStatement && project.solution && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div
            className={`p-4 rounded-2xl border ${
              isDark ? 'bg-red-950/20 border-red-500/20' : 'bg-red-50/70 border-red-200'
            }`}
          >
            <div className="flex items-center gap-2 mb-2 text-red-500">
              <AlertCircle className="w-4 h-4" />
              <h4 className={`text-xs font-bold uppercase tracking-wider font-mono ${isDark ? 'text-red-400' : 'text-red-800'}`}>
                The Problem Statement
              </h4>
            </div>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
              {project.problemStatement}
            </p>
          </div>

          <div
            className={`p-4 rounded-2xl border ${
              isDark ? 'bg-emerald-950/20 border-emerald-500/20' : 'bg-emerald-50/70 border-emerald-200'
            }`}
          >
            <div className="flex items-center gap-2 mb-2 text-emerald-500">
              <CheckCircle2 className="w-4 h-4" />
              <h4 className={`text-xs font-bold uppercase tracking-wider font-mono ${isDark ? 'text-emerald-400' : 'text-emerald-800'}`}>
                My Engineering Solution
              </h4>
            </div>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
              {project.solution}
            </p>
          </div>
        </div>
      )}

      {/* Architecture Deep Dive (if available) */}
      {project.architecture && (
        <div
          className={`p-5 rounded-2xl border ${
            isDark ? 'bg-[#101422]/70 border-white/5' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center gap-2 mb-2 text-indigo-500">
            <Cpu className="w-4 h-4" />
            <h3 className={`text-xs font-bold uppercase tracking-wider font-mono ${isDark ? 'text-indigo-300' : 'text-indigo-800'}`}>
              System Architecture: {project.architecture.title}
            </h3>
          </div>
          <p className={`text-xs mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{project.architecture.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.architecture.layers.map((layer, idx) => (
              <div
                key={layer.name}
                className={`p-3 rounded-xl border ${
                  isDark ? 'bg-slate-900/60 border-white/5' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-600 dark:text-purple-400 text-[10px] font-bold flex items-center justify-center font-mono">
                    0{idx + 1}
                  </span>
                  <span className={`text-xs font-bold ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>{layer.name}</span>
                </div>
                <p className={`text-[11px] mt-1 pl-7 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {layer.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technical Challenges & Solutions (if available) */}
      {project.technicalChallenges && project.technicalChallenges.length > 0 && (
        <div
          className={`p-5 rounded-2xl border ${
            isDark ? 'bg-[#101422]/70 border-white/5' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center gap-2 mb-3 text-amber-500">
            <Radio className="w-4 h-4" />
            <h3 className={`text-xs font-bold uppercase tracking-wider font-mono ${isDark ? 'text-amber-400' : 'text-amber-700'}`}>
              Key Technical Challenges & Impact
            </h3>
          </div>

          <div className="space-y-3">
            {project.technicalChallenges.map((item, idx) => (
              <div
                key={idx}
                className={`p-3.5 rounded-xl border space-y-1.5 ${
                  isDark ? 'bg-slate-900/40 border-white/5' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="text-xs font-semibold text-rose-500 dark:text-rose-300 flex items-start gap-1.5">
                  <span className="font-mono text-[10px] text-rose-600 dark:text-rose-400 font-bold">CHALLENGE:</span>
                  <span>{item.challenge}</span>
                </div>
                <div className={`text-xs pl-4 border-l-2 border-purple-500/40 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <span className={`font-semibold ${isDark ? 'text-purple-300' : 'text-purple-700'}`}>Solution: </span>
                  <span>{item.solution}</span>
                </div>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 pl-4 font-mono font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                  <span>Impact: {item.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Implementation Details (if available) */}
      {project.implementationDetails && project.implementationDetails.length > 0 && (
        <div
          className={`p-5 rounded-2xl border ${
            isDark ? 'bg-[#101422]/70 border-white/5' : 'bg-white border-slate-200'
          }`}
        >
          <h3 className={`text-xs font-bold uppercase tracking-wider font-mono mb-3 flex items-center gap-1.5 ${isDark ? 'text-purple-400' : 'text-purple-700'}`}>
            <Layers className="w-3.5 h-3.5" />
            <span>Implementation Details & Contributions</span>
          </h3>

          <div className="space-y-2">
            {project.implementationDetails.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{detail}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technology Stack Tags */}
      <div
        className={`p-4 rounded-2xl border ${
          isDark ? 'bg-[#101422]/60 border-white/5' : 'bg-white border-slate-200'
        }`}
      >
        <span className={`text-[10px] font-bold uppercase tracking-wider font-mono block mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Full Technology Stack
        </span>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <span
              key={t}
              className={`px-2.5 py-1 rounded-xl text-[11px] font-mono border font-medium ${
                isDark
                  ? 'bg-purple-500/15 text-purple-300 border-purple-500/30'
                  : 'bg-purple-50 text-purple-800 border-purple-200'
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Key Learnings (if available) */}
      {project.keyLearnings && project.keyLearnings.length > 0 && (
        <div
          className={`p-4 rounded-2xl border ${
            isDark ? 'bg-[#101422]/60 border-white/5' : 'bg-white border-slate-200'
          }`}
        >
          <span className={`text-[10px] font-bold uppercase tracking-wider font-mono block mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Key Engineering Learnings
          </span>
          <ul className={`space-y-1.5 list-disc list-inside text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            {project.keyLearnings.map((learning, idx) => (
              <li key={idx}>{learning}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Bottom Back Button */}
      <div className="pt-2 text-center">
        <button
          type="button"
          onClick={closeProject}
          className="px-6 py-2.5 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white shadow-lg transition-all cursor-pointer"
        >
          Return to Projects Catalog
        </button>
      </div>
    </motion.div>
  );
};
