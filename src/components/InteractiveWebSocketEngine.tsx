import React, { useState, useEffect, useRef } from 'react';
import { Activity, Zap, RefreshCw, Cpu, TrendingUp, BarChart2 } from 'lucide-react';

export default function InteractiveWebSocketEngine() {
  const [selectedPair, setSelectedPair] = useState<'BTC-USD' | 'ETH-USD' | 'SOL-USD'>('BTC-USD');
  const [streamMode, setStreamMode] = useState<'websocket' | 'polling'>('websocket');
  const chartCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const pricesRef = useRef<number[]>([]);

  const basePrices = { 'BTC-USD': 64250, 'ETH-USD': 3480, 'SOL-USD': 148 };

  // Live Canvas Price Line Chart Loop
  useEffect(() => {
    const canvas = chartCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const base = basePrices[selectedPair];

    // Seed prices
    if (pricesRef.current.length === 0) {
      for (let i = 0; i < 40; i++) {
        pricesRef.current.push(base + (Math.random() - 0.5) * (base * 0.002));
      }
    }

    const updateInterval = streamMode === 'websocket' ? 120 : 1200;
    let lastUpdate = performance.now();

    const renderChart = () => {
      const now = performance.now();

      if (now - lastUpdate > updateInterval) {
        lastUpdate = now;
        const last = pricesRef.current[pricesRef.current.length - 1];
        const nextPrice = last + (Math.random() - 0.49) * (base * 0.001);
        pricesRef.current.push(nextPrice);
        if (pricesRef.current.length > 50) pricesRef.current.shift();
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const points = pricesRef.current;
      if (points.length < 2) return;

      const minP = Math.min(...points);
      const maxP = Math.max(...points);
      const range = maxP - minP || 1;

      // Draw Grid Lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let y = 0; y < canvas.height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw Price Path
      ctx.beginPath();
      const stepX = canvas.width / (points.length - 1);

      points.forEach((p, idx) => {
        const x = idx * stepX;
        const normY = (p - minP) / range;
        const y = canvas.height - normY * (canvas.height - 20) - 10;

        if (idx === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });

      const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
      grad.addColorStop(0, '#ff4500');
      grad.addColorStop(0.5, '#38bdf8');
      grad.addColorStop(1, '#34d399');

      ctx.strokeStyle = grad;
      ctx.lineWidth = 3;
      ctx.stroke();

      // Fill Area Gradient
      const lastX = (points.length - 1) * stepX;
      ctx.lineTo(lastX, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      const fillGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      fillGrad.addColorStop(0, 'rgba(56, 189, 248, 0.25)');
      fillGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
      ctx.fillStyle = fillGrad;
      ctx.fill();

      animId = requestAnimationFrame(renderChart);
    };

    animId = requestAnimationFrame(renderChart);
    return () => cancelAnimationFrame(animId);
  }, [selectedPair, streamMode]);

  return (
    <section id="lab" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 font-sans">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--semantic-secondary-bg)] border-2 border-[var(--semantic-secondary)] text-[var(--semantic-secondary)] text-xs font-mono mb-3 font-bold">
          <Activity className="w-3.5 h-3.5" />
          <span>COINROUTES EXPERIENCE • SUB-12MS WEBSOCKET STREAMING ENGINE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--semantic-fg)] tracking-tight font-display">
          Real-Time WebSocket <span className="ds-gradient-text">Stream Engine</span>
        </h2>
        <p className="text-[var(--semantic-fg-muted)] text-sm sm:text-base mt-3 font-medium">
          Live continuous 60FPS canvas chart simulation of high-frequency trading data streams built for institutional crypto desks.
        </p>
      </div>

      {/* Main Container */}
      <div className="ds-card p-6 sm:p-8 bg-[var(--semantic-surface-card)]">
        
        {/* Control Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b-2 border-[var(--semantic-border-bold)] pb-6 mb-6">
          <div className="flex items-center gap-2">
            {(['BTC-USD', 'ETH-USD', 'SOL-USD'] as const).map((pair) => (
              <button
                key={pair}
                onClick={() => {
                  setSelectedPair(pair);
                  pricesRef.current = [];
                }}
                className={`px-4 py-2 rounded-md text-xs font-mono font-bold transition-all border-2 ${
                  selectedPair === pair
                    ? 'bg-[var(--semantic-primary)] text-white border-black shadow-[3px_3px_0px_#000]'
                    : 'bg-[var(--semantic-surface)] text-[var(--semantic-fg-muted)] border-[var(--semantic-border-bold)]'
                }`}
              >
                {pair}
              </button>
            ))}
          </div>

          <div className="flex items-center bg-[var(--semantic-surface)] p-1 rounded-md border-2 border-[var(--semantic-border-bold)] font-mono text-xs font-bold">
            <button
              onClick={() => setStreamMode('websocket')}
              className={`px-3 py-1.5 rounded transition-all flex items-center gap-1.5 ${
                streamMode === 'websocket'
                  ? 'bg-[var(--semantic-primary)] text-white shadow-sm'
                  : 'text-[var(--semantic-fg-muted)]'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>WebSocket Stream (9ms)</span>
            </button>

            <button
              onClick={() => setStreamMode('polling')}
              className={`px-3 py-1.5 rounded transition-all flex items-center gap-1.5 ${
                streamMode === 'polling'
                  ? 'bg-amber-500 text-black font-bold shadow-sm'
                  : 'text-[var(--semantic-fg-muted)]'
              }`}
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>REST Polling (850ms)</span>
            </button>
          </div>
        </div>

        {/* Continuous Animated Canvas Line Chart (Always Dark Workbench Box) */}
        <div className="ds-dark-workbench p-5 rounded-xl border-2 border-slate-700 mb-6 font-mono">
          <div className="flex justify-between items-center text-xs border-b border-slate-700 pb-3 mb-3 text-slate-300">
            <span className="font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>LIVE TICK STREAM CANVASES ({selectedPair})</span>
            </span>
            <span className="text-cyan-400 font-bold">
              {streamMode === 'websocket' ? '9.4 ms RAF Stream (Batch Hydrated)' : '850 ms REST Polling (High CPU)'}
            </span>
          </div>

          <canvas
            ref={chartCanvasRef}
            width={700}
            height={180}
            className="w-full h-44 rounded bg-[#04060a] border border-slate-800"
          />
        </div>

      </div>

    </section>
  );
}
