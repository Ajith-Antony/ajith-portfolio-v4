import React, { useState } from 'react';
import { Cpu, Zap, ShieldCheck, Code2, Layers3 } from 'lucide-react';
import InteractiveTradingTerminal from './InteractiveTradingTerminal';
import PropTechKycSimulator from './PropTechKycSimulator';
import ArchitectureInspector from './ArchitectureInspector';

export default function InteractiveWorkbenchView() {
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState<'trading' | 'kyc' | 'code'>('trading');

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Workbench Navigation Toolbar */}
      <div className="editorial-panel-bold p-4 bg-[var(--semantic-surface)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
        
        <div className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-[var(--semantic-primary)]" />
          <span className="font-bold text-[var(--semantic-fg)] uppercase tracking-wider">
            INTERACTIVE ENGINEERING WORKBENCH // LIVE EXECUTION
          </span>
        </div>

        {/* Tab Switchers */}
        <div className="flex items-center gap-2 font-bold">
          <button
            onClick={() => setActiveWorkbenchTab('trading')}
            className={`px-4 py-2 border-2 transition-all flex items-center gap-2 ${
              activeWorkbenchTab === 'trading'
                ? 'bg-[var(--semantic-primary)] text-white border-black shadow-[3px_3px_0px_#000]'
                : 'bg-[var(--semantic-surface-code)] text-[var(--semantic-fg-muted)] border-[var(--semantic-border-bold)]'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>1. WebSocket Orderbook</span>
          </button>

          <button
            onClick={() => setActiveWorkbenchTab('kyc')}
            className={`px-4 py-2 border-2 transition-all flex items-center gap-2 ${
              activeWorkbenchTab === 'kyc'
                ? 'bg-[var(--semantic-primary)] text-white border-black shadow-[3px_3px_0px_#000]'
                : 'bg-[var(--semantic-surface-code)] text-[var(--semantic-fg-muted)] border-[var(--semantic-border-bold)]'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>2. Shufti KYC & POA</span>
          </button>

          <button
            onClick={() => setActiveWorkbenchTab('code')}
            className={`px-4 py-2 border-2 transition-all flex items-center gap-2 ${
              activeWorkbenchTab === 'code'
                ? 'bg-[var(--semantic-primary)] text-white border-black shadow-[3px_3px_0px_#000]'
                : 'bg-[var(--semantic-surface-code)] text-[var(--semantic-fg-muted)] border-[var(--semantic-border-bold)]'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>3. Code Inspector</span>
          </button>
        </div>

      </div>

      {/* Render Active Interactive Workbench Tool */}
      <div>
        {activeWorkbenchTab === 'trading' && <InteractiveTradingTerminal />}
        {activeWorkbenchTab === 'kyc' && <PropTechKycSimulator />}
        {activeWorkbenchTab === 'code' && <ArchitectureInspector />}
      </div>

    </div>
  );
}
