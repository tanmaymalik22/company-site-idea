import React, { useState } from 'react';
import { 
  ShieldAlert, 
  X, 
  CheckCircle2, 
  PhoneCall, 
  Clock, 
  Plane, 
  Truck, 
  AlertTriangle,
  Send
} from 'lucide-react';
import { CHILD_PARTS } from '../data/partsData';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPartId?: string;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({
  isOpen,
  onClose,
  initialPartId
}) => {
  const [partNumber, setPartNumber] = useState<string>(() => {
    if (initialPartId) {
      const p = CHILD_PARTS.find(item => item.id === initialPartId);
      return p ? `${p.partNumber} - ${p.name}` : '';
    }
    return '';
  });
  
  const [plantLocation, setPlantLocation] = useState('Gurugram / NCR Automotive Hub, India');
  const [lineStatus, setLineStatus] = useState<'CRITICAL_LINE_DOWN' | 'IMMINENT_12H' | 'BUFFER_EXHAUSTED'>('CRITICAL_LINE_DOWN');
  const [quantity, setQuantity] = useState('25,000');
  const [freightType, setFreightType] = useState('Hotshot Dedicated Ground (Under 4h)');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<{
    ticketId: string;
    etaHours: number;
    assignedCoordinator: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedTicket({
        ticketId: `EMERGENCY-LD-${Math.floor(100000 + Math.random() * 900000)}`,
        etaHours: lineStatus === 'CRITICAL_LINE_DOWN' ? 3.5 : 8,
        assignedCoordinator: 'Rajesh Sharma (Head of Rapid Logistics & Plant Operations)'
      });
    }, 800);
  };

  const handleReset = () => {
    setSubmittedTicket(null);
    onClose();
  };

  return (
    <div 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto cursor-pointer"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-[#f2efeb] border-2 border-[#1a1a1c] rounded-sm max-w-2xl w-full p-6 sm:p-8 relative space-y-6 my-8 text-left shadow-2xl cursor-default text-[#1a1a1c]"
      >
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[rgba(26,26,28,0.12)] pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c52222] animate-pulse"></span>
              <span className="mono text-xs uppercase tracking-wider text-[#c52222] font-bold">
                HIGH-PRIORITY OEM INCIDENT DISPATCH
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1a1a1c]">
              24/7 Line-Down Emergency Supply Dispatch
            </h3>
            <p className="text-xs text-[#1a1a1c]/70 font-sans">
              Direct escalation to Globle Bhavya logistics operations for immediate child parts buffer release.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-[#1a1a1c] hover:text-[#c52222] p-1.5 rounded-sm hover:bg-white transition-colors border border-[rgba(26,26,28,0.15)] cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {submittedTicket ? (
          /* Submission Confirmation View */
          <div className="space-y-5">
            <div className="p-5 rounded-sm bg-white border border-[#c52222] space-y-3">
              <div className="flex items-center gap-2 text-[#1a1a1c] text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span className="mono font-bold">EMERGENCY DISPATCH PROTOCOL TRIGGERED</span>
              </div>
              <div className="text-xs text-[#1a1a1c]/80 mono">
                Ticket Number: <span className="font-bold text-[#c52222]">{submittedTicket.ticketId}</span>
              </div>
              <p className="text-xs text-[#1a1a1c]/70 leading-relaxed font-sans">
                Buffer stock of <strong className="text-[#1a1a1c]">{quantity} units</strong> has been locked in our closest VMI hub. Our logistics team is executing dock-side dispatch.
              </p>
              <div className="p-3 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.12)] text-xs space-y-1">
                <div className="text-[#1a1a1c]/60 mono text-[10px]">Assigned Incident Coordinator:</div>
                <div className="text-[#1a1a1c] font-bold font-sans">{submittedTicket.assignedCoordinator}</div>
                <div className="text-[#c52222] mono font-bold text-xs pt-1">
                  Estimated Dock Arrival: Within {submittedTicket.etaHours} Hours
                </div>
              </div>
            </div>

            <div className="p-4 rounded-sm bg-white border border-[rgba(26,26,28,0.12)] flex items-center justify-between">
              <div className="text-xs">
                <div className="text-[#1a1a1c]/60 mono text-[10px]">Direct Operations Phone Line:</div>
                <div className="mono text-sm text-[#1a1a1c] font-bold">+1 (800) 555-9911</div>
              </div>
              <a
                href="tel:+18005559911"
                className="emergency-pill !text-xs !py-1.5 !px-3"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>

            <button
              onClick={handleReset}
              className="btn btn-primary w-full justify-center !text-xs"
            >
              Close and Monitor Status
            </button>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mono font-bold uppercase text-[#1a1a1c] mb-1">
                  Child Part Required *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AF-HNG-4420-P Door Pivot Pin"
                  value={partNumber}
                  onChange={(e) => setPartNumber(e.target.value)}
                  className="w-full bg-white border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs text-[#1a1a1c] placeholder-[#1a1a1c]/40 focus:outline-none focus:border-[#1a1a1c]"
                />
              </div>

              <div>
                <label className="block mono font-bold uppercase text-[#1a1a1c] mb-1">
                  Assembly Plant Location &amp; Dock *
                </label>
                <input
                  type="text"
                  required
                  value={plantLocation}
                  onChange={(e) => setPlantLocation(e.target.value)}
                  className="w-full bg-white border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs text-[#1a1a1c] focus:outline-none focus:border-[#1a1a1c]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mono font-bold uppercase text-[#1a1a1c] mb-1">
                  Emergency Buffer Quantity (pcs) *
                </label>
                <input
                  type="text"
                  required
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full bg-white border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs mono text-[#1a1a1c] focus:outline-none focus:border-[#1a1a1c]"
                />
              </div>

              <div>
                <label className="block mono font-bold uppercase text-[#1a1a1c] mb-1">
                  Assembly Line Urgency Level
                </label>
                <select
                  value={lineStatus}
                  onChange={(e) => setLineStatus(e.target.value as any)}
                  className="w-full bg-white border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs text-[#1a1a1c] focus:outline-none focus:border-[#1a1a1c] mono font-bold"
                >
                  <option value="CRITICAL_LINE_DOWN">🔴 CRITICAL: Line Stopped (&lt; 4h Dispatch)</option>
                  <option value="IMMINENT_12H">🟠 IMMINENT: Stock Runs Out in &lt; 12 Hours</option>
                  <option value="BUFFER_EXHAUSTED">🟡 URGENT: Buffer Depleted, Need Surge Refill</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div>
                <label className="block mono font-bold uppercase text-[#1a1a1c] mb-1">
                  Contact Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Plant Logistics Lead"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full bg-white border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs text-[#1a1a1c] focus:outline-none focus:border-[#1a1a1c]"
                />
              </div>

              <div>
                <label className="block mono font-bold uppercase text-[#1a1a1c] mb-1">
                  Direct Mobile Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (248) 555-0199"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  className="w-full bg-white border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs mono text-[#1a1a1c] focus:outline-none focus:border-[#1a1a1c]"
                />
              </div>

              <div>
                <label className="block mono font-bold uppercase text-[#1a1a1c] mb-1">
                  Corporate Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="logistics@oem.com"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full bg-white border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs text-[#1a1a1c] focus:outline-none focus:border-[#1a1a1c]"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-[rgba(26,26,28,0.1)] flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={onClose}
                className="btn !py-2.5 !px-4 text-xs w-full sm:w-auto"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="emergency-pill !py-3 !px-6 text-xs w-full sm:w-auto justify-center"
              >
                <Send className="w-4 h-4 text-white" />
                <span>{isSubmitting ? 'Transmitting Escalation...' : 'Dispatch Emergency Stock'}</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
