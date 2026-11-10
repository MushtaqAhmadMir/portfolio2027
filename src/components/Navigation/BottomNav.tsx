import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Layers, Briefcase, Code, Menu } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import type { TabId } from '../../types';

interface NavItem {
  id: TabId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: Layers, badge: '12' },
  { id: 'experience', label: 'Timeline', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'more', label: 'More', icon: Menu },
];

export const BottomNav: React.FC = () => {
  const { activeTab, setActiveTab, platform, theme } = useApp();
  const isDark = theme === 'dark';

  return (
    <nav
      className={`w-full select-none z-30 transition-all ${
        platform === 'android'
          ? isDark
            ? 'bg-[#101420] border-t border-white/5 py-1 px-1'
            : 'bg-slate-50 border-t border-slate-200 py-1 px-1'
          : isDark
          ? 'bg-[#0c0e17]/85 border-t border-white/10 backdrop-blur-xl py-1.5 px-2'
          : 'bg-white/85 border-t border-slate-200 backdrop-blur-xl py-1.5 px-2'
      }`}
    >
      <div className="flex items-center justify-around max-w-lg mx-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;

          if (platform === 'android') {
            // Android Material 3 Nav Item
            return (
              <button
                key={item.id}
                id={`tab-${item.id}`}
                data-testid={`tab-${item.id}`}
                aria-label={item.label}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className="flex-1 min-h-[46px] flex flex-col items-center justify-center py-1 relative group cursor-pointer focus:outline-none"
              >
                {/* Active M3 Pill Indicator */}
                <div className="relative">
                  {isActive && (
                    <motion.div
                      layoutId="m3-active-pill"
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                      className="absolute inset-0 -mx-3 -my-0.5 rounded-full bg-purple-500/25 border border-purple-500/40"
                    />
                  )}
                  <Icon
                    className={`w-5 h-5 relative z-10 transition-colors ${
                      isActive
                        ? isDark ? 'text-purple-400 stroke-[2.2]' : 'text-purple-600 stroke-[2.2]'
                        : isDark
                        ? 'text-slate-400 group-hover:text-slate-200'
                        : 'text-slate-600 group-hover:text-slate-900'
                    }`}
                  />
                  {item.badge && (
                    <span className="absolute -top-1 -right-2 px-1 py-0.2 rounded-full text-[8px] font-bold font-mono bg-purple-600 text-white shadow-sm z-20">
                      {item.badge}
                    </span>
                  )}
                </div>

                <span
                  className={`text-[10px] mt-1 font-android tracking-tight transition-colors ${
                    isActive
                      ? isDark ? 'text-purple-400 font-bold' : 'text-purple-600 font-bold'
                      : isDark
                      ? 'text-slate-400'
                      : 'text-slate-600 font-medium'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          }

          // iOS Cupertino Nav Item
          return (
            <button
              key={item.id}
              id={`tab-${item.id}`}
              data-testid={`tab-${item.id}`}
              aria-label={item.label}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className="flex-1 min-h-[46px] flex flex-col items-center justify-center py-0.5 relative group cursor-pointer focus:outline-none"
            >
              <motion.div
                whileTap={{ scale: 0.88 }}
                className="relative flex flex-col items-center"
              >
                <div className="relative">
                  <Icon
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isActive
                        ? isDark ? 'text-purple-400 stroke-[2.4] scale-110 drop-shadow-[0_2px_8px_rgba(168,85,247,0.4)]' : 'text-purple-600 stroke-[2.4] scale-110'
                        : isDark
                        ? 'text-slate-400 group-hover:text-slate-200'
                        : 'text-slate-500 group-hover:text-slate-800'
                    }`}
                  />
                  {item.badge && (
                    <span className="absolute -top-1 -right-2 px-1 py-0.2 rounded-full text-[8px] font-bold font-mono bg-purple-500 text-white shadow-sm">
                      {item.badge}
                    </span>
                  )}
                </div>

                <span
                  className={`text-[9.5px] mt-0.5 font-ios font-medium tracking-tight transition-colors ${
                    isActive
                      ? isDark ? 'text-purple-400 font-semibold' : 'text-purple-600 font-bold'
                      : isDark
                      ? 'text-slate-400'
                      : 'text-slate-600 font-medium'
                  }`}
                >
                  {item.label}
                </span>

                {/* Subtle active dot on iOS */}
                {isActive && (
                  <motion.div
                    layoutId="ios-active-dot"
                    className="w-1 h-1 rounded-full bg-purple-400 mt-0.5"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
