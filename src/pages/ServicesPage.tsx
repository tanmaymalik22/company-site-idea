import React, { useState } from 'react';
import { 
  Wrench, 
  Layers, 
  Compass, 
  ShieldAlert, 
  Award, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  FileText
} from 'lucide-react';
import { SERVICES_LIST } from '../data/companyData';
import { PageId } from '../types';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEmergencyModal: () => void;
  onOpenContactModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenEmergencyModal,
  onOpenContactModal
}) => {
  const [activeTab, setActiveTab] = useState<string>(SERVICES_LIST[0].id);

  const selectedService = SERVICES_LIST.find(s => s.id === activeTab) || SERVICES_LIST[0];

  return (
    <div className="space-y-20 pb-20 bg-[#f2efeb] text-[#1a1a1c]">
      
      {/* Page Header Banner */}
      <section className="bg-white border-b border-[rgba(26,26,28,0.08)] py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 mono text-xs text-[#c52222] font-bold px-3 py-1 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.12)]">
            <Wrench className="w-3.5 h-3.5" />
            <span>Comprehensive Automotive Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#1a1a1c] tracking-tight">
            Our Services &amp; Engineering Solutions
          </h1>
          <p className="text-[#1a1a1c]/70 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-sans">
            From initial CAD styling and subsystem kinematics to high-volume child parts stamping, in-house tooling, and 24/7 emergency line-down dispatch.
          </p>
        </div>
      </section>

      {/* Main Interactive Services Deep Dive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-[rgba(26,26,28,0.1)] mb-10">
          {SERVICES_LIST.map((srv) => {
            const isActive = srv.id === activeTab;
            return (
              <button
                key={srv.id}
                onClick={() => setActiveTab(srv.id)}
                className={`px-4 py-2 rounded-sm text-xs mono uppercase tracking-wider whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-[#1a1a1c] text-[#f2efeb] border-[#1a1a1c] font-bold'
                    : 'bg-white text-[#1a1a1c]/70 hover:text-[#1a1a1c] hover:bg-[#f2efeb] border-[rgba(26,26,28,0.12)]'
                }`}
              >
                {srv.title}
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed View */}
        <div className="arch-card p-8 sm:p-12 space-y-10 bg-white rounded-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="mono text-xs text-[#c52222] font-bold tracking-wider">
                {selectedService.tagline}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1c] tracking-tight">
                {selectedService.title}
              </h2>
              <p className="text-[#1a1a1c]/80 text-sm sm:text-base leading-relaxed font-sans">
                {selectedService.description}
              </p>

              <div className="space-y-3 pt-2">
                <div className="mono text-xs font-bold text-[#1a1a1c] uppercase tracking-wider">
                  Technical Specifications &amp; Capabilities:
                </div>
                <div className="space-y-2.5">
                  {selectedService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1a1a1c]/80 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#c52222] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenContactModal}
                  className="btn btn-primary"
                >
                  Request Technical Discussion
                </button>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="btn"
                >
                  Child Parts &amp; Showcase
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-sm overflow-hidden border border-[rgba(26,26,28,0.15)] relative shadow-md">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title} 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-sm bg-white/95 backdrop-blur-md border border-[rgba(26,26,28,0.12)] text-xs text-[#1a1a1c]">
                  <div className="font-serif font-bold text-base">{selectedService.title}</div>
                  <div className="text-[#1a1a1c]/70 text-[11px] mono">IATF 16949 / ISO 9001 Process Validated</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* Emergency Supply Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-sm bg-white border border-[#1a1a1c] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <div className="mono text-xs text-[#c52222] font-bold">
              Mission-Critical Supply Chain Protection
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1a1a1c]">
              Preventing Assembly Line Stoppages 24/7
            </h3>
            <p className="text-xs sm:text-sm text-[#1a1a1c]/70 max-w-xl font-sans">
              We maintain active consignment buffers of critical child components for automotive assembly plants, guaranteeing emergency dispatch within 4 hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenEmergencyModal}
              className="emergency-pill"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Line-Down Hotline</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
