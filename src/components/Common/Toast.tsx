import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Info, Sparkles, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ToastContainer: React.FC = () => {
  const { toasts, dismissToast, platform } = useApp();

  return (
    <div className="absolute top-14 left-0 right-0 z-50 pointer-events-none flex flex-col items-center px-4 gap-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            className={`pointer-events-auto max-w-sm flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl shadow-xl border backdrop-blur-xl text-white ${
              platform === 'android' ? 'rounded-xl font-android' : 'rounded-2xl font-ios'
            } ${
              toast.type === 'copied' || toast.type === 'success'
                ? 'bg-slate-900/90 border-emerald-500/30 shadow-emerald-950/30'
                : 'bg-slate-900/90 border-purple-500/30 shadow-purple-950/30'
            }`}
          >
            {toast.type === 'copied' || toast.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            ) : (
              <Sparkles className="w-4 h-4 text-purple-400 flex-shrink-0" />
            )}

            <div className="text-xs">
              <p className="font-semibold text-slate-100">{toast.title}</p>
              {toast.message && (
                <p className="text-[11px] text-slate-400">{toast.message}</p>
              )}
            </div>

            <button
              type="button"
              onClick={() => dismissToast(toast.id)}
              className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
