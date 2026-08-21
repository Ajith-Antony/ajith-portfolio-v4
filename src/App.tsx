import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import KineticTicker from './components/KineticTicker';
import CommandHeader from './components/CommandHeader';
import HeroExecutiveStage from './components/HeroExecutiveStage';
import InteractiveWebSocketLab from './components/InteractiveWebSocketLab';
import PropTechIdentityPipeline from './components/PropTechIdentityPipeline';
import CodeArchitectureVault from './components/CodeArchitectureVault';
import BentoCareerSpread from './components/BentoCareerSpread';
import CommandPaletteModal from './components/CommandPaletteModal';
import InteractiveResumeModal from './components/InteractiveResumeModal';
import StudioFooter from './components/StudioFooter';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--semantic-bg)] text-[var(--semantic-fg)] font-sans selection:bg-[var(--semantic-primary)] selection:text-white relative overflow-x-hidden transition-colors duration-300">
        
        {/* Top Kinetic Marquee Ticker */}
        <KineticTicker />

        {/* Command Navigation Header */}
        <CommandHeader
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        />

        {/* Main Content Stage */}
        <main className="relative z-10 space-y-12">
          {/* Hero Section */}
          <HeroExecutiveStage
            onExploreClick={() => {
              document.getElementById('lab')?.scrollIntoView({ behavior: 'smooth' });
            }}
            onOpenResume={() => setIsResumeOpen(true)}
          />

          {/* Interactive Lab: Low-Latency WebSocket Stream Engine */}
          <InteractiveWebSocketLab />

          {/* PropTech Identity & Valuation Gateway */}
          <PropTechIdentityPipeline />

          {/* Production Code Architecture Vault */}
          <CodeArchitectureVault />

          {/* Career Milestones Bento Matrix */}
          <BentoCareerSpread />
        </main>

        {/* Studio Footer */}
        <StudioFooter />

        {/* Command Palette Modal (Cmd+K) */}
        <CommandPaletteModal
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* CV / Resume PDF Modal */}
        <InteractiveResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />

      </div>
    </ThemeProvider>
  );
}
