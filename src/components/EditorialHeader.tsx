import React from 'react';
import { Sun, Moon, Command, FileText, Sparkles, Layers, Sliders } from 'lucide-react';
import { useTheme, type AestheticMode } from '../context/ThemeContext';

interface HeaderProps {
  activeView: 'dossier' | 'workbench';
  onViewChange: (view: 'dossier' | 'workbench') => void;
  onOpenCommandPalette: () => void;
  onOpenResume: () => void;
}

export default function EditorialHeader({
  activeView,
  onViewChange,
  onOpenCommandPalette,
  onOpenResume,
}: HeaderProps) {
  const { theme, toggleTheme, aesthetic, setAesthetic } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--semantic-surface)]/90 backdrop-blur-md border-b-2 border-[var(--semantic-border-bold)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Brand Monogram & Persona */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-md bg-[var(--semantic-primary)] text-white flex items-center justify-center font-mono font-extrabold text-sm shadow-[3px_3px_0px_#000] border border-black">
            APA
          </div>
          <div className="hidden sm:block font-mono">
            <div className="text-xs font-bold text-[var(--semantic-fg)] tracking-tight">AJITH PALLISSERY ANTONY</div>
            <div className="text-[10px] text-[var(--semantic-primary)] font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--semantic-primary)] animate-pulse" />
              <span>SENIOR FRONTEND ENGINEER • DUBAI, UAE</span>
            </div>
          </div>
        </div>

        {/* Center: Aesthetic Studio Mode Switcher */}
        <div className="hidden md:flex items-center bg-[var(--semantic-surface-tag)] p-1 rounded-md border-2 border-[var(--semantic-border-bold)] font-mono text-xs font-bold">
          {[
            { id: 'swiss', label: 'Swiss Architectural' },
            { id: 'editorial', label: 'Editorial Luxury' },
            { id: 'cyber', label: 'Cyber Lab' },
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => setAesthetic(mode.id as AestheticMode)}
              className={`px-3 py-1 rounded transition-all ${
                aesthetic === mode.id
                  ? 'bg-[var(--semantic-primary)] text-white shadow-[2px_2px_0px_#000]'
                  : 'text-[var(--semantic-fg-muted)] hover:text-[var(--semantic-fg)]'
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>

        {/* Right: Controls & Actions */}
        <div className="flex items-center gap-3">
          
          {/* Workstation View Switcher */}
          <div className="flex items-center bg-[var(--semantic-surface)] p-1 rounded-md border border-[var(--semantic-border-bold)] font-mono text-xs font-bold">
            <button
              onClick={() => onViewChange('dossier')}
              className={`px-2.5 py-1 rounded transition-all ${
                activeView === 'dossier'
                  ? 'bg-[var(--semantic-primary-bg)] text-[var(--semantic-primary)] border border-[var(--semantic-primary)]'
                  : 'text-[var(--semantic-fg-subtle)]'
              }`}
            >
              Dossier
            </button>
            <button
              onClick={() => onViewChange('workbench')}
              className={`px-2.5 py-1 rounded transition-all ${
                activeView === 'workbench'
                  ? 'bg-[var(--semantic-primary-bg)] text-[var(--semantic-primary)] border border-[var(--semantic-primary)]'
                  : 'text-[var(--semantic-fg-subtle)]'
              }`}
            >
              Workbench
            </button>
          </div>

          {/* Theme Toggle (Sun / Moon) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md bg-[var(--semantic-surface)] border-2 border-[var(--semantic-border-bold)] text-[var(--semantic-fg)] hover:border-[var(--semantic-primary)] transition-all"
            title={`Current: ${theme.toUpperCase()} mode. Click to switch.`}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Command Palette (Cmd+K) */}
          <button
            onClick={onOpenCommandPalette}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-md bg-[var(--semantic-surface)] border-2 border-[var(--semantic-border-bold)] text-[var(--semantic-fg)] hover:border-[var(--semantic-primary)] text-xs font-mono font-bold transition-all"
          >
            <Command className="w-3.5 h-3.5 text-[var(--semantic-primary)]" />
            <span>K</span>
          </button>

          {/* Resume Trigger */}
          <button
            onClick={onOpenResume}
            className="ds-btn-primary text-xs flex items-center gap-1.5 border-2 border-black shadow-[3px_3px_0px_#000]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Resume</span>
          </button>

        </div>

      </div>
    </header>
  );
}
