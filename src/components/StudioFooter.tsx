import React, { useState } from 'react';
import { Mail, Copy, Check, Clock, Cpu, Globe, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

export default function StudioFooter() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <footer id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-2 border-[var(--semantic-border-bold)] relative z-10 font-mono text-xs">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Column: Persona Info & Email Copy Button */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <Cpu className="w-5 h-5 text-[var(--semantic-primary)]" />
            <span className="font-extrabold text-base text-[var(--semantic-fg)] font-display tracking-tight">AJITH PALLISSERY ANTONY</span>
          </div>
          <p className="text-xs text-[var(--semantic-fg-muted)] max-w-md font-sans font-medium">
            Senior Frontend Engineer with 6+ years experience. Open to leadership & senior technical roles in Dubai, UAE & international engineering teams.
          </p>

          <button
            onClick={handleCopyEmail}
            className="mt-4 px-4 py-2.5 rounded-md bg-[var(--semantic-surface)] border-2 border-[var(--semantic-border-bold)] text-[var(--semantic-fg)] hover:border-[var(--semantic-primary)] text-xs font-bold transition-all flex items-center gap-2"
          >
            {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-[var(--semantic-secondary)]" />}
            <span>{copiedEmail ? 'Email Copied!' : PERSONAL_INFO.email}</span>
          </button>
        </div>

        {/* Right Column: Links & Timezone */}
        <div className="flex flex-col items-center md:items-end gap-3 text-[var(--semantic-fg-muted)] font-bold">
          <div className="flex items-center gap-2 bg-[var(--semantic-surface)] px-3.5 py-1.5 rounded-md border border-[var(--semantic-border-bold)]">
            <Clock className="w-3.5 h-3.5 text-[var(--semantic-primary)]" />
            <span>Dubai, UAE (GST UTC+4)</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--semantic-primary)] flex items-center gap-1 transition-colors"
            >
              <Globe className="w-4 h-4 text-[var(--semantic-secondary)]" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-[var(--semantic-fg-subtle)]" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[var(--semantic-primary)] flex items-center gap-1 transition-colors"
            >
              <Mail className="w-4 h-4 text-[var(--semantic-primary)]" />
              <span>Direct Email</span>
            </a>
          </div>

          <div className="text-[11px] text-[var(--semantic-fg-subtle)] mt-2">
            © {new Date().getFullYear()} Ajith Pallissery Antony • High-Craft Engineering Framework V4
          </div>
        </div>

      </div>
    </footer>
  );
}
