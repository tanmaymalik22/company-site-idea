export interface ChildPart {
  id: string;
  name: string;
  partNumber: string;
  category: 'Body & Closures' | 'Braking & Chassis' | 'Powertrain & EV' | 'Interior & Safety' | 'Steering & Drivetrain';
  parentAssembly: string;
  parentAssemblyId: string;
  material: string;
  process: 'High-Speed Progressive Stamping' | 'Swiss CNC Turning' | 'Fine Blanking' | 'Cold Heading & Thread Rolling' | 'Engineered Overmolding';
  tolerance: string;
  surfaceFinish: string;
  annualCapacity: string;
  emergencyBufferUnits: number;
  criticalFunction: string;
  leadTimeStandardDays: number;
  emergencyDispatchHours: number;
  cadAvailable: boolean;
  ppapLevel: string;
}

export interface ParentAssembly {
  id: string;
  name: string;
  category: string;
  description: string;
  vehicleZone: 'Exterior Body' | 'Chassis & Wheels' | 'Underhood & Powertrain' | 'Cabin & Seating' | 'Electrical & Battery';
  diagramTitle: string;
  svgType: 'door' | 'caliper' | 'steering' | 'ev_battery' | 'seat';
  childPartIds: string[];
  oemApplication: string;
}

export const PARENT_ASSEMBLIES: ParentAssembly[] = [
  {
    id: 'car-door-assembly',
    name: 'Automotive Door Subsystem & Latch Assembly',
    category: 'Body & Closures',
    description: 'A complete passenger vehicle side door parent assembly comprising structural closure, rotary lock mechanisms, window regulator linkages, and hinge kinematics.',
    vehicleZone: 'Exterior Body',
    diagramTitle: 'Door Shell & Kinematic Module',
    svgType: 'door',
    childPartIds: ['CP-DR-01', 'CP-DR-02', 'CP-DR-03', 'CP-DR-04', 'CP-DR-05'],
    oemApplication: 'Passenger Sedans, SUVs, Light Trucks & Commercial Delivery Vans'
  },
  {
    id: 'braking-caliper-assembly',
    name: 'Hydraulic Disc Brake Caliper & Carrier Assembly',
    category: 'Braking & Chassis',
    description: 'Critical safety parent subsystem transforming hydraulic pressure into friction clamping force, requiring micro-finished sliding child pins and vibration isolation clips.',
    vehicleZone: 'Chassis & Wheels',
    diagramTitle: 'Floating Caliper Clamping System',
    svgType: 'caliper',
    childPartIds: ['CP-BR-01', 'CP-BR-02', 'CP-BR-03', 'CP-BR-04', 'CP-BR-05'],
    oemApplication: 'High-performance BEVs, ICE Light Vehicles & Heavy Duty Fleets'
  },
  {
    id: 'ev-battery-thermal-assembly',
    name: 'EV High-Voltage Battery Pack & Thermal Manifold Module',
    category: 'Powertrain & EV',
    description: 'Next-generation electric vehicle parent module integrating cell busbars, coolant distribution channels, and pressure relief safeguards.',
    vehicleZone: 'Electrical & Battery',
    diagramTitle: 'HV Battery Pack Module & Cooling Matrix',
    svgType: 'ev_battery',
    childPartIds: ['CP-EV-01', 'CP-EV-02', 'CP-EV-03', 'CP-EV-04', 'CP-EV-05'],
    oemApplication: '800V Architecture EVs, Hybrid Powertrains & Commercial Electric Trucks'
  },
  {
    id: 'steering-column-assembly',
    name: 'Electric Power Steering (EPS) Column & Intermediate Shaft',
    category: 'Steering & Drivetrain',
    description: 'High-torque directional control parent assembly requiring anti-backlash universal joints, splined couplers, and precision crush-collars for crash safety.',
    vehicleZone: 'Underhood & Powertrain',
    diagramTitle: 'EPS Column & Cardan Joint Linkage',
    svgType: 'steering',
    childPartIds: ['CP-ST-01', 'CP-ST-02', 'CP-ST-03', 'CP-ST-04'],
    oemApplication: 'Dual-pinion and column-assist EPS systems for global OEM platforms'
  },
  {
    id: 'seat-recline-assembly',
    name: 'Automotive Seating Kinematics & Recline Mechanism',
    category: 'Interior & Safety',
    description: 'FMVSS-compliant interior parent assembly capable of absorbing high-g impact loads with micro-pitch sector gear locks and zero-play pivot bushings.',
    vehicleZone: 'Cabin & Seating',
    diagramTitle: 'Continuous Seat Recliner Mechanism',
    svgType: 'seat',
    childPartIds: ['CP-ST-11', 'CP-ST-12', 'CP-ST-13', 'CP-ST-14'],
    oemApplication: 'Front driver & passenger seating frames, power & manual seat bases'
  }
];

export const CHILD_PARTS: ChildPart[] = [
  // Door Assembly Child Parts
  {
    id: 'CP-DR-01',
    name: 'High-Tensile Door Hinge Pivot Pin',
    partNumber: 'AF-HNG-4420-P',
    category: 'Body & Closures',
    parentAssembly: 'Automotive Door Subsystem & Latch Assembly',
    parentAssemblyId: 'car-door-assembly',
    material: 'Case-Hardened 8620 Alloy Steel',
    process: 'Swiss CNC Turning',
    tolerance: '±0.005 mm',
    surfaceFinish: 'Zinc-Nickel Plating (1000h Salt Spray)',
    annualCapacity: '12,500,000 pcs',
    emergencyBufferUnits: 85000,
    criticalFunction: 'Maintains vertical alignment and sag resistance over 100,000 door open/close fatigue cycles.',
    leadTimeStandardDays: 14,
    emergencyDispatchHours: 4,
    cadAvailable: true,
    ppapLevel: 'PPAP Level 3'
  },
  {
    id: 'CP-DR-02',
    name: 'Rotary Latch Pawl with Acoustic Overmold',
    partNumber: 'AF-LTC-8812-M',
    category: 'Body & Closures',
    parentAssembly: 'Automotive Door Subsystem & Latch Assembly',
    parentAssemblyId: 'car-door-assembly',
    material: 'High-Carbon C1075 + POM Elastomer',
    process: 'Engineered Overmolding',
    tolerance: '±0.010 mm',
    surfaceFinish: 'PTFE Dry Film Lubricant',
    annualCapacity: '8,200,000 pcs',
    emergencyBufferUnits: 60000,
    criticalFunction: 'Primary lock engagement claw preventing door unlatching during FMVSS 206 lateral crash.',
    leadTimeStandardDays: 16,
    emergencyDispatchHours: 4,
    cadAvailable: true,
    ppapLevel: 'PPAP Level 3'
  },
  {
    id: 'CP-DR-03',
    name: 'Precision Striker Bracket & Retaining Plate',
    partNumber: 'AF-STR-3105-B',
    category: 'Body & Closures',
    parentAssembly: 'Automotive Door Subsystem & Latch Assembly',
    parentAssemblyId: 'car-door-assembly',
    material: 'HSLA 350 MPa Automotive Steel',
    process: 'High-Speed Progressive Stamping',
    tolerance: '±0.012 mm',
    surfaceFinish: 'Geomet 500 Grade B',
    annualCapacity: '15,000,000 pcs',
    emergencyBufferUnits: 120000,
    criticalFunction: 'Anchors door latch jaws to the B-pillar chassis, resisting 11 kN transverse separation load.',
    leadTimeStandardDays: 10,
    emergencyDispatchHours: 4,
    cadAvailable: true,
    ppapLevel: 'PPAP Level 3'
  },
  {
    id: 'CP-DR-04',
    name: 'Window Regulator Cable Pulley Pin',
    partNumber: 'AF-WND-2044-S',
    category: 'Body & Closures',
    parentAssembly: 'Automotive Door Subsystem & Latch Assembly',
    parentAssemblyId: 'car-door-assembly',
    material: 'AISI 303 Stainless Steel',
    process: 'Swiss CNC Turning',
    tolerance: '±0.008 mm',
    surfaceFinish: 'Micro-polished Ra 0.2 µm',
    annualCapacity: '9,400,000 pcs',
    emergencyBufferUnits: 45000,
    criticalFunction: 'Zero-friction pivot for window regulator wire guide, eliminating glass chatter and squeak.',
    leadTimeStandardDays: 12,
    emergencyDispatchHours: 4,
    cadAvailable: true,
    ppapLevel: 'PPAP Level 3'
  },
  {
    id: 'CP-DR-05',
    name: 'Inner Handle Torsion Return Spring',
    partNumber: 'AF-SPR-0911-T',
    category: 'Body & Closures',
    parentAssembly: 'Automotive Door Subsystem & Latch Assembly',
    parentAssemblyId: 'car-door-assembly',
    material: 'Oil-Tempered Chrome Silicon Spring Steel',
    process: 'Cold Heading & Thread Rolling',
    tolerance: '±0.020 mm',
    surfaceFinish: 'Black Phosphate & Oil Dip',
    annualCapacity: '18,000,000 pcs',
    emergencyBufferUnits: 150000,
    criticalFunction: 'Delivers ergonomic tactile return feel and snap-back for interior door opening lever.',
    leadTimeStandardDays: 8,
    emergencyDispatchHours: 4,
    cadAvailable: true,
    ppapLevel: 'PPAP Level 3'
  },

  // Braking Assembly Child Parts
  {
    id: 'CP-BR-01',
    name: 'Brake Caliper Guide Pin (Slide Pin)',
    partNumber: 'AF-CAL-5510-G',
    category: 'Braking & Chassis',
    parentAssembly: 'Hydraulic Disc Brake Caliper & Carrier Assembly',
    parentAssemblyId: 'braking-caliper-assembly',
    material: '4140 High-Yield Induction Hardened Steel',
    process: 'Swiss CNC Turning',
    tolerance: '±0.004 mm',
    surfaceFinish: 'Hard Chrome Electroplating (Ra 0.15 µm)',
    annualCapacity: '11,000,000 pcs',
    emergencyBufferUnits: 95000,
    criticalFunction: 'Ensures uniform floating caliper lateral movement, preventing uneven pad taper wear.',
    leadTimeStandardDays: 14,
    emergencyDispatchHours: 4,
    cadAvailable: true,
    ppapLevel: 'PPAP Level 3'
  },
  {
    id: 'CP-BR-02',
    name: 'Stainless Anti-Rattle Abutment Clip',
    partNumber: 'AF-ABT-1209-C',
    category: 'Braking & Chassis',
    parentAssembly: 'Hydraulic Disc Brake Caliper & Carrier Assembly',
    parentAssemblyId: 'braking-caliper-assembly',
    material: 'AISI 301 Full Hard Spring Stainless',
    process: 'High-Speed Progressive Stamping',
    tolerance: '±0.015 mm',
    surfaceFinish: 'Electropolished & Passivated',
    annualCapacity: '22,000,000 pcs',
    emergencyBufferUnits: 210000,
    criticalFunction: 'Isolates brake pads from caliper carrier to suppress high-frequency NVH squeal.',
    leadTimeStandardDays: 9,
    emergencyDispatchHours: 4,
    cadAvailable: true,
    ppapLevel: 'PPAP Level 3'
  },
  {
    id: 'CP-BR-03',
    name: 'Brake Caliper Piston Phenolic Core Insert',
    partNumber: 'AF-PST-7730-I',
    category: 'Braking & Chassis',
    parentAssembly: 'Hydraulic Disc Brake Caliper & Carrier Assembly',
    parentAssemblyId: 'braking-caliper-assembly',
    material: 'Thermoset Phenolic Composite + Steel Insert',
    process: 'Engineered Overmolding',
    tolerance: '±0.006 mm',
    surfaceFinish: 'Precision Ground O.D.',
    annualCapacity: '6,800,000 pcs',
    emergencyBufferUnits: 40000,
    criticalFunction: 'Transfers hydraulic thrust to brake pad while blocking thermal heat soak to brake fluid.',
    leadTimeStandardDays: 18,
    emergencyDispatchHours: 6,
    cadAvailable: true,
    ppapLevel: 'PPAP Level 3'
  },
  {
    id: 'CP-BR-04',
    name: 'Bleeder Screw Valve & Nitrile Seal Port',
    partNumber: 'AF-BLD-0412-V',
    category: 'Braking & Chassis',
    parentAssembly: 'Hydraulic Disc Brake Caliper & Carrier Assembly',
    parentAssemblyId: 'braking-caliper-assembly',
    material: 'Low Carbon Lead-Free 12L14 Steel',
    process: 'Swiss CNC Turning',
    tolerance: '±0.008 mm',
    surfaceFinish: 'Zinc Trivalent Clear with Topcoat',
    annualCapacity: '14,000,000 pcs',
    emergencyBufferUnits: 130000,
    criticalFunction: 'Allows zero-leak hydraulic fluid purging during factory vacuum bleed and dealer service.',
    leadTimeStandardDays: 10,
    emergencyDispatchHours: 4,
    cadAvailable: true,
    ppapLevel: 'PPAP Level 3'
  },
  {
    id: 'CP-BR-05',
    name: 'Multi-Layer Constrained Damping Shim',
    partNumber: 'AF-SHM-6002-D',
    category: 'Braking & Chassis',
    parentAssembly: 'Hydraulic Disc Brake Caliper & Carrier Assembly',
    parentAssemblyId: 'braking-caliper-assembly',
    material: 'Steel / Viscoelastic Polymer / Steel Laminate',
    process: 'Fine Blanking',
    tolerance: '±0.010 mm',
    surfaceFinish: 'Anti-Corrosion Polyurethane Coat',
    annualCapacity: '16,500,000 pcs',
    emergencyBufferUnits: 175000,
    criticalFunction: 'Dampens brake resonance frequencies between 2 kHz and 14 kHz to prevent customer complaints.',
    leadTimeStandardDays: 12,
    emergencyDispatchHours: 4,
    cadAvailable: true,
    ppapLevel: 'PPAP Level 3'
  },

  // EV Battery Subsystem Child Parts
  {
    id: 'CP-EV-01',
    name: 'High-Voltage Flexible Copper Busbar Terminal',
    partNumber: 'AF-BUS-9014-C',
    category: 'Powertrain & EV',
    parentAssembly: 'EV High-Voltage Battery Pack & Thermal Manifold Module',
    parentAssemblyId: 'ev-battery-thermal-assembly',
    material: 'C11000 ETP Copper (99.9% IACS conductivity)',
    process: 'High-Speed Progressive Stamping',
    tolerance: '±0.005 mm',
    surfaceFinish: 'Pure Matte Tin over Nickel Barrier',
    annualCapacity: '8,900,000 pcs',
    emergencyBufferUnits: 65000,
    criticalFunction: 'Interconnects pouch/prismatic battery cells carrying up to 450A continuous peak current with minimal delta-T.',
    leadTimeStandardDays: 15,
    emergencyDispatchHours: 4,
    cadAvailable: true,
    ppapLevel: 'PPAP Level 4'
  },
  {
    id: 'CP-EV-02',
    name: 'Thermal Cold-Plate Extruded Clamp Pin',
    partNumber: 'AF-THM-4033-A',
    category: 'Powertrain & EV',
    parentAssembly: 'EV High-Voltage Battery Pack & Thermal Manifold Module',
    parentAssemblyId: 'ev-battery-thermal-assembly',
    material: 'Automotive 6061-T6 Aluminum',
    process: 'Swiss CNC Turning',
    tolerance: '±0.007 mm',
    surfaceFinish: 'Hard Anodized Mil-A-8625 Type III',
    annualCapacity: '7,400,000 pcs',
    emergencyBufferUnits: 50000,
    criticalFunction: 'Secures glycol-water liquid cooling ribbon to bottom battery tray under severe chassis vibrations.',
    leadTimeStandardDays: 12,
    emergencyDispatchHours: 4,
    cadAvailable: true,
    ppapLevel: 'PPAP Level 3'
  },
  {
    id: 'CP-EV-03',
    name: 'Pyro-Fuse Blast Resistant Connector Lock',
    partNumber: 'AF-PYR-1090-L',
    category: 'Powertrain & EV',
    parentAssembly: 'EV High-Voltage Battery Pack & Thermal Manifold Module',
    parentAssemblyId: 'ev-battery-thermal-assembly',
    material: 'High-Strength Martensitic 1200 MS Steel',
    process: 'Fine Blanking',
    tolerance: '±0.006 mm',
    surfaceFinish: 'Electroless Nickel Plating',
    annualCapacity: '4,500,000 pcs',
    emergencyBufferUnits: 35000,
    criticalFunction: 'Contains explosive kinetic discharge of pyrotechnic battery disconnect during severe crash isolation.',
    leadTimeStandardDays: 16,
    emergencyDispatchHours: 4,
    cadAvailable: true,
    ppapLevel: 'PPAP Level 4'
  },
  {
    id: 'CP-EV-04',
    name: 'Cell Compression Tension Tie Rod Retainer',
    partNumber: 'AF-ROD-8821-T',
    category: 'Powertrain & EV',
    parentAssembly: 'EV High-Voltage Battery Pack & Thermal Manifold Module',
    parentAssemblyId: 'ev-battery-thermal-assembly',
    material: 'Grade 10.9 Boron Steel',
    process: 'Cold Heading & Thread Rolling',
    tolerance: '±0.008 mm',
    surfaceFinish: 'Magni 565 Dual Coat',
    annualCapacity: '6,200,000 pcs',
    emergencyBufferUnits: 42000,
    criticalFunction: 'Maintains constant 15 kPa mechanical pre-compression across lithium-ion cell stacks over 10-year life.',
    leadTimeStandardDays: 14,
    emergencyDispatchHours: 4,
    cadAvailable: true,
    ppapLevel: 'PPAP Level 3'
  },
  {
    id: 'CP-EV-05',
    name: 'Overpressure Vent Burst Disc Carrier',
    partNumber: 'AF-VNT-3011-B',
    category: 'Powertrain & EV',
    parentAssembly: 'EV High-Voltage Battery Pack & Thermal Manifold Module',
    parentAssemblyId: 'ev-battery-thermal-assembly',
    material: 'Precision 316L Thin Foil + Brass Ring',
    process: 'Engineered Overmolding',
    tolerance: '±0.005 mm',
    surfaceFinish: 'Chemical Passivation',
    annualCapacity: '5,100,000 pcs',
    emergencyBufferUnits: 38000,
    criticalFunction: 'Ruptures predictably at 300 mbar to vent thermal runaway gas safely away from cabin.',
    leadTimeStandardDays: 15,
    emergencyDispatchHours: 4,
    cadAvailable: true,
    ppapLevel: 'PPAP Level 4'
  },

  // Steering Column Assembly Child Parts
  {
    id: 'CP-ST-01',
    name: 'Steering Cardan Universal Joint Trunnion Cross',
    partNumber: 'AF-STR-5020-X',
    category: 'Steering & Drivetrain',
    parentAssembly: 'Electric Power Steering (EPS) Column & Intermediate Shaft',
    parentAssemblyId: 'steering-column-assembly',
    material: '20CrMnTi Carburizing Alloy',
    process: 'Swiss CNC Turning',
    tolerance: '±0.003 mm',
    surfaceFinish: 'Case Hardened 58-62 HRC + Superfinished',
    annualCapacity: '5,800,000 pcs',
    emergencyBufferUnits: 40000,
    criticalFunction: 'Transmits steering wheel torque without torsional backlash or rotational play.',
    leadTimeStandardDays: 18,
    emergencyDispatchHours: 4,
    cadAvailable: true,
    ppapLevel: 'PPAP Level 3'
  },
  {
    id: 'CP-ST-02',
    name: 'Crash-Telescopic Energy Absorbing Shear Pin',
    partNumber: 'AF-SHR-1144-P',
    category: 'Steering & Drivetrain',
    parentAssembly: 'Electric Power Steering (EPS) Column & Intermediate Shaft',
    parentAssemblyId: 'steering-column-assembly',
    material: 'Precision Controlled Shear Nylon 6/6',
    process: 'Engineered Overmolding',
    tolerance: '±0.006 mm',
    surfaceFinish: 'Precision Molded Low-Friction',
    annualCapacity: '7,000,000 pcs',
    emergencyBufferUnits: 55000,
    criticalFunction: 'Shears cleanly at exactly 4.2 kN frontal deceleration to collapse column and protect driver chest.',
    leadTimeStandardDays: 14,
    emergencyDispatchHours: 4,
    cadAvailable: true,
    ppapLevel: 'PPAP Level 3'
  },
  {
    id: 'CP-ST-03',
    name: 'EPS Worm Gear Splined Coupler Collar',
    partNumber: 'AF-CPL-7019-S',
    category: 'Steering & Drivetrain',
    parentAssembly: 'Electric Power Steering (EPS) Column & Intermediate Shaft',
    parentAssemblyId: 'steering-column-assembly',
    material: 'SCM440 Chromium Molybdenum Steel',
    process: 'Fine Blanking',
    tolerance: '±0.005 mm',
    surfaceFinish: 'Manganese Phosphate Coated',
    annualCapacity: '6,400,000 pcs',
    emergencyBufferUnits: 48000,
    criticalFunction: 'Connects electric assist motor to steering rack pinion with zero angular play.',
    leadTimeStandardDays: 16,
    emergencyDispatchHours: 4,
    cadAvailable: true,
    ppapLevel: 'PPAP Level 3'
  },
  {
    id: 'CP-ST-04',
    name: 'Steering Tilt-Lock Serrated Sector Tooth Plate',
    partNumber: 'AF-TLT-3390-T',
    category: 'Steering & Drivetrain',
    parentAssembly: 'Electric Power Steering (EPS) Column & Intermediate Shaft',
    parentAssemblyId: 'steering-column-assembly',
    material: 'Hardened C1045 Carbon Steel',
    process: 'High-Speed Progressive Stamping',
    tolerance: '±0.008 mm',
    surfaceFinish: 'Zinc Iron Alloy Plated',
    annualCapacity: '9,200,000 pcs',
    emergencyBufferUnits: 72000,
    criticalFunction: 'Firmly locks manual tilt and telescopic steering wheel adjustment under 500 N pulling load.',
    leadTimeStandardDays: 11,
    emergencyDispatchHours: 4,
    cadAvailable: true,
    ppapLevel: 'PPAP Level 3'
  },

  // Seat Recline Child Parts
  {
    id: 'CP-ST-11',
    name: 'Seat Recliner Dual-Tooth Sector Cam Pawl',
    partNumber: 'AF-REC-9400-P',
    category: 'Interior & Safety',
    parentAssembly: 'Automotive Seating Kinematics & Recline Mechanism',
    parentAssemblyId: 'seat-recline-assembly',
    material: 'Micro-Alloyed HSLA Saphir 400',
    process: 'Fine Blanking',
    tolerance: '±0.004 mm',
    surfaceFinish: 'Carbonitrided 550 HV',
    annualCapacity: '11,500,000 pcs',
    emergencyBufferUnits: 80000,
    criticalFunction: 'Prevents seat back collapse during rear-end crash up to 1,800 Nm momentary torque.',
    leadTimeStandardDays: 14,
    emergencyDispatchHours: 4,
    cadAvailable: true,
    ppapLevel: 'PPAP Level 3'
  },
  {
    id: 'CP-ST-12',
    name: 'Precision Flanged Recliner Pivot Bushing',
    partNumber: 'AF-BSH-2201-F',
    category: 'Interior & Safety',
    parentAssembly: 'Automotive Seating Kinematics & Recline Mechanism',
    parentAssemblyId: 'seat-recline-assembly',
    material: 'Sintered Bronze-Steel Composite',
    process: 'Swiss CNC Turning',
    tolerance: '±0.005 mm',
    surfaceFinish: 'Self-Lubricating Porous Impregnation',
    annualCapacity: '14,000,000 pcs',
    emergencyBufferUnits: 95000,
    criticalFunction: 'Smooth, silent recline actuation with zero wobble over 15-year vehicle service life.',
    leadTimeStandardDays: 12,
    emergencyDispatchHours: 4,
    cadAvailable: true,
    ppapLevel: 'PPAP Level 3'
  },
  {
    id: 'CP-ST-13',
    name: 'High-Torque Clock-Spring Counterbalance',
    partNumber: 'AF-CLK-0552-S',
    category: 'Interior & Safety',
    parentAssembly: 'Automotive Seating Kinematics & Recline Mechanism',
    parentAssemblyId: 'seat-recline-assembly',
    material: 'DIN 17223 C-Grade Spring Steel Strip',
    process: 'High-Speed Progressive Stamping',
    tolerance: '±0.015 mm',
    surfaceFinish: 'Corrosion Inhibiting Polymer Dip',
    annualCapacity: '13,200,000 pcs',
    emergencyBufferUnits: 110000,
    criticalFunction: 'Assists seat back upright return motion without manual muscle strain.',
    leadTimeStandardDays: 10,
    emergencyDispatchHours: 4,
    cadAvailable: true,
    ppapLevel: 'PPAP Level 3'
  },
  {
    id: 'CP-ST-14',
    name: 'Seat Track Detent Locking Pin',
    partNumber: 'AF-TRK-8815-D',
    category: 'Interior & Safety',
    parentAssembly: 'Automotive Seating Kinematics & Recline Mechanism',
    parentAssemblyId: 'seat-recline-assembly',
    material: 'Forged 4130 Chromoly Steel',
    process: 'Cold Heading & Thread Rolling',
    tolerance: '±0.006 mm',
    surfaceFinish: 'Heavy Yellow Zinc Dichromate',
    annualCapacity: '15,500,000 pcs',
    emergencyBufferUnits: 130000,
    criticalFunction: 'Interlocks forward/aft seat rail slider in 10mm increment positions.',
    leadTimeStandardDays: 10,
    emergencyDispatchHours: 4,
    cadAvailable: true,
    ppapLevel: 'PPAP Level 3'
  }
];

export interface PlantLocation {
  city: string;
  country: string;
  type: string;
  areaSqFt: number;
  highlight: string;
  focus: string;
  transitHotspot: string;
}

export const PLANT_LOCATIONS: PlantLocation[] = [
  {
    city: 'Gurugram Automotive Corridor (Haryana, India)',
    country: 'India',
    type: 'Primary Dedicated Manufacturing Plant & Tooling Center',
    areaSqFt: 145000,
    highlight: 'Direct supply to Maruti Suzuki, Hero MotoCorp, Honda, and Tier-1 automotive ecosystem',
    focus: '19 Power Presses (5T-150T), 5 Decoilers, 1 Straightener, 1 Surface Grinder & 30 Dies Tooling',
    transitHotspot: 'NH-48 Corridor, KMP Expressway & Delhi IGI Cargo Direct'
  },
  {
    city: 'Monterrey, Nuevo León',
    country: 'Mexico',
    type: 'High-Volume Precision Stamping & Blanking Facility',
    areaSqFt: 220000,
    highlight: 'Tier-1 supply node for USMCA automotive corridor & EV gigafactories',
    focus: 'Multi-cavity fine blanking, automated optical sorters, overmolding',
    transitHotspot: 'Laredo Border Crossing, MTY International'
  },
  {
    city: 'Stuttgart / Baden-Württemberg',
    country: 'Germany',
    type: 'European Engineering & Buffer Warehouse Hub',
    areaSqFt: 95000,
    highlight: 'Direct integration with European Tier-1 OEMs (Bosch, ZF, Continental, Mercedes)',
    focus: 'VDA 6.3 Metrology Lab, Consignment VMI buffer for line-down contingencies',
    transitHotspot: 'A8 Autobahn, STR Cargo Express'
  },
  {
    city: 'Pune / Chakan Auto Cluster',
    country: 'India',
    type: 'Global Tooling, EDM & High-Speed CNC Campus',
    areaSqFt: 180000,
    highlight: 'Precision die manufacturing, micro-machining, export buffer to Asia-Pacific',
    focus: 'Swiss screw machines, wire EDM, heat-treat induction cells',
    transitHotspot: 'JNPT Port & Mumbai Air Corridor'
  }
];

export const QUALITY_STANDARDS = [
  {
    badge: 'IATF 16949:2016',
    title: 'Automotive Quality Management Standard',
    description: 'Fully certified quality system covering defect prevention, variation reduction, and supply chain containment across all facilities.',
    auditBody: 'TÜV Rheinland Certified',
    certificateNo: 'IATF-0498214-US'
  },
  {
    badge: 'ISO 9001:2015',
    title: 'International Quality Systems',
    description: 'Standardized management workflows with automated traceability linking raw bar/coil lots to finished child parts.',
    auditBody: 'DNV GL Accredited',
    certificateNo: 'ISO-9001-2024-GL'
  },
  {
    badge: 'VDA 6.3 Process Audit',
    title: 'German Automotive Industry Process Standard',
    description: 'Class A ranking (97.4% score) across product development, supplier management, serial production, and customer support.',
    auditBody: 'VDA QMC Auditor Registered',
    certificateNo: 'VDA-A-9742-EU'
  },
  {
    badge: 'ISO 14001:2015',
    title: 'Environmental & Recycled Scrap Management',
    description: 'Closed-loop metal scrap segregation, 100% coolant recycling, and zero landfill waste compliance for ESG targets.',
    auditBody: 'Bureau Veritas',
    certificateNo: 'ENV-14001-9921'
  }
];

export const METROLOGY_CAPABILITIES = [
  {
    title: '100% High-Speed Optical Vision Sorting',
    spec: 'Up to 900 pcs/minute',
    detail: '360° telecentric cameras inspecting diameter, thread presence, burrs, and concentricity with automatic pneumatic rejection.'
  },
  {
    title: 'Zeiss CNC Coordinate Measuring (CMM)',
    spec: 'Sub-micron accuracy (0.0008 mm)',
    detail: 'Automated probe cycles generating statistical CPK/PPK reports for every production lot and PPAP submission.'
  },
  {
    title: 'ASTM B117 Neutral Salt Spray Chambers',
    spec: '1,500+ Hours without red rust',
    detail: 'Continuous accelerated corrosion testing ensuring Zn-Ni and Geomet coatings exceed severe underbody specifications.'
  },
  {
    title: 'Keyence Optical 3D Surface Profilometer',
    spec: 'Ra resolution down to 0.01 µm',
    detail: 'Non-contact surface roughness mapping to prevent seal blow-by and hydraulic micro-leakage on sliding pins.'
  }
];
