import React, { useState } from 'react';
import { Folder, CheckCircle2, FileText, Award, ArrowUpRight } from 'lucide-react';
import { EXPERIENCES } from '../data/resumeData';

export default function MosbyCaseFolderDeck() {
  const [activeCaseIdx, setActiveCaseIdx] = useState<number>(0);
  const activeExp = EXPERIENCES[activeCaseIdx] || EXPERIENCES[0];

  return (
    <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 font-sans">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b-2 border-[var(--semantic-border-bold)] pb-8 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--semantic-primary-bg)] border-2 border-[var(--semantic-primary)] text-[var(--semantic-primary)] text-xs font-mono mb-3 font-bold">
            <Folder className="w-3.5 h-3.5" />
            <span>MOSBY'S FILES INSPIRED • PHYSICAL CASE DOSSIERS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--semantic-fg)] tracking-tight font-display">
            Senior Engineering <span className="ds-gradient-text">Case Folders</span>
          </h2>
        </div>

        {/* Case Folder Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs font-bold">
          {EXPERIENCES.map((exp, idx) => (
            <button
              key={exp.id}
              onClick={() => setActiveCaseIdx(idx)}
              className={`px-3 py-1.5 rounded border-2 transition-all font-bold ${
                activeCaseIdx === idx
                  ? 'bg-[var(--semantic-primary)] text-white border-black shadow-[3px_3px_0px_#000]'
                  : 'bg-[var(--semantic-surface)] text-[var(--semantic-fg-muted)] border-[var(--semantic-border-bold)]'
              }`}
            >
              CASE 0{idx + 1}: {exp.company.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Physical Manila Case Folder Workspace Card */}
      <div className="case-folder p-6 sm:p-10 has-pin">
        
        {/* Manila Folder Tab */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[var(--semantic-border-bold)] pb-6 mb-8 gap-4">
          <div>
            <span className="case-tag-tab text-xs mb-2">
              CASE DOSSIER #{String(activeCaseIdx + 1).padStart(3, '0')} — {activeExp.company}
            </span>
            <h3 className="text-3xl font-extrabold text-[var(--semantic-fg)] font-display mt-2">
              {activeExp.role}
            </h3>
            <p className="text-xs font-mono text-[var(--semantic-fg-subtle)] font-bold mt-1">
              {activeExp.tagline}
            </p>
          </div>

          {/* Official Regulatory Stamp Graphic */}
          <div className="p-3 border-2 border-dashed border-[var(--semantic-accent)] text-[var(--semantic-accent)] font-mono text-[11px] font-bold text-center rounded rotate-[-2deg] shrink-0">
            <div>★ APPROVED VERIFIED STAMP ★</div>
            <div>DUBAI, UAE • {activeExp.period}</div>
          </div>
        </div>

        {/* Folder Sheet Content Paper */}
        <div className="case-sheet mb-8">
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs mb-6">
            {activeExp.metrics.map((m, idx) => (
              <div key={idx} className="p-3 ds-tag text-center rounded font-bold">
                {m}
              </div>
            ))}
          </div>

          {/* Bullet Accomplishments */}
          <div className="space-y-3 text-sm text-[var(--semantic-fg-muted)] font-medium leading-relaxed mb-6">
            {activeExp.highlights.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-[var(--semantic-surface)] p-4 border-2 border-[var(--semantic-border-bold)] rounded">
                <CheckCircle2 className="w-4 h-4 text-[var(--semantic-primary)] shrink-0 mt-0.5" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-4 border-t-2 border-[var(--semantic-border-bold)]">
            <span className="font-mono text-xs text-[var(--semantic-fg-subtle)] uppercase block mb-2 font-bold">
              Case Technologies & Tools:
            </span>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {activeExp.techStack.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 ds-tag rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
