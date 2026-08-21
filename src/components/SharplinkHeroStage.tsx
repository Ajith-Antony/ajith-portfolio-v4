import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Activity, Clock, ShieldCheck, Globe, Cpu } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/resumeData';

interface HeroProps {
  onExploreClick: () => void;
  onOpenResume: () => void;
}

export default function SharplinkHeroStage({ onExploreClick, onOpenResume }: HeroProps) {
  const [dubaiTime, setDubaiTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Dubai',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setDubaiTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const triggerSparks = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 65,
      spread: 75,
      origin: { x, y },
      colors: ['#ff4500', '#38bdf8', '#d97706', '#34d399'],
    });
  };

  return (
    <section className="min-h-[90dvh] pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 font-sans">
      
      {/* Sharplink Pinned Grid Top Bar */}
      <div className="has-pin has-pin-tr border-b-2 border-[var(--semantic-border-bold)] pb-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded bg-[var(--semantic-primary)] text-white flex items-center justify-center font-mono font-extrabold text-xs shadow-[2px_2px_0px_#000] border border-black">
            APA
          </div>

          <div className="font-mono text-xs font-bold text-[var(--semantic-fg)]">
            <span>AJITH PALLISSERY ANTONY</span>
            <div className="text-[10px] text-[var(--semantic-primary)] font-bold">
              SENIOR FRONTEND ARCHITECT • 6+ YRS
            </div>
          </div>
        </div>

        <div className="font-mono text-xs text-[var(--semantic-fg-subtle)] font-bold flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-[var(--semantic-primary)]">
            <span className="w-2 h-2 rounded-full bg-[var(--semantic-primary)] animate-ping" />
            <span>DUBAI (GST UTC+4): {dubaiTime || '15:08:00'}</span>
          </span>
        </div>

      </div>

      {/* Hero Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Monumental 88px Archivo Display Title */}
        <div className="lg:col-span-8 space-y-8">
          
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-[var(--semantic-primary)] uppercase tracking-widest block">
              // ARCHITECTURAL DOSSIER & HIGH-FREQUENCY ENGINEERING
            </span>

            <h1 className="text-5xl sm:text-7xl lg:text-[88px] font-black text-[var(--semantic-fg)] tracking-tighter leading-[0.94] font-display select-none">
              AJITH <br />
              <span className="ds-gradient-text">PALLISSERY</span> <br />
              <span>ANTONY</span>
            </h1>
          </div>

          <p className="text-lg sm:text-2xl font-medium text-[var(--semantic-fg-muted)] max-w-2xl leading-relaxed font-sans">
            Engineering <span className="text-[var(--semantic-primary)] font-bold">Sub-12ms Trading Streams</span>, <span className="text-[var(--semantic-secondary)] font-bold">Shufti KYC Real-Time OCR Pipelines</span>, and <span className="text-[var(--semantic-accent)] font-bold">High-Craft Design Tokens</span>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={(e) => {
                triggerSparks(e);
                onExploreClick();
              }}
              className="ds-btn-primary flex items-center gap-2 text-xs"
            >
              <span>Inspect Case Folders & Telemetry</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={(e) => {
                triggerSparks(e);
                onOpenResume();
              }}
              className="ds-btn-secondary flex items-center gap-2 text-xs"
            >
              <Sparkles className="w-4 h-4 text-[var(--semantic-primary)]" />
              <span>Open Interactive CV</span>
            </button>
          </div>

        </div>

        {/* Right Column: Sharplink Pinned Telemetry Card */}
        <div className="lg:col-span-4">
          <div className="case-folder p-6 bg-[var(--semantic-surface-card)] has-pin">
            
            <div className="case-tag-tab mb-4 text-[10px]">
              CASE FILE #001: SYSTEM TELEMETRY
            </div>

            <div className="ds-dark-workbench p-4 rounded border-2 border-slate-700 font-mono text-xs mb-4">
              <div className="text-emerald-400 font-bold mb-1">// ARCHITECTURE METRICS</div>
              <div className="text-white font-bold">WS STREAM: &lt; 12 MS</div>
              <div className="text-slate-300">WEB VITALS: 99 / 100</div>
              <div className="text-cyan-400">STATUS: VERIFIED COMPLIANT</div>
            </div>

            <div className="grid grid-cols-2 gap-2 font-mono text-xs">
              <div className="bg-[var(--semantic-surface-tag)] p-3 rounded border border-[var(--semantic-border-bold)]">
                <span className="text-[10px] text-[var(--semantic-fg-subtle)] block font-bold">FE EXP</span>
                <span className="text-base font-extrabold text-[var(--semantic-primary)]">6+ YRS</span>
              </div>
              <div className="bg-[var(--semantic-surface-tag)] p-3 rounded border border-[var(--semantic-border-bold)]">
                <span className="text-[10px] text-[var(--semantic-fg-subtle)] block font-bold">LOCATION</span>
                <span className="text-base font-extrabold text-[var(--semantic-secondary)]">DUBAI</span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
