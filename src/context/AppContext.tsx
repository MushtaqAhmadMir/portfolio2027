import React, { createContext, useContext, useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import type { BlogPost, DeviceMode, Platform, Project, TabId, ThemeMode, ToastNotification } from '../types';
import { playUiSound } from '../utils/sound';

interface AppContextType {
  platform: Platform;
  setPlatform: (p: Platform) => void;
  togglePlatform: () => void;

  deviceMode: DeviceMode;
  setDeviceMode: (d: DeviceMode) => void;

  theme: ThemeMode;
  setTheme: (t: ThemeMode) => void;
  toggleTheme: () => void;

  activeTab: TabId;
  setActiveTab: (t: TabId) => void;

  selectedProject: Project | null;
  setSelectedProject: (p: Project | null) => void;
  openProject: (p: Project) => void;
  closeProject: () => void;

  selectedBlog: BlogPost | null;
  setSelectedBlog: (b: BlogPost | null) => void;

  isResumeModalOpen: boolean;
  setIsResumeModalOpen: (open: boolean) => void;

  isContactModalOpen: boolean;
  setIsContactModalOpen: (open: boolean) => void;

  soundEnabled: boolean;
  setSoundEnabled: (s: boolean) => void;
  toggleSound: () => void;

  hasLaunched: boolean;
  setHasLaunched: (l: boolean) => void;
  dismissSplash: () => void;

  toasts: ToastNotification[];
  showToast: (title: string, message?: string, type?: 'success' | 'info' | 'copied') => void;
  dismissToast: (id: string) => void;

  triggerCelebration: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [platform, setPlatformState] = useState<Platform>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mm_platform');
      if (saved === 'android' || saved === 'ios') return saved;
    }
    return 'ios';
  });

  const [deviceMode, setDeviceModeState] = useState<DeviceMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mm_device_mode');
      if (saved === 'mobile' || saved === 'tablet' || saved === 'desktop') return saved;
    }
    return 'tablet';
  });

  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mm_theme');
      if (saved === 'dark' || saved === 'light') return saved;
    }
    return 'dark';
  });

  const [activeTab, setActiveTabState] = useState<TabId>('home');
  const [selectedProject, setSelectedProjectState] = useState<Project | null>(null);
  const [selectedBlog, setSelectedBlogState] = useState<BlogPost | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [soundEnabled, setSoundEnabledState] = useState(true);
  const [hasLaunched, setHasLaunched] = useState(false);
  const [toasts, setToasts] = useState<ToastNotification[]>([]);

  // Apply theme class to HTML element
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.remove('dark');
        root.classList.add('light');
      }
    }
  }, [theme]);

  const setPlatform = (p: Platform) => {
    if (soundEnabled) playUiSound('switch');
    setPlatformState(p);
    localStorage.setItem('mm_platform', p);
  };

  const togglePlatform = () => {
    setPlatform(platform === 'ios' ? 'android' : 'ios');
  };

  const setDeviceMode = (d: DeviceMode) => {
    if (soundEnabled) playUiSound('tap');
    setDeviceModeState(d);
    if (typeof window !== 'undefined') {
      localStorage.setItem('mm_device_mode', d);
    }
  };

  const setTheme = (t: ThemeMode) => {
    if (soundEnabled) playUiSound('tap');
    setThemeState(t);
    localStorage.setItem('mm_theme', t);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const setActiveTab = (tab: TabId) => {
    if (soundEnabled) playUiSound('tap');
    // If a project detail is open, close it when switching tabs
    if (selectedProject) setSelectedProjectState(null);
    if (selectedBlog) setSelectedBlogState(null);
    setActiveTabState(tab);
  };

  const openProject = (project: Project) => {
    if (soundEnabled) playUiSound('pop');
    setSelectedProjectState(project);
  };

  const closeProject = () => {
    if (soundEnabled) playUiSound('tap');
    setSelectedProjectState(null);
  };

  const setSelectedBlog = (blog: BlogPost | null) => {
    if (blog && soundEnabled) playUiSound('pop');
    setSelectedBlogState(blog);
  };

  const setSoundEnabled = (enabled: boolean) => {
    setSoundEnabledState(enabled);
    if (enabled) playUiSound('tap');
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  const dismissSplash = () => {
    if (soundEnabled) playUiSound('pop');
    setHasLaunched(true);
  };

  const showToast = (title: string, message?: string, type: 'success' | 'info' | 'copied' = 'success') => {
    if (soundEnabled) playUiSound(type === 'copied' || type === 'success' ? 'success' : 'tap');
    const id = Date.now().toString() + Math.random().toString().slice(2, 6);
    setToasts((prev) => [...prev, { id, title, message, type }]);

    setTimeout(() => {
      dismissToast(id);
    }, 3800);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.75 },
        colors: ['#a855f7', '#6366f1', '#ec4899', '#38bdf8'],
      });
    } catch {
      // ignore
    }
  };

  return (
    <AppContext.Provider
      value={{
        platform,
        setPlatform,
        togglePlatform,
        deviceMode,
        setDeviceMode,
        theme,
        setTheme,
        toggleTheme,
        activeTab,
        setActiveTab,
        selectedProject,
        setSelectedProject: setSelectedProjectState,
        openProject,
        closeProject,
        selectedBlog,
        setSelectedBlog,
        isResumeModalOpen,
        setIsResumeModalOpen,
        isContactModalOpen,
        setIsContactModalOpen,
        soundEnabled,
        setSoundEnabled,
        toggleSound,
        hasLaunched,
        setHasLaunched,
        dismissSplash,
        toasts,
        showToast,
        dismissToast,
        triggerCelebration,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
