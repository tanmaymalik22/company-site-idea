import React, { useState } from 'react';
import { 
  PARENT_ASSEMBLIES, 
  CHILD_PARTS, 
  ParentAssembly, 
  ChildPart 
} from '../data/partsData';
import { 
  Settings2, 
  Layers, 
  Maximize2, 
  CheckCircle2, 
  AlertOctagon, 
  Download, 
  FileCheck, 
  ArrowRight,
  Info,
  Clock,
  ShieldAlert
} from 'lucide-react';

interface VisualizerProps {
  onOpenRFQModal: (partId?: string) => void;
  onOpenEmergencyModal: (partId?: string) => void;
}

export const ParentChildVisualizer: React.FC<VisualizerProps> = ({
  onOpenRFQModal,
  onOpenEmergencyModal
}) => {
  const [selectedAssemblyId, setSelectedAssemblyId] = useState<string>('car-door-assembly');
  const [viewMode, setViewMode] = useState<'assembled' | 'exploded'>('exploded');
  const [selectedChildPartId, setSelectedChildPartId] = useState<string>('CP-DR-01');
  const [showFailureSimulation, setShowFailureSimulation] = useState<boolean>(false);

  const currentAssembly = PARENT_ASSEMBLIES.find(a => a.id === selectedAssemblyId) || PARENT_ASSEMBLIES[0];
  const assemblyChildParts = CHILD_PARTS.filter(p => p.parentAssemblyId === currentAssembly.id);
  const activeChildPart = assemblyChildParts.find(p => p.id === selectedChildPartId) || assemblyChildParts[0];

  const handleAssemblyChange = (id: string) => {
    setSelectedAssemblyId(id);
    const newAssembly = PARENT_ASSEMBLIES.find(a => a.id === id);
    if (newAssembly && newAssembly.childPartIds.length > 0) {
      setSelectedChildPartId(newAssembly.childPartIds[0]);
    }
    setShowFailureSimulation(false);
  };

  return (
    <section id="visualizer" className="py-20 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">
              <Settings2 className="w-3.5 h-3.5" />
              <span>Interactive Engineering CAD Anatomy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Parent Assembly vs. Child Parts Visualizer
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl">
              Inspect how microscopic engineered child parts integrate into complete vehicle parent modules. Toggle between assembled state and exploded breakdown.
            </p>
          </div>

          {/* Assembled vs Exploded View Toggle */}
          <div className="flex items-center gap-2 p-1 bg-slate-900 rounded-lg border border-slate-800 self-start lg:self-auto">
            <button
              onClick={() => setViewMode('assembled')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 ${
                viewMode === 'assembled'
                  ? 'bg-amber-500 text-slate-950 shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Assembled Parent View</span>
            </button>
            <button
              onClick={() => setViewMode('exploded')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 ${
                viewMode === 'exploded'
                  ? 'bg-amber-500 text-slate-950 shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Exploded Child Parts View</span>
            </button>
          </div>
        </div>

        {/* Assembly Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-800 mb-8">
          {PARENT_ASSEMBLIES.map((assembly) => {
            const isSelected = assembly.id === selectedAssemblyId;
            return (
              <button
                key={assembly.id}
                onClick={() => handleAssemblyChange(assembly.id)}
                className={`px-4 py-2.5 rounded-t-lg text-xs font-medium whitespace-nowrap transition-all border-b-2 ${
                  isSelected
                    ? 'bg-slate-900 text-amber-400 border-amber-400'
                    : 'text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-900/40'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{assembly.name.split(' ')[0]}</span>
                  <span className="text-[11px] opacity-75">{assembly.category}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Visualizer Area: Grid of 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Visual Area: Interactive Schematic Canvas */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 relative overflow-hidden">
            
            {/* Canvas Header Badge */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div>
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                  Parent Assembly:
                </span>
                <h3 className="text-base font-semibold text-white">
                  {currentAssembly.name}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                  {assemblyChildParts.length} Critical Child Parts
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-amber-950/60 text-amber-400 font-mono border border-amber-800/40">
                  {currentAssembly.vehicleZone}
                </span>
              </div>
            </div>

            {/* Schematic Illustration Area */}
            <div className="relative aspect-[16/10] bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center p-6 technical-grid overflow-hidden">
              
              {/* Subtle Blueprint grid effect */}
              <div className="absolute inset-0 blueprint-pattern opacity-40 pointer-events-none" />

              {/* Graphical representation for Door Assembly */}
              {currentAssembly.svgType === 'door' && (
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg viewBox="0 0 500 320" className="w-full h-full max-h-[300px]" aria-label="Door Assembly CAD Schematic">
                    {/* Parent Door Outline */}
                    <path
                      d="M 60 70 L 260 50 L 380 90 L 410 240 L 380 270 L 100 270 L 60 210 Z"
                      fill={viewMode === 'assembled' ? '#1e293b' : 'none'}
                      stroke={viewMode === 'assembled' ? '#475569' : '#334155'}
                      strokeWidth={viewMode === 'assembled' ? '3' : '1.5'}
                      strokeDasharray={viewMode === 'exploded' ? '4 4' : 'none'}
                      className="transition-all duration-300"
                    />
                    
                    {/* Window opening */}
                    <path
                      d="M 100 80 L 250 65 L 360 98 L 360 160 L 100 160 Z"
                      fill="#0f172a"
                      stroke="#475569"
                      strokeWidth="1.5"
                    />

                    {/* Exploded connectors / child parts positioning */}
                    {/* 01 Hinge Pin (Left top hinge) */}
                    <g 
                      onClick={() => setSelectedChildPartId('CP-DR-01')}
                      className="cursor-pointer group/node"
                    >
                      <circle 
                        cx="75" 
                        cy="110" 
                        r={selectedChildPartId === 'CP-DR-01' ? '12' : '8'} 
                        fill={selectedChildPartId === 'CP-DR-01' ? '#f59e0b' : '#38bdf8'} 
                        className="transition-all"
                      />
                      <line x1="75" y1="110" x2="35" y2="70" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" />
                      <text x="20" y="60" fill="#f59e0b" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">01 Hinge Pin</text>
                    </g>

                    {/* 02 Rotary Latch (Right center) */}
                    <g 
                      onClick={() => setSelectedChildPartId('CP-DR-02')}
                      className="cursor-pointer group/node"
                    >
                      <circle 
                        cx="390" 
                        cy="190" 
                        r={selectedChildPartId === 'CP-DR-02' ? '12' : '8'} 
                        fill={selectedChildPartId === 'CP-DR-02' ? '#f59e0b' : '#38bdf8'} 
                        className="transition-all"
                      />
                      <line x1="390" y1="190" x2="430" y2="150" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" />
                      <text x="400" y="140" fill="#f59e0b" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">02 Rotary Latch</text>
                    </g>

                    {/* 03 Striker Bracket */}
                    <g 
                      onClick={() => setSelectedChildPartId('CP-DR-03')}
                      className="cursor-pointer group/node"
                    >
                      <circle 
                        cx="395" 
                        cy="225" 
                        r={selectedChildPartId === 'CP-DR-03' ? '12' : '8'} 
                        fill={selectedChildPartId === 'CP-DR-03' ? '#f59e0b' : '#38bdf8'} 
                        className="transition-all"
                      />
                      <line x1="395" y1="225" x2="435" y2="255" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" />
                      <text x="400" y="270" fill="#f59e0b" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">03 Striker Plate</text>
                    </g>

                    {/* 04 Window Regulator Pin */}
                    <g 
                      onClick={() => setSelectedChildPartId('CP-DR-04')}
                      className="cursor-pointer group/node"
                    >
                      <circle 
                        cx="220" 
                        cy="210" 
                        r={selectedChildPartId === 'CP-DR-04' ? '12' : '8'} 
                        fill={selectedChildPartId === 'CP-DR-04' ? '#f59e0b' : '#38bdf8'} 
                        className="transition-all"
                      />
                      <line x1="220" y1="210" x2="220" y2="280" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" />
                      <text x="160" y="295" fill="#f59e0b" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">04 Regulator Pin</text>
                    </g>

                    {/* 05 Handle Torsion Spring */}
                    <g 
                      onClick={() => setSelectedChildPartId('CP-DR-05')}
                      className="cursor-pointer group/node"
                    >
                      <circle 
                        cx="290" 
                        cy="140" 
                        r={selectedChildPartId === 'CP-DR-05' ? '12' : '8'} 
                        fill={selectedChildPartId === 'CP-DR-05' ? '#f59e0b' : '#38bdf8'} 
                        className="transition-all"
                      />
                      <line x1="290" y1="140" x2="290" y2="90" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" />
                      <text x="250" y="80" fill="#f59e0b" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">05 Return Spring</text>
                    </g>
                  </svg>
                </div>
              )}

              {/* Brake Caliper Illustration */}
              {currentAssembly.svgType === 'caliper' && (
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg viewBox="0 0 500 320" className="w-full h-full max-h-[300px]" aria-label="Brake Caliper CAD Schematic">
                    {/* Rotor Disc arc */}
                    <path
                      d="M 50 160 A 180 180 0 0 1 450 160"
                      fill="none"
                      stroke="#334155"
                      strokeWidth="6"
                      strokeDasharray="8 4"
                    />
                    {/* Caliper housing body */}
                    <rect 
                      x="160" 
                      y="70" 
                      width="180" 
                      height="140" 
                      rx="16" 
                      fill={viewMode === 'assembled' ? '#1e293b' : 'none'} 
                      stroke="#475569" 
                      strokeWidth="2.5" 
                    />
                    
                    {/* Caliper Nodes */}
                    <g onClick={() => setSelectedChildPartId('CP-BR-01')} className="cursor-pointer">
                      <circle cx="175" cy="95" r={selectedChildPartId === 'CP-BR-01' ? '12' : '8'} fill={selectedChildPartId === 'CP-BR-01' ? '#f59e0b' : '#38bdf8'} />
                      <text x="70" y="85" fill="#f59e0b" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">01 Guide Slide Pin</text>
                    </g>
                    <g onClick={() => setSelectedChildPartId('CP-BR-02')} className="cursor-pointer">
                      <circle cx="210" cy="190" r={selectedChildPartId === 'CP-BR-02' ? '12' : '8'} fill={selectedChildPartId === 'CP-BR-02' ? '#f59e0b' : '#38bdf8'} />
                      <text x="90" y="235" fill="#f59e0b" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">02 Anti-Rattle Clip</text>
                    </g>
                    <g onClick={() => setSelectedChildPartId('CP-BR-03')} className="cursor-pointer">
                      <circle cx="250" cy="140" r={selectedChildPartId === 'CP-BR-03' ? '12' : '8'} fill={selectedChildPartId === 'CP-BR-03' ? '#f59e0b' : '#38bdf8'} />
                      <text x="210" y="55" fill="#f59e0b" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">03 Piston Core</text>
                    </g>
                    <g onClick={() => setSelectedChildPartId('CP-BR-04')} className="cursor-pointer">
                      <circle cx="325" cy="95" r={selectedChildPartId === 'CP-BR-04' ? '12' : '8'} fill={selectedChildPartId === 'CP-BR-04' ? '#f59e0b' : '#38bdf8'} />
                      <text x="345" y="85" fill="#f59e0b" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">04 Bleeder Screw</text>
                    </g>
                    <g onClick={() => setSelectedChildPartId('CP-BR-05')} className="cursor-pointer">
                      <circle cx="290" cy="190" r={selectedChildPartId === 'CP-BR-05' ? '12' : '8'} fill={selectedChildPartId === 'CP-BR-05' ? '#f59e0b' : '#38bdf8'} />
                      <text x="300" y="235" fill="#f59e0b" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">05 Damping Shim</text>
                    </g>
                  </svg>
                </div>
              )}

              {/* EV Battery Illustration */}
              {currentAssembly.svgType === 'ev_battery' && (
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg viewBox="0 0 500 320" className="w-full h-full max-h-[300px]" aria-label="EV Battery Module CAD Schematic">
                    {/* Battery tray envelope */}
                    <rect x="70" y="80" width="360" height="160" rx="12" fill={viewMode === 'assembled' ? '#1e293b' : 'none'} stroke="#475569" strokeWidth="2" />
                    
                    {/* Prismatic Cells Matrix */}
                    <line x1="140" y1="80" x2="140" y2="240" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="210" y1="80" x2="210" y2="240" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="280" y1="80" x2="280" y2="240" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="350" y1="80" x2="350" y2="240" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />

                    <g onClick={() => setSelectedChildPartId('CP-EV-01')} className="cursor-pointer">
                      <circle cx="175" cy="95" r={selectedChildPartId === 'CP-EV-01' ? '12' : '8'} fill={selectedChildPartId === 'CP-EV-01' ? '#f59e0b' : '#38bdf8'} />
                      <text x="130" y="65" fill="#f59e0b" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">01 HV Busbar</text>
                    </g>
                    <g onClick={() => setSelectedChildPartId('CP-EV-02')} className="cursor-pointer">
                      <circle cx="245" cy="225" r={selectedChildPartId === 'CP-EV-02' ? '12' : '8'} fill={selectedChildPartId === 'CP-EV-02' ? '#f59e0b' : '#38bdf8'} />
                      <text x="180" y="260" fill="#f59e0b" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">02 Cold-Plate Pin</text>
                    </g>
                    <g onClick={() => setSelectedChildPartId('CP-EV-03')} className="cursor-pointer">
                      <circle cx="385" cy="115" r={selectedChildPartId === 'CP-EV-03' ? '12' : '8'} fill={selectedChildPartId === 'CP-EV-03' ? '#f59e0b' : '#38bdf8'} />
                      <text x="350" y="85" fill="#f59e0b" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">03 Pyro-Fuse Lock</text>
                    </g>
                    <g onClick={() => setSelectedChildPartId('CP-EV-04')} className="cursor-pointer">
                      <circle cx="105" cy="160" r={selectedChildPartId === 'CP-EV-04' ? '12' : '8'} fill={selectedChildPartId === 'CP-EV-04' ? '#f59e0b' : '#38bdf8'} />
                      <text x="40" y="145" fill="#f59e0b" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">04 Tie Rod Retainer</text>
                    </g>
                    <g onClick={() => setSelectedChildPartId('CP-EV-05')} className="cursor-pointer">
                      <circle cx="315" cy="160" r={selectedChildPartId === 'CP-EV-05' ? '12' : '8'} fill={selectedChildPartId === 'CP-EV-05' ? '#f59e0b' : '#38bdf8'} />
                      <text x="300" y="195" fill="#f59e0b" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">05 Burst Vent Disc</text>
                    </g>
                  </svg>
                </div>
              )}

              {/* Steering Column & Seating Fallback */}
              {(currentAssembly.svgType === 'steering' || currentAssembly.svgType === 'seat') && (
                <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-4">
                  <div className="text-xs font-mono text-amber-400 mb-2">
                    {currentAssembly.diagramTitle}
                  </div>
                  <div className="grid grid-cols-2 gap-3 w-full max-w-md">
                    {assemblyChildParts.map((part, idx) => (
                      <button
                        key={part.id}
                        onClick={() => setSelectedChildPartId(part.id)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          selectedChildPartId === part.id
                            ? 'bg-amber-500/20 border-amber-400 text-white'
                            : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="text-[10px] font-mono text-amber-400 font-bold">NODE 0{idx + 1}</div>
                        <div className="text-xs font-semibold mt-0.5 truncate">{part.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono mt-1">{part.tolerance}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Instructions Kicker */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-slate-400 bg-slate-950/80 backdrop-blur-sm px-3 py-1.5 rounded-md border border-slate-800">
                <span className="flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-amber-400" />
                  <span>Click any numbered child part node to inspect technical drawing &amp; tolerance specs</span>
                </span>
                <span className="font-mono text-slate-300 hidden sm:inline">1:1 OEM Scale</span>
              </div>
            </div>

            {/* Quick Simulation: What happens if this Child Part fails or goes out-of-stock? */}
            <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <AlertOctagon className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-semibold text-white">Line-Down Failure Mode Simulation</span>
                </div>
                <button
                  onClick={() => setShowFailureSimulation(!showFailureSimulation)}
                  className={`text-[11px] px-2.5 py-1 rounded font-medium transition-colors ${
                    showFailureSimulation 
                      ? 'bg-red-600 text-white' 
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {showFailureSimulation ? 'Reset Simulation' : 'Simulate Part Shortage'}
                </button>
              </div>

              {showFailureSimulation ? (
                <div className="p-3 rounded-lg bg-red-950/30 border border-red-500/40 text-xs text-red-200 space-y-1.5 animate-fadeIn">
                  <div className="font-bold flex items-center gap-1.5 text-red-300">
                    <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
                    <span>Consequence if {activeChildPart.name} is missing:</span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    &bull; Parent Assembly ({currentAssembly.name}) <strong className="text-white">cannot be completed or installed on chassis</strong>.
                  </p>
                  <p className="text-[11px] text-slate-300">
                    &bull; OEM Takt-time stoppage triggers line halt at <strong className="text-red-300">$22,000+ per minute</strong> cost to Tier-1 integrator.
                  </p>
                  <p className="text-[11px] text-emerald-300 font-mono">
                    &bull; Globle Bhavya Hotline solution: {activeChildPart.emergencyBufferUnits.toLocaleString()} units pre-buffered for immediate 4-hour hotshot dispatch.
                  </p>
                </div>
              ) : (
                <p className="text-xs text-slate-400">
                  Toggle the simulation to test the direct consequence of a child part bottleneck on this parent subsystem.
                </p>
              )}
            </div>

          </div>

          {/* Right Area: Child Part Deep-Dive Inspector */}
          <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-5">
            
            {/* Header of Part */}
            <div className="border-b border-slate-800 pb-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                <span className="text-amber-400 font-bold">{activeChildPart.partNumber}</span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">
                  {activeChildPart.ppapLevel}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-white">
                {activeChildPart.name}
              </h3>
              <div className="text-xs text-slate-400 mt-1">
                Belongs to Parent Assembly: <span className="text-slate-200 font-medium">{activeChildPart.parentAssembly}</span>
              </div>
            </div>

            {/* Critical Function */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-[11px] font-mono uppercase text-slate-500 font-bold mb-1">
                Critical Function in Parent Assembly:
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                {activeChildPart.criticalFunction}
              </p>
            </div>

            {/* Technical Specifications Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                <div className="text-[10px] font-mono text-slate-500 uppercase">Tolerance Class</div>
                <div className="font-mono font-bold text-amber-400 text-sm mt-0.5">{activeChildPart.tolerance}</div>
                <div className="text-[10px] text-slate-400">Sub-micron control</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                <div className="text-[10px] font-mono text-slate-500 uppercase">Manufacturing Process</div>
                <div className="font-semibold text-slate-200 text-xs mt-0.5 line-clamp-1">{activeChildPart.process}</div>
                <div className="text-[10px] text-slate-400">In-house tooling</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                <div className="text-[10px] font-mono text-slate-500 uppercase">Material Specification</div>
                <div className="font-semibold text-slate-200 text-xs mt-0.5 truncate">{activeChildPart.material}</div>
                <div className="text-[10px] text-slate-400">Full heat certs</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                <div className="text-[10px] font-mono text-slate-500 uppercase">Surface Treatment</div>
                <div className="font-semibold text-slate-200 text-xs mt-0.5 truncate">{activeChildPart.surfaceFinish}</div>
                <div className="text-[10px] text-slate-400">Anti-corrosion standard</div>
              </div>
            </div>

            {/* Capacity & Emergency Buffer Status */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Annual Serial Capacity:</span>
                <span className="font-mono font-semibold text-white">{activeChildPart.annualCapacity}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Standard Production Lead Time:</span>
                <span className="font-mono text-slate-200">{activeChildPart.leadTimeStandardDays} Days</span>
              </div>
              <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-900">
                <span className="text-amber-400 font-semibold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Line-Down Buffer Stock:</span>
                </span>
                <span className="font-mono font-bold text-emerald-400">
                  {activeChildPart.emergencyBufferUnits.toLocaleString()} pcs ready
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={() => onOpenRFQModal(activeChildPart.id)}
                className="w-full py-2.5 px-4 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-all shadow-md flex items-center justify-center gap-2 font-display"
              >
                <FileCheck className="w-4 h-4 text-slate-950" />
                <span>Request Quotation &amp; PPAP Samples for {activeChildPart.partNumber}</span>
              </button>

              <button
                onClick={() => onOpenEmergencyModal(activeChildPart.id)}
                className="w-full py-2 px-4 rounded-md bg-red-950/60 hover:bg-red-900/60 border border-red-500/50 text-red-200 font-medium text-xs transition-all flex items-center justify-center gap-2"
              >
                <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
                <span>Order Emergency Dispatch for this Part</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
