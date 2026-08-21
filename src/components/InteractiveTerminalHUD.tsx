import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Sparkles, Activity, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useTheme } from '../context/ThemeContext';

interface CommandOutput {
  command: string;
  response: React.ReactNode;
}

export default function InteractiveTerminalHUD() {
  const { theme, toggleTheme } = useTheme();
  const [inputVal, setInputVal] = useState<string>('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'system.welcome',
      response: (
        <div className="space-y-1 text-emerald-400">
          <div>AJITH ANTONY KERNEL V4.0 [SENIOR FRONTEND ARCHITECT]</div>
          <div>Type <span className="text-cyan-400 font-bold">'help'</span> or click suggested commands below:</div>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    let resNode: React.ReactNode = null;

    if (cleanCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (cleanCmd === 'help') {
      resNode = (
        <div className="space-y-1 text-slate-200">
          <div>Available System Directives:</div>
          <div>• <span className="text-cyan-400 font-bold">about</span> - Senior Frontend Engineer summary</div>
          <div>• <span className="text-emerald-400 font-bold">skills</span> - Core technical competencies</div>
          <div>• <span className="text-amber-400 font-bold">experience</span> - Verified 6+ years Dubai impact</div>
          <div>• <span className="text-purple-400 font-bold">theme</span> - Toggle Light / Dark mode live</div>
          <div>• <span className="text-rose-400 font-bold">sparks</span> - Trigger particle celebration</div>
          <div>• <span className="text-cyan-400 font-bold">clear</span> - Reset terminal window</div>
        </div>
      );
    } else if (cleanCmd === 'about') {
      resNode = (
        <div className="text-slate-200 space-y-1">
          <div className="text-emerald-400 font-bold">Ajith Pallissery Antony</div>
          <div>Senior Frontend Engineer with 6+ years of production experience in Dubai, UAE.</div>
          <div>Specializing in WebSockets, PropTech (Boli.ae), Crypto Trading (Coinroutes), and Web3 DEX (TNC).</div>
        </div>
      );
    } else if (cleanCmd === 'skills') {
      resNode = (
        <div className="text-cyan-400 space-y-1">
          <div>React 19, Next.js, TypeScript, WebSockets, Redux Toolkit, Tailwind CSS, Performance Optimization, Shufti KYC, Core Web Vitals (99/100).</div>
        </div>
      );
    } else if (cleanCmd === 'experience') {
      resNode = (
        <div className="text-amber-400 space-y-1">
          <div>1. Boli.ae — Senior Frontend Engineer (Dubai UAE) [99 Core Web Vitals]</div>
          <div>2. Coinroutes — Senior Frontend Engineer [Sub-12ms Orderbook WebSocket]</div>
          <div>3. TNC IT Solutions — Senior Frontend Engineer [150K+ Web3 Users]</div>
        </div>
      );
    } else if (cleanCmd === 'theme') {
      toggleTheme();
      resNode = <div className="text-purple-400">Theme toggled! Active mode: {theme.toUpperCase()}</div>;
    } else if (cleanCmd === 'sparks') {
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
      resNode = <div className="text-emerald-400">✨ Particle sparks executed!</div>;
    } else {
      resNode = (
        <div className="text-rose-400">
          Command not recognized: '{cleanCmd}'. Type <span className="underline">help</span> for directives.
        </div>
      );
    }

    setHistory((prev) => [...prev, { command: cleanCmd, response: resNode }]);
    setInputVal('');
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section id="terminal" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 font-sans">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--semantic-primary-bg)] border-2 border-[var(--semantic-primary)] text-[var(--semantic-primary)] text-xs font-mono mb-3 font-bold">
          <Terminal className="w-3.5 h-3.5" />
          <span>INTERACTIVE COMMAND TERMINAL</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--semantic-fg)] tracking-tight font-display">
          Execute System <span className="ds-gradient-text">Directives</span>
        </h2>
      </div>

      {/* Interactive Terminal Window (Always Dark Workbench Box) */}
      <div className="ds-dark-workbench p-6 sm:p-8 rounded-2xl border-2 border-slate-700 shadow-2xl font-mono text-xs max-w-4xl mx-auto">
        
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4 text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            <span className="ml-2 font-bold text-white text-[11px]">ajith-antony-kernel-v4.sh</span>
          </div>

          <div className="flex items-center gap-2">
            {['help', 'about', 'skills', 'experience', 'sparks', 'theme'].map((quickCmd) => (
              <button
                key={quickCmd}
                onClick={() => handleCommand(quickCmd)}
                className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 text-[10px] font-bold transition-all"
              >
                {quickCmd}
              </button>
            ))}
          </div>
        </div>

        {/* History Log */}
        <div className="space-y-4 max-h-[320px] overflow-y-auto pr-2 mb-4 leading-relaxed">
          {history.map((h, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-cyan-400 font-bold">
                <span>user@antony-engine:~$&nbsp;</span>
                <span>{h.command}</span>
              </div>
              <div className="pl-4">{h.response}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(inputVal);
          }}
          className="flex items-center gap-2 border-t border-slate-800 pt-4"
        >
          <span className="text-emerald-400 font-bold">&gt;&nbsp;</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'skills', 'about', 'sparks'..."
            className="flex-1 bg-transparent text-white font-mono font-bold focus:outline-none text-xs placeholder:text-slate-500"
          />
          <button type="submit" className="p-1.5 rounded bg-emerald-500 text-slate-950 font-bold">
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>

    </section>
  );
}
