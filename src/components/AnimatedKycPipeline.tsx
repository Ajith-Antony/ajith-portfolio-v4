import React, { useState, useEffect } from 'react';
import { ShieldCheck, CheckCircle2, Building2, CreditCard, ArrowRight, RefreshCw, Scan } from 'lucide-react';

export default function AnimatedKycPipeline() {
  const [laserPos, setLaserPos] = useState<number>(0);
  const [step, setStep] = useState<number>(1);
  const [isScanning, setIsScanning] = useState<boolean>(true);
  const [propertyVal, setPropertyVal] = useState<number>(2500000);

  // Animated Scan Beam Loop
  useEffect(() => {
    let animId: number;
    let pos = 0;
    let direction = 1;

    const scanLoop = () => {
      pos += 1.5 * direction;
      if (pos > 100) direction = -1;
      if (pos < 0) direction = 1;
      setLaserPos(pos);
      animId = requestAnimationFrame(scanLoop);
    };

    animId = requestAnimationFrame(scanLoop);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section id="kyc" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 font-sans">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--semantic-primary-bg)] border-2 border-[var(--semantic-primary)] text-[var(--semantic-primary)] text-xs font-mono mb-3 font-bold">
          <Building2 className="w-3.5 h-3.5" />
          <span>BOLI.AE EXPERIENCE • SHUFTI KYC & POA VALUATION PIPELINE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--semantic-fg)] tracking-tight font-display">
          Animated Biometric <span className="ds-gradient-text">KYC Scanner</span>
        </h2>
        <p className="text-[var(--semantic-fg-muted)] text-sm sm:text-base mt-3 font-medium">
          Continuous OCR scan beam & automated regulatory identity verification built for Dubai real estate platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Animated Laser Beam Document Scanner */}
        <div className="lg:col-span-7">
          <div className="ds-card p-6 sm:p-8 bg-[var(--semantic-surface-card)] h-full flex flex-col justify-between">
            
            <div>
              <div className="flex items-center justify-between border-b-2 border-[var(--semantic-border-bold)] pb-4 mb-6 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <Scan className="w-4 h-4 text-[var(--semantic-primary)]" />
                  <span className="font-bold text-[var(--semantic-fg)] uppercase">Shufti Real-Time Laser Scan</span>
                </div>
                <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-500 border border-emerald-500 font-bold text-[10px]">
                  SCANNING ACTIVE
                </span>
              </div>

              {/* Animated Laser Document Container (Always Dark Workbench Box) */}
              <div className="ds-dark-workbench p-6 rounded-xl border-2 border-slate-700 relative overflow-hidden font-mono min-h-[220px] mb-6">
                
                {/* Continuous Moving Green Laser Line */}
                <div
                  className="absolute left-0 right-0 h-1 bg-emerald-400 shadow-[0_0_15px_#34d399] z-20 pointer-events-none transition-all duration-75"
                  style={{ top: `${laserPos}%` }}
                />

                <div className="relative z-10 space-y-3 text-xs">
                  <div className="text-emerald-400 font-bold">// EMIRATES ID & PASSPORT BIOMETRIC OCR</div>
                  <div className="text-white font-bold">NAME: AJITH PALLISSERY ANTONY</div>
                  <div className="text-slate-300">DOCUMENT ID: UAE-784-1994-098214-1</div>
                  <div className="text-slate-300">DLD PROPERTY CLEARANCE: VERIFIED COMPLIANT</div>
                  
                  <div className="p-3 bg-[#04060a] rounded border border-slate-800 text-[11px] text-cyan-300 mt-4">
                    DECRYPTING BIOMETRIC HASHES: 0x99a8b7c6d5e4f3a2... [MATCH: 99.8%]
                  </div>
                </div>

              </div>
            </div>

            {/* Steps bar */}
            <div className="grid grid-cols-3 gap-2 font-mono text-xs font-bold pt-2 border-t-2 border-[var(--semantic-border-bold)]">
              <div className="p-2 bg-[var(--semantic-primary-bg)] border border-[var(--semantic-primary)] text-[var(--semantic-primary)] rounded text-center">
                1. OCR Document
              </div>
              <div className="p-2 bg-[var(--semantic-secondary-bg)] border border-[var(--semantic-secondary)] text-[var(--semantic-secondary)] rounded text-center">
                2. Face Match
              </div>
              <div className="p-2 bg-emerald-500/20 border border-emerald-500 text-emerald-500 rounded text-center">
                3. Signed Token
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Digital POA Valuation Calculator */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <div className="ds-card p-6 bg-[var(--semantic-surface-card)]">
            <div className="flex items-center gap-2 border-b-2 border-[var(--semantic-border-bold)] pb-3 mb-4">
              <CreditCard className="w-4 h-4 text-[var(--semantic-secondary)]" />
              <span className="font-mono text-xs font-bold text-[var(--semantic-fg)] uppercase">
                POA Digital Property Calculator
              </span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div>
                <label className="text-[var(--semantic-fg-muted)] block mb-1 font-bold">Property Valuation (AED):</label>
                <input
                  type="range"
                  min="500000"
                  max="10000000"
                  step="250000"
                  value={propertyVal}
                  onChange={(e) => setPropertyVal(Number(e.target.value))}
                  className="w-full accent-[var(--semantic-primary)] bg-[var(--semantic-surface-tag)] rounded-lg cursor-pointer"
                />
                <div className="text-right text-[var(--semantic-primary)] font-extrabold text-sm mt-1">
                  AED {propertyVal.toLocaleString()}
                </div>
              </div>

              <div className="flex items-center justify-between bg-[var(--semantic-surface)] p-3 rounded border border-[var(--semantic-border-bold)]">
                <span className="text-[var(--semantic-fg-muted)] font-bold">POA Legal Fee:</span>
                <span className="text-[var(--semantic-fg)] font-bold">AED 1,200</span>
              </div>

              <div className="flex items-center justify-between bg-[var(--semantic-surface)] p-3 rounded border border-[var(--semantic-border-bold)]">
                <span className="text-[var(--semantic-fg-muted)] font-bold">Automated Valuation Fee (0.1%):</span>
                <span className="text-[var(--semantic-secondary)] font-bold">AED {Math.round(propertyVal * 0.001).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
