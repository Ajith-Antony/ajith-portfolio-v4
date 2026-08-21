import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import KineticTicker from './components/KineticTicker';
import CyberQuantumCanvas from './components/CyberQuantumCanvas';
import CommandHeader from './components/CommandHeader';
import SharplinkHeroStage from './components/SharplinkHeroStage';
import InteractiveTerminalHUD from './components/InteractiveTerminalHUD';
import MosbyCaseFolderDeck from './components/MosbyCaseFolderDeck';
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

        {/* Main Content Stage */}
        <main className="relative z-10 space-y-16">
          {/* Sharplink-Inspired Architectural Hero Stage */}
          <SharplinkHeroStage
            onExploreClick={() => {
              document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' });
            }}
            onOpenResume={() => setIsResumeOpen(true)}
          />

          {/* Mosby Files Inspired 3D Manila Case Folders */}
          <MosbyCaseFolderDeck />

          {/* Interactive Shell Terminal (Headerless) */}
          <InteractiveTerminalHUD />

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
