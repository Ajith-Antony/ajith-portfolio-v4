import React, { useState } from 'react';
import { Building2, CheckCircle2, ChevronRight, Sparkles, Layers, Award } from 'lucide-react';
import { EXPERIENCES } from '../data/resumeData';

export default function StackedExperienceDeck() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section id="career" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 font-sans">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b-2 border-[var(--semantic-border-bold)] pb-8 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--semantic-primary-bg)] border-2 border-[var(--semantic-primary)] text-[var(--semantic-primary)] text-xs font-mono mb-3 font-bold">
            <Award className="w-3.5 h-3.5" />
            <span>6+ YEARS DUBAI & GLOBAL CAREER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--semantic-fg)] tracking-tight font-display">
            Career Timeline <span className="ds-gradient-text">Stacked Deck</span>
          </h2>
        </div>

        {/* Deck Card Nav Switcher */}
        <div className="flex items-center gap-2 font-mono text-xs font-bold">
          {EXPERIENCES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`w-9 h-9 rounded-md border-2 transition-all font-bold ${
                activeIdx === idx
                  ? 'bg-[var(--semantic-primary)] text-white border-black shadow-[3px_3px_0px_#000]'
                  : 'bg-[var(--semantic-surface)] text-[var(--semantic-fg-muted)] border-[var(--semantic-border-bold)]'
              }`}
            >
              0{idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Stacked Deck Canvas Container */}
      <div className="relative min-h-[460px]">
        {EXPERIENCES.map((exp, idx) => {
          const isCurrent = idx === activeIdx;
          const isPast = idx < activeIdx;
          const offset = (idx - activeIdx) * 16;

          return (
            <div
              key={exp.id}
              onClick={() => setActiveIdx(idx)}
              style={{
                transform: `translateY(${offset}px) scale(${1 - Math.abs(idx - activeIdx) * 0.03})`,
                zIndex: EXPERIENCES.length - idx,
                opacity: isPast ? 0.3 : 1,
              }}
              className={`ds-card p-6 sm:p-8 absolute inset-x-0 top-0 cursor-pointer transition-all duration-500 bg-[var(--semantic-surface-card)] ${
                isCurrent ? 'ring-4 ring-[var(--semantic-primary)]' : ''
              }`}
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[var(--semantic-border-bold)] pb-6 mb-6 gap-3">
                <div>
                  <span className="font-mono text-xs font-extrabold text-[var(--semantic-primary)] uppercase tracking-wider block">
                    {exp.company}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[var(--semantic-fg)] font-display mt-0.5">
                    {exp.role}
                  </h3>
                  <p className="text-xs font-mono text-[var(--semantic-fg-subtle)] font-bold mt-1">
                    {exp.tagline}
                  </p>
                </div>

                <div className="font-mono text-xs text-right text-[var(--semantic-fg-muted)] font-bold shrink-0">
                  <div className="px-3 py-1 ds-tag rounded-md mb-1">{exp.badge}</div>
                  <div>{exp.period} • {exp.location}</div>
                </div>
              </div>

              {/* Metrics Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs mb-6">
                {exp.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="p-3 ds-tag text-center rounded-md font-bold">
                    {m}
                  </div>
                ))}
              </div>

              {/* Bullet Accomplishments */}
              <div className="space-y-3 text-sm text-[var(--semantic-fg-muted)] font-medium leading-relaxed mb-6">
                {exp.highlights.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3 bg-[var(--semantic-surface)] p-3 border-2 border-[var(--semantic-border-bold)] rounded-md">
                    <CheckCircle2 className="w-4 h-4 text-[var(--semantic-primary)] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-4 border-t-2 border-[var(--semantic-border-bold)] flex flex-wrap gap-2 font-mono text-xs">
                {exp.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 ds-tag rounded-md">
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
