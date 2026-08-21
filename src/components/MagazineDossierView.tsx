import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Building2, Sparkles, Layers, FileCode2, Zap, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, FEATURED_PROJECTS } from '../data/resumeData';

interface DossierProps {
  onOpenResume: () => void;
  onSwitchToWorkbench: () => void;
}

export default function MagazineDossierView({ onOpenResume, onSwitchToWorkbench }: DossierProps) {
  const [selectedExpId, setSelectedExpId] = useState<string>('boli');
  const activeExp = EXPERIENCES.find((e) => e.id === selectedExpId) || EXPERIENCES[0];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20 font-sans">
      
      {/* 1. HERO MAGAZINE SPREAD */}
      <section className="border-b-2 border-[var(--semantic-border-bold)] pb-16">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b-2 border-[var(--semantic-border-bold)] pb-8 mb-10">
          <div>
            <span className="font-mono text-xs font-bold text-[var(--semantic-primary)] uppercase tracking-widest block mb-2">
              VOL. VI • DUBAI EXECUTIVE DOSSIER • ISSUE 2026
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--semantic-fg)] tracking-tight leading-[1.05]">
              AJITH PALLISSERY <br />
              <span className="text-[var(--semantic-primary)]">ANTONY</span>
            </h1>
          </div>

          <div className="font-mono text-xs text-[var(--semantic-fg-subtle)] space-y-1 text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-[var(--semantic-primary)] pl-3 md:pl-0 md:pr-3">
            <div className="font-bold text-[var(--semantic-fg)]">SENIOR FRONTEND ENGINEER</div>
            <div>DUBAI, UAE (GST UTC+4)</div>
            <div className="text-[var(--semantic-primary)] font-bold">6+ YEARS IMPACT</div>
          </div>
        </div>

        {/* Editorial 2-Column Article Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Drop Cap Manifesto */}
          <div className="lg:col-span-7 space-y-6 text-base text-[var(--semantic-fg-muted)] leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-[var(--semantic-primary)] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
              Senior Frontend Engineer with 6+ years of experience architecting and scaling high-performance, real-time web applications across proptech, trading, fintech, Web3, and enterprise platforms in Dubai, UAE.
            </p>
            <p>
              Specialized in React, Next.js, and TypeScript, with deep expertise in real-time WebSockets streaming, low-latency UI performance optimization, and strict Core Web Vitals compliance under peak traffic scenarios.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onSwitchToWorkbench}
                className="ds-btn-primary flex items-center gap-2 border-2 border-black shadow-[4px_4px_0px_#000]"
              >
                <span>Launch Interactive Workbench</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="ds-btn-secondary flex items-center gap-2"
              >
                <span>View CV Document</span>
              </button>
            </div>
          </div>

          {/* Right Column: Key Architectural Metrics Box */}
          <div className="lg:col-span-5">
            <div className="editorial-panel-bold p-6 font-mono text-xs space-y-4">
              <div className="flex items-center justify-between border-b-2 border-[var(--semantic-border-bold)] pb-3">
                <span className="font-bold uppercase text-[var(--semantic-fg)]">Core Metrics Summary</span>
                <span className="text-[var(--semantic-primary)] font-bold">VERIFIED</span>
              </div>

              {[
                { label: 'Primary Specialization', val: 'React / Next.js / TypeScript' },
                { label: 'Real-Time Streaming', val: 'WebSockets (<12ms latency)' },
                { label: 'Identity Verification', val: 'Shufti KYC Real-Time Flow' },
                { label: 'State Modernization', val: 'Redux Saga → Redux Toolkit' },
                { label: 'Web3 & DEX Scale', val: '150,000+ Active Wallets' },
                { label: 'Core Web Vitals', val: '99/100 Optimized LCP' },
              ].map((row, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-[var(--semantic-border)] pb-2">
                  <span className="text-[var(--semantic-fg-subtle)] font-bold">{row.label}</span>
                  <span className="font-bold text-[var(--semantic-fg)]">{row.val}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </section>

      {/* 2. CAREER HISTORY DOSSIER INDEX */}
      <section className="space-y-8">
        
        <div className="border-b-2 border-[var(--semantic-border-bold)] pb-4 flex items-center justify-between">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--semantic-fg)] font-sans">
            Career History <span className="text-[var(--semantic-primary)]">Dossier</span>
          </h2>
          <span className="font-mono text-xs text-[var(--semantic-fg-subtle)] font-bold">INDEX 01 - 06</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Company List */}
          <div className="lg:col-span-4 space-y-2 font-mono text-xs">
            {EXPERIENCES.map((exp) => {
              const isSelected = exp.id === activeExp.id;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedExpId(exp.id)}
                  className={`w-full text-left p-4 transition-all border-2 ${
                    isSelected
                      ? 'bg-[var(--semantic-primary-bg)] border-[var(--semantic-primary)] text-[var(--semantic-fg)] font-bold shadow-[4px_4px_0px_var(--semantic-primary)]'
                      : 'bg-[var(--semantic-surface)] border-[var(--semantic-border)] text-[var(--semantic-fg-muted)] hover:border-[var(--semantic-border-bold)]'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold">{exp.company}</span>
                    <span className="text-[10px] px-2 py-0.5 ds-tag">{exp.badge}</span>
                  </div>
                  <div className="text-[11px] text-[var(--semantic-fg-subtle)] font-bold">{exp.role} • {exp.period}</div>
                </button>
              );
            })}
          </div>

          {/* Active Detail View */}
          <div className="lg:col-span-8">
            <div className="editorial-panel-bold p-8 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[var(--semantic-border-bold)] pb-6 gap-2">
                <div>
                  <span className="font-mono text-xs font-bold text-[var(--semantic-primary)] uppercase">{activeExp.company}</span>
                  <h3 className="text-2xl font-extrabold text-[var(--semantic-fg)]">{activeExp.role}</h3>
                  <p className="text-xs font-mono text-[var(--semantic-fg-subtle)] font-bold mt-1">{activeExp.tagline}</p>
                </div>
                <div className="font-mono text-xs text-right text-[var(--semantic-fg-muted)] font-bold shrink-0">
                  <div>{activeExp.period}</div>
                  <div>{activeExp.location}</div>
                </div>
              </div>

              {/* Empirical Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                {activeExp.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 ds-tag text-center rounded-md">
                    {m}
                  </div>
                ))}
              </div>

              {/* Accomplishments */}
              <div className="space-y-3 text-sm text-[var(--semantic-fg-muted)] leading-relaxed font-medium">
                {activeExp.highlights.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-[var(--semantic-surface)] p-3.5 border-2 border-[var(--semantic-border-bold)] rounded-md">
                    <CheckCircle2 className="w-4 h-4 text-[var(--semantic-primary)] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="pt-4 border-t border-[var(--semantic-border)]">
                <span className="font-mono text-xs text-[var(--semantic-fg-subtle)] uppercase block mb-2 font-bold">Tech Stack & Architecture:</span>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {activeExp.techStack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 ds-tag rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </section>

      {/* 3. FEATURED PRODUCTION ARCHITECTURES */}
      <section className="space-y-8">
        <div className="border-b-2 border-[var(--semantic-border-bold)] pb-4 flex items-center justify-between">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--semantic-fg)] font-sans">
            Featured <span className="text-[var(--semantic-primary)]">Architectures</span>
          </h2>
          <span className="font-mono text-xs text-[var(--semantic-fg-subtle)] font-bold">FEATURED SPREAD</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <div key={project.id} className="editorial-panel-bold p-7 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-3 font-mono text-xs font-bold">
                  <span className="text-[var(--semantic-primary)]">{project.domain}</span>
                  <span className="px-2.5 py-1 ds-tag rounded">{project.impactScore}</span>
                </div>
                <h3 className="text-xl font-extrabold text-[var(--semantic-fg)] mb-3">{project.title}</h3>
                <p className="text-xs text-[var(--semantic-fg-muted)] leading-relaxed font-medium mb-6">{project.summary}</p>
              </div>

              <div className="border-t border-[var(--semantic-border)] pt-4 flex flex-wrap gap-1.5 font-mono text-[11px]">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 ds-tag rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
