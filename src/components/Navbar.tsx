import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  FileText, 
  PhoneCall, 
  Layers, 
  Settings2, 
  Truck, 
  Award, 
  Menu, 
  X,
  Clock
} from 'lucide-react';

interface NavbarProps {
  onOpenEmergencyModal: () => void;
  onOpenRFQModal: (initialPart?: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenEmergencyModal, 
  onOpenRFQModal,
  activeSection 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'concept', label: 'Child Parts Role', href: '#concept', icon: Layers },
    { id: 'visualizer', label: 'Parent vs Child 3D', href: '#visualizer', icon: Settings2 },
    { id: 'catalog', label: 'Parts Catalog', href: '#catalog', icon: FileText },
    { id: 'emergency', label: 'Emergency Supply', href: '#emergency', icon: ShieldAlert },
    { id: 'supply-chain', label: 'OEM Supply Chain', href: '#supply-chain', icon: Truck },
    { id: 'quality', label: 'Quality & IATF', href: '#quality', icon: Award },
  ];

  return (
    <>
      {/* Top Engineering & Emergency Alert Banner */}
      <div className="bg-gradient-to-r from-red-950/80 via-slate-900 to-amber-950/80 border-b border-red-500/20 px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold text-slate-200">IATF 16949:2016 Certified Direct Tier-1 Supplier</span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-400">PPM &lt; 3 Zero-Defect Threshold</span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden lg:inline text-slate-400">EDI 830 / 856 Automated Release Synced</span>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={onOpenEmergencyModal}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-red-600/20 border border-red-500/40 text-red-300 hover:bg-red-600/30 transition-colors text-[11px] font-medium"
            >
              <Clock className="w-3 h-3 text-red-400" />
              <span>Assembly Line Down?</span>
              <span className="text-white font-semibold underline underline-offset-2">4-Hr Emergency Dispatch Active</span>
            </button>
            <a 
              href="tel:+911244589000" 
              className="hidden sm:inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors text-[11px]"
            >
              <PhoneCall className="w-3 h-3 text-emerald-400" />
              <span className="font-mono text-slate-300">+91 (124) 458-9000</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className={`sticky top-0 z-40 transition-all duration-200 border-b ${
        scrolled 
          ? 'bg-slate-950/95 backdrop-blur-md border-slate-800 shadow-xl shadow-black/40' 
          : 'bg-slate-950/80 backdrop-blur-sm border-slate-800/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo & Company Title */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 via-amber-600 to-orange-700 p-0.5 shadow-lg shadow-amber-500/20 flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center p-1.5">
                <svg viewBox="0 0 40 40" className="w-full h-full text-amber-400 fill-current" aria-hidden="true">
                  <path d="M20 2L35 11V29L20 38L5 29V11L20 2Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
                  <path d="M20 8L30 14V26L20 32L10 26V14L20 8Z" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" />
                  <circle cx="20" cy="20" r="4.5" fill="#f59e0b" />
                  <path d="M20 12V15M20 25V28M13 16L15.5 17.5M24.5 22.5L27 24M13 24L15.5 22.5M24.5 17.5L27 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  GLOBLE BHAVYA
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest px-1.5 py-0.5 rounded bg-slate-800 text-amber-400 border border-slate-700">
                  AUTOMOTIVE
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium tracking-tight">
                Precision Child Parts &amp; Subsystems
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-3 py-2 rounded-md transition-colors flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-amber-400 bg-slate-900/90' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 opacity-70" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Actions CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenEmergencyModal}
              className="px-3 py-2 text-xs font-semibold rounded-md border border-red-500/50 text-red-300 bg-red-950/40 hover:bg-red-900/50 hover:border-red-400 transition-all flex items-center gap-1.5 shadow-sm"
              title="Activate Rapid Emergency Dispatch Hotline for production line-down"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-red-400 animate-pulse" />
              <span>Line-Down Alert</span>
            </button>

            <button
              onClick={() => onOpenRFQModal()}
              className="px-4 py-2 text-xs font-semibold rounded-md bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 transition-all shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 flex items-center gap-1.5 font-display"
            >
              <FileText className="w-3.5 h-3.5 text-slate-950" />
              <span>Request Quote / Samples</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenEmergencyModal}
              className="p-2 rounded-md bg-red-950/50 border border-red-500/40 text-red-300 sm:hidden"
              aria-label="Emergency line-down hotline"
            >
              <ShieldAlert className="w-4 h-4 text-red-400 animate-pulse" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-800 bg-slate-950 px-4 pt-2 pb-6 space-y-3">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900"
                  >
                    <Icon className="w-4 h-4 text-amber-400" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEmergencyModal();
                }}
                className="w-full py-2.5 px-4 text-center rounded-md font-semibold text-xs text-red-200 bg-red-900/40 border border-red-500/50 flex items-center justify-center gap-2"
              >
                <ShieldAlert className="w-4 h-4 text-red-400" />
                <span>24/7 Line-Down Emergency Supply Dispatch</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRFQModal();
                }}
                className="w-full py-2.5 px-4 text-center rounded-md font-semibold text-xs text-slate-950 bg-amber-500 hover:bg-amber-400 flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-slate-950" />
                <span>Submit RFQ &amp; Request Sample Kit</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
