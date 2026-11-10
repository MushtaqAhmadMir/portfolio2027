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
          <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-purple-300 uppercase">Technical Deep-Dive</span>
                <h3 className="text-sm font-bold text-white truncate max-w-md">{blog.title}</h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleShare}
                className="p-1.5 rounded-xl border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-4">
            <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
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

            <h2 className="text-xl font-bold text-white leading-snug">
              {blog.title}
            </h2>

            <div className="flex flex-wrap gap-1.5">
              {blog.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-purple-500/15 text-purple-300 border border-purple-500/30"
                >
                  #{t}
                </span>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-4">
              <p className="font-semibold text-purple-200">{blog.excerpt}</p>
              <p>{blog.content}</p>

              <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/20 space-y-2">
                <h4 className="text-xs font-bold text-purple-300 font-mono uppercase">
                  Key Architecture Takeaways:
                </h4>
                <div className="space-y-1.5 text-xs text-slate-300">
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
