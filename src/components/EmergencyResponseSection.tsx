import React from 'react';
import { 
  ShieldAlert, 
  PhoneCall, 
  Truck, 
  Plane, 
  Zap, 
  Clock, 
  CheckCircle2, 
  AlertTriangle,
  Building2,
  FileSpreadsheet,
  ArrowRight
} from 'lucide-react';

interface EmergencyResponseProps {
  onOpenEmergencyModal: () => void;
}

export const EmergencyResponseSection: React.FC<EmergencyResponseProps> = ({ 
  onOpenEmergencyModal 
}) => {
  return (
    <section id="emergency" className="py-20 bg-gradient-to-b from-slate-950 via-red-950/20 to-slate-950 border-b border-slate-800 relative overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-widest px-2.5 py-1 rounded bg-red-950/60 border border-red-500/30">
              <ShieldAlert className="w-3.5 h-3.5 text-red-400 animate-pulse" />
              <span>Automotive Line-Down Defense Protocol</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Emergency Child Parts Supply &amp; Rapid Production Dispatch
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              When a component supplier defaults or transit delays threaten an automotive assembly line, every minute of idle plant time costs tens of thousands of dollars. Globle Bhavya maintains active buffer stock and reserved emergency manufacturing cells ready for immediate deployment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a 
              href="tel:+911244589000"
              className="px-4 py-3 rounded-md bg-slate-900 border border-slate-700 hover:border-slate-500 text-white font-mono text-xs flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>24/7 Hotline: +91 (124) 458-9000</span>
            </a>

            <button
              onClick={onOpenEmergencyModal}
              className="px-5 py-3 rounded-md bg-red-600 hover:bg-red-500 text-white font-semibold text-xs tracking-wide transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4" />
              <span>Initiate Rapid Emergency Dispatch</span>
            </button>
          </div>
        </div>

        {/* 3-Tier Rapid Response Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          
          {/* Phase 1 */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 relative">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-red-400 font-bold px-2 py-0.5 rounded bg-red-950/60 border border-red-500/30">
                STAGE 1 / IMMEDIATE
              </span>
              <Clock className="w-5 h-5 text-red-400" />
            </div>
            <div className="text-2xl font-mono font-bold text-white mb-1">
              &le; 15 Minutes
            </div>
            <h3 className="text-base font-semibold text-white mb-2">
              Incident Triage &amp; Inventory Allocation
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              OEM/Tier-1 procurement engineer triggers line-down ticket. Our plant operations director immediately checks inventory across Gurugram, IMT Manesar, and regional VMI hubs, locking available serialized child parts.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Automated EDI / SAP Cross-Check</span>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-amber-500/40 relative shadow-lg shadow-amber-500/5">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-950/60 border border-amber-500/30">
                STAGE 2 / BUFFER DISPATCH
              </span>
              <Truck className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-2xl font-mono font-bold text-white mb-1">
              &le; 4 Hours
            </div>
            <h3 className="text-base font-semibold text-white mb-2">
              Hotshot Air Courier &amp; Dedicated Freight
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Emergency pre-packaged child part cartons depart our facility via chartered air cargo or dedicated team-driver hotshot trucks directly to the OEM assembly plant dock, bypassing standard consolidation delays.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-amber-400 flex items-center gap-1.5">
              <Plane className="w-3.5 h-3.5" />
              <span>Direct Dock-Side Ramp Access</span>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 relative">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-blue-400 font-bold px-2 py-0.5 rounded bg-blue-950/60 border border-blue-500/30">
                STAGE 3 / SURGE CAPACITY
              </span>
              <Zap className="w-5 h-5 text-blue-400" />
            </div>
            <div className="text-2xl font-mono font-bold text-white mb-1">
              24 – 48 Hours
            </div>
            <h3 className="text-base font-semibold text-white mb-2">
              Standby Tooling &amp; Rapid Surge Cells
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our 4 dedicated emergency CNC turning centers and high-speed modular stamping presses are immediately re-tooled with emergency quick-change dies to produce continuous serial batches until supply balance is restored.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-blue-400 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" />
              <span>Zero Die Changeover Downtime</span>
            </div>
          </div>

        </div>

        {/* Real-World Case Study Highlight */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="px-2 py-0.5 rounded bg-slate-800 text-amber-400 font-bold">CASE STUDY</span>
                <span>GLOBAL TIER-1 DOOR SYSTEM INTEGRATOR</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                How Globle Bhavya Prevented a 48-Hour Assembly Line Shutdown for a Major OEM
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                  <div className="font-semibold text-red-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>The Crisis</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    A competitor's overseas shipment of door rotary latch pawls was impounded at port customs, leaving an assembly plant producing 3,600 SUVs per day with only 6 hours of inventory before complete plant shutdown.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                  <div className="font-semibold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Globle Bhavya Intervention</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Dispatched 48,000 pre-qualified buffer units from our Gurugram plant facility within 3 hours. Mobilized emergency high-speed progressive die tooling to deliver an additional 70,000 units within 36 hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-950 rounded-xl p-5 border border-slate-800 space-y-4">
              <div className="text-xs font-mono text-slate-400 uppercase">Quantified Incident Impact</div>
              
              <div className="space-y-3">
                <div className="border-b border-slate-900 pb-2">
                  <div className="text-2xl font-display font-bold text-emerald-400 font-mono">0 Minutes</div>
                  <div className="text-[11px] text-slate-400">Total OEM Line Stoppage Recorded</div>
                </div>

                <div className="border-b border-slate-900 pb-2">
                  <div className="text-2xl font-display font-bold text-white font-mono">$4.2M+</div>
                  <div className="text-[11px] text-slate-400">Estimated OEM Penalty Fees Avoided</div>
                </div>

                <div>
                  <div className="text-2xl font-display font-bold text-amber-400 font-mono">100%</div>
                  <div className="text-[11px] text-slate-400">PPAP Level 3 Quality Conformance Maintained</div>
                </div>
              </div>

              <button
                onClick={onOpenEmergencyModal}
                className="w-full py-2.5 px-3 rounded-md bg-red-600/20 hover:bg-red-600/30 border border-red-500/40 text-red-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Activate Emergency Line-Down Form</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
