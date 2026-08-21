import React, { useState, useEffect } from 'react';
import { Search, FileText, Mail, ArrowRight, Zap, Building2, Code2, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export default function CommandPaletteModal({ isOpen, onClose, onOpenResume }: CommandPaletteProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const commands = [
    {
      id: 'resume',
      title: 'View & Download PDF Resume',
      category: 'Document',
      icon: FileText,
      action: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      id: 'trading',
      title: 'Jump to WebSocket Trading Terminal Demo',
      category: 'Interactive Demo',
      icon: Zap,
      action: () => {
        onClose();
        document.getElementById('trading-demo')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'proptech',
      title: 'Jump to Shufti KYC PropTech Simulator',
      category: 'Interactive Demo',
      icon: Building2,
      action: () => {
        onClose();
        document.getElementById('proptech-demo')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'code',
      title: 'Jump to Architecture Code Inspector',
      category: 'Navigation',
      icon: Code2,
      action: () => {
        onClose();
        document.getElementById('code-inspector')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'linkedin',
      title: 'Open LinkedIn Profile',
      category: 'External Link',
      icon: Globe,
      action: () => {
        window.open(PERSONAL_INFO.linkedin, '_blank');
        onClose();
      },
    },
    {
      id: 'email',
      title: 'Send Direct Email',
      category: 'Contact',
      icon: Mail,
      action: () => {
        window.location.href = `mailto:${PERSONAL_INFO.email}`;
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase()) || c.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-slate-950/80 backdrop-blur-md animate-fade-in font-sans">
      <div className="editorial-panel-bold w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl bg-[var(--semantic-surface-card)]">
        
        {/* Search Bar Input */}
        <div className="flex items-center gap-3 px-6 py-4 border-b-2 border-[var(--semantic-border-bold)] bg-[var(--semantic-surface)]">
          <Search className="w-5 h-5 text-[var(--semantic-primary)]" />
          <input
            type="text"
            placeholder="Type a command or search section (e.g. trading, resume, kyc)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-[var(--semantic-fg)] placeholder-[var(--semantic-fg-subtle)] font-mono text-sm focus:outline-none font-bold"
            autoFocus
          />
          <button
            onClick={onClose}
            className="px-2 py-1 rounded bg-[var(--semantic-surface-code)] border border-[var(--semantic-border-bold)] text-[var(--semantic-fg-muted)] hover:text-[var(--semantic-fg)] text-xs font-mono font-bold"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="p-3 max-h-96 overflow-y-auto space-y-1 font-mono text-xs">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd) => {
              const IconComponent = cmd.icon;
              return (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  className="w-full p-3.5 rounded-xl flex items-center justify-between text-left hover:bg-[var(--semantic-primary-bg)] transition-all border border-transparent hover:border-[var(--semantic-primary)] group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-[var(--semantic-surface)] border border-[var(--semantic-border-bold)] text-[var(--semantic-primary)]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-[var(--semantic-fg)] group-hover:text-[var(--semantic-primary)] text-sm">{cmd.title}</div>
                      <div className="text-[10px] text-[var(--semantic-fg-subtle)] font-bold">{cmd.category}</div>
                    </div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-[var(--semantic-fg-subtle)] group-hover:text-[var(--semantic-primary)] group-hover:translate-x-1 transition-all" />
                </button>
              );
            })
          ) : (
            <div className="p-6 text-center text-[var(--semantic-fg-muted)] font-bold">No matching commands found.</div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 border-t-2 border-[var(--semantic-border-bold)] bg-[var(--semantic-surface)] flex items-center justify-between text-[11px] font-mono text-[var(--semantic-fg-subtle)] font-bold">
          <span>Press ESC or click outside to dismiss</span>
          <span>Ajith Antony Studio HUD</span>
        </div>

      </div>
    </div>
  );
}
