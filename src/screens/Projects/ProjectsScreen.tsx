import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Search,
  Filter,
  ChevronRight,
  Sparkles,
  ExternalLink,
  Smartphone,
  Cpu,
  Shield,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { PROJECTS_DATA } from '../../data/projects';
import { ProjectDetailSheet } from './ProjectDetailSheet';

export const ProjectsScreen: React.FC = () => {
  const { selectedProject, openProject, theme } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const isDark = theme === 'dark';

  // If a project is selected, show the detailed project view INSIDE the app!
  if (selectedProject) {
    return <ProjectDetailSheet project={selectedProject} />;
  }

  // Filter projects based on category & search query
  const filteredProjects = PROJECTS_DATA.filter((p) => {
    const matchesCategory =
      activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', label: 'All Projects', count: PROJECTS_DATA.length },
    { id: 'iot-hardware', label: 'IoT & Hardware', count: PROJECTS_DATA.filter((p) => p.category === 'iot-hardware').length },
    { id: 'react-native', label: 'React Native', count: PROJECTS_DATA.filter((p) => p.category === 'react-native').length },
    { id: 'flutter', label: 'Flutter', count: PROJECTS_DATA.filter((p) => p.category === 'flutter').length },
    { id: 'enterprise', label: 'Fintech & Enterprise', count: PROJECTS_DATA.filter((p) => p.category === 'enterprise').length },
  ];

  return (
    <div className="flex-1 w-full p-4 sm:p-5 space-y-4 pb-6">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className={`text-lg font-bold flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            <Layers className="w-4 h-4 text-purple-500" />
            <span>Featured Mobile Engineering Showcase</span>
          </h2>
          <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Production apps shipped across IoT camera controls, fintech banking, and logistics.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative min-w-[200px]">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search stack, project, or IoT..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-8 pr-3 py-1.5 rounded-xl text-xs border transition-all outline-none ${
              isDark
                ? 'bg-slate-900/80 border-white/10 text-white placeholder:text-slate-500 focus:border-purple-500'
                : 'bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-purple-500'
            }`}
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar pb-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
              activeCategory === cat.id
                ? 'bg-purple-600 text-white shadow-md font-bold'
                : isDark
                ? 'bg-slate-900/60 border border-white/5 text-slate-400 hover:text-slate-200'
                : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>{cat.label}</span>
            <span className="text-[10px] opacity-75 font-mono">({cat.count})</span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12 text-slate-400">
          <p className="text-sm">No projects found matching "{searchQuery}".</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('all');
            }}
            className="mt-2 text-xs text-purple-400 font-semibold cursor-pointer underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -3 }}
              onClick={() => openProject(project)}
              className={`group cursor-pointer rounded-2xl overflow-hidden border transition-all flex flex-col justify-between ${
                isDark
                  ? 'bg-[#101422]/75 border-white/10 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-950/40'
                  : 'bg-white border-slate-200 hover:border-purple-400 hover:shadow-md'
              }`}
            >
              {/* Media Thumbnail */}
              <div className="relative h-36 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101422] via-transparent to-black/30" />

                {/* Platforms */}
                <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
                  {project.platforms.map((p) => (
                    <span
                      key={p}
                      className="px-1.5 py-0.5 rounded-md text-[9px] font-bold uppercase font-mono bg-black/75 text-purple-300 border border-white/10 backdrop-blur-sm"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                {project.company && (
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[9px] font-semibold font-mono bg-purple-950/80 text-purple-200 border border-purple-500/30 backdrop-blur-sm">
                    {project.company}
                  </div>
                )}

                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.name}
                  </h3>
                  <span className="text-[10px] text-purple-400 font-medium flex items-center gap-0.5">
                    <span>Details</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>

              {/* Description & Role */}
              <div className="p-3.5 space-y-2.5 flex-1 flex flex-col justify-between">
                <div>
                  <div className={`text-[10px] font-mono font-medium ${isDark ? 'text-purple-400' : 'text-purple-700'}`}>
                    {project.role}
                  </div>
                  <p className={`text-[11px] mt-1 line-clamp-3 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {project.tagline}
                  </p>
                </div>

                {/* Technologies Chips */}
                <div className={`flex flex-wrap gap-1 pt-1 border-t ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-0.5 rounded-md text-[9.5px] font-mono border ${
                        isDark
                          ? 'bg-purple-500/10 text-purple-300 border-purple-500/20'
                          : 'bg-purple-50 text-purple-800 border-purple-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className={`px-1.5 py-0.5 rounded-md text-[9px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
