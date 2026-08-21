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
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
    });
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto font-sans">
      
      {/* Print Styles Injection */}
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 12mm 15mm;
          }
          body {
            background: #ffffff !important;
            color: #000000 !important;
          }
          body * {
            visibility: hidden !important;
          }
          .resume-modal-card, .resume-modal-card * {
            visibility: visible !important;
          }
          .resume-modal-card {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            background: #ffffff !important;
            color: #000000 !important;
            box-shadow: none !important;
            border: none !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .no-print {
            display: none !important;
          }
          .print-border-b {
            border-bottom: 1px solid #ccc !important;
          }
          .print-compact-gap {
            margin-bottom: 0.75rem !important;
          }
        }
      `}</style>

      <div className="resume-modal-card w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-y-auto shadow-2xl bg-[var(--semantic-surface-card)] flex flex-col justify-between border-2 border-[var(--semantic-border-bold)]">
        
        {/* Modal Action Header (Hidden during Print) */}
        <div className="no-print sticky top-0 z-20 flex items-center justify-between p-4 sm:p-6 bg-[var(--semantic-surface)] backdrop-blur-xl border-b-2 border-[var(--semantic-border-bold)]">
          <div>
            <span className="font-mono text-xs text-[var(--semantic-primary)] font-bold uppercase tracking-wider">
              CURRICULUM VITAE // VERIFIED 1-PAGE DOCUMENT
            </span>
            <h3 className="text-xl font-extrabold text-[var(--semantic-fg)] font-mono">
              Ajith Pallissery Antony — Resume
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="ds-btn-primary text-xs flex items-center gap-1.5 shadow-[3px_3px_0px_#000]"
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

        {/* Printable Resume Content Body */}
        <div className="p-6 sm:p-8 space-y-6 text-[var(--semantic-fg)] text-xs sm:text-sm leading-relaxed">
          
          {/* Resume Header Info */}
          <div className="border-b-2 border-[var(--semantic-border-bold)] pb-4 print-border-b print-compact-gap">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--semantic-fg)] tracking-tight">
              AJITH PALLISSERY ANTONY
            </h1>
            <p className="text-xs font-mono text-[var(--semantic-primary)] font-bold mt-0.5">
              SENIOR FRONTEND DEVELOPER / ENGINEER (6+ YEARS)
            </p>

            <div className="flex flex-wrap gap-4 mt-3 font-mono text-xs text-[var(--semantic-fg-muted)]">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[var(--semantic-primary)] no-print" />
                <span>{PERSONAL_INFO.email}</span>
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[var(--semantic-secondary)] no-print" />
                <span>{PERSONAL_INFO.phone}</span>
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[var(--semantic-primary)] no-print" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-[var(--semantic-secondary)] no-print" />
                <span>linkedin.com/in/ajithpallisseryantony/</span>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="print-compact-gap">
            <h2 className="font-mono text-xs uppercase font-bold text-[var(--semantic-fg-subtle)] tracking-wider mb-1">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="bg-[var(--semantic-surface)] p-3 rounded-lg border border-[var(--semantic-border-bold)] text-[var(--semantic-fg)] text-xs leading-relaxed font-medium">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Core Technical Skills */}
          <div className="print-compact-gap">
            <h2 className="font-mono text-xs uppercase font-bold text-[var(--semantic-fg-subtle)] tracking-wider mb-2">
              CORE TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 font-mono text-xs">
              <div className="bg-[var(--semantic-surface)] p-3 rounded-lg border border-[var(--semantic-border-bold)]">
                <span className="text-[var(--semantic-primary)] font-bold block mb-0.5">Frontend & Real-Time:</span>
                <span className="text-[var(--semantic-fg-muted)]">React 19, Next.js, TypeScript, WebSockets, Redux Toolkit, Lightweight Charts, Tailwind CSS</span>
              </div>
              <div className="bg-[var(--semantic-surface)] p-3 rounded-lg border border-[var(--semantic-border-bold)]">
                <span className="text-[var(--semantic-secondary)] font-bold block mb-0.5">Backend & Regulatory:</span>
                <span className="text-[var(--semantic-fg-muted)]">Node.js, Express, Shufti KYC, Wallet Integrations, DEX, MongoDB, Core Web Vitals (99/100)</span>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="print-compact-gap">
            <h2 className="font-mono text-xs uppercase font-bold text-[var(--semantic-fg-subtle)] tracking-wider mb-3">
              PROFESSIONAL EXPERIENCE
            </h2>

            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="bg-[var(--semantic-surface)] p-4 rounded-xl border border-[var(--semantic-border-bold)]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1 font-mono">
                    <div className="font-bold text-sm text-[var(--semantic-fg)]">
                      {exp.company} — <span className="text-[var(--semantic-primary)]">{exp.role}</span>
                    </div>
                    <div className="text-xs text-[var(--semantic-fg-subtle)] font-bold">{exp.period} | {exp.location}</div>
                  </div>

                  <div className="space-y-1 text-xs text-[var(--semantic-fg-muted)] mt-2">
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

          {/* Education */}
          <div>
            <h2 className="font-mono text-xs uppercase font-bold text-[var(--semantic-fg-subtle)] tracking-wider mb-2">
              EDUCATION & CERTIFICATION
            </h2>
            <div className="bg-[var(--semantic-surface)] p-3 rounded-lg border border-[var(--semantic-border-bold)] font-mono text-xs">
              <div className="flex items-center gap-2 text-[var(--semantic-fg)] font-bold">
                <GraduationCap className="w-4 h-4 text-[var(--semantic-primary)] no-print" />
                <span>{PERSONAL_INFO.education.degree}</span>
              </div>
              <p className="text-[var(--semantic-fg-subtle)] text-[11px] mt-0.5">{PERSONAL_INFO.education.university} ({PERSONAL_INFO.education.period})</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
