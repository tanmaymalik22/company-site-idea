import React, { useState } from 'react';
import { 
  Truck, 
  Workflow, 
  Cpu, 
  Database, 
  Calculator, 
  Clock, 
  CheckCircle, 
  DollarSign, 
  MapPin, 
  ArrowRight,
  TrendingDown,
  Layers
} from 'lucide-react';
import { PLANT_LOCATIONS } from '../data/partsData';

interface SupplyChainProps {
  onOpenRFQModal: () => void;
}

export const SupplyChainIntegration: React.FC<SupplyChainProps> = ({ onOpenRFQModal }) => {
  // Downtime Calculator State
  const [vehiclesPerHour, setVehiclesPerHour] = useState<number>(60);
  const [downtimeMinutes, setDowntimeMinutes] = useState<number>(120);
  const [costPerMinute, setCostPerMinute] = useState<number>(25000);

  const totalDowntimeLoss = downtimeMinutes * costPerMinute;
  const lostVehicles = Math.round((vehiclesPerHour / 60) * downtimeMinutes);

  return (
    <section id="supply-chain" className="py-20 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
            <Truck className="w-3.5 h-3.5" />
            <span>Direct OEM &amp; Tier-1 Supply Chain Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Seamless Line-Side Integration &amp; Zero-Downtime Logistics
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We operate as a direct Tier-1 and Tier-2 supplier, embedding our child parts directly into OEM plant ERP systems via automated EDI releases, synchronized Just-In-Time (JIT) Kanban, and local consignment hubs.
          </p>
        </div>

        {/* 4 Pillars of Integration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">Full Automotive EDI</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Native ANSI X12 &amp; EDIFACT integration for automated EDI 830 forecasting, 850 POs, 856 ASNs, and 862 JIT shipping schedules with SAP, Plex, and Oracle.
            </p>
            <div className="text-[11px] font-mono text-blue-400">Automated Takt Sync</div>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Workflow className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">JIT / Kanban Line-Feeding</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Standard returnable AIAG dunnage totes, RFID lot tags, and 2D DataMatrix serialized barcodes pre-sorted for direct robotic or worker assembly stations.
            </p>
            <div className="text-[11px] font-mono text-emerald-400">99.98% OTIF Record</div>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">Vendor Managed Inventory (VMI)</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Strategic consignment stock held near Gurugram, IMT Manesar, and regional OEM corridors. OEMs only pay upon consumption at the point-of-use.
            </p>
            <div className="text-[11px] font-mono text-amber-400">30-Day Buffer Guarantee</div>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">24/7 Hotshot Dispatch</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Guaranteed 4-hour hotshot truck and chartered air courier dispatch from buffer hubs in the event of unforeseen assembly plant surges or external supplier failure.
            </p>
            <div className="text-[11px] font-mono text-red-400">&lt; 4h Emergency SLA</div>
          </div>

        </div>

        {/* Global Facility & Buffer Hubs */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-display font-bold text-white">
                Global Production Campuses &amp; Buffer Warehouses
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Strategically positioned in the world's primary automotive manufacturing corridors.
              </p>
            </div>
            <div className="text-xs font-mono text-amber-400 hidden sm:block">
              640,000+ Total Sq. Ft. Facility Footprint
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PLANT_LOCATIONS.map((loc, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-mono mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{loc.country}</span>
                  </div>
                  <h4 className="text-base font-bold text-white">{loc.city}</h4>
                  <div className="text-[11px] text-slate-400 font-medium mt-1">{loc.type}</div>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">{loc.focus}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono space-y-1">
                  <div className="text-slate-400">Transit: <span className="text-slate-200">{loc.transitHotspot}</span></div>
                  <div className="text-emerald-400 font-bold">{loc.areaSqFt.toLocaleString()} sq.ft.</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Production Line Downtime Risk & Buffer ROI Calculator */}
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
                <Calculator className="w-4 h-4" />
                <span>OEM Procurement Risk Assessment Tool</span>
              </div>

              <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                Calculate the True Cost of a Missing Child Part
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                In an automotive assembly plant, an unsupplied $0.50 child part forces the entire line to stop. Use this interactive model to calculate how much financial exposure is eliminated by Globle Bhavya's guaranteed buffer stock and 4-hour emergency response.
              </p>

              {/* Sliders */}
              <div className="space-y-4 pt-2">
                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Assembly Line Takt Rate (Vehicles / Hour):</span>
                    <span className="font-mono text-amber-400 font-bold">{vehiclesPerHour} cars/hr</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="120"
                    step="5"
                    value={vehiclesPerHour}
                    onChange={(e) => setVehiclesPerHour(Number(e.target.value))}
                    className="w-full accent-amber-500 bg-slate-800 h-1.5 rounded cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Potential Supplier Delay / Downtime (Minutes):</span>
                    <span className="font-mono text-red-400 font-bold">{downtimeMinutes} mins ({Math.round(downtimeMinutes / 60 * 10) / 10} hrs)</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="480"
                    step="15"
                    value={downtimeMinutes}
                    onChange={(e) => setDowntimeMinutes(Number(e.target.value))}
                    className="w-full accent-red-500 bg-slate-800 h-1.5 rounded cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Estimated Plant Downtime Cost / Minute ($):</span>
                    <span className="font-mono text-white font-bold">${costPerMinute.toLocaleString()}/min</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="50000"
                    step="2500"
                    value={costPerMinute}
                    onChange={(e) => setCostPerMinute(Number(e.target.value))}
                    className="w-full accent-blue-500 bg-slate-800 h-1.5 rounded cursor-pointer"
                  />
                </div>
              </div>

            </div>

            {/* Calculator Output Display Card */}
            <div className="lg:col-span-6 bg-slate-950 rounded-xl border border-slate-800 p-6 space-y-5">
              <div className="text-xs font-mono uppercase text-slate-500 font-bold flex items-center justify-between">
                <span>Calculated Production Impact</span>
                <span className="text-red-400">Risk Exposure</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Total Unproduced Vehicles:</div>
                  <div className="text-2xl font-mono font-bold text-white mt-1">
                    {lostVehicles.toLocaleString()} units
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">Delayed customer deliveries</div>
                </div>

                <div className="p-4 rounded-lg bg-red-950/30 border border-red-500/30">
                  <div className="text-[11px] text-red-300">Total Cost of Stoppage:</div>
                  <div className="text-2xl font-mono font-bold text-red-400 mt-1">
                    ${(totalDowntimeLoss / 1000000).toFixed(2)}M
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Direct OEM loss &amp; idle labor</div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-emerald-950/30 border border-emerald-500/30 space-y-2">
                <div className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Globle Bhavya Dual-Sourcing Solution:</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  By qualifying Globle Bhavya as your direct child parts partner, your assembly line is protected by our guaranteed 30-day safety stock, automated JIT EDI triggers, and 4-hour hotshot emergency dispatch.
                </p>
              </div>

              <button
                onClick={onOpenRFQModal}
                className="w-full py-3 px-4 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>Initiate Tier-1 Supply Agreement or PPAP Evaluation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
