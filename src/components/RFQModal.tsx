import React, { useState } from 'react';
import { 
  FileText, 
  X, 
  CheckCircle2, 
  UploadCloud, 
  Layers, 
  Clock, 
  Calendar,
  Building,
  Mail,
  Send
} from 'lucide-react';
import { CHILD_PARTS } from '../data/partsData';

interface RFQModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPartId?: string;
}

export const RFQModal: React.FC<RFQModalProps> = ({
  isOpen,
  onClose,
  initialPartId
}) => {
  const [selectedPartId, setSelectedPartId] = useState<string>(initialPartId || 'custom');
  const [annualVolume, setAnnualVolume] = useState('250,000 pcs / Year (EAU)');
  const [ppapLevel, setPpapLevel] = useState('PPAP Level 3 (Standard Automotive Full Package)');
  const [targetSOP, setTargetSOP] = useState('Q3 2027');
  const [customDescription, setCustomDescription] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [fileUploaded, setFileUploaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRFQ, setSubmittedRFQ] = useState<{
    rfqNumber: string;
    sampleKitDays: number;
  } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedRFQ({
        rfqNumber: `RFQ-APX-${Math.floor(10000 + Math.random() * 90000)}`,
        sampleKitDays: 5
      });
    }, 800);
  };

  const handleReset = () => {
    setSubmittedRFQ(null);
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
            <div className="flex items-center gap-2 text-[#c52222] mono text-xs font-bold uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" />
              <span>OEM &amp; TIER-1 SOURCING PORTAL</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1a1a1c]">
              Request Quotation &amp; PPAP Sample Kit
            </h3>
            <p className="text-xs text-[#1a1a1c]/70 font-sans">
              Submit engineering drawings or select catalog child parts for direct serial manufacturing quotation.
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

        {submittedRFQ ? (
          /* Confirmation State */
          <div className="space-y-5">
            <div className="p-5 rounded-sm bg-white border border-[rgba(26,26,28,0.15)] space-y-3">
              <div className="flex items-center gap-2 text-[#1a1a1c] text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span className="mono font-bold">QUOTATION REQUEST REGISTERED WITH TOOLROOM</span>
              </div>
              <div className="text-xs text-[#1a1a1c]/80 mono">
                Formal RFQ Reference: <span className="font-bold text-[#c52222]">{submittedRFQ.rfqNumber}</span>
              </div>
              <p className="text-xs text-[#1a1a1c]/70 leading-relaxed font-sans">
                Thank you, <strong className="text-[#1a1a1c]">{contactName}</strong> ({companyName}). Our costing and toolroom engineering team is running DFM feasibility and cycle-time simulations.
              </p>
              <div className="p-3 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.12)] text-xs space-y-1">
                <div className="text-[#1a1a1c]/60 mono text-[10px]">Formal Response Time: &le; 24 Business Hours</div>
                <div className="text-[#1a1a1c] font-bold font-sans">Pre-Production Functional Samples Dispatch: ~{submittedRFQ.sampleKitDays} Business Days</div>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="btn btn-primary w-full justify-center !text-xs"
            >
              Done &amp; Return to Catalog
            </button>
          </div>
        ) : (
          /* RFQ Intake Form */
          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
            
            {/* Part Selection */}
            <div>
              <label className="block mono font-bold uppercase text-[#1a1a1c] mb-1">
                Target Child Part *
              </label>
              <select
                value={selectedPartId}
                onChange={(e) => setSelectedPartId(e.target.value)}
                className="w-full bg-white border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs text-[#1a1a1c] focus:outline-none focus:border-[#1a1a1c] mono"
              >
                <option value="custom">Custom Automotive Child Part (Drawing Attached)</option>
                {CHILD_PARTS.map((part) => (
                  <option key={part.id} value={part.id}>
                    {part.partNumber} &bull; {part.name} ({part.parentAssembly})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block mono font-bold uppercase text-[#1a1a1c] mb-1">
                  Estimated Annual Volume *
                </label>
                <input
                  type="text"
                  required
                  value={annualVolume}
                  onChange={(e) => setAnnualVolume(e.target.value)}
                  className="w-full bg-white border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs mono text-[#1a1a1c] focus:outline-none focus:border-[#1a1a1c]"
                />
              </div>

              <div>
                <label className="block mono font-bold uppercase text-[#1a1a1c] mb-1">
                  PPAP Level Required
                </label>
                <select
                  value={ppapLevel}
                  onChange={(e) => setPpapLevel(e.target.value)}
                  className="w-full bg-white border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs text-[#1a1a1c] focus:outline-none focus:border-[#1a1a1c] mono"
                >
                  <option value="PPAP Level 3 (Standard Automotive Full Package)">Level 3 (Standard Full Package)</option>
                  <option value="PPAP Level 1 (Warrant Only)">Level 1 (Warrant Only)</option>
                  <option value="PPAP Level 4 (Per OEM Specifics)">Level 4 (Per OEM Specifics)</option>
                  <option value="PPAP Level 5 (At Manufacturing Facility)">Level 5 (At Manufacturing Facility)</option>
                </select>
              </div>

              <div>
                <label className="block mono font-bold uppercase text-[#1a1a1c] mb-1">
                  Target Serial SOP Date
                </label>
                <input
                  type="text"
                  value={targetSOP}
                  onChange={(e) => setTargetSOP(e.target.value)}
                  className="w-full bg-white border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs mono text-[#1a1a1c] focus:outline-none focus:border-[#1a1a1c]"
                />
              </div>
            </div>

            {/* File Upload Simulation */}
            <div>
              <label className="block mono font-bold uppercase text-[#1a1a1c] mb-1">
                Upload CAD Drawing / 2D Specification Sheet (Optional)
              </label>
              <div 
                onClick={() => setFileUploaded(!fileUploaded)}
                className={`border-2 border-dashed rounded-sm p-4 text-center cursor-pointer transition-colors ${
                  fileUploaded 
                    ? 'border-[#c52222] bg-white' 
                    : 'border-[rgba(26,26,28,0.2)] hover:border-[#1a1a1c] bg-white/60'
                }`}
              >
                <UploadCloud className="w-6 h-6 mx-auto mb-1 text-[#c52222]" />
                <div className="text-xs font-serif font-bold text-[#1a1a1c]">
                  {fileUploaded ? 'Drawing Attached: OEM_Child_Part_Spec_RevC.step' : 'Click to Upload 2D PDF, DXF, or 3D STEP File'}
                </div>
                <div className="text-[10px] text-[#1a1a1c]/50 mono">
                  Max file size: 50MB &bull; Automatic NDA protection
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mono font-bold uppercase text-[#1a1a1c] mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Engineering Director"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full bg-white border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs text-[#1a1a1c] focus:outline-none focus:border-[#1a1a1c]"
                />
              </div>

              <div>
                <label className="block mono font-bold uppercase text-[#1a1a1c] mb-1">
                  Automotive Company / OEM *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Magna, Bosch, Stellantis"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full bg-white border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs text-[#1a1a1c] focus:outline-none focus:border-[#1a1a1c]"
                />
              </div>

              <div>
                <label className="block mono font-bold uppercase text-[#1a1a1c] mb-1">
                  Corporate Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@tier1supplier.com"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full bg-white border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs text-[#1a1a1c] focus:outline-none focus:border-[#1a1a1c]"
                />
              </div>

              <div>
                <label className="block mono font-bold uppercase text-[#1a1a1c] mb-1">
                  Direct Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (248) 555-0100"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  className="w-full bg-white border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs mono text-[#1a1a1c] focus:outline-none focus:border-[#1a1a1c]"
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
                className="btn btn-primary !py-2.5 !px-6 text-xs w-full sm:w-auto"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Transmitting RFQ...' : 'Submit Quotation Request'}</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
