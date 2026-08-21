import React from 'react';

export default function KineticTicker() {
  const items = [
    'SENIOR FRONTEND ENGINEER',
    'DUBAI, UAE',
    'REACT & NEXT.JS MASTER',
    'WEBSOCKET HIGH-FREQUENCY STREAMING',
    'SHUFTI KYC PIPELINES',
    'LIGHTWEIGHT CHARTS & AG-GRID',
    'REDUX TOOLKIT MODERNIZATION',
    '6+ YEARS PRODUCTION IMPACT',
    'CORE WEB VITALS 99/100',
  ];

  return (
    <div className="w-full bg-[var(--semantic-primary)] text-white font-mono text-xs font-bold py-2 overflow-hidden border-y border-[var(--semantic-border-bold)] relative z-20">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 shrink-0">
            <span>{text}</span>
            <span className="text-black text-[10px]">■</span>
          </div>
        ))}
      </div>
    </div>
  );
}
