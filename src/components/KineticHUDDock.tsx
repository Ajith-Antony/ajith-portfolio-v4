import React, { useState, useEffect } from 'react';
import { Sun, Moon, Command, FileText, Sparkles, Clock, Activity } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useTheme } from '../context/ThemeContext';

interface HUDProps {
  onOpenCommandPalette: () => void;
  onOpenResume: () => void;
}

export default function KineticHUDDock({ onOpenCommandPalette, onOpenResume }: HUDProps) {
  const { theme, toggleTheme } = useTheme();
  const [dubaiTime, setDubaiTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Dubai',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setDubaiTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const triggerSparks = () => {
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.85 },
      colors: ['#ff4500', '#38bdf8', '#6366f1', '#34d399'],
    });
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-2xl w-[92%] sm:w-auto">
      <div className="bg-[var(--semantic-surface)]/90 backdrop-blur-xl border-2 border-[var(--semantic-border-bold)] rounded-full px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)] flex items-center justify-between gap-4 font-mono text-xs">
        
        {/* Monogram */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[var(--semantic-primary)] text-white flex items-center justify-center font-extrabold text-xs border border-black shadow-sm">
            APA
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[11px] font-bold text-[var(--semantic-fg)]">
            <span className="flex items-center gap-1 text-[var(--semantic-primary)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--semantic-primary)] animate-pulse" />
              <span>DUBAI</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[var(--semantic-fg-subtle)]">
              <Clock className="w-3 h-3 text-[var(--semantic-secondary)]" />
              <span>{dubaiTime || '15:01:00'} GST</span>
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          
          <div className="hidden md:flex items-center gap-3 text-[11px] font-bold text-[var(--semantic-fg-muted)] pr-2">
            <a href="#lab" className="hover:text-[var(--semantic-primary)]">Stream Lab</a>
            <a href="#terminal" className="hover:text-[var(--semantic-primary)]">Terminal</a>
            <a href="#career" className="hover:text-[var(--semantic-primary)]">Career Deck</a>
          </div>

          {/* Sparks Particle Blast Trigger */}
          <button
            onClick={triggerSparks}
            className="p-2 rounded-full bg-[var(--semantic-surface)] border border-[var(--semantic-border-bold)] text-[var(--semantic-primary)] hover:scale-110 transition-transform"
            title="Trigger Sparks Blast"
          >
            <Sparkles className="w-4 h-4" />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-[var(--semantic-surface)] border border-[var(--semantic-border-bold)] text-[var(--semantic-fg)] hover:scale-110 transition-transform"
            title={`Current: ${theme.toUpperCase()} mode`}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Cmd+K Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[var(--semantic-surface)] border border-[var(--semantic-border-bold)] text-[var(--semantic-fg)] text-[11px] font-bold"
          >
            <Command className="w-3 h-3 text-[var(--semantic-primary)]" />
            <span>K</span>
          </button>

          {/* Resume Trigger */}
          <button
            onClick={onOpenResume}
            className="ds-btn-primary py-1.5 px-4 text-[11px] rounded-full flex items-center gap-1.5 shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

        </div>

      </div>
    </div>
  );
}
