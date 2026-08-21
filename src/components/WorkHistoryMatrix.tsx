import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle2, Building2, Layers, Filter, Sparkles } from 'lucide-react';
import { EXPERIENCES } from '../data/resumeData';

export default function WorkHistoryMatrix() {
  const [selectedExpId, setSelectedExpId] = useState<string>('boli');
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const allTechTags = ['ALL', 'React', 'Next.js', 'TypeScript', 'WebSockets', 'Redux Toolkit', 'Shufti KYC', 'Web3'];

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (activeFilter === 'ALL') return true;
    return exp.techStack.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase()));
  });

  const activeExp = EXPERIENCES.find((e) => e.id === selectedExpId) || EXPERIENCES[0];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-mono mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          <span>CAREER TIMELINE • 6+ YEARS IMPACT IN DUBAI & GLOBAL</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
          Professional <span className="cyber-gradient-text">Work History Matrix</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3">
          Detailed engineering contributions across high-growth startups, institutional trading platforms, and Web3 marketplaces.
        </p>

        {/* Tech Stack Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {allTechTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                activeFilter === tag
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Main Experience Selector Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Company Selector Tabs */}
        <div className="lg:col-span-4 flex flex-col space-y-3">
          {filteredExperiences.map((exp) => {
            const isSelected = exp.id === activeExp.id;
            return (
              <button
                key={exp.id}
                onClick={() => setSelectedExpId(exp.id)}
                className={`w-full text-left p-4 rounded-2xl transition-all border flex items-center justify-between group ${
                  isSelected
                    ? 'bg-slate-900/90 border-emerald-500/50 shadow-xl shadow-emerald-500/10'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/50 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${isSelected ? 'bg-emerald-400 ring-4 ring-emerald-500/20 animate-pulse' : 'bg-slate-600'}`} />
                  <div>
                    <h3 className={`font-mono font-bold text-sm ${isSelected ? 'text-emerald-300' : 'text-slate-200 group-hover:text-slate-100'}`}>
                      {exp.company}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">{exp.role}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400 block mb-1">
                    {exp.badge}
                  </span>
                  <ChevronRight className={`w-4 h-4 ml-auto transition-transform ${isSelected ? 'text-emerald-400 translate-x-1' : 'text-slate-600'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Selected Experience Detail Card */}
        <div className="lg:col-span-8">
          {activeExp && (
            <div className="cyber-panel cyber-panel-glow p-6 sm:p-8 rounded-3xl border border-slate-800 relative overflow-hidden animate-fade-in">
              
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-mono mb-2">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{activeExp.company}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                    {activeExp.role}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 font-mono">
                    {activeExp.tagline}
                  </p>
                </div>

                <div className="flex flex-col items-start sm:items-end gap-1 text-xs font-mono text-slate-400 shrink-0">
                  <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{activeExp.period}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500 mt-1">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    <span>{activeExp.location}</span>
                  </div>
                </div>
              </div>

              {/* Empirical Metrics Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                {activeExp.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-[#030508] p-3 rounded-xl border border-slate-800/80 font-mono text-xs text-center text-slate-300">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400 mx-auto mb-1" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>

              {/* Accomplishment Bullet Points */}
              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Key Deliverables & Engineering Accomplishments
                </h4>
                {activeExp.highlights.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-3 rounded-xl border border-slate-800/50">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Tech Stack & Architecture</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeExp.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-700/60 text-xs font-mono text-slate-200 hover:border-emerald-500/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>

      </div>

    </section>
  );
}
