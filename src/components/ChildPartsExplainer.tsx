import React from 'react';
import { 
  Layers, 
  Workflow, 
  AlertTriangle, 
  CheckCircle, 
  Cpu, 
  Wrench, 
  ShieldCheck,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

export const ChildPartsExplainer: React.FC = () => {
  return (
    <section id="concept" className="py-20 bg-slate-900/60 border-b border-slate-800 technical-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>Automotive Engineering Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            The Fundamental Hierarchy: Child Parts vs. Parent Assemblies
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            In modern automotive design and high-volume vehicle manufacturing, no subsystem exists in isolation. Every major module that drivers interact with is a <strong className="text-white">“Parent Part”</strong> made up of dozens of high-precision <strong className="text-amber-400">“Child Parts.”</strong>
          </p>
        </div>

        {/* 4-Step Production Hierarchy Visualization */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          
          {/* Step 1: Raw Material */}
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 relative group hover:border-slate-700 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-slate-500 font-bold">01 / INPUT</span>
              <Cpu className="w-4 h-4 text-slate-400" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">Engineered Raw Stock</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Certified aerospace &amp; automotive grade alloy steels (8620, SCM440), C11000 copper, high-carbon spring strip, and Delrin POM resins with full mill heat certificates.
            </p>
            <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-900 flex items-center justify-between">
              <span>Lot Traceability</span>
              <span className="text-slate-300 font-semibold">100% Barcode Tracked</span>
            </div>
          </div>

          {/* Step 2: Child Parts Manufacturing (Globle Bhavya Core) */}
          <div className="p-5 rounded-xl bg-slate-950 border-2 border-amber-500/60 relative group shadow-lg shadow-amber-500/10">
            <div className="absolute -top-3 left-4 px-2 py-0.5 rounded bg-amber-500 text-slate-950 font-mono text-[10px] font-bold uppercase tracking-wider">
              Globle Bhavya Core Focus
            </div>
            <div className="flex items-center justify-between mb-3 mt-1">
              <span className="font-mono text-xs text-amber-400 font-bold">02 / COMPONENT</span>
              <Wrench className="w-4 h-4 text-amber-400" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">Individual "Child Parts"</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              The individual pins, brackets, rotary pawls, clips, shims, bushings, and springs stamped, fine-blanked, or turned to ±0.003mm tolerances and ready for line assembly.
            </p>
            <div className="text-[11px] font-mono text-amber-400 pt-2 border-t border-slate-900 flex items-center justify-between">
              <span>Dimensional Accuracy</span>
              <span className="text-white font-semibold">Sub-Micron CMM</span>
            </div>
          </div>

          {/* Step 3: Parent Assembly */}
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 relative group hover:border-slate-700 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-slate-500 font-bold">03 / INTEGRATION</span>
              <Workflow className="w-4 h-4 text-blue-400" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">The "Parent Assembly"</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Tier-1 integration into unified vehicle modules: side door shells, hydraulic brake calipers, steering columns, battery disconnect switches, and seating recliner units.
            </p>
            <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-900 flex items-center justify-between">
              <span>Mechanical Fit</span>
              <span className="text-slate-300 font-semibold">Zero-Play Kinematics</span>
            </div>
          </div>

          {/* Step 4: Finished Vehicle */}
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 relative group hover:border-slate-700 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-slate-500 font-bold">04 / OEM LAUNCH</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">OEM Final Vehicle</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Final vehicle roll-off at GM, Ford, BMW, Tesla, Toyota, or Stellantis assembly plants. Millions of defect-free cycles over a 15-year vehicle lifecycle.
            </p>
            <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-900 flex items-center justify-between">
              <span>Safety Reliability</span>
              <span className="text-emerald-400 font-semibold">FMVSS Compliant</span>
            </div>
          </div>

        </div>

        {/* Why Child Parts are Critical: Direct Comparison Box */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-red-400">
              <AlertTriangle className="w-4 h-4" />
              <span>THE $50,000/MINUTE SUPPLY CHAIN REALITY</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              Why A Single $0.40 Child Part Can Halt a Billion-Dollar Vehicle Line
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              In automotive assembly plants, cars move down the line on strict takt times (often 45 to 60 seconds per station). If a Tier-1 supplier is short just one child part—such as a door hinge pivot pin or a brake caliper sliding sleeve—the parent assembly cannot be bolted to the chassis.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-red-950/20 border border-red-500/20 text-xs">
                <div className="font-semibold text-red-300 mb-1">Traditional Supplier Vulnerability</div>
                <p className="text-slate-400 text-[11px]">
                  Unreliable stamping dies, high PPM defect rates, and rigid 8-week retooling lead-times leave OEM lines stranded when disruptions occur.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20 text-xs">
                <div className="font-semibold text-emerald-300 mb-1">Globle Bhavya Safeguard Protocol</div>
                <p className="text-slate-400 text-[11px]">
                  Dedicated safety buffer warehouses, real-time EDI forecasting, and 24/7 emergency dispatch cells ready to hotshot stock in under 4 hours.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900/90 rounded-xl p-5 border border-slate-800 space-y-4">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
              <span>Child Part vs Parent Part Dynamics</span>
              <span className="text-amber-400">Engineering Fact</span>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <div className="text-xs font-semibold text-white">Ratio in Modern Vehicle</div>
                <div className="text-sm text-amber-400 font-mono font-bold mt-0.5">
                  Over 12,000 Child Parts per Automobile
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Comprising 85% of all individual bill-of-materials (BOM) items in a standard passenger chassis.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <div className="text-xs font-semibold text-white">Direct OEM Integration</div>
                <div className="text-sm text-emerald-400 font-mono font-bold mt-0.5">
                  Direct Line-Side Delivery (JIT)
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Parts arrive pre-washed, vision-inspected, and sequenced directly for robotic or manual line feeding.
                </p>
              </div>
            </div>

            <a 
              href="#visualizer"
              className="w-full py-2.5 px-4 rounded-md bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <span>See Exploded Assemblies Below</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
