import React, { useState } from 'react';
import { 
  ShieldAlert, 
  PhoneCall, 
  Clock, 
  Truck, 
  Plane, 
  Zap, 
  CheckCircle2, 
  AlertTriangle,
  Building2,
  Mail,
  Send
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { PageId } from '../types';

interface EmergencySupplyPageProps {
  onOpenEmergencyModal: () => void;
  onNavigate: (page: PageId) => void;
}

export const EmergencySupplyPage: React.FC<EmergencySupplyPageProps> = ({
  onOpenEmergencyModal,
  onNavigate
}) => {
  const [partInput, setPartInput] = useState('');
  const [plantInput, setPlantInput] = useState('Gurugram / NCR Automotive Hub, India');
  const [qtyInput, setQtyInput] = useState('20,000');
  const [urgency, setUrgency] = useState<'CRITICAL' | 'IMMINENT' | 'BUFFER'>('CRITICAL');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-20 pb-20 bg-[#f2efeb] text-[#1a1a1c]">
      
      {/* Page Header Banner */}
      <section className="bg-white border-b border-[rgba(26,26,28,0.08)] py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 mono text-xs text-[#c52222] font-bold px-3 py-1 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.12)]">
            <ShieldAlert className="w-3.5 h-3.5 text-[#c52222]" />
            <span>Automotive Assembly Line-Down Defense</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#1a1a1c] tracking-tight">
            24/7 Emergency Child Parts Supply Protocol
          </h1>
          <p className="text-[#1a1a1c]/70 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-sans">
            Eliminating automotive assembly line downtime through pre-buffered child parts stock and guaranteed under 4-hour emergency hotshot dispatch.
          </p>
        </div>
      </section>

      {/* The Automotive Downtime Reality */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <span className="mono text-xs text-[#c52222] font-bold tracking-wider">
              Why Emergency Supply Matters in Automotive
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1a1a1c] tracking-tight leading-tight">
              One Missing Child Part Halts the Entire Vehicle Assembly Line
            </h2>
            <p className="text-[#1a1a1c]/80 text-sm sm:text-base leading-relaxed font-sans">
              Automotive assembly plants run on synchronized, minute-by-minute takt times. A car door cannot be mounted if a single hinge pivot pin is missing. A braking subsystem cannot be installed if a guide pin fails dimensional tolerance.
            </p>
            <p className="text-[#1a1a1c]/70 text-sm leading-relaxed font-sans">
              When a traditional supplier suffers machine failure, logistical delays, or quality holds, plant downtime costs up to <strong className="text-[#1a1a1c]">$50,000 per minute ($3,000,000 per hour)</strong>. Globle Bhavya acts as the automotive industry's emergency rapid-response contingency lifeline.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-sm bg-white border border-[rgba(26,26,28,0.12)]">
                <div className="text-2xl font-serif font-bold text-[#1a1a1c]">&lt; 15 Min</div>
                <div className="text-xs text-[#1a1a1c]/60 mt-1 mono">Incident Triage by Plant Director</div>
              </div>
              <div className="p-3.5 rounded-sm bg-white border border-[rgba(26,26,28,0.12)]">
                <div className="text-2xl font-serif font-bold text-[#1a1a1c]">&lt; 4 Hours</div>
                <div className="text-xs text-[#1a1a1c]/60 mt-1 mono">Hotshot Buffer Stock Dispatch</div>
              </div>
              <div className="p-3.5 rounded-sm bg-white border border-[rgba(26,26,28,0.12)]">
                <div className="text-2xl font-serif font-bold text-[#1a1a1c]">24-48 Hours</div>
                <div className="text-xs text-[#1a1a1c]/60 mt-1 mono">Surge Replacement Tooling Ramp</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-sm bg-white border-2 border-[#c52222] p-6 sm:p-8 space-y-6 shadow-md">
              <div className="flex items-center gap-3 border-b border-[rgba(26,26,28,0.1)] pb-4">
                <div className="p-2.5 rounded-sm bg-[rgba(197,34,34,0.1)] border border-[#c52222] text-[#c52222]">
                  <PhoneCall className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <div className="font-serif font-bold text-xl text-[#1a1a1c]">24/7 OEM Emergency Hotline</div>
                  <div className="text-xs text-[#1a1a1c]/70 font-sans">Direct escalation to Plant Logistics Director</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs text-[#1a1a1c]/60 uppercase mono">Toll-Free Emergency Number:</div>
                <a 
                  href={`tel:${COMPANY_INFO.emergencyHotline}`} 
                  className="text-2xl sm:text-3xl mono font-bold text-[#c52222] hover:underline block transition-colors"
                >
                  {COMPANY_INFO.emergencyHotline}
                </a>
              </div>

              <div className="text-xs text-[#1a1a1c]/70 leading-relaxed border-t border-[rgba(26,26,28,0.08)] pt-4 font-sans">
                Available 24 hours a day, 365 days a year for Tier-1 assembly plant directors and supply chain managers in crisis.
              </div>

              <button
                onClick={onOpenEmergencyModal}
                className="emergency-pill w-full !py-3 justify-center"
              >
                <ShieldAlert className="w-4 h-4 text-white" />
                <span>Submit Rapid Line-Down Alert</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Direct Line-Down Intake Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="arch-card p-8 sm:p-12 space-y-8 bg-white rounded-sm">
          
          <div className="max-w-3xl space-y-2">
            <span className="mono text-xs text-[#c52222] font-bold">
              Direct Production Escalation
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1a1a1c]">
              Emergency Child Part Dispatch Request
            </h2>
            <p className="text-xs sm:text-sm text-[#1a1a1c]/70 font-sans">
              Submit your urgent child component shortage details below. Our standby crisis team will respond within 15 minutes to organize hotshot transport.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-sm bg-[#f2efeb] border border-emerald-800/80 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-serif font-bold text-[#1a1a1c]">Emergency Dispatch Ticket Generated</h3>
              <p className="text-xs text-[#1a1a1c]/80 max-w-md mx-auto font-sans">
                Incident logged for <strong className="text-[#1a1a1c]">{plantInput}</strong>. Plant logistics director will contact <strong className="text-[#1a1a1c]">{phone}</strong> within 15 minutes.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs mono uppercase text-[#1a1a1c] font-bold mb-1">
                    Child Part Needed / Description *
                  </label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Door Hinge Pivot Pin AF-HNG-4420-P"
                    value={partInput}
                    onChange={(e) => setPartInput(e.target.value)}
                    className="w-full bg-[#f2efeb] border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs text-[#1a1a1c] placeholder-[#1a1a1c]/40 focus:outline-none focus:border-[#1a1a1c] mono"
                  />
                </div>

                <div>
                  <label className="block text-xs mono uppercase text-[#1a1a1c] font-bold mb-1">
                    Assembly Plant &amp; Delivery Dock *
                  </label>
                  <input 
                    type="text"
                    required
                    value={plantInput}
                    onChange={(e) => setPlantInput(e.target.value)}
                    className="w-full bg-[#f2efeb] border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs text-[#1a1a1c] focus:outline-none focus:border-[#1a1a1c]"
                  />
                </div>

                <div>
                  <label className="block text-xs mono uppercase text-[#1a1a1c] font-bold mb-1">
                    Required Emergency Buffer Qty
                  </label>
                  <input 
                    type="text"
                    value={qtyInput}
                    onChange={(e) => setQtyInput(e.target.value)}
                    className="w-full bg-[#f2efeb] border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs mono text-[#1a1a1c] focus:outline-none focus:border-[#1a1a1c]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs mono uppercase text-[#1a1a1c] font-bold mb-1">
                    Plant Manager / Requestor Name *
                  </label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. David Campbell"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#f2efeb] border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs text-[#1a1a1c] focus:outline-none focus:border-[#1a1a1c]"
                  />
                </div>

                <div>
                  <label className="block text-xs mono uppercase text-[#1a1a1c] font-bold mb-1">
                    Direct Mobile Phone (24/7) *
                  </label>
                  <input 
                    type="tel"
                    required
                    placeholder="+1 (248) 555-0199"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#f2efeb] border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs mono text-[#1a1a1c] focus:outline-none focus:border-[#1a1a1c]"
                  />
                </div>

                <div>
                  <label className="block text-xs mono uppercase text-[#1a1a1c] font-bold mb-1">
                    Official Corporate Email *
                  </label>
                  <input 
                    type="email"
                    required
                    placeholder="dcampbell@oemplant.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#f2efeb] border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs text-[#1a1a1c] focus:outline-none focus:border-[#1a1a1c]"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] mono text-[#1a1a1c]/60">
                  Priority 1 Air Charter &bull; Hotshot Dedicated Team Drivers Available
                </span>

                <button
                  type="submit"
                  className="emergency-pill !py-3 !px-6"
                >
                  <Send className="w-3.5 h-3.5 text-white" />
                  <span>Dispatch Line-Down Alert Now</span>
                </button>
              </div>
            </form>
          )}

        </div>
      </section>

    </div>
  );
};
