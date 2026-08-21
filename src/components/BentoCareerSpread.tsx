import React, { useState } from 'react';
import { Building2, CheckCircle2, ArrowUpRight, Zap, Globe, Sparkles } from 'lucide-react';
import { EXPERIENCES } from '../data/resumeData';

export default function BentoCareerSpread() {
  const [selectedId, setSelectedId] = useState<string>('boli');
  const selectedExp = EXPERIENCES.find((e) => e.id === selectedId) || EXPERIENCES[0];

  return (
    <section id="career" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 font-sans">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b-2 border-[var(--semantic-border-bold)] pb-8 mb-12">
        <div>
          <span className="font-mono text-xs font-bold text-[var(--semantic-primary)] uppercase tracking-widest block mb-2">
            6+ YEARS SENIOR IMPACT • DUBAI & GLOBAL
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--semantic-fg)] tracking-tight font-display">
            Career History <span className="ds-gradient-text">Bento Matrix</span>
          </h2>
        </div>
        <div className="font-mono text-xs text-[var(--semantic-fg-subtle)] font-bold text-left md:text-right">
          <span>INDEX 01 — 06</span>
          <div className="text-[var(--semantic-primary)]">DUBAI, UAE</div>
        </div>
      </div>

      {/* Asymmetric Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Selector Tiles */}
        <div className="lg:col-span-5 space-y-3 font-mono text-xs">
          {EXPERIENCES.map((exp) => {
            const isSelected = exp.id === selectedExp.id;
            return (
              <button
                key={exp.id}
                onClick={() => setSelectedId(exp.id)}
                className={`w-full text-left p-5 rounded-xl transition-all border-2 ${
                  isSelected
                    ? 'bg-[var(--semantic-primary-bg)] border-[var(--semantic-primary)] text-[var(--semantic-fg)] font-bold shadow-[4px_4px_0px_var(--semantic-primary)]'
                    : 'bg-[var(--semantic-surface)] border-[var(--semantic-border-bold)] text-[var(--semantic-fg-muted)] hover:border-[var(--semantic-primary)]'
                }`}
              >
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-base font-extrabold text-[var(--semantic-fg)]">{exp.company}</span>
                  <span className="text-[10px] px-2 py-0.5 ds-tag rounded">{exp.badge}</span>
                </div>
                <div className="text-xs text-[var(--semantic-primary)] font-bold mb-1">{exp.role}</div>
                <div className="text-[11px] text-[var(--semantic-fg-subtle)] font-bold">{exp.period} • {exp.location}</div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Active Experience Showcase Card */}
        <div className="lg:col-span-7">
          <div className="ds-card p-8 space-y-6 bg-[var(--semantic-surface-card)]">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[var(--semantic-border-bold)] pb-6 gap-2">
              <div>
                <span className="font-mono text-xs font-bold text-[var(--semantic-primary)] uppercase">{selectedExp.company}</span>
                <h3 className="text-2xl font-extrabold text-[var(--semantic-fg)] font-display">{selectedExp.role}</h3>
                <p className="text-xs font-mono text-[var(--semantic-fg-subtle)] font-bold mt-1">{selectedExp.tagline}</p>
              </div>
              <div className="font-mono text-xs text-right text-[var(--semantic-fg-muted)] font-bold shrink-0">
                <div>{selectedExp.period}</div>
                <div>{selectedExp.location}</div>
              </div>
            </div>

            {/* Metrics Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              {selectedExp.metrics.map((m, idx) => (
                <div key={idx} className="p-3 ds-tag text-center rounded-md">
                  {m}
                </div>
              ))}
            </div>

            {/* Key Accomplishments */}
            <div className="space-y-3 text-sm text-[var(--semantic-fg-muted)] leading-relaxed font-medium">
              {selectedExp.highlights.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-[var(--semantic-surface)] p-3.5 border-2 border-[var(--semantic-border-bold)] rounded-md">
                  <CheckCircle2 className="w-4 h-4 text-[var(--semantic-primary)] shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-4 border-t-2 border-[var(--semantic-border-bold)]">
              <span className="font-mono text-xs text-[var(--semantic-fg-subtle)] uppercase block mb-2 font-bold">Tech Stack & Tools:</span>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {selectedExp.techStack.map((tech, idx) => (
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
  );
}
