import React from 'react';
import { X, Printer, Mail, Phone, MapPin, GraduationCap, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, EXPERIENCES } from '../data/resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InteractiveResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="editorial-panel-bold w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-y-auto shadow-2xl bg-[var(--semantic-surface-card)] flex flex-col justify-between">
        
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:p-6 bg-[var(--semantic-surface)] backdrop-blur-xl border-b-2 border-[var(--semantic-border-bold)]">
          <div>
            <span className="font-mono text-xs text-[var(--semantic-primary)] font-bold uppercase tracking-wider">
              CURRICULUM VITAE // VERIFIED DOCUMENT
            </span>
            <h3 className="text-xl font-extrabold text-[var(--semantic-fg)] font-mono">
              Ajith Pallissery Antony — Resume
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="ds-btn-primary text-xs flex items-center gap-1.5 border-2 border-black shadow-[3px_3px_0px_#000]"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[var(--semantic-surface)] hover:bg-[var(--semantic-primary-bg)] text-[var(--semantic-fg)] border-2 border-[var(--semantic-border-bold)]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 space-y-8 font-sans text-[var(--semantic-fg)] text-sm leading-relaxed">
          
          {/* Resume Header Info */}
          <div className="border-b-2 border-[var(--semantic-border-bold)] pb-6">
            <h1 className="text-3xl font-extrabold text-[var(--semantic-fg)] tracking-tight">
              AJITH PALLISSERY ANTONY
            </h1>
            <p className="text-sm font-mono text-[var(--semantic-primary)] font-bold mt-1">
              SENIOR FRONTEND DEVELOPER / ENGINEER
            </p>

            <div className="flex flex-wrap gap-4 mt-4 font-mono text-xs text-[var(--semantic-fg-muted)]">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1.5 hover:text-[var(--semantic-primary)]">
                <Mail className="w-3.5 h-3.5 text-[var(--semantic-primary)]" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[var(--semantic-secondary)]" />
                <span>{PERSONAL_INFO.phone}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[var(--semantic-primary)]" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[var(--semantic-secondary)]">
                <Globe className="w-3.5 h-3.5 text-[var(--semantic-secondary)]" />
                <span>linkedin.com/in/ajithpallisseryantony/</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="font-mono text-xs uppercase font-bold text-[var(--semantic-fg-subtle)] tracking-wider mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="bg-[var(--semantic-surface)] p-4 rounded-xl border border-[var(--semantic-border-bold)] text-[var(--semantic-fg)] text-xs sm:text-sm leading-relaxed font-medium">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Core Technical Skills */}
          <div>
            <h2 className="font-mono text-xs uppercase font-bold text-[var(--semantic-fg-subtle)] tracking-wider mb-3">
              CORE TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs">
              <div className="bg-[var(--semantic-surface)] p-3.5 rounded-xl border border-[var(--semantic-border-bold)]">
                <span className="text-[var(--semantic-primary)] font-bold block mb-1">Frontend & Real-Time:</span>
                <span className="text-[var(--semantic-fg-muted)]">React, Next.js, TypeScript, WebSockets, Redux Toolkit, Lightweight Charts, Ag-Grid, Tailwind CSS</span>
              </div>
              <div className="bg-[var(--semantic-surface)] p-3.5 rounded-xl border border-[var(--semantic-border-bold)]">
                <span className="text-[var(--semantic-secondary)] font-bold block mb-1">Backend, Web3 & Tooling:</span>
                <span className="text-[var(--semantic-fg-muted)]">Node.js, Express, Fastify, Shufti KYC, Wallet Integrations, DEX, MongoDB, PostgreSQL, Git, Docker, Core Web Vitals</span>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h2 className="font-mono text-xs uppercase font-bold text-[var(--semantic-fg-subtle)] tracking-wider mb-4">
              PROFESSIONAL EXPERIENCE
            </h2>

            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="bg-[var(--semantic-surface)] p-5 rounded-2xl border border-[var(--semantic-border-bold)]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2 font-mono">
                    <div className="font-bold text-base text-[var(--semantic-fg)]">{exp.company} — <span className="text-[var(--semantic-primary)]">{exp.role}</span></div>
                    <div className="text-xs text-[var(--semantic-fg-subtle)]">{exp.period} | {exp.location}</div>
                  </div>

                  <div className="space-y-1.5 text-xs text-[var(--semantic-fg-muted)] mt-3">
                    {exp.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <span className="text-[var(--semantic-primary)] font-bold">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Philosophy */}
          <div>
            <h2 className="font-mono text-xs uppercase font-bold text-[var(--semantic-fg-subtle)] tracking-wider mb-3">
              EDUCATION & PHILOSOPHY
            </h2>
            <div className="bg-[var(--semantic-surface)] p-4 rounded-2xl border border-[var(--semantic-border-bold)] font-mono text-xs">
              <div className="flex items-center gap-2 text-[var(--semantic-fg)] font-bold text-sm">
                <GraduationCap className="w-4 h-4 text-[var(--semantic-primary)]" />
                <span>{PERSONAL_INFO.education.degree}</span>
              </div>
              <p className="text-[var(--semantic-fg-subtle)] mt-1">{PERSONAL_INFO.education.university} ({PERSONAL_INFO.education.period})</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
