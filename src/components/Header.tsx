import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  ShieldAlert, 
  Menu, 
  X, 
  ChevronRight,
  Compass
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenEmergencyModal: () => void;
  onOpenContactModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenEmergencyModal,
  onOpenContactModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Capabilities' },
    { id: 'portfolio', label: 'Child Parts & Showcase' },
    { id: 'metals', label: 'Plant Metals' },
    { id: 'facility', label: 'Plant & Machinery' },
    { id: 'emergency', label: 'JIT Supply' },
    { id: 'contact', label: 'Contact' }
  ];

  const handlePageClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#f2efeb]/95 backdrop-blur-md border-b border-[rgba(26,26,28,0.1)] text-[#1a1a1c]">
      
      {/* Top Architectural Engineering Strip */}
      <div className="border-b border-[rgba(26,26,28,0.06)] px-4 sm:px-6 lg:px-8 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-4 text-[#1a1a1c]/70 text-[11px] mono">
            <span className="text-[#c52222] font-bold">IATF 16949:2016</span>
            <span className="text-[#1a1a1c]/20 hidden sm:inline">&bull;</span>
            <span className="hidden sm:inline">SINGLE PLANT &bull; 19 POWER PRESSES (19 DIES ACTIVE / 30 AVAILABLE)</span>
            <span className="text-[#1a1a1c]/20 hidden md:inline">&bull;</span>
            <span className="hidden md:inline">GURUGRAM, INDIA INDUSTRIAL HUB</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="flex items-center gap-1.5 text-[11px] mono font-bold hover:text-[#c52222] transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-[#c52222]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenEmergencyModal}
              className="emergency-pill !py-1 !px-3 text-[10px]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              <span>Line-Down Hotline</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Architectural Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand - Cormorant Garamond Serif Italic from Variation 2 */}
          <div 
            onClick={() => handlePageClick('home')}
            className="flex items-baseline gap-2.5 cursor-pointer group"
          >
            <span className="brand text-[#1a1a1c] group-hover:text-[#c52222] transition-colors">
              Globle Bhavya
            </span>
            <span className="mono text-[10px] text-[#c52222] tracking-widest hidden sm:inline">
              [ Automotive Architecture ]
            </span>
          </div>

          {/* Desktop Navigation Links in Space Mono */}
          <nav className="hidden lg:flex items-center gap-1 mono">
            {navItems.map((item) => {
              const isActive = currentPage === item.id || (item.id === 'portfolio' && currentPage === 'drawings');
              return (
                <button
                  key={item.id}
                  onClick={() => handlePageClick(item.id)}
                  className={`px-3 py-2 text-[11px] tracking-wider transition-all rounded-sm ${
                    isActive
                      ? 'text-[#c52222] font-bold border-b-2 border-[#c52222] bg-[rgba(197,34,34,0.04)]'
                      : 'text-[#1a1a1c]/80 hover:text-[#1a1a1c] hover:bg-[rgba(26,26,28,0.04)]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenContactModal}
              className="btn btn-primary !py-2.5 !px-4 text-[10px]"
            >
              Request RFQ
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenEmergencyModal}
              className="emergency-pill !py-1 !px-2.5 text-[10px] sm:hidden"
            >
              Hotline
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-[#1a1a1c]/20 rounded text-[#1a1a1c] hover:bg-[#1a1a1c]/5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#f2efeb] border-b border-[rgba(26,26,28,0.15)] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1 mono">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handlePageClick(item.id)}
                  className={`px-3 py-2.5 text-left text-xs tracking-wider rounded flex items-center justify-between ${
                    isActive
                      ? 'bg-[#1a1a1c] text-[#f2efeb] font-bold'
                      : 'text-[#1a1a1c] hover:bg-[rgba(26,26,28,0.06)]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[rgba(26,26,28,0.1)] grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEmergencyModal();
              }}
              className="emergency-pill !w-full justify-center text-[10px]"
            >
              Emergency Hotline
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal();
              }}
              className="btn btn-primary !w-full !py-2 text-[10px]"
            >
              Request RFQ
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
