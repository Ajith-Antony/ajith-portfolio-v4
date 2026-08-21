import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, Activity, Cpu, ShieldCheck, Gauge, Globe, Code2, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface HeroProps {
  onExploreClick: () => void;
  onOpenResume: () => void;
}

export default function HeroExecutiveStage({ onExploreClick, onOpenResume }: HeroProps) {
  const [fps, setFps] = useState<number>(60);
  const [typedConsole, setTypedConsole] = useState<string>('');
  const consoleMessage = 'system.init({ engineer: "Ajith Antony", experience: "6+ Years", location: "Dubai, UAE", status: "Low-Latency WebSocket & PropTech Ready" });';

  // Live FPS Monitor
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const loop = () => {
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= consoleMessage.length) {
        setTypedConsole(consoleMessage.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-[90dvh] pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 flex flex-col justify-between font-sans">
      
      {/* Top Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Asymmetric Display Manifesto */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--semantic-primary-bg)] border-2 border-[var(--semantic-primary)] text-[var(--semantic-primary)] text-xs font-mono font-bold shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--semantic-primary)] animate-ping" />
            <span>SENIOR FRONTEND ENGINEER • DUBAI, UAE</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--semantic-fg)] tracking-tight leading-[1.05] font-display">
            AJITH PALLISSERY <br />
            <span className="ds-gradient-text">ANTONY</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl font-medium text-[var(--semantic-fg-muted)] max-w-2xl leading-relaxed font-sans">
            Architecting <span className="text-[var(--semantic-primary)] font-bold">High-Frequency Trading UIs</span>, <span className="text-[var(--semantic-secondary)] font-bold">PropTech Ecosystems</span>, and <span className="text-[var(--semantic-accent)] font-bold">Real-Time WebSockets</span>.
          </p>

          {/* Bio Description */}
          <p className="text-sm sm:text-base text-[var(--semantic-fg-subtle)] max-w-2xl leading-relaxed font-medium">
            6+ years of senior engineering experience delivering production-grade web applications in Dubai, UAE. Built with strict <span className="font-mono text-[var(--semantic-primary)] font-bold">Three-Layer Design Tokens</span> and sub-12ms streaming architectures.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onExploreClick}
              className="ds-btn-primary flex items-center gap-2"
            >
              <span>Launch Physics & Stream Lab</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="ds-btn-secondary flex items-center gap-2"
            >
              <Globe className="w-4 h-4 text-[var(--semantic-secondary)]" />
              <span>LinkedIn Profile</span>
            </a>
          </div>

        </div>

        {/* Right Column: Live Telemetry & System Status HUD Card */}
        <div className="lg:col-span-5">
          <div className="ds-card p-6 sm:p-7 relative overflow-hidden bg-[var(--semantic-surface-card)]">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-[var(--semantic-border-bold)] pb-4 mb-4 font-mono text-xs">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[var(--semantic-primary)]" />
                <span className="font-bold text-[var(--semantic-fg)] uppercase">System Telemetry HUD</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500 font-bold text-[10px]">
                60 FPS STREAMING
              </span>
            </div>

            {/* Typewriter Code Window (Always High Contrast Dark Console) */}
            <div className="ds-dark-workbench p-4 mb-5 rounded-xl border-2 border-slate-700 overflow-x-auto min-h-[80px] font-mono text-xs">
              <div className="text-slate-400 text-[11px] mb-1 font-bold">// Engine Kernel Status</div>
              <div className="text-white font-bold">
                <span className="text-cyan-400">&gt; </span>
                {typedConsole}
                <span className="inline-block w-2 h-4 bg-emerald-400 ml-1 animate-pulse" />
              </div>
            </div>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="bg-[var(--semantic-surface-tag)] p-3 rounded-lg border border-[var(--semantic-border-bold)]">
                <span className="text-[10px] text-[var(--semantic-fg-subtle)] block uppercase font-bold">Render Rate</span>
                <span className="text-base font-extrabold text-[var(--semantic-primary)]">{fps} FPS</span>
              </div>
              <div className="bg-[var(--semantic-surface-tag)] p-3 rounded-lg border border-[var(--semantic-border-bold)]">
                <span className="text-[10px] text-[var(--semantic-fg-subtle)] block uppercase font-bold">WS Latency</span>
                <span className="text-base font-extrabold text-[var(--semantic-secondary)]">&lt; 12 ms</span>
              </div>
              <div className="bg-[var(--semantic-surface-tag)] p-3 rounded-lg border border-[var(--semantic-border-bold)]">
                <span className="text-[10px] text-[var(--semantic-fg-subtle)] block uppercase font-bold">Web Vitals</span>
                <span className="text-base font-extrabold text-emerald-500">99 / 100</span>
              </div>
              <div className="bg-[var(--semantic-surface-tag)] p-3 rounded-lg border border-[var(--semantic-border-bold)]">
                <span className="text-[10px] text-[var(--semantic-fg-subtle)] block uppercase font-bold">Tokens State</span>
                <span className="text-base font-extrabold text-[var(--semantic-accent)]">3-Layer Active</span>
              </div>
            </div>

            {/* Quick Contact Footer */}
            <div className="mt-5 pt-4 border-t-2 border-[var(--semantic-border-bold)] flex items-center justify-between text-xs font-mono font-bold text-[var(--semantic-fg-muted)]">
              <span>Dubai, UAE (GST UTC+4)</span>
              <button
                onClick={onOpenResume}
                className="text-[var(--semantic-primary)] hover:underline flex items-center gap-1 font-bold"
              >
                <span>View CV Document</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Metric Cards Bottom Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 font-mono text-xs">
        {[
          { icon: Zap, label: 'FE Experience', val: '6+ Years', sub: 'React, Next.js, TS, Node' },
          { icon: Activity, label: 'Web3 Active Scale', val: '150K+ Users', sub: 'Socket.IO & DEX UIs' },
          { icon: ShieldCheck, label: 'Identity Pipeline', val: 'Shufti KYC', sub: 'Automated Real-Time OCR' },
          { icon: Gauge, label: 'Core Web Vitals', val: '99 Score', sub: 'Optimized 0.4s LCP' },
        ].map((m, idx) => {
          const IconComp = m.icon;
          return (
            <div key={idx} className="ds-card p-4 sm:p-5 flex flex-col justify-between group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] uppercase tracking-wider text-[var(--semantic-fg-subtle)] font-bold">{m.label}</span>
                <IconComp className="w-4 h-4 text-[var(--semantic-primary)] group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[var(--semantic-fg)] ds-gradient-text">
                {m.val}
              </div>
              <div className="text-[11px] text-[var(--semantic-fg-subtle)] mt-1 font-bold">{m.sub}</div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
