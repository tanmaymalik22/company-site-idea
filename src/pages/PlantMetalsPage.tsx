import React, { useState } from 'react';
import { 
  Layers, 
  RotateCw, 
  Scissors, 
  Search, 
  Wrench, 
  Check, 
  ShieldCheck, 
  CheckCircle2, 
  Sliders, 
  Cpu, 
  ArrowRight,
  Gauge,
  Lock,
  Download,
  Info
} from 'lucide-react';
import { 
  PLANT_METALS_LIST, 
  RAW_METALS_SUMMARY, 
  COMPANY_INFO,
  COIL_HANDLING_MACHINERY
} from '../data/companyData';
import { PageId, PageTopic } from '../types';
import { MiniTopicIndex } from '../components/MiniTopicIndex';

interface PlantMetalsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenContactModal: (subject?: string) => void;
}

export const PlantMetalsPage: React.FC<PlantMetalsPageProps> = ({
  onNavigate,
  onOpenContactModal
}) => {
  const [metalSearchQuery, setMetalSearchQuery] = useState<string>('');
  const [metalCategoryFilter, setMetalCategoryFilter] = useState<string>('All');
  const [metalFormFilter, setMetalFormFilter] = useState<'All' | 'Rolls (Coils)' | 'Sheets (Cut Sheets / Blanks)'>('All');
  const [activeViewTab, setActiveViewTab] = useState<'all' | 'rolls' | 'sheets' | 'matrix' | 'quality'>('all');

  // Topics for Mini Topic Index on Plant Metals Page
  const metalsTopics: PageTopic[] = [
    { id: 'topic-metals-hero', label: 'Metals Overview & Capacity', shortLabel: 'Overview', badge: '650+ T/Mo', category: 'Raw Materials Volume' },
    { id: 'topic-roll-line', label: 'Metals in Form of Rolls (Coils)', shortLabel: 'Rolls & Coils Line', badge: '15-650mm', category: 'Decoiler & Straightener' },
    { id: 'topic-sheet-line', label: 'Metals in Form of Sheets (Blanks)', shortLabel: 'Sheets & Blanks', badge: 'Up to 2.5m', category: 'Hydraulic Shearing & Bed' },
    { id: 'topic-metals-catalog', label: '8 Stamping Metals Catalog', shortLabel: 'Metals Catalog', badge: '8 Grades', category: 'Detailed Specs & Dimensions' },
    { id: 'topic-die-compatibility', label: 'Die Compatibility & Child Parts Matrix', shortLabel: 'Die & Parts Matrix', badge: 'Die Uses', category: 'Progressive, Compound, Deep Draw' },
    { id: 'topic-metals-quality', label: 'Quality & Traceability Protocols', shortLabel: 'Quality & Testing', badge: 'IATF 16949', category: 'MTC 3.1 & Spectrometry' }
  ];

  // Filter Plant Metals
  const filteredMetals = PLANT_METALS_LIST.filter(metal => {
    const matchesSearch = 
      metal.metalName.toLowerCase().includes(metalSearchQuery.toLowerCase()) ||
      metal.metalCategory.toLowerCase().includes(metalSearchQuery.toLowerCase()) ||
      metal.standardGrades.some(g => g.toLowerCase().includes(metalSearchQuery.toLowerCase())) ||
      metal.compatibleDieTypes.some(d => d.toLowerCase().includes(metalSearchQuery.toLowerCase())) ||
      metal.createdPartPieces.some(p => p.toLowerCase().includes(metalSearchQuery.toLowerCase())) ||
      (metal.rollSpecs && (
        metal.rollSpecs.thicknessRange.toLowerCase().includes(metalSearchQuery.toLowerCase()) ||
        metal.rollSpecs.widthRange.toLowerCase().includes(metalSearchQuery.toLowerCase())
      )) ||
      (metal.sheetSpecs && (
        metal.sheetSpecs.thicknessRange.toLowerCase().includes(metalSearchQuery.toLowerCase()) ||
        metal.sheetSpecs.maxSheetDimension.toLowerCase().includes(metalSearchQuery.toLowerCase())
      ));

    const matchesCategory = 
      metalCategoryFilter === 'All' ||
      metal.metalCategory.toLowerCase().includes(metalCategoryFilter.toLowerCase());

    const matchesForm = 
      metalFormFilter === 'All' ||
      metal.formType === metalFormFilter ||
      metal.formType === 'Both Rolls & Sheets';

    return matchesSearch && matchesCategory && matchesForm;
  });

  return (
    <div className="space-y-16 pb-24 bg-[#f2efeb] text-[#1a1a1c] relative">
      
      {/* Mini Topic Index on Side (clean square button without count badge) */}
      <MiniTopicIndex 
        topics={metalsTopics}
        pageTitle="Plant Metals Navigator"
      />

      {/* 1. Page Header Banner */}
      <section id="topic-metals-hero" className="bg-white border-b border-[rgba(26,26,28,0.08)] py-16 sm:py-20 relative overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          
          <div className="inline-flex items-center gap-2 mono text-xs text-[#c52222] font-bold px-3 py-1 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.12)]">
            <Layers className="w-3.5 h-3.5" />
            <span>Plant Raw Materials &bull; Coils (Rolls) &amp; Cut Sheets &bull; Die Uses</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#1a1a1c] tracking-tight">
            Metals Used in Plant
          </h1>

          <p className="text-[#1a1a1c]/70 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-sans">
            Comprehensive specifications of the metals processed across our single-unit automotive plant. Explore raw metals in the form of <strong>Rolls (Coils)</strong> for our motorized decoiler &amp; auto-straightener line, and <strong>Sheets (Cut Blanks)</strong> for hydraulic shears and press beds, calibrated for <strong>progressive, compound, and deep drawing dies</strong> producing precision automobile child parts.
          </p>

          {/* Quick Metrics Bar */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 max-w-5xl mx-auto text-left text-xs">
            <div className="p-3.5 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.12)]">
              <span className="mono text-[10px] text-[#c52222] font-bold uppercase block">Monthly Volume</span>
              <span className="font-serif font-bold text-xl text-[#1a1a1c]">650+ Tons</span>
              <span className="text-[11px] text-[#1a1a1c]/60 mono block">Automotive Stamping</span>
            </div>
            <div className="p-3.5 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.12)]">
              <span className="mono text-[10px] text-[#c52222] font-bold uppercase block">Material Formats</span>
              <span className="font-serif font-bold text-xl text-[#1a1a1c]">Rolls &amp; Sheets</span>
              <span className="text-[11px] text-[#1a1a1c]/60 mono block">Coils + Flat Blanks</span>
            </div>
            <div className="p-3.5 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.12)]">
              <span className="mono text-[10px] text-[#c52222] font-bold uppercase block">Thickness Range</span>
              <span className="font-serif font-bold text-xl text-[#c52222]">0.20 &ndash; 8.00 mm</span>
              <span className="text-[11px] text-[#1a1a1c]/60 mono block">Thin Foil to Heavy Plate</span>
            </div>
            <div className="p-3.5 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.12)]">
              <span className="mono text-[10px] text-[#c52222] font-bold uppercase block">Decoiler Matching</span>
              <span className="font-serif font-bold text-xl text-[#1a1a1c]">650mm / 3.0T</span>
              <span className="text-[11px] text-[#1a1a1c]/60 mono block">Max Coil Width &amp; Weight</span>
            </div>
            <div className="p-3.5 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.12)] col-span-2 sm:col-span-1">
              <span className="mono text-[10px] text-[#c52222] font-bold uppercase block">Core Metals Handled</span>
              <span className="font-serif font-bold text-xl text-[#1a1a1c]">8 Metal Grades</span>
              <span className="text-[11px] text-[#1a1a1c]/60 mono block">CRCA, HRPO, SS, DP600</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Format Deep-Dive: Rolls Line vs. Sheets Line */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Rolls (Coils) Overview Card */}
          <div id="topic-roll-line" className="arch-card p-6 sm:p-7 bg-white border border-[#1a1a1c] text-[#1a1a1c] rounded-sm space-y-4 shadow-md scroll-mt-24">
            <div className="flex items-center justify-between border-b border-[rgba(26,26,28,0.1)] pb-3">
              <div className="flex items-center gap-2">
                <RotateCw className="w-5 h-5 text-[#c52222]" />
                <h2 className="font-serif font-bold text-2xl text-[#1a1a1c]">
                  1. Metals in Form of Rolls (Coils)
                </h2>
              </div>
              <span className="mono text-xs font-bold bg-[#c52222] text-white px-2.5 py-0.5 rounded-xs">
                Continuous Stamping
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#1a1a1c]/80 font-sans leading-relaxed">
              Metal coils and slit rolls are processed directly through our <strong className="text-[#1a1a1c]">3.0 Ton motorized decoiler, ultrasonic loop sensor, and 7/9-roll precision straightener line</strong>. Coils feed into high-speed progressive dies where multiple operations (piercing, coining, notching, bending, and blanking) occur synchronously at up to 150 strokes per minute.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs pt-1">
              <div className="p-3 rounded-xs bg-[#f2efeb] border border-[rgba(26,26,28,0.1)]">
                <span className="mono text-[10px] text-[#1a1a1c]/70 font-bold uppercase block">Coil Thickness</span>
                <span className="font-bold text-[#1a1a1c] text-base mono">0.20 &ndash; 4.50 mm</span>
              </div>
              <div className="p-3 rounded-xs bg-[#f2efeb] border border-[rgba(26,26,28,0.1)]">
                <span className="mono text-[10px] text-[#1a1a1c]/70 font-bold uppercase block">Coil Strip Width</span>
                <span className="font-bold text-[#1a1a1c] text-base mono">15 &ndash; 650 mm</span>
              </div>
              <div className="p-3 rounded-xs bg-[#f2efeb] border border-[rgba(26,26,28,0.1)]">
                <span className="mono text-[10px] text-[#1a1a1c]/70 font-bold uppercase block">Max Coil Weight</span>
                <span className="font-bold text-[#c52222] text-base mono">Up to 3,000 kg</span>
              </div>
              <div className="p-3 rounded-xs bg-[#f2efeb] border border-[rgba(26,26,28,0.1)]">
                <span className="mono text-[10px] text-[#1a1a1c]/70 font-bold uppercase block">Inner Diameter (ID)</span>
                <span className="font-bold text-[#1a1a1c] mono text-xs">400 / 508 mm</span>
              </div>
              <div className="p-3 rounded-xs bg-[#f2efeb] border border-[rgba(26,26,28,0.1)]">
                <span className="mono text-[10px] text-[#1a1a1c]/70 font-bold uppercase block">Outer Diameter (OD)</span>
                <span className="font-bold text-[#1a1a1c] mono text-xs">Up to 1,400 mm</span>
              </div>
              <div className="p-3 rounded-xs bg-[#f2efeb] border border-[rgba(26,26,28,0.1)]">
                <span className="mono text-[10px] text-[#1a1a1c]/70 font-bold uppercase block">Target Dies</span>
                <span className="font-bold text-[#1a1a1c] mono text-xs">Progressive Dies</span>
              </div>
            </div>

            <div className="p-3 rounded-xs bg-[#f2efeb] border border-[rgba(26,26,28,0.1)] text-xs text-[#1a1a1c]/85 font-sans">
              <strong className="text-[#1a1a1c]">Compatible Machine Lines:</strong> Presses #1 to #19 equipped with NC servo feeder, auto loop decoiler, and synchronized scrap strip recoiler (1.5T capacity).
            </div>
          </div>

          {/* Sheets (Cut Blanks) Overview Card */}
          <div id="topic-sheet-line" className="arch-card p-6 sm:p-7 bg-white border border-[#1a1a1c] text-[#1a1a1c] rounded-sm space-y-4 shadow-md scroll-mt-24">
            <div className="flex items-center justify-between border-b border-[rgba(26,26,28,0.1)] pb-3">
              <div className="flex items-center gap-2">
                <Scissors className="w-5 h-5 text-[#c52222]" />
                <h2 className="font-serif font-bold text-2xl text-[#1a1a1c]">
                  2. Metals in Form of Sheets (Blanks)
                </h2>
              </div>
              <span className="mono text-xs font-bold bg-[#1a1a1c] text-[#f2efeb] px-2.5 py-0.5 rounded-xs">
                Sheared &amp; Formed
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#1a1a1c]/70 font-sans leading-relaxed">
              Cut metal sheets and pre-sheared flat blanks are sheared on our programmable hydraulic guillotine shears and loaded into heavy-duty mechanical power presses. Ideal for <strong>heavy-gauge chassis gussets, deep drawn cups, structural plates, and high-force compound blank-and-pierce operations</strong> up to 250 Ton capacity.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs pt-1">
              <div className="p-3 rounded-xs bg-[#f2efeb]">
                <span className="mono text-[10px] text-[#1a1a1c]/60 uppercase block">Sheet Thickness</span>
                <span className="font-bold text-[#1a1a1c] text-base mono">0.50 &ndash; 8.00 mm</span>
              </div>
              <div className="p-3 rounded-xs bg-[#f2efeb]">
                <span className="mono text-[10px] text-[#1a1a1c]/60 uppercase block">Max Sheet Size</span>
                <span className="font-bold text-[#1a1a1c] text-base mono">1250 &times; 2500 mm</span>
              </div>
              <div className="p-3 rounded-xs bg-[#f2efeb]">
                <span className="mono text-[10px] text-[#1a1a1c]/60 uppercase block">Shearing Tolerance</span>
                <span className="font-bold text-[#c52222] text-base mono">&plusmn;0.15 mm</span>
              </div>
              <div className="p-3 rounded-xs bg-[#f2efeb]">
                <span className="mono text-[10px] text-[#1a1a1c]/60 uppercase block">Standard Mill Sizes</span>
                <span className="font-bold text-[#1a1a1c] mono text-xs">1000&times;2000, 1250&times;2500</span>
              </div>
              <div className="p-3 rounded-xs bg-[#f2efeb]">
                <span className="mono text-[10px] text-[#1a1a1c]/60 uppercase block">Custom Blanks</span>
                <span className="font-bold text-[#1a1a1c] mono text-xs">100&times;150 to 800&times;1200</span>
              </div>
              <div className="p-3 rounded-xs bg-[#f2efeb]">
                <span className="mono text-[10px] text-[#1a1a1c]/60 uppercase block">Target Dies</span>
                <span className="font-bold text-[#1a1a1c] mono text-xs">Deep Draw &amp; Compound</span>
              </div>
            </div>

            <div className="p-3 rounded-xs bg-[#f2efeb] text-xs text-[#1a1a1c]/80 font-sans">
              <strong className="text-[#1a1a1c]">Compatible Machine Lines:</strong> Presses #1 (250T), #2 (200T), #3 (160T), #4 (150T), #5 (130T), #6 (110T), #7 (100T) with hydraulic and pneumatic blank feeds.
            </div>
          </div>

        </div>
      </section>

      {/* 3. Filter & Search Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 rounded-sm bg-white border border-[rgba(26,26,28,0.12)] space-y-4 shadow-2xs">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-[#1a1a1c]/40 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by metal grade (SPCC, 304, DP600), part piece, die type, dimensions..."
                value={metalSearchQuery}
                onChange={(e) => setMetalSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-xs font-sans rounded-sm border border-[rgba(26,26,28,0.15)] focus:border-[#1a1a1c] focus:outline-hidden bg-[#faf9f6]"
              />
              {metalSearchQuery && (
                <button
                  onClick={() => setMetalSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#1a1a1c]/40 hover:text-[#1a1a1c]"
                >
                  &times;
                </button>
              )}
            </div>

            {/* Form Filter Dropdown */}
            <div className="md:col-span-3 flex items-center gap-1.5">
              <span className="mono text-[11px] text-[#1a1a1c]/60 shrink-0 font-bold">Form:</span>
              <select
                value={metalFormFilter}
                onChange={(e) => setMetalFormFilter(e.target.value as any)}
                className="w-full text-xs font-sans p-2 rounded-sm border border-[rgba(26,26,28,0.15)] bg-white focus:outline-hidden"
              >
                <option value="All">All Formats (Rolls &amp; Sheets)</option>
                <option value="Rolls (Coils)">Rolls (Coils) Line Only</option>
                <option value="Sheets (Cut Sheets / Blanks)">Sheets (Blanks) Line Only</option>
              </select>
            </div>

            {/* Category Filter Dropdown */}
            <div className="md:col-span-3 flex items-center gap-1.5">
              <span className="mono text-[11px] text-[#1a1a1c]/60 shrink-0 font-bold">Category:</span>
              <select
                value={metalCategoryFilter}
                onChange={(e) => setMetalCategoryFilter(e.target.value)}
                className="w-full text-xs font-sans p-2 rounded-sm border border-[rgba(26,26,28,0.15)] bg-white focus:outline-hidden"
              >
                <option value="All">All Metal Categories</option>
                <option value="Ferrous">Ferrous Stamping Steel</option>
                <option value="High-Strength">High-Strength &amp; Structural</option>
                <option value="Coated">Coated &amp; Corrosion-Resistant</option>
                <option value="Stainless">Stainless Steel</option>
                <option value="Non-Ferrous">Non-Ferrous (Alum / Copper / Brass)</option>
              </select>
            </div>
          </div>

          {/* Quick Filter Buttons & Results Count */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[rgba(26,26,28,0.06)]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mono text-[10px] text-[#1a1a1c]/60 uppercase font-bold">Format Quick Select:</span>
              {[
                { label: 'All Formats', val: 'All' },
                { label: 'Rolls (Coils / Slit Rolls)', val: 'Rolls (Coils)' },
                { label: 'Sheets (Cut Sheets & Blanks)', val: 'Sheets (Cut Sheets / Blanks)' }
              ].map(item => (
                <button
                  key={item.val}
                  onClick={() => setMetalFormFilter(item.val as any)}
                  className={`px-2.5 py-1 text-[11px] mono rounded-xs border transition-colors cursor-pointer ${
                    metalFormFilter === item.val
                      ? 'bg-[#1a1a1c] text-white border-[#1a1a1c] font-bold'
                      : 'bg-white text-[#1a1a1c]/70 hover:bg-[#f2efeb] border-[rgba(26,26,28,0.12)]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mono text-xs text-[#1a1a1c]/60">
              Showing <strong>{filteredMetals.length}</strong> of {PLANT_METALS_LIST.length} Stamping Metals
            </div>
          </div>

        </div>
      </section>

      {/* 4. Complete Metals Specification Cards */}
      <section id="topic-metals-catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 scroll-mt-24">
        <div className="border-b border-[rgba(26,26,28,0.1)] pb-3 flex items-center justify-between">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1a1a1c]">
            Plant Raw Metals Catalog &amp; Technical Dimensions
          </h2>
          <span className="mono text-xs font-bold text-[#c52222]">
            Detailed Engineering Specifications
          </span>
        </div>

        <div className="space-y-6">
          {filteredMetals.map((metal) => (
            <div 
              key={metal.id}
              className="arch-card p-6 sm:p-8 bg-white border border-[#1a1a1c] rounded-sm space-y-6 hover:shadow-md transition-shadow"
            >
              {/* Header Bar */}
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[rgba(26,26,28,0.1)] pb-4">
                <div className="space-y-1.5 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="mono text-[10px] text-[#c52222] font-bold uppercase bg-[#f2efeb] px-2.5 py-0.5 rounded-xs border border-[rgba(26,26,28,0.1)]">
                      {metal.metalCategory}
                    </span>
                    <span className={`mono text-[10px] px-2.5 py-0.5 rounded-xs font-bold border ${
                      metal.formType === 'Both Rolls & Sheets'
                        ? 'bg-[#1a1a1c] text-[#f2efeb] border-[#1a1a1c]'
                        : metal.formType === 'Rolls (Coils)'
                        ? 'bg-amber-100 text-amber-950 border-amber-300'
                        : 'bg-blue-100 text-blue-950 border-blue-300'
                    }`}>
                      Format: {metal.formType}
                    </span>
                    <span className="mono text-[10px] text-[#1a1a1c]/60">
                      Press Envelope: {metal.pressTonnageRange}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1a1a1c]">
                    {metal.metalName}
                  </h3>

                  {/* Standard Grades */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="mono text-[10px] text-[#1a1a1c]/50 uppercase font-bold">Standard Grades:</span>
                    {metal.standardGrades.map((grade, idx) => (
                      <span key={idx} className="mono text-[10px] bg-[#faf9f6] text-[#1a1a1c]/80 border border-[rgba(26,26,28,0.12)] px-2 py-0.5 rounded-xs">
                        {grade}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="mono text-[10px] text-[#1a1a1c]/50 uppercase block">Thickness Range</span>
                  <span className="mono text-sm font-bold text-[#c52222] block">
                    {metal.rollSpecs?.thicknessRange || metal.sheetSpecs?.thicknessRange}
                  </span>
                </div>
              </div>

              {/* Dual Dimensions Grid: Rolls (Coils) & Sheets (Blanks) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                
                {/* Panel A: Metal in Form of Rolls (Coils) */}
                {metal.rollSpecs ? (
                  <div className="p-4 sm:p-5 rounded-sm bg-[#faf9f6] text-[#1a1a1c] border border-[rgba(26,26,28,0.18)] space-y-3.5 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-[rgba(26,26,28,0.1)] pb-2">
                        <div className="flex items-center gap-2">
                          <RotateCw className="w-4 h-4 text-[#c52222]" />
                          <span className="mono text-xs font-bold uppercase tracking-wider text-[#1a1a1c]">
                            Metal in Form of Rolls (Coils)
                          </span>
                        </div>
                        <span className="text-[10px] mono bg-[#c52222] text-white px-2 py-0.5 rounded-xs font-bold">
                          Decoiler Line
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5 text-xs">
                        <div className="p-2.5 rounded-xs bg-white border border-[rgba(26,26,28,0.1)]">
                          <span className="mono text-[10px] text-[#1a1a1c]/70 uppercase font-bold block">Strip Thickness</span>
                          <span className="font-bold text-[#1a1a1c] text-sm mono">{metal.rollSpecs.thicknessRange}</span>
                        </div>
                        <div className="p-2.5 rounded-xs bg-white border border-[rgba(26,26,28,0.1)]">
                          <span className="mono text-[10px] text-[#1a1a1c]/70 uppercase font-bold block">Coil Width Range</span>
                          <span className="font-bold text-[#1a1a1c] text-sm mono">{metal.rollSpecs.widthRange}</span>
                        </div>
                        <div className="p-2.5 rounded-xs bg-white border border-[rgba(26,26,28,0.1)]">
                          <span className="mono text-[10px] text-[#1a1a1c]/70 uppercase font-bold block">Inner Diameter (ID)</span>
                          <span className="font-bold text-[#1a1a1c] text-xs mono">{metal.rollSpecs.innerDiameterID}</span>
                        </div>
                        <div className="p-2.5 rounded-xs bg-white border border-[rgba(26,26,28,0.1)]">
                          <span className="mono text-[10px] text-[#1a1a1c]/70 uppercase font-bold block">Outer Diameter (OD)</span>
                          <span className="font-bold text-[#1a1a1c] text-xs mono">{metal.rollSpecs.outerDiameterOD}</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xs bg-[#f2efeb] border border-[rgba(26,26,28,0.1)] flex items-center justify-between text-xs">
                        <span className="mono text-[11px] text-[#1a1a1c] font-bold">Max Coil Weight:</span>
                        <span className="mono font-bold text-[#c52222]">{metal.rollSpecs.maxCoilWeight}</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[rgba(26,26,28,0.1)] text-[11px] text-[#1a1a1c]/80 font-sans leading-relaxed">
                      <strong className="text-[#1a1a1c]">Uncoiling Setup:</strong> {metal.rollSpecs.uncoilingMethod}
                    </div>
                  </div>
                ) : (
                  <div className="p-5 rounded-sm bg-[#f2efeb] border border-dashed border-[rgba(26,26,28,0.2)] flex flex-col items-center justify-center text-center p-6 text-xs text-[#1a1a1c]/60">
                    <span className="mono font-bold">Not Standardly Processed in Coils</span>
                    <span className="text-[11px] mt-1">Processed exclusively as pre-cut flat sheet blanks for heavy forming.</span>
                  </div>
                )}

                {/* Panel B: Metal in Form of Sheets (Cut Sheets & Blanks) */}
                {metal.sheetSpecs ? (
                  <div className="p-4 sm:p-5 rounded-sm bg-[#f9f8f5] text-[#1a1a1c] border border-[rgba(26,26,28,0.15)] space-y-3.5 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-[rgba(26,26,28,0.1)] pb-2">
                        <div className="flex items-center gap-2">
                          <Layers className="w-4 h-4 text-[#c52222]" />
                          <span className="mono text-xs font-bold uppercase tracking-wider text-[#1a1a1c]">
                            Metal in Form of Sheets &amp; Blanks
                          </span>
                        </div>
                        <span className="text-[10px] mono bg-[#1a1a1c] text-[#f2efeb] px-2 py-0.5 rounded-xs font-bold">
                          Shear &amp; Bed Feed
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5 text-xs">
                        <div className="p-2.5 rounded-xs bg-white border border-[rgba(26,26,28,0.1)]">
                          <span className="mono text-[10px] text-[#1a1a1c]/60 uppercase block">Sheet Thickness</span>
                          <span className="font-bold text-[#1a1a1c] text-sm mono">{metal.sheetSpecs.thicknessRange}</span>
                        </div>
                        <div className="p-2.5 rounded-xs bg-white border border-[rgba(26,26,28,0.1)]">
                          <span className="mono text-[10px] text-[#1a1a1c]/60 uppercase block">Max Sheet Dimension</span>
                          <span className="font-bold text-[#1a1a1c] text-sm mono">{metal.sheetSpecs.maxSheetDimension}</span>
                        </div>
                        <div className="p-2.5 rounded-xs bg-white border border-[rgba(26,26,28,0.1)] col-span-2">
                          <span className="mono text-[10px] text-[#1a1a1c]/60 uppercase block">Standard Sheet Sizes Available</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {metal.sheetSpecs.standardSheetSizes.map((sz, i) => (
                              <span key={i} className="text-[11px] mono font-bold bg-[#f2efeb] px-1.5 py-0.5 rounded-xs border border-[rgba(26,26,28,0.08)]">
                                {sz}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xs bg-white border border-[rgba(26,26,28,0.1)] flex items-center justify-between text-xs">
                        <span className="mono text-[11px] text-[#1a1a1c]/70">Shearing Tolerance:</span>
                        <span className="mono font-bold text-[#c52222]">{metal.sheetSpecs.shearingTolerance}</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[rgba(26,26,28,0.1)] text-[11px] text-[#1a1a1c]/75 font-sans leading-relaxed">
                      <strong className="text-[#1a1a1c]">Blank Loading Setup:</strong> {metal.sheetSpecs.loadingMethod}
                    </div>
                  </div>
                ) : (
                  <div className="p-5 rounded-sm bg-[#f2efeb] border border-dashed border-[rgba(26,26,28,0.2)] flex flex-col items-center justify-center text-center p-6 text-xs text-[#1a1a1c]/60">
                    <span className="mono font-bold">Primarily Continuous Strip Feed (Rolls)</span>
                    <span className="text-[11px] mt-1">Supplied in continuous slit rolls directly into high-speed progressive dies.</span>
                  </div>
                )}

              </div>

              {/* Dies Compatibility & Target Press Capacities */}
              <div className="p-4 sm:p-5 rounded-sm bg-[#faf9f6] border border-[#1a1a1c]/80 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[rgba(26,26,28,0.1)] pb-2">
                  <div className="flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-[#c52222]" />
                    <span className="mono text-xs font-bold uppercase tracking-wider text-[#1a1a1c]">
                      Dies Used for Creating Part Pieces with This Metal
                    </span>
                  </div>
                  <span className="mono text-xs font-bold text-[#c52222]">
                    Press Range: {metal.pressTonnageRange}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Die Types */}
                  <div className="space-y-1.5">
                    <span className="mono text-[10px] text-[#1a1a1c]/60 uppercase font-bold block">
                      Compatible Die Categories:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {metal.compatibleDieTypes.map((dieType, idx) => (
                        <span key={idx} className="mono text-[11px] font-bold bg-white text-[#1a1a1c] border border-[#1a1a1c] px-2.5 py-1 rounded-xs shadow-2xs">
                          &bull; {dieType}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Automobile Part Pieces Created */}
                  <div className="space-y-1.5">
                    <span className="mono text-[10px] text-[#c52222] uppercase font-bold block">
                      Child Part Pieces Created in Plant:
                    </span>
                    <ul className="space-y-1 text-xs font-sans text-[#1a1a1c]/90">
                      {metal.createdPartPieces.map((part, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#c52222] shrink-0 mt-0.5" />
                          <span className="leading-tight">{part}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technical Specs & Metallurgical Quality Footer */}
              <div className="pt-3 border-t border-[rgba(26,26,28,0.1)] grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-2.5 rounded-xs bg-[#f2efeb]">
                  <span className="mono text-[10px] text-[#1a1a1c]/60 block uppercase font-bold">Mechanical Properties</span>
                  <div className="space-y-0.5 mt-1 font-sans text-[11px] text-[#1a1a1c]">
                    <div><strong>Tensile:</strong> {metal.keyMechanicalProperties.tensileStrength}</div>
                    <div><strong>Yield:</strong> {metal.keyMechanicalProperties.yieldStrength}</div>
                    <div><strong>Elongation:</strong> {metal.keyMechanicalProperties.elongation}</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xs bg-[#f2efeb]">
                  <span className="mono text-[10px] text-[#1a1a1c]/60 block uppercase font-bold">Surface Finish &amp; Coating</span>
                  <p className="mt-1 font-sans text-[11px] text-[#1a1a1c]/80 leading-relaxed">
                    {metal.surfaceFinish}
                  </p>
                </div>

                <div className="p-2.5 rounded-xs bg-[#f2efeb]">
                  <span className="mono text-[10px] text-[#1a1a1c]/60 block uppercase font-bold">Tooling &amp; Die Engineering Note</span>
                  <p className="mt-1 font-sans text-[11px] text-[#1a1a1c]/80 leading-relaxed">
                    {metal.applicationNotes}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 5. Comprehensive Metal & Die Compatibility Matrix Table */}
      <section id="topic-die-compatibility" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 scroll-mt-24">
        <div className="p-6 sm:p-8 bg-white border border-[#1a1a1c] rounded-sm space-y-5">
          <div className="border-b border-[rgba(26,26,28,0.1)] pb-3">
            <span className="mono text-xs text-[#c52222] font-bold uppercase">
              Cross-Reference Tooling Table
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1a1a1c] mt-0.5">
              Plant Metals to Dies &amp; Child Parts Compatibility Matrix
            </h2>
            <p className="text-xs text-[#1a1a1c]/70 font-sans mt-1">
              Summary matrix correlating raw metal material, input formats (rolls vs. sheets), compatible die types, target press capacities, and child part pieces stamped.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans border-collapse">
              <thead>
                <tr className="bg-[#1a1a1c] text-[#f2efeb] mono text-[10px] uppercase">
                  <th className="p-3">Metal Name</th>
                  <th className="p-3">Format</th>
                  <th className="p-3">Thickness Range</th>
                  <th className="p-3">Roll / Sheet Dimensions</th>
                  <th className="p-3">Compatible Die Types</th>
                  <th className="p-3">Target Presses</th>
                  <th className="p-3">Key Stamped Child Parts</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(26,26,28,0.1)]">
                {PLANT_METALS_LIST.map((metal, mIdx) => (
                  <tr key={metal.id} className={mIdx % 2 === 0 ? 'bg-white' : 'bg-[#faf9f6]'}>
                    <td className="p-3 font-bold text-[#1a1a1c]">
                      {metal.metalName}
                      <span className="block mono text-[9px] text-[#1a1a1c]/50 font-normal">
                        {metal.standardGrades[0]}
                      </span>
                    </td>
                    <td className="p-3 mono text-[11px]">
                      <span className={`px-2 py-0.5 rounded-xs font-bold ${
                        metal.formType === 'Both Rolls & Sheets'
                          ? 'bg-[#f2efeb] text-[#1a1a1c]'
                          : metal.formType === 'Rolls (Coils)'
                          ? 'bg-amber-100 text-amber-900'
                          : 'bg-blue-100 text-blue-900'
                      }`}>
                        {metal.formType}
                      </span>
                    </td>
                    <td className="p-3 mono font-bold text-[#c52222]">
                      {metal.rollSpecs?.thicknessRange || metal.sheetSpecs?.thicknessRange}
                    </td>
                    <td className="p-3 mono text-[11px] text-[#1a1a1c]/80">
                      {metal.rollSpecs && <div>Roll: {metal.rollSpecs.widthRange}</div>}
                      {metal.sheetSpecs && <div>Sheet: {metal.sheetSpecs.maxSheetDimension}</div>}
                    </td>
                    <td className="p-3">
                      <div className="space-y-0.5">
                        {metal.compatibleDieTypes.slice(0, 2).map((d, i) => (
                          <div key={i} className="text-[11px] text-[#1a1a1c]/80">&bull; {d}</div>
                        ))}
                      </div>
                    </td>
                    <td className="p-3 mono text-[11px] font-bold">
                      {metal.pressTonnageRange}
                    </td>
                    <td className="p-3 text-[11px] text-[#1a1a1c]/80">
                      {metal.createdPartPieces[0]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Incoming Raw Material Inspection & Testing Protocol */}
      <section id="topic-metals-quality" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="p-6 sm:p-8 bg-white border border-[#1a1a1c] rounded-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[rgba(26,26,28,0.1)] pb-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
              <h2 className="font-serif font-bold text-2xl text-[#1a1a1c]">
                Incoming Raw Material Quality &amp; Dimensional Inspection Protocol
              </h2>
            </div>
            <span className="mono text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-sm border border-emerald-200">
              IATF 16949:2016 Compliant &bull; 100% Traceability
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#1a1a1c]/80 font-sans leading-relaxed">
            Every master metal roll (coil) and sheared sheet delivery undergoes rigorous incoming dimensional and metallurgical inspection prior to stamping in accordance with automotive quality benchmarks:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
            {RAW_METALS_SUMMARY.testingAndQuality.map((test, tIdx) => (
              <div key={tIdx} className="p-3.5 rounded-xs bg-[#faf9f6] border border-[rgba(26,26,28,0.1)] flex items-start gap-2.5 text-xs">
                <CheckCircle2 className="w-4 h-4 text-[#c52222] shrink-0 mt-0.5" />
                <span className="text-[#1a1a1c]/90 font-sans leading-tight font-medium">{test}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[rgba(26,26,28,0.08)] flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs font-sans text-[#1a1a1c]/70">
              Need specific material certifications or custom strip slit tolerances for your dies?
            </span>
            <button
              onClick={() => onOpenContactModal('Inquiry on Raw Metal Specifications for Tooling')}
              className="btn btn-primary !py-2 !px-4 text-xs shrink-0 whitespace-nowrap"
            >
              Inquire Material Specifications
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
