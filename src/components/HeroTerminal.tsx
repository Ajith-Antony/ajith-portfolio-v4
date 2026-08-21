import React, { useState, useEffect } from 'react';
import { Zap, ArrowRight, Activity, ShieldCheck, Layers, MapPin, Globe, Layers3 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface HeroProps {
  onExploreClick: () => void;
  onOpenResume: () => void;
}

export default function HeroTerminal({ onExploreClick, onOpenResume }: HeroProps) {
  const [typedCode, setTypedCode] = useState('');
  const fullCode = 'const engineer = { name: "Ajith Antony", location: "Dubai, UAE", designSystem: "3-Layer Tokens", stack: ["React", "Next.js", "TypeScript", "WebSockets"] };';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullCode.length) {
        setTypedCode(fullCode.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 flex flex-col justify-between font-sans">
      
      {/* Top Hero Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--semantic-primary-bg)] border-2 border-[var(--semantic-primary)] text-[var(--semantic-primary)] text-xs font-mono font-bold shadow-md">
            <span className="w-2 h-2 rounded-full bg-[var(--semantic-primary)] animate-pulse" />
            <span>SENIOR FRONTEND ENGINEER • DUBAI, UAE</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--semantic-fg)] tracking-tight leading-[1.1]">
            AJITH PALLISSERY <br />
            <span className="ds-gradient-text">ANTONY</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl font-medium text-[var(--semantic-fg-muted)] max-w-2xl leading-relaxed">
            Architecting <span className="text-[var(--semantic-primary)] font-semibold">High-Frequency Trading UIs</span>, <span className="text-[var(--semantic-secondary)] font-semibold">PropTech Ecosystems</span>, and <span className="text-[var(--semantic-accent)] font-semibold">Real-Time WebSockets</span>.
          </p>

          {/* Bio Brief */}
          <p className="text-sm sm:text-base text-[var(--semantic-fg-subtle)] max-w-2xl leading-relaxed font-medium">
            Senior Frontend Engineer with 6+ years of experience delivering production-grade web applications in Dubai, UAE. Built using a strict <span className="font-mono text-[var(--semantic-primary)] font-bold">Three-Layer Design Token Architecture</span> (Primitive → Semantic → Component tokens).
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onExploreClick}
              className="ds-btn-primary flex items-center gap-2 border-2 border-black shadow-[3px_3px_0px_#000]"
            >
              <span>Explore Interactive Demos</span>
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

        {/* Right Column: Code Terminal Card (Explicit Dark Workbench Container) */}
        <div className="lg:col-span-5">
          <div className="editorial-panel-bold ds-dark-workbench p-6 sm:p-7 relative overflow-hidden">
            
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b-2 border-slate-700 pb-4 mb-4 font-mono text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-slate-300 font-bold ml-2">system ~ design-tokens-v3</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500 font-bold text-[10px]">
                <Layers3 className="w-3 h-3" />
                <span>TOKENS: ACTIVE</span>
              </div>
            </div>

            {/* Typewriter Code Terminal */}
            <div className="bg-[#05070a] p-4 mb-5 rounded-xl border-2 border-slate-800 font-mono text-xs">
              <div className="text-slate-400 mb-1 text-[11px] font-bold">// Token Layer: Primitive → Semantic → Component</div>
              <div className="text-white font-bold">
                <span className="text-cyan-400">&gt; </span>
                {typedCode}
                <span className="inline-block w-2 h-4 bg-emerald-400 ml-1 animate-pulse" />
              </div>
            </div>

            {/* Live Specs Grid */}
            <div className="grid grid-cols-2 gap-3 font-mono">
              {[
                { title: 'Core Stack', value: 'React / Next.js / TS', color: 'text-cyan' },
                { title: 'Real-Time Engine', value: 'WebSockets / Socket.IO', color: 'text-emerald' },
                { title: 'State Architecture', value: 'Redux Toolkit / RTK', color: 'text-purple' },
                { title: 'Design Architecture', value: '3-Layer CSS Tokens', color: 'text-amber-400' },
              ].map((spec, idx) => (
                <div key={idx} className="bg-[#05070a] p-3 rounded-xl border border-slate-700">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">{spec.title}</div>
                  <div className={`text-xs font-bold mt-1 ${spec.color}`}>{spec.value}</div>
                </div>
              ))}
            </div>

            {/* Quick Contact Line */}
            <div className="mt-5 pt-4 border-t border-slate-700 flex items-center justify-between text-xs font-mono font-bold text-slate-300">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Dubai, UAE</span>
              </div>
              <button
                onClick={onOpenResume}
                className="text-emerald-400 hover:underline flex items-center gap-1 font-bold"
              >
                <span>View Complete Resume</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 font-mono">
        {[
          { icon: Zap, label: 'FE Experience', value: '6+ Years', detail: 'React, Next.js, TS, Node' },
          { icon: Activity, label: 'Web3 & Crypto Scale', value: '150K+ Users', detail: 'Socket.IO & DEX UIs' },
          { icon: ShieldCheck, label: 'Trading Latency', value: '< 12ms', detail: 'WebSocket Streaming' },
          { icon: Layers, label: 'PropTech Launch', value: '99+ Vitals', detail: 'Shufti KYC & POA Gateways' },
        ].map((m, idx) => {
          const IconComp = m.icon;
          return (
            <div
              key={idx}
              className="editorial-panel-bold p-4 sm:p-5 flex flex-col justify-between group bg-[var(--semantic-surface-card)]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--semantic-fg-subtle)] font-bold">{m.label}</span>
                <IconComp className="w-4 h-4 text-[var(--semantic-primary)] group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[var(--semantic-fg)] ds-gradient-text">
                {m.value}
              </div>
              <div className="font-mono text-[11px] text-[var(--semantic-fg-subtle)] mt-1 font-bold">{m.detail}</div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
