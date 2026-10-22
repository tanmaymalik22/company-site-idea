import React from 'react';
import { 
  Building2, 
  Award, 
  CheckCircle2, 
  Users, 
  ShieldCheck, 
  Layers, 
  Clock, 
  ArrowRight,
  Target
} from 'lucide-react';
import { COMPANY_INFO, COMPANY_MILESTONES } from '../data/companyData';
import { PageId } from '../types';

interface AboutUsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenContactModal: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({
  onNavigate,
  onOpenContactModal
}) => {
  return (
    <div className="space-y-20 pb-20 bg-[#f2efeb] text-[#1a1a1c]">
      
      {/* Page Header Banner */}
      <section className="bg-white border-b border-[rgba(26,26,28,0.08)] py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 mono text-xs text-[#c52222] font-bold px-3 py-1 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.12)]">
            <Building2 className="w-3.5 h-3.5" />
            <span>Corporate Profile &bull; Est. {COMPANY_INFO.founded}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#1a1a1c] tracking-tight">
            About Globle Bhavya
          </h1>
          <p className="text-[#1a1a1c]/70 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-sans">
            Consolidating advanced automotive design, precision child parts engineering, and serial manufacturing under one comprehensive umbrella.
          </p>
        </div>
      </section>

      {/* The Founding Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="mono text-xs text-[#c52222] font-bold tracking-wider">
              Our Genesis &amp; Automotive Heritage
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1a1a1c] tracking-tight leading-tight">
              Incorporated by Automobile Engineers to Redefine Sub-Component Reliability
            </h2>
            <p className="text-[#1a1a1c]/80 text-sm sm:text-base leading-relaxed font-sans">
              Globle Bhavya was incorporated in {COMPANY_INFO.founded} by automobile engineers {COMPANY_INFO.foundingEngineers}. The vision was born from a realization in vehicle assembly plants: while major automotive modules are celebrated, vehicle functionality and uptime hinge entirely on the micro-precision of individual <strong className="text-[#1a1a1c]">&ldquo;child parts.&rdquo;</strong>
            </p>
            <p className="text-[#1a1a1c]/70 text-sm leading-relaxed font-sans">
              Over the last decade, we expanded from an advanced engineering design and CAD studio into a full-scale <strong className="text-[#1a1a1c] font-semibold">{COMPANY_INFO.facilityArea}</strong>. Today, we operate as a direct Tier-1 and Tier-2 supplier to major passenger vehicle, commercial transport, and EV manufacturers.
            </p>

            <div className="p-4 rounded-sm bg-white border border-[rgba(26,26,28,0.12)] space-y-2">
              <div className="mono font-bold text-[#1a1a1c] text-xs">Direct Business with Automotive OEMs:</div>
              <p className="text-[#1a1a1c]/70 text-xs leading-relaxed font-sans">
                We eliminate multi-tier distributor markups and supply chain opacity by working directly with automotive OEMs and systems integrators. We synchronize with plant takt times, deliver on-time JIT batches, and safeguard customer lines with our 24/7 rapid emergency dispatch.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-sm overflow-hidden border border-[rgba(26,26,28,0.15)] relative">
              <img 
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80" 
                alt="Automobile engineers collaborating on CAD design" 
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-sm bg-white/95 backdrop-blur-md border border-[rgba(26,26,28,0.12)] text-xs text-[#1a1a1c]">
                <div className="font-serif font-bold text-base">20+ Combined Years of Engineering Experience</div>
                <div className="text-[#1a1a1c]/70 mt-0.5 font-sans">Specialized in stamping dies, kinematic assemblies, and micro-tolerance turning.</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission, Vision & Core Values */}
      <section className="bg-white py-20 border-y border-[rgba(26,26,28,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 mono text-xs text-[#c52222] font-bold">
              <Target className="w-3.5 h-3.5" />
              <span>Guiding Principles</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1a1a1c] tracking-tight">
              Our Mission, Vision &amp; Core Values
            </h2>
            <p className="text-[#1a1a1c]/70 text-sm font-sans">
              The foundational pillars that guide our engineering precision and OEM partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.12)] space-y-3">
              <div className="w-8 h-8 rounded-sm bg-white border border-[rgba(26,26,28,0.15)] flex items-center justify-center text-[#1a1a1c] mono font-bold text-xs">
                01
              </div>
              <h3 className="text-xl font-serif font-bold text-[#1a1a1c]">Innovation</h3>
              <p className="text-xs text-[#1a1a1c]/70 leading-relaxed font-sans">
                Continually pioneering advanced progressive tooling, lightweight HSLA materials, and EV high-voltage component architectures.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.12)] space-y-3">
              <div className="w-8 h-8 rounded-sm bg-white border border-[rgba(26,26,28,0.15)] flex items-center justify-center text-[#1a1a1c] mono font-bold text-xs">
                02
              </div>
              <h3 className="text-xl font-serif font-bold text-[#1a1a1c]">Precision &amp; Quality</h3>
              <p className="text-xs text-[#1a1a1c]/70 leading-relaxed font-sans">
                Zero-defect tolerance threshold (PPM &lt; 3) verified through Zeiss CNC CMM scanning and 100% automated optical telecentric sorting.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.12)] space-y-3">
              <div className="w-8 h-8 rounded-sm bg-white border border-[rgba(26,26,28,0.15)] flex items-center justify-center text-[#1a1a1c] mono font-bold text-xs">
                03
              </div>
              <h3 className="text-xl font-serif font-bold text-[#1a1a1c]">Accountability</h3>
              <p className="text-xs text-[#1a1a1c]/70 leading-relaxed font-sans">
                Complete traceability from certified steel coil lots to finished serialized child parts, backed by transparent PPAP documentation.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.12)] space-y-3">
              <div className="w-8 h-8 rounded-sm bg-white border border-[rgba(26,26,28,0.15)] flex items-center justify-center text-[#c52222] mono font-bold text-xs">
                04
              </div>
              <h3 className="text-xl font-serif font-bold text-[#1a1a1c]">Zero Downtime</h3>
              <p className="text-xs text-[#1a1a1c]/70 leading-relaxed font-sans">
                Upholding our promise that no customer assembly line shall ever stop due to our parts, reinforced by our 24/7 emergency dispatch hotline.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Timeline & Milestones */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 mono text-xs text-[#c52222] font-bold">
            <Clock className="w-3.5 h-3.5" />
            <span>Growth &amp; Innovation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1a1a1c] tracking-tight">
            Our Journey Over the Past Decade
          </h2>
          <p className="text-[#1a1a1c]/70 text-sm font-sans">
            From an automotive engineering prototyping studio to a focused, single-unit precision automotive stamping plant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_MILESTONES.map((m, idx) => (
            <div key={idx} className="arch-card p-6 space-y-3 bg-white rounded-sm">
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-3xl text-[#c52222]">
                  {m.year}
                </span>
                <span className="mono text-[10px] text-[#1a1a1c]/60 bg-[#f2efeb] px-2 py-0.5 rounded-sm border border-[rgba(26,26,28,0.12)]">
                  Milestone
                </span>
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1a1a1c]">
                {m.title}
              </h3>
              <p className="text-xs text-[#1a1a1c]/70 leading-relaxed font-sans">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-sm bg-white border border-[#1a1a1c] p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1c]">
            Ready to Collaborate With Our Automotive Engineering Team?
          </h2>
          <p className="text-[#1a1a1c]/70 text-sm max-w-2xl mx-auto font-sans">
            Whether developing a brand-new vehicle subsystem or requiring high-precision child parts with zero defect risk, we are ready to partner.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenContactModal}
              className="btn btn-primary"
            >
              Get In Touch With Engineering
            </button>
            <button
              onClick={() => onNavigate('portfolio')}
              className="btn"
            >
              Child Parts &amp; Showcase
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
