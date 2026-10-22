import React from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  ShieldAlert, 
  ArrowUp, 
  Clock,
  Layers,
  ChevronRight,
  Compass
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenEmergencyModal: () => void;
  onOpenContactModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onNavigate, 
  onOpenEmergencyModal, 
  onOpenContactModal 
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Capabilities' },
    { id: 'portfolio', label: 'Child Parts & Showcase' },
    { id: 'metals', label: 'Plant Metals' },
    { id: 'facility', label: 'Plant & Machinery' },
    { id: 'emergency', label: 'JIT Supply' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-[#f2efeb] border-t border-[rgba(26,26,28,0.1)] text-[#1a1a1c] text-xs">
      
      {/* Variation 2 Direct Status Strip */}
      <div className="border-b border-[rgba(26,26,28,0.08)] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="mono text-[#1a1a1c]/80 text-[11px]">
            IATF 16949:2016 Certified &bull; EST. {COMPANY_INFO.founded}
          </div>

          <button
            onClick={onOpenEmergencyModal}
            className="emergency-pill mono"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Emergency Line-Down: {COMPANY_INFO.emergencyHotline}</span>
          </button>

          <div className="mono text-[#1a1a1c]/80 text-[11px]">
            Gurugram Industrial Hub, India
          </div>
        </div>
      </div>

      {/* Main Footer Links & Architectural Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="cursor-pointer" onClick={() => onNavigate('home')}>
              <span className="brand text-[#1a1a1c] block text-3xl">
                Globle Bhavya
              </span>
              <span className="mono text-[10px] text-[#c52222] tracking-widest">
                Automotive Architecture &bull; Child Parts Engineering
              </span>
            </div>

            <p className="text-[#1a1a1c]/70 text-xs leading-relaxed max-w-sm">
              Incorporated by automotive manufacturing engineers. At Globle Bhavya, we operate a single dedicated manufacturing plant engineering high-precision child parts across 19 power presses, 19 active dies (30 available), 5 decoilers, 1 straightener, 1 surface grinder, and complete dimensional metrology.
            </p>

            <div className="mono text-[11px] text-[#1a1a1c]/70 space-y-1.5 pt-2">
              <div>Facility Structure: <span className="text-[#1a1a1c] font-bold">Single Dedicated Plant &bull; 19 Presses</span></div>
              <div>Dies Tooling: <span className="text-emerald-800 font-bold">19 Active Mounted &bull; 30 Total Available</span></div>
              <div>Quality Standards: <span className="text-[#c52222] font-bold">IATF 16949:2016 Certified</span></div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="mono text-xs font-bold text-[#1a1a1c]">
              Navigation
            </div>
            <ul className="space-y-2 mono text-[11px]">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      scrollToTop();
                    }}
                    className="hover:text-[#c52222] transition-colors flex items-center gap-1.5 text-[#1a1a1c]/70 hover:translate-x-1 duration-150"
                  >
                    <ChevronRight className="w-3 h-3 text-[#c52222]" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Automotive Subsystems */}
          <div className="space-y-3">
            <div className="mono text-xs font-bold text-[#1a1a1c]">
              Subsystems Supplied
            </div>
            <ul className="space-y-2 text-[#1a1a1c]/70 text-xs">
              <li>Door Latches, Hinges &amp; Strikers</li>
              <li>Hydraulic Caliper Slide Pins &amp; Clips</li>
              <li>EV Battery Interconnect Busbars</li>
              <li>Steering Ball Studs &amp; Sleeves</li>
              <li>Turbo Actuator Rods &amp; Flanges</li>
              <li>Window Regulator Spindles</li>
            </ul>
          </div>

          {/* Contact & Emergency Hotline */}
          <div className="space-y-3">
            <div className="mono text-xs font-bold text-[#1a1a1c]">
              Engineering RFQ
            </div>
            <div className="space-y-3 text-[#1a1a1c]/80 text-xs">
              <div>
                <div className="mono text-[10px] text-[#c52222] font-bold">LINE-DOWN DISPATCH (24/7)</div>
                <a href={`tel:${COMPANY_INFO.emergencyHotline}`} className="mono font-bold text-[#1a1a1c] hover:text-[#c52222]">
                  {COMPANY_INFO.emergencyHotline}
                </a>
              </div>

              <div>
                <div className="mono text-[10px] text-[#1a1a1c]/50">DIRECT PHONE</div>
                <a href={`tel:${COMPANY_INFO.phone}`} className="mono text-[#1a1a1c] hover:text-[#c52222]">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div>
                <div className="mono text-[10px] text-[#1a1a1c]/50">ENGINEERING INQUIRIES</div>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#1a1a1c] hover:text-[#c52222]">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenContactModal}
                  className="btn btn-primary !py-2 !px-4 text-[10px] w-full"
                >
                  Submit Drawing For RFQ
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-[rgba(26,26,28,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#1a1a1c]/60 mono">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>IATF 16949:2016 &bull; ISO 9001 &bull; VDA 6.3</span>
            <button
              onClick={scrollToTop}
              className="p-2 border border-[rgba(26,26,28,0.15)] bg-white hover:bg-[#1a1a1c] hover:text-white text-[#1a1a1c] transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
};
