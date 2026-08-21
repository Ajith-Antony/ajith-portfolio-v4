import React, { useState, useEffect } from 'react';
import { Sun, Moon, Command, FileText, Activity, Clock, Terminal, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onOpenCommandPalette: () => void;
  onOpenResume: () => void;
}

export default function CommandHeader({ onOpenCommandPalette, onOpenResume }: HeaderProps) {
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

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--semantic-surface)]/90 backdrop-blur-md border-b-2 border-[var(--semantic-border-bold)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Identity & Live Dubai Time */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-md bg-[var(--semantic-primary)] text-white flex items-center justify-center font-mono font-extrabold text-sm shadow-[3px_3px_0px_#000] border border-black">
            APA
          </div>

          <div className="hidden sm:flex flex-col font-mono">
            <span className="text-xs font-bold text-[var(--semantic-fg)] tracking-tight">AJITH PALLISSERY ANTONY</span>
            <div className="flex items-center gap-2 text-[10px] text-[var(--semantic-fg-subtle)] font-bold">
              <span className="flex items-center gap-1 text-[var(--semantic-primary)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--semantic-primary)] animate-pulse" />
                <span>AVAILABLE • DUBAI, UAE</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[var(--semantic-secondary)]" />
                <span>{dubaiTime || '14:53:00'} GST</span>
              </span>
            </div>
          </div>
        </div>

        {/* Section Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs font-bold text-[var(--semantic-fg-muted)]">
          <a href="#hero" className="hover:text-[var(--semantic-primary)] transition-colors">01. Overview</a>
          <a href="#lab" className="hover:text-[var(--semantic-primary)] transition-colors">02. Stream Lab</a>
          <a href="#vault" className="hover:text-[var(--semantic-primary)] transition-colors">03. Code Vault</a>
          <a href="#career" className="hover:text-[var(--semantic-primary)] transition-colors">04. Career Matrix</a>
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-3">
          
          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-md bg-[var(--semantic-surface)] border-2 border-[var(--semantic-border-bold)] text-[var(--semantic-fg)] hover:border-[var(--semantic-primary)] transition-all"
            title={`Current: ${theme.toUpperCase()} mode. Click to switch.`}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Cmd+K Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-md bg-[var(--semantic-surface)] border-2 border-[var(--semantic-border-bold)] text-[var(--semantic-fg)] hover:border-[var(--semantic-primary)] text-xs font-mono font-bold transition-all"
          >
            <Command className="w-3.5 h-3.5 text-[var(--semantic-primary)]" />
            <span>K</span>
          </button>

          {/* CV / Resume Trigger */}
          <button
            onClick={onOpenResume}
            className="ds-btn-primary text-xs flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Resume</span>
          </button>

        </div>

      </div>
    </header>
  );
}
