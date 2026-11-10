import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Menu,
  GraduationCap,
  Award,
  BookOpen,
  GitBranch,
  Mail,
  FileText,
  Smartphone,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { EDUCATION_DATA, CERTIFICATIONS_DATA, BLOGS_DATA } from '../../data/moreData';
import { PROFILE_DATA } from '../../data/profile';
import { ContactModal } from './ContactModal';
import { ResumeModal } from './ResumeModal';
import { BlogArticleModal } from './BlogArticleModal';

export const MoreScreen: React.FC = () => {
  const {
    theme,
    isContactModalOpen,
    setIsContactModalOpen,
    isResumeModalOpen,
    setIsResumeModalOpen,
    selectedBlog,
    setSelectedBlog,
    platform,
    showToast,
    triggerCelebration,
  } = useApp();

  const [activeSection, setActiveSection] = useState<'hub' | 'education' | 'certs' | 'blogs' | 'github'>('hub');
  const isDark = theme === 'dark';

  const handleDownload = () => {
    showToast('Resume Downloaded', 'Mushtaq Ahmad Mir Resume PDF saved', 'success');
    triggerCelebration();
  };

  return (
    <div className="flex-1 w-full p-4 sm:p-5 space-y-5 pb-6">
      {/* Header */}
      <div>
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Menu className="w-4 h-4 text-purple-400" />
          <span>Application Hub & Extended Profile</span>
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Education, credentials, technical articles, and direct engineering contact channels.
        </p>
      </div>

      {/* Featured Quick Actions Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Contact Tile */}
        <motion.div
          whileHover={{ y: -2 }}
          onClick={() => setIsContactModalOpen(true)}
          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
            isDark
              ? 'bg-gradient-to-br from-purple-950/40 to-slate-900/60 border-purple-500/30 hover:border-purple-400'
              : 'bg-gradient-to-br from-purple-50 to-white border-purple-200 hover:border-purple-300'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="p-2.5 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
              <Mail className="w-4 h-4" />
            </div>
            <span className="text-[10px] text-purple-400 font-mono flex items-center gap-1 font-semibold">
              <span>Open Form</span>
              <ChevronRight className="w-3 h-3" />
            </span>
          </div>
          <h3 className="text-sm font-bold text-white">Contact & Hiring</h3>
          <p className="text-[11px] text-slate-300 mt-0.5">
            Reach out directly for senior roles, contracts, or consultations.
          </p>
        </motion.div>

        {/* Resume Tile */}
        <motion.div
          whileHover={{ y: -2 }}
          onClick={() => setIsResumeModalOpen(true)}
          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
            isDark
              ? 'bg-gradient-to-br from-indigo-950/40 to-slate-900/60 border-indigo-500/30 hover:border-indigo-400'
              : 'bg-gradient-to-br from-indigo-50 to-white border-indigo-200 hover:border-indigo-300'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="p-2.5 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
              <FileText className="w-4 h-4" />
            </div>
            <span className="text-[10px] text-indigo-400 font-mono flex items-center gap-1 font-semibold">
              <span>Preview & PDF</span>
              <ChevronRight className="w-3 h-3" />
            </span>
          </div>
          <h3 className="text-sm font-bold text-white">Curriculum Vitae</h3>
          <p className="text-[11px] text-slate-300 mt-0.5">
            View executive summary and download official resume document.
          </p>
        </motion.div>
      </div>

      {/* Education Section */}
      <div
        className={`p-5 rounded-2xl border transition-all ${
          isDark ? 'bg-[#101422]/75 border-white/5' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-center gap-2 mb-3 text-emerald-400">
          <GraduationCap className="w-4 h-4" />
          <h3 className="text-xs font-bold uppercase tracking-wider font-mono">
            Education & Academic Background
          </h3>
        </div>

        <div className="space-y-3">
          {EDUCATION_DATA.map((edu, idx) => (
            <div
              key={idx}
              className={`p-3.5 rounded-xl border ${
                isDark ? 'bg-slate-900/50 border-white/5' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h4 className="text-xs font-bold text-white">{edu.degree}</h4>
                  <div className="text-[11px] font-semibold text-purple-400">{edu.institution}</div>
                </div>
                <div className="text-[10px] font-mono text-slate-400">
                  {edu.period} • {edu.location}
                </div>
              </div>

              <div className="mt-2 space-y-1">
                {edu.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="text-[11px] text-slate-300 flex items-start gap-1.5 leading-relaxed">
                    <span className="text-purple-400">•</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Certifications */}
      <div
        className={`p-5 rounded-2xl border transition-all ${
          isDark ? 'bg-[#101422]/75 border-white/5' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-center gap-2 mb-3 text-purple-400">
          <Award className="w-4 h-4" />
          <h3 className="text-xs font-bold uppercase tracking-wider font-mono">
            Certifications & Accreditations
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-xl border flex items-center justify-between gap-2 ${
                isDark ? 'bg-slate-900/50 border-white/5' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div>
                <h4 className="text-xs font-bold text-white">{cert.name}</h4>
                <div className="text-[10px] text-slate-400 mt-0.5">{cert.issuer} ({cert.year})</div>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-purple-500/15 text-purple-300 border border-purple-500/30 whitespace-nowrap">
                {cert.badge}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Blogs & Architecture Insights */}
      <div
        className={`p-5 rounded-2xl border transition-all ${
          isDark ? 'bg-[#101422]/75 border-white/5' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-center gap-2 mb-3 text-indigo-400">
          <BookOpen className="w-4 h-4" />
          <h3 className="text-xs font-bold uppercase tracking-wider font-mono">
            Technical Engineering Blogs
          </h3>
        </div>

        <div className="space-y-3">
          {BLOGS_DATA.map((blog) => (
            <motion.div
              key={blog.id}
              whileHover={{ y: -2 }}
              onClick={() => setSelectedBlog(blog)}
              className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                isDark
                  ? 'bg-slate-900/40 border-white/5 hover:border-purple-500/40 hover:bg-slate-900/70'
                  : 'bg-slate-50 border-slate-200 hover:border-purple-300 hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between gap-2 text-[10px] font-mono text-slate-400 mb-1">
                <span>{blog.date} • {blog.readTime}</span>
                <span className="text-purple-400 flex items-center gap-0.5 font-semibold">
                  <span>Read Article</span>
                  <ChevronRight className="w-3 h-3" />
                </span>
              </div>
              <h4 className="text-xs font-bold text-white leading-snug">{blog.title}</h4>
              <p className="text-[11px] text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                {blog.excerpt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* GitHub Contributions & Activity */}
      <div
        className={`p-5 rounded-2xl border transition-all ${
          isDark ? 'bg-[#101422]/75 border-white/5' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-slate-300">
            <GitBranch className="w-4 h-4 text-purple-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider font-mono">
              GitHub Engineering Activity
            </h3>
          </div>

          <a
            href={PROFILE_DATA.contact.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-[11px] font-semibold text-purple-400 hover:text-purple-300 font-mono"
          >
            <span>@mushtaqahmadmir</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Simulated Git Commit Heatmap Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span>Recent Commit Intensity</span>
            <span className="text-emerald-400 font-bold">1,840+ Commits in Last 12 Months</span>
          </div>

          <div className="grid grid-cols-12 sm:grid-cols-24 gap-1 p-3 rounded-xl bg-slate-950/60 border border-white/5">
            {Array.from({ length: 48 }).map((_, idx) => {
              const intensity = (idx * 7) % 5;
              const bg =
                intensity === 0
                  ? 'bg-slate-800/40'
                  : intensity === 1
                  ? 'bg-purple-900/50'
                  : intensity === 2
                  ? 'bg-purple-700'
                  : intensity === 3
                  ? 'bg-purple-500'
                  : 'bg-emerald-400';

              return (
                <div
                  key={idx}
                  className={`h-4 rounded-sm ${bg} transition-transform hover:scale-125 cursor-pointer`}
                  title={`Active code changes logged`}
                />
              );
            })}
          </div>

          <div className="flex items-center justify-between text-[9px] font-mono text-slate-500 pt-1">
            <span>Less</span>
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-sm bg-slate-800/40" />
              <div className="w-2.5 h-2.5 rounded-sm bg-purple-900/50" />
              <div className="w-2.5 h-2.5 rounded-sm bg-purple-700" />
              <div className="w-2.5 h-2.5 rounded-sm bg-purple-500" />
              <div className="w-2.5 h-2.5 rounded-sm bg-emerald-400" />
            </div>
            <span>More Active</span>
          </div>
        </div>
      </div>

      {/* Device Diagnostics & About App OS */}
      <div
        className={`p-4 rounded-2xl border text-center text-xs text-slate-400 space-y-1 ${
          isDark ? 'bg-slate-950/40 border-white/5' : 'bg-slate-100 border-slate-200'
        }`}
      >
        <div className="flex items-center justify-center gap-1.5 text-purple-400 font-mono text-[10px] font-semibold">
          <Smartphone className="w-3.5 h-3.5" />
          <span>Mushtaq OS v2.7.0 • Mobile Portfolio Application</span>
        </div>
        <p className="text-[10px] text-slate-500 font-mono">
          Platform: {platform.toUpperCase()} Mode • Architecture: Clean Architecture • Hermes Engine: Active
        </p>
      </div>

      {/* Modals */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
      <BlogArticleModal
        blog={selectedBlog}
        onClose={() => setSelectedBlog(null)}
      />
    </div>
  );
};
