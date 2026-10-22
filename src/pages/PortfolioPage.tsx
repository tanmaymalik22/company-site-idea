import React, { useState, useEffect } from 'react';
import { 
  Layers, 
  Maximize2, 
  CheckCircle2, 
  ShieldAlert, 
  FileText, 
  Download, 
  Filter, 
  ArrowRight, 
  Info, 
  Compass, 
  X, 
  ArrowLeft,
  Lock,
  Plus,
  Search,
  Upload,
  Image as ImageIcon,
  Check,
  Building2,
  Wrench,
  Award
} from 'lucide-react';
import { 
  PARENT_SUBSYSTEMS, 
  PARTS_IMAGE_GALLERY_ITEMS, 
  WORKING_FOR_COMPANIES, 
  HIRE_TOOL_ROOM_FACILITIES,
  CONFIDENTIALITY_PRIVACY_NOTICE
} from '../data/companyData';
import { ParentSubsystem, ChildPartItem, PageId, PartImagePlaceholder } from '../types';
import { ChildPartDrawingViewer } from '../components/ChildPartDrawingViewer';

interface PortfolioPageProps {
  initialSubsystemId?: string;
  initialTab?: 'assemblies' | 'gallery' | 'working-for' | 'tool-room' | 'all';
  onOpenEmergencyModal: (partName?: string) => void;
  onOpenContactModal: (partName?: string) => void;
  onNavigateToDrawings?: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  initialSubsystemId,
  initialTab,
  onOpenEmergencyModal,
  onOpenContactModal,
  onNavigateToDrawings
}) => {
  // Navigation Tabs within the unified Child Parts & Parts Showcase page
  const [activeTab, setActiveTab] = useState<'assemblies' | 'gallery' | 'working-for' | 'tool-room' | 'all'>(
    initialTab || 'all'
  );

  // Subsystem selection for Child Parts Section
  const [selectedSubsystemCategory, setSelectedSubsystemCategory] = useState<string>('All');
  const [activeSubsystemId, setActiveSubsystemId] = useState<string>(
    initialSubsystemId || PARENT_SUBSYSTEMS[0].id
  );
  const [selectedChildPart, setSelectedChildPart] = useState<ChildPartItem | null>(null);

  // Gallery filters for Parts Showcase Section
  const [galleryCategory, setGalleryCategory] = useState<string>('All');
  const [gallerySearchQuery, setGallerySearchQuery] = useState<string>('');
  const [uploadedPhotos, setUploadedPhotos] = useState<Record<string, string>>({});

  // Keyboard Escape listener to exit image/drawing modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedChildPart) {
        setSelectedChildPart(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedChildPart]);

  // Lock body scroll when drawing modal is active
  useEffect(() => {
    if (selectedChildPart) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedChildPart]);

  const subsystemCategories = [
    'All', 
    'Body & Closures', 
    'Braking & Chassis', 
    'Powertrain & EV', 
    'Steering & Drivetrain', 
    'Interior & Safety'
  ];

  const filteredSubsystems = PARENT_SUBSYSTEMS.filter(s => 
    selectedSubsystemCategory === 'All' || s.category === selectedSubsystemCategory
  );

  const currentSubsystem = PARENT_SUBSYSTEMS.find(s => s.id === activeSubsystemId) || PARENT_SUBSYSTEMS[0];

  const galleryCategories = [
    'All', 
    'Body & Closures', 
    'Braking & Chassis', 
    'Powertrain & EV', 
    'Steering & Drivetrain', 
    'Interior & Safety', 
    'Deep Drawn', 
    'Brackets & Hinges'
  ];

  // Filter gallery items
  const filteredGalleryItems = PARTS_IMAGE_GALLERY_ITEMS.filter(item => {
    const matchesCat = galleryCategory === 'All' || item.category === galleryCategory;
    const matchesSearch = 
      item.partName.toLowerCase().includes(gallerySearchQuery.toLowerCase()) ||
      item.partNumber.toLowerCase().includes(gallerySearchQuery.toLowerCase()) ||
      item.vehicleApplication.toLowerCase().includes(gallerySearchQuery.toLowerCase()) ||
      item.materialGrade.toLowerCase().includes(gallerySearchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handlePhotoUpload = (partId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedPhotos(prev => ({ ...prev, [partId]: url }));
    }
  };

  return (
    <div className="space-y-16 pb-24 bg-[#f2efeb] text-[#1a1a1c] relative">
      
      {/* 1. Unified Page Header Banner */}
      <section className="bg-white border-b border-[rgba(26,26,28,0.08)] py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          
          <div className="inline-flex items-center gap-2 mono text-xs text-[#c52222] font-bold px-3 py-1 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.12)]">
            <Lock className="w-3.5 h-3.5" />
            <span>OEM Privacy Protected &bull; Diagrams Confidential Under NDA &bull; Physical Parts Showcase</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#1a1a1c] tracking-tight">
            Child Parts &amp; Parts Showcase
          </h1>

          <p className="text-[#1a1a1c]/70 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-sans">
            Unified production catalog of precision automotive child parts, complete parent assemblies, and component photography showcase. Proprietary CAD diagrams have been removed to safeguard customer product privacy. Technical specifications and designated physical part image areas are provided below.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenContactModal('Request Component Part Photo & Sample')}
              className="btn btn-primary"
            >
              <Plus className="w-4 h-4 text-[#c52222]" />
              <span>Submit Part Image / Sample Request</span>
            </button>
            <button
              onClick={() => onOpenContactModal('Child Parts Engineering RFQ')}
              className="btn"
            >
              Request Engineering RFQ
            </button>
          </div>

        </div>
      </section>

      {/* 2. Unified Navigation Switcher Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[rgba(26,26,28,0.1)]">
          {[
            { id: 'all', label: 'All Sections (Unified View)' },
            { id: 'assemblies', label: '1. Exploded Child Parts by Assembly' },
            { id: 'gallery', label: '2. Parts Showcase & Image Area (8 Slots)' },
            { id: 'working-for', label: '3. Working For (Companies Roster)' },
            { id: 'tool-room', label: '4. Hire Tool Room Facilities' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-xs mono uppercase tracking-wider whitespace-nowrap transition-all border ${
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
      {/* SECTION 1: CHILD PARTS BY PARENT ASSEMBLY                 */}
      {/* ========================================================= */}
      {(activeTab === 'all' || activeTab === 'assemblies') && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-2 border-b border-[rgba(26,26,28,0.1)] pb-4">
            <span className="mono text-xs text-[#c52222] font-bold tracking-wider uppercase block">
              Section 1 &bull; Complete Vehicle Systems &bull; Exploded Child Parts
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1c]">
              Child Parts by Parent Assembly
            </h2>
            <p className="text-xs sm:text-sm text-[#1a1a1c]/70 max-w-3xl font-sans">
              Select an automotive assembly below to inspect its individual child parts, materials, stamping processes, tolerances, and mating functions.
            </p>
          </div>

          {/* Subsystem Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[rgba(26,26,28,0.1)]">
            <span className="mono text-xs text-[#1a1a1c]/60 font-bold mr-2 shrink-0">Filter Assembly Category:</span>
            {subsystemCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedSubsystemCategory(cat)}
                className={`px-3 py-1.5 text-xs mono uppercase tracking-wider whitespace-nowrap transition-all border ${
                  selectedSubsystemCategory === cat
                    ? 'bg-[#1a1a1c] text-[#f2efeb] border-[#1a1a1c] font-bold'
                    : 'bg-white text-[#1a1a1c]/70 hover:text-[#1a1a1c] hover:bg-[#f2efeb] border-[rgba(26,26,28,0.12)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Subsystems Selection Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {filteredSubsystems.map((sub) => {
              const isSelected = sub.id === currentSubsystem.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => {
                    setActiveSubsystemId(sub.id);
                    setSelectedChildPart(null);
                  }}
                  className={`p-3.5 rounded-sm border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#c52222] shadow-sm ring-1 ring-[#c52222]'
                      : 'bg-white/80 border-[rgba(26,26,28,0.12)] text-[#1a1a1c]/70 hover:border-[#1a1a1c] hover:text-[#1a1a1c]'
                  }`}
                >
                  <div className="mono text-[10px] text-[#c52222] font-bold uppercase truncate">{sub.category}</div>
                  <div className="text-sm font-serif font-bold text-[#1a1a1c] mt-1 line-clamp-1">{sub.title}</div>
                  <div className="mono text-[10px] text-[#1a1a1c]/50 mt-1">{sub.childParts.length} Child Parts</div>
                </button>
              );
            })}
          </div>

          {/* Active Parent Subsystem & Its Child Parts Cards */}
          <div className="arch-card bg-white p-6 sm:p-8 space-y-8 rounded-sm border border-[#1a1a1c]">
            
            {/* Subsystem Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[rgba(26,26,28,0.1)]">
              <div className="space-y-1">
                <span className="mono text-xs text-[#c52222] font-bold tracking-wider">
                  {currentSubsystem.category} &bull; OEM Application: {currentSubsystem.oemApplication}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1a1a1c]">
                  {currentSubsystem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#1a1a1c]/70 max-w-3xl leading-relaxed font-sans">
                  {currentSubsystem.parentDescription}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <button
                  onClick={() => onOpenContactModal(currentSubsystem.title)}
                  className="btn btn-primary !py-2.5 !px-5 text-xs"
                >
                  Request Subsystem RFQ
                </button>
              </div>
            </div>

            {/* Child Parts Cards Grid */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-base font-serif font-bold text-[#1a1a1c]">
                  Child Parts Forming This Assembly ({currentSubsystem.childParts.length})
                </h4>
                <span className="mono text-xs text-[#1a1a1c]/60">
                  Click any part card to inspect specifications &amp; image area
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {currentSubsystem.childParts.map((part) => (
                  <div
                    key={part.id}
                    onClick={() => setSelectedChildPart(part)}
                    className="bg-[#f2efeb] hover:bg-white border border-[rgba(26,26,28,0.15)] hover:border-[#1a1a1c] p-5 cursor-pointer flex flex-col justify-between group space-y-4 transition-all duration-200 rounded-sm hover:shadow-md"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="mono text-xs font-bold text-[#1a1a1c]">
                          {part.partNumber}
                        </span>
                        <span className="mono text-[10px] text-[#c52222] bg-white px-2 py-0.5 rounded-sm border border-[rgba(26,26,28,0.1)] font-bold">
                          {part.tolerance}
                        </span>
                      </div>

                      <h5 className="text-base font-serif font-bold text-[#1a1a1c] group-hover:text-[#c52222] transition-colors">
                        {part.name}
                      </h5>

                      <p className="text-xs text-[#1a1a1c]/70 leading-relaxed line-clamp-2 font-sans">
                        {part.functionInParent}
                      </p>

                      <div className="text-[11px] mono space-y-1 text-[#1a1a1c]/60 pt-2 border-t border-[rgba(26,26,28,0.08)]">
                        <div className="flex justify-between">
                          <span>Material:</span> <span className="text-[#1a1a1c] font-bold">{part.material}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Process:</span> <span className="text-[#1a1a1c] font-bold">{part.process}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[rgba(26,26,28,0.08)] flex items-center justify-between text-xs">
                      <span className="text-[#1a1a1c]/60 mono text-[11px]">
                        Buffer: {part.emergencyBufferUnits.toLocaleString()} pcs
                      </span>
                      <span className="mono text-[#c52222] font-bold text-[11px] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Inspect Part &rarr;</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </section>
      )}

      {/* ========================================================= */}
      {/* SECTION 2: PARTS SHOWCASE & IMAGE AREA (8 SLOTS)          */}
      {/* ========================================================= */}
      {(activeTab === 'all' || activeTab === 'gallery') && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="space-y-2 border-b border-[rgba(26,26,28,0.1)] pb-4">
            <span className="mono text-xs text-[#c52222] font-bold tracking-wider uppercase block">
              Section 2 &bull; Physical Photography Showcase &bull; 8 Real Slots
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1c]">
              Parts Showcase &amp; Image Area
            </h2>
            <p className="text-xs sm:text-sm text-[#1a1a1c]/70 max-w-4xl font-sans leading-relaxed">
              Designated physical component photography showcase for actual manufactured automobile child parts. Client diagrams remain confidential; upload or preview real product photos in the formatted slots below.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="p-4 sm:p-5 rounded-sm bg-white border border-[rgba(26,26,28,0.12)] space-y-4 shadow-2xs">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-[#1a1a1c]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search parts by name, material, vehicle..."
                  value={gallerySearchQuery}
                  onChange={(e) => setGallerySearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs font-sans rounded-sm border border-[rgba(26,26,28,0.15)] focus:border-[#1a1a1c] focus:outline-hidden bg-[#faf9f6]"
                />
              </div>

              <div className="mono text-xs text-[#1a1a1c]/60">
                Showing <strong>{filteredGalleryItems.length}</strong> of {PARTS_IMAGE_GALLERY_ITEMS.length} Formatted Slots
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="mono text-[10px] text-[#1a1a1c]/60 font-bold uppercase shrink-0">Category:</span>
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setGalleryCategory(cat)}
                  className={`px-2.5 py-1 text-[11px] mono uppercase tracking-wider whitespace-nowrap transition-all border ${
                    galleryCategory === cat
                      ? 'bg-[#1a1a1c] text-[#f2efeb] border-[#1a1a1c] font-bold'
                      : 'bg-white text-[#1a1a1c]/70 hover:bg-[#f2efeb] border-[rgba(26,26,28,0.12)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 8 Formatted Part Slots Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredGalleryItems.map((item) => {
              const currentPhoto = uploadedPhotos[item.id] || item.imageUrl;

              return (
                <div 
                  key={item.id}
                  className="arch-card bg-white border border-[#1a1a1c] rounded-sm overflow-hidden flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
                >
                  {/* Photo Display / Upload Area */}
                  <div className="relative aspect-4/3 bg-[#f2efeb] border-b border-[rgba(26,26,28,0.1)] flex flex-col items-center justify-center p-4 text-center overflow-hidden group">
                    {currentPhoto ? (
                      <img 
                        src={currentPhoto} 
                        alt={item.partName}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                      />
                    ) : (
                      <div className="space-y-2 p-2">
                        <div className="w-12 h-12 mx-auto rounded-full bg-white border border-[rgba(26,26,28,0.15)] flex items-center justify-center text-[#c52222]">
                          <ImageIcon className="w-6 h-6" />
                        </div>
                        <span className="mono text-[10px] text-[#c52222] font-bold uppercase block">
                          [ Image Area for Real Part ]
                        </span>
                        <p className="text-[11px] text-[#1a1a1c]/60 font-sans line-clamp-2">
                          {item.placeholderStatus}
                        </p>
                      </div>
                    )}

                    {/* Upload Overlay */}
                    <label 
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white cursor-pointer p-4 text-center backdrop-blur-2xs"
                      title="Upload photo for this child part"
                    >
                      <Upload className="w-6 h-6 mb-1 text-white" />
                      <span className="mono text-xs font-bold uppercase">Upload Part Photo</span>
                      <span className="text-[10px] text-white/80 font-sans mt-0.5">JPG, PNG format</span>
                      <input 
                        type="file" 
                        accept="image/*"
                        onChange={(e) => handlePhotoUpload(item.id, e)}
                        className="hidden" 
                      />
                    </label>
                  </div>

                  {/* Slot Details */}
                  <div className="p-4 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="mono text-[10px] text-[#c52222] font-bold uppercase bg-[#f2efeb] px-2 py-0.5 rounded-xs">
                        {item.category}
                      </span>
                      <span className="mono text-[10px] text-[#1a1a1c]/60">
                        {item.partNumber}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-lg text-[#1a1a1c] line-clamp-1">
                      {item.partName}
                    </h3>

                    <div className="space-y-1 text-xs font-sans text-[#1a1a1c]/80">
                      <div><strong>Vehicle Application:</strong> {item.vehicleApplication}</div>
                      <div><strong>Material:</strong> {item.materialGrade} ({item.thickness})</div>
                      <div><strong>Press Tonnage:</strong> {item.pressTonnage}</div>
                    </div>

                    <div className="pt-2 border-t border-[rgba(26,26,28,0.08)] mono text-[10px] text-[#1a1a1c]/60">
                      {item.notes}
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="p-4 pt-0">
                    <button
                      onClick={() => onOpenContactModal(`Sample & Image Request: ${item.partName} (${item.partNumber})`)}
                      className="w-full btn !py-2 text-xs mono text-center justify-center"
                    >
                      Request Physical Sample
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </section>
      )}

      {/* ========================================================= */}
      {/* SECTION 3: WORKING FOR (AUTOMOTIVE COMPANIES ROSTER)      */}
      {/* ========================================================= */}
      {(activeTab === 'all' || activeTab === 'working-for') && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="space-y-2 border-b border-[rgba(26,26,28,0.1)] pb-4">
            <span className="mono text-xs text-[#c52222] font-bold tracking-wider uppercase block">
              Section 3 &bull; Automotive OEMs &bull; Tier-1 Client Partnerships
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

      {/* ========================================================= */}
      {/* SECTION 4: HIRE TOOL ROOM FACILITIES                      */}
      {/* ========================================================= */}
      {(activeTab === 'all' || activeTab === 'tool-room') && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="space-y-2 border-b border-[rgba(26,26,28,0.1)] pb-4">
            <span className="mono text-xs text-[#c52222] font-bold tracking-wider uppercase block">
              Section 4 &bull; In-House Machine Capacity &bull; Shift / Job-Work Rental
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

      {/* 3. Child Part Full Engineering Drawing & Blueprint Modal with Multi-Channel Exit Controls */}
      {selectedChildPart && (
        <div 
          onClick={(e) => {
            // Clicking backdrop outside the modal dialog will immediately exit
            if (e.target === e.currentTarget) {
              setSelectedChildPart(null);
            }
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 overflow-y-auto cursor-pointer"
        >
          {/* Always-Visible Fixed Floating Exit Button on screen viewport */}
          <button
            onClick={() => setSelectedChildPart(null)}
            className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[100] bg-[#c52222] hover:bg-[#a81818] text-white px-5 py-3 rounded-full mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl border-2 border-white cursor-pointer transition-all hover:scale-105 active:scale-95"
            title="Exit Part Window (Press Esc)"
          >
            <X className="w-5 h-5 text-white stroke-[3]" />
            <span>Exit Part (Esc)</span>
          </button>

          {/* Modal Container */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="bg-[#f2efeb] border-2 border-[#1a1a1c] rounded-sm max-w-5xl w-full p-4 sm:p-6 space-y-5 my-8 shadow-2xl cursor-default relative text-[#1a1a1c]"
          >
            {/* Top Bar with Clear Back Button */}
            <div className="flex items-center justify-between border-b border-[rgba(26,26,28,0.15)] pb-3">
              <button
                onClick={() => setSelectedChildPart(null)}
                className="btn !py-1.5 !px-3 text-xs mono flex items-center gap-1.5 text-[#1a1a1c] bg-white border border-[#1a1a1c] hover:bg-[#1a1a1c] hover:text-white transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>&larr; Back to Parts List</span>
              </button>

              <div className="text-right flex items-center gap-3">
                <span className="mono text-xs text-[#c52222] font-bold">
                  {currentSubsystem.title}
                </span>
                <button
                  onClick={() => setSelectedChildPart(null)}
                  className="text-xs mono font-bold text-[#c52222] hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span>Exit Part</span>
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Child Part Drawing Viewer Component */}
            <ChildPartDrawingViewer 
              childPart={selectedChildPart}
              parentSubsystemTitle={currentSubsystem.title}
              onOpenEmergencyModal={onOpenEmergencyModal}
              onOpenContactModal={onOpenContactModal}
              onClose={() => setSelectedChildPart(null)}
            />
          </div>
        </div>
      )}

    </div>
  );
};
