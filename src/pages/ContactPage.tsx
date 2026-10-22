import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldAlert, 
  CheckCircle2, 
  Send,
  Building2,
  FileText
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ContactPageProps {
  initialSubject?: string;
  onOpenEmergencyModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialSubject,
  onOpenEmergencyModal
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: initialSubject ? 'Child Parts RFQ & Feasibility' : 'New Project Inquiry',
    message: initialSubject ? `Inquiry regarding specifications for: ${initialSubject}` : ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-20 pb-20 bg-[#f2efeb] text-[#1a1a1c]">
      
      {/* Page Header Banner */}
      <section className="bg-white border-b border-[rgba(26,26,28,0.08)] py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 mono text-xs text-[#c52222] font-bold px-3 py-1 rounded-sm bg-[#f2efeb] border border-[rgba(26,26,28,0.12)]">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct OEM Communication</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#1a1a1c] tracking-tight">
            Contact Globle Bhavya
          </h1>
          <p className="text-[#1a1a1c]/70 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-sans">
            Connect directly with our automotive design, child parts manufacturing, drawings inspection, and rapid logistics engineering teams.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Corporate Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="mono text-xs text-[#c52222] font-bold tracking-wider">
                Get In Touch With Us
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#1a1a1c]">
                Engineering Centers &amp; Manufacturing Docks
              </h2>
              <p className="text-[#1a1a1c]/70 text-xs sm:text-sm leading-relaxed font-sans">
                Whether you need a custom child part engineered, an existing CAD print quoted, or 24/7 emergency line-down dispatch, our teams are standing by.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-sm bg-white border border-[rgba(26,26,28,0.12)] flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c52222] shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <div className="font-serif font-bold text-[#1a1a1c] text-base">Gurugram Engineering Headquarters &amp; Plant</div>
                  <div className="text-[#1a1a1c]/80 font-sans">{COMPANY_INFO.headquarters}</div>
                  <div className="text-[#1a1a1c]/50 text-[11px] mono">Primary design studio &bull; CAD surfacing &bull; Customer executive briefings &bull; Gurugram, India</div>
                </div>
              </div>

              <div className="p-4 rounded-sm bg-white border border-[rgba(26,26,28,0.12)] flex items-start gap-3">
                <Building2 className="w-5 h-5 text-[#1a1a1c]/60 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <div className="font-serif font-bold text-[#1a1a1c] text-base">Integrated Manufacturing Campus</div>
                  <div className="text-[#1a1a1c]/80 font-sans">{COMPANY_INFO.facilityArea}</div>
                  <div className="text-[#1a1a1c]/50 text-[11px] mono">{COMPANY_INFO.manufacturingCampus}</div>
                </div>
              </div>

              <div className="p-4 rounded-sm bg-white border border-[rgba(26,26,28,0.12)] flex items-start gap-3">
                <PhoneCall className="w-5 h-5 text-[#1a1a1c]/60 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <div className="font-serif font-bold text-[#1a1a1c] text-base">Direct Phone &amp; Engineering Center</div>
                  <div className="text-[#1a1a1c] mono font-bold">{COMPANY_INFO.phone} / {COMPANY_INFO.directPhone}</div>
                  <div className="text-[#1a1a1c]/50 text-[11px] mono">Hours: {COMPANY_INFO.workingHours}</div>
                </div>
              </div>

              <div className="p-4 rounded-sm bg-white border-2 border-[#c52222] flex items-start gap-3 shadow-sm">
                <ShieldAlert className="w-5 h-5 text-[#c52222] shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <div className="font-serif font-bold text-[#1a1a1c] text-base">24/7 Assembly Line-Down Emergency Hotline</div>
                  <div className="text-[#c52222] mono font-bold text-sm">{COMPANY_INFO.emergencyHotline}</div>
                  <div className="text-[#1a1a1c]/60 text-[11px] mono">Immediate hotshot buffer dispatch protocol (&lt; 4 hours)</div>
                  <div className="pt-2">
                    <button
                      onClick={onOpenEmergencyModal}
                      className="emergency-pill !py-1 !px-3 text-[10px]"
                    >
                      Emergency Intake
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: RFQ / Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="arch-card p-6 sm:p-10 space-y-6 bg-white rounded-sm">
              <div className="border-b border-[rgba(26,26,28,0.08)] pb-4">
                <h3 className="text-2xl font-serif font-bold text-[#1a1a1c]">
                  Submit Engineering RFQ or Corporate Inquiry
                </h3>
                <p className="text-xs text-[#1a1a1c]/70 mt-1 font-sans">
                  Fill out the form below. Our automotive engineering team typically responds with preliminary DFM feasibility within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-2xl font-serif font-bold text-[#1a1a1c]">Message Successfully Dispatched</h4>
                  <p className="text-xs text-[#1a1a1c]/80 max-w-md mx-auto font-sans">
                    Thank you, <strong className="text-[#1a1a1c]">{formData.name}</strong>. An automotive application engineer from our Gurugram center will review your inquiry and follow up at <strong className="text-[#1a1a1c]">{formData.email}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs mono uppercase text-[#1a1a1c] font-bold mb-1">
                        Full Name *
                      </label>
                      <input 
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#f2efeb] border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs text-[#1a1a1c] placeholder-[#1a1a1c]/40 focus:outline-none focus:border-[#1a1a1c]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs mono uppercase text-[#1a1a1c] font-bold mb-1">
                        Automotive Company / OEM *
                      </label>
                      <input 
                        type="text"
                        required
                        placeholder="e.g. Ford, Magna, Bosch, Rivian"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-[#f2efeb] border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs text-[#1a1a1c] placeholder-[#1a1a1c]/40 focus:outline-none focus:border-[#1a1a1c]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs mono uppercase text-[#1a1a1c] font-bold mb-1">
                        Corporate Email *
                      </label>
                      <input 
                        type="email"
                        required
                        placeholder="name@automotive.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#f2efeb] border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs text-[#1a1a1c] placeholder-[#1a1a1c]/40 focus:outline-none focus:border-[#1a1a1c]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs mono uppercase text-[#1a1a1c] font-bold mb-1">
                        Direct Phone / Extension
                      </label>
                      <input 
                        type="tel"
                        placeholder="+1 (248) 555-0100"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#f2efeb] border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs mono text-[#1a1a1c] placeholder-[#1a1a1c]/40 focus:outline-none focus:border-[#1a1a1c]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs mono uppercase text-[#1a1a1c] font-bold mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full bg-[#f2efeb] border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs text-[#1a1a1c] focus:outline-none focus:border-[#1a1a1c] mono"
                    >
                      <option value="Child Parts RFQ & Feasibility">Child Parts RFQ &amp; Tooling Feasibility</option>
                      <option value="CAD Blueprint & Drawing Review">CAD Blueprint &amp; Drawing Review</option>
                      <option value="New Subsystem Co-Design Project">New Subsystem Co-Design Project</option>
                      <option value="Sample Kit Request">Pre-Production Sample Kit Request</option>
                      <option value="Facility Plant Tour Audit">Facility Plant Tour &amp; IATF Audit</option>
                      <option value="Other Commercial Inquiry">Other Commercial Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs mono uppercase text-[#1a1a1c] font-bold mb-1">
                      Project Details, Part Number &amp; EAU Requirements *
                    </label>
                    <textarea 
                      rows={4}
                      required
                      placeholder="Specify child part geometry, annual volumes (EAU), target materials, tolerances, or line-down context..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#f2efeb] border border-[rgba(26,26,28,0.15)] rounded-sm px-3 py-2 text-xs text-[#1a1a1c] placeholder-[#1a1a1c]/40 focus:outline-none focus:border-[#1a1a1c] font-sans"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-[11px] mono text-[#1a1a1c]/60">
                      Protected under standard automotive non-disclosure agreement (NDA)
                    </span>

                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit RFQ Inquiry</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
