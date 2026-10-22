import React, { useState } from 'react';
import { 
  Building2, 
  Wrench, 
  Cpu, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Microscope,
  Zap,
  Gauge,
  Sliders,
  Layers,
  FileText,
  Lock,
  ChevronRight,
  Search,
  RotateCw,
  Scissors,
  Check,
  Clock,
  Archive,
  PlayCircle,
  Wind
} from 'lucide-react';
import { 
  COMPANY_INFO, 
  POWER_PRESS_INVENTORY, 
  PRESS_SHOP_SUMMARY,
  PLANT_COMPRESSOR_FACILITY,
  COMPRESSOR_SUMMARY,
  DECOILER_INVENTORY,
  DECOILER_SUMMARY,
  STRAIGHTENER_FACILITY,
  STRAIGHTENER_SUMMARY,
  SURFACE_GRINDER_FACILITY,
  SURFACE_GRINDER_SUMMARY,
  DIES_INVENTORY_LIST,
  DIE_TYPES_CAPABILITY,
  COIL_HANDLING_MACHINERY,
  GRINDER_MACHINERY,
  DIMENSIONAL_MEASURING_INSTRUMENTS,
  DG_GENERATOR_FACILITY, 
  DG_FACILITY_SUMMARY,
  HIRE_TOOL_ROOM_FACILITIES,
  WORKING_FOR_COMPANIES,
  CONFIDENTIALITY_PRIVACY_NOTICE
} from '../data/companyData';
import { PageId, PageTopic } from '../types';
import { MiniTopicIndex } from '../components/MiniTopicIndex';

interface FacilityPageProps {
  onNavigate: (page: PageId) => void;
  onOpenContactModal: (subject?: string) => void;
}

export const FacilityPage: React.FC<FacilityPageProps> = ({
  onNavigate,
  onOpenContactModal
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'presses' | 'compressors' | 'decoilers' | 'straightener' | 'grinder' | 'dies-inventory' | 'dies' | 'coil' | 'grinders' | 'measuring' | 'dg' | 'toolroom' | 'workingfor'>('all');
  const [pressSearchQuery, setPressSearchQuery] = useState<string>('');
  const [selectedTonnageRange, setSelectedTonnageRange] = useState<string>('All');

  // Die inventory search & filter
  const [dieSearchQuery, setDieSearchQuery] = useState<string>('');
  const [dieStatusFilter, setDieStatusFilter] = useState<'All' | 'Active' | 'Available'>('All');

  // Topics for Mini Index & Top Menu
  const facilityTopics: PageTopic[] = [
    { id: 'topic-presses', label: '19 Power Presses Fleet (PP-1 to PP-19)', shortLabel: '19 Power Presses', badge: '5T-150T', category: 'Shut Height 6"-14", Stroke 1.5"-5"' },
    { id: 'topic-compressors', label: 'Plant Compressors (2 Units)', shortLabel: '2 Compressors', badge: '8.5-10 Bar', category: 'Pneumatic Clutch & Cushions' },
    { id: 'topic-decoilers', label: 'Plant Decoilers (5 Units: DC-1 to DC-5)', shortLabel: '5 Decoilers', badge: '0.5T-3.0T', category: 'Coil Uncoiling & Mandrel Pay-Off' },
    { id: 'topic-straightener', label: 'Precision Auto Straightener (1 Unit: ST-1)', shortLabel: '1 Straightener', badge: '0.3-3.5mm', category: '7-Roller Hardened Chrome Leveler' },
    { id: 'topic-grinder', label: 'Tool Room Surface Grinder (1 Unit: SG-1)', shortLabel: '1 Surface Grinder', badge: '0.001mm', category: 'Die Resurfacing & Punch Sharpening' },
    { id: 'topic-dies-inventory', label: '30 Dies Inventory (19 Active / 11 Standby)', shortLabel: '30 Dies Library', badge: '19 Active', category: '19 Active / 30 Available' },
    { id: 'topic-dies-types', label: 'Different Dies per Press Capacity', shortLabel: 'Die Types & Uses', badge: 'Tooling', category: 'Progressive, Drawing, Compound' },
    { id: 'topic-coil', label: 'Coil Handling Line & Feeders', shortLabel: 'Coil Automation', badge: '3.0T / 1.5T', category: 'Decoilers, Recoiler & NC Servo Feeder' },
    { id: 'topic-grinders', label: 'Tool Room Grinding Machinery Bay', shortLabel: 'Grinding Bay', badge: 'Complete', category: 'Surface & Tool & Cutter Grinders' },
    { id: 'topic-measuring', label: 'All Dimensional Measuring Tools', shortLabel: 'Dimensional Lab', badge: 'Complete', category: 'Calipers, Micrometers, Height Masters' },
    { id: 'topic-dg', label: '880 kVA DG Generator Power Backup', shortLabel: '880 kVA DG Genset', badge: '100% Uptime', category: 'Uninterrupted Stamping Operation' },
    { id: 'topic-toolroom', label: 'Hire Tool Room Facilities Format', shortLabel: 'Hire Tool Room', badge: 'Shift/Job', category: 'VMC, Wire EDM, Lathes' },
    { id: 'topic-workingfor', label: 'Working For (Companies Roster)', shortLabel: 'Working For', badge: 'NDA Safe', category: 'OEMs & Tier-1 Integrators' }
  ];

  // Filter 19 presses
  const filteredPresses = POWER_PRESS_INVENTORY.filter(press => {
    const q = pressSearchQuery.toLowerCase();
    const matchesSearch = 
      press.machineNo.toLowerCase().includes(q) ||
      press.pressName.toLowerCase().includes(q) ||
      press.tonnageLabel.toLowerCase().includes(q) ||
      press.shutHeight.toLowerCase().includes(q) ||
      press.strokeLength.toLowerCase().includes(q) ||
      press.dieTypesUsed.toLowerCase().includes(q) ||
      press.keyApplications.toLowerCase().includes(q) ||
      (press.activeDieName && press.activeDieName.toLowerCase().includes(q));

    const matchesRange = 
      selectedTonnageRange === 'All' ||
      (selectedTonnageRange === '150T Heavy' && press.tonnage === 150) ||
      (selectedTonnageRange === '30T - 50T Medium' && (press.tonnage === 30 || press.tonnage === 50)) ||
      (selectedTonnageRange === '20T' && press.tonnage === 20) ||
      (selectedTonnageRange === '10T' && press.tonnage === 10) ||
      (selectedTonnageRange === '5T Light' && press.tonnage === 5);

    return matchesSearch && matchesRange;
  });

  // Filter 30 dies
  const filteredDies = DIES_INVENTORY_LIST.filter(die => {
    const matchesSearch = 
      die.dieName.toLowerCase().includes(dieSearchQuery.toLowerCase()) ||
      die.dieType.toLowerCase().includes(dieSearchQuery.toLowerCase()) ||
      die.partProduced.toLowerCase().includes(dieSearchQuery.toLowerCase()) ||
      (die.assignedPress && die.assignedPress.toLowerCase().includes(dieSearchQuery.toLowerCase()));

    const matchesStatus = 
      dieStatusFilter === 'All' ||
      (dieStatusFilter === 'Active' && die.status.startsWith('Active')) ||
      (dieStatusFilter === 'Available' && die.status.startsWith('Available'));

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-20 pb-24 bg-[#f2efeb] text-[#1a1a1c] relative">
      
      {/* Mini Index on the Side (with Top Menu integration if too many topics) */}
      <MiniTopicIndex 
        topics={facilityTopics}
        pageTitle="Plant &amp; Machinery Topics"
      />

      {/* 1. Page Header Banner (Single Dedicated Plant Focus) */}
      <section className="bg-white border-b border-[rgba(26,26,28,0.08)] py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          
          <div className="inline-flex items-center gap-2 mono text-xs text-[#c52222] font-bold px-3 py-1 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.12)]">
            <Building2 className="w-3.5 h-3.5" />
            <span>Single Dedicated Plant &bull; 19 Presses (PP-1 to PP-19) &bull; 2 Compressors &bull; 5 Decoilers &bull; 1 Straightener &bull; 1 Surface Grinder</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#1a1a1c] tracking-tight">
            Automotive Press Shop &amp; Plant Equipment
          </h1>

          <p className="text-[#1a1a1c]/70 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-sans">
            We operate as a focused company with a <strong>single dedicated manufacturing plant</strong>. Our facility is equipped with <strong>19 power presses (Machine numbers PP-1 through PP-19 spanning 5T to 150T tonnage)</strong>, <strong>shut heights from 6" to 14"</strong>, <strong>stroke lengths / heights from 1 1/2" to 5"</strong>, <strong>2 industrial air compressor units</strong>, <strong>5 motorized decoilers (DC-1 to DC-5)</strong>, <strong>1 precision auto straightener (ST-1)</strong>, <strong>1 tool room surface grinder (SG-1)</strong>, 19 active production dies, 30 total dies available, complete dimensional measuring instruments, and 880 kVA DG generator power backup.
          </p>

          {/* Plant Fact Strip - 6 Strategic Units */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-6xl mx-auto text-left text-xs">
            <div className="p-3.5 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.12)]">
              <span className="mono text-[10px] text-[#c52222] font-bold uppercase block">Press Fleet</span>
              <span className="font-serif font-bold text-xl text-[#1a1a1c]">19 Presses</span>
              <span className="text-[11px] text-[#1a1a1c]/60 mono block">PP-1 to PP-19 &bull; 5T-150T</span>
            </div>
            <div className="p-3.5 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.12)]">
              <span className="mono text-[10px] text-cyan-800 font-bold uppercase block">Air Compressors</span>
              <span className="font-serif font-bold text-xl text-cyan-900">2 Units</span>
              <span className="text-[11px] text-[#1a1a1c]/60 mono block">8.5 - 10.0 Bar Supply</span>
            </div>
            <div className="p-3.5 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.12)]">
              <span className="mono text-[10px] text-indigo-800 font-bold uppercase block">Decoilers</span>
              <span className="font-serif font-bold text-xl text-indigo-900">5 Decoilers</span>
              <span className="text-[11px] text-[#1a1a1c]/60 mono block">DC-1 to DC-5 &bull; 0.5T-3.0T</span>
            </div>
            <div className="p-3.5 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.12)]">
              <span className="mono text-[10px] text-purple-800 font-bold uppercase block">Auto Straightener</span>
              <span className="font-serif font-bold text-xl text-purple-900">1 Unit</span>
              <span className="text-[11px] text-[#1a1a1c]/60 mono block">ST-1 &bull; 0.3 - 3.5 mm</span>
            </div>
            <div className="p-3.5 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.12)]">
              <span className="mono text-[10px] text-emerald-800 font-bold uppercase block">Surface Grinder</span>
              <span className="font-serif font-bold text-xl text-emerald-700">1 Grinder</span>
              <span className="text-[11px] text-[#1a1a1c]/60 mono block">SG-1 &bull; 0.001 mm Feed</span>
            </div>
            <div className="p-3.5 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.12)]">
              <span className="mono text-[10px] text-[#c52222] font-bold uppercase block">Total Dies</span>
              <span className="font-serif font-bold text-xl text-[#1a1a1c]">30 Dies Total</span>
              <span className="text-[11px] text-[#1a1a1c]/60 mono block">19 Active + 11 Standby</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Confidentiality Privacy Notice Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 sm:p-6 rounded-sm bg-white border border-[#1a1a1c] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-4xl">
            <div className="flex items-center gap-2">
              <span className="emergency-pill !py-0.5 !px-2.5 !text-[10px] flex items-center gap-1">
                <Lock className="w-3 h-3 text-white" />
                <span>OEM Product Privacy Notice</span>
              </span>
              <span className="mono text-xs font-bold text-[#1a1a1c]">{CONFIDENTIALITY_PRIVACY_NOTICE.badge}</span>
            </div>
            <p className="text-xs text-[#1a1a1c]/75 leading-relaxed font-sans">
              {CONFIDENTIALITY_PRIVACY_NOTICE.statement}
            </p>
          </div>
          <button
            onClick={() => onNavigate('drawings')}
            className="btn btn-primary !py-2 !px-4 text-xs shrink-0 whitespace-nowrap"
          >
            <span>View Parts Gallery &amp; Area</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </button>
        </div>
      </section>

      {/* 3. Facility Section Navigation Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[rgba(26,26,28,0.1)]">
          {[
            { id: 'all', label: 'All Plant Equipment' },
            { id: 'presses', label: '1. 19 Power Presses (PP-1 to PP-19 Specs)' },
            { id: 'compressors', label: '2. Plant Compressors (2 Units)' },
            { id: 'decoilers', label: '3. Plant Decoilers (5 Units: DC-1 to DC-5)' },
            { id: 'straightener', label: '4. Auto Straightener (1 Unit: ST-1)' },
            { id: 'grinder', label: '5. Surface Grinder (1 Unit: SG-1)' },
            { id: 'dies-inventory', label: '6. 30 Dies Available (19 Active / 11 Standby)' },
            { id: 'dies', label: '7. Different Dies per Press Capacity' },
            { id: 'coil', label: '8. Coil Handling Line & Feeders' },
            { id: 'grinders', label: '9. Tool Room Grinders & Cutters' },
            { id: 'measuring', label: '10. All Dimensional Measuring Tools' },
            { id: 'dg', label: '11. 880 kVA DG Generator Backup' },
            { id: 'toolroom', label: '12. Hire Tool Room Format' },
            { id: 'workingfor', label: '13. Working For (Companies)' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-2 text-xs mono uppercase tracking-wider whitespace-nowrap transition-all border ${
                activeTab === tab.id
                  ? 'bg-[#1a1a1c] text-[#f2efeb] border-[#1a1a1c] font-bold shadow-xs'
                  : 'bg-white text-[#1a1a1c]/70 hover:text-[#1a1a1c] hover:bg-[#f2efeb] border-[rgba(26,26,28,0.12)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* TOPIC 1: 19 POWER PRESSES (PP-1 to PP-19) SPECIFICATIONS  */}
      {/* ========================================================= */}
      {(activeTab === 'all' || activeTab === 'presses') && (
        <section id="topic-presses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[rgba(26,26,28,0.1)] pb-4">
            <div className="space-y-2">
              <span className="mono text-xs text-[#c52222] font-bold tracking-wider">
                Official Machine Specifications &bull; PP-1 through PP-19
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1c]">
                19 Power Presses Fleet (PP-1 to PP-19)
              </h2>
              <p className="text-xs sm:text-sm text-[#1a1a1c]/70 max-w-3xl font-sans">
                Below is our complete plant machinery roster: <strong>19 power press machines (PP-1 to PP-19)</strong> with exact <strong>weight in tonnage (5T to 150T)</strong>, <strong>shut height (6" to 14")</strong>, and <strong>stroke length / stroke height (1 1/2" to 5")</strong>, plus <strong>2 plant air compressors</strong>. Each press is paired with an active automotive production die.
              </p>
            </div>

            {/* Tonnage Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 shrink-0">
              {['All', '150T Heavy', '30T - 50T Medium', '20T', '10T', '5T Light'].map(range => (
                <button
                  key={range}
                  onClick={() => setSelectedTonnageRange(range)}
                  className={`px-3 py-1.5 text-[11px] mono uppercase rounded-xs border transition-all ${
                    selectedTonnageRange === range
                      ? 'bg-[#c52222] text-white border-[#c52222] font-bold'
                      : 'bg-white text-[#1a1a1c]/70 hover:bg-[#f2efeb] border-[rgba(26,26,28,0.15)]'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar for 19 Presses */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="relative max-w-md w-full">
              <Search className="w-4 h-4 text-[#1a1a1c]/40 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by M/c No (PP-1, PP-19...), tonnage, shut height, stroke length..."
                value={pressSearchQuery}
                onChange={(e) => setPressSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white border border-[rgba(26,26,28,0.15)] rounded-sm text-xs font-sans focus:outline-none focus:border-[#1a1a1c]"
              />
            </div>

            <div className="text-xs mono text-[#1a1a1c]/70 flex items-center gap-3">
              <span>Showing: <strong className="text-[#1a1a1c]">{filteredPresses.length}</strong> of 19 Power Presses</span>
              <span>&bull;</span>
              <span className="text-[#c52222] font-bold">+ 2 Air Compressors</span>
            </div>
          </div>

          {/* NEAT SPECIFICATION CARDS GRID */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="mono text-xs font-bold text-[#1a1a1c] uppercase tracking-wider">
                19 Power Press Equipment Specifications &amp; Live Die Pairings
              </span>
              <span className="mono text-[11px] text-[#1a1a1c]/60">
                {filteredPresses.length} Machine Units Displayed
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredPresses.map((press) => {
                const isHeavy = press.tonnage >= 50;
                const is30T = press.tonnage === 30;

                const mmShutHeight = 
                  press.shutHeight === '14"' ? '355.6 mm' :
                  press.shutHeight === '12"' ? '304.8 mm' :
                  press.shutHeight === '10"' ? '254.0 mm' :
                  press.shutHeight === '8"' ? '203.2 mm' : '152.4 mm';

                const mmStrokeLength = 
                  press.strokeLength === '5"' ? '127.0 mm' :
                  press.strokeLength === '4"' ? '101.6 mm' :
                  press.strokeLength === '3"' ? '76.2 mm' :
                  press.strokeLength === '2 1/2"' ? '63.5 mm' :
                  press.strokeLength === '2"' ? '50.8 mm' : '38.1 mm';

                return (
                  <div 
                    key={press.id}
                    className="arch-card p-5 sm:p-6 bg-white border border-[#1a1a1c] rounded-sm space-y-4 hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      {/* Top Bar with Press Number and Tonnage */}
                      <div className="flex items-start justify-between border-b border-[rgba(26,26,28,0.1)] pb-3">
                        <div>
                          <div className="flex items-center gap-1.5 mono text-[10px] text-[#c52222] font-bold uppercase tracking-wider">
                            <span>M/c No:</span>
                            <span className="px-1.5 py-0.5 bg-[#1a1a1c] text-[#f2efeb] rounded-xs font-bold">
                              {press.machineNo}
                            </span>
                            <span className="text-[#1a1a1c]/50">| S.No {press.pressNumber}</span>
                          </div>
                          <h3 className="text-xl font-serif font-bold text-[#1a1a1c] mt-0.5">
                            {press.pressName}
                          </h3>
                        </div>
                        <span className={`mono text-xs font-bold px-3 py-1 rounded-sm shrink-0 ${
                          isHeavy
                            ? 'bg-[#c52222] text-white'
                            : is30T
                              ? 'bg-[#1a1a1c] text-[#f2efeb]'
                              : press.tonnage === 20
                                ? 'bg-amber-100 text-amber-950 border border-amber-300'
                                : 'bg-[#1a1a1c] text-[#f2efeb]'
                        }`}>
                          {press.tonnageLabel}
                        </span>
                      </div>

                      {/* Press Specs Grid: Machine No, Tonnage, Shut Height, Stroke Length */}
                      <div className="grid grid-cols-2 gap-2 text-xs font-sans">
                        <div className="p-2.5 rounded-xs bg-[#f2efeb]">
                          <span className="mono text-[10px] text-[#1a1a1c]/60 block font-bold uppercase">Shut Height</span>
                          <span className="font-bold text-[#1a1a1c] mono text-sm">{press.shutHeight}</span>
                          <span className="mono text-[9px] text-[#1a1a1c]/50 block">{mmShutHeight}</span>
                        </div>
                        <div className="p-2.5 rounded-xs bg-[#f2efeb]">
                          <span className="mono text-[10px] text-[#c52222] block font-bold uppercase">Stock / Stroke Height</span>
                          <span className="font-bold text-[#c52222] mono text-sm">{press.strokeLength}</span>
                          <span className="mono text-[9px] text-[#1a1a1c]/50 block">{mmStrokeLength}</span>
                        </div>
                        <div className="p-2.5 rounded-xs bg-[#f2efeb]">
                          <span className="mono text-[10px] text-[#1a1a1c]/60 block font-bold uppercase">Bed Size</span>
                          <span className="font-bold text-[#1a1a1c] mono text-[11px]">{press.bedSize}</span>
                        </div>
                        <div className="p-2.5 rounded-xs bg-[#f2efeb]">
                          <span className="mono text-[10px] text-[#1a1a1c]/60 block font-bold uppercase">Speed (SPM)</span>
                          <span className="font-bold text-[#1a1a1c] mono text-[11px]">{press.strokesPerMinute}</span>
                        </div>
                      </div>

                      {/* Active Die Mounted Linkage */}
                      {press.activeDieName && (
                        <div className="p-2.5 rounded-sm bg-emerald-50 border border-emerald-200 text-xs space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="mono text-[10px] text-emerald-800 font-bold uppercase flex items-center gap-1">
                              <PlayCircle className="w-3 h-3 text-emerald-700" />
                              <span>Active Mounted Die:</span>
                            </span>
                            <span className="mono text-[9px] bg-emerald-600 text-white px-1.5 py-0.2 rounded-xs font-bold">
                              Live Production
                            </span>
                          </div>
                          <p className="font-bold text-emerald-950 leading-tight font-sans text-[11px]">
                            {press.activeDieName}
                          </p>
                        </div>
                      )}

                      {/* Dies Used with This Capacity */}
                      <div className="p-2.5 rounded-sm bg-[#faf9f6] border border-[rgba(26,26,28,0.1)] text-xs space-y-1">
                        <span className="mono text-[10px] text-[#c52222] font-bold uppercase block">
                          Die Tooling Architecture:
                        </span>
                        <p className="font-bold text-[#1a1a1c] leading-tight font-sans text-[11px]">
                          {press.dieTypesUsed}
                        </p>
                      </div>
                    </div>

                    {/* Automotive Child Parts Application */}
                    <div className="pt-2 border-t border-[rgba(26,26,28,0.08)] text-xs">
                      <span className="mono text-[10px] text-[#1a1a1c]/60 block font-bold mb-0.5">Automobile Parts Manufactured:</span>
                      <p className="text-[#1a1a1c]/80 leading-relaxed font-sans text-[11px]">{press.keyApplications}</p>
                    </div>
                  </div>
                );
              })}

              {/* S.No 20: Compressors = 2 Units (Included in identical neat card format) */}
              {(selectedTonnageRange === 'All' && (!pressSearchQuery || 'compressor'.includes(pressSearchQuery.toLowerCase()) || '20'.includes(pressSearchQuery))) && (
                <div className="arch-card p-5 sm:p-6 bg-[#f7fbfd] border-2 border-cyan-800/40 rounded-sm space-y-4 hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between border-b border-cyan-200 pb-3">
                      <div>
                        <div className="flex items-center gap-1.5 mono text-[10px] text-cyan-800 font-bold uppercase tracking-wider">
                          <span>M/c No:</span>
                          <span className="px-1.5 py-0.5 bg-cyan-900 text-white rounded-xs font-bold flex items-center gap-1">
                            <Wind className="w-3 h-3" />
                            Compressor
                          </span>
                          <span className="text-[#1a1a1c]/50">| S.No 20</span>
                        </div>
                        <h3 className="text-xl font-serif font-bold text-[#1a1a1c] mt-0.5">
                          Plant Air Compressors
                        </h3>
                      </div>
                      <span className="mono text-xs font-bold bg-cyan-900 text-white px-3 py-1 rounded-sm shrink-0">
                        = 2 Units
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs font-sans">
                      <div className="p-2.5 rounded-xs bg-white border border-cyan-100">
                        <span className="mono text-[10px] text-[#1a1a1c]/60 block font-bold uppercase">Working Pressure</span>
                        <span className="font-bold text-[#c52222] mono text-sm">8.5 - 10.0 Bar</span>
                        <span className="mono text-[9px] text-[#1a1a1c]/50 block">125 - 145 PSI</span>
                      </div>
                      <div className="p-2.5 rounded-xs bg-white border border-cyan-100">
                        <span className="mono text-[10px] text-cyan-900 block font-bold uppercase">Air Delivery</span>
                        <span className="font-bold text-cyan-900 mono text-sm">205 CFM</span>
                        <span className="mono text-[9px] text-[#1a1a1c]/50 block">Continuous Clean Air</span>
                      </div>
                      <div className="p-2.5 rounded-xs bg-white border border-cyan-100">
                        <span className="mono text-[10px] text-[#1a1a1c]/60 block font-bold uppercase">Drive Power</span>
                        <span className="font-bold text-[#1a1a1c] mono text-[11px]">30 HP + 20 HP</span>
                      </div>
                      <div className="p-2.5 rounded-xs bg-white border border-cyan-100">
                        <span className="mono text-[10px] text-[#1a1a1c]/60 block font-bold uppercase">Dual Receivers</span>
                        <span className="font-bold text-[#1a1a1c] mono text-[11px]">2,000L + 1,000L</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-sm bg-cyan-100/60 border border-cyan-200 text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="mono text-[10px] text-cyan-900 font-bold uppercase flex items-center gap-1">
                          <Wind className="w-3 h-3 text-cyan-700" />
                          <span>Pneumatic Station Status:</span>
                        </span>
                        <span className="mono text-[9px] bg-cyan-800 text-white px-1.5 py-0.2 rounded-xs font-bold">
                          Dual Synchronized
                        </span>
                      </div>
                      <p className="font-bold text-cyan-950 leading-tight font-sans text-[11px]">
                        Dual High-Pressure Industrial Rotary Screw Compressors
                      </p>
                    </div>

                    <div className="p-2.5 rounded-sm bg-white border border-[rgba(26,26,28,0.1)] text-xs space-y-1">
                      <span className="mono text-[10px] text-[#c52222] font-bold uppercase block">
                        Equipment Service:
                      </span>
                      <p className="font-bold text-[#1a1a1c] leading-tight font-sans text-[11px]">
                        Continuous dedicated air delivery to all 19 power press lines
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[rgba(26,26,28,0.08)] text-xs">
                    <span className="mono text-[10px] text-[#1a1a1c]/60 block font-bold mb-0.5">Automobile Press Shop Role:</span>
                    <p className="text-[#1a1a1c]/80 leading-relaxed font-sans text-[11px]">
                      Supplies regulated pneumatic pressure to all 19 power press pneumatic clutches, air counterbalances, in-die lifters, and scrap ejection nozzles.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

        </section>
      )}

      {/* ========================================================= */}
      {/* TOPIC 1b: PLANT COMPRESSORS (ITEM 20: COMPRESSOR = 2)     */}
      {/* ========================================================= */}
      {(activeTab === 'all' || activeTab === 'compressors') && (
        <section id="topic-compressors" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 scroll-mt-24">
          
          <div className="space-y-2 border-b border-[rgba(26,26,28,0.1)] pb-4">
            <span className="mono text-xs text-[#c52222] font-bold tracking-wider">
              Item #20 in Plant Machinery Register &bull; Compressor = 2 Units
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1c]">
              Industrial Air Compressors (2 Synchronized Units)
            </h2>
            <p className="text-xs sm:text-sm text-[#1a1a1c]/70 max-w-3xl font-sans">
              Continuous, pulsation-free compressed air is the lifeblood of automotive stamping presses. Our plant operates <strong>2 synchronized rotary screw compressors</strong> delivering 8.5 to 10.0 bar clean, moisture-separated air across the plant floor for press clutches, pneumatic counterbalance cylinders, in-die lifters, and robotic ejection nozzles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PLANT_COMPRESSOR_FACILITY.map((comp) => (
              <div 
                key={comp.id}
                className="arch-card p-6 bg-white border border-[#1a1a1c] rounded-sm space-y-4 hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-[rgba(26,26,28,0.1)] pb-2.5">
                    <div>
                      <span className="mono text-[10px] text-[#c52222] font-bold uppercase tracking-wider block">
                        Pneumatic Supply Station
                      </span>
                      <h3 className="text-xl font-serif font-bold text-[#1a1a1c]">
                        {comp.unitName}
                      </h3>
                    </div>
                    <span className="mono text-xs font-bold bg-[#1a1a1c] text-[#f2efeb] px-2.5 py-1 rounded-sm shrink-0">
                      1 Unit (Total 2)
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-sans">
                    <div className="p-2.5 rounded-xs bg-[#f2efeb]">
                      <span className="mono text-[10px] text-[#1a1a1c]/60 block">Working Pressure</span>
                      <span className="font-bold text-[#c52222] mono">{comp.pressureRating}</span>
                    </div>
                    <div className="p-2.5 rounded-xs bg-[#f2efeb]">
                      <span className="mono text-[10px] text-[#1a1a1c]/60 block">Air Delivery Rate</span>
                      <span className="font-bold text-[#1a1a1c] mono">{comp.flowCapacity}</span>
                    </div>
                    <div className="p-2.5 rounded-xs bg-[#f2efeb]">
                      <span className="mono text-[10px] text-[#1a1a1c]/60 block">Motor &amp; Drive</span>
                      <span className="font-bold text-[#1a1a1c]">{comp.motorPower}</span>
                    </div>
                    <div className="p-2.5 rounded-xs bg-[#f2efeb]">
                      <span className="mono text-[10px] text-[#1a1a1c]/60 block">Air Receiver Buffer</span>
                      <span className="font-bold text-[#1a1a1c] text-[11px]">{comp.airReceiverTank}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[rgba(26,26,28,0.08)] text-xs font-sans text-[#1a1a1c]/80">
                  <strong className="text-[#1a1a1c]">Stamping Plant Role:</strong> {comp.application}
                </div>
              </div>
            ))}
          </div>

          {/* Compressor Redundancy Strip */}
          <div className="p-4 rounded-sm bg-[#faf9f6] border border-[rgba(26,26,28,0.12)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              <span className="font-bold text-[#1a1a1c]">{COMPRESSOR_SUMMARY.redundancy}</span>
            </div>
            <span className="text-[#1a1a1c]/70">
              {COMPRESSOR_SUMMARY.combinedAirDelivery} &bull; {COMPRESSOR_SUMMARY.linePressure}
            </span>
          </div>

        </section>
      )}

      {/* ========================================================= */}
      {/* TOPIC 1d: PLANT DECOILERS (5 UNITS: DC-1 to DC-5)         */}
      {/* ========================================================= */}
      {(activeTab === 'all' || activeTab === 'decoilers') && (
        <section id="topic-decoilers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[rgba(26,26,28,0.1)] pb-4">
            <div className="space-y-2">
              <span className="mono text-xs text-[#c52222] font-bold tracking-wider">
                Coil Pay-off Automation &bull; 5 Units (DC-1 through DC-5)
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1c]">
                Plant Decoilers (5 Units: DC-1 to DC-5)
              </h2>
              <p className="text-xs sm:text-sm text-[#1a1a1c]/70 max-w-3xl font-sans">
                Our stamping lines are powered by <strong>5 dedicated motorized decoilers (DC-1 to DC-5)</strong> with capacities ranging from <strong>0.5 Ton to 3.0 Ton (500 kg to 3,000 kg coil weight)</strong> and strip widths from <strong>10 mm to 450 mm</strong>. Each unit is paired with specific press lines to maintain synchronized, scratch-free coil pay-off.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="mono text-xs font-bold px-3 py-1.5 rounded-sm bg-[#1a1a1c] text-[#f2efeb]">
                5 Decoilers Total
              </span>
            </div>
          </div>

          {/* 5 DECOILERS NEAT CARD GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DECOILER_INVENTORY.map((decoiler) => {
              const isHeavy = decoiler.tonnageLabel === '3.0T' || decoiler.tonnageLabel === '2.0T';

              return (
                <div 
                  key={decoiler.id}
                  className="arch-card p-5 sm:p-6 bg-white border border-[#1a1a1c] rounded-sm space-y-4 hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {/* Top Bar with Machine Number and Coil Capacity */}
                    <div className="flex items-start justify-between border-b border-[rgba(26,26,28,0.1)] pb-3">
                      <div>
                        <div className="flex items-center gap-1.5 mono text-[10px] text-[#c52222] font-bold uppercase tracking-wider">
                          <span>M/c No:</span>
                          <span className="px-1.5 py-0.5 bg-[#1a1a1c] text-[#f2efeb] rounded-xs font-bold">
                            {decoiler.machineNo}
                          </span>
                          <span className="text-[#1a1a1c]/50">| Decoiler #{decoiler.unitNumber} of 5</span>
                        </div>
                        <h3 className="text-lg font-serif font-bold text-[#1a1a1c] mt-0.5">
                          {decoiler.name}
                        </h3>
                      </div>
                      <span className={`mono text-xs font-bold px-2.5 py-1 rounded-sm shrink-0 ${
                        isHeavy 
                          ? 'bg-[#c52222] text-white' 
                          : 'bg-[#1a1a1c] text-[#f2efeb]'
                      }`}>
                        {decoiler.tonnageLabel} Coil
                      </span>
                    </div>

                    {/* Specifications Grid */}
                    <div className="grid grid-cols-2 gap-2 text-xs font-sans">
                      <div className="p-2.5 rounded-xs bg-[#f2efeb]">
                        <span className="mono text-[10px] text-[#1a1a1c]/60 block font-bold">Max Coil Weight:</span>
                        <span className="font-bold text-[#1a1a1c] text-xs">{decoiler.coilWeightCapacity}</span>
                      </div>
                      <div className="p-2.5 rounded-xs bg-[#f2efeb]">
                        <span className="mono text-[10px] text-[#1a1a1c]/60 block font-bold">Strip Width Range:</span>
                        <span className="font-bold text-[#1a1a1c] text-xs">{decoiler.stripWidthRange}</span>
                      </div>
                      <div className="p-2.5 rounded-xs bg-[#f2efeb]">
                        <span className="mono text-[10px] text-[#1a1a1c]/60 block font-bold">Sheet Thickness:</span>
                        <span className="font-bold text-[#c52222] text-xs">{decoiler.sheetThicknessRange}</span>
                      </div>
                      <div className="p-2.5 rounded-xs bg-[#f2efeb]">
                        <span className="mono text-[10px] text-[#1a1a1c]/60 block font-bold">Speed / Mandrel:</span>
                        <span className="font-bold text-[#1a1a1c] text-[11px] block">{decoiler.speedRange}</span>
                        <span className="text-[10px] text-[#1a1a1c]/60 mono block">{decoiler.mandrelExpansion}</span>
                      </div>
                    </div>

                    {/* Paired Stamping Press Line */}
                    <div className="p-2.5 rounded-xs bg-[#faf9f6] border border-[rgba(26,26,28,0.1)] text-xs font-sans space-y-1">
                      <span className="mono text-[10px] text-[#c52222] block font-bold uppercase">
                        Paired Stamping Press Line:
                      </span>
                      <span className="font-bold text-[#1a1a1c] text-xs leading-snug block">
                        {decoiler.pairedPressLine}
                      </span>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-1 text-xs text-[#1a1a1c]/80 pt-1">
                      {decoiler.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-1.5 text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[rgba(26,26,28,0.08)] text-xs font-sans text-[#1a1a1c]/80">
                    <strong className="text-[#1a1a1c]">Role:</strong> {decoiler.role}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Decoiler Summary Strip */}
          <div className="p-4 rounded-sm bg-[#faf9f6] border border-[rgba(26,26,28,0.12)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
              <span className="font-bold text-[#1a1a1c]">{DECOILER_SUMMARY.deployment}</span>
            </div>
            <span className="text-[#1a1a1c]/70">
              {DECOILER_SUMMARY.capacityRange} &bull; {DECOILER_SUMMARY.stripWidthRange} &bull; {DECOILER_SUMMARY.gaugeRange}
            </span>
          </div>

        </section>
      )}

      {/* ========================================================= */}
      {/* TOPIC 1e: PLANT AUTO STRAIGHTENER (1 UNIT: ST-1)          */}
      {/* ========================================================= */}
      {(activeTab === 'all' || activeTab === 'straightener') && (
        <section id="topic-straightener" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
          
          <div className="space-y-2 border-b border-[rgba(26,26,28,0.1)] pb-4">
            <span className="mono text-xs text-[#c52222] font-bold tracking-wider">
              Coil Leveling &amp; Stress Relief &bull; 1 Unit (ST-1)
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1c]">
              Precision Auto Straightener (1 Unit: ST-1)
            </h2>
            <p className="text-xs sm:text-sm text-[#1a1a1c]/70 max-w-3xl font-sans">
              Curvature, coil set, and residual winding stress cause part deformation and die jams if not leveled before stamping. Our plant operates <strong>1 precision auto straightener / coil leveler (ST-1)</strong> equipped with <strong>7 hardened chrome leveling rolls</strong> and <strong>dual micrometer dials (0.01 mm adjustment)</strong> to deliver dead-flat raw strip directly into progressive dies.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {STRAIGHTENER_FACILITY.map((str) => (
              <div 
                key={str.id}
                className="arch-card p-6 sm:p-8 bg-white border border-[#1a1a1c] rounded-sm space-y-5 hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between border-b border-[rgba(26,26,28,0.1)] pb-3">
                    <div>
                      <div className="flex items-center gap-1.5 mono text-[10px] text-[#c52222] font-bold uppercase tracking-wider">
                        <span>M/c No:</span>
                        <span className="px-1.5 py-0.5 bg-[#1a1a1c] text-[#f2efeb] rounded-xs font-bold">
                          {str.machineNo}
                        </span>
                        <span className="text-[#1a1a1c]/50">| Auto Straightener Unit #1 of 1</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1a1a1c] mt-0.5">
                        {str.name}
                      </h3>
                    </div>
                    <span className="mono text-xs font-bold px-3 py-1 rounded-sm shrink-0 bg-purple-100 text-purple-950 border border-purple-300">
                      {str.capacityBadge} Leveling
                    </span>
                  </div>

                  {/* Specifications Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-sans">
                    <div className="p-3 rounded-xs bg-[#f2efeb]">
                      <span className="mono text-[10px] text-[#1a1a1c]/60 block font-bold">Leveling Sheet Thickness:</span>
                      <span className="font-bold text-[#c52222] text-sm">{str.levelingCapacity}</span>
                    </div>
                    <div className="p-3 rounded-xs bg-[#f2efeb]">
                      <span className="mono text-[10px] text-[#1a1a1c]/60 block font-bold">Max Strip Width:</span>
                      <span className="font-bold text-[#1a1a1c] text-sm">{str.stripWidthCapacity}</span>
                    </div>
                    <div className="p-3 rounded-xs bg-[#f2efeb]">
                      <span className="mono text-[10px] text-[#1a1a1c]/60 block font-bold">Roll Configuration:</span>
                      <span className="font-bold text-[#1a1a1c] text-xs leading-snug">{str.rollerConfiguration}</span>
                    </div>
                    <div className="p-3 rounded-xs bg-[#f2efeb]">
                      <span className="mono text-[10px] text-[#1a1a1c]/60 block font-bold">Micrometer Accuracy:</span>
                      <span className="font-bold text-[#1a1a1c] text-xs leading-snug">{str.micrometerAdjustment}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xs bg-[#faf9f6] border border-[rgba(26,26,28,0.1)] text-xs font-sans space-y-1">
                    <span className="mono text-[10px] text-[#c52222] block font-bold uppercase">
                      Press Feeder &amp; Stamping Line Interface:
                    </span>
                    <span className="font-bold text-[#1a1a1c]">{str.syncInterface}</span>
                  </div>

                  <div className="space-y-1.5 text-xs text-[#1a1a1c]/80">
                    <span className="mono text-[10px] text-[#c52222] uppercase font-bold block">Key Architectural Features:</span>
                    {str.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c52222] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[rgba(26,26,28,0.08)] text-xs font-sans text-[#1a1a1c]/80">
                  <strong className="text-[#1a1a1c]">Stamping Role:</strong> {str.role}
                </div>
              </div>
            ))}
          </div>

          {/* Straightener Redundancy & Specs Strip */}
          <div className="p-4 rounded-sm bg-[#faf9f6] border border-[rgba(26,26,28,0.12)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
              <span className="font-bold text-[#1a1a1c]">{STRAIGHTENER_SUMMARY.role}</span>
            </div>
            <span className="text-[#1a1a1c]/70">
              {STRAIGHTENER_SUMMARY.levelingRange} &bull; {STRAIGHTENER_SUMMARY.rollArrangement} &bull; {STRAIGHTENER_SUMMARY.accuracy}
            </span>
          </div>

        </section>
      )}

      {/* ========================================================= */}
      {/* TOPIC 1f: TOOL ROOM SURFACE GRINDER (1 UNIT: SG-1)        */}
      {/* ========================================================= */}
      {(activeTab === 'all' || activeTab === 'grinder') && (
        <section id="topic-grinder" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
          
          <div className="space-y-2 border-b border-[rgba(26,26,28,0.1)] pb-4">
            <span className="mono text-xs text-[#c52222] font-bold tracking-wider">
              Tool &amp; Die Maintenance &bull; 0.001 mm Micro-Downfeed Resolution &bull; 1 Unit (SG-1)
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1c]">
              Precision Surface Grinder (1 Unit: SG-1)
            </h2>
            <p className="text-xs sm:text-sm text-[#1a1a1c]/70 max-w-3xl font-sans">
              Die cutting edge sharpness and bolster parallelism are essential for zero-burr automotive child part stampings. Our tool room operates <strong>1 primary high-precision hydraulic surface grinder (SG-1)</strong> featuring a <strong>600 x 300 mm fine-pole electro-permanent magnetic chuck</strong> and <strong>0.001 mm (1 micron) micro-downfeed resolution</strong> for re-grinding progressive die plates, punch blocks, strippers, and tungsten carbide/tool steel punches in-house.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {SURFACE_GRINDER_FACILITY.map((grind) => (
              <div 
                key={grind.id}
                className="arch-card p-6 sm:p-8 bg-white border border-[#1a1a1c] rounded-sm space-y-5 hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between border-b border-[rgba(26,26,28,0.1)] pb-3">
                    <div>
                      <div className="flex items-center gap-1.5 mono text-[10px] text-[#c52222] font-bold uppercase tracking-wider">
                        <span>M/c No:</span>
                        <span className="px-1.5 py-0.5 bg-[#1a1a1c] text-[#f2efeb] rounded-xs font-bold">
                          {grind.machineNo}
                        </span>
                        <span className="text-[#1a1a1c]/50">| Tool Room Surface Grinder #1 of 1</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1a1a1c] mt-0.5">
                        {grind.name}
                      </h3>
                    </div>
                    <span className="mono text-xs font-bold px-3 py-1 rounded-sm shrink-0 bg-emerald-100 text-emerald-950 border border-emerald-300">
                      {grind.accuracyBadge}
                    </span>
                  </div>

                  {/* Specifications Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-sans">
                    <div className="p-3 rounded-xs bg-[#f2efeb]">
                      <span className="mono text-[10px] text-[#1a1a1c]/60 block font-bold">Table Travel / Stroke:</span>
                      <span className="font-bold text-[#1a1a1c] text-xs leading-snug">{grind.tableSize}</span>
                    </div>
                    <div className="p-3 rounded-xs bg-[#f2efeb]">
                      <span className="mono text-[10px] text-[#1a1a1c]/60 block font-bold">Magnetic Chuck:</span>
                      <span className="font-bold text-[#1a1a1c] text-xs leading-snug">{grind.magneticChuckSize}</span>
                    </div>
                    <div className="p-3 rounded-xs bg-[#f2efeb]">
                      <span className="mono text-[10px] text-[#1a1a1c]/60 block font-bold">Micro-Downfeed Resolution:</span>
                      <span className="font-bold text-[#c52222] text-sm mono">{grind.accuracyDownfeed}</span>
                    </div>
                    <div className="p-3 rounded-xs bg-[#f2efeb]">
                      <span className="mono text-[10px] text-[#1a1a1c]/60 block font-bold">Spindle Speed:</span>
                      <span className="font-bold text-[#1a1a1c] text-xs mono">{grind.spindleSpeed}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xs bg-[#faf9f6] border border-[rgba(26,26,28,0.1)] text-xs font-sans space-y-1">
                    <span className="mono text-[10px] text-[#c52222] block font-bold uppercase">
                      Grinding Wheel Size &amp; Spindle Bearings:
                    </span>
                    <span className="font-bold text-[#1a1a1c]">{grind.wheelDimensions} &bull; Class CP4 High-Precision Angular Contact Spindle Bearings</span>
                  </div>

                  <div className="space-y-1.5 text-xs text-[#1a1a1c]/80">
                    <span className="mono text-[10px] text-[#c52222] uppercase font-bold block">Key Architectural Features:</span>
                    {grind.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c52222] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[rgba(26,26,28,0.08)] text-xs font-sans text-[#1a1a1c]/80">
                  <strong className="text-[#1a1a1c]">Die Application:</strong> {grind.dieApplication}
                </div>
              </div>
            ))}
          </div>

          {/* Grinder Precision Strip */}
          <div className="p-4 rounded-sm bg-[#faf9f6] border border-[rgba(26,26,28,0.12)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              <span className="font-bold text-[#1a1a1c]">{SURFACE_GRINDER_SUMMARY.role}</span>
            </div>
            <span className="text-[#1a1a1c]/70">
              {SURFACE_GRINDER_SUMMARY.accuracy} &bull; {SURFACE_GRINDER_SUMMARY.magneticChuck} &bull; {SURFACE_GRINDER_SUMMARY.tableTravel}
            </span>
          </div>

        </section>
      )}

      {/* ========================================================= */}
      {/* TOPIC 2: 30 DIES AVAILABLE (19 ACTIVE / 11 STANDBY)       */}
      {/* ========================================================= */}
      {(activeTab === 'all' || activeTab === 'dies-inventory') && (
        <section id="topic-dies-inventory" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[rgba(26,26,28,0.1)] pb-4">
            <div className="space-y-2">
              <span className="mono text-xs text-[#c52222] font-bold tracking-wider">
                Tooling Library &bull; 19 Dies Active &bull; 30 Total Dies Available
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1c]">
                Dies Inventory: 19 Active &amp; 30 Total Available
              </h2>
              <p className="text-xs sm:text-sm text-[#1a1a1c]/70 max-w-3xl font-sans">
                Our plant maintains <strong>19 dies actively mounted and running serial parts</strong> on our 19 operational presses, alongside <strong>11 available standby dies</strong> in our precision tool room storage racks, enabling rapid quick-changeovers for diverse automobile components.
              </p>
            </div>

            {/* Filter Active / Standby */}
            <div className="flex items-center gap-2 shrink-0">
              {(['All', 'Active', 'Available'] as const).map(status => (
                <button
                  key={status}
                  onClick={() => setDieStatusFilter(status)}
                  className={`px-3 py-1 text-xs mono uppercase rounded-xs border transition-all ${
                    dieStatusFilter === status
                      ? 'bg-[#1a1a1c] text-[#f2efeb] border-[#1a1a1c] font-bold'
                      : 'bg-white text-[#1a1a1c]/70 hover:bg-[#f2efeb] border-[rgba(26,26,28,0.15)]'
                  }`}
                >
                  {status === 'All' ? 'All 30 Dies' : status === 'Active' ? '19 Active Dies' : '11 Standby Dies'}
                </button>
              ))}
            </div>
          </div>

          {/* Search bar for 30 dies */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative max-w-md w-full">
              <Search className="w-4 h-4 text-[#1a1a1c]/40 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dies by name, type, assigned press, or part produced..."
                value={dieSearchQuery}
                onChange={(e) => setDieSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white border border-[rgba(26,26,28,0.15)] rounded-sm text-xs font-sans focus:outline-none focus:border-[#1a1a1c]"
              />
            </div>

            <div className="flex items-center gap-4 text-xs mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                <span className="font-bold text-emerald-900">19 Active Mounted</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span className="font-bold text-amber-900">11 Standby Available</span>
              </div>
            </div>
          </div>

          {/* 30 Dies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredDies.map((die) => {
              const isActive = die.status.startsWith('Active');

              return (
                <div 
                  key={die.id}
                  className={`p-5 rounded-sm border transition-shadow space-y-3 flex flex-col justify-between ${
                    isActive
                      ? 'bg-white border-[#1a1a1c] shadow-xs hover:shadow-md'
                      : 'bg-[#faf9f6] border-[rgba(26,26,28,0.15)] hover:border-[#1a1a1c]'
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="mono text-xs font-bold text-[#c52222]">
                        DIE #{String(die.dieNumber).padStart(2, '0')}
                      </span>
                      <span className={`text-[10px] mono px-2 py-0.5 rounded-xs font-bold uppercase ${
                        isActive
                          ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                          : 'bg-amber-100 text-amber-900 border border-amber-300'
                      }`}>
                        {isActive ? '● Active on Press' : 'Standby Available'}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-lg text-[#1a1a1c] leading-tight">
                      {die.dieName}
                    </h3>

                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] mono">
                      <span className="bg-[#f2efeb] px-2 py-0.5 rounded-xs text-[#1a1a1c]">
                        {die.dieType}
                      </span>
                      <span className="bg-[#f2efeb] px-2 py-0.5 rounded-xs text-[#c52222] font-bold">
                        {die.pressTonnageRequired}
                      </span>
                      <span className="bg-[#f2efeb] px-2 py-0.5 rounded-xs text-[#1a1a1c]/70">
                        {die.stationsCount}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xs bg-[#f2efeb] text-xs font-sans space-y-1">
                      <span className="mono text-[10px] text-[#1a1a1c]/60 block font-bold">
                        Automotive Part Produced:
                      </span>
                      <p className="text-[#1a1a1c]/90 leading-snug">
                        {die.partProduced}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[rgba(26,26,28,0.08)] flex items-center justify-between text-xs mono">
                    <div>
                      <span className="text-[10px] text-[#1a1a1c]/50 block">Assigned / Rack</span>
                      <span className="font-bold text-[#1a1a1c] text-[11px]">
                        {die.assignedPress || 'Storage Rack #B'}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-[#1a1a1c]/50 block">Stroke Speed</span>
                      <span className="text-[#c52222] font-bold text-[11px]">
                        {die.strokeSpeedRating}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </section>
      )}

      {/* ========================================================= */}
      {/* TOPIC 3: DIFFERENT DIES WITH POWER PRESS USES             */}
      {/* ========================================================= */}
      {(activeTab === 'all' || activeTab === 'dies') && (
        <section id="topic-dies-types" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
          
          <div className="space-y-2 border-b border-[rgba(26,26,28,0.1)] pb-4">
            <span className="mono text-xs text-[#c52222] font-bold tracking-wider">
              Tooling &amp; Press Tonnage Compatibility
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1c]">
              Different Dies Used with Different Capacity Power Presses
            </h2>
            <p className="text-xs sm:text-sm text-[#1a1a1c]/70 max-w-3xl font-sans">
              Each die category requires specific press tonnage, bolster rigidity, and stroke speed. Here is how our progressive, deep drawing, compound, combination, bending, piercing, and coining dies are assigned across our 19 presses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIE_TYPES_CAPABILITY.map((die, idx) => (
              <div 
                key={idx}
                className="arch-card p-6 bg-white border border-[#1a1a1c] rounded-sm space-y-4 hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="mono text-[10px] text-[#c52222] font-bold uppercase bg-[#f2efeb] px-2 py-0.5 rounded-sm">
                    {die.pressTonnageRange}
                  </span>

                  <h3 className="text-xl font-serif font-bold text-[#1a1a1c]">
                    {die.dieTypeName}
                  </h3>

                  <p className="text-xs text-[#1a1a1c]/75 font-sans leading-relaxed">
                    {die.operationDescription}
                  </p>
                </div>

                <div className="space-y-2.5 pt-3 border-t border-[rgba(26,26,28,0.1)] text-xs font-sans">
                  <div>
                    <span className="mono text-[10px] text-[#1a1a1c]/60 uppercase block font-bold">Suitable Presses:</span>
                    <span className="font-bold text-[#1a1a1c]">{die.suitablePresses}</span>
                  </div>
                  <div>
                    <span className="mono text-[10px] text-[#c52222] uppercase block font-bold">Automotive Parts Produced:</span>
                    <span className="text-[#1a1a1c]/80 text-[11px] leading-relaxed block">{die.automotivePartsMade}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </section>
      )}

      {/* ========================================================= */}
      {/* TOPIC 4: DECOILER, RECOILER, AUTO STRAIGHTENER            */}
      {/* ========================================================= */}
      {(activeTab === 'all' || activeTab === 'coil') && (
        <section id="topic-coil" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
          
          <div className="space-y-2 border-b border-[rgba(26,26,28,0.1)] pb-4">
            <span className="mono text-xs text-[#c52222] font-bold tracking-wider">
              High-Speed Press Feed Automation
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1c]">
              Capacities of Decoiler, Recoiler &amp; Auto Straightener
            </h2>
            <p className="text-xs sm:text-sm text-[#1a1a1c]/70 max-w-3xl font-sans">
              Precision strip automation line delivering curl-free, stress-relieved sheet metal strip directly into multi-station progressive dies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COIL_HANDLING_MACHINERY.map((mach) => (
              <div 
                key={mach.id}
                className="arch-card p-6 sm:p-8 bg-white border border-[#1a1a1c] rounded-sm space-y-5 hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[rgba(26,26,28,0.1)] pb-3">
                    <div>
                      <span className="mono text-[10px] text-[#c52222] font-bold uppercase tracking-wider block">
                        {mach.equipmentCategory}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1a1a1c] mt-0.5">
                        {mach.equipmentName}
                      </h3>
                    </div>
                    <span className="mono text-xs font-bold bg-[#f2efeb] text-[#1a1a1c] px-2.5 py-1 rounded-sm border border-[rgba(26,26,28,0.12)] shrink-0">
                      Auto Synced
                    </span>
                  </div>

                  {/* Machine Capacity Specifications */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans">
                    <div className="p-2.5 rounded-sm bg-[#f2efeb]">
                      <span className="mono text-[10px] text-[#1a1a1c]/60 block">Weight / Leveling Capacity</span>
                      <span className="font-bold text-[#1a1a1c]">{mach.capacitySpec}</span>
                    </div>
                    <div className="p-2.5 rounded-sm bg-[#f2efeb]">
                      <span className="mono text-[10px] text-[#1a1a1c]/60 block">Strip Width Capacity</span>
                      <span className="font-bold text-[#1a1a1c]">{mach.stripWidthCapacity}</span>
                    </div>
                    <div className="p-2.5 rounded-sm bg-[#f2efeb]">
                      <span className="mono text-[10px] text-[#1a1a1c]/60 block">Sheet Thickness Range</span>
                      <span className="font-bold text-[#c52222]">{mach.thicknessCapacity}</span>
                    </div>
                    <div className="p-2.5 rounded-sm bg-[#f2efeb]">
                      <span className="mono text-[10px] text-[#1a1a1c]/60 block">Operational Speed</span>
                      <span className="font-bold text-[#1a1a1c]">{mach.speedRange}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2 pt-1 text-xs font-sans text-[#1a1a1c]/80">
                    <span className="mono text-[10px] text-[#c52222] uppercase font-bold block">Key Architectural Features:</span>
                    {mach.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c52222] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-sm bg-[#faf9f6] border border-[rgba(26,26,28,0.1)] text-xs text-[#1a1a1c]/80 font-sans">
                  <strong>Role in Stamping:</strong> {mach.roleInPressShop}
                </div>
              </div>
            ))}
          </div>

        </section>
      )}

      {/* ========================================================= */}
      {/* TOPIC 5: SURFACE GRINDERS & TOOL ROOM MACHINERY           */}
      {/* ========================================================= */}
      {(activeTab === 'all' || activeTab === 'grinders') && (
        <section id="topic-grinders" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
          
          <div className="space-y-2 border-b border-[rgba(26,26,28,0.1)] pb-4">
            <span className="mono text-xs text-[#c52222] font-bold tracking-wider">
              Tool &amp; Die Maintenance &bull; 0.001mm Micro-Downfeed
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1c]">
              Hydraulic Surface Grinders &amp; Tool Room Grinding Machinery
            </h2>
            <p className="text-xs sm:text-sm text-[#1a1a1c]/70 max-w-3xl font-sans">
              Razor-sharp cutting clearances in stamping dies require sub-micron surface flatness. Our grinding bay resurfaces punch plates, die shoes, and carbide inserts in-house.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GRINDER_MACHINERY.map((grind) => (
              <div 
                key={grind.id}
                className="arch-card p-6 bg-white border border-[#1a1a1c] rounded-sm space-y-4 hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-[rgba(26,26,28,0.1)] pb-2.5">
                    <div>
                      <span className="mono text-[10px] text-[#c52222] font-bold uppercase tracking-wider block">
                        {grind.grinderType}
                      </span>
                      <h3 className="text-xl font-serif font-bold text-[#1a1a1c]">
                        {grind.grinderName}
                      </h3>
                    </div>
                    <span className="mono text-xs font-bold bg-[#f2efeb] text-[#1a1a1c] px-2 py-0.5 rounded-sm">
                      In-House
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-sans">
                    <div className="p-2 rounded-xs bg-[#f2efeb]">
                      <span className="mono text-[10px] text-[#1a1a1c]/60 block">Table Stroke / Size</span>
                      <span className="font-bold text-[#1a1a1c]">{grind.tableSize}</span>
                    </div>
                    <div className="p-2 rounded-xs bg-[#f2efeb]">
                      <span className="mono text-[10px] text-[#1a1a1c]/60 block">Magnetic Chuck</span>
                      <span className="font-bold text-[#1a1a1c]">{grind.magneticChuckSize}</span>
                    </div>
                    <div className="p-2 rounded-xs bg-[#f2efeb]">
                      <span className="mono text-[10px] text-[#1a1a1c]/60 block">Downfeed Accuracy</span>
                      <span className="font-bold text-[#c52222] mono">{grind.accuracyDownfeed}</span>
                    </div>
                    <div className="p-2 rounded-xs bg-[#f2efeb]">
                      <span className="mono text-[10px] text-[#1a1a1c]/60 block">Spindle Speed</span>
                      <span className="font-bold text-[#1a1a1c] mono">{grind.spindleSpeed}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[rgba(26,26,28,0.08)] text-xs font-sans text-[#1a1a1c]/80">
                  <strong className="text-[#1a1a1c]">Die Application:</strong> {grind.dieApplication}
                </div>
              </div>
            ))}
          </div>

        </section>
      )}

      {/* ========================================================= */}
      {/* TOPIC 6: ALL DIMENSIONAL MEASURING TOOLS                  */}
      {/* ========================================================= */}
      {(activeTab === 'all' || activeTab === 'measuring') && (
        <section id="topic-measuring" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
          
          <div className="space-y-2 border-b border-[rgba(26,26,28,0.1)] pb-4">
            <span className="mono text-xs text-[#c52222] font-bold tracking-wider">
              Sub-Micron Quality Control &bull; Full Metrology Laboratory
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1c]">
              All Measuring Tools Required to Check Product Dimensions
            </h2>
            <p className="text-xs sm:text-sm text-[#1a1a1c]/70 max-w-3xl font-sans">
              Comprehensive array of precision dimensional inspection instruments to verify lengths, thicknesses, bore diameters, heights, bend angles, contour silhouettes, and surface roughness of stamped automobile child parts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DIMENSIONAL_MEASURING_INSTRUMENTS.map((inst) => (
              <div 
                key={inst.id}
                className="arch-card p-5 bg-white border border-[#1a1a1c] rounded-sm space-y-3 hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between border-b border-[rgba(26,26,28,0.1)] pb-2">
                    <span className="mono text-[10px] text-[#c52222] font-bold uppercase">
                      {inst.category}
                    </span>
                    <span className="mono text-[10px] bg-[#f2efeb] text-[#1a1a1c] px-2 py-0.5 rounded-sm font-bold">
                      {inst.quantityCount}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-base text-[#1a1a1c] leading-tight">
                    {inst.instrumentName}
                  </h3>

                  <div className="grid grid-cols-2 gap-2 text-xs font-sans">
                    <div className="p-2 rounded-xs bg-[#f2efeb]">
                      <span className="mono text-[9px] text-[#1a1a1c]/60 block uppercase">Least Count</span>
                      <span className="font-bold text-[#c52222] mono text-[11px]">{inst.leastCount}</span>
                    </div>
                    <div className="p-2 rounded-xs bg-[#f2efeb]">
                      <span className="mono text-[9px] text-[#1a1a1c]/60 block uppercase">Measuring Range</span>
                      <span className="font-bold text-[#1a1a1c] mono text-[11px] truncate">{inst.measuringRange}</span>
                    </div>
                  </div>

                  <div className="text-xs font-sans text-[#1a1a1c]/80 pt-1">
                    <strong className="text-[#1a1a1c]">Inspection Role:</strong> {inst.application}
                  </div>
                </div>

                <div className="pt-2 border-t border-[rgba(26,26,28,0.08)] flex items-center justify-between text-[11px] mono text-[#1a1a1c]/60">
                  <span>Make: {inst.makeBrand}</span>
                  <span>{inst.calibrationFrequency}</span>
                </div>
              </div>
            ))}
          </div>

        </section>
      )}

      {/* ========================================================= */}
      {/* TOPIC 7: DIESEL GENERATOR (DG) FACILITY                   */}
      {/* ========================================================= */}
      {(activeTab === 'all' || activeTab === 'dg') && (
        <section id="topic-dg" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
          
          <div className="space-y-2 border-b border-[rgba(26,26,28,0.1)] pb-4">
            <span className="mono text-xs text-[#c52222] font-bold tracking-wider">
              Zero Grid-Failure Risk &bull; 880 kVA Prime Continuous
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1c]">
              Diesel Generator (DG) Backup Facility
            </h2>
            <p className="text-xs sm:text-sm text-[#1a1a1c]/70 max-w-3xl font-sans">
              To guarantee that client JIT delivery schedules and emergency line-down dispatches are never interrupted by grid power outages, our single dedicated plant operates an 880 kVA dual DG genset station with automated AMF synchronization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {DG_GENERATOR_FACILITY.map((dg) => (
              <div 
                key={dg.id}
                className="arch-card p-6 sm:p-8 bg-white border border-[#1a1a1c] rounded-sm space-y-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between border-b border-[rgba(26,26,28,0.1)] pb-4">
                  <div>
                    <span className="mono text-[10px] text-[#c52222] font-bold uppercase tracking-wider block">
                      Autonomous Power Generation
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-[#1a1a1c] mt-0.5">
                      {dg.name}
                    </h3>
                  </div>
                  <span className="mono text-sm font-bold bg-[#1a1a1c] text-[#f2efeb] px-3 py-1 rounded-sm">
                    {dg.ratingKVA}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-sans">
                  <div className="p-3 rounded-sm bg-[#f2efeb]">
                    <span className="mono text-[10px] text-[#1a1a1c]/60 block">Engine &amp; Turbo</span>
                    <span className="font-bold text-[#1a1a1c]">{dg.engineMake}</span>
                  </div>
                  <div className="p-3 rounded-sm bg-[#f2efeb]">
                    <span className="mono text-[10px] text-[#1a1a1c]/60 block">Alternator &amp; Panel</span>
                    <span className="font-bold text-[#1a1a1c]">{dg.alternator}</span>
                  </div>
                  <div className="p-3 rounded-sm bg-[#f2efeb]">
                    <span className="mono text-[10px] text-[#1a1a1c]/60 block">AMF Switchover Time</span>
                    <span className="font-bold text-[#c52222] mono">{dg.amfPanel}</span>
                  </div>
                  <div className="p-3 rounded-sm bg-[#f2efeb]">
                    <span className="mono text-[10px] text-[#1a1a1c]/60 block">Fuel Autonomy Tank</span>
                    <span className="font-bold text-[#1a1a1c]">{dg.fuelTankCapacity}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-sm bg-[#faf9f6] border border-[rgba(26,26,28,0.1)] text-xs space-y-1 font-sans">
                  <strong className="text-[#1a1a1c]">Coverage Envelope:</strong>
                  <p className="text-[#1a1a1c]/80 leading-relaxed">{dg.coverage}</p>
                </div>
              </div>
            ))}
          </div>

        </section>
      )}

      {/* ========================================================= */}
      {/* TOPIC 8: HIRE TOOL ROOM FACILITIES (PROPER FORMAT AREA)   */}
      {/* ========================================================= */}
      {(activeTab === 'all' || activeTab === 'toolroom') && (
        <section id="topic-toolroom" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
          
          <div className="space-y-2 border-b border-[rgba(26,26,28,0.1)] pb-4">
            <span className="mono text-xs text-[#c52222] font-bold tracking-wider">
              Tool Room Machine Time &bull; Contract Job-Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1c]">
              Hire Tool Room Facilities
            </h2>
            <p className="text-xs sm:text-sm text-[#1a1a1c]/70 max-w-3xl font-sans">
              Proper format area for our precision tool room machinery available for machine-hour hire, shift booking, and press tool job-work. Details to be supplemented by your instructions.
            </p>
          </div>

          <div className="space-y-4">
            {HIRE_TOOL_ROOM_FACILITIES.map((facility) => (
              <div 
                key={facility.id}
                className="arch-card p-6 bg-white border border-[#1a1a1c] rounded-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:shadow-md transition-shadow"
              >
                <div className="space-y-2 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="mono text-[10px] text-[#c52222] font-bold uppercase bg-[#f2efeb] px-2 py-0.5 rounded-sm">
                      {facility.category}
                    </span>
                    <span className="mono text-[10px] font-bold bg-[#1a1a1c] text-[#f2efeb] px-2 py-0.5 rounded-sm">
                      {facility.hireAvailability}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#1a1a1c]">
                    {facility.machineTitle}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-[#1a1a1c]/80 pt-1">
                    <div><strong>Working Envelope:</strong> {facility.workingEnvelope}</div>
                    <div><strong>Accuracy / Precision:</strong> {facility.accuracy}</div>
                    <div><strong>Key Specifications:</strong> {facility.specifications}</div>
                    <div><strong>Job-Work Status:</strong> {facility.status}</div>
                  </div>

                  <div className="mono text-[10px] text-[#c52222] font-bold pt-1">
                    {facility.detailsNote}
                  </div>
                </div>

                <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-2">
                  <button
                    onClick={() => onOpenContactModal(`Tool Room Hire Inquiry: ${facility.machineTitle}`)}
                    className="btn btn-primary !py-2 !px-4 text-xs mono whitespace-nowrap"
                  >
                    Inquire Hire Shift / Rate
                  </button>
                  <button
                    onClick={() => onOpenContactModal(`Submit Specific Details for ${facility.machineTitle}`)}
                    className="btn bg-white !py-2 !px-4 text-xs mono whitespace-nowrap"
                  >
                    Provide Details
                  </button>
                </div>
              </div>
            ))}
          </div>

        </section>
      )}

      {/* ========================================================= */}
      {/* TOPIC 9: WORKING FOR (COMPANIES NAMES - TO BE ADDED LATER) */}
      {/* ========================================================= */}
      {(activeTab === 'all' || activeTab === 'workingfor') && (
        <section id="topic-workingfor" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
          
          <div className="space-y-2 border-b border-[rgba(26,26,28,0.1)] pb-4">
            <span className="mono text-xs text-[#c52222] font-bold tracking-wider">
              Automotive OEMs &amp; Tier-1 Partnerships
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1c]">
              Working For (Automotive Companies Roster)
            </h2>
            <p className="text-xs sm:text-sm text-[#1a1a1c]/70 max-w-3xl font-sans">
              Dedicated structured slots for companies we manufacture automotive child parts for. Company names will be populated as instructed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKING_FOR_COMPANIES.map((company) => (
              <div 
                key={company.id}
                className="arch-card p-6 bg-white border border-[#1a1a1c] rounded-sm space-y-4 hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="mono text-[10px] text-[#c52222] font-bold uppercase bg-[#f2efeb] px-2 py-0.5 rounded-sm">
                      {company.companyCategory}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-sm font-bold">
                      <Lock className="w-3 h-3 text-emerald-700" />
                      <span>NDA Bound</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#1a1a1c]">
                    {company.displayName}
                  </h3>

                  <div className="space-y-1.5 text-xs font-sans text-[#1a1a1c]/80">
                    <div><strong>Supplied Child Parts:</strong> {company.suppliedAutomobileParts}</div>
                    <div><strong>Status:</strong> {company.partnershipStatus}</div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[rgba(26,26,28,0.08)] mono text-[10px] text-[#1a1a1c]/60">
                  {company.notes}
                </div>
              </div>
            ))}
          </div>

        </section>
      )}

    </div>
  );
};
