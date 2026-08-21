import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import KineticTicker from './components/KineticTicker';
import CyberQuantumCanvas from './components/CyberQuantumCanvas';
import CommandHeader from './components/CommandHeader';
import KineticHeroStage from './components/KineticHeroStage';
import InteractiveWebSocketEngine from './components/InteractiveWebSocketEngine';
import InteractiveTerminalHUD from './components/InteractiveTerminalHUD';
import AnimatedKycPipeline from './components/AnimatedKycPipeline';
import CodeArchitectureVault from './components/CodeArchitectureVault';
import ScrollPinnedExperienceDeck from './components/ScrollPinnedExperienceDeck';
import AnimatedSkillsMatrix from './components/AnimatedSkillsMatrix';
import KineticHUDDock from './components/KineticHUDDock';
import CommandPaletteModal from './components/CommandPaletteModal';
import InteractiveResumeModal from './components/InteractiveResumeModal';
import StudioFooter from './components/StudioFooter';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--semantic-bg)] text-[var(--semantic-fg)] font-sans selection:bg-[var(--semantic-primary)] selection:text-white relative overflow-x-hidden transition-colors duration-300 pb-24">
        
        {/* Continuous 60FPS WebGL / 3D Canvas Background */}
        <CyberQuantumCanvas />

        {/* Top Ticker Marquee */}
        <KineticTicker />

        {/* Top Header */}
        <CommandHeader
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        />

        {/* Main Kinetic Content Stage */}
        <main className="relative z-10 space-y-16">
          {/* Kinetic Hero Stage with Live Audio Equalizer & Interactive 3D Spinning Quantum Core */}
          <KineticHeroStage
            onExploreClick={() => {
              document.getElementById('lab')?.scrollIntoView({ behavior: 'smooth' });
            }}
            onOpenResume={() => setIsResumeOpen(true)}
          />

          {/* Real-Time WebSocket Engine with Live Animated Canvas Price Line Chart */}
          <InteractiveWebSocketEngine />

          {/* Interactive Shell Terminal */}
          <InteractiveTerminalHUD />

          {/* Animated Biometric Shufti KYC Scan Beam Laser Pipeline */}
          <AnimatedKycPipeline />

          {/* Production Code Architecture Vault */}
          <CodeArchitectureVault />

          {/* 3D Tilt Experience Deck */}
          <ScrollPinnedExperienceDeck />

          {/* Orbital Skill Matrix */}
          <AnimatedSkillsMatrix />
        </main>

        {/* Studio Footer */}
        <StudioFooter />

        {/* Floating Kinetic HUD Dock */}
        <KineticHUDDock
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
