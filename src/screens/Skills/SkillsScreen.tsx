import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Smartphone,
  Layers,
  Boxes,
  Radio,
  Wrench,
  Sparkles,
  Award,
  CheckCircle2,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { SKILL_CATEGORIES_DATA } from '../../data/skills';

export const SkillsScreen: React.FC = () => {
  const { theme } = useApp();
  const [selectedCatId, setSelectedCatId] = useState<string>('all');
  const isDark = theme === 'dark';

  const categories = [
    { id: 'all', title: 'All Skills', icon: Sparkles },
    ...SKILL_CATEGORIES_DATA.map((c) => ({
      id: c.id,
      title: c.title,
      icon:
        c.id === 'mobile-dev'
          ? Smartphone
          : c.id === 'programming'
          ? Code
          : c.id === 'architecture'
          ? Boxes
          : c.id === 'integrations'
          ? Radio
          : Wrench,
    })),
  ];

  const displayedCategories =
    selectedCatId === 'all'
      ? SKILL_CATEGORIES_DATA
      : SKILL_CATEGORIES_DATA.filter((c) => c.id === selectedCatId);

  return (
    <div className="flex-1 w-full p-4 sm:p-5 space-y-5 pb-6">
      {/* Header */}
      <div>
        <h2 className={`text-lg font-bold flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          <Code className="w-4 h-4 text-purple-400" />
          <span>Technical Skills & Capabilities Dashboard</span>
        </h2>
        <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>
          Curated competencies evaluated by production battle-testing, architecture impact, and hardware bridges.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar pb-1">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedCatId === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCatId(cat.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-purple-600 text-white shadow font-bold'
                  : isDark
                  ? 'bg-slate-900/60 border border-white/5 text-slate-400 hover:text-slate-200'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.title}</span>
            </button>
          );
        })}
      </div>

      {/* Categories & Cards */}
      <div className="space-y-6">
        {displayedCategories.map((category) => (
          <div key={category.id} className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <div>
                <h3 className={`text-sm font-bold tracking-tight flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>{category.title}</span>
                </h3>
                <p className={`text-[11px] mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {category.description}
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {category.skills.map((skill, sIdx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: sIdx * 0.04 }}
                  className={`p-4 rounded-2xl border transition-all ${
                    isDark
                      ? 'bg-[#101422]/75 border-white/5 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-950/20'
                      : 'bg-white border-slate-200 hover:border-purple-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className={`text-xs font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {skill.name}
                      </h4>
                      <span className="text-[10px] text-purple-400 font-mono font-semibold">
                        {skill.experienceYears}
                      </span>
                    </div>

                    <span
                      className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider ${
                        skill.level === 'Expert'
                          ? isDark
                            ? 'bg-purple-500/15 text-purple-300 border border-purple-500/30'
                            : 'bg-purple-100 text-purple-800 border border-purple-200'
                          : skill.level === 'Advanced'
                          ? isDark
                            ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30'
                            : 'bg-indigo-100 text-indigo-800 border border-indigo-200'
                          : isDark
                          ? 'bg-slate-700/40 text-slate-300 border border-slate-600/30'
                          : 'bg-slate-100 text-slate-700 border border-slate-300'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  {/* Highlight */}
                  <p className={`text-[11px] leading-relaxed mb-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {skill.highlight}
                  </p>

                  {/* Sub tags */}
                  <div className={`flex flex-wrap gap-1 pt-2 border-t ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
                    {skill.tags.map((t) => (
                      <span
                        key={t}
                        className={`px-2 py-0.5 rounded-md text-[9px] font-mono border ${
                          isDark
                            ? 'bg-slate-800/60 text-slate-300 border-white/5'
                            : 'bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
