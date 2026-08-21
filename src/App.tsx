import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import KineticTicker from './components/KineticTicker';
import KineticCanvasBackground from './components/KineticCanvasBackground';
import CommandHeader from './components/CommandHeader';
import HeadTurningHero from './components/HeadTurningHero';
import InteractiveWebSocketLab from './components/InteractiveWebSocketLab';
import InteractiveTerminalHUD from './components/InteractiveTerminalHUD';
import PropTechIdentityPipeline from './components/PropTechIdentityPipeline';
import CodeArchitectureVault from './components/CodeArchitectureVault';
import StackedExperienceDeck from './components/StackedExperienceDeck';
import TechRadarConstellation from './components/TechRadarConstellation';
import FloatingGlassHUD from './components/FloatingGlassHUD';
import CommandPaletteModal from './components/CommandPaletteModal';
import InteractiveResumeModal from './components/InteractiveResumeModal';
import StudioFooter from './components/StudioFooter';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--semantic-bg)] text-[var(--semantic-fg)] font-sans selection:bg-[var(--semantic-primary)] selection:text-white relative overflow-x-hidden transition-colors duration-300 pb-20">
        
        {/* Kinetic Interactive Mouse Particle Canvas */}
        <KineticCanvasBackground />

        {/* Top Ticker */}
        <KineticTicker />

        {/* Navigation Header */}
        <CommandHeader
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        />

        {/* Main Content Stage */}
        <main className="relative z-10 space-y-16">
          {/* Head-Turning Hero */}
          <HeadTurningHero
            onExploreClick={() => {
              document.getElementById('lab')?.scrollIntoView({ behavior: 'smooth' });
            }}
            onOpenResume={() => setIsResumeOpen(true)}
          />

          {/* Low-Latency Real-Time Stream Lab */}
          <InteractiveWebSocketLab />

          {/* Interactive Shell Terminal */}
          <InteractiveTerminalHUD />

          {/* PropTech Identity & Valuation Gateway */}
          <PropTechIdentityPipeline />

          {/* Code Architecture Vault */}
          <CodeArchitectureVault />

          {/* 3D Stacked Career Deck */}
          <StackedExperienceDeck />

          {/* Tech Radar Constellation */}
          <TechRadarConstellation />
        </main>

        {/* Studio Footer */}
        <StudioFooter />

        {/* Floating Glass Control HUD Bar */}
        <FloatingGlassHUD
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Command Palette Modal (Cmd+K) */}
        <CommandPaletteModal
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Resume CV Modal */}
        <InteractiveResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />

      </div>
    </ThemeProvider>
  );
}
