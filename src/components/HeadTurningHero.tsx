import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, Sparkles, Activity, ShieldCheck, Terminal, Globe, Cpu, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/resumeData';

interface HeroProps {
  onExploreClick: () => void;
  onOpenResume: () => void;
}

export default function HeadTurningHero({ onExploreClick, onOpenResume }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'latency' | 'vitals' | 'tokens'>('latency');

  const triggerSparks = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 45,
      spread: 60,
      origin: { x, y },
      colors: ['#ff4500', '#38bdf8', '#6366f1', '#34d399'],
    });
  };

  return (
    <section className="min-h-[92dvh] pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 flex flex-col justify-between font-sans">
      
      {/* Top Banner Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[var(--semantic-border-bold)] pb-6 mb-12">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[var(--semantic-primary-bg)] border-2 border-[var(--semantic-primary)] text-[var(--semantic-primary)] text-xs font-mono font-extrabold shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--semantic-primary)] animate-ping" />
          <span>AJITH ANTONY • SENIOR FRONTEND ARCHITECT • DUBAI (UTC+4)</span>
        </div>

        <div className="font-mono text-xs text-[var(--semantic-fg-subtle)] font-bold flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-[var(--semantic-secondary)]">
            <Activity className="w-4 h-4 animate-pulse" />
            <span>60 FPS HARDWARE ACCELERATED</span>
          </span>
        </div>
      </div>

      {/* Hero Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Oversized Kinetic Typography */}
        <div className="lg:col-span-7 space-y-8">
          
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-[var(--semantic-primary)] uppercase tracking-widest block">
              // 6+ YEARS CRAFT • PROPTECH, TRADING & WEBSOCKETS
            </span>
            
            {/* Split Kinetic Display Title */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-[var(--semantic-fg)] tracking-tight leading-[0.95] font-display select-none">
              AJITH <br />
              <span className="ds-gradient-text hover:skew-x-2 transition-transform duration-300 inline-block">
                PALLISSERY
              </span> <br />
              <span className="text-[var(--semantic-fg)]">ANTONY</span>
            </h1>
          </div>

          <p className="text-lg sm:text-2xl font-medium text-[var(--semantic-fg-muted)] max-w-2xl leading-relaxed font-sans">
            Engineering <span className="text-[var(--semantic-primary)] font-bold">Sub-12ms WebSocket Orderbooks</span>, <span className="text-[var(--semantic-secondary)] font-bold">Shufti KYC Real-Time Pipelines</span>, and <span className="text-[var(--semantic-accent)] font-bold">High-Craft Design Tokens</span>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={(e) => {
                triggerSparks(e);
                onExploreClick();
              }}
              className="ds-btn-primary flex items-center gap-2 text-sm"
            >
              <span>Explore Interactive Telemetry</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={(e) => {
                triggerSparks(e);
                onOpenResume();
              }}
              className="ds-btn-secondary flex items-center gap-2 text-sm"
            >
              <Sparkles className="w-4 h-4 text-[var(--semantic-primary)]" />
              <span>View Interactive CV</span>
            </button>
          </div>

        </div>

        {/* Right Column: Interactive 3D Telemetry Radar HUD */}
        <div className="lg:col-span-5">
          <div className="ds-card p-7 bg-[var(--semantic-surface-card)] relative overflow-hidden">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-[var(--semantic-border-bold)] pb-4 mb-5 font-mono text-xs">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[var(--semantic-primary)]" />
                <span className="font-bold text-[var(--semantic-fg)] uppercase">Live Engineering Telemetry</span>
              </div>
              <span className="px-2.5 py-1 rounded bg-[var(--semantic-primary-bg)] text-[var(--semantic-primary)] border border-[var(--semantic-primary)] font-bold text-[10px]">
                ACTIVE KERNEL
              </span>
            </div>

            {/* Interactive Radar Tabs */}
            <div className="flex items-center gap-2 mb-5 font-mono text-xs font-bold">
              {[
                { id: 'latency', label: 'WebSocket Streaming' },
                { id: 'vitals', label: 'Core Web Vitals' },
                { id: 'tokens', label: '3-Layer Tokens' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3 py-1.5 rounded-md border transition-all ${
                    activeTab === tab.id
                      ? 'bg-[var(--semantic-primary)] text-white border-black shadow-[2px_2px_0px_#000]'
                      : 'bg-[var(--semantic-surface)] text-[var(--semantic-fg-muted)] border-[var(--semantic-border-bold)]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Display Telemetry Dynamic Panel */}
            <div className="ds-dark-workbench p-5 rounded-xl border-2 border-slate-700 font-mono text-xs mb-5">
              {activeTab === 'latency' && (
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Coinroutes Trading Stream:</span>
                    <span className="text-emerald-400 font-bold">&lt; 12ms WebSocket</span>
                  </div>
                  <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden p-0.5 border border-slate-700">
                    <div className="bg-emerald-400 h-full rounded-full w-[94%] animate-pulse" />
                  </div>
                  <div className="text-[11px] text-slate-400">
                    RAF event-loop batching prevents React re-render thrashing under 1,000+ ticks/sec.
                  </div>
                </div>
              )}

              {activeTab === 'vitals' && (
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Boli.ae Optimization:</span>
                    <span className="text-cyan-400 font-bold">42 ➔ 99 / 100 Score</span>
                  </div>
                  <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden p-0.5 border border-slate-700">
                    <div className="bg-cyan-400 h-full rounded-full w-[99%]" />
                  </div>
                  <div className="text-[11px] text-slate-400">
                    LCP reduced from 3.8s to 0.4s via SSR hydration & image preloading pipelines.
                  </div>
                </div>
              )}

              {activeTab === 'tokens' && (
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Architecture Compliance:</span>
                    <span className="text-purple-400 font-bold">100% Tokenized</span>
                  </div>
                  <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden p-0.5 border border-slate-700">
                    <div className="bg-purple-400 h-full rounded-full w-[100%]" />
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Primitive → Semantic → Component 3-layer architecture for WCAG AAA compliance.
                  </div>
                </div>
              )}
            </div>

            {/* Telemetry Footer */}
            <div className="flex items-center justify-between text-xs font-mono font-bold text-[var(--semantic-fg-muted)]">
              <span>Verified Dubai Stack</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--semantic-primary)] hover:underline flex items-center gap-1 font-bold"
              >
                <span>LinkedIn Network</span>
                <Globe className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
