import React, { useEffect, useState } from 'react';
import { Wifi, Battery, Volume2, Sparkles, MessageSquare, Terminal } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const StatusBar: React.FC = () => {
  const { platform, theme, soundEnabled } = useApp();
  const [time, setTime] = useState('');
  const [isDynamicIslandExpanded, setIsDynamicIslandExpanded] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      // Format as 12-hour or standard mobile clock
      const displayHours = hours % 12 || 12;
      setTime(`${displayHours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-slate-200' : 'text-slate-800';

  if (platform === 'android') {
    // Android Material 3 Status Bar
    return (
      <div className={`w-full px-5 pt-2 pb-1 flex items-center justify-between text-xs font-android select-none ${textColor} transition-colors z-30`}>
        {/* Left: Time + Android Notification Icons */}
        <div className="flex items-center gap-2.5">
          <span className="font-medium tracking-tight text-[12px]">{time}</span>
          <div className="flex items-center gap-1.5 opacity-60">
            <Terminal className="w-2.5 h-2.5" />
            <MessageSquare className="w-2.5 h-2.5" />
          </div>
        </div>

        {/* Center: Subtle Camera Punch Hole */}
        <div className="w-3.5 h-3.5 rounded-full bg-black/90 ring-1 ring-white/10 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-900 ring-1 ring-purple-500/40" />
        </div>

        {/* Right: Android System Icons */}
        <div className="flex items-center gap-2 text-[11px] font-mono">
          <span className="text-[10px] font-bold tracking-tighter text-purple-400">5G</span>
          <Wifi className="w-3.5 h-3.5" />
          <div className="flex items-center gap-0.5">
            <span className="text-[10px]">98%</span>
            <Battery className="w-3.5 h-3.5 fill-current" />
          </div>
        </div>
      </div>
    );
  }

  // iOS Cupertino Status Bar with Dynamic Island
  return (
    <div className={`w-full px-6 pt-2 pb-1 flex items-center justify-between text-xs font-ios select-none ${textColor} transition-colors z-30 relative`}>
      {/* Left: iOS Time */}
      <div className="w-16">
        <span className="font-semibold text-[13px] tracking-tight">{time}</span>
      </div>

      {/* Center: Dynamic Island */}
      <div
        onClick={() => setIsDynamicIslandExpanded(!isDynamicIslandExpanded)}
        className={`group cursor-pointer transition-all duration-300 ease-out bg-black rounded-full flex items-center justify-between px-3 shadow-lg ring-1 ring-white/10 hover:ring-purple-500/40 ${
          isDynamicIslandExpanded ? 'w-56 h-8 px-3.5' : 'w-24 h-5'
        }`}
      >
        {isDynamicIslandExpanded ? (
          <div className="w-full flex items-center justify-between text-[11px] text-white">
            <div className="flex items-center gap-1.5 text-purple-400">
              <Sparkles className="w-3 h-3 animate-spin" />
              <span className="font-medium text-[10px]">Mushtaq • Open to Work</span>
            </div>
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>
        ) : (
          <>
            {/* Left mini camera dot */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#111] ring-1 ring-white/5 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-purple-500/60" />
            </div>

            {/* Right micro indicator */}
            {soundEnabled ? (
              <div className="flex items-center gap-0.5 text-purple-400">
                <Volume2 className="w-2.5 h-2.5" />
              </div>
            ) : (
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            )}
          </>
        )}
      </div>

      {/* Right: iOS Status Icons */}
      <div className="w-16 flex items-center justify-end gap-1.5">
        <div className="flex items-center gap-0.5">
          <div className="w-0.5 h-1 bg-current rounded-full" />
          <div className="w-0.5 h-1.5 bg-current rounded-full" />
          <div className="w-0.5 h-2 bg-current rounded-full" />
          <div className="w-0.5 h-2.5 bg-current rounded-full" />
        </div>
        <span className="text-[10px] font-semibold text-purple-400">5G</span>
        <div className="flex items-center">
          <Battery className="w-4 h-4 fill-emerald-500 text-emerald-400" />
        </div>
      </div>
    </div>
  );
};
