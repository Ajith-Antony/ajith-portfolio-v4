import React, { useState, useEffect } from 'react';
import { Terminal, FileText, Cpu, Moon, Sun, Layers } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenCommandPalette: () => void;
}

export default function CyberNavbar({ onOpenResume, onOpenCommandPalette }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'experience', 'trading-demo', 'proptech-demo', 'projects', 'code-inspector', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.2) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 bg-[var(--semantic-surface)] backdrop-blur-xl border-b border-[var(--semantic-border)] shadow-xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Telemetry & Design Token System Badge */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-[var(--semantic-primary-bg)] border border-[var(--semantic-border-active)] flex items-center justify-center group-hover:scale-105 transition-all">
            <Cpu className="w-5 h-5 text-[var(--semantic-primary)] group-hover:rotate-12 transition-transform" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-[var(--semantic-fg)] tracking-wider">
                AJITH ANTONY
              </span>
              <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase bg-[var(--semantic-primary-bg)] text-[var(--semantic-primary)] border border-[var(--semantic-border-active)]">
                DESIGN TOKENS V3
              </span>
            </div>
            <p className="font-mono text-[10px] text-[var(--semantic-fg-subtle)] tracking-tight">
              SR. FRONTEND ENGINEER // DUBAI, UAE
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[var(--semantic-surface)] p-1.5 rounded-full border border-[var(--semantic-border)] backdrop-blur-md">
          {[
            { id: 'experience', label: 'Experience' },
            { id: 'trading-demo', label: 'Trading Engine' },
            { id: 'proptech-demo', label: 'PropTech KYC' },
            { id: 'projects', label: 'Projects' },
            { id: 'code-inspector', label: 'Code Inspector' },
          ].map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  isActive
                    ? 'bg-[var(--semantic-primary-bg)] border border-[var(--semantic-border-active)] text-[var(--semantic-primary)] font-bold shadow-sm'
                    : 'text-[var(--semantic-fg-muted)] hover:text-[var(--semantic-fg)]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls: Theme Switcher + Cmd+K + Resume */}
        <div className="flex items-center gap-2.5">
          
          {/* Design Token Theme Switcher Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-[var(--semantic-surface)] border border-[var(--semantic-border)] hover:border-[var(--semantic-primary)] text-[var(--semantic-fg)] transition-all flex items-center justify-center"
            title={`Switch to ${theme === 'dark' ? 'Light Architectural Mode' : 'Dark OLED Mode'}`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>

          {/* Command Palette Button */}
          <button
            onClick={onOpenCommandPalette}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--semantic-surface)] border border-[var(--semantic-border)] hover:border-[var(--semantic-primary)] text-[var(--semantic-fg)] text-xs font-mono transition-all group"
            title="Open Command Palette (Cmd+K)"
          >
            <Terminal className="w-3.5 h-3.5 text-[var(--semantic-primary)] group-hover:scale-110 transition-transform" />
            <span className="text-[11px] text-[var(--semantic-fg-subtle)]">Cmd+K</span>
          </button>

          {/* Resume Modal Trigger */}
          <button
            onClick={onOpenResume}
            className="ds-btn-primary text-xs flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

        </div>

      </div>
    </header>
  );
}
