import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Briefcase,
  Layers,
  ShieldCheck,
  Zap,
  Radio,
  ExternalLink,
  Smartphone,
  ChevronRight,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { PROFILE_DATA } from '../../data/profile';
import { PROJECTS_DATA } from '../../data/projects';

export const HomeScreen: React.FC = () => {
  const {
    setActiveTab,
    openProject,
    setIsContactModalOpen,
    setIsResumeModalOpen,
    theme,
    platform,
    showToast,
    triggerCelebration,
  } = useApp();

  const isDark = theme === 'dark';
  const featuredProjects = PROJECTS_DATA.slice(0, 4);

  const handleDownloadResume = (e: React.MouseEvent) => {
    showToast('Resume Downloaded', 'Mushtaq Ahmad Mir Resume PDF saved', 'success');
    triggerCelebration();
  };

  return (
    <div className="flex-1 w-full p-4 sm:p-5 space-y-5">
      {/* Hero Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`relative overflow-hidden rounded-3xl p-5 sm:p-6 border transition-all ${
          isDark
            ? 'glass-card-dark border-purple-500/20 shadow-xl'
            : 'glass-card-light border-purple-200 shadow-md'
        }`}
      >
        {/* Ambient background glow inside card */}
        <div className="absolute top-0 right-0 w-52 h-52 bg-gradient-to-bl from-purple-500/15 via-indigo-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left">
          {/* Avatar with Status Ring */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500 rounded-2xl blur-md opacity-40 group-hover:opacity-75 transition duration-300" />
            <img
              src={PROFILE_DATA.avatarUrl}
              alt={PROFILE_DATA.name}
              className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover ring-2 ring-purple-400/30 shadow-lg"
            />
            {/* Live Status Badge */}
            <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 flex items-center gap-1 shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-status-pulse" />
              <span>Available</span>
            </div>
          </div>

          {/* Info & Headline */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
              <h2 className={`text-xl sm:text-2xl font-bold tracking-tight flex items-center gap-1.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <span>{PROFILE_DATA.name}</span>
              </h2>
            </div>

            <p className={`text-xs sm:text-sm font-semibold ${isDark ? 'text-purple-400' : 'text-purple-700'}`}>
              {PROFILE_DATA.role}
            </p>

            <div className={`flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-2 text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              <span className="flex items-center gap-1">
                <Briefcase className="w-3.5 h-3.5 text-purple-500" />
                <span>{PROFILE_DATA.experienceYears} Experience</span>
              </span>
              <span className="flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-indigo-500" />
                <span>{PROFILE_DATA.specialization}</span>
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                <span>India (Open to Remote)</span>
              </span>
            </div>

            {/* Headline Banner */}
            <div className={`mt-3.5 pt-3 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
              <h3 className={`text-base sm:text-lg font-bold leading-snug ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                "{PROFILE_DATA.headline}"
              </h3>
              <p className={`text-xs mt-1 leading-relaxed ${isDark ? 'text-slate-300/80' : 'text-slate-600'}`}>
                {PROFILE_DATA.description}
              </p>
            </div>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="relative z-10 flex flex-wrap items-center gap-2.5 mt-5 pt-4 border-t border-white/10">
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => setActiveTab('projects')}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-900/30 transition-all cursor-pointer"
          >
            <Layers className="w-4 h-4" />
            <span>Explore Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => setIsContactModalOpen(true)}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
              isDark
                ? 'bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border-white/10'
                : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300'
            }`}
          >
            <Mail className="w-4 h-4 text-purple-400" />
            <span>Get in Touch</span>
          </motion.button>

          <motion.a
            whileTap={{ scale: 0.96 }}
            href={PROFILE_DATA.resumeUrl}
            download="Mushtaq_Ahmad_Mir_Resume.pdf"
            onClick={handleDownloadResume}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
              isDark
                ? 'bg-purple-950/40 hover:bg-purple-900/50 text-purple-200 border-purple-500/30'
                : 'bg-purple-50 hover:bg-purple-100 text-purple-900 border-purple-300'
            }`}
          >
            <Download className="w-4 h-4 text-purple-400" />
            <span>Download Resume</span>
          </motion.a>
        </div>
      </motion.div>

      {/* Key Metrics & Achievements Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {PROFILE_DATA.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05 }}
            className={`p-3.5 rounded-2xl border text-center transition-all ${
              isDark
                ? 'bg-[#101422]/70 border-white/5 hover:border-purple-500/30'
                : 'bg-white border-slate-200 hover:border-purple-300'
            }`}
          >
            <div className={`text-lg sm:text-xl font-extrabold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
              {stat.value}
            </div>
            <div className={`text-xs font-semibold mt-0.5 ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>{stat.label}</div>
            <div className={`text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{stat.sub}</div>
          </motion.div>
        ))}
      </div>

      {/* Core Engineering Specialization Chips */}
      <div
        className={`p-4 rounded-2xl border transition-all ${
          isDark ? 'bg-[#101422]/60 border-white/5' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-purple-400 animate-pulse" />
            <h4 className={`text-xs font-bold uppercase tracking-wider font-mono ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
              Engineering Highlights
            </h4>
          </div>
          <span className={`text-[10px] font-mono font-medium ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>Production Tested</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {PROFILE_DATA.techHighlights.map((tech) => (
            <span
              key={tech}
              className={`px-2.5 py-1 rounded-xl text-[11px] font-medium border transition-colors ${
                isDark
                  ? 'bg-slate-800/60 border-white/10 text-slate-200 hover:border-purple-500/40'
                  : 'bg-slate-100 border-slate-200 text-slate-800 hover:border-purple-400'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Featured Projects Section Header */}
      <div>
        <div className="flex items-center justify-between mb-3 px-1">
          <div>
            <h3 className={`text-sm font-bold flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Flagship Projects</span>
            </h3>
            <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Hardware integrations, 360° cameras, banking & IoT
            </p>
          </div>

          <button
            type="button"
            onClick={() => setActiveTab('projects')}
            className={`flex items-center gap-1 text-xs font-semibold cursor-pointer ${isDark ? 'text-purple-400 hover:text-purple-300' : 'text-purple-700 hover:text-purple-900'}`}
          >
            <span>View All ({PROJECTS_DATA.length})</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Featured Projects Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + idx * 0.05 }}
              whileHover={{ y: -3 }}
              onClick={() => openProject(project)}
              className={`group cursor-pointer rounded-2xl overflow-hidden border transition-all ${
                isDark
                  ? 'bg-[#101422]/80 border-white/10 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-950/40'
                  : 'bg-white border-slate-200 hover:border-purple-400 hover:shadow-md'
              }`}
            >
              {/* Thumbnail Container */}
              <div className="relative h-32 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                {/* Platform Badges */}
                <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
                  {project.platforms.map((p) => (
                    <span
                      key={p}
                      className="px-1.5 py-0.5 rounded-md text-[9px] font-bold uppercase font-mono bg-black/70 text-purple-300 border border-white/10 backdrop-blur-sm"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.name}
                  </span>
                  <span className="text-[10px] text-purple-400 flex items-center gap-0.5 font-medium">
                    <span>Inspect</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-3.5 space-y-2">
                <p className={`text-[11px] line-clamp-2 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {project.tagline}
                </p>

                <div className="flex flex-wrap gap-1 pt-1">
                  {project.technologies.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className={`px-2 py-0.5 rounded-md text-[9.5px] font-mono border ${isDark ? 'bg-purple-500/10 text-purple-300 border-purple-500/20' : 'bg-purple-50 text-purple-800 border-purple-200'}`}
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

      {/* Why Choose Mushtaq Banner */}
      <div
        className={`p-4 rounded-2xl border transition-all ${
          isDark
            ? 'bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-slate-900/60 border-purple-500/30'
            : 'bg-gradient-to-r from-purple-50 via-indigo-50 to-white border-purple-200'
        }`}
      >
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-purple-600/20 border border-purple-500/40 text-purple-500 mt-0.5">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h4 className={`text-xs font-bold uppercase tracking-wider font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Senior Engineering Philosophy
            </h4>
            <p className={`text-xs mt-1 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              "Zero frame-rate drops, crash-proof offline syncing, and clean modular codebases designed to outlive organizational changes."
            </p>
            <div className="mt-3 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setActiveTab('about')}
                className={`text-xs font-semibold flex items-center gap-1 cursor-pointer ${isDark ? 'text-purple-400 hover:text-purple-300' : 'text-purple-700 hover:text-purple-900'}`}
              >
                <span>Read Developer Story</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
