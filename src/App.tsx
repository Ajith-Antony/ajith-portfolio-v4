import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import KineticTicker from './components/KineticTicker';
import EditorialHeader from './components/EditorialHeader';
import MagazineDossierView from './components/MagazineDossierView';
import InteractiveWorkbenchView from './components/InteractiveWorkbenchView';
import CommandPaletteModal from './components/CommandPaletteModal';
import InteractiveResumeModal from './components/InteractiveResumeModal';
import CyberFooter from './components/CyberFooter';

export default function App() {
  const [activeView, setActiveView] = useState<'dossier' | 'workbench'>('dossier');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--semantic-bg)] text-[var(--semantic-fg)] font-sans selection:bg-[var(--semantic-primary)] selection:text-white relative overflow-x-hidden transition-colors duration-300">
        
        {/* Kinetic Marquee Ticker */}
        <KineticTicker />

        {/* Top Control Header */}
        <EditorialHeader
          activeView={activeView}
          onViewChange={setActiveView}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        />

        {/* Dynamic Multi-Mode Content Stage */}
        <main className="relative z-10 pt-8">
          {activeView === 'dossier' ? (
            <MagazineDossierView
              onOpenResume={() => setIsResumeOpen(true)}
              onSwitchToWorkbench={() => setActiveView('workbench')}
            />
          ) : (
            <InteractiveWorkbenchView />
          )}
        </main>

        {/* Swiss Architectural Footer */}
        <CyberFooter />

        {/* Command Palette Modal (Cmd+K) */}
        <CommandPaletteModal
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Resume PDF Viewer Modal */}
        <InteractiveResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />

      </div>
    </ThemeProvider>
  );
}
