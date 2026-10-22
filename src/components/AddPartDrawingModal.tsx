import React, { useState } from 'react';
import { 
  X, 
  UploadCloud, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  FileText, 
  AlertCircle, 
  Compass, 
  Layers,
  Sparkles,
  Download
} from 'lucide-react';
import { ChildPartItem, DrawingDimension, ParentSubsystem } from '../types';
import { PARENT_SUBSYSTEMS } from '../data/companyData';

interface AddPartDrawingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPart?: (newPart: ChildPartItem, parentSubsystemId: string) => void;
}

export const AddPartDrawingModal: React.FC<AddPartDrawingModalProps> = ({
  isOpen,
  onClose,
  onAddPart
}) => {
  const [partName, setPartName] = useState('');
  const [partNumber, setPartNumber] = useState('AF-NEW-' + Math.floor(1000 + Math.random() * 9000));
  const [selectedSubsystemId, setSelectedSubsystemId] = useState(PARENT_SUBSYSTEMS[0].id);
  const [material, setMaterial] = useState('Case-Hardened 8620 Alloy Steel');
  const [process, setProcess] = useState('Swiss CNC Multi-Axis Turning');
  const [tolerance, setTolerance] = useState('±0.005 mm');
  const [functionInParent, setFunctionInParent] = useState('');
  const [drawingType, setDrawingType] = useState<'turned_pin' | 'stamped_pawl' | 'bracket_plate' | 'spring' | 'busbar' | 'custom'>('turned_pin');
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamic Dimensions Builder
  const [dimensions, setDimensions] = useState<DrawingDimension[]>([
    { label: 'Critical Journal Diameter ØD1', value: '12.000 ± 0.005 mm', nominal: 12.0, tolerance: '±0.005 mm', criticality: 'Critical (CTQ)', note: 'Sliding bearing seat' },
    { label: 'Overall Working Length L1', value: '65.00 ± 0.02 mm', nominal: 65.0, tolerance: '±0.02 mm', criticality: 'Major', note: 'Total span between parent lugs' },
    { label: 'Flange Shoulder Diameter ØD2', value: '18.00 ± 0.05 mm', nominal: 18.0, tolerance: '±0.05 mm', criticality: 'Standard', note: 'Thrust retention stop' }
  ]);

  const [newDimLabel, setNewDimLabel] = useState('');
  const [newDimNominal, setNewDimNominal] = useState('');
  const [newDimTolerance, setNewDimTolerance] = useState('±0.01 mm');
  const [newDimCriticality, setNewDimCriticality] = useState<'Critical (CTQ)' | 'Major' | 'Standard'>('Critical (CTQ)');

  if (!isOpen) return null;

  const handleAddDimension = () => {
    if (!newDimLabel || !newDimNominal) return;
    const nominalNum = parseFloat(newDimNominal) || 0;
    const valueString = `${nominalNum.toFixed(2)} ${newDimTolerance}`;
    setDimensions([
      ...dimensions,
      {
        label: newDimLabel,
        value: valueString,
        nominal: nominalNum,
        tolerance: newDimTolerance,
        criticality: newDimCriticality,
        note: 'Customer specified dimension'
      }
    ]);
    setNewDimLabel('');
    setNewDimNominal('');
  };

  const handleRemoveDimension = (index: number) => {
    setDimensions(dimensions.filter((_, i) => i !== index));
  };

  const handleFileDrop = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partName) return;

    const newPart: ChildPartItem = {
      id: `CP-CUSTOM-${Date.now()}`,
      name: partName,
      partNumber: partNumber || 'AF-CUSTOM-PART',
      material,
      process,
      tolerance,
      functionInParent: functionInParent || 'Engineered child component combining into parent assembly.',
      emergencyBufferUnits: 50000,
      drawingType,
      drawingRevision: 'REV-A (New CAD Intake)',
      cadFormats: ['.STEP', '.DXF', '.PDF', '.IGES'],
      dimensions
    };

    if (onAddPart) {
      onAddPart(newPart, selectedSubsystemId);
    }

    setIsSubmitted(true);
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
        className="bg-[#f2efeb] border-2 border-[#1a1a1c] rounded-sm max-w-3xl w-full p-6 sm:p-8 space-y-6 text-left my-8 shadow-2xl cursor-default text-[#1a1a1c]"
      >
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[rgba(26,26,28,0.12)] pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="mono text-xs text-[#c52222] font-bold uppercase tracking-wider">
                ENGINEERING CAD INTAKE STUDIO
              </span>
              <span className="badge-clean text-[10px]">DFM Feasibility</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1a1a1c] tracking-tight">
              Add Child Part Technical Drawing &amp; Dimensions
            </h2>
            <p className="text-xs text-[#1a1a1c]/70 font-sans">
              Input engineering drawing specs, define critical dimensions, and upload prints for rapid DFM evaluation and tooling estimation.
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

        {isSubmitted ? (
          <div className="py-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-white border border-emerald-600 text-emerald-600 mx-auto flex items-center justify-center shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-[#1a1a1c] uppercase">
                Drawing &amp; Dimensions Successfully Added!
              </h3>
              <p className="text-xs sm:text-sm text-[#1a1a1c]/80 max-w-md mx-auto font-sans">
                Part <strong className="text-[#1a1a1c] mono">{partNumber} ({partName})</strong> has been registered with {dimensions.length} critical dimension callouts. Our toolroom engineering team has received the print for 24-hour DFM feasibility.
              </p>
            </div>

            <div className="p-4 rounded-sm bg-white border border-[rgba(26,26,28,0.12)] max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between mono text-[#1a1a1c]/70">
                <span>DFM Feasibility Score:</span>
                <span className="text-emerald-700 font-bold">98.2% (IATF Ready)</span>
              </div>
              <div className="flex justify-between mono text-[#1a1a1c]/70">
                <span>Recommended Tooling:</span>
                <span className="text-[#1a1a1c] font-bold">Multi-Station Progressive Cell</span>
              </div>
              <div className="flex justify-between mono text-[#1a1a1c]/70">
                <span>Prototype Sample Lead Time:</span>
                <span className="text-[#1a1a1c] font-bold">5 Business Days</span>
              </div>
            </div>

            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="btn btn-primary"
              >
                Close &amp; View in Portfolio
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 text-xs font-sans">
            
            {/* 1. General Part Identity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mono font-bold uppercase text-[#1a1a1c] mb-1">
                  Child Part Name *
                </label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. Door Latch Claw Pawl, Hinge Spindle, Brake Pin"
                  value={partName}
                  onChange={(e) => setPartName(e.target.value)}
                  className="w-full bg-white border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs text-[#1a1a1c] placeholder-[#1a1a1c]/40 focus:outline-none focus:border-[#1a1a1c]"
                />
              </div>

              <div>
                <label className="block mono font-bold uppercase text-[#1a1a1c] mb-1">
                  Part Number / CAD Model ID
                </label>
                <input 
                  type="text"
                  value={partNumber}
                  onChange={(e) => setPartNumber(e.target.value)}
                  className="w-full bg-white border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs mono text-[#1a1a1c] focus:outline-none focus:border-[#1a1a1c]"
                />
              </div>

              <div>
                <label className="block mono font-bold uppercase text-[#1a1a1c] mb-1">
                  Parent Automotive Subsystem
                </label>
                <select
                  value={selectedSubsystemId}
                  onChange={(e) => setSelectedSubsystemId(e.target.value)}
                  className="w-full bg-white border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs text-[#1a1a1c] focus:outline-none focus:border-[#1a1a1c] mono"
                >
                  {PARENT_SUBSYSTEMS.map((sub) => (
                    <option key={sub.id} value={sub.id}>
                      {sub.title} ({sub.category})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mono font-bold uppercase text-[#1a1a1c] mb-1">
                  Geometry / Drawing Type
                </label>
                <select
                  value={drawingType}
                  onChange={(e) => setDrawingType(e.target.value as any)}
                  className="w-full bg-white border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs text-[#1a1a1c] focus:outline-none focus:border-[#1a1a1c] mono"
                >
                  <option value="turned_pin">Turned Cylindrical Shaft / Pin (CNC Turning)</option>
                  <option value="stamped_pawl">Lock Pawl / Rotary Cam (Fine Blanking)</option>
                  <option value="bracket_plate">Stamped Stiffener Bracket / Plate (Progressive Die)</option>
                  <option value="spring">Coiled Torsion / Extension Spring</option>
                  <option value="busbar">EV Battery Busbar / Copper Terminal</option>
                  <option value="custom">Custom Precision Machined Part</option>
                </select>
              </div>
            </div>

            {/* 2. Materials & Tolerances */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block mono font-bold uppercase text-[#1a1a1c] mb-1">
                  Material Specification
                </label>
                <input 
                  type="text"
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  placeholder="e.g. 8620 Alloy Steel, 303 SS, C11000 Copper"
                  className="w-full bg-white border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs text-[#1a1a1c] focus:outline-none focus:border-[#1a1a1c]"
                />
              </div>

              <div>
                <label className="block mono font-bold uppercase text-[#1a1a1c] mb-1">
                  Manufacturing Process
                </label>
                <input 
                  type="text"
                  value={process}
                  onChange={(e) => setProcess(e.target.value)}
                  placeholder="e.g. Swiss CNC Turning, Progressive Die"
                  className="w-full bg-white border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs text-[#1a1a1c] focus:outline-none focus:border-[#1a1a1c]"
                />
              </div>

              <div>
                <label className="block mono font-bold uppercase text-[#1a1a1c] mb-1">
                  Serial Tolerance Target
                </label>
                <input 
                  type="text"
                  value={tolerance}
                  onChange={(e) => setTolerance(e.target.value)}
                  placeholder="e.g. ±0.005 mm"
                  className="w-full bg-white border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs mono text-[#1a1a1c] focus:outline-none focus:border-[#1a1a1c]"
                />
              </div>
            </div>

            {/* 3. Dimension Schedule Builder */}
            <div className="p-4 rounded-sm bg-white border border-[rgba(26,26,28,0.12)] space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs mono font-bold text-[#1a1a1c] uppercase tracking-wider">
                    Engineering Dimensions Schedule ({dimensions.length})
                  </h3>
                  <span className="text-[11px] text-[#1a1a1c]/60">
                    Add critical dimensions to be represented on the technical diagram
                  </span>
                </div>
              </div>

              {/* Dimensions Table */}
              <div className="space-y-1.5 max-h-44 overflow-y-auto pr-1">
                {dimensions.map((dim, idx) => (
                  <div 
                    key={idx}
                    className="p-2.5 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.1)] flex items-center justify-between text-xs"
                  >
                    <div className="space-y-0.5">
                      <div className="font-bold text-[#1a1a1c]">{dim.label}</div>
                      <div className="mono text-[11px] text-[#1a1a1c]/70">
                        Nominal: <strong className="text-[#1a1a1c]">{dim.nominal} mm</strong> &bull; Tolerance: <span className="text-[#c52222] font-bold">{dim.tolerance}</span> &bull; {dim.note}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] mono font-bold px-2 py-0.5 rounded-sm ${
                        dim.criticality === 'Critical (CTQ)' ? 'bg-[rgba(197,34,34,0.1)] text-[#c52222] border border-[#c52222]' : 'bg-white text-[#1a1a1c]/70 border border-[rgba(26,26,28,0.15)]'
                      }`}>
                        {dim.criticality}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleRemoveDimension(idx)}
                        className="text-[#1a1a1c]/40 hover:text-[#c52222] p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add New Dimension Input Row */}
              <div className="pt-2 border-t border-[rgba(26,26,28,0.08)] grid grid-cols-1 sm:grid-cols-12 gap-2 items-end">
                <div className="sm:col-span-5">
                  <label className="block text-[10px] mono text-[#1a1a1c]/60 mb-1">Dimension Label</label>
                  <input 
                    type="text"
                    placeholder="e.g. Bore Diameter ØD, Pitch P1"
                    value={newDimLabel}
                    onChange={(e) => setNewDimLabel(e.target.value)}
                    className="w-full bg-[#f2efeb] border border-[rgba(26,26,28,0.15)] rounded-sm px-2.5 py-1.5 text-xs text-[#1a1a1c]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[10px] mono text-[#1a1a1c]/60 mb-1">Nominal (mm)</label>
                  <input 
                    type="number"
                    step="0.001"
                    placeholder="12.000"
                    value={newDimNominal}
                    onChange={(e) => setNewDimNominal(e.target.value)}
                    className="w-full bg-[#f2efeb] border border-[rgba(26,26,28,0.15)] rounded-sm px-2.5 py-1.5 text-xs mono text-[#1a1a1c]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[10px] mono text-[#1a1a1c]/60 mb-1">Tolerance</label>
                  <input 
                    type="text"
                    placeholder="±0.005 mm"
                    value={newDimTolerance}
                    onChange={(e) => setNewDimTolerance(e.target.value)}
                    className="w-full bg-[#f2efeb] border border-[rgba(26,26,28,0.15)] rounded-sm px-2.5 py-1.5 text-xs mono text-[#1a1a1c]"
                  />
                </div>

                <div className="sm:col-span-3 flex gap-2">
                  <select
                    value={newDimCriticality}
                    onChange={(e) => setNewDimCriticality(e.target.value as any)}
                    className="bg-[#f2efeb] border border-[rgba(26,26,28,0.15)] rounded-sm px-2 py-1.5 text-[11px] text-[#1a1a1c] flex-1 mono font-bold"
                  >
                    <option value="Critical (CTQ)">CTQ</option>
                    <option value="Major">Major</option>
                    <option value="Standard">Standard</option>
                  </select>

                  <button
                    type="button"
                    onClick={handleAddDimension}
                    className="btn !py-1.5 !px-3 !text-xs shrink-0 bg-white"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>
                </div>
              </div>

            </div>

            {/* 4. Drawing File Upload Area */}
            <div>
              <label className="block mono font-bold uppercase text-[#1a1a1c] mb-1">
                Upload CAD Blueprint or 2D Drawing (.PDF, .DXF, .DWG, .STEP, .PNG)
              </label>
              <div className="border border-dashed border-[rgba(26,26,28,0.25)] rounded-sm p-4 text-center hover:border-[#1a1a1c] transition-colors bg-white relative">
                <input 
                  type="file"
                  onChange={handleFileDrop}
                  accept=".pdf,.dxf,.dwg,.step,.stp,.iges,.png,.jpg,.jpeg"
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <div className="flex flex-col items-center justify-center space-y-1.5">
                  <UploadCloud className="w-6 h-6 text-[#c52222]" />
                  <div className="text-xs text-[#1a1a1c]">
                    {fileName ? (
                      <span className="mono text-[#c52222] font-bold">{fileName}</span>
                    ) : (
                      <>Drag &amp; drop engineering drawing file here or <span className="underline font-bold">browse computer</span></>
                    )}
                  </div>
                  <span className="text-[10px] text-[#1a1a1c]/60 mono">
                    Supported: STEP, IGES, DXF, DWG, PDF blueprints up to 50MB
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 border-t border-[rgba(26,26,28,0.1)] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] mono text-[#1a1a1c]/60">
                Data secured with Tier-1 OEM NDA protocols
              </span>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="btn !text-xs !py-2.5 !px-4"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="btn btn-primary !text-xs !py-2.5 !px-5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Register Child Part Drawing</span>
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
