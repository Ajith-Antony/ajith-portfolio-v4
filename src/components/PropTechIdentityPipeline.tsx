import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Building2, CreditCard, ArrowRight, Gauge, RefreshCw } from 'lucide-react';

export default function PropTechIdentityPipeline() {
  const [kycStep, setKycStep] = useState<number>(1);
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [propertyValue, setPropertyValue] = useState<number>(2500000);
  const [poaType] = useState<'individual' | 'corporate'>('individual');

  const handleNextStep = () => {
    if (kycStep === 2) {
      setIsVerifying(true);
      setTimeout(() => {
        setIsVerifying(false);
        setKycStep(3);
      }, 1500);
    } else {
      setKycStep((prev) => Math.min(3, prev + 1));
    }
  };

  const resetKyc = () => {
    setKycStep(1);
    setIsVerifying(false);
  };

  const poaFee = poaType === 'individual' ? 1200 : 2500;
  const valuationFee = Math.round(propertyValue * 0.001);

  return (
    <section id="proptech" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 font-sans">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--semantic-primary-bg)] border-2 border-[var(--semantic-primary)] text-[var(--semantic-primary)] text-xs font-mono mb-3 font-bold">
          <Building2 className="w-3.5 h-3.5" />
          <span>BOLI.AE EXPERIENCE • PROPTECH & COMPLIANCE PIPELINES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--semantic-fg)] tracking-tight font-display">
          Shufti KYC & <span className="ds-gradient-text">POA Valuation Gateway</span>
        </h2>
        <p className="text-[var(--semantic-fg-muted)] text-sm sm:text-base mt-3 font-medium">
          Interactive simulation of real-time identity pipelines, payment gateways, and Core Web Vitals optimization built for Dubai property tech.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Interactive Shufti KYC Pipeline Simulator */}
        <div className="lg:col-span-7">
          <div className="ds-card p-6 sm:p-8 relative overflow-hidden bg-[var(--semantic-surface-card)] h-full flex flex-col justify-between">
            
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b-2 border-[var(--semantic-border-bold)] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[var(--semantic-primary)]" />
                  <span className="font-mono text-xs font-bold text-[var(--semantic-fg)] uppercase tracking-wider">
                    Shufti KYC Automated Real-Time Pipeline
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 font-bold uppercase bg-[var(--semantic-primary-bg)] text-[var(--semantic-primary)] border border-[var(--semantic-primary)]">
                  REGULATORY COMPLIANT
                </span>
              </div>

              {/* Progress Step Bar */}
              <div className="grid grid-cols-3 gap-2 mb-8 font-mono text-xs font-bold">
                {[
                  { step: 1, title: '1. Document Upload' },
                  { step: 2, title: '2. Biometric OCR' },
                  { step: 3, title: '3. Token Issued' },
                ].map((s) => (
                  <div
                    key={s.step}
                    className={`p-2.5 rounded border-2 text-center transition-all ${
                      kycStep === s.step
                        ? 'bg-[var(--semantic-primary)] text-white border-black shadow-[2px_2px_0px_#000]'
                        : kycStep > s.step
                        ? 'bg-[var(--semantic-surface)] border-[var(--semantic-border-bold)] text-[var(--semantic-fg)]'
                        : 'bg-[var(--semantic-surface-tag)] border-[var(--semantic-border)] text-[var(--semantic-fg-subtle)]'
                    }`}
                  >
                    {s.title}
                  </div>
                ))}
              </div>

              {/* Step Content Card (Always Dark Workbench Box) */}
              <div className="ds-dark-workbench p-6 rounded-xl border-2 border-slate-700 text-white mb-6">
                {kycStep === 1 && (
                  <div className="space-y-4 font-mono">
                    <h4 className="text-sm font-bold text-white">Step 1: Passport & Emirates ID Selection</h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans font-medium">
                      User submits government-issued identity documents for automated OCR parsing via Shufti API pipelines.
                    </p>
                    <div className="p-4 rounded-xl bg-[#05070a] border border-dashed border-slate-700 text-center text-xs text-emerald-400 font-bold">
                      [ Simulated Passport Scan File: ajith_antony_passport_uae.pdf ]
                    </div>
                  </div>
                )}

                {kycStep === 2 && (
                  <div className="space-y-4 font-mono">
                    <h4 className="text-sm font-bold text-white">Step 2: Biometric Liveness & Verification</h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans font-medium">
                      Real-time face match and anti-spoofing liveness verification. Validating against Dubai Land Department (DLD) records.
                    </p>
                    {isVerifying ? (
                      <div className="flex items-center justify-center gap-3 p-6 text-emerald-400 text-xs font-bold">
                        <RefreshCw className="w-5 h-5 animate-spin" />
                        <span>Verifying biometric hashes with Shufti AI engine...</span>
                      </div>
                    ) : (
                      <div className="p-4 rounded-xl bg-[#05070a] border border-slate-700 text-xs text-slate-200 font-bold">
                        Status: Documents Parsed. Click below to verify biometric match.
                      </div>
                    )}
                  </div>
                )}

                {kycStep === 3 && (
                  <div className="space-y-4 font-mono">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Shufti KYC Verification Complete!</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans font-medium">
                      Signed compliance payload generated. Power of Attorney (POA) and high-value digital property valuation enabled.
                    </p>
                    <div className="p-3 bg-[#05070a] rounded-xl border border-slate-700 text-[11px] text-emerald-300 font-bold break-all">
                      TOKEN: shufti_live_uae_998124_auth_verified_poa
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-4 border-t-2 border-[var(--semantic-border-bold)]">
              <button
                onClick={resetKyc}
                className="px-4 py-2 rounded-md bg-[var(--semantic-surface)] border-2 border-[var(--semantic-border-bold)] text-[var(--semantic-fg)] hover:border-[var(--semantic-primary)] text-xs font-mono font-bold"
              >
                Reset Verification
              </button>

              {kycStep < 3 && (
                <button
                  onClick={handleNextStep}
                  disabled={isVerifying}
                  className="ds-btn-primary text-xs flex items-center gap-2"
                >
                  <span>{kycStep === 2 ? 'Run Biometric Check' : 'Proceed to Step 2'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Right Column: POA Valuation Calculator & Core Web Vitals Benchmark */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          
          {/* Digital POA Property Valuation Calculator Card */}
          <div className="ds-card p-6 bg-[var(--semantic-surface-card)]">
            <div className="flex items-center gap-2 border-b-2 border-[var(--semantic-border-bold)] pb-3 mb-4">
              <CreditCard className="w-4 h-4 text-[var(--semantic-secondary)]" />
              <span className="font-mono text-xs font-bold text-[var(--semantic-fg)] uppercase tracking-wider">
                POA Digital Payment Calculator
              </span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div>
                <label className="text-[var(--semantic-fg-muted)] block mb-1 font-bold">Estimated Property Valuation (AED):</label>
                <input
                  type="range"
                  min="500000"
                  max="10000000"
                  step="250000"
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="w-full accent-[var(--semantic-primary)] bg-[var(--semantic-surface-tag)] rounded-lg cursor-pointer"
                />
                <div className="text-right text-[var(--semantic-primary)] font-bold text-sm mt-1">
                  AED {propertyValue.toLocaleString()}
                </div>
              </div>

              <div className="flex items-center justify-between bg-[var(--semantic-surface)] p-3 rounded-md border border-[var(--semantic-border-bold)]">
                <span className="text-[var(--semantic-fg-muted)] font-bold">Power of Attorney Fee:</span>
                <span className="text-[var(--semantic-fg)] font-extrabold">AED {poaFee.toLocaleString()}</span>
              </div>

              <div className="flex items-center justify-between bg-[var(--semantic-surface)] p-3 rounded-md border border-[var(--semantic-border-bold)]">
                <span className="text-[var(--semantic-fg-muted)] font-bold">Automated Valuation Fee (0.1%):</span>
                <span className="text-[var(--semantic-secondary)] font-extrabold">AED {valuationFee.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* SEO & Core Web Vitals Audit Optimization Card */}
          <div className="ds-card p-6 bg-[var(--semantic-surface-card)]">
            <div className="flex items-center gap-2 border-b-2 border-[var(--semantic-border-bold)] pb-3 mb-4">
              <Gauge className="w-4 h-4 text-[var(--semantic-primary)]" />
              <span className="font-mono text-xs font-bold text-[var(--semantic-fg)] uppercase tracking-wider">
                Core Web Vitals & SEO Overhaul Metrics
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="bg-rose-950/20 p-3 rounded-md border border-rose-900/40">
                <span className="text-rose-600 block text-[10px] uppercase font-bold">Legacy Architecture</span>
                <div className="text-lg font-bold text-rose-500 mt-1">42 / 100</div>
                <div className="text-[10px] text-rose-700 font-bold mt-0.5">3.8s LCP • SEO Bottleneck</div>
              </div>

              <div className="bg-emerald-950/20 p-3 rounded-md border border-emerald-900/40">
                <span className="text-emerald-600 block text-[10px] uppercase font-bold">Ajith's Optimization</span>
                <div className="text-lg font-bold text-emerald-500 mt-1">99 / 100</div>
                <div className="text-[10px] text-emerald-700 font-bold mt-0.5">0.4s LCP • Organic Traffic Boost</div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
