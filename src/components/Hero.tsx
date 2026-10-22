import React from 'react';
import { 
  ArrowRight, 
  ShieldAlert, 
  CheckCircle2, 
  Layers, 
  Clock, 
  Cpu, 
  Factory,
  Compass
} from 'lucide-react';

interface HeroProps {
  onOpenEmergencyModal: () => void;
  onOpenRFQModal: () => void;
  onJumpToVisualizer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenEmergencyModal, 
  onOpenRFQModal,
  onJumpToVisualizer 
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 technical-grid border-b border-slate-800/80">
      {/* Subtle radial glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-600/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Mission, Value Proposition & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Direct Tier-1 / OEM Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span className="font-mono text-amber-300">DIRECT AUTOMOTIVE TIER-1 &amp; OEM SUPPLIER</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">IATF 16949 CERTIFIED</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-[1.12]">
              Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-orange-400">Child Parts</span> that Drive Automotive Assemblies.
            </h1>

            {/* Contextual Subheading based on user's prompt */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              In automotive engineering, every subsystem relies on micro-precision <strong className="text-white font-medium">child parts</strong>—the critical individual components that combine into parent assemblies like door closures, brake calipers, steering columns, and EV battery packs.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              We partner directly with automotive OEMs and Tier-1 manufacturers to supply millimeter-perfect child parts on schedule—and mobilize <strong className="text-amber-300 font-medium">24/7 rapid emergency dispatch</strong> to keep production lines running without a second of downtime.
            </p>

            {/* Key Differentiators Quick Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-semibold text-slate-200">Zero-Defect Tolerances (±0.003mm)</div>
                  <div className="text-slate-400">100% optical vision sorting &amp; CMM metrology reports</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-semibold text-slate-200">Emergency Line-Down Hotline</div>
                  <div className="text-slate-400">4-hour buffer dispatch &amp; 24h rapid-surge tooling cells</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={onJumpToVisualizer}
                className="px-5 py-3 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-amber-500/25 flex items-center gap-2 font-display"
              >
                <Layers className="w-4 h-4" />
                <span>Explore Parent vs. Child Parts</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenEmergencyModal}
                className="px-4 py-3 rounded-md bg-red-950/60 hover:bg-red-900/70 border border-red-500/50 text-red-200 font-semibold text-sm transition-all flex items-center gap-2 shadow-sm"
              >
                <ShieldAlert className="w-4 h-4 text-red-400" />
                <span>Emergency Supply Dispatch</span>
              </button>

              <button
                onClick={onOpenRFQModal}
                className="px-4 py-3 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-sm font-medium transition-all"
              >
                <span>Request Sample Kit (PPAP L3)</span>
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-2 flex items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Factory className="w-3.5 h-3.5 text-slate-500" />
                <span>65,000+ m² Production Capacity</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-slate-500" />
                <span>Global VMI Hubs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-slate-500" />
                <span>EDI 830/850/856 Ready</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Diagram Card "Car Door Subsystem Anatomy" */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl border border-slate-800 bg-slate-900/90 p-5 shadow-2xl backdrop-blur-sm">
              
              {/* Header inside card */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">
                    Live System Example
                  </span>
                </div>
                <span className="text-[11px] font-mono text-amber-400 px-2 py-0.5 rounded bg-amber-950/40 border border-amber-800/40">
                  OEM Subsystem Architecture
                </span>
              </div>

              {/* Graphic Exploded Representation */}
              <div className="bg-slate-950 rounded-lg p-4 border border-slate-800/80 mb-4">
                <div className="text-xs font-semibold text-white mb-1 flex items-center justify-between">
                  <span>Parent Assembly: Vehicle Side Door Shell</span>
                  <span className="text-[11px] text-slate-400 font-mono">1 Parent Unit</span>
                </div>
                <p className="text-[11px] text-slate-400 mb-3">
                  A car door cannot lock, seal, pivot, or roll without its 5 indispensable child parts:
                </p>

                {/* Flow breakdown */}
                <div className="space-y-2">
                  {[
                    { name: 'Door Hinge Pivot Pin', role: 'Maintains alignment across 100k open/close cycles', mat: '8620 Alloy Steel', tol: '±0.005mm' },
                    { name: 'Rotary Latch Pawl', role: 'FMVSS 206 anti-unlatching claw with acoustic overmold', mat: 'C1075 + POM', tol: '±0.010mm' },
                    { name: 'Striker Retaining Bracket', role: 'B-pillar mounting plate absorbing 11kN impact force', mat: 'HSLA 350 MPa', tol: '±0.012mm' },
                    { name: 'Window Regulator Pin', role: 'Micro-polished pulley guide eliminating glass chatter', mat: 'AISI 303 SS', tol: '±0.008mm' },
                    { name: 'Handle Torsion Spring', role: 'Tactile snap-back ergonomic return mechanism', mat: 'Cr-Si Spring Steel', tol: '±0.020mm' },
                  ].map((part, idx) => (
                    <div 
                      key={idx}
                      className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center justify-between text-xs hover:border-amber-500/40 transition-colors group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-slate-800 font-mono text-[10px] text-amber-400 flex items-center justify-center font-bold">
                          0{idx + 1}
                        </span>
                        <div>
                          <div className="font-medium text-slate-200 group-hover:text-amber-300 transition-colors">
                            {part.name}
                          </div>
                          <div className="text-[10px] text-slate-400">
                            {part.role}
                          </div>
                        </div>
                      </div>
                      <div className="text-right shrink-0 pl-2">
                        <div className="font-mono text-[10px] text-amber-400">{part.tol}</div>
                        <div className="text-[9px] text-slate-500">{part.mat}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-amber-200">
                  <Layers className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Missing one child part halts the entire vehicle assembly line.</span>
                </div>
                <button
                  onClick={onJumpToVisualizer}
                  className="text-xs font-semibold text-amber-400 hover:text-white underline underline-offset-2 shrink-0 ml-2"
                >
                  Interactive 3D &rarr;
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Global Performance Statistics Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              140M+
            </div>
            <div className="text-xs font-semibold text-slate-300">Child Parts Produced / Year</div>
            <div className="text-[11px] text-slate-500">Shipped directly to OEM assembly complexes worldwide</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-display font-bold text-amber-400 tracking-tight font-mono">
              &plusmn;0.003 mm
            </div>
            <div className="text-xs font-semibold text-slate-300">Tightest Serial Tolerance</div>
            <div className="text-[11px] text-slate-500">Sub-micron accuracy on Swiss CNC &amp; fine blanking</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-display font-bold text-emerald-400 tracking-tight font-mono">
              99.98%
            </div>
            <div className="text-xs font-semibold text-slate-300">On-Time In-Full (OTIF)</div>
            <div className="text-[11px] text-slate-500">Synced to OEM plant takt time via automated EDI</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-display font-bold text-red-400 tracking-tight flex items-center gap-2">
              <span>&lt; 4 Hours</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-950 border border-red-500/30 text-red-300 font-mono">
                SLA
              </span>
            </div>
            <div className="text-xs font-semibold text-slate-300">Emergency Dispatch Readiness</div>
            <div className="text-[11px] text-slate-500">Hotshot air/freight logistics to prevent line downtime</div>
          </div>
        </div>

      </div>
    </section>
  );
};
