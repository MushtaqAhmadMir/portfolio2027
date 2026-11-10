import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Calendar, BookOpen, Share2, Sparkles, CheckCircle2 } from 'lucide-react';
import type { BlogPost } from '../../types';
import { useApp } from '../../context/AppContext';

interface BlogArticleModalProps {
  blog: BlogPost | null;
  onClose: () => void;
}

export const BlogArticleModal: React.FC<BlogArticleModalProps> = ({ blog, onClose }) => {
  const { theme, showToast, triggerCelebration } = useApp();
  const isDark = theme === 'dark';

  if (!blog) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Article Link Copied', `${blog.title} URL saved to clipboard`, 'copied');
      triggerCelebration();
    }
  };

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
          <div className={`px-5 py-4 border-b flex items-center justify-between ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-purple-400 uppercase font-semibold">Technical Deep-Dive</span>
                <h3 className={`text-sm font-bold truncate max-w-md ${isDark ? 'text-white' : 'text-slate-900'}`}>{blog.title}</h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleShare}
                className={`p-1.5 rounded-xl border transition-colors cursor-pointer ${
                  isDark ? 'border-white/10 text-slate-400 hover:text-white' : 'border-slate-300 text-slate-600 hover:text-slate-900'
                }`}
              >
                <Share2 className="w-4 h-4" />
              </button>
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

          {/* Content */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-4">
            <div className={`flex items-center gap-3 text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-purple-400" />
                <span>{blog.date}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                <span>{blog.readTime}</span>
              </span>
            </div>

            <h2 className={`text-xl font-bold leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {blog.title}
            </h2>

            <div className="flex flex-wrap gap-1.5">
              {blog.tags.map((t) => (
                <span
                  key={t}
                  className={`px-2 py-0.5 rounded-md text-[10px] font-mono border ${
                    isDark
                      ? 'bg-purple-500/15 text-purple-300 border-purple-500/30'
                      : 'bg-purple-50 text-purple-700 border-purple-200'
                  }`}
                >
                  #{t}
                </span>
              ))}
            </div>

            <div className={`pt-3 border-t text-xs sm:text-sm leading-relaxed space-y-4 ${
              isDark ? 'border-white/10 text-slate-300' : 'border-slate-200 text-slate-700'
            }`}>
              <p className={`font-semibold ${isDark ? 'text-purple-200' : 'text-purple-900'}`}>{blog.excerpt}</p>
              <p>{blog.content}</p>

              <div className={`p-4 rounded-2xl border space-y-2 ${
                isDark ? 'bg-purple-950/20 border-purple-500/20' : 'bg-purple-50 border-purple-200'
              }`}>
                <h4 className={`text-xs font-bold font-mono uppercase ${isDark ? 'text-purple-300' : 'text-purple-800'}`}>
                  Key Architecture Takeaways:
                </h4>
                <div className={`space-y-1.5 text-xs ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Always decouple hardware I/O dispatch queues from React Native’s JS event loop.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Use native Android NetworkSpecifier bindings for dual-radio Wi-Fi + cellular routing.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Chunk large video payloads and verify integrity using SHA-256 chunk tokens.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
