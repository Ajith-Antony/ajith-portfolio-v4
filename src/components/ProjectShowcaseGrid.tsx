import React from 'react';
import { Globe, ExternalLink, Sparkles, Building2, TrendingUp, ShieldCheck, Layers } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/resumeData';

export default function ProjectShowcaseGrid() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-mono mb-3">
          <Globe className="w-3.5 h-3.5 text-blue-400" />
          <span>PRODUCTION PLATFORMS & PORTFOLIO</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
          Featured Production <span className="cyber-gradient-text">Architectures</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3">
          End-to-end frontend applications engineered for scale, performance, and high-frequency real-time interaction.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {FEATURED_PROJECTS.map((project) => (
          <div
            key={project.id}
            className="cyber-panel p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/40 transition-all group flex flex-col justify-between"
          >
            <div>
              {/* Category & Impact Score */}
              <div className="flex items-center justify-between mb-4 font-mono text-xs">
                <span className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 font-bold">
                  {project.domain}
                </span>
                <span className="text-[11px] text-cyan-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                  {project.impactScore}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-extrabold text-slate-100 group-hover:text-emerald-300 transition-colors mb-3">
                {project.title}
              </h3>

              {/* Summary */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {project.summary}
              </p>

              {/* Deliverables List */}
              <div className="space-y-2 mb-6 font-mono text-xs">
                {project.deliverables.map((d, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-slate-400">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="border-t border-slate-800/80 pt-4 flex flex-wrap gap-1.5 font-mono text-[11px]">
              {project.tech.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
