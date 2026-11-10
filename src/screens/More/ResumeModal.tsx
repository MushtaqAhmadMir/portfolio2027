import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, ExternalLink, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { PROFILE_DATA } from '../../data/profile';
import { EXPERIENCES_DATA } from '../../data/experience';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { theme, showToast, triggerCelebration } = useApp();
  const isDark = theme === 'dark';

  const handleDownload = () => {
    showToast('Resume Downloaded', 'Mushtaq Ahmad Mir Resume PDF saved', 'success');
    triggerCelebration();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          className={`w-full max-w-2xl rounded-3xl border overflow-hidden shadow-2xl flex flex-col max-h-[92vh] ${
            isDark
              ? 'bg-[#0f121d] border-white/10 text-white'
              : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          {/* Header */}
          <div className={`px-5 py-3.5 border-b flex items-center justify-between ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h3 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Mushtaq Ahmad Mir — Curriculum Vitae</h3>
                <p className={`text-[10px] font-mono ${isDark ? 'text-purple-300' : 'text-purple-700 font-semibold'}`}>PDF Document • 6+ Years Mobile Engineering</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={PROFILE_DATA.resumeUrl}
                download="Mushtaq_Ahmad_Mir_Resume.pdf"
                onClick={handleDownload}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white shadow-md transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className={`p-1.5 rounded-xl transition-colors cursor-pointer ${
                  isDark ? 'text-slate-400 hover:text-white hover:bg-white/10' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Embedded Viewer / Executive Snapshot */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-5 space-y-4">
            {/* Header Card */}
            <div className={`p-4 rounded-2xl border flex items-center justify-between ${
              isDark
                ? 'bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-slate-900 border-purple-500/30'
                : 'bg-gradient-to-r from-purple-50 via-indigo-50 to-white border-purple-200'
            }`}>
              <div>
                <h4 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{PROFILE_DATA.name}</h4>
                <p className={`text-xs ${isDark ? 'text-purple-300' : 'text-purple-700 font-medium'}`}>{PROFILE_DATA.role}</p>
                <p className={`text-[11px] mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{PROFILE_DATA.contact.email} • Bangalore, India</p>
              </div>

              <a
                href={PROFILE_DATA.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1 transition-colors ${
                  isDark
                    ? 'bg-white/10 hover:bg-white/15 text-white border border-white/15'
                    : 'bg-purple-600 hover:bg-purple-700 text-white shadow-sm'
                }`}
              >
                <span>Open in Tab</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Core Competencies Summary */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-wider">
                Summary of Qualifications
              </span>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Senior Mobile Engineer with 6+ years of expertise in architecting and delivering high-performance cross-platform (React Native, Flutter) and native Android applications. Proven track record building hardware-integrated systems with 360° action cameras (Insta360 X4), BLE 5.0 GATT protocols, Wi-Fi Direct, and secure banking-grade applications for Kotak Mahindra Bank and enterprise logistics.
              </p>
            </div>

            {/* Experience Snapshot */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1">
                <Briefcase className="w-3 h-3" />
                <span>Work Experience Snapshot</span>
              </span>

              {EXPERIENCES_DATA.map((exp) => (
                <div key={exp.id} className={`p-3 rounded-xl space-y-1 border ${isDark ? 'bg-slate-900/50 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{exp.role}</span>
                    <span className="text-[10px] font-mono text-purple-400">{exp.period}</span>
                  </div>
                  <div className={`text-[11px] font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{exp.company} — {exp.location}</div>
                  <p className={`text-[11px] leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{exp.summary}</p>
                </div>
              ))}
            </div>

            {/* Education Snapshot */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                <GraduationCap className="w-3 h-3" />
                <span>Education</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className={`p-3 rounded-xl border ${isDark ? 'bg-slate-900/50 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                  <span className={`text-xs font-bold block ${isDark ? 'text-white' : 'text-slate-900'}`}>Master of Computer Applications</span>
                  <span className={`text-[11px] ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Lovely Professional University (2019–2021)</span>
                </div>
                <div className={`p-3 rounded-xl border ${isDark ? 'bg-slate-900/50 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                  <span className={`text-xs font-bold block ${isDark ? 'text-white' : 'text-slate-900'}`}>Bachelor of Computer Applications</span>
                  <span className={`text-[11px] ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Punjabi University (2016–2019)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
