import React, { useState, useEffect } from 'react';
import { Activity, ArrowUpRight, ArrowDownRight, RefreshCw, Cpu, Zap, BarChart2 } from 'lucide-react';

interface OrderBookLevel {
  price: number;
  size: number;
  total: number;
}

export default function InteractiveWebSocketLab() {
  const [selectedPair, setSelectedPair] = useState<'BTC-USD' | 'ETH-USD' | 'SOL-USD'>('BTC-USD');
  const [mode, setMode] = useState<'websocket' | 'polling'>('websocket');
  const [refactorView, setRefactorView] = useState<'toolkit' | 'saga'>('toolkit');
  const [bids, setBids] = useState<OrderBookLevel[]>([]);
  const [asks, setAsks] = useState<OrderBookLevel[]>([]);
  const [lastPrice, setLastPrice] = useState<number>(64250);
  const [priceChange, setPriceChange] = useState<'up' | 'down'>('up');
  const [tickCount, setTickCount] = useState<number>(1420);

  const basePrices = {
    'BTC-USD': 64250,
    'ETH-USD': 3480,
    'SOL-USD': 148,
  };

  useEffect(() => {
    const base = basePrices[selectedPair];
    setLastPrice(base);

    const generateDepth = (startPrice: number, isBid: boolean): OrderBookLevel[] => {
      const levels: OrderBookLevel[] = [];
      let currentTotal = 0;
      for (let i = 0; i < 6; i++) {
        const step = (i + 1) * (startPrice * 0.0004);
        const price = isBid ? startPrice - step : startPrice + step;
        const size = +(Math.random() * 2.5 + 0.2).toFixed(3);
        currentTotal += size;
        levels.push({
          price: +price.toFixed(2),
          size,
          total: +currentTotal.toFixed(3),
        });
      }
      return levels;
    };

    setBids(generateDepth(base, true));
    setAsks(generateDepth(base, false));

    const intervalMs = mode === 'websocket' ? 350 : 2500;
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.49) * (base * 0.001);
      const newPrice = +(base + delta).toFixed(2);
      setPriceChange(newPrice >= lastPrice ? 'up' : 'down');
      setLastPrice(newPrice);
      setTickCount((prev) => prev + 1);

      setBids(generateDepth(newPrice, true));
      setAsks(generateDepth(newPrice, false));
    }, intervalMs);

    return () => clearInterval(interval);
  }, [selectedPair, mode]);

  return (
    <section id="lab" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 font-sans">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--semantic-secondary-bg)] border-2 border-[var(--semantic-secondary)] text-[var(--semantic-secondary)] text-xs font-mono mb-3 font-bold">
          <Activity className="w-3.5 h-3.5" />
          <span>COINROUTES EXPERIENCE • LOW-LATENCY WEBSOCKET STREAMING</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--semantic-fg)] tracking-tight font-display">
          Real-Time Orderbook <span className="ds-gradient-text">Stream Lab</span>
        </h2>
        <p className="text-[var(--semantic-fg-muted)] text-sm sm:text-base mt-3 font-medium">
          Interactive simulation of low-latency orderbook streaming architectures built for institutional crypto trading.
        </p>
      </div>

      {/* Main Trading Widget Container */}
      <div className="ds-card p-6 sm:p-8 relative overflow-hidden bg-[var(--semantic-surface-card)]">
        
        {/* Top Control Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-[var(--semantic-border-bold)] pb-6 mb-6">
          
          {/* Pair Selectors */}
          <div className="flex items-center gap-2">
            {(['BTC-USD', 'ETH-USD', 'SOL-USD'] as const).map((pair) => (
              <button
                key={pair}
                onClick={() => setSelectedPair(pair)}
                className={`px-4 py-2 rounded-md text-xs font-mono font-bold transition-all border-2 ${
                  selectedPair === pair
                    ? 'bg-[var(--semantic-primary)] text-white border-black shadow-[3px_3px_0px_#000]'
                    : 'bg-[var(--semantic-surface)] text-[var(--semantic-fg-muted)] border-[var(--semantic-border-bold)] hover:border-[var(--semantic-primary)]'
                }`}
              >
                {pair}
              </button>
            ))}
          </div>

          {/* Mode & Latency Switcher */}
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-[var(--semantic-surface)] p-1 rounded-md border-2 border-[var(--semantic-border-bold)] font-mono text-xs font-bold">
              <button
                onClick={() => setMode('websocket')}
                className={`px-3 py-1.5 rounded transition-all flex items-center gap-1.5 ${
                  mode === 'websocket'
                    ? 'bg-[var(--semantic-primary)] text-white shadow-sm'
                    : 'text-[var(--semantic-fg-muted)] hover:text-[var(--semantic-fg)]'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>WebSocket Stream (9ms)</span>
              </button>

              <button
                onClick={() => setMode('polling')}
                className={`px-3 py-1.5 rounded transition-all flex items-center gap-1.5 ${
                  mode === 'polling'
                    ? 'bg-amber-500 text-black font-bold shadow-sm'
                    : 'text-[var(--semantic-fg-muted)] hover:text-[var(--semantic-fg)]'
                }`}
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>REST Polling (850ms)</span>
              </button>
            </div>
          </div>

        </div>

        {/* Live Ticker Display Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 ds-dark-workbench p-4 rounded-xl border-2 border-slate-700 mb-6 font-mono">
          <div>
            <span className="text-[10px] text-slate-300 block uppercase font-bold">Instrument</span>
            <span className="text-sm font-bold text-white">{selectedPair}</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-300 block uppercase font-bold">Last Price</span>
            <span className={`text-base font-bold flex items-center gap-1 ${priceChange === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>
              ${lastPrice.toLocaleString()}
              {priceChange === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
            </span>
          </div>
          <div>
            <span className="text-[10px] text-slate-300 block uppercase font-bold">UI Latency Budget</span>
            <span className="text-sm font-bold text-cyan-400">{mode === 'websocket' ? '9.4 ms (RAF Batched)' : '840 ms (High CPU Load)'}</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-300 block uppercase font-bold">Ticks Ingested</span>
            <span className="text-sm font-bold text-purple-400">{tickCount.toLocaleString()} events</span>
          </div>
        </div>

        {/* Orderbook Depth Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 font-mono text-xs">
          
          {/* Asks */}
          <div className="ds-dark-workbench p-4 rounded-xl border-2 border-slate-700">
            <div className="flex justify-between text-slate-300 border-b border-slate-700 pb-2 mb-2 text-[11px] font-bold">
              <span>ASK PRICE (USD)</span>
              <span>SIZE</span>
              <span>TOTAL</span>
            </div>
            <div className="space-y-1.5">
              {asks.map((ask, idx) => (
                <div key={idx} className="flex justify-between items-center relative py-1 px-1.5 rounded bg-rose-950/60 text-white font-bold">
                  <div
                    className="absolute right-0 top-0 bottom-0 bg-rose-500/30 rounded pointer-events-none"
                    style={{ width: `${Math.min(100, (ask.total / 12) * 100)}%` }}
                  />
                  <span className="font-bold text-rose-400">${ask.price.toLocaleString()}</span>
                  <span className="text-slate-100">{ask.size}</span>
                  <span className="text-slate-300">{ask.total}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bids */}
          <div className="ds-dark-workbench p-4 rounded-xl border-2 border-slate-700">
            <div className="flex justify-between text-slate-300 border-b border-slate-700 pb-2 mb-2 text-[11px] font-bold">
              <span>BID PRICE (USD)</span>
              <span>SIZE</span>
              <span>TOTAL</span>
            </div>
            <div className="space-y-1.5">
              {bids.map((bid, idx) => (
                <div key={idx} className="flex justify-between items-center relative py-1 px-1.5 rounded bg-emerald-950/60 text-white font-bold">
                  <div
                    className="absolute left-0 top-0 bottom-0 bg-emerald-500/30 rounded pointer-events-none"
                    style={{ width: `${Math.min(100, (bid.total / 12) * 100)}%` }}
                  />
                  <span className="font-bold text-emerald-400">${bid.price.toLocaleString()}</span>
                  <span className="text-slate-100">{bid.size}</span>
                  <span className="text-slate-300">{bid.total}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Refactoring Insights Benchmark Card */}
        <div className="ds-dark-workbench p-5 rounded-xl border-2 border-slate-700 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-700 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span className="font-mono text-xs font-bold text-white uppercase">Architecture Benchmark: State Modernization</span>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs">
              <button
                onClick={() => setRefactorView('toolkit')}
                className={`px-3 py-1 rounded transition-all font-bold ${
                  refactorView === 'toolkit'
                    ? 'bg-emerald-500 text-slate-950'
                    : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-700'
                }`}
              >
                Redux Toolkit (Ajith's Modern Refactor)
              </button>

              <button
                onClick={() => setRefactorView('saga')}
                className={`px-3 py-1 rounded transition-all font-bold ${
                  refactorView === 'saga'
                    ? 'bg-amber-500 text-slate-950'
                    : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-700'
                }`}
              >
                Legacy Redux Saga
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono text-white">
            <div className="bg-[#05070a] p-3.5 rounded-xl border border-slate-700">
              <span className="text-slate-300 block text-[10px] uppercase font-bold">BOILERPLATE REDUCTION</span>
              <span className="text-lg font-bold text-emerald-400">{refactorView === 'toolkit' ? '-65% Code Volume' : '320+ Lines / Feature'}</span>
            </div>
            <div className="bg-[#05070a] p-3.5 rounded-xl border border-slate-700">
              <span className="text-slate-300 block text-[10px] uppercase font-bold">TYPE SAFETY & RELIABILITY</span>
              <span className="text-lg font-bold text-cyan-400">{refactorView === 'toolkit' ? '100% Strict TypeScript' : 'Implicit Any / JS'}</span>
            </div>
            <div className="bg-[#05070a] p-3.5 rounded-xl border border-slate-700">
              <span className="text-slate-300 block text-[10px] uppercase font-bold">CHART ENGINE LOAD</span>
              <span className="text-lg font-bold text-purple-400">{refactorView === 'toolkit' ? 'Lightweight Charts (<40kb)' : 'Heavy TradingView Bundle'}</span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
