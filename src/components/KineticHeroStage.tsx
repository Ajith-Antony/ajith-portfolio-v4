import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Activity, Cpu, ShieldCheck, Zap, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/resumeData';

interface HeroProps {
  onExploreClick: () => void;
  onOpenResume: () => void;
}

export default function KineticHeroStage({ onExploreClick, onOpenResume }: HeroProps) {
  const [coreSpeed, setCoreSpeed] = useState<number>(1);
  const audioCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Live Audio Equalizer Waveform Canvas Loop
  useEffect(() => {
    const canvas = audioCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const barCount = 32;

    const renderWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const barWidth = canvas.width / barCount;
      const time = Date.now() * 0.005;

      for (let i = 0; i < barCount; i++) {
        const height = Math.abs(Math.sin(time + i * 0.2) * Math.cos(time * 0.5 + i * 0.1)) * (canvas.height * 0.8) + 4;
        const x = i * barWidth;
        const y = canvas.height - height;

        const grad = ctx.createLinearGradient(0, canvas.height, 0, 0);
        grad.addColorStop(0, '#ff4500');
        grad.addColorStop(0.5, '#38bdf8');
        grad.addColorStop(1, '#6366f1');

        ctx.fillStyle = grad;
        ctx.fillRect(x + 1, y, barWidth - 2, height);
      }

      animId = requestAnimationFrame(renderWave);
    };

    animId = requestAnimationFrame(renderWave);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleCoreClick = (e: React.MouseEvent) => {
    setCoreSpeed((prev) => (prev > 4 ? 1 : prev + 1.5));
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 70,
      spread: 90,
      origin: { x, y },
      colors: ['#ff4500', '#38bdf8', '#6366f1', '#34d399'],
    });
  };

  return (
    <section className="min-h-[92dvh] pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 flex flex-col justify-between font-sans">
      
      {/* Top Banner Status & Equalizer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b-2 border-[var(--semantic-border-bold)] pb-6 mb-8">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[var(--semantic-primary-bg)] border-2 border-[var(--semantic-primary)] text-[var(--semantic-primary)] text-xs font-mono font-extrabold shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--semantic-primary)] animate-ping" />
          <span>AJITH ANTONY • SENIOR FRONTEND ENGINEER • DUBAI, UAE</span>
        </div>

        {/* Live Audio Equalizer Canvas */}
        <div className="flex items-center gap-3 font-mono text-xs text-[var(--semantic-fg-subtle)] font-bold">
          <span className="text-[var(--semantic-primary)]">AUDIO EQUALIZER:</span>
          <canvas ref={audioCanvasRef} width={140} height={28} className="rounded bg-black/40 border border-[var(--semantic-border-bold)]" />
        </div>
      </div>

      {/* Hero Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Oversized Kinetic Typography */}
        <div className="lg:col-span-7 space-y-8">
          
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-[var(--semantic-primary)] uppercase tracking-widest block">
              // 6+ YEARS CRAFT • WEBSOCKETS, PROPTECH & TRADING
            </span>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-[var(--semantic-fg)] tracking-tight leading-[0.92] font-display select-none">
              AJITH <br />
              <span className="ds-gradient-text animate-pulse inline-block">
                PALLISSERY
              </span> <br />
              <span className="text-[var(--semantic-fg)]">ANTONY</span>
            </h1>
          </div>

          <p className="text-lg sm:text-2xl font-medium text-[var(--semantic-fg-muted)] max-w-2xl leading-relaxed font-sans">
            Engineering <span className="text-[var(--semantic-primary)] font-bold">Sub-12ms Trading Streams</span>, <span className="text-[var(--semantic-secondary)] font-bold">Shufti KYC Real-Time OCR Pipelines</span>, and <span className="text-[var(--semantic-accent)] font-bold">High-Craft Design Tokens</span>.
          </p>

          {/* Interactive CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onExploreClick}
              className="ds-btn-primary flex items-center gap-2 text-sm shadow-[4px_4px_0px_#000]"
            >
              <span>Explore Live WebSocket Stream Engine</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenResume}
              className="ds-btn-secondary flex items-center gap-2 text-sm"
            >
              <Sparkles className="w-4 h-4 text-[var(--semantic-primary)]" />
              <span>Launch Interactive CV</span>
            </button>
          </div>

        </div>

        {/* Right Column: 3D Interactive Spinning Quantum Core Card */}
        <div className="lg:col-span-5">
          <div
            onClick={handleCoreClick}
            className="ds-card p-8 bg-[var(--semantic-surface-card)] relative overflow-hidden cursor-pointer group hover:scale-[1.02] transition-transform"
          >
            
            {/* Title Bar */}
            <div className="flex items-center justify-between border-b-2 border-[var(--semantic-border-bold)] pb-4 mb-6 font-mono text-xs">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[var(--semantic-primary)]" />
                <span className="font-bold text-[var(--semantic-fg)] uppercase">Interactive Quantum Core</span>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-500 font-bold border border-emerald-500 text-[10px]">
                SPEED: {coreSpeed}X (CLICK TO BOOST)
              </span>
            </div>

            {/* Rotating 3D Core Sphere Graphic */}
            <div className="w-full h-52 flex items-center justify-center relative my-4">
              <div
                className="w-36 h-36 rounded-full border-4 border-dashed border-[var(--semantic-primary)] flex items-center justify-center relative transition-transform duration-700"
                style={{
                  transform: `rotate(${Date.now() * 0.05 * coreSpeed}deg) scale(1.05)`,
                  animation: `spin ${3 / coreSpeed}s linear infinite`,
                }}
              >
                <div className="w-24 h-24 rounded-full border-4 border-cyan-400 flex items-center justify-center animate-pulse">
                  <div className="w-12 h-12 rounded-full bg-[var(--semantic-primary)] flex items-center justify-center text-white font-mono font-extrabold text-xs shadow-lg">
                    60FPS
                  </div>
                </div>
              </div>
            </div>

            {/* Core Metrics */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs pt-4 border-t-2 border-[var(--semantic-border-bold)]">
              <div className="bg-[var(--semantic-surface-tag)] p-3 rounded-md border border-[var(--semantic-border-bold)]">
                <span className="text-[10px] text-[var(--semantic-fg-subtle)] block font-bold uppercase">WS Latency</span>
                <span className="text-base font-extrabold text-[var(--semantic-primary)]">&lt; 12 ms</span>
              </div>
              <div className="bg-[var(--semantic-surface-tag)] p-3 rounded-md border border-[var(--semantic-border-bold)]">
                <span className="text-[10px] text-[var(--semantic-fg-subtle)] block font-bold uppercase">Core Vitals</span>
                <span className="text-base font-extrabold text-emerald-500">99 / 100</span>
              </div>
            </div>

            <div className="text-[11px] font-mono text-center text-[var(--semantic-fg-subtle)] mt-4 font-bold">
              ✨ Click core matrix to trigger particle bursts & boost speed!
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
