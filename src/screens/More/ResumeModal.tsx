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
          <div className="px-5 py-3.5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Mushtaq Ahmad Mir — Curriculum Vitae</h3>
                <p className="text-[10px] text-purple-300 font-mono">PDF Document • 6+ Years Mobile Engineering</p>
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
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Embedded Viewer / Executive Snapshot */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-5 space-y-4">
            {/* Header Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-slate-900 border border-purple-500/30 flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-white">{PROFILE_DATA.name}</h4>
                <p className="text-xs text-purple-300">{PROFILE_DATA.role}</p>
                <p className="text-[11px] text-slate-400 mt-1">{PROFILE_DATA.contact.email} • Bangalore, India</p>
              </div>

              <a
                href={PROFILE_DATA.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-xl text-xs font-medium bg-white/10 hover:bg-white/15 text-white border border-white/15 flex items-center gap-1 transition-colors"
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
              <p className="text-xs text-slate-300 leading-relaxed">
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
                <div key={exp.id} className="p-3 rounded-xl bg-slate-900/50 border border-white/5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{exp.role}</span>
                    <span className="text-[10px] font-mono text-purple-400">{exp.period}</span>
                  </div>
                  <div className="text-[11px] text-slate-300 font-medium">{exp.company} — {exp.location}</div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{exp.summary}</p>
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
                <div className="p-3 rounded-xl bg-slate-900/50 border border-white/5">
                  <span className="text-xs font-bold text-white block">Master of Computer Applications</span>
                  <span className="text-[11px] text-slate-300">Lovely Professional University (2019–2021)</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/50 border border-white/5">
                  <span className="text-xs font-bold text-white block">Bachelor of Computer Applications</span>
                  <span className="text-[11px] text-slate-300">Punjabi University (2016–2019)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
