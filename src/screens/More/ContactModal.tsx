import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Mail,
  Copy,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { LinkedinIcon } from '../../components/Common/BrandIcons';
import { useApp } from '../../context/AppContext';
import { PROFILE_DATA } from '../../data/profile';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { theme, showToast, triggerCelebration } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const isDark = theme === 'dark';

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.contact.email);
    showToast('Email Copied', PROFILE_DATA.contact.email, 'copied');
    triggerCelebration();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Missing Fields', 'Please complete all required fields.', 'info');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      showToast(
        'Message Sent Successfully!',
        `Thank you ${formData.name}. Mushtaq will reply promptly.`,
        'success'
      );
      triggerCelebration();
      setTimeout(() => {
        setIsSent(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
        onClose();
      }, 1600);
    }, 700);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          className={`w-full max-w-lg rounded-3xl border overflow-hidden shadow-2xl flex flex-col max-h-[90vh] ${
            isDark
              ? 'bg-[#0f121d] border-white/10 text-white'
              : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          {/* Header */}
          <div className={`px-5 py-4 border-b flex items-center justify-between ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <h3 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Get in Touch with Mushtaq</h3>
                <p className={`text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Available for Senior Mobile App Roles & Consulting</p>
              </div>
            </div>

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

          {/* Body */}
          <div className="p-5 overflow-y-auto custom-scrollbar space-y-4">
            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={copyEmail}
                className={`flex items-center justify-between p-3 rounded-xl border transition-colors cursor-pointer text-left ${
                  isDark
                    ? 'bg-purple-950/30 border-purple-500/30 hover:border-purple-500/60'
                    : 'bg-purple-50 border-purple-200 hover:border-purple-300'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <div className="truncate">
                    <span className={`text-[10px] block font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Email Address</span>
                    <span className={`text-xs font-semibold truncate block ${isDark ? 'text-purple-200' : 'text-purple-900'}`}>
                      {PROFILE_DATA.contact.email}
                    </span>
                  </div>
                </div>
                <Copy className="w-3.5 h-3.5 text-purple-400 ml-1 flex-shrink-0" />
              </button>

              <a
                href={PROFILE_DATA.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center justify-between p-3 rounded-xl border transition-colors cursor-pointer text-left ${
                  isDark
                    ? 'bg-blue-950/30 border-blue-500/30 hover:border-blue-500/60'
                    : 'bg-blue-50 border-blue-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <LinkedinIcon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <div className="truncate">
                    <span className={`text-[10px] block font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Professional Profile</span>
                    <span className={`text-xs font-semibold truncate block ${isDark ? 'text-blue-200' : 'text-blue-900'}`}>
                      linkedin.com/in/mushtaqahmadmir
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Direct Message Form */}
            <form onSubmit={handleSubmit} className={`space-y-3 pt-2 border-t ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className={`text-[11px] font-medium block mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Connor"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-3 py-2 rounded-xl text-xs border outline-none transition-all ${
                      isDark
                        ? 'bg-slate-900/80 border-white/10 text-white placeholder:text-slate-500 focus:border-purple-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-purple-500'
                    }`}
                  />
                </div>

                <div>
                  <label className={`text-[11px] font-medium block mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-3 py-2 rounded-xl text-xs border outline-none transition-all ${
                      isDark
                        ? 'bg-slate-900/80 border-white/10 text-white placeholder:text-slate-500 focus:border-purple-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-purple-500'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className={`text-[11px] font-medium block mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Senior Mobile Engineer Role / Project Consultation"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={`w-full px-3 py-2 rounded-xl text-xs border outline-none transition-all ${
                    isDark
                      ? 'bg-slate-900/80 border-white/10 text-white placeholder:text-slate-500 focus:border-purple-500'
                      : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-purple-500'
                  }`}
                />
              </div>

              <div>
                <label className={`text-[11px] font-medium block mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your mobile vision, architecture challenges, or job opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-3 py-2 rounded-xl text-xs border outline-none transition-all resize-none ${
                    isDark
                      ? 'bg-slate-900/80 border-white/10 text-white placeholder:text-slate-500 focus:border-purple-500'
                      : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-purple-500'
                  }`}
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className={`text-[10px] flex items-center gap-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Prompt Response Guaranteed</span>
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-900/30 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
