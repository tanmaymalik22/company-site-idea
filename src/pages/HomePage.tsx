import React, { useState } from 'react';
import { 
  ArrowRight, 
  Layers, 
  ShieldAlert, 
  Wrench, 
  Award, 
  Compass, 
  CheckCircle2, 
  Building2, 
  Truck, 
  Clock, 
  ChevronRight,
  Maximize2,
  FileText,
  Sliders,
  Plus,
  Lock,
  ShieldCheck,
  Zap,
  Gauge,
  Image as ImageIcon,
  Cpu,
  PlayCircle
} from 'lucide-react';
import { 
  COMPANY_INFO, 
  PARENT_SUBSYSTEMS,
  POWER_PRESS_INVENTORY,
  PRESS_SHOP_SUMMARY,
  DIES_INVENTORY_LIST,
  PRESS_AUTOMATION_EQUIPMENT,
  DG_GENERATOR_FACILITY,
  MEASURING_INSTRUMENTS_LAB,
  PARTS_IMAGE_GALLERY_ITEMS,
  WORKING_FOR_COMPANIES,
  HIRE_TOOL_ROOM_FACILITIES,
  CONFIDENTIALITY_PRIVACY_NOTICE
} from '../data/companyData';
import { PageId, PageTopic } from '../types';
import { ChildPartDrawingViewer } from '../components/ChildPartDrawingViewer';
import { MiniTopicIndex } from '../components/MiniTopicIndex';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenEmergencyModal: (partName?: string) => void;
  onOpenContactModal: (subject?: string) => void;
  onSelectSubsystem: (subsystemId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenEmergencyModal,
  onOpenContactModal,
  onSelectSubsystem
}) => {
  const doorSubsystem = PARENT_SUBSYSTEMS[0];
  const featuredChildPart = doorSubsystem.childParts[0];

  // Topics for Mini Topic Index on HomePage
  const homeTopics: PageTopic[] = [
    { id: 'topic-hero', label: 'Automotive Architecture & Overview', shortLabel: 'Overview', badge: 'Single Plant', category: '19 Presses / Single Unit' },
    { id: 'topic-plant-strip', label: '19 Power Presses Fleet (PP-1 to PP-19)', shortLabel: '19 Presses', badge: '5T-150T', category: 'PP-1 to PP-19 & 2 Compressors' },
    { id: 'topic-dies-summary', label: '30 Dies Available (19 Active / 11 Standby)', shortLabel: '30 Dies Library', badge: '19 Active', category: 'Tooling Library' },
    { id: 'topic-coil-grinders', label: 'Decoiler, Recoiler & Surface Grinders', shortLabel: 'Coil & Grinders', badge: '3.0T / 1.5T', category: 'Automation Line' },
    { id: 'topic-plant-metals', label: 'Metals in Plant (Rolls, Sheets & Dimensions)', shortLabel: 'Plant Metals & Specs', badge: 'Coils & Sheets', category: 'Raw Materials for Dies' },
    { id: 'topic-metrology-dg', label: 'Measuring Tools Lab & 880 kVA DG Genset', shortLabel: 'Quality & Power', badge: '100% Uptime', category: 'Inspection & DG Backup' },
    { id: 'topic-parts-image-area', label: 'Automobile Child Parts Image Area', shortLabel: 'Parts Image Area', badge: 'NDA Protected', category: 'Photo Placeholders' },
    { id: 'topic-working-for', label: 'Working For (Automotive Companies Roster)', shortLabel: 'Working For', badge: 'OEM Roster', category: 'Passenger, CV, EV' },
    { id: 'topic-hire-tool-room', label: 'Hire Tool Room Facilities Format', shortLabel: 'Hire Tool Room', badge: 'Job-Work', category: 'VMC, Wire EDM, Lathes' },
    { id: 'topic-child-parts-explainer', label: 'What is a Child Part? (Car Door Case Study)', shortLabel: 'Child Parts Concept', badge: 'Case Study', category: 'Manufacturing Science' }
  ];

  return (
    <div className="space-y-20 pb-20 bg-[#f2efeb] text-[#1a1a1c] relative">
      
      {/* Mini Topic Index on the Side (with Top Menu integration if too many topics) */}
      <MiniTopicIndex 
        topics={homeTopics}
        pageTitle="Globle Bhavya Page Topics"
      />

      {/* 1. HERO SECTION (Variation 2: Automotive Architectural Engineering) */}
      <section id="topic-hero" className="py-12 sm:py-20 border-b border-[rgba(26,26,28,0.08)] bg-[#f2efeb] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="space-y-6">
              <div className="mono text-[#c52222] font-bold flex items-center gap-2">
                <span>[ Manufacturing of Automobile Child Parts &bull; Gurugram, India ]</span>
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-serif font-semibold text-[#1a1a1c] tracking-tight leading-[0.9]">
                Automotive <br />Architecture.
              </h1>

              <p className="text-base sm:text-lg text-[#1a1a1c]/70 leading-relaxed max-w-xl font-sans">
                At Globle Bhavya, we are a specialized precision stamping company operating a <strong>single dedicated manufacturing plant in Gurugram, India</strong>. We engineer and manufacture high-precision automobile child parts across <strong>19 power presses (PP-1 to PP-19, 5T to 150T)</strong>, <strong>2 industrial air compressors</strong>, <strong>5 decoilers</strong>, <strong>1 straightener</strong>, <strong>1 surface grinder</strong>, with <strong>19 dies actively mounted</strong>, a total of <strong>30 dies available</strong>, and complete dimensional measuring tools.
              </p>

              {/* Plant Highlights Badge Bar */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs mono">
                <span className="bg-white px-2.5 py-1 rounded-sm border border-[rgba(26,26,28,0.12)] font-bold text-[#c52222]">
                  19 Power Presses (PP-1 to PP-19 &bull; 5T-150T)
                </span>
                <span className="bg-white px-2.5 py-1 rounded-sm border border-[rgba(26,26,28,0.12)] font-bold text-cyan-900">
                  2 Air Compressors (8.5-10 Bar)
                </span>
                <span className="bg-white px-2.5 py-1 rounded-sm border border-[rgba(26,26,28,0.12)] font-bold text-emerald-800">
                  19 Dies Active &bull; 30 Dies Available
                </span>
                <span className="bg-white px-2.5 py-1 rounded-sm border border-[rgba(26,26,28,0.12)] font-bold">
                  Single Plant (No Multiple Plants)
                </span>
                <span className="bg-white px-2.5 py-1 rounded-sm border border-[rgba(26,26,28,0.12)] font-bold text-indigo-900">
                  5 Decoilers (DC-1 to DC-5)
                </span>
                <span className="bg-white px-2.5 py-1 rounded-sm border border-[rgba(26,26,28,0.12)] font-bold text-purple-900">
                  1 Straightener (ST-1)
                </span>
                <span className="bg-white px-2.5 py-1 rounded-sm border border-[rgba(26,26,28,0.12)] font-bold text-emerald-900">
                  1 Surface Grinder (SG-1)
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('facility')}
                  className="btn btn-primary"
                >
                  19 Power Presses &amp; Equipment
                </button>

                <button
                  onClick={() => onNavigate('metals')}
                  className="btn"
                >
                  Plant Metals (Rolls &amp; Sheets)
                </button>

                <button
                  onClick={() => onNavigate('portfolio')}
                  className="btn"
                >
                  Child Parts &amp; Showcase
                </button>

                <button
                  onClick={() => onOpenEmergencyModal()}
                  className="emergency-pill"
                >
                  Emergency Line-Down
                </button>
              </div>
            </div>

            {/* Right Column: Architectural Panel (Confidentiality & Production Specs) */}
            <div className="blueprint-panel aspect-[4/5] max-w-md mx-auto lg:max-w-none w-full">
              <div className="flex items-center justify-between mb-4 mono text-[#1a1a1c]/80 text-[11px]">
                <span className="font-bold">Single Dedicated Plant Unit</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <Lock className="w-3 h-3" /> NDA Protected
                </span>
              </div>

              {/* Architectural Production Shield Box (Diagrams Removed for Confidentiality) */}
              <div 
                className="blueprint-svg p-6 group cursor-pointer flex flex-col justify-between" 
                onClick={() => onNavigate('drawings')}
                title="Click to explore Parts Showcase & Image Area"
              >
                <div className="flex items-center justify-between w-full mono text-[10px] text-[#1a1a1c]/50">
                  <span>SINGLE PLANT // 19 PRESSES</span>
                  <span className="text-[#c52222] font-bold">IATF 16949</span>
                </div>

                <div className="text-center space-y-3 py-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#f2efeb] border border-[rgba(26,26,28,0.12)] flex items-center justify-center text-[#c52222]">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <span className="mono text-xs font-bold text-[#c52222] uppercase block">
                      OEM Customer Design Privacy
                    </span>
                    <h3 className="font-serif font-bold text-xl text-[#1a1a1c]">
                      Drawings Kept Strictly Confidential
                    </h3>
                    <p className="text-xs text-[#1a1a1c]/70 font-sans max-w-xs mx-auto leading-relaxed">
                      Proprietary CAD diagrams protected under client bilateral NDAs. Component physical photo areas &amp; production metrics displayed.
                    </p>
                  </div>
                </div>

                <div className="w-full flex items-center justify-between text-[11px] mono text-[#1a1a1c]/70 pt-2 border-t border-[rgba(26,26,28,0.08)]">
                  <span className="font-bold">Area for Parts Images</span>
                  <span className="text-[#c52222] font-bold group-hover:underline">Open Showcase &rarr;</span>
                </div>
              </div>

              {/* Data Grid with Cormorant Garamond Values & Space Mono Labels */}
              <div className="data-grid">
                <div className="data-cell">
                  <span className="mono text-[#1a1a1c]/60">Press Fleet</span>
                  <span className="value">19 Presses</span>
                </div>
                <div className="data-cell">
                  <span className="mono text-[#1a1a1c]/60">Dies Inventory</span>
                  <span className="value">19 / 30 Dies</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. PLANT CAPABILITIES STRIP (19 Presses, Dies per Capacity, Decoiler/Recoiler, Grinders, Measuring Tools) */}
      <section id="topic-plant-strip" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[rgba(26,26,28,0.1)]">
          <div className="space-y-1">
            <span className="mono text-xs text-[#c52222] font-bold uppercase tracking-wider">
              Single Plant Manufacturing Infrastructure
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#1a1a1c]">
              19 Power Presses, 30 Dies, Grinders &amp; Dimensional Inspection
            </h2>
            <p className="text-xs sm:text-sm text-[#1a1a1c]/70 font-sans">
              Concentrated single-roof facility with 19 distinct presses, 19 active dies, 30 dies total available, and full in-house metrology.
            </p>
          </div>
          <button
            onClick={() => onNavigate('facility')}
            className="btn btn-primary !py-2 !px-4 text-xs shrink-0"
          >
            Inspect All 19 Presses &amp; Equipment &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* Card 1: 19 Power Presses (PP-1 to PP-19) */}
          <div className="arch-card p-5 bg-white border border-[#1a1a1c] rounded-sm space-y-3">
            <div className="flex items-center justify-between">
              <Cpu className="w-5 h-5 text-[#c52222]" />
              <span className="mono text-xs font-bold bg-[#f2efeb] px-2 py-0.5 rounded-sm">PP-1 to PP-19</span>
            </div>
            <h3 className="font-serif font-bold text-xl text-[#1a1a1c]">19 Power Presses</h3>
            <p className="text-xs text-[#1a1a1c]/70 font-sans leading-relaxed">
              Exact plant roster: PP-1 to PP-19 across 5T to 150T (150T, 50T, 30T, 20T, 10T, 5T), shut heights from 6" to 14", stroke lengths from 1 1/2" to 5", plus 2 industrial air compressors.
            </p>
            <div className="pt-2 border-t border-[rgba(26,26,28,0.08)]">
              <span 
                onClick={() => onNavigate('facility')}
                className="mono text-[11px] text-[#c52222] font-bold hover:underline cursor-pointer"
              >
                Inspect PP-1 to PP-19 Specification Cards &rarr;
              </span>
            </div>
          </div>

          {/* Card 2: 19 Active Dies & 30 Total Dies Available */}
          <div id="topic-dies-summary" className="arch-card p-5 bg-white border border-[#1a1a1c] rounded-sm space-y-3 scroll-mt-24">
            <div className="flex items-center justify-between">
              <PlayCircle className="w-5 h-5 text-emerald-700" />
              <span className="mono text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-sm">
                19 Active / 30 Total
              </span>
            </div>
            <h3 className="font-serif font-bold text-xl text-[#1a1a1c]">19 Active Dies &bull; 30 Available</h3>
            <p className="text-xs text-[#1a1a1c]/70 font-sans leading-relaxed">
              19 active dies actively mounted on our 19 presses running serial child parts, plus 11 standby dies in storage racks ready for fast SMED changeovers.
            </p>
            <div className="pt-2 border-t border-[rgba(26,26,28,0.08)]">
              <span 
                onClick={() => onNavigate('facility')}
                className="mono text-[11px] text-[#c52222] font-bold hover:underline cursor-pointer"
              >
                Inspect All 30 Dies in Inventory &rarr;
              </span>
            </div>
          </div>

          {/* Card 3: 5 Decoilers & 1 Auto Straightener */}
          <div id="topic-coil-grinders" className="arch-card p-5 bg-white border border-[#1a1a1c] rounded-sm space-y-3 scroll-mt-24">
            <div className="flex items-center justify-between">
              <Sliders className="w-5 h-5 text-indigo-700" />
              <span className="mono text-xs font-bold bg-indigo-50 text-indigo-900 border border-indigo-200 px-2 py-0.5 rounded-sm">5 Decoilers + 1 Straightener</span>
            </div>
            <h3 className="font-serif font-bold text-xl text-[#1a1a1c]">5 Decoilers &amp; 1 Straightener</h3>
            <p className="text-xs text-[#1a1a1c]/70 font-sans leading-relaxed">
              5 motorized decoilers (0.5T to 3.0T, DC-1 to DC-5) and 1 precision 7-roller auto straightener (ST-1, 0.3-3.5mm thickness) with 0.01mm micrometer dial adjustment.
            </p>
            <div className="pt-2 border-t border-[rgba(26,26,28,0.08)]">
              <span 
                onClick={() => onNavigate('facility')}
                className="mono text-[11px] text-[#c52222] font-bold hover:underline cursor-pointer"
              >
                Inspect 5 Decoilers &amp; Straightener Cards &rarr;
              </span>
            </div>
          </div>

          {/* Card 4: Surface Grinder */}
          <div className="arch-card p-5 bg-white border border-[#1a1a1c] rounded-sm space-y-3">
            <div className="flex items-center justify-between">
              <Wrench className="w-5 h-5 text-emerald-700" />
              <span className="mono text-xs font-bold bg-emerald-50 text-emerald-900 border border-emerald-200 px-2 py-0.5 rounded-sm">1 Surface Grinder</span>
            </div>
            <h3 className="font-serif font-bold text-xl text-[#1a1a1c]">1 Surface Grinder (SG-1)</h3>
            <p className="text-xs text-[#1a1a1c]/70 font-sans leading-relaxed">
              Primary hydraulic surface grinder (SG-1) with 600x300mm permanent magnetic chuck and 0.001mm downfeed resolution for punch sharpening and die plate resurfacing.
            </p>
            <div className="pt-2 border-t border-[rgba(26,26,28,0.08)]">
              <span 
                onClick={() => onNavigate('facility')}
                className="mono text-[11px] text-[#c52222] font-bold hover:underline cursor-pointer"
              >
                View SG-1 Surface Grinder Specifications &rarr;
              </span>
            </div>
          </div>

          {/* Card 5: All Dimensional Measuring Tools */}
          <div id="topic-metrology-dg" className="arch-card p-5 bg-white border border-[#1a1a1c] rounded-sm space-y-3 scroll-mt-24">
            <div className="flex items-center justify-between">
              <Gauge className="w-5 h-5 text-[#c52222]" />
              <span className="mono text-xs font-bold bg-[#f2efeb] px-2 py-0.5 rounded-sm">Full Dimensions</span>
            </div>
            <h3 className="font-serif font-bold text-xl text-[#1a1a1c]">Dimensional Measuring Tools</h3>
            <p className="text-xs text-[#1a1a1c]/70 font-sans leading-relaxed">
              Complete instruments to check product dimensions: Mitutoyo verniers, micrometers, dial bore gauges, 2D height master, profile projector, pin gauges &amp; bevel protractors.
            </p>
            <div className="pt-2 border-t border-[rgba(26,26,28,0.08)]">
              <span 
                onClick={() => onNavigate('facility')}
                className="mono text-[11px] text-[#c52222] font-bold hover:underline cursor-pointer"
              >
                Inspect All Measuring Tools &rarr;
              </span>
            </div>
          </div>

          {/* Card 6: 880 kVA DG Generator Facility */}
          <div className="arch-card p-5 bg-white border border-[#1a1a1c] rounded-sm space-y-3">
            <div className="flex items-center justify-between">
              <Zap className="w-5 h-5 text-[#c52222]" />
              <span className="mono text-xs font-bold bg-[#f2efeb] px-2 py-0.5 rounded-sm">100% Power Uptime</span>
            </div>
            <h3 className="font-serif font-bold text-xl text-[#1a1a1c]">880 kVA DG Generator Backup</h3>
            <p className="text-xs text-[#1a1a1c]/70 font-sans leading-relaxed">
              500 kVA + 380 kVA silent DG gensets with automated AMF sync panel (&lt;8s switchover) ensuring 100% non-stop operation of all 19 presses and equipment.
            </p>
            <div className="pt-2 border-t border-[rgba(26,26,28,0.08)]">
              <span 
                onClick={() => onNavigate('facility')}
                className="mono text-[11px] text-[#c52222] font-bold hover:underline cursor-pointer"
              >
                Inspect DG Generator Details &rarr;
              </span>
            </div>
          </div>

          {/* Card 7: Metals Used in Plant (Rolls & Sheets Dimensions for Dies) */}
          <div id="topic-plant-metals" className="arch-card p-5 bg-white border border-[#1a1a1c] rounded-sm space-y-3 scroll-mt-24 md:col-span-2 lg:col-span-3">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[rgba(26,26,28,0.08)] pb-2.5">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#c52222]" />
                <h3 className="font-serif font-bold text-xl text-[#1a1a1c]">Metals Used in Plant (Rolls, Sheets &amp; Dimensions)</h3>
              </div>
              <span className="mono text-xs font-bold bg-[#1a1a1c] text-[#f2efeb] px-2.5 py-0.5 rounded-sm">
                Used with Dies for Child Parts
              </span>
            </div>
            <p className="text-xs text-[#1a1a1c]/70 font-sans leading-relaxed">
              We process 8 core automotive metals in two principal formats: <strong>Rolls (Coils)</strong> for our motorized decoiler &amp; auto-straightener line (0.20mm &ndash; 4.5mm thickness, 15mm &ndash; 650mm width, up to 3.0T max weight) and <strong>Sheets (Cut Blanks)</strong> for hydraulic shears and press beds (up to 8.0mm plate, 1250&times;2500mm envelope). Each metal is calibrated for specific progressive, compound, and deep drawing dies producing vehicle child parts.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs">
              <div className="p-2.5 rounded-xs bg-[#f2efeb]">
                <span className="mono text-[10px] text-[#1a1a1c]/60 block uppercase font-bold">Roll / Coil Line</span>
                <span className="font-bold text-[#1a1a1c] mono text-[11px] block mt-0.5">15&ndash;650mm &bull; Max 3.0T</span>
                <span className="text-[10px] text-[#1a1a1c]/60 mono">Decoiler &amp; Straightener</span>
              </div>
              <div className="p-2.5 rounded-xs bg-[#f2efeb]">
                <span className="mono text-[10px] text-[#1a1a1c]/60 block uppercase font-bold">Sheet / Blank Line</span>
                <span className="font-bold text-[#1a1a1c] mono text-[11px] block mt-0.5">Up to 1250&times;2500mm</span>
                <span className="text-[10px] text-[#1a1a1c]/60 mono">&plusmn;0.15mm Tolerance</span>
              </div>
              <div className="p-2.5 rounded-xs bg-[#f2efeb]">
                <span className="mono text-[10px] text-[#1a1a1c]/60 block uppercase font-bold">Thickness Envelope</span>
                <span className="font-bold text-[#c52222] mono text-[11px] block mt-0.5">0.20mm &ndash; 8.00mm</span>
                <span className="text-[10px] text-[#1a1a1c]/60 mono">Thin Strip to Heavy Plate</span>
              </div>
              <div className="p-2.5 rounded-xs bg-[#f2efeb]">
                <span className="mono text-[10px] text-[#1a1a1c]/60 block uppercase font-bold">Metals Handled</span>
                <span className="font-bold text-[#1a1a1c] mono text-[11px] block mt-0.5">CRCA, HRPO, SS, DP600</span>
                <span className="text-[10px] text-[#1a1a1c]/60 mono">Alum, GI/GA, Copper</span>
              </div>
            </div>
            <div className="pt-2 border-t border-[rgba(26,26,28,0.08)] flex items-center justify-between">
              <span 
                onClick={() => onNavigate('metals')}
                className="mono text-[11px] text-[#c52222] font-bold hover:underline cursor-pointer"
              >
                Inspect Complete Metal Rolls &amp; Sheets Dimensions &amp; Die Matrix &rarr;
              </span>
              <span className="text-[10px] mono text-[#1a1a1c]/50 hidden sm:inline">IATF 16949 Heat Batch Traceable</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CONFIDENTIALITY & PARTS IMAGE AREA SHOWCASE */}
      <section id="topic-parts-image-area" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 scroll-mt-24">
        <div className="rounded-sm bg-white border border-[#1a1a1c] p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[rgba(26,26,28,0.1)] pb-4">
            <div className="space-y-1">
              <span className="mono text-xs text-[#c52222] font-bold uppercase">
                Area for Parts Images &bull; To Be Added Later
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1a1a1c]">
                Automobile Child Parts Image Area (Sample Slots)
              </h2>
              <p className="text-xs text-[#1a1a1c]/70 font-sans">
                Proprietary drawings have been replaced with designated image slots for real stamped automobile components.
              </p>
            </div>
            <button
              onClick={() => onNavigate('drawings')}
              className="btn btn-primary !py-2 !px-4 text-xs shrink-0"
            >
              Open Complete Parts Gallery ({PARTS_IMAGE_GALLERY_ITEMS.length} Items) &rarr;
            </button>
          </div>

          {/* Preview of 4 Part Image Slots */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PARTS_IMAGE_GALLERY_ITEMS.slice(0, 4).map((item) => (
              <div 
                key={item.id} 
                onClick={() => onNavigate('drawings')}
                className="p-4 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.12)] space-y-3 cursor-pointer hover:border-[#1a1a1c] transition-colors"
              >
                <div className="w-full aspect-[4/3] rounded-xs border-2 border-dashed border-[rgba(26,26,28,0.2)] bg-white flex flex-col items-center justify-center text-center p-2">
                  <ImageIcon className="w-6 h-6 text-[#c52222] mb-1" />
                  <span className="mono text-[9px] text-[#c52222] font-bold uppercase block">[ Part Image ]</span>
                  <span className="mono text-[8px] text-[#1a1a1c]/50">To Be Added Later</span>
                </div>
                <div className="space-y-0.5">
                  <span className="mono text-[10px] text-[#1a1a1c]/60 font-bold block">{item.partNumber}</span>
                  <h4 className="font-serif font-bold text-sm text-[#1a1a1c] truncate">{item.partName}</h4>
                  <span className="mono text-[10px] text-[#c52222] block font-bold">{item.pressTonnage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WORKING FOR & HIRE TOOL ROOM FORMAT SUMMARY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Working For Preview */}
          <div id="topic-working-for" className="arch-card p-6 bg-white border border-[#1a1a1c] rounded-sm space-y-4 scroll-mt-24">
            <div className="flex items-center justify-between">
              <span className="mono text-xs text-[#c52222] font-bold uppercase">Client Roster</span>
              <span className="badge-clean text-[10px]">Strict NDA Protected</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#1a1a1c]">
              Working For (Automotive Companies)
            </h3>
            <p className="text-xs text-[#1a1a1c]/70 font-sans leading-relaxed">
              We manufacture child parts for leading automotive 4-wheeler passenger OEMs, commercial truck builders, EV platforms, and Tier-1 systems integrators. Company names will be added as per your authorized instructions.
            </p>
            <div className="space-y-2 pt-2">
              {WORKING_FOR_COMPANIES.slice(0, 3).map((w) => (
                <div key={w.id} className="p-2.5 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.08)] flex items-center justify-between text-xs font-sans">
                  <span className="font-bold text-[#1a1a1c] truncate">{w.displayName}</span>
                  <span className="mono text-[10px] text-[#c52222] shrink-0 ml-2">{w.companyCategory}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => onNavigate('facility')}
              className="mono text-xs text-[#c52222] font-bold hover:underline block pt-1"
            >
              View Full Working For Company Area &rarr;
            </button>
          </div>

          {/* Hire Tool Room Format Preview */}
          <div id="topic-hire-tool-room" className="arch-card p-6 bg-white border border-[#1a1a1c] rounded-sm space-y-4 scroll-mt-24">
            <div className="flex items-center justify-between">
              <span className="mono text-xs text-[#c52222] font-bold uppercase">Machinery Hire</span>
              <span className="badge-clean text-[10px]">Format Area Ready</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#1a1a1c]">
              Hire Tool Room Facilities
            </h3>
            <p className="text-xs text-[#1a1a1c]/70 font-sans leading-relaxed">
              A designated, proper format area ready for your tool room machinery specifications—covering VMCs, Wire Cut EDMs, Surface Grinders, Lathes, and Press Tool Try-out bays for contract tool room hire.
            </p>
            <div className="space-y-2 pt-2">
              {HIRE_TOOL_ROOM_FACILITIES.slice(0, 3).map((t) => (
                <div key={t.id} className="p-2.5 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.08)] flex items-center justify-between text-xs font-sans">
                  <span className="font-bold text-[#1a1a1c] truncate">{t.machineTitle}</span>
                  <span className="mono text-[10px] text-[#1a1a1c]/60 shrink-0 ml-2">{t.hireAvailability}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => onNavigate('facility')}
              className="mono text-xs text-[#c52222] font-bold hover:underline block pt-1"
            >
              Inquire Tool Room Hire / Submit Specs &rarr;
            </button>
          </div>

        </div>
      </section>

      {/* 5. WHAT IS A "CHILD PART"? EXPLAINER */}
      <section id="topic-child-parts-explainer" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="arch-card p-8 sm:p-12 space-y-8 bg-white">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs mono text-[#c52222] font-bold">
              <Layers className="w-3.5 h-3.5" />
              <span>Core Manufacturing Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1c] tracking-tight">
              What Is A &ldquo;Child Part&rdquo; In Automotive Manufacturing?
            </h2>
            <p className="text-[#1a1a1c]/80 text-sm sm:text-base leading-relaxed font-sans">
              In automotive design and manufacturing, every component of a vehicle plays a crucial role in its functionality, performance, and safety. Among these components are <strong className="text-[#1a1a1c]">&ldquo;child parts&rdquo;</strong>: smaller individual parts that come together to form larger assemblies or <strong className="text-[#1a1a1c]">&ldquo;parent assemblies.&rdquo;</strong>
            </p>
          </div>

          <div className="p-6 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.12)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <span className="mono text-xs text-[#c52222] font-bold tracking-wider">
                  Real Automotive Example: The Car Door Assembly
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#1a1a1c]">
                  Parent Assembly vs. Child Parts
                </h3>
                <p className="text-xs sm:text-sm text-[#1a1a1c]/70 leading-relaxed font-sans">
                  In a vehicle side door assembly (the parent system), the door cannot operate without its critical child parts:
                </p>

                <div className="space-y-2.5 text-xs font-sans">
                  <div className="flex items-start gap-2.5 text-[#1a1a1c]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#c52222] shrink-0 mt-0.5" />
                    <span><strong className="text-[#1a1a1c]">Door Hinge Pivot Pin:</strong> Precision turned pin with ±0.005mm tolerance ensuring sag-free door opening.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[#1a1a1c]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#c52222] shrink-0 mt-0.5" />
                    <span><strong className="text-[#1a1a1c]">Rotary Latch Pawl:</strong> Fine-blanked locking claw preventing door opening during lateral impact.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[#1a1a1c]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#c52222] shrink-0 mt-0.5" />
                    <span><strong className="text-[#1a1a1c]">Striker Retaining Plate:</strong> Progressive stamped reinforcement resisting 11 kN transverse separation load.</span>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => onNavigate('portfolio')}
                    className="btn btn-primary !py-2.5 !px-5 text-xs"
                  >
                    <span>View All Child Parts Subsystems</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-sm overflow-hidden border border-[rgba(26,26,28,0.15)] relative bg-[#1a1a1c]">
                  <img 
                    src="https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?auto=format&fit=crop&w=1000&q=80" 
                    alt="Car door assembly line" 
                    className="w-full h-[340px] object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                  
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-sm bg-white/95 backdrop-blur-md border border-[rgba(26,26,28,0.12)]">
                    <div className="flex items-center gap-2 text-xs mono text-[#c52222] font-bold mb-1">
                      <Clock className="w-4 h-4" />
                      <span>THE SUPPLY CHAIN BOTTLENECK</span>
                    </div>
                    <div className="text-xs text-[#1a1a1c]/80 leading-relaxed font-sans">
                      If even one of these small child parts is defective or delayed, the entire car door cannot be mounted, halting the OEM vehicle assembly line at a cost of up to $50,000 per minute.
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-sm bg-white border border-[#1a1a1c] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="mono text-xs text-[#c52222] font-bold">19 Power Presses &bull; 19 Active Dies (30 Available) &bull; Metrology</span>
            <h3 className="text-3xl font-serif font-bold text-[#1a1a1c]">Ready to Partner for Automobile Child Parts?</h3>
            <p className="text-xs sm:text-sm text-[#1a1a1c]/70 font-sans max-w-xl">
              From progressive die tooling to 24/7 serial stamping with complete DG generator backup and zero line-down assurance.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenContactModal('Automobile Stamping RFQ')}
              className="btn btn-primary"
            >
              Request Plant RFQ
            </button>
            <button
              onClick={() => onOpenEmergencyModal()}
              className="emergency-pill"
            >
              Hotline: {COMPANY_INFO.emergencyHotline}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
