import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Upload, 
  CheckCircle2, 
  ShieldAlert, 
  Layers, 
  Sliders, 
  Info, 
  X, 
  Image as ImageIcon,
  Cpu,
  Wrench,
  Check
} from 'lucide-react';
import { ChildPartItem, DrawingDimension } from '../types';

interface ChildPartDrawingViewerProps {
  childPart: ChildPartItem;
  parentSubsystemTitle?: string;
  onOpenEmergencyModal?: (partName?: string) => void;
  onOpenContactModal?: (partName?: string) => void;
  onClose?: () => void;
}

export const ChildPartDrawingViewer: React.FC<ChildPartDrawingViewerProps> = ({
  childPart,
  parentSubsystemTitle,
  onOpenEmergencyModal,
  onOpenContactModal,
  onClose
}) => {
  const [userUploadedImage, setUserUploadedImage] = useState<string | null>(childPart.drawingImage || null);
  const [selectedDimensionIndex, setSelectedDimensionIndex] = useState<number | null>(0);
  const [uploadSuccessMessage, setUploadSuccessMessage] = useState<string | null>(null);

  const dimensions: DrawingDimension[] = childPart.dimensions || [
    { label: 'Overall Dimension L', value: '50.00 ± 0.02 mm', nominal: 50.0, tolerance: '±0.02 mm', criticality: 'Major', note: 'Primary envelope tolerance' },
    { label: 'Critical Diameter / Thickness', value: '12.000 ± 0.005 mm', nominal: 12.0, tolerance: '±0.005 mm', criticality: 'Critical (CTQ)', note: 'Mating bearing seat' },
    { label: 'Forming Radius / Profile', value: '3.50 ± 0.03 mm', nominal: 3.5, tolerance: '±0.03 mm', criticality: 'Standard', note: 'Structural cross section' }
  ];

  const activeDim = selectedDimensionIndex !== null ? dimensions[selectedDimensionIndex] : null;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUserUploadedImage(url);
      setUploadSuccessMessage(`Uploaded: ${file.name}`);
      setTimeout(() => setUploadSuccessMessage(null), 4000);
    }
  };

  return (
    <div className="arch-card overflow-hidden flex flex-col space-y-0 text-left bg-white border border-[#1a1a1c] rounded-sm shadow-xl">
      
      {/* 1. Header Toolbar with Direct Exit Controls */}
      <div className="bg-[#f2efeb] border-b border-[rgba(26,26,28,0.12)] px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
        
        {/* Left: Part Meta Badges */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 bg-[#1a1a1c] text-[#f2efeb] px-2.5 py-1 rounded-sm mono text-xs font-bold">
            <Layers className="w-3.5 h-3.5 text-[#c52222]" />
            <span>PART: {childPart.partNumber}</span>
          </div>

          <span className="mono text-[11px] font-bold text-[#c52222] bg-white px-2 py-0.5 rounded-sm border border-[rgba(26,26,28,0.12)]">
            Tolerance: {childPart.tolerance}
          </span>

          <span className="inline-flex items-center gap-1 text-[11px] mono text-emerald-800 bg-emerald-50 border border-emerald-300 px-2.5 py-0.5 rounded-sm font-bold">
            <Lock className="w-3 h-3 text-emerald-700" />
            <span>OEM NDA Protected &bull; Diagrams Confidential</span>
          </span>
        </div>

        {/* Right: Direct Exit Button */}
        {onClose && (
          <button
            onClick={onClose}
            className="emergency-pill !py-1.5 !px-4 !text-xs flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white"
            title="Exit / Close Window (Esc)"
          >
            <X className="w-4 h-4 text-white stroke-[3]" />
            <span>Exit Part (Esc)</span>
          </button>
        )}
      </div>

      {/* 2. Main Workbench Grid (Left: Part Image Area & Confidentiality Notice; Right: Production Specs) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
        
        {/* Left Column (8 cols): Confidentiality Notice & Area for Part Image */}
        <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#faf9f6]">
          
          {/* Confidentiality Privacy Banner (Notice removing diagrams) */}
          <div className="p-4 rounded-sm bg-amber-50/90 border border-amber-300/80 text-amber-950 space-y-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
              <span className="mono text-xs font-bold uppercase tracking-wider text-amber-900">
                Confidentiality &amp; Company Privacy Policy
              </span>
            </div>
            <p className="text-xs text-amber-900/80 leading-relaxed font-sans">
              As required by automotive OEM non-disclosure agreements, <strong className="font-semibold text-amber-950">proprietary CAD diagrams and engineering vector drawings are confidential</strong> for company privacy and have been removed from public display. Physical part photography slots are provided below for component evaluation.
            </p>
          </div>

          {/* Area For Parts Images (Which will be added later) */}
          <div className="flex-1 flex flex-col justify-center items-center rounded-sm border-2 border-dashed border-[rgba(26,26,28,0.2)] bg-white p-6 sm:p-8 text-center relative group min-h-[280px]">
            {userUploadedImage ? (
              <div className="relative w-full h-full flex flex-col items-center justify-center space-y-3">
                <img 
                  src={userUploadedImage} 
                  alt={childPart.name}
                  className="max-h-[260px] max-w-full object-contain rounded-sm shadow-md"
                />
                <div className="flex items-center gap-3">
                  <span className="mono text-xs text-emerald-700 font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Component Image Loaded
                  </span>
                  <label className="mono text-[11px] text-[#c52222] underline cursor-pointer hover:text-[#1a1a1c]">
                    <span>Replace Image</span>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageUpload} 
                      className="hidden" 
                    />
                  </label>
                </div>
              </div>
            ) : (
              <div className="space-y-4 max-w-md">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#f2efeb] border border-[rgba(26,26,28,0.15)] flex items-center justify-center text-[#1a1a1c]/60 group-hover:scale-105 transition-transform">
                  <ImageIcon className="w-8 h-8 text-[#c52222]" />
                </div>
                
                <div className="space-y-1">
                  <span className="mono text-xs font-bold text-[#c52222] tracking-wider block uppercase">
                    [ Area for Part Image — To Be Added Later ]
                  </span>
                  <h4 className="text-lg font-serif font-bold text-[#1a1a1c]">
                    {childPart.name}
                  </h4>
                  <p className="text-xs text-[#1a1a1c]/60 leading-relaxed font-sans">
                    Designated photo placeholder for this automotive child component. Stamped sample or CNC turned part photographs will be uploaded and displayed here.
                  </p>
                </div>

                {/* Local Upload Simulation Option */}
                <div className="pt-2 flex flex-col items-center gap-2">
                  <label className="btn btn-primary !py-2 !px-4 text-xs cursor-pointer inline-flex items-center gap-2">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload / Preview Part Photo</span>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageUpload} 
                      className="hidden" 
                    />
                  </label>
                  <span className="text-[10px] mono text-[#1a1a1c]/50">
                    Supports high-resolution JPG, PNG, WEBP stamped part photos
                  </span>
                </div>
              </div>
            )}

            {uploadSuccessMessage && (
              <div className="absolute bottom-3 left-4 right-4 bg-emerald-600 text-white text-xs py-1.5 px-3 rounded-sm mono text-center animate-fade-in">
                {uploadSuccessMessage}
              </div>
            )}
          </div>

          {/* Quick Technical Specs Summary Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
            <div className="p-2.5 rounded-sm bg-white border border-[rgba(26,26,28,0.1)]">
              <span className="mono text-[10px] text-[#1a1a1c]/60 block">Material Grade</span>
              <span className="font-bold text-[#1a1a1c] truncate block">{childPart.material}</span>
            </div>
            <div className="p-2.5 rounded-sm bg-white border border-[rgba(26,26,28,0.1)]">
              <span className="mono text-[10px] text-[#1a1a1c]/60 block">Process</span>
              <span className="font-bold text-[#1a1a1c] truncate block">{childPart.process}</span>
            </div>
            <div className="p-2.5 rounded-sm bg-white border border-[rgba(26,26,28,0.1)]">
              <span className="mono text-[10px] text-[#1a1a1c]/60 block">Serial Tolerance</span>
              <span className="font-bold text-[#c52222] mono block">{childPart.tolerance}</span>
            </div>
            <div className="p-2.5 rounded-sm bg-white border border-[rgba(26,26,28,0.1)]">
              <span className="mono text-[10px] text-[#1a1a1c]/60 block">Line-Down Buffer</span>
              <span className="font-bold text-[#1a1a1c] mono block">{childPart.emergencyBufferUnits.toLocaleString()} pcs</span>
            </div>
          </div>

        </div>

        {/* Right Column (4 cols): Technical Dimensions & Manufacturing Specs */}
        <div className="lg:col-span-4 bg-[#f8f6f2] p-5 sm:p-6 flex flex-col justify-between space-y-5 text-left border-t lg:border-t-0 lg:border-l border-[rgba(26,26,28,0.12)]">
          
          <div className="space-y-4">
            
            {/* Header */}
            <div className="border-b border-[rgba(26,26,28,0.1)] pb-3">
              <div className="mono text-[10px] text-[#c52222] font-bold uppercase tracking-wider">
                Manufacturing Specification
              </div>
              <h4 className="text-base font-serif font-bold text-[#1a1a1c]">
                Production &amp; Tolerance Data
              </h4>
            </div>

            {/* Active Selected Dimension Display Card */}
            {activeDim && (
              <div className="arch-card p-4 rounded-sm bg-white border border-[#1a1a1c] space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="mono text-[11px] font-bold text-[#c52222]">
                    {activeDim.label}
                  </span>
                  <span className={`text-[10px] mono px-2 py-0.5 rounded-sm font-bold ${
                    activeDim.criticality === 'Critical (CTQ)' 
                      ? 'bg-[#c52222] text-white' 
                      : 'bg-[#f2efeb] text-[#1a1a1c]'
                  }`}>
                    {activeDim.criticality}
                  </span>
                </div>

                <div className="font-serif font-bold text-2xl text-[#1a1a1c] tracking-tight">
                  {activeDim.value}
                </div>

                <div className="text-xs text-[#1a1a1c]/70 leading-relaxed font-sans pt-1 border-t border-[rgba(26,26,28,0.08)]">
                  {activeDim.note}
                </div>
              </div>
            )}

            {/* Dimensions Schedule List */}
            <div className="space-y-2">
              <span className="mono text-[11px] text-[#1a1a1c]/60 font-bold block">
                Inspected Parameters ({dimensions.length}):
              </span>
              <div className="space-y-1.5 max-h-[180px] overflow-y-auto pr-1">
                {dimensions.map((dim, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedDimensionIndex(idx)}
                    className={`w-full text-left p-2 rounded-sm border text-xs transition-all flex items-center justify-between cursor-pointer ${
                      selectedDimensionIndex === idx
                        ? 'bg-white border-[#1a1a1c] shadow-xs'
                        : 'bg-white/60 border-[rgba(26,26,28,0.1)] hover:bg-white text-[#1a1a1c]/70 hover:text-[#1a1a1c]'
                    }`}
                  >
                    <span className="font-medium truncate max-w-[170px]">{dim.label}</span>
                    <span className="mono text-[11px] font-bold text-[#1a1a1c]">{dim.value}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Automotive Mating & Function Details */}
            <div className="p-3 rounded-sm bg-white border border-[rgba(26,26,28,0.1)] space-y-1.5 text-xs">
              <span className="mono text-[10px] text-[#1a1a1c]/60 block font-bold">Assembly Mating Role:</span>
              <p className="text-[#1a1a1c]/80 leading-relaxed font-sans">
                {childPart.functionInParent}
              </p>
              {childPart.parentMatingInterface && (
                <div className="pt-1.5 border-t border-[rgba(26,26,28,0.08)] text-[11px] text-[#1a1a1c]/70 font-sans">
                  <strong>Interface:</strong> {childPart.parentMatingInterface}
                </div>
              )}
            </div>

          </div>

          {/* Action CTAs & Bottom Close Button */}
          <div className="space-y-2 pt-2 border-t border-[rgba(26,26,28,0.1)]">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onOpenEmergencyModal?.(childPart.name)}
                className="btn btn-primary !py-2 !px-2 text-xs mono font-bold !text-center truncate"
              >
                Line-Down Buffer
              </button>
              <button
                onClick={() => onOpenContactModal?.(`Part RFQ: ${childPart.partNumber} - ${childPart.name}`)}
                className="btn bg-white !py-2 !px-2 text-xs mono font-bold !text-center truncate"
              >
                Request RFQ
              </button>
            </div>

            {onClose && (
              <button
                onClick={onClose}
                className="w-full py-2 px-3 rounded-sm bg-[#1a1a1c] hover:bg-[#c52222] text-white mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Close &amp; Exit Window</span>
              </button>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
