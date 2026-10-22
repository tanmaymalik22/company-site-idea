import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  FileCheck, 
  Eye, 
  Download, 
  Microscope, 
  Cpu, 
  Layers, 
  BarChart3,
  Check
} from 'lucide-react';
import { QUALITY_STANDARDS, METROLOGY_CAPABILITIES } from '../data/partsData';

export const QualityAndMetrology: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleDownloadCert = (certName: string) => {
    setDownloadSuccess(`Verified certificate package for ${certName} downloaded.`);
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  return (
    <section id="quality" className="py-20 bg-slate-900/60 border-b border-slate-800 technical-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>Zero-Defect Metrology &amp; Automotive Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            IATF 16949 Certified Quality &amp; Sub-Micron Precision
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            In automotive manufacturing, tolerances are non-negotiable. Every child part manufactured by Globle Bhavya undergoes rigorous Statistical Process Control (SPC), PPAP verification, and automated optical validation to achieve a verified PPM defect rate below 3.
          </p>
        </div>

        {downloadSuccess && (
          <div className="mb-6 p-3 rounded-lg bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs flex items-center justify-between animate-fadeIn">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>{downloadSuccess}</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-300">Audited PDF Verified</span>
          </div>
        )}

        {/* Quality Standard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {QUALITY_STANDARDS.map((std, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between group hover:border-slate-700 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-amber-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                    {std.badge}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>

                <h3 className="text-base font-semibold text-white group-hover:text-amber-300 transition-colors">
                  {std.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {std.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-900 space-y-2">
                <div className="text-[10px] font-mono text-slate-500 flex justify-between">
                  <span>Auditor:</span>
                  <span className="text-slate-300">{std.auditBody}</span>
                </div>
                <div className="text-[10px] font-mono text-slate-500 flex justify-between">
                  <span>Cert ID:</span>
                  <span className="text-slate-300">{std.certificateNo}</span>
                </div>

                <button
                  onClick={() => handleDownloadCert(std.badge)}
                  className="w-full mt-2 py-1.5 px-2 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3 h-3 text-amber-400" />
                  <span>Download Audit PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Metrology & Inspection Technology Showcase */}
        <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
                <Microscope className="w-4 h-4 text-amber-400" />
                <span>IN-HOUSE ADVANCED INSPECTION LAB</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Metrology Capabilities for Zero-Defect Child Parts
              </h3>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="text-slate-400">Target Capability:</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 text-emerald-400 border border-slate-800 font-bold">
                Cpk &ge; 1.67 / Ppk &ge; 1.67
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {METROLOGY_CAPABILITIES.map((cap, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-semibold text-white">{cap.title}</h4>
                    <span className="text-[11px] font-mono text-amber-400 font-bold shrink-0">{cap.spec}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{cap.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* PPAP Levels 1-5 Guarantee Table */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-5 gap-3 text-center text-xs">
            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-850">
              <div className="font-mono text-amber-400 font-bold">PPAP Level 1</div>
              <div className="text-[11px] text-slate-400 mt-1">PSW Warrant Only</div>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-850">
              <div className="font-mono text-amber-400 font-bold">PPAP Level 2</div>
              <div className="text-[11px] text-slate-400 mt-1">PSW + Limited Samples</div>
            </div>
            <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30">
              <div className="font-mono text-amber-300 font-bold">PPAP Level 3 (Default)</div>
              <div className="text-[11px] text-slate-300 mt-1">Full 18 Elements &amp; Gage R&amp;R</div>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-850">
              <div className="font-mono text-amber-400 font-bold">PPAP Level 4</div>
              <div className="text-[11px] text-slate-400 mt-1">OEM Tailored Submission</div>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-850">
              <div className="font-mono text-amber-400 font-bold">PPAP Level 5</div>
              <div className="text-[11px] text-slate-400 mt-1">On-Site Auditor Review</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
