import React, { useState } from 'react';
import { Cpu, Zap, Code2, Layers, ShieldCheck, Activity } from 'lucide-react';

export default function AnimatedSkillsMatrix() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const skills = [
    { name: 'React 19 & Next.js', category: 'Frontend Architecture', level: '99%', color: '#ff4500' },
    { name: 'TypeScript & ES6+', category: 'Core Language', level: '98%', color: '#38bdf8' },
    { name: 'WebSockets & Sub-12ms Stream', category: 'Real-Time Streaming', level: '96%', color: '#6366f1' },
    { name: 'Shufti KYC & Biometrics', category: 'Regulatory Compliance', level: '95%', color: '#34d399' },
    { name: 'Redux Toolkit & Saga', category: 'State Engineering', level: '97%', color: '#f59e0b' },
    { name: 'Core Web Vitals (99/100)', category: 'Performance Tuning', level: '99%', color: '#ec4899' },
    { name: 'Tailwind CSS & 3-Layer Tokens', category: 'Design Systems', level: '98%', color: '#10b981' },
    { name: 'Node.js & Express REST APIs', category: 'Backend Integration', level: '90%', color: '#a855f7' },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 font-sans">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--semantic-accent-bg)] border-2 border-[var(--semantic-accent)] text-[var(--semantic-accent)] text-xs font-mono mb-3 font-bold">
          <Cpu className="w-3.5 h-3.5" />
          <span>ANIMATED TECHNICAL MATRIX</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--semantic-fg)] tracking-tight font-display">
          Orbital Skill <span className="ds-gradient-text">Matrix</span>
        </h2>
      </div>

      {/* Grid of Animated Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((s, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            className="ds-card p-5 bg-[var(--semantic-surface-card)] hover:border-[var(--semantic-primary)] transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-mono font-bold uppercase text-[var(--semantic-fg-subtle)]">
                  {s.category}
                </span>
                <span
                  className="w-3 h-3 rounded-full animate-ping"
                  style={{ backgroundColor: s.color }}
                />
              </div>

              <h4 className="text-lg font-bold text-[var(--semantic-fg)] font-display group-hover:text-[var(--semantic-primary)] transition-colors">
                {s.name}
              </h4>
            </div>

            <div className="mt-4 pt-3 border-t border-[var(--semantic-border-bold)] font-mono text-xs flex justify-between items-center">
              <span className="text-[var(--semantic-fg-subtle)] font-bold">Proficiency</span>
              <span className="font-extrabold text-[var(--semantic-primary)]">{s.level}</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
