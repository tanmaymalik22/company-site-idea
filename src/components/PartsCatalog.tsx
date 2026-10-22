import React, { useState, useMemo } from 'react';
import { CHILD_PARTS, ChildPart } from '../data/partsData';
import { 
  Search, 
  Filter, 
  Download, 
  FileCheck, 
  ShieldAlert, 
  Layers, 
  CheckCircle2, 
  ChevronRight,
  Sparkles,
  ArrowUpDown,
  FileSpreadsheet
} from 'lucide-react';

interface PartsCatalogProps {
  onOpenRFQModal: (partId?: string) => void;
  onOpenEmergencyModal: (partId?: string) => void;
}

export const PartsCatalog: React.FC<PartsCatalogProps> = ({
  onOpenRFQModal,
  onOpenEmergencyModal
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProcess, setSelectedProcess] = useState<string>('All');
  const [viewDetailPart, setViewDetailPart] = useState<ChildPart | null>(null);
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const categories = [
    'All',
    'Body & Closures',
    'Braking & Chassis',
    'Powertrain & EV',
    'Steering & Drivetrain',
    'Interior & Safety'
  ];

  const processes = [
    'All',
    'High-Speed Progressive Stamping',
    'Swiss CNC Turning',
    'Fine Blanking',
    'Cold Heading & Thread Rolling',
    'Engineered Overmolding'
  ];

  const filteredParts = useMemo(() => {
    return CHILD_PARTS.filter((part) => {
      const matchesSearch = 
        part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        part.partNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        part.material.toLowerCase().includes(searchTerm.toLowerCase()) ||
        part.parentAssembly.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || part.category === selectedCategory;
      const matchesProcess = selectedProcess === 'All' || part.process === selectedProcess;

      return matchesSearch && matchesCategory && matchesProcess;
    });
  }, [searchTerm, selectedCategory, selectedProcess]);

  const handleDownloadCAD = (part: ChildPart) => {
    setDownloadNotice(`Generating STEP / IGES package for ${part.partNumber}...`);
    setTimeout(() => {
      setDownloadNotice(`CAD Package for ${part.partNumber} downloaded successfully (3D STEP + 2D PDF).`);
      setTimeout(() => setDownloadNotice(null), 3500);
    }, 1200);
  };

  return (
    <section id="catalog" className="py-20 bg-slate-900/40 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Engineered Component Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Automotive Child Parts Directory
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl">
              Engineered child components manufactured to IATF 16949 tolerances. Search by part code, parent assembly, or process specification.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="text-white font-semibold">{filteredParts.length}</span> of {CHILD_PARTS.length} Specifications Loaded
          </div>
        </div>

        {/* Download notification banner if active */}
        {downloadNotice && (
          <div className="mb-6 p-3 rounded-lg bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs flex items-center justify-between animate-fadeIn">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{downloadNotice}</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-300">Ready for SolidWorks / CATIA</span>
          </div>
        )}

        {/* Search & Filter Toolbar */}
        <div className="bg-slate-950 rounded-xl border border-slate-800 p-4 mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by part number, name, material, or parent assembly..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Subsystem Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-amber-400 cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'All' ? 'All Subsystems' : cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Process Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedProcess}
                onChange={(e) => setSelectedProcess(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-amber-400 cursor-pointer"
              >
                {processes.map((proc) => (
                  <option key={proc} value={proc}>
                    {proc === 'All' ? 'All Manufacturing Processes' : proc}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Quick Category Tabs for rapid browsing */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-2 border-t border-slate-900 text-xs">
            <span className="text-slate-500 text-[11px] font-mono mr-2 shrink-0">Subsystem:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded text-xs transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-amber-500/20 text-amber-300 font-medium border border-amber-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Parts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredParts.map((part) => (
            <div
              key={part.id}
              className="rounded-xl bg-slate-950 border border-slate-800/90 hover:border-slate-700 transition-all p-5 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                
                {/* Part Header */}
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-0.5">
                    <span className="font-mono text-xs font-bold text-amber-400">
                      {part.partNumber}
                    </span>
                    <div className="text-[11px] text-slate-400 font-medium">
                      {part.category}
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[10px] font-mono border border-slate-800">
                    {part.ppapLevel}
                  </span>
                </div>

                {/* Part Name */}
                <h3 className="text-base font-semibold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {part.name}
                </h3>

                {/* Parent Assembly Anchor */}
                <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-850 text-xs text-slate-300">
                  <span className="text-[10px] text-slate-500 font-mono block uppercase">Parent Assembly Integration</span>
                  <span className="font-medium text-slate-200 text-[11px]">{part.parentAssembly}</span>
                </div>

                {/* Key Engineering Attributes */}
                <div className="space-y-1.5 text-xs pt-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-500">Material:</span>
                    <span className="text-slate-300 font-mono truncate max-w-[170px]">{part.material}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-500">Tolerance:</span>
                    <span className="text-amber-400 font-mono font-semibold">{part.tolerance}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-500">Process:</span>
                    <span className="text-slate-300 truncate max-w-[170px]">{part.process}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] pt-1 border-t border-slate-900">
                    <span className="text-slate-500">Emergency Buffer Stock:</span>
                    <span className="text-emerald-400 font-mono font-bold">
                      {part.emergencyBufferUnits.toLocaleString()} pcs
                    </span>
                  </div>
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="mt-5 pt-4 border-t border-slate-900 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setViewDetailPart(part)}
                    className="py-1.5 px-2 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-medium transition-colors text-center"
                  >
                    Tech Specs
                  </button>
                  <button
                    onClick={() => handleDownloadCAD(part)}
                    className="py-1.5 px-2 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-medium transition-colors flex items-center justify-center gap-1"
                    title="Download STEP 3D CAD & Drawing"
                  >
                    <Download className="w-3 h-3 text-amber-400" />
                    <span>CAD 3D</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onOpenRFQModal(part.id)}
                    className="flex-1 py-2 px-3 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <FileCheck className="w-3.5 h-3.5 text-slate-950" />
                    <span>Request Sample / RFQ</span>
                  </button>

                  <button
                    onClick={() => onOpenEmergencyModal(part.id)}
                    className="p-2 rounded bg-red-950/40 hover:bg-red-900/60 border border-red-500/40 text-red-300 transition-colors"
                    title="Line-Down Emergency Supply Request"
                  >
                    <ShieldAlert className="w-4 h-4 text-red-400" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredParts.length === 0 && (
          <div className="text-center py-16 bg-slate-950 rounded-xl border border-slate-800">
            <p className="text-slate-400 text-sm">No child parts found matching your filter criteria.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); setSelectedProcess('All'); }}
              className="mt-3 text-xs text-amber-400 hover:underline"
            >
              Reset all filters
            </button>
          </div>
        )}

      </div>

      {/* Tech Spec Drawer / Modal */}
      {viewDetailPart && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative space-y-5 animate-scaleUp">
            
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="font-mono text-xs text-amber-400 font-bold">{viewDetailPart.partNumber}</span>
                <h3 className="text-xl font-display font-bold text-white mt-0.5">{viewDetailPart.name}</h3>
                <span className="text-xs text-slate-400">{viewDetailPart.parentAssembly}</span>
              </div>
              <button
                onClick={() => setViewDetailPart(null)}
                className="text-slate-400 hover:text-white p-1 rounded-md text-lg"
              >
                &times;
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-300">
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-500 uppercase font-bold mb-1">Assembly Function</div>
                <p className="text-slate-200 leading-relaxed">{viewDetailPart.criticalFunction}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-2.5 rounded bg-slate-900 border border-slate-850">
                  <div className="text-[10px] font-mono text-slate-500">Material Composition</div>
                  <div className="font-semibold text-white mt-0.5">{viewDetailPart.material}</div>
                </div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-850">
                  <div className="text-[10px] font-mono text-slate-500">Production Process</div>
                  <div className="font-semibold text-white mt-0.5">{viewDetailPart.process}</div>
                </div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-850">
                  <div className="text-[10px] font-mono text-slate-500">Tolerancing Standard</div>
                  <div className="font-mono text-amber-400 font-bold mt-0.5">{viewDetailPart.tolerance}</div>
                </div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-850">
                  <div className="text-[10px] font-mono text-slate-500">Surface Finish</div>
                  <div className="font-semibold text-white mt-0.5">{viewDetailPart.surfaceFinish}</div>
                </div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-850">
                  <div className="text-[10px] font-mono text-slate-500">Annual Serial Capacity</div>
                  <div className="font-mono text-emerald-400 font-bold mt-0.5">{viewDetailPart.annualCapacity}</div>
                </div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-850">
                  <div className="text-[10px] font-mono text-slate-500">Quality Package</div>
                  <div className="font-mono text-slate-200 mt-0.5">{viewDetailPart.ppapLevel} + IMDS Submitted</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
              <button
                onClick={() => handleDownloadCAD(viewDetailPart)}
                className="py-2.5 px-4 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>Download STEP / PDF Drawings</span>
              </button>

              <button
                onClick={() => {
                  const id = viewDetailPart.id;
                  setViewDetailPart(null);
                  onOpenRFQModal(id);
                }}
                className="py-2.5 px-5 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-semibold"
              >
                Request Quotation &amp; Sample Kit
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
