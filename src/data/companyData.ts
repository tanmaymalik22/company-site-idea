import { 
  ParentSubsystem, 
  ServiceItem, 
  MachineSpec, 
  ClientPartner,
  PowerPressDetail,
  PressAutomationEquipment,
  DGGensetFacility,
  MeasuringInstrumentDetail,
  PartImagePlaceholder,
  WorkingForCompany,
  HireToolRoomFacility,
  CoilHandlingEquipment,
  GrinderMachineSpec,
  DieTypeCapability,
  DieInventoryItem,
  PageTopic,
  PlantMetalMaterial,
  CompressorSpec,
  DecoilerSpec,
  StraightenerSpec,
  SurfaceGrinderSpec
} from '../types';

export const COMPANY_INFO = {
  name: 'GLOBLE BHAVYA',
  legalName: 'Globle Bhavya Auto Components Pvt. Ltd.',
  tagline: 'Automotive Child Parts Stamping, 19 Power Presses (5T to 150T, PP-1 to PP-19), 2 Compressors, 5 Decoilers, 1 Straightener, 1 Surface Grinder & 30 Dies Tooling',
  plantStructure: 'Single Dedicated Manufacturing Plant (No multiple plants; concentrated single-unit manufacturing excellence in Gurugram, India)',
  founded: '2013',
  foundingEngineers: 'Arjun Mehta & Vikram Singhania (Automobile Engineering Specialists)',
  facilityArea: 'Focused Single-Unit Precision Press Shop & Tool Room Plant',
  manufacturingCampus: 'Plot 18, Industrial Area Phase-I, Gurugram, Haryana 122050, India',
  headquarters: 'Plot 18, Industrial Area Phase-I, Gurugram, Haryana 122050, India',
  phone: '+91 (124) 458-9000',
  directPhone: '+91 98100 55273',
  emergencyHotline: '+91 (124) 458-9001',
  email: 'info@globlebhavya.com',
  engineeringEmail: 'engineering@globlebhavya.com',
  workingHours: 'Mon - Sat: 8:00 AM - 7:00 PM (Emergency Line-Down Runs Active)',
  certifications: ['IATF 16949:2016 Certified', 'ISO 9001:2015', 'ISO 14001:2015'],
  stats: [
    { label: 'Power Presses Fleet (PP-1 to PP-19)', value: '19 Presses' },
    { label: 'Plant Press Tonnage Range', value: '5T to 150T' },
    { label: 'Plant Air Compressors', value: '2 Units' },
    { label: 'Plant Decoilers (DC-1 to DC-5)', value: '5 Decoilers' },
    { label: 'Precision Auto Straightener (ST-1)', value: '1 Straightener' },
    { label: 'Surface Grinder - Tool Room (SG-1)', value: '1 Grinder' },
    { label: 'Active Production Dies (Mounted)', value: '19 Dies Active' },
    { label: 'Total Dies Available (Tooling Library)', value: '30 Dies Available' },
    { label: 'Plant Structure', value: 'Single Plant' },
    { label: 'Continuous DG Power Backup', value: '880 kVA' },
    { label: 'Dimensional Inspection Tools', value: 'Complete Lab' }
  ]
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'child-parts-manufacturing',
    title: 'Precision Child Parts Manufacturing',
    tagline: 'The Micro-Engineered Building Blocks of Parent Assemblies',
    description: 'We specialize in manufacturing the smaller, individual building components that come together to form larger automotive assemblies. From high-tensile door hinge pins and rotary lock pawls to brake caliper guide pins and EV busbars, our parts deliver zero-defect reliability across millions of vehicle duty cycles.',
    iconName: 'Layers',
    features: [
      'High-speed progressive die stamping (5T to 150T capacity, PP-1 to PP-19)',
      'Sub-micron Swiss CNC multi-axis turning for sliding pins & shafts',
      'Fine blanking for crack-free sheared edge geometries',
      'Advanced engineered polymer & metal insert overmolding',
      'Anti-corrosion surface treatments (Zn-Ni 1000h salt spray, Geomet, Phosphate)'
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'subsystem-design',
    title: 'Automotive Subsystem & Parent Part Engineering',
    tagline: 'End-to-End Kinematic Design & System Integration',
    description: 'Our in-house design studio and engineering team collaborates directly with automotive OEMs to design complete parent assemblies. We perform 3D CAD modeling, FEA structural stress simulation, kinematic tolerance stack-up analysis, and DFM optimization to ensure every child part mates flawlessly inside the parent subsystem.',
    iconName: 'Compass',
    features: [
      '3D CAD & surfacing using CATIA V5, Siemens NX, and SolidWorks',
      'Finite Element Analysis (FEA) for impact, fatigue, and crash load resistance',
      'Kinematic tolerance stack-up modeling for zero-play movement',
      'Thermal analysis for underhood and EV battery modules',
      'Rapid prototype verification with 3D SLA/SLS and CNC tooling'
    ],
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'emergency-line-down',
    title: '24/7 Emergency Line-Down Supply & Dispatch',
    tagline: 'Preventing Multi-Million Dollar Assembly Plant Stoppages',
    description: 'In automotive assembly, missing even one child part halts the entire vehicle production line. We provide an industry-leading emergency rapid-response supply service. We maintain active buffer stock of critical child components and dedicated standby tooling cells to dispatch parts within 4 hours directly to OEM docks.',
    iconName: 'ShieldAlert',
    features: [
      'Dedicated 24/7 Line-Down Emergency Hotline with 15-minute triage',
      '4-Hour buffer dispatch via chartered air cargo and hotshot team-driver trucks',
      'Standby quick-change tooling cells capable of surge production within 24-48 hours',
      'Consignment Vendor Managed Inventory (VMI) hubs near major OEM clusters',
      'Zero-defect PPAP Level 3 documentation pre-validated for immediate line feeding'
    ],
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tooling-and-dies',
    title: 'In-House Tooling, Dies & Prototyping',
    tagline: 'Tool Room Equipped with Wire EDM & 5-Axis Machining',
    description: 'We do not rely on third-party toolmakers. Our 14,000 sq. ft. precision tool room designs, builds, and maintains multi-station progressive stamping dies, transfer tooling, and Swiss CNC fixtures in-house. This cuts tooling lead times by 50% and guarantees lifetime die maintenance.',
    iconName: 'Wrench',
    features: [
      'Multi-station progressive dies with in-die sensor monitoring',
      'High-precision Wire EDM cutting with 0.001mm wire positioning',
      'Automated CNC surface grinding and carbide insert machining',
      'Rapid prototype tooling turns around functional parts in 5 business days',
      'Lifetime preventative die maintenance and spare punch buffering'
    ],
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'quality-and-metrology',
    title: 'IATF 16949 Metrology & Inspection Lab',
    tagline: 'Zero-Defect Philosophy with Sub-Micron Accuracy',
    description: 'Quality is verified at every station. Our metrology laboratory features Zeiss CNC coordinate measuring machines (CMM), 100% automated optical vision sorters inspecting up to 900 parts per minute, and environmental salt-spray corrosion chambers for complete OEM peace of mind.',
    iconName: 'Award',
    features: [
      'Zeiss CNC Coordinate Measuring Machine (CMM) with sub-micron scanning',
      '100% automated optical telecentric vision sorting for 100% defect isolation',
      'ASTM B117 neutral salt spray corrosion chamber (1,500+ hours capability)',
      'Keyence optical 3D surface profilometer for Ra surface finish validation',
      'Complete PPAP Level 1–5 documentation, IMDS submission, and SPC reports'
    ],
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80'
  }
];

export const PARENT_SUBSYSTEMS: ParentSubsystem[] = [
  {
    id: 'car-door-assembly',
    title: 'Automotive Door Subsystem & Latch Assembly',
    category: 'Body & Closures',
    parentDescription: 'A complete vehicle side door parent assembly comprising structural closure, rotary lock mechanisms, window regulator linkages, and hinge kinematics. A car door cannot lock, seal, or pivot without its critical child parts.',
    image: 'https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?auto=format&fit=crop&w=800&q=80',
    oemApplication: 'Passenger Sedans, SUVs, Light Trucks & Delivery Vans',
    childParts: [
      {
        id: 'CP-DR-01',
        name: 'Door Hinge Pivot Pin',
        partNumber: 'AF-HNG-4420-P',
        material: 'Case-Hardened 8620 Alloy Steel',
        process: 'Swiss CNC Turning + Micro-Polish',
        tolerance: '±0.005 mm',
        functionInParent: 'Maintains door vertical alignment and sag resistance over 100,000 door open/close cycles.',
        emergencyBufferUnits: 85000,
        drawingType: 'turned_pin',
        drawingRevision: 'REV-D (IATF Approved)',
        cadFormats: ['.STEP', '.IGES', '.DXF', '.PDF'],
        parentMatingInterface: 'Press-fit into vehicle B-pillar lower hinge bracket bushing and upper door clevis',
        gdtCallouts: ['Runout 0.005 A', 'Cylindricity 0.003', 'Ra 0.20 µm Micro-finish'],
        dimensions: [
          { label: 'Journal Diameter ØD1', value: '12.000 ± 0.005 mm', nominal: 12.0, tolerance: '±0.005 mm', criticality: 'Critical (CTQ)', note: 'Bearing journal contact surface with brass bushing' },
          { label: 'Overall Length L1', value: '64.50 ± 0.02 mm', nominal: 64.5, tolerance: '±0.02 mm', criticality: 'Major', note: 'Total shaft pin span between hinge lugs' },
          { label: 'Head Flange Diameter ØD2', value: '18.00 ± 0.05 mm', nominal: 18.0, tolerance: '±0.05 mm', criticality: 'Major', note: 'Thrust retention shoulder' },
          { label: 'Head Thickness T1', value: '4.00 ± 0.02 mm', nominal: 4.0, tolerance: '±0.02 mm', criticality: 'Standard', note: 'Axial clearance seat' },
          { label: 'Snap-Ring Groove Width W1', value: '1.15 ± 0.02 mm', nominal: 1.15, tolerance: '±0.02 mm', criticality: 'Critical (CTQ)', note: 'DIN 471 retaining clip seat' },
          { label: 'Chamfer C1', value: '1.50 x 45°', nominal: 1.5, tolerance: '±0.10 mm', criticality: 'Standard', note: 'Automated robotic lead-in insertion' }
        ]
      },
      {
        id: 'CP-DR-02',
        name: 'Rotary Latch Pawl with Acoustic Overmold',
        partNumber: 'AF-LTC-8812-M',
        material: 'High-Carbon C1075 + POM Elastomer',
        process: 'Fine Blanking + Insert Overmolding',
        tolerance: '±0.010 mm',
        functionInParent: 'Primary lock engagement claw preventing door unlatching during FMVSS 206 lateral crash.',
        emergencyBufferUnits: 60000,
        drawingType: 'stamped_pawl',
        drawingRevision: 'REV-E (Crash Safety Validated)',
        cadFormats: ['.STEP', '.IGES', '.DXF', '.PDF'],
        parentMatingInterface: 'Rotates on striker pin axis inside latch cassette, locking into primary and secondary positions',
        gdtCallouts: ['Perpendicularity 0.008 A', 'Profile of Surface 0.015 A-B', 'Hardness 48-52 HRC'],
        dimensions: [
          { label: 'Pivot Hole Diameter ØH1', value: '8.000 ± 0.008 mm', nominal: 8.0, tolerance: '±0.008 mm', criticality: 'Critical (CTQ)', note: 'Hinged trunnion journal with zero radial slop' },
          { label: 'Catch Hook Outer Radius R1', value: '24.85 ± 0.010 mm', nominal: 24.85, tolerance: '±0.010 mm', criticality: 'Critical (CTQ)', note: 'Primary crash locking engagement tooth' },
          { label: 'Steel Substrate Thickness T1', value: '3.50 ± 0.03 mm', nominal: 3.5, tolerance: '±0.03 mm', criticality: 'Major', note: 'Fine-blanked structural load core' },
          { label: 'Acoustic Overmold Layer T2', value: '1.20 ± 0.05 mm', nominal: 1.2, tolerance: '±0.05 mm', criticality: 'Standard', note: 'Sound-dampening POM elastomer encapsulation' },
          { label: 'Locking Detent Angle θ', value: '38.50° ± 0.20°', nominal: 38.5, tolerance: '±0.20°', criticality: 'Critical (CTQ)', note: 'Secondary FMVSS anti-bounce geometry' }
        ]
      },
      {
        id: 'CP-DR-03',
        name: 'Striker Retaining Bracket & Plate',
        partNumber: 'AF-STR-3105-B',
        material: 'HSLA 350 MPa Automotive Steel',
        process: 'High-Speed Progressive Stamping',
        tolerance: '±0.012 mm',
        functionInParent: 'Anchors door latch jaws to B-pillar chassis, resisting 11 kN transverse separation load.',
        emergencyBufferUnits: 120000,
        drawingType: 'bracket_plate',
        drawingRevision: 'REV-C',
        cadFormats: ['.STEP', '.DXF', '.PDF'],
        parentMatingInterface: 'Torqued to B-pillar inner reinforcing cage with dual M8 high-tensile fasteners',
        gdtCallouts: ['Flatness 0.02 A', 'True Position 0.05 A-B', 'Geomet 500 Grade B (1000h)'],
        dimensions: [
          { label: 'Mounting Hole Pitch P1', value: '72.00 ± 0.05 mm', nominal: 72.0, tolerance: '±0.05 mm', criticality: 'Critical (CTQ)', note: 'Center-to-center chassis mounting centers' },
          { label: 'Plate Thickness T1', value: '4.20 ± 0.05 mm', nominal: 4.2, tolerance: '±0.05 mm', criticality: 'Major', note: 'Heavy gauge cold-rolled HSLA stock' },
          { label: 'Striker Bar Hole ØD1', value: '10.20 ± 0.02 mm', nominal: 10.2, tolerance: '±0.02 mm', criticality: 'Critical (CTQ)', note: 'Interference loop staking aperture' },
          { label: 'Flange Width W1', value: '38.00 ± 0.10 mm', nominal: 38.0, tolerance: '±0.10 mm', criticality: 'Standard', note: 'Chassis B-pillar door sill pocket fit' }
        ]
      },
      {
        id: 'CP-DR-04',
        name: 'Window Regulator Cable Pulley Pin',
        partNumber: 'AF-WND-2044-S',
        material: 'AISI 303 Stainless Steel',
        process: 'Swiss CNC Turning',
        tolerance: '±0.008 mm',
        functionInParent: 'Zero-friction pivot for window regulator wire guide, eliminating glass chatter and squeak.',
        emergencyBufferUnits: 45000,
        drawingType: 'turned_pin',
        drawingRevision: 'REV-B',
        cadFormats: ['.STEP', '.IGES', '.PDF'],
        parentMatingInterface: 'Riveted into pressed steel window regulator frame',
        gdtCallouts: ['Concentricity 0.005', 'Surface Finish Ra 0.2 µm'],
        dimensions: [
          { label: 'Pulley Journal Diameter ØD1', value: '6.000 ± 0.005 mm', nominal: 6.0, tolerance: '±0.005 mm', criticality: 'Critical (CTQ)', note: 'Zero-friction Delrin pulley race' },
          { label: 'Spindle Length L1', value: '22.40 ± 0.03 mm', nominal: 22.4, tolerance: '±0.03 mm', criticality: 'Major', note: 'Regulator frame span' },
          { label: 'Staking Boss Diameter ØD2', value: '4.80 ± 0.02 mm', nominal: 4.8, tolerance: '±0.02 mm', criticality: 'Standard', note: 'Orbital rivet flare end' }
        ]
      },
      {
        id: 'CP-DR-05',
        name: 'Inner Handle Torsion Return Spring',
        partNumber: 'AF-SPR-0911-T',
        material: 'Chrome Silicon Spring Steel',
        process: 'Cold Coiling & Heat Set',
        tolerance: '±0.020 mm',
        functionInParent: 'Delivers ergonomic tactile return feel and snap-back for interior door opening lever.',
        emergencyBufferUnits: 150000,
        drawingType: 'spring',
        drawingRevision: 'REV-A',
        cadFormats: ['.STEP', '.PDF'],
        parentMatingInterface: 'Coiled around door interior release handle lever boss',
        gdtCallouts: ['Load at 45° deflection: 2.4 ± 0.2 Nm', 'Shot peened to 100k cycles'],
        dimensions: [
          { label: 'Wire Diameter Ød', value: '2.20 ± 0.02 mm', nominal: 2.2, tolerance: '±0.02 mm', criticality: 'Critical (CTQ)', note: 'Chrome silicon spring wire' },
          { label: 'Outer Coil Diameter ØOD', value: '16.50 ± 0.15 mm', nominal: 16.5, tolerance: '±0.15 mm', criticality: 'Major', note: 'Handle boss cavity clearance' },
          { label: 'Leg Tangent Length L1', value: '32.00 ± 0.20 mm', nominal: 32.0, tolerance: '±0.20 mm', criticality: 'Standard', note: 'Anchor leg to door trim bracket' }
        ]
      }
    ]
  },
  {
    id: 'braking-caliper-assembly',
    title: 'Hydraulic Disc Brake Caliper & Carrier Assembly',
    category: 'Braking & Chassis',
    parentDescription: 'Critical safety parent subsystem transforming hydraulic pressure into friction clamping force, requiring micro-finished sliding child pins and vibration isolation clips.',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
    oemApplication: 'High-Performance BEVs, ICE Light Vehicles & Commercial Fleets',
    childParts: [
      {
        id: 'CP-BR-01',
        name: 'Brake Caliper Guide Pin (Slide Pin)',
        partNumber: 'AF-CAL-5510-G',
        material: '4140 Induction Hardened Steel',
        process: 'Swiss CNC Turning + Hard Chrome',
        tolerance: '±0.004 mm',
        functionInParent: 'Ensures uniform floating caliper lateral movement, preventing uneven brake pad taper wear.',
        emergencyBufferUnits: 95000,
        drawingType: 'turned_pin',
        drawingRevision: 'REV-F (Braking Critical CTQ)',
        cadFormats: ['.STEP', '.IGES', '.DXF', '.PDF'],
        parentMatingInterface: 'Slides inside caliper anchor bracket rubber-bushed sliding bore',
        gdtCallouts: ['Straightness 0.003 A', 'Cylindricity 0.002', 'Ra 0.15 µm Micro-Finished Hard Chrome'],
        dimensions: [
          { label: 'Precision Slide Journal ØD1', value: '10.000 ± 0.004 mm', nominal: 10.0, tolerance: '±0.004 mm', criticality: 'Critical (CTQ)', note: 'Micro-ground slide surface with zero taper' },
          { label: 'Guide Pin Working Length L1', value: '78.20 ± 0.02 mm', nominal: 78.2, tolerance: '±0.02 mm', criticality: 'Major', note: 'Axial caliper travel reach' },
          { label: 'Hex Drive Across-Flats S1', value: '14.00 ± 0.05 mm', nominal: 14.0, tolerance: '±0.05 mm', criticality: 'Standard', note: 'Fastener torque drive (32 Nm)' },
          { label: 'Thread Pitch M1', value: 'M10 x 1.25 - 6g', nominal: 10.0, tolerance: 'Class 6g', criticality: 'Critical (CTQ)', note: 'Anchor bracket threaded port' },
          { label: 'Rubber Boot Lip Groove ØD2', value: '7.80 ± 0.03 mm', nominal: 7.8, tolerance: '±0.03 mm', criticality: 'Major', note: 'EPDM moisture boot retention channel' }
        ]
      },
      {
        id: 'CP-BR-02',
        name: 'Anti-Rattle Abutment Clip',
        partNumber: 'AF-ABT-1209-C',
        material: 'AISI 301 Full Hard Stainless',
        process: 'High-Speed Progressive Stamping',
        tolerance: '±0.015 mm',
        functionInParent: 'Isolates brake pads from caliper carrier to suppress high-frequency NVH squeal.',
        emergencyBufferUnits: 210000,
        drawingType: 'bracket_plate',
        drawingRevision: 'REV-C',
        cadFormats: ['.STEP', '.DXF', '.PDF'],
        parentMatingInterface: 'Snaps over cast iron brake anchor bracket abutment ears',
        gdtCallouts: ['Spring Temper 1600 MPa', 'Passivated to ASTM A967'],
        dimensions: [
          { label: 'Pad Guide Channel Width W1', value: '15.40 ± 0.05 mm', nominal: 15.4, tolerance: '±0.05 mm', criticality: 'Critical (CTQ)', note: 'Brake pad ear low-friction sliding channel' },
          { label: 'Retention Spring Tab Spread W2', value: '28.50 ± 0.10 mm', nominal: 28.5, tolerance: '±0.10 mm', criticality: 'Major', note: 'Carrier ear clamping pre-tension' },
          { label: 'Strip Thickness T1', value: '0.40 ± 0.01 mm', nominal: 0.4, tolerance: '±0.01 mm', criticality: 'Critical (CTQ)', note: 'High fatigue spring stainless strip' }
        ]
      },
      {
        id: 'CP-BR-03',
        name: 'Piston Phenolic Core Insert',
        partNumber: 'AF-PST-7730-I',
        material: 'Thermoset Phenolic + Steel Insert',
        process: 'Engineered Overmolding',
        tolerance: '±0.006 mm',
        functionInParent: 'Transfers hydraulic thrust to brake pad while blocking thermal heat soak to brake fluid.',
        emergencyBufferUnits: 40000,
        drawingType: 'bushing',
        drawingRevision: 'REV-B',
        cadFormats: ['.STEP', '.PDF'],
        parentMatingInterface: 'Pressed inside caliper cylinder bore; seals against hydraulic square-cut fluid ring',
        gdtCallouts: ['Roundness 0.004', 'Thermal Conductivity < 0.35 W/mK'],
        dimensions: [
          { label: 'Piston Outer Diameter ØOD', value: '54.000 ± 0.006 mm', nominal: 54.0, tolerance: '±0.006 mm', criticality: 'Critical (CTQ)', note: 'Fluid seal sliding diameter' },
          { label: 'Total Piston Height H1', value: '48.50 ± 0.05 mm', nominal: 48.5, tolerance: '±0.05 mm', criticality: 'Major', note: 'Caliper bore stroke envelope' },
          { label: 'Crown Face Recess Depth D1', value: '3.20 ± 0.05 mm', nominal: 3.2, tolerance: '±0.05 mm', criticality: 'Standard', note: 'Brake pad shim contact rim' }
        ]
      },
      {
        id: 'CP-BR-04',
        name: 'Bleeder Screw Valve & Port',
        partNumber: 'AF-BLD-0412-V',
        material: 'Low Carbon Lead-Free 12L14',
        process: 'Swiss CNC Turning + Zinc Topcoat',
        tolerance: '±0.008 mm',
        functionInParent: 'Allows zero-leak hydraulic fluid purging during factory vacuum bleed and servicing.',
        emergencyBufferUnits: 130000,
        drawingType: 'turned_pin',
        drawingRevision: 'REV-B',
        cadFormats: ['.STEP', '.DXF', '.PDF'],
        parentMatingInterface: 'Threads into caliper top hydraulic fluid chamber',
        gdtCallouts: ['Conical Seat Angle 90° ± 0.5°', 'Zero leak at 250 bar pressure'],
        dimensions: [
          { label: 'Valve Cone Sealing Angle θ', value: '90.00° ± 0.30°', nominal: 90.0, tolerance: '±0.30°', criticality: 'Critical (CTQ)', note: 'Metal-to-metal high-pressure hydraulic seat' },
          { label: 'Bleed Cross-Hole Diameter ØD1', value: '1.80 ± 0.05 mm', nominal: 1.8, tolerance: '±0.05 mm', criticality: 'Major', note: 'Central vacuum fluid evacuation orifice' },
          { label: 'Thread Size', value: 'M10 x 1.0 - 6g', nominal: 10.0, tolerance: 'Class 6g', criticality: 'Critical (CTQ)', note: 'Fine pitch hydraulic thread' }
        ]
      },
      {
        id: 'CP-BR-05',
        name: 'Constrained Layer Damping Shim',
        partNumber: 'AF-SHM-6002-D',
        material: 'Steel / Viscoelastic Polymer / Steel',
        process: 'Fine Blanking',
        tolerance: '±0.010 mm',
        functionInParent: 'Dampens brake resonance frequencies between 2 kHz and 14 kHz.',
        emergencyBufferUnits: 175000,
        drawingType: 'bracket_plate',
        drawingRevision: 'REV-D',
        cadFormats: ['.STEP', '.PDF'],
        parentMatingInterface: 'Staked with mechanical locking claws directly to steel brake pad backing plate',
        gdtCallouts: ['Damping Factor > 0.15 at 100°C', 'Adhesive Shear Strength > 8 MPa'],
        dimensions: [
          { label: 'Backing Plate Length L1', value: '142.50 ± 0.10 mm', nominal: 142.5, tolerance: '±0.10 mm', criticality: 'Major', note: 'Full pad profile coverage' },
          { label: 'Laminate Total Thickness T1', value: '0.85 ± 0.02 mm', nominal: 0.85, tolerance: '±0.02 mm', criticality: 'Critical (CTQ)', note: 'Viscoelastic core sandwiched between cold-rolled steel' },
          { label: 'Piston Contact Window ØW1', value: '56.00 ± 0.20 mm', nominal: 56.0, tolerance: '±0.20 mm', criticality: 'Standard', note: 'Phenolic piston contact zone' }
        ]
      }
    ]
  },
  {
    id: 'ev-battery-thermal-assembly',
    title: 'EV High-Voltage Battery Pack & Thermal Subsystem',
    category: 'Powertrain & EV',
    parentDescription: 'Next-generation electric vehicle parent module integrating cell busbars, coolant distribution channels, and pressure relief safeguards.',
    image: 'https://images.unsplash.com/photo-1558441719-8b489c63f7d1?auto=format&fit=crop&w=800&q=80',
    oemApplication: '800V Architecture EVs, Hybrid Powertrains & Commercial Electric Trucks',
    childParts: [
      {
        id: 'CP-EV-01',
        name: 'Flexible High-Voltage Copper Busbar Terminal',
        partNumber: 'AF-BUS-9014-C',
        material: 'C11000 ETP Copper (99.9% IACS)',
        process: 'Progressive Stamping + Matte Tin Plating',
        tolerance: '±0.005 mm',
        functionInParent: 'Interconnects battery cells carrying up to 450A peak current with minimal delta-T.',
        emergencyBufferUnits: 65000,
        drawingType: 'busbar',
        drawingRevision: 'REV-E (800V EV Validated)',
        cadFormats: ['.STEP', '.IGES', '.DXF', '.PDF'],
        parentMatingInterface: 'Ultrasonic-welded or bolted via M6 studs across battery cell terminal blocks',
        gdtCallouts: ['Conductivity > 99.9% IACS', 'Tin Coating 8-12 µm with Nickel Barrier', 'Hi-Pot tested to 3,500V DC'],
        dimensions: [
          { label: 'Terminal Hole Diameter ØD1', value: '6.400 ± 0.020 mm', nominal: 6.4, tolerance: '±0.020 mm', criticality: 'Critical (CTQ)', note: 'M6 battery cell terminal stud clearance' },
          { label: 'Hole-to-Hole Center Distance C1', value: '112.50 ± 0.05 mm', nominal: 112.5, tolerance: '±0.05 mm', criticality: 'Critical (CTQ)', note: 'Span between adjacent prismatic cell terminals' },
          { label: 'Busbar Width W1', value: '24.00 ± 0.08 mm', nominal: 24.0, tolerance: '±0.08 mm', criticality: 'Major', note: 'Cross-section conductor dimension' },
          { label: 'Laminated Pack Thickness T1', value: '2.50 ± 0.03 mm', nominal: 2.5, tolerance: '±0.03 mm', criticality: 'Critical (CTQ)', note: 'Stack of 50 diffusion-bonded 0.05mm copper foils' },
          { label: 'Thermal Expansion Arch Height H1', value: '16.50 ± 0.20 mm', nominal: 16.5, tolerance: '±0.20 mm', criticality: 'Standard', note: 'Absorbs lithium-ion pouch expansion/contraction' }
        ]
      },
      {
        id: 'CP-EV-02',
        name: 'Thermal Cold-Plate Clamp Pin',
        partNumber: 'AF-THM-4033-A',
        material: 'Automotive 6061-T6 Aluminum',
        process: 'Swiss CNC Turning + Hard Anodized',
        tolerance: '±0.007 mm',
        functionInParent: 'Secures glycol-water liquid cooling ribbon to bottom battery tray under chassis vibrations.',
        emergencyBufferUnits: 50000,
        drawingType: 'turned_pin',
        drawingRevision: 'REV-B',
        cadFormats: ['.STEP', '.PDF'],
        parentMatingInterface: 'Snaps into lower battery tray structural aluminum extrusion channels',
        gdtCallouts: ['Hard Anodized MIL-A-8625 Type III 25 µm', 'Dielectric breakdown > 2,000V'],
        dimensions: [
          { label: 'Retention Pin Diameter ØD1', value: '8.000 ± 0.007 mm', nominal: 8.0, tolerance: '±0.007 mm', criticality: 'Critical (CTQ)', note: 'Cold-plate locating dowel diameter' },
          { label: 'Clamp Head Height H1', value: '14.20 ± 0.05 mm', nominal: 14.2, tolerance: '±0.05 mm', criticality: 'Major', note: 'Battery module lower base clamp' }
        ]
      },
      {
        id: 'CP-EV-03',
        name: 'Pyro-Fuse Blast Resistant Connector Lock',
        partNumber: 'AF-PYR-1090-L',
        material: 'Martensitic 1200 MS Steel',
        process: 'Fine Blanking + Electroless Nickel',
        tolerance: '±0.006 mm',
        functionInParent: 'Contains kinetic discharge of pyrotechnic battery disconnect during severe crash isolation.',
        emergencyBufferUnits: 35000,
        drawingType: 'bracket_plate',
        drawingRevision: 'REV-C',
        cadFormats: ['.STEP', '.DXF', '.PDF'],
        parentMatingInterface: 'Encloses the pyrotechnic circuit breaker in the HV junction box',
        gdtCallouts: ['Tensile Strength 1,200 MPa', 'Impact containment 45 Joules'],
        dimensions: [
          { label: 'Containment Collar Bore ØB1', value: '26.000 ± 0.006 mm', nominal: 26.0, tolerance: '±0.006 mm', criticality: 'Critical (CTQ)', note: 'Pyro pellet blast chamber envelope' },
          { label: 'Wall Thickness T1', value: '3.20 ± 0.03 mm', nominal: 3.2, tolerance: '±0.03 mm', criticality: 'Major', note: 'Pressure burst containment wall' }
        ]
      },
      {
        id: 'CP-EV-04',
        name: 'Cell Compression Tie Rod Retainer',
        partNumber: 'AF-ROD-8821-T',
        material: 'Grade 10.9 Boron Steel',
        process: 'Cold Heading & Thread Rolling',
        tolerance: '±0.008 mm',
        functionInParent: 'Maintains constant mechanical pre-compression across lithium-ion cell stacks over 10-year life.',
        emergencyBufferUnits: 42000,
        drawingType: 'turned_pin',
        drawingRevision: 'REV-A',
        cadFormats: ['.STEP', '.PDF'],
        parentMatingInterface: 'Anchors battery module aluminum end-plates together with constant 15 kN tension',
        gdtCallouts: ['Yield Strength 940 MPa', 'Thread Runout 0.015 mm'],
        dimensions: [
          { label: 'Shaft Diameter ØD1', value: '8.000 ± 0.008 mm', nominal: 8.0, tolerance: '±0.008 mm', criticality: 'Critical (CTQ)', note: 'Full module tension rod body' },
          { label: 'Thread Pitch M1', value: 'M8 x 1.0 - 6g', nominal: 8.0, tolerance: 'Class 6g', criticality: 'Major', note: 'Torque preload thread' }
        ]
      }
    ]
  },
  {
    id: 'steering-column-assembly',
    title: 'Electric Power Steering (EPS) Column & Coupler',
    category: 'Steering & Drivetrain',
    parentDescription: 'High-torque directional control parent assembly requiring anti-backlash universal joints, splined couplers, and precision crush-collars for driver crash safety.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    oemApplication: 'Dual-pinion and column-assist EPS systems for passenger cars and light commercial platforms',
    childParts: [
      {
        id: 'CP-ST-01',
        name: 'Steering Cardan U-Joint Trunnion Cross',
        partNumber: 'AF-STR-5020-X',
        material: '20CrMnTi Carburizing Alloy',
        process: 'Swiss CNC Turning + Induction Hardening',
        tolerance: '±0.003 mm',
        functionInParent: 'Transmits steering wheel torque without torsional backlash or rotational play.',
        emergencyBufferUnits: 40000,
        drawingType: 'turned_pin',
        drawingRevision: 'REV-D (Zero Backlash)',
        cadFormats: ['.STEP', '.IGES', '.DXF', '.PDF'],
        parentMatingInterface: 'Press-fit with needle roller bearings inside cardan steering yokes',
        gdtCallouts: ['Journal Perpendicularity 0.002 A', 'Hardness 58-62 HRC', 'Ra 0.10 µm Superfinished'],
        dimensions: [
          { label: 'Trunnion Journal Diameter ØD1', value: '14.000 ± 0.003 mm', nominal: 14.0, tolerance: '±0.003 mm', criticality: 'Critical (CTQ)', note: 'Needle roller race diameter' },
          { label: 'Cross Span Length L1', value: '44.00 ± 0.02 mm', nominal: 44.0, tolerance: '±0.02 mm', criticality: 'Major', note: 'Cardan yoke span distance' }
        ]
      },
      {
        id: 'CP-ST-02',
        name: 'Crash-Telescopic Energy Absorbing Shear Pin',
        partNumber: 'AF-SHR-1144-P',
        material: 'Controlled Shear Engineered Nylon 6/6',
        process: 'Precision Engineered Overmolding',
        tolerance: '±0.006 mm',
        functionInParent: 'Shears cleanly at exactly 4.2 kN frontal deceleration to collapse column and protect driver.',
        emergencyBufferUnits: 55000,
        drawingType: 'turned_pin',
        drawingRevision: 'REV-B',
        cadFormats: ['.STEP', '.PDF'],
        parentMatingInterface: 'Pins inner and outer steering column telescopic tubes together',
        gdtCallouts: ['Shear Force 4.20 ± 0.20 kN', 'Temperature tested -40°C to +85°C'],
        dimensions: [
          { label: 'Shear Neck Diameter ØD1', value: '5.200 ± 0.006 mm', nominal: 5.2, tolerance: '±0.006 mm', criticality: 'Critical (CTQ)', note: 'Calibrated crash shear section' }
        ]
      },
      {
        id: 'CP-ST-03',
        name: 'EPS Worm Gear Splined Coupler Collar',
        partNumber: 'AF-CPL-7019-S',
        material: 'SCM440 Chromium Molybdenum Steel',
        process: 'Fine Blanking + Manganese Phosphate',
        tolerance: '±0.005 mm',
        functionInParent: 'Connects electric assist motor to steering rack pinion with zero angular play.',
        emergencyBufferUnits: 48000,
        drawingType: 'bushing',
        drawingRevision: 'REV-C',
        cadFormats: ['.STEP', '.DXF', '.PDF'],
        parentMatingInterface: 'Splined onto EPS motor assist output shaft',
        gdtCallouts: ['Involute Spline DIN 5480', 'Runout 0.006 mm'],
        dimensions: [
          { label: 'Internal Spline Pitch ØP1', value: '20.000 ± 0.005 mm', nominal: 20.0, tolerance: '±0.005 mm', criticality: 'Critical (CTQ)', note: 'Module 1.0 involute tooth spline' }
        ]
      }
    ]
  },
  {
    id: 'seat-recline-assembly',
    title: 'Automotive Seating Kinematics & Recline Mechanism',
    category: 'Interior & Safety',
    parentDescription: 'FMVSS-compliant interior parent assembly capable of absorbing high-g rear impact loads with micro-pitch sector gear locks and zero-play pivot bushings.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    oemApplication: 'Front driver & passenger seating frames, power & manual seat bases',
    childParts: [
      {
        id: 'CP-ST-11',
        name: 'Dual-Tooth Sector Cam Pawl',
        partNumber: 'AF-REC-9400-P',
        material: 'Micro-Alloyed HSLA Saphir 400',
        process: 'Fine Blanking + Carbonitrided 550 HV',
        tolerance: '±0.004 mm',
        functionInParent: 'Prevents seat back collapse during rear-end crash up to 1,800 Nm momentary torque.',
        emergencyBufferUnits: 80000,
        drawingType: 'stamped_pawl',
        drawingRevision: 'REV-D (FMVSS 207 Certified)',
        cadFormats: ['.STEP', '.DXF', '.PDF'],
        parentMatingInterface: 'Locks into outer recliner guide plate sector teeth',
        gdtCallouts: ['Tooth Profile Runout 0.005 mm', 'Case Depth 0.35-0.50 mm'],
        dimensions: [
          { label: 'Pivot Cam Bore ØH1', value: '10.000 ± 0.004 mm', nominal: 10.0, tolerance: '±0.004 mm', criticality: 'Critical (CTQ)', note: 'Recliner main pivot journal' },
          { label: 'Sector Tooth Pitch Module m', value: '1.25 ± 0.005 mm', nominal: 1.25, tolerance: '±0.005 mm', criticality: 'Critical (CTQ)', note: 'High shear strength lock teeth' }
        ]
      },
      {
        id: 'CP-ST-12',
        name: 'Flanged Recliner Pivot Bushing',
        partNumber: 'AF-BSH-2201-F',
        material: 'Sintered Bronze-Steel Composite',
        process: 'Swiss CNC Turning + Self-Lubricating',
        tolerance: '±0.005 mm',
        functionInParent: 'Smooth, silent recline actuation with zero wobble over 15-year vehicle service life.',
        emergencyBufferUnits: 95000,
        drawingType: 'bushing',
        drawingRevision: 'REV-B',
        cadFormats: ['.STEP', '.PDF'],
        parentMatingInterface: 'Pressed into stamped seat cushion side bracket',
        gdtCallouts: ['Concentricity 0.005', 'Oil Impregnated 18-22% volume'],
        dimensions: [
          { label: 'Inner Bearing Bore ØID', value: '12.000 ± 0.005 mm', nominal: 12.0, tolerance: '±0.005 mm', criticality: 'Critical (CTQ)', note: 'Recline shaft clearance fit' }
        ]
      },
      {
        id: 'CP-ST-13',
        name: 'Clock-Spring Counterbalance',
        partNumber: 'AF-CLK-0552-S',
        material: 'DIN 17223 C-Grade Spring Steel Strip',
        process: 'High-Speed Progressive Stamping',
        tolerance: '±0.015 mm',
        functionInParent: 'Assists seat back upright return motion without manual muscle strain.',
        emergencyBufferUnits: 110000,
        drawingType: 'spring',
        drawingRevision: 'REV-A',
        cadFormats: ['.STEP', '.PDF'],
        parentMatingInterface: 'Hooked around center pivot shaft and seat back frame anchor peg',
        gdtCallouts: ['Return Torque 4.5 ± 0.3 Nm at 90°', 'Fatigue Life > 80,000 cycles'],
        dimensions: [
          { label: 'Strip Thickness T1', value: '1.80 ± 0.02 mm', nominal: 1.8, tolerance: '±0.02 mm', criticality: 'Critical (CTQ)', note: 'High yield spring strip' }
        ]
      }
    ]
  }
];

export const FACILITY_MACHINERY: MachineSpec[] = [
  {
    name: 'Power Presses Stamping Fleet',
    count: '19 Power Presses (Each Different Capacity)',
    capacity: '10 Ton to 250 Ton Capacity',
    brand: 'Komatsu / AIDA / Amada / Chin Fong / Seyi',
    application: 'Single plant dedicated stamping line with 19 active dies running and 30 dies total available'
  },
  {
    name: 'Swiss Multi-Axis CNC Turning Centers',
    count: '24 CNC Machines',
    capacity: 'Ø 1.5mm to Ø 38mm Bar Stock',
    brand: 'Citizen Cincom & Star Micronics',
    application: 'Sub-micron sliding hinge pins, brake guide pins, valve bleeders, and trunnion crosses'
  },
  {
    name: 'Fine Blanking Hydraulic Presses',
    count: '6 Automated Units',
    capacity: '160 Ton to 630 Ton Clamping',
    brand: 'Feintool / Schuler',
    application: '100% clean-cut sheared edge gears, locking pawls, and high-strength safety cams'
  },
  {
    name: 'Wire EDM & CNC Sinker Centers',
    count: '8 Machines',
    capacity: '0.001 mm Positioning Resolution',
    brand: 'Makino & Mitsubishi Electric',
    application: 'In-house precision tool & die fabrication, carbide punches, and emergency re-tooling'
  },
  {
    name: '100% Optical Telecentric Vision Sorters',
    count: '10 High-Speed Lines',
    capacity: 'Up to 900 Pieces / Minute',
    brand: 'Keyence & ViciVision',
    application: '360° optical inspection of outer diameters, threads, burrs, and concentricity with air ejection'
  },
  {
    name: 'Zeiss CNC Coordinate Measuring (CMM)',
    count: '4 Climate-Controlled Labs',
    capacity: 'Sub-Micron (0.0008 mm Accuracy)',
    brand: 'Carl Zeiss Accura & Prismo',
    application: 'Automated 3D scanning, PPAP Level 3 statistical validation, and CPK/PPK reporting'
  }
];

export const CLIENT_PARTNERS: ClientPartner[] = [
  {
    name: 'Global Passenger OEM',
    tier: 'Direct Tier-1 Supplier Agreement',
    region: 'India & International OEM Hub (Gurugram Corridor & Export)',
    suppliedAssemblies: 'Side Door Closure Child Parts & Window Regulator Pins'
  },
  {
    name: 'Tier-1 Braking Systems Integrator',
    tier: 'Direct Serial Production Partner',
    region: 'Europe (Baden-Württemberg, Germany)',
    suppliedAssemblies: 'Hydraulic Caliper Slide Pins & Anti-Rattle Abutment Clips'
  },
  {
    name: 'Leading Electric Vehicle Gigafactory',
    tier: 'Strategic Component Partner',
    region: 'North America (Texas / Mexico)',
    suppliedAssemblies: 'HV Flexible Copper Busbars & Thermal Pack Clamp Retainers'
  },
  {
    name: 'Commercial Truck & Bus Manufacturer',
    tier: 'Direct Tier-1 Supplier Agreement',
    region: 'Asia-Pacific & Export Hub',
    suppliedAssemblies: 'Steering Column U-Joint Trunnions & Heavy-Duty Recliner Cams'
  }
];

export const COMPANY_MILESTONES = [
  {
    year: '2013',
    title: 'Incorporation by Automotive Engineers',
    description: 'Founded by automobile engineers Arjun Mehta and Vikram Singhania with a focus on advanced CAD design, prototyping, and automotive sub-components.'
  },
  {
    year: '2016',
    title: 'Expansion into Serial Child Parts Manufacturing',
    description: 'Commissioned the first progressive stamping lines and Swiss CNC turning cells, securing direct Tier-2 automotive contracts.'
  },
  {
    year: '2019',
    title: 'IATF 16949:2016 Certification & Direct OEM Supply',
    description: 'Achieved automotive gold-standard certification, enabling direct JIT line-side delivery to passenger vehicle assembly plants.'
  },
  {
    year: '2022',
    title: 'Launch of 24/7 Emergency Line-Down Supply Protocol',
    description: 'Established dedicated safety buffer hubs and rapid-response tooling cells, guaranteeing under 4-hour hotshot emergency delivery to prevent OEM plant stoppages.'
  },
  {
    year: '2024-Present',
    title: 'EV Powertrain & 48,500 Sq. Ft. Facility Campus',
    description: 'Expanded campus to 48,500 sq. ft., integrating automated optical vision sorting and high-voltage busbar production for electric vehicle platforms.'
  }
];

// ========================================================
// 1. 19 POWER PRESSES - EXACT PLANT SPECIFICATIONS (PP-1 to PP-19)
// ========================================================
export const POWER_PRESS_INVENTORY: PowerPressDetail[] = [
  {
    id: 'PRESS-PP-01',
    pressNumber: 1,
    machineNo: 'PP-1',
    pressName: 'Press PP-1 (10 Ton)',
    tonnage: 10,
    tonnageLabel: '10T',
    shutHeight: '8"',
    strokeLength: '2 1/2"',
    dieHeight: '8"',
    pressType: 'Mechanical C-Frame Press',
    bedSize: '450 x 320 mm',
    strokesPerMinute: '80 - 150 SPM',
    dieTypesUsed: 'Precision Hole Piercing & Flanged Bushing Dies',
    keyApplications: 'Automotive door hinge pivot washers, small fastener brackets & wire harness clips',
    brand: 'Bhavya Heavy Duty',
    activeDieId: 'DIE-11',
    activeDieName: 'Door Hinge Pivot Washer & Pierce Die (Active)'
  },
  {
    id: 'PRESS-PP-02',
    pressNumber: 2,
    machineNo: 'PP-2',
    pressName: 'Press PP-2 (10 Ton)',
    tonnage: 10,
    tonnageLabel: '10T',
    shutHeight: '8"',
    strokeLength: '2 1/2"',
    dieHeight: '8"',
    pressType: 'Mechanical C-Frame Press',
    bedSize: '450 x 320 mm',
    strokesPerMinute: '80 - 150 SPM',
    dieTypesUsed: 'Automotive Terminal & Grounding Tab Dies',
    keyApplications: 'High-current electrical grounding terminals, battery cable lugs & sensory connectors',
    brand: 'Bhavya Heavy Duty',
    activeDieId: 'DIE-12',
    activeDieName: 'Electrical Grounding Terminal Strip Die (Active)'
  },
  {
    id: 'PRESS-PP-03',
    pressNumber: 3,
    machineNo: 'PP-3',
    pressName: 'Press PP-3 (10 Ton)',
    tonnage: 10,
    tonnageLabel: '10T',
    shutHeight: '8"',
    strokeLength: '2 1/2"',
    dieHeight: '8"',
    pressType: 'Mechanical C-Frame Press',
    bedSize: '450 x 320 mm',
    strokesPerMinute: '85 - 155 SPM',
    dieTypesUsed: 'Brake Line & Fuel Pipe Clip Forming Dies',
    keyApplications: 'Underbody hydraulic brake line routing clips and nylon fuel hose retaining brackets',
    brand: 'Bhavya Heavy Duty',
    activeDieId: 'DIE-13',
    activeDieName: 'Hydraulic Brake Tube Retaining Clamp Die (Active)'
  },
  {
    id: 'PRESS-PP-04',
    pressNumber: 4,
    machineNo: 'PP-4',
    pressName: 'Press PP-4 (10 Ton)',
    tonnage: 10,
    tonnageLabel: '10T',
    shutHeight: '8"',
    strokeLength: '2 1/2"',
    dieHeight: '8"',
    pressType: 'Mechanical C-Frame Press',
    bedSize: '450 x 320 mm',
    strokesPerMinute: '80 - 150 SPM',
    dieTypesUsed: 'Secondary Piercing & Sizing Tooling',
    keyApplications: 'Door striker backing shims, hood bumper adjustment plates & throttle cable brackets',
    brand: 'Bhavya Heavy Duty',
    activeDieId: 'DIE-14',
    activeDieName: 'Automotive Striker Backing Shim Tool (Active)'
  },
  {
    id: 'PRESS-PP-05',
    pressNumber: 5,
    machineNo: 'PP-5',
    pressName: 'Press PP-5 (10 Ton)',
    tonnage: 10,
    tonnageLabel: '10T',
    shutHeight: '8"',
    strokeLength: '2 1/2"',
    dieHeight: '8"',
    pressType: 'Mechanical C-Frame Press',
    bedSize: '450 x 320 mm',
    strokesPerMinute: '80 - 150 SPM',
    dieTypesUsed: 'Automotive Acoustic Shield Clip Dies',
    keyApplications: 'Engine bay heat shield spring clips, firewall grommet rings & acoustic pad fasteners',
    brand: 'Bhavya Heavy Duty',
    activeDieId: 'DIE-15',
    activeDieName: 'Engine Bay Heat Shield Retainer Clip Die (Active)'
  },
  {
    id: 'PRESS-PP-06',
    pressNumber: 6,
    machineNo: 'PP-6',
    pressName: 'Press PP-6 (5 Ton)',
    tonnage: 5,
    tonnageLabel: '5T',
    shutHeight: '8"',
    strokeLength: '2"',
    dieHeight: '8"',
    pressType: 'Precision Bench Press',
    bedSize: '360 x 260 mm',
    strokesPerMinute: '120 - 220 SPM',
    dieTypesUsed: 'Delicate Piercing & Micro-Coining Tooling',
    keyApplications: 'Miniature spring steel clips, glovebox latch teeth & interior console trim retainers',
    brand: 'Precision Stamping',
    activeDieId: 'DIE-16',
    activeDieName: 'Interior Console Trim Spring Steel Die (Active)'
  },
  {
    id: 'PRESS-PP-07',
    pressNumber: 7,
    machineNo: 'PP-7',
    pressName: 'Press PP-7 (10 Ton)',
    tonnage: 10,
    tonnageLabel: '10T',
    shutHeight: '8"',
    strokeLength: '2 1/2"',
    dieHeight: '8"',
    pressType: 'Mechanical C-Frame Press',
    bedSize: '460 x 330 mm',
    strokesPerMinute: '80 - 150 SPM',
    dieTypesUsed: 'Door Latch Linkage & Small Arm Blanking',
    keyApplications: 'Inside release door handle link levers and child safety lock interlock arms',
    brand: 'Bhavya Heavy Duty',
    activeDieId: 'DIE-10',
    activeDieName: 'Door Handle Linkage Articulated Arm Die (Active)'
  },
  {
    id: 'PRESS-PP-08',
    pressNumber: 8,
    machineNo: 'PP-8',
    pressName: 'Press PP-8 (10 Ton)',
    tonnage: 10,
    tonnageLabel: '10T',
    shutHeight: '10"',
    strokeLength: '2 1/2"',
    dieHeight: '10"',
    pressType: 'Deep-Throat C-Frame Press',
    bedSize: '500 x 360 mm',
    strokesPerMinute: '75 - 140 SPM',
    dieTypesUsed: 'Extended Daylight Progressive Washer & Shim Dies',
    keyApplications: 'Deep-throat clearance for wide stamped strip, transmission shims & steering dust boots',
    brand: 'Bhavya Precision Line',
    activeDieId: 'DIE-09',
    activeDieName: 'Deep-Throat Transmission Thrust Washer Die (Active)'
  },
  {
    id: 'PRESS-PP-09',
    pressNumber: 9,
    machineNo: 'PP-9',
    pressName: 'Press PP-9 (20 Ton)',
    tonnage: 20,
    tonnageLabel: '20T',
    shutHeight: '10"',
    strokeLength: '2 1/2"',
    dieHeight: '10"',
    pressType: 'Mechanical C-Frame Press',
    bedSize: '580 x 400 mm',
    strokesPerMinute: '70 - 130 SPM',
    dieTypesUsed: 'Progressive Blanking & Piercing Tooling',
    keyApplications: 'Disc brake anti-rattle abutment clips, caliper spring retainers & wiper linkage arms',
    brand: 'Bhavya Heavy Duty',
    activeDieId: 'DIE-05',
    activeDieName: 'Brake Caliper Anti-Rattle Abutment Clip Die (Active)'
  },
  {
    id: 'PRESS-PP-10',
    pressNumber: 10,
    machineNo: 'PP-10',
    pressName: 'Press PP-10 (30 Ton)',
    tonnage: 30,
    tonnageLabel: '30T',
    shutHeight: '10"',
    strokeLength: '3"',
    dieHeight: '10"',
    pressType: 'Pneumatic Clutch Stamping Press',
    bedSize: '650 x 450 mm',
    strokesPerMinute: '60 - 120 SPM',
    dieTypesUsed: 'Heavy Progressive Piercing & Flanging Tooling',
    keyApplications: 'High-voltage copper EV busbar conductors, alternator grounding arms & radiator brackets',
    brand: 'Bhavya Precision Line',
    activeDieId: 'DIE-04',
    activeDieName: 'High-Current EV Copper Busbar Progressive Tool (Active)'
  },
  {
    id: 'PRESS-PP-11',
    pressNumber: 11,
    machineNo: 'PP-11',
    pressName: 'Press PP-11 (20 Ton)',
    tonnage: 20,
    tonnageLabel: '20T',
    shutHeight: '10"',
    strokeLength: '3"',
    dieHeight: '10"',
    pressType: 'Mechanical C-Frame Press',
    bedSize: '580 x 400 mm',
    strokesPerMinute: '70 - 130 SPM',
    dieTypesUsed: 'Compound Washer & Sector Gear Blanking Dies',
    keyApplications: 'Window regulator gear sector teeth blanks, seat back adjusters & fuel flap springs',
    brand: 'Bhavya Heavy Duty',
    activeDieId: 'DIE-06',
    activeDieName: 'Window Regulator Quadrant Gear Blanking Die (Active)'
  },
  {
    id: 'PRESS-PP-12',
    pressNumber: 12,
    machineNo: 'PP-12',
    pressName: 'Press PP-12 (10 Ton)',
    tonnage: 10,
    tonnageLabel: '10T',
    shutHeight: '10"',
    strokeLength: '3"',
    dieHeight: '10"',
    pressType: 'Long-Stroke C-Frame Press',
    bedSize: '480 x 340 mm',
    strokesPerMinute: '80 - 145 SPM',
    dieTypesUsed: 'Forming & Bending Tooling for Brackets',
    keyApplications: 'Chassis brake pipe routing brackets, ABS sensor cable retainers & horn mount shims',
    brand: 'Bhavya Precision Line',
    activeDieId: 'DIE-08',
    activeDieName: 'Chassis ABS Sensor Cable Bracket Die (Active)'
  },
  {
    id: 'PRESS-PP-13',
    pressNumber: 13,
    machineNo: 'PP-13',
    pressName: 'Press PP-13 (10 Ton)',
    tonnage: 10,
    tonnageLabel: '10T',
    shutHeight: '12"',
    strokeLength: '3"',
    dieHeight: '12"',
    pressType: 'High-Daylight C-Frame Press',
    bedSize: '500 x 360 mm',
    strokesPerMinute: '80 - 145 SPM',
    dieTypesUsed: 'Tall Tooling & Cushion Assisted Forming Dies',
    keyApplications: 'Deep-draw cup child parts, spring cups, rubber mount retaining sleeves & breather caps',
    brand: 'Bhavya Precision Line',
    activeDieId: 'DIE-07',
    activeDieName: 'Shock Absorber Rebound Retainer Cup Tool (Active)'
  },
  {
    id: 'PRESS-PP-14',
    pressNumber: 14,
    machineNo: 'PP-14',
    pressName: 'Press PP-14 (5 Ton)',
    tonnage: 5,
    tonnageLabel: '5T',
    shutHeight: '6"',
    strokeLength: '1 1/2"',
    dieHeight: '6"',
    pressType: 'High-Speed Precision Bench Press',
    bedSize: '350 x 240 mm',
    strokesPerMinute: '150 - 280 SPM',
    dieTypesUsed: 'Micro-Piercing & Sizing Tooling',
    keyApplications: 'Automotive fuse terminals, micro-relay contact reeds & electrical sensor tabs',
    brand: 'Precision Stamping',
    activeDieId: 'DIE-17',
    activeDieName: 'Micro-Relay Leaf Spring & Piercing Die (Active)'
  },
  {
    id: 'PRESS-PP-15',
    pressNumber: 15,
    machineNo: 'PP-15',
    pressName: 'Press PP-15 (5 Ton)',
    tonnage: 5,
    tonnageLabel: '5T',
    shutHeight: '6"',
    strokeLength: '1 1/2"',
    dieHeight: '6"',
    pressType: 'High-Speed Precision Bench Press',
    bedSize: '350 x 240 mm',
    strokesPerMinute: '150 - 280 SPM',
    dieTypesUsed: 'Continuous Strip High-Speed Terminal Dies',
    keyApplications: 'Copper EV connector crimp terminals, CAN bus shielding clips & dashboard lighting pins',
    brand: 'Precision Stamping',
    activeDieId: 'DIE-18',
    activeDieName: 'High-Speed Copper Terminal Crimp Die (Active)'
  },
  {
    id: 'PRESS-PP-16',
    pressNumber: 16,
    machineNo: 'PP-16',
    pressName: 'Press PP-16 (5 Ton)',
    tonnage: 5,
    tonnageLabel: '5T',
    shutHeight: '6"',
    strokeLength: '1 1/2"',
    dieHeight: '6"',
    pressType: 'High-Speed Precision Bench Press',
    bedSize: '350 x 240 mm',
    strokesPerMinute: '150 - 280 SPM',
    dieTypesUsed: 'Precision Coin & Shave Dies',
    keyApplications: 'Calibrated shim washers (0.1 to 0.4 mm), internal tooth star washers & circlip retainers',
    brand: 'Precision Stamping',
    activeDieId: 'DIE-19',
    activeDieName: 'Micro-Calibrated Shim Washer Coining Die (Active)'
  },
  {
    id: 'PRESS-PP-17',
    pressNumber: 17,
    machineNo: 'PP-17',
    pressName: 'Press PP-17 (30 Ton)',
    tonnage: 30,
    tonnageLabel: '30T',
    shutHeight: '10"',
    strokeLength: '4"',
    dieHeight: '10"',
    pressType: 'Long-Stroke Pneumatic Press',
    bedSize: '680 x 480 mm',
    strokesPerMinute: '50 - 110 SPM',
    dieTypesUsed: 'Deep Draw & U-Bending Progressive Dies',
    keyApplications: 'Door lock striker retaining brackets, steering column clamps & exhaust hanger hooks',
    brand: 'Bhavya Heavy Duty',
    activeDieId: 'DIE-03',
    activeDieName: 'Automotive Door Striker Heavy Bracket Die (Active)'
  },
  {
    id: 'PRESS-PP-18',
    pressNumber: 18,
    machineNo: 'PP-18',
    pressName: 'Press PP-18 (50 Ton)',
    tonnage: 50,
    tonnageLabel: '50T',
    shutHeight: '12"',
    strokeLength: '4"',
    dieHeight: '12"',
    pressType: 'Heavy Mechanical C-Frame Press',
    bedSize: '820 x 580 mm',
    strokesPerMinute: '45 - 90 SPM',
    dieTypesUsed: 'Heavy Progressive Blanking & Forming Dies',
    keyApplications: 'Automotive door hinge straps, seat recliner sector gears & engine mount stiffeners',
    brand: 'Bhavya Heavy Duty',
    activeDieId: 'DIE-02',
    activeDieName: '12-Station Progressive Seat Recliner Sector Die (Active)'
  },
  {
    id: 'PRESS-PP-19',
    pressNumber: 19,
    machineNo: 'PP-19',
    pressName: 'Press PP-19 (150 Ton Heavy Stamping Line)',
    tonnage: 150,
    tonnageLabel: '150T',
    shutHeight: '14"',
    strokeLength: '5"',
    dieHeight: '14"',
    pressType: 'H-Frame Straight Sided Heavy Press',
    bedSize: '1250 x 900 mm',
    strokesPerMinute: '30 - 70 SPM',
    dieTypesUsed: 'Multi-Station Progressive & Deep Drawing Dies',
    keyApplications: 'Heavy chassis cross-member reinforcements, deep drawn canister shells, engine brackets & structural child parts',
    brand: 'Bhavya Heavy Line',
    activeDieId: 'DIE-01',
    activeDieName: 'Heavy Chassis Cross-Member Reinforcement Progressive Die (Active)'
  }
];

// ========================================================
// 1b. DIES INVENTORY: 19 ACTIVE DIES & 30 TOTAL AVAILABLE
// ========================================================
export const DIES_INVENTORY_LIST: DieInventoryItem[] = [
  // 19 ACTIVE DIES (Mounted and running serial parts on Press PP-1 to PP-19)
  {
    id: 'DIE-01',
    dieNumber: 1,
    dieName: 'Heavy Chassis Cross-Member Reinforcement Progressive Die',
    dieType: 'Progressive Die',
    status: 'Active (Mounted on Press)',
    assignedPress: 'Press PP-19 (150 Ton Heavy Line)',
    pressTonnageRequired: '150 Ton',
    stationsCount: '8 Stations',
    partProduced: 'Chassis cross-member stiffener brackets & reinforcement plates (3.5 mm HSLA)',
    strokeSpeedRating: '35 SPM',
    maintenanceStatus: 'Production Ready'
  },
  {
    id: 'DIE-02',
    dieNumber: 2,
    dieName: '12-Station Progressive Seat Recliner Sector Gear Die',
    dieType: 'Progressive Die',
    status: 'Active (Mounted on Press)',
    assignedPress: 'Press PP-18 (50 Ton)',
    pressTonnageRequired: '50 Ton',
    stationsCount: '12 Stations',
    partProduced: 'Seat recliner sector cam pawls with 1,800 Nm impact torque teeth (4.0 mm strip)',
    strokeSpeedRating: '45 SPM',
    maintenanceStatus: 'Production Ready'
  },
  {
    id: 'DIE-03',
    dieNumber: 3,
    dieName: 'Automotive Door Striker Heavy Bracket Progressive Die',
    dieType: 'Progressive Die',
    status: 'Active (Mounted on Press)',
    assignedPress: 'Press PP-17 (30 Ton)',
    pressTonnageRequired: '30 Ton',
    stationsCount: '8 Stations',
    partProduced: 'Door lock striker heavy retaining brackets and steering column clamps (10 kN rated)',
    strokeSpeedRating: '50 SPM',
    maintenanceStatus: 'Calibrated'
  },
  {
    id: 'DIE-04',
    dieNumber: 4,
    dieName: 'High-Current EV Copper Busbar Progressive Tool',
    dieType: 'Progressive Die',
    status: 'Active (Mounted on Press)',
    assignedPress: 'Press PP-10 (30 Ton)',
    pressTonnageRequired: '30 Ton',
    stationsCount: '9 Stations with In-Die Sensor',
    partProduced: 'High-voltage copper EV busbar conductors, alternator grounding arms & radiator brackets',
    strokeSpeedRating: '65 SPM',
    maintenanceStatus: 'Production Ready'
  },
  {
    id: 'DIE-05',
    dieNumber: 5,
    dieName: 'Brake Caliper Anti-Rattle Abutment Clip Die',
    dieType: 'Progressive Die',
    status: 'Active (Mounted on Press)',
    assignedPress: 'Press PP-9 (20 Ton)',
    pressTonnageRequired: '20 Ton',
    stationsCount: '8 Stations Progressive',
    partProduced: 'Disc brake anti-rattle abutment clips, caliper spring retainers & wiper linkage arms',
    strokeSpeedRating: '75 SPM',
    maintenanceStatus: 'Production Ready'
  },
  {
    id: 'DIE-06',
    dieNumber: 6,
    dieName: 'Window Regulator Quadrant Gear Blanking Die',
    dieType: 'Compound Die',
    status: 'Active (Mounted on Press)',
    assignedPress: 'Press PP-11 (20 Ton)',
    pressTonnageRequired: '20 Ton',
    stationsCount: 'Compound Concentric Stroke',
    partProduced: 'Window regulator gear sector teeth blanks, seat back adjusters & fuel flap springs',
    strokeSpeedRating: '75 SPM',
    maintenanceStatus: 'Production Ready'
  },
  {
    id: 'DIE-07',
    dieNumber: 7,
    dieName: 'Shock Absorber Rebound Retainer Cup Tool',
    dieType: 'Deep Drawing Die',
    status: 'Active (Mounted on Press)',
    assignedPress: 'Press PP-13 (10 Ton)',
    pressTonnageRequired: '10 Ton',
    stationsCount: 'Deep Draw & Flange (12" Shut Height)',
    partProduced: 'Deep-draw cup child parts, spring cups, rubber mount retaining sleeves & breather caps',
    strokeSpeedRating: '80 SPM',
    maintenanceStatus: 'Calibrated'
  },
  {
    id: 'DIE-08',
    dieNumber: 8,
    dieName: 'Chassis ABS Sensor Cable Bracket Die',
    dieType: 'Combination Die',
    status: 'Active (Mounted on Press)',
    assignedPress: 'Press PP-12 (10 Ton)',
    pressTonnageRequired: '10 Ton',
    stationsCount: 'Pierce, Form & Cutoff',
    partProduced: 'Chassis brake pipe routing brackets, ABS sensor cable retainers & horn mount shims',
    strokeSpeedRating: '85 SPM',
    maintenanceStatus: 'Production Ready'
  },
  {
    id: 'DIE-09',
    dieNumber: 9,
    dieName: 'Deep-Throat Transmission Thrust Washer Die',
    dieType: 'Compound Die',
    status: 'Active (Mounted on Press)',
    assignedPress: 'Press PP-8 (10 Ton)',
    pressTonnageRequired: '10 Ton',
    stationsCount: 'Compound Draw & Pierce',
    partProduced: 'Precision transmission thrust washers, steering dust boot retainers & planetary shims',
    strokeSpeedRating: '85 SPM',
    maintenanceStatus: 'Production Ready'
  },
  {
    id: 'DIE-10',
    dieNumber: 10,
    dieName: 'Door Handle Linkage Articulated Arm Die',
    dieType: 'Bending V/U Die',
    status: 'Active (Mounted on Press)',
    assignedPress: 'Press PP-7 (10 Ton)',
    pressTonnageRequired: '10 Ton',
    stationsCount: '3-Stage Form & Pierce',
    partProduced: 'Inside release door handle link levers and child safety lock interlock arms',
    strokeSpeedRating: '90 SPM',
    maintenanceStatus: 'Production Ready'
  },
  {
    id: 'DIE-11',
    dieNumber: 11,
    dieName: 'Door Hinge Pivot Washer & Pierce Die',
    dieType: 'Progressive Die',
    status: 'Active (Mounted on Press)',
    assignedPress: 'Press PP-1 (10 Ton)',
    pressTonnageRequired: '10 Ton',
    stationsCount: '6 Stations Progressive',
    partProduced: 'Automotive door hinge pivot washers, small fastener brackets & wire harness clips',
    strokeSpeedRating: '95 SPM',
    maintenanceStatus: 'Production Ready'
  },
  {
    id: 'DIE-12',
    dieNumber: 12,
    dieName: 'Electrical Grounding Terminal Strip Die',
    dieType: 'Progressive Die',
    status: 'Active (Mounted on Press)',
    assignedPress: 'Press PP-2 (10 Ton)',
    pressTonnageRequired: '10 Ton',
    stationsCount: '8 Stations with Recoiler Takeup',
    partProduced: 'High-current electrical grounding terminals, battery cable lugs & sensory connectors',
    strokeSpeedRating: '100 SPM',
    maintenanceStatus: 'Production Ready'
  },
  {
    id: 'DIE-13',
    dieNumber: 13,
    dieName: 'Hydraulic Brake Tube Retaining Clamp Die',
    dieType: 'Compound Die',
    status: 'Active (Mounted on Press)',
    assignedPress: 'Press PP-3 (10 Ton)',
    pressTonnageRequired: '10 Ton',
    stationsCount: 'Compound Clamp Stroke',
    partProduced: 'Underbody hydraulic brake line routing clips and nylon fuel hose retaining brackets',
    strokeSpeedRating: '100 SPM',
    maintenanceStatus: 'Calibrated'
  },
  {
    id: 'DIE-14',
    dieNumber: 14,
    dieName: 'Automotive Striker Backing Shim Tool',
    dieType: 'Bending V/U Die',
    status: 'Active (Mounted on Press)',
    assignedPress: 'Press PP-4 (10 Ton)',
    pressTonnageRequired: '10 Ton',
    stationsCount: 'U-Form & Pierce',
    partProduced: 'Door striker backing shims, hood bumper adjustment plates & throttle cable brackets',
    strokeSpeedRating: '110 SPM',
    maintenanceStatus: 'Production Ready'
  },
  {
    id: 'DIE-15',
    dieNumber: 15,
    dieName: 'Engine Bay Heat Shield Retainer Clip Die',
    dieType: 'Combination Die',
    status: 'Active (Mounted on Press)',
    assignedPress: 'Press PP-5 (10 Ton)',
    pressTonnageRequired: '10 Ton',
    stationsCount: 'Form, Lance & Cutoff',
    partProduced: 'Engine bay heat shield spring clips, firewall grommet rings & acoustic pad fasteners',
    strokeSpeedRating: '115 SPM',
    maintenanceStatus: 'Production Ready'
  },
  {
    id: 'DIE-16',
    dieNumber: 16,
    dieName: 'Interior Console Trim Spring Steel Die',
    dieType: 'Progressive Die',
    status: 'Active (Mounted on Press)',
    assignedPress: 'Press PP-6 (5 Ton)',
    pressTonnageRequired: '5 Ton',
    stationsCount: '6 Stations Precision',
    partProduced: 'Miniature spring steel clips, glovebox latch teeth & interior console trim retainers',
    strokeSpeedRating: '140 SPM',
    maintenanceStatus: 'Production Ready'
  },
  {
    id: 'DIE-17',
    dieNumber: 17,
    dieName: 'Micro-Relay Leaf Spring & Piercing Die',
    dieType: 'Progressive Die',
    status: 'Active (Mounted on Press)',
    assignedPress: 'Press PP-14 (5 Ton)',
    pressTonnageRequired: '5 Ton',
    stationsCount: '8 Micro-Stations Carbide Insert',
    partProduced: 'Automotive fuse terminals, micro-relay contact reeds & electrical sensor tabs',
    strokeSpeedRating: '180 SPM',
    maintenanceStatus: 'Calibrated'
  },
  {
    id: 'DIE-18',
    dieNumber: 18,
    dieName: 'High-Speed Copper Terminal Crimp Die',
    dieType: 'Piercing & Notching Die',
    status: 'Active (Mounted on Press)',
    assignedPress: 'Press PP-15 (5 Ton)',
    pressTonnageRequired: '5 Ton',
    stationsCount: 'High-Speed Sizing & Lance',
    partProduced: 'Copper EV connector crimp terminals, CAN bus shielding clips & dashboard lighting pins',
    strokeSpeedRating: '190 SPM',
    maintenanceStatus: 'Production Ready'
  },
  {
    id: 'DIE-19',
    dieNumber: 19,
    dieName: 'Micro-Calibrated Shim Washer Coining Die',
    dieType: 'Coining & Trimming Die',
    status: 'Active (Mounted on Press)',
    assignedPress: 'Press PP-16 (5 Ton)',
    pressTonnageRequired: '5 Ton',
    stationsCount: 'Micro-Coin & Blank',
    partProduced: 'Calibrated shim washers (0.1 to 0.4 mm), internal tooth star washers & circlip retainers',
    strokeSpeedRating: '200 SPM',
    maintenanceStatus: 'Production Ready'
  },

  // 11 STANDBY / AVAILABLE DIES (Ready in Tool Room Racking for Fast Setup & Alternative Part Runs)
  {
    id: 'DIE-20',
    dieNumber: 20,
    dieName: 'Heavy Alternator Bracket Forming Die (Standby)',
    dieType: 'Combination Die',
    status: 'Available (Tool Storage Racks / Standby)',
    pressTonnageRequired: '150T - 200T',
    stationsCount: 'Forming & Blanking',
    partProduced: 'High-torque alternator and power steering pump bracket assemblies',
    strokeSpeedRating: '40 SPM',
    maintenanceStatus: 'Production Ready'
  },
  {
    id: 'DIE-21',
    dieNumber: 21,
    dieName: 'Steering Column Bracket Z-Forming Die (Standby)',
    dieType: 'Bending V/U Die',
    status: 'Available (Tool Storage Racks / Standby)',
    pressTonnageRequired: '130T - 160T',
    stationsCount: 'Compound Z-Bend',
    partProduced: 'Energy-absorbing collapse-stroke steering column brackets (3.0 mm steel)',
    strokeSpeedRating: '45 SPM',
    maintenanceStatus: 'Recently Serviced'
  },
  {
    id: 'DIE-22',
    dieNumber: 22,
    dieName: 'Brake Caliper Piston Collar Drawing Die (Standby)',
    dieType: 'Deep Drawing Die',
    status: 'Available (Tool Storage Racks / Standby)',
    pressTonnageRequired: '100T - 150T',
    stationsCount: '3-Stage Reverse Draw',
    partProduced: 'Hydraulic disc brake piston retainer collars and dust seal retaining rings',
    strokeSpeedRating: '45 SPM',
    maintenanceStatus: 'Production Ready'
  },
  {
    id: 'DIE-23',
    dieNumber: 23,
    dieName: 'Radiator Lower Isolator Mount Bracket Tool (Standby)',
    dieType: 'Progressive Die',
    status: 'Available (Tool Storage Racks / Standby)',
    pressTonnageRequired: '90T - 110T',
    stationsCount: '6 Stations',
    partProduced: 'Anti-vibration rubber bushing retainer brackets for cooling modules',
    strokeSpeedRating: '60 SPM',
    maintenanceStatus: 'Production Ready'
  },
  {
    id: 'DIE-24',
    dieNumber: 24,
    dieName: 'Suspension Strut Top Mount Rebound Washer Die (Standby)',
    dieType: 'Compound Die',
    status: 'Available (Tool Storage Racks / Standby)',
    pressTonnageRequired: '75T - 90T',
    stationsCount: 'Compound Draw & Pierce',
    partProduced: 'Cup-shaped rebound limit washers for MacPherson strut damper assemblies',
    strokeSpeedRating: '65 SPM',
    maintenanceStatus: 'Production Ready'
  },
  {
    id: 'DIE-25',
    dieNumber: 25,
    dieName: 'Fuel Tank Heat Shield Stiffener Rib Die (Standby)',
    dieType: 'Combination Die',
    status: 'Available (Tool Storage Racks / Standby)',
    pressTonnageRequired: '60T - 75T',
    stationsCount: 'Deep Bead Emboss & Edge Curl',
    partProduced: 'Corrugated acoustic and thermal fuel tank shielding plates',
    strokeSpeedRating: '70 SPM',
    maintenanceStatus: 'Recently Serviced'
  },
  {
    id: 'DIE-26',
    dieNumber: 26,
    dieName: 'Windshield Wiper Linkage Pivot Plate Tool (Standby)',
    dieType: 'Progressive Die',
    status: 'Available (Tool Storage Racks / Standby)',
    pressTonnageRequired: '50T - 65T',
    stationsCount: '7 Stations',
    partProduced: 'Heavy-gauge wiper motor linkage drive plates and articulated pivot arms',
    strokeSpeedRating: '80 SPM',
    maintenanceStatus: 'Production Ready'
  },
  {
    id: 'DIE-27',
    dieNumber: 27,
    dieName: 'Battery Tray Hold-Down J-Hook Bracket Die (Standby)',
    dieType: 'Bending V/U Die',
    status: 'Available (Tool Storage Racks / Standby)',
    pressTonnageRequired: '40T - 50T',
    stationsCount: 'Progressive J-Bend & Thread Pierce',
    partProduced: 'Chassis 12V and 48V battery hold-down clamping brackets with threaded tabs',
    strokeSpeedRating: '90 SPM',
    maintenanceStatus: 'Production Ready'
  },
  {
    id: 'DIE-28',
    dieNumber: 28,
    dieName: 'HVAC Blower Motor Resistor Mounting Tab Die (Standby)',
    dieType: 'Progressive Die',
    status: 'Available (Tool Storage Racks / Standby)',
    pressTonnageRequired: '30T - 40T',
    stationsCount: '8 Stations',
    partProduced: 'Automotive climate control resistor tabs and thermal fuse clips',
    strokeSpeedRating: '110 SPM',
    maintenanceStatus: 'Production Ready'
  },
  {
    id: 'DIE-29',
    dieNumber: 29,
    dieName: 'Door Weatherstrip Rubber Gripper Tooth Die (Standby)',
    dieType: 'Progressive Die',
    status: 'Available (Tool Storage Racks / Standby)',
    pressTonnageRequired: '20T - 30T',
    stationsCount: '9 Micro-Stations',
    partProduced: 'Perforated spring steel core strip inside extruded EPDM car door weatherstrips',
    strokeSpeedRating: '150 SPM',
    maintenanceStatus: 'Production Ready'
  },
  {
    id: 'DIE-30',
    dieNumber: 30,
    dieName: 'Micro Fastener Shims & Calibrated Spacers Die (Standby)',
    dieType: 'Coining & Trimming Die',
    status: 'Available (Tool Storage Racks / Standby)',
    pressTonnageRequired: '10T - 20T',
    stationsCount: 'Micro Coining & Trimming',
    partProduced: 'Ultra-thin brass & SUS304 precision alignment shims from 0.05 mm to 0.30 mm',
    strokeSpeedRating: '180 SPM',
    maintenanceStatus: 'Calibrated'
  }
];

// Single Plant Press Shop Summary (PP-1 to PP-19 + 2 Compressors + 5 Decoilers + 1 Straightener + 1 Surface Grinder)
export const PRESS_SHOP_SUMMARY = {
  totalPresses: 19,
  machineNumberRange: 'PP-1 to PP-19',
  tonnageRange: '5 Ton to 150 Ton (5T, 10T, 20T, 30T, 50T, 150T)',
  shutHeightRange: '6" to 14"',
  strokeLengthRange: '1 1/2" to 5" (Stroke / Stock Height)',
  activeDies: 19,
  totalDiesAvailable: 30,
  standbyDies: 11,
  plantModel: 'Single Dedicated Manufacturing Plant (No multiple plants)',
  monthlyCapacity: '8,200,000+ Stamped Strokes',
  safetyProtocols: 'Dual-hand anti-tie down pneumatic controls, light curtains (Type 4) & mechanical overload protection',
  compressorUnits: 2,
  compressorPressure: '8.5 - 10.0 Bar continuous pneumatic supply',
  decoilerUnits: 5,
  straightenerUnits: 1,
  surfaceGrinderUnits: 1
};

// ========================================================
// 1c. PLANT AIR COMPRESSORS (Item 20: Compressor = 2)
// ========================================================
export const PLANT_COMPRESSOR_FACILITY: CompressorSpec[] = [
  {
    id: 'COMP-01',
    unitName: 'Primary High-Pressure Screw Compressor Unit #1',
    quantity: 1,
    pressureRating: '8.5 - 10.0 Bar (125 - 145 PSI)',
    flowCapacity: '120 CFM (3.4 m³/min)',
    motorPower: '30 HP / 22 kW Rotary Screw',
    application: 'Main pneumatic supply for 150T/50T/30T pneumatic clutch presses, continuous line pressure & die air cushions',
    airReceiverTank: '1,000 Liters Vertical Pressure Vessel with auto-drain'
  },
  {
    id: 'COMP-02',
    unitName: 'Secondary Auxiliary Screw Compressor Unit #2 (Synchronized Standby)',
    quantity: 1,
    pressureRating: '8.5 - 10.0 Bar (125 - 145 PSI)',
    flowCapacity: '85 CFM (2.4 m³/min)',
    motorPower: '20 HP / 15 kW High-Efficiency Unit',
    application: 'Automatic load-balancing, pneumatic part blow-off, scrap ejection & 100% pneumatic backup guarantee',
    airReceiverTank: '500 Liters Vertical Pressure Vessel'
  }
];

export const COMPRESSOR_SUMMARY = {
  totalUnits: 2,
  combinedAirDelivery: '205 CFM Total Pneumatic Delivery',
  linePressure: '8.5 - 10.0 Bar Continuous',
  redundancy: '100% Dual Compressor Redundancy (Zero Plant Pneumatic Downtime)',
  purpose: 'Pneumatic clutch actuation, in-die pneumatic lifters, part air ejection & scrap clearing'
};

// ========================================================
// 1d. PLANT DECOILERS (5 UNITS: DC-1 to DC-5)
// ========================================================
export const DECOILER_INVENTORY: DecoilerSpec[] = [
  {
    id: 'DECOIL-DC-01',
    unitNumber: 1,
    machineNo: 'DC-1',
    name: 'Heavy Hydraulic Mandrel Decoiler #1 (3.0 Ton)',
    tonnageLabel: '3.0T',
    coilWeightCapacity: 'Up to 3.0 Ton (3,000 kg)',
    stripWidthRange: '50 mm to 450 mm Strip Width',
    sheetThicknessRange: '0.5 mm to 3.5 mm (Heavy Gauge Sheet)',
    mandrelExpansion: 'Hydraulic Wedge Expansion (Ø450 - Ø510 mm ID)',
    speedRange: '0 - 25 Meters / Minute (AC Inverter Variable Speed)',
    pairedPressLine: 'Press PP-19 (150 Ton Heavy Stamping Line)',
    features: [
      'Hydraulic wedge-type mandrel expansion with motorized rotation',
      'Ultrasonic non-contact loop control sensor for synchronized press feed',
      'Pneumatic snubber arm with polyurethane roller to prevent coil clock-springing',
      'Heavy-duty dual disc safety braking system'
    ],
    role: 'Continuous heavy coil pay-off directly into 150T press line for chassis cross-member reinforcements and heavy bracket stampings.'
  },
  {
    id: 'DECOIL-DC-02',
    unitNumber: 2,
    machineNo: 'DC-2',
    name: 'Motorized Mandrel Decoiler #2 (2.0 Ton)',
    tonnageLabel: '2.0T',
    coilWeightCapacity: 'Up to 2.0 Ton (2,000 kg)',
    stripWidthRange: '40 mm to 350 mm Strip Width',
    sheetThicknessRange: '0.4 mm to 3.0 mm Sheet Gauge',
    mandrelExpansion: 'Manual Linkage Expansion (Ø460 - Ø520 mm ID)',
    speedRange: '0 - 25 Meters / Minute Variable',
    pairedPressLine: 'Press PP-18 (50 Ton Heavy Stamping Line)',
    features: [
      'Inverter variable speed drive with photoelectric loop dancer',
      'Anti-overrun pneumatic drag brake',
      'Quick coil loading keeper plates',
      'Forward/reverse rotation for coil re-winding'
    ],
    role: 'Supplies medium-to-heavy coil stock to 50T press for automotive seat recliner sector gears and hinge straps.'
  },
  {
    id: 'DECOIL-DC-03',
    unitNumber: 3,
    machineNo: 'DC-3',
    name: 'Precision Motorized Decoiler #3 (1.5 Ton)',
    tonnageLabel: '1.5T',
    coilWeightCapacity: 'Up to 1.5 Ton (1,500 kg)',
    stripWidthRange: '30 mm to 300 mm Strip Width',
    sheetThicknessRange: '0.3 mm to 2.5 mm High-Tensile & Mild Steel',
    mandrelExpansion: 'Precision Spider Mandrel (Ø450 - Ø508 mm ID)',
    speedRange: '0 - 30 Meters / Minute Variable',
    pairedPressLine: 'Press PP-10 & PP-17 (30 Ton Stamping Lines)',
    features: [
      'Infrared loop height sensor for continuous feed sync',
      'Non-marking urethane covered guide discs',
      'Rapid clamping manual expansion handle',
      'Pneumatic top arm hold-down for springback control'
    ],
    role: 'Feeds high-tensile copper and steel coil stock into 30T progressive lines for door striker brackets and EV busbars.'
  },
  {
    id: 'DECOIL-DC-04',
    unitNumber: 4,
    machineNo: 'DC-4',
    name: 'High-Speed Precision Decoiler #4 (1.0 Ton)',
    tonnageLabel: '1.0T',
    coilWeightCapacity: 'Up to 1.0 Ton (1,000 kg)',
    stripWidthRange: '20 mm to 200 mm Strip Width',
    sheetThicknessRange: '0.2 mm to 2.0 mm Sheet & Strip',
    mandrelExpansion: 'Radial Expanding Mandrel (Ø300 - Ø450 mm ID)',
    speedRange: '0 - 35 Meters / Minute High Speed',
    pairedPressLine: 'Press PP-9 & PP-11 (20 Ton Stamping Lines)',
    features: [
      'Low-inertia dynamic responsive spindle',
      'Ultra-sensitive micro-switch dancer arm loop control',
      'Precision side guide plates with quick-adjust handwheels',
      'Direct synchronization with high-speed servo feeders'
    ],
    role: 'High-speed strip pay-off for 20T presses producing brake caliper anti-rattle clips and window regulator gear blanks.'
  },
  {
    id: 'DECOIL-DC-05',
    unitNumber: 5,
    machineNo: 'DC-5',
    name: 'Precision Light-Gauge Strip Decoiler #5 (0.5 Ton)',
    tonnageLabel: '0.5T',
    coilWeightCapacity: 'Up to 0.5 Ton (500 kg)',
    stripWidthRange: '10 mm to 150 mm Narrow Strip',
    sheetThicknessRange: '0.1 mm to 1.5 mm (Thin Foil, Brass, Copper & SUS304)',
    mandrelExpansion: 'Self-Centering Quick-Lock Mandrel (Ø200 - Ø350 mm ID)',
    speedRange: '0 - 40 Meters / Minute Variable',
    pairedPressLine: 'Press PP-1 to PP-7 & PP-14 to PP-16 (5T - 10T Light Stamping Lines)',
    features: [
      'Micro-tension magnetic powder brake for delicate strip',
      'Scratch-free guiding rolls for pre-plated metals',
      'Compact footprint optimized for bench & C-frame press feed',
      'Zero-tension pay-off mode for ultra-thin alloy strips'
    ],
    role: 'Dedicated uncoiling for precision 5T & 10T presses producing electrical terminals, micro-shims, and interior console clips.'
  }
];

export const DECOILER_SUMMARY = {
  totalUnits: 5,
  equipmentRange: 'DC-1 to DC-5',
  capacityRange: '0.5 Ton to 3.0 Ton (3,000 kg)',
  stripWidthRange: '10 mm to 450 mm Width Capacity',
  gaugeRange: '0.1 mm to 3.5 mm Sheet Gauge',
  deployment: '5 Dedicated Decoiler Stations synchronized across 19 Press lines'
};

// ========================================================
// 1e. PLANT AUTO STRAIGHTENER (1 UNIT: ST-1)
// ========================================================
export const STRAIGHTENER_FACILITY: StraightenerSpec[] = [
  {
    id: 'STR-01',
    unitNumber: 1,
    machineNo: 'ST-1',
    name: 'Precision Auto Straightener / Coil Leveler (Unit #1)',
    capacityBadge: '0.3 - 3.5 mm',
    levelingCapacity: '0.3 mm to 3.5 mm Sheet Metal Thickness',
    stripWidthCapacity: 'Up to 400 mm Strip Width',
    rollerConfiguration: '7 Precision Leveling Rolls (3 Upper / 4 Lower) + Dual Entry Pinch Rolls (HRC 60-62)',
    micrometerAdjustment: 'Dual Micrometer Dial Indicators (0.01 mm Resolution for Roll Gap Calibration)',
    feedSpeed: '0 - 25 Meters / Minute Synchronized with Press Cycle',
    syncInterface: 'Direct Electronic Sync Cable with Press NC Servo Feeder & Loop Sensor',
    features: [
      'High-rigidity cast iron head with high-precision ground chrome alloy rolls (HRC 60-62)',
      'Dual micrometer dial gauges with 0.01 mm precision adjustment to set roller gap for different gauges',
      'Completely eliminates coil curvature, residual winding memory, and bow stress before progressive die entry',
      'Precision worm gear roll elevation for micrometer-accurate leveling force',
      'Variable speed AC inverter drive synchronized seamlessly with press automation line'
    ],
    role: 'Delivers perfectly flat sheet metal directly into the progressive die to guarantee flat stamped parts and eliminate die jamming.'
  }
];

export const STRAIGHTENER_SUMMARY = {
  totalUnits: 1,
  machineNo: 'ST-1',
  levelingRange: '0.3 mm to 3.5 mm High-Tensile & Mild Steel',
  rollArrangement: '7 Precision Hardened Rollers (3 Top / 4 Bottom, HRC 60-62)',
  accuracy: 'Dual 0.01 mm Dial Micrometers',
  role: 'Zero residual coil set & flat strip guarantee across all progressive tooling'
};

// ========================================================
// 1f. PLANT SURFACE GRINDER (1 UNIT: SG-1)
// ========================================================
export const SURFACE_GRINDER_FACILITY: SurfaceGrinderSpec[] = [
  {
    id: 'SURF-GRIND-01',
    unitNumber: 1,
    machineNo: 'SG-1',
    name: 'Precision Hydraulic Surface Grinder (Unit #1)',
    accuracyBadge: '0.001 mm Downfeed',
    tableSize: '650 x 320 mm Longitudinal Travel (Working Area 600 x 300 mm)',
    magneticChuckSize: '600 x 300 mm Fine-Pole Electro-Permanent Magnetic Chuck',
    spindleSpeed: '2,850 RPM Dynamically Balanced Cartridge Spindle',
    accuracyDownfeed: 'Micro-Downfeed Resolution: 0.001 mm (1 Micron)',
    wheelDimensions: 'Ø200 x 20 x Ø31.75 mm Grinding Wheel',
    features: [
      'Precision ground double-V longitudinal slideways with Turcite-B anti-friction coating',
      'Fine-pole electro-permanent magnetic chuck for secure clamping of thin die plates and punches',
      'Electronic micro-downfeed handwheel with 0.001 mm (1 micron) graduation per tick',
      'High-rigidity class CP4 angular contact spindle bearings with dynamic balance under 0.5 µm',
      'Automatic flood coolant filtration system with magnetic separator for carbide/tool steel debris'
    ],
    dieApplication: 'In-house precision resurfacing of progressive die plates, punch plates, strippers, guide plates, and sharpening tungsten carbide/HCHCR punches to maintain razor-sharp cutting edges.'
  }
];

export const SURFACE_GRINDER_SUMMARY = {
  totalUnits: 1,
  machineNo: 'SG-1',
  accuracy: '0.001 mm (1 Micron Micro-Downfeed Resolution)',
  magneticChuck: '600 x 300 mm Fine-Pole Permanent Chuck',
  tableTravel: '650 x 320 mm Longitudinal Travel',
  role: 'In-house die maintenance, punch sharpening, and precision die plate resurfacing'
};

// ========================================================
// 2. DIFFERENT DIES WITH POWER PRESS USES (PER CAPACITY)
// ========================================================
export const DIE_TYPES_CAPABILITY: DieTypeCapability[] = [
  {
    dieTypeName: 'Heavy Multi-Station Progressive Dies',
    pressTonnageRange: '50 Ton to 150 Ton Presses (PP-18, PP-19)',
    operationDescription: 'Continuous strip progression performing piercing, notching, forming, coining, and blanking across 8 to 14 stations in a single stroke cycle.',
    suitablePresses: 'Press PP-19 (150T, 14" Shut Height, 5" Stroke), Press PP-18 (50T, 12" Shut Height, 4" Stroke)',
    automotivePartsMade: 'Chassis cross-member reinforcements, seat recliner sector gears, deep drawn canister shells & heavy anchors'
  },
  {
    dieTypeName: 'Medium Progressive & Heavy Forming Dies',
    pressTonnageRange: '20 Ton to 30 Ton Presses (PP-17, PP-10, PP-9, PP-11)',
    operationDescription: 'High-rigidity tooling for precision drawing, compound blanking, and multi-stage flanging with calibrated blank holder force.',
    suitablePresses: 'Press PP-17 (30T, 10" Shut Height, 4" Stroke), Press PP-10 (30T, 10" Shut Height, 3" Stroke), PP-9 (20T), PP-11 (20T)',
    automotivePartsMade: 'Door lock striker heavy brackets, EV battery copper busbars, brake caliper anti-rattle clips & window sector blanks'
  },
  {
    dieTypeName: 'Progressive Blanking, Piercing & Compound Dies',
    pressTonnageRange: '10 Ton Presses (PP-1, PP-2, PP-3, PP-4, PP-5, PP-7, PP-8, PP-12, PP-13)',
    operationDescription: 'Precision inverted and progressive die sets cutting outer profiles, pierce holes, and flanging with high concentricity and rapid cycle times.',
    suitablePresses: 'Press PP-13 (10T, 12" Shut, 3" Stroke), PP-8 & PP-12 (10T, 10" Shut), PP-1, PP-2, PP-3, PP-4, PP-5, PP-7 (10T, 8" Shut)',
    automotivePartsMade: 'Hinge washers, ground eyelets, brake line clips, striker shims, heat shield clips & shock absorber cups'
  },
  {
    dieTypeName: 'High-Speed Precision Micro-Dies & Bench Tooling',
    pressTonnageRange: '5 Ton Presses (PP-6, PP-14, PP-15, PP-16)',
    operationDescription: 'High-frequency micro-piercing, terminal crimping, and calibrated shaving tooling with tight die clearances (up to 280 SPM).',
    suitablePresses: 'Press PP-6 (5T, 8" Shut, 2" Stroke), Press PP-14, PP-15, PP-16 (5T, 6" Shut Height, 1 1/2" Stroke)',
    automotivePartsMade: 'Automotive fuse terminals, EV connector micro-pins, console spring steel clips & calibrated shims'
  }
];

// ========================================================
// 3. DECOILER, RECOILER, AUTO STRAIGHTENER & COIL TOOLS
// ========================================================
export const COIL_HANDLING_MACHINERY: CoilHandlingEquipment[] = [
  {
    id: 'COIL-DEC-01',
    equipmentName: 'Decoiler DC-1: Heavy Motorized Expanding Decoiler (3.0 Ton)',
    equipmentCategory: 'Decoiler (Uncoiler)',
    capacitySpec: 'Coil Weight Capacity: Up to 3.0 Ton (3,000 kg)',
    stripWidthCapacity: '50 mm to 450 mm Strip Width',
    thicknessCapacity: '0.5 mm to 3.5 mm Sheet Gauge',
    speedRange: '0 - 25 Meters / Minute (AC Inverter Variable Speed)',
    features: [
      'Unit #1 of 5 Decoilers: Dedicated to Press PP-19 (150T heavy stamping line)',
      'Hydraulic wedge-type mandrel expansion (Ø450 mm - Ø510 mm coil ID)',
      'Ultrasonic non-contact loop control sensor for synchronized press feed',
      'Pneumatic snubber arm with polyurethane roller to prevent coil clock-springing'
    ],
    roleInPressShop: 'Uncoils raw steel coil smoothly into the 150T press line for chassis cross-member reinforcements.'
  },
  {
    id: 'COIL-DEC-02',
    equipmentName: 'Decoiler DC-2: Motorized Mandrel Decoiler (2.0 Ton)',
    equipmentCategory: 'Decoiler (Uncoiler)',
    capacitySpec: 'Coil Weight Capacity: Up to 2.0 Ton (2,000 kg)',
    stripWidthCapacity: '40 mm to 350 mm Strip Width',
    thicknessCapacity: '0.4 mm to 3.0 mm Sheet Gauge',
    speedRange: '0 - 25 Meters / Minute Variable',
    features: [
      'Unit #2 of 5 Decoilers: Dedicated to Press PP-18 (50T heavy stamping line)',
      'Inverter variable speed drive with photoelectric loop dancer',
      'Anti-overrun pneumatic drag brake',
      'Forward/reverse rotation for coil re-winding'
    ],
    roleInPressShop: 'Supplies medium-to-heavy coil stock to 50T press for automotive seat recliner sector gears.'
  },
  {
    id: 'COIL-DEC-03',
    equipmentName: 'Decoiler DC-3: Precision Motorized Decoiler (1.5 Ton)',
    equipmentCategory: 'Decoiler (Uncoiler)',
    capacitySpec: 'Coil Weight Capacity: Up to 1.5 Ton (1,500 kg)',
    stripWidthCapacity: '30 mm to 300 mm Strip Width',
    thicknessCapacity: '0.3 mm to 2.5 mm High-Tensile Steel & Copper',
    speedRange: '0 - 30 Meters / Minute Variable',
    features: [
      'Unit #3 of 5 Decoilers: Dedicated to Press PP-10 & PP-17 (30T lines)',
      'Infrared loop height sensor for continuous feed sync',
      'Non-marking urethane covered guide discs',
      'Pneumatic top arm hold-down for springback control'
    ],
    roleInPressShop: 'Feeds high-tensile copper and steel coil stock into 30T progressive lines for door striker brackets and EV busbars.'
  },
  {
    id: 'COIL-DEC-04',
    equipmentName: 'Decoiler DC-4: High-Speed Precision Decoiler (1.0 Ton)',
    equipmentCategory: 'Decoiler (Uncoiler)',
    capacitySpec: 'Coil Weight Capacity: Up to 1.0 Ton (1,000 kg)',
    stripWidthCapacity: '20 mm to 200 mm Strip Width',
    thicknessCapacity: '0.2 mm to 2.0 mm Sheet & Strip',
    speedRange: '0 - 35 Meters / Minute High Speed',
    features: [
      'Unit #4 of 5 Decoilers: Dedicated to Press PP-9 & PP-11 (20T lines)',
      'Low-inertia dynamic responsive spindle',
      'Ultra-sensitive micro-switch dancer arm loop control',
      'Direct synchronization with high-speed servo feeders'
    ],
    roleInPressShop: 'High-speed strip pay-off for 20T presses producing brake caliper anti-rattle clips.'
  },
  {
    id: 'COIL-DEC-05',
    equipmentName: 'Decoiler DC-5: Precision Light-Gauge Strip Decoiler (0.5 Ton)',
    equipmentCategory: 'Decoiler (Uncoiler)',
    capacitySpec: 'Coil Weight Capacity: Up to 0.5 Ton (500 kg)',
    stripWidthCapacity: '10 mm to 150 mm Narrow Strip',
    thicknessCapacity: '0.1 mm to 1.5 mm (Thin Foil, Brass, Copper & SUS304)',
    speedRange: '0 - 40 Meters / Minute Variable',
    features: [
      'Unit #5 of 5 Decoilers: Dedicated to 5T - 10T light stamping lines (PP-1 to PP-7, PP-14 to PP-16)',
      'Micro-tension magnetic powder brake for delicate strip',
      'Scratch-free guiding rolls for pre-plated metals',
      'Zero-tension pay-off mode for ultra-thin alloy strips'
    ],
    roleInPressShop: 'Dedicated uncoiling for precision 5T & 10T presses producing electrical terminals, shims, and interior clips.'
  },
  {
    id: 'COIL-STR-01',
    equipmentName: 'Straightener ST-1: Precision Auto Straightener / Leveler (1 Unit)',
    equipmentCategory: 'Auto Straightener / Leveler',
    capacitySpec: 'Leveling Capacity: 0.3 mm to 3.5 mm Sheet Metal Thickness',
    stripWidthCapacity: 'Up to 400 mm Strip Width',
    thicknessCapacity: '0.3 mm to 3.5 mm High-Tensile & Mild Steel',
    speedRange: '0 - 25 Meters / Minute Synchronized with Press Cycle',
    features: [
      'Unit #1 of 1 Straightener: Servicing continuous stamping coil feed lines',
      '7-Roller (3 Upper / 4 Lower) hardened chrome steel leveling rolls (HRC 60-62)',
      'Dual micrometer dial gauges with 0.01 mm precision adjustment to set roller gap',
      'Completely removes coil curvature, residual winding memory, and bow stress'
    ],
    roleInPressShop: 'Delivers perfectly flat sheet metal directly into progressive dies to guarantee flat stamped parts.'
  },
  {
    id: 'COIL-REC-02',
    equipmentName: 'Automated Scrap & Strip Recoiler (Rewinder)',
    equipmentCategory: 'Recoiler (Rewinder)',
    capacitySpec: 'Recoil Weight Capacity: Up to 1.5 Ton (1,500 kg)',
    stripWidthCapacity: '30 mm to 350 mm Strip Width',
    thicknessCapacity: '0.2 mm to 3.0 mm Stamped Strip',
    speedRange: '0 - 30 Meters / Minute with Constant Tension Control',
    features: [
      'Collapsible drum mandrel (Ø508 mm) for rapid coil unloading',
      'Magnetic particle powder brake with automatic tension dancer arm',
      'Rewinds continuous stamped terminal strip or rolls up empty skeleton scrap',
      'Prevents scrap floor tangling and speeds up scrap recycling handling'
    ],
    roleInPressShop: 'Rewinds skeleton waste strip from progressive dies or coils finished continuous electrical terminal strips.'
  },
  {
    id: 'COIL-FEED-04',
    equipmentName: 'High-Speed NC Servo Roll Feeder',
    equipmentCategory: 'NC Servo Feeder',
    capacitySpec: 'Feed Pitch Accuracy: ±0.02 mm Repeatability',
    stripWidthCapacity: '20 mm to 400 mm Strip Width',
    thicknessCapacity: '0.2 mm to 4.0 mm Thickness',
    speedRange: 'Up to 220 Feeds / Minute',
    features: [
      'Yaskawa / Mitsubishi AC Servo drive with 7-inch color touchscreen HMI',
      'Pneumatic rapid roll release for die pilot pin alignment in progressive tooling',
      'Chrome-plated hardened steel feed rollers with high wear resistance',
      'Multi-pitch programmable memory for complex automotive part progressions'
    ],
    roleInPressShop: 'Feeds exact strip lengths into the progressive die with sub-millimeter positioning repeatability.'
  }
];

export const PRESS_AUTOMATION_EQUIPMENT = COIL_HANDLING_MACHINERY;

// ========================================================
// 4. GRINDER MACHINERY (SURFACE & TOOL ROOM GRINDERS)
// ========================================================
export const GRINDER_MACHINERY: GrinderMachineSpec[] = [
  {
    id: 'GRIND-01',
    grinderName: 'Surface Grinder SG-1: Precision Hydraulic Surface Grinder (1 Unit)',
    grinderType: 'Hydraulic Surface Grinder',
    tableSize: '650 x 320 mm Longitudinal Travel (Working Area 600 x 300 mm)',
    magneticChuckSize: '600 x 300 mm Fine-Pole Electro-Permanent Magnetic Chuck',
    spindleSpeed: '2,850 RPM Dynamically Balanced Spindle',
    accuracyDownfeed: 'Micro-downfeed resolution: 0.001 mm (1 Micron)',
    dieApplication: 'Primary Tool Room Unit (SG-1): Resurfacing progressive die plates, punch plates, strippers, and sharpening tungsten carbide/HCHCR punches to maintain razor-sharp cutting edges.'
  },
  {
    id: 'GRIND-02',
    grinderName: 'Universal Tool & Cutter Grinder',
    grinderType: 'Precision Tool & Cutter Grinder',
    tableSize: '500 x 150 mm Swiveling Table',
    magneticChuckSize: 'Universal 3-Jaw / 4-Jaw Indexing Head & Collet Chucks',
    spindleSpeed: '3,200 / 5,600 RPM Dual Speed',
    accuracyDownfeed: 'Angular accuracy within 5 minutes of arc',
    dieApplication: 'Sharpening cylindrical piercing punches, forming inserts, reamers, drills, and custom die cutting tools.'
  },
  {
    id: 'GRIND-03',
    grinderName: 'Heavy-Duty Double-Ended Pedestal Bench Grinder',
    grinderType: 'Heavy-Duty Pedestal Grinder',
    tableSize: '10-inch (250 mm) Dual Grinding Wheels',
    magneticChuckSize: 'Heavy Cast Iron Adjustable Tool Rests & Eye Shields',
    spindleSpeed: '1,450 RPM High-Torque Motor',
    accuracyDownfeed: 'Manual touch-up & chamfering',
    dieApplication: 'Rapid tool dressing, chamfering raw bar stock ends, manual deburring of stamped sample blanks, and welding prep.'
  }
];

// ========================================================
// 5. ALL MEASURING TOOLS REQUIRED FOR PRODUCT DIMENSIONS
// ========================================================
export const DIMENSIONAL_MEASURING_INSTRUMENTS: MeasuringInstrumentDetail[] = [
  {
    id: 'MEAS-01',
    instrumentName: 'Digital Vernier Calipers (0-150 mm, 0-200 mm & 0-300 mm)',
    category: 'Linear & Depth Measuring',
    measuringRange: '0 - 150 mm, 0 - 200 mm & 0 - 300 mm',
    leastCount: '0.01 mm / 0.0005 inch',
    makeBrand: 'Mitutoyo (Japan) Absolute Digimatic',
    quantityCount: '18 Units Across Press Inspection Stations',
    calibrationFrequency: 'Quarterly NABL Traceable Calibration',
    application: 'Routine floor inspection of stamped blank length, strip width, hole center distances, outer dimensions, and flange heights.'
  },
  {
    id: 'MEAS-02',
    instrumentName: 'Digital Outside Micrometers (0-25 mm, 25-50 mm, 50-75 mm, 75-100 mm)',
    category: 'Linear & Depth Measuring',
    measuringRange: '0 - 25 mm, 25 - 50 mm, 50 - 75 mm & 75 - 100 mm',
    leastCount: '0.001 mm (1 Micron Resolution)',
    makeBrand: 'Mitutoyo (Japan) IP65 Ratchet Stop',
    quantityCount: '12 Sets with Carbide Anvils',
    calibrationFrequency: 'Monthly In-House Verification & Quarterly Calibration',
    application: 'Checking sheet metal gauge thickness, pin diameters, step heights, and coining depths with 1-micron precision.'
  },
  {
    id: 'MEAS-03',
    instrumentName: 'Dial Bore Gauges (Internal Diameter / Hole Checker)',
    category: 'Bore & Internal Diameter',
    measuringRange: '10 - 18 mm, 18 - 35 mm & 35 - 50 mm',
    leastCount: '0.001 mm (1 Micron)',
    makeBrand: 'Baker / Mitutoyo with Carbide Contact Points',
    quantityCount: '5 Sets with Master Setting Rings',
    calibrationFrequency: 'Quarterly Calibration',
    application: 'Direct verification of internal hole diameters, pierced bush bores, and cylinder ovality in stamped automotive parts.'
  },
  {
    id: 'MEAS-04',
    instrumentName: 'Digital Micro-Height Gauges (0-300 mm & 0-600 mm)',
    category: 'Height & Flatness Master',
    measuringRange: '0 - 300 mm & 0 - 600 mm',
    leastCount: '0.001 mm Selectable Readout',
    makeBrand: 'Mitutoyo Linear Height & Trimos 2D',
    quantityCount: '3 Units Mounted on Granite Surface Plates',
    calibrationFrequency: 'Semi-Annual Calibration',
    application: 'Measuring formed step heights, flange heights from datum face, hole pitch, parallelism, and total part height.'
  },
  {
    id: 'MEAS-05',
    instrumentName: 'Dial Plunger Indicators & Lever Test Indicators',
    category: 'Height & Flatness Master',
    measuringRange: '0 - 10 mm (Plunger) & 0 - 0.8 mm (Lever)',
    leastCount: '0.001 mm & 0.01 mm',
    makeBrand: 'Mitutoyo / Baker with Heavy Magnetic Stands',
    quantityCount: '14 Units',
    calibrationFrequency: 'Quarterly Calibration',
    application: 'Die setup alignment, total radial runout inspection on shafts, and checking flatness/waviness of stamped components.'
  },
  {
    id: 'MEAS-06',
    instrumentName: 'Optical Profile Projector (Shadowgraph / Optical Comparator)',
    category: 'Angular & Contour Profile',
    measuringRange: '300 mm Screen Diameter, 200 x 100 mm XY Stage',
    leastCount: '0.001 mm Linear DRO / 1 Minute of Arc Angular',
    makeBrand: 'Mitutoyo PJ-A3000 / Nikon Optical',
    quantityCount: '1 Quality Lab Unit',
    calibrationFrequency: 'Semi-Annual Calibration with Master Glass Reticle',
    application: 'Magnified 10x/20x/50x inspection of intricate stamped profiles, corner radii, chamfer angles, burrs, and notch silhouettes.'
  },
  {
    id: 'MEAS-07',
    instrumentName: 'Master Pin Gauge Sets (Ø 0.50 mm to Ø 20.00 mm in 0.01 mm steps)',
    category: 'Limit Gauges (Go/No-Go)',
    measuringRange: 'Ø 0.50 mm to Ø 20.00 mm (Steps of 0.01 mm)',
    leastCount: 'Class ZZ / Class X Standard (±0.001 mm)',
    makeBrand: 'Eisen (Japan) Master Pin Cabinets',
    quantityCount: '6 Full Master Cabinets',
    calibrationFrequency: 'Semi-Annual Calibration',
    application: 'Rapid Go / No-Go shop-floor checking of punched hole diameters, slot widths, and terminal pin holes.'
  },
  {
    id: 'MEAS-08',
    instrumentName: 'Thread Plug & Thread Ring Gauges (Go / No-Go M2 to M24)',
    category: 'Limit Gauges (Go/No-Go)',
    measuringRange: 'Metric M2.0 x 0.4 to M24 x 3.0 (6H / 6g Fit)',
    leastCount: 'Precision Ground Class 6H Internal / 6g External',
    makeBrand: 'Baker / Tru-Thread Masters',
    quantityCount: '35+ Standard Sizes',
    calibrationFrequency: 'Quarterly Inspection',
    application: 'Checking internal tapped threads and external roll-formed threads on stamped brackets and automotive child parts.'
  },
  {
    id: 'MEAS-09',
    instrumentName: 'Radius Gauges & Thread Pitch Gauges',
    category: 'Angular & Contour Profile',
    measuringRange: 'Radius: R 0.5 to R 15.0 mm | Pitch: 0.25 to 6.0 mm',
    leastCount: 'Visual match leaf blades',
    makeBrand: 'Mitutoyo Precision Leaf Sets',
    quantityCount: '8 Sets',
    calibrationFrequency: 'Visual Inspection & Semi-Annual Verification',
    application: 'Direct shop-floor check of sheet metal forming bend radii, draw fillet radii, and thread pitches.'
  },
  {
    id: 'MEAS-10',
    instrumentName: 'Universal Bevel Protractor & Digital Angle Finder',
    category: 'Angular & Contour Profile',
    measuringRange: '0 to 360 Degrees with Vernier & Digital Readout',
    leastCount: '5 Minutes of Arc / 0.05 Degree',
    makeBrand: 'Mitutoyo Universal Bevel Protractor',
    quantityCount: '4 Units',
    calibrationFrequency: 'Semi-Annual Verification',
    application: 'Checking bending and forming angles on automotive brackets, clips, and Z-bends against engineering drawings.'
  },
  {
    id: 'MEAS-11',
    instrumentName: 'Digital Surface Roughness Tester (Ra, Rz, Rq)',
    category: 'Surface Finish & Hardness',
    measuringRange: 'Ra: 0.01 to 40 µm, Rz: 0.02 to 160 µm',
    leastCount: '0.001 µm Resolution with Diamond Stylus',
    makeBrand: 'Mitutoyo Surftest SJ-210',
    quantityCount: '2 Units',
    calibrationFrequency: 'Monthly Calibration with Precision Reference Specimen',
    application: 'Measuring surface roughness on sliding contact faces, shaved edges, and bearing contact zones of child parts.'
  },
  {
    id: 'MEAS-12',
    instrumentName: 'Grade 0 Precision Granite Surface Plate (1000 x 1000 mm)',
    category: 'Height & Flatness Master',
    measuringRange: '1000 x 1000 x 150 mm Work Surface',
    leastCount: 'Flatness within 0.003 mm (DIN 876/0 Standard)',
    makeBrand: 'Crystal Granite Masters',
    quantityCount: '4 Inspection Stations Across Plant',
    calibrationFrequency: 'Annual Electronic Level Profiling',
    application: 'Zero-deflection datum reference plane for all height gauge, dial indicator, and comparator dimensional measurements.'
  },
  {
    id: 'MEAS-13',
    instrumentName: 'Tungsten Carbide Slip Gauge Block Set (83 Pieces)',
    category: 'Height & Flatness Master',
    measuringRange: '83 Pieces Master Gauge Blocks (0.5 mm to 100 mm)',
    leastCount: 'Grade 0 Reference Calibration Standard',
    makeBrand: 'Mitutoyo Grade 0 Masters',
    quantityCount: '2 Master Sets',
    calibrationFrequency: 'Annual NABL Accredited Master Recertification',
    application: 'Master dimensional standard used to calibrate all floor verniers, micrometers, and height gauges.'
  }
];

export const MEASURING_INSTRUMENTS_LAB = DIMENSIONAL_MEASURING_INSTRUMENTS;

// ========================================================
// 6. DIESEL GENERATOR (DG) BACKUP FACILITY
// ========================================================
export const DG_GENERATOR_FACILITY: DGGensetFacility[] = [
  {
    id: 'DG-500KVA',
    name: '500 kVA Prime Silent DG Genset',
    ratingKVA: '500 kVA / 400 kW (415V, 3-Phase)',
    quantity: 1,
    engineMake: 'Cummins QSK19 Turbocharged Aftercooled Diesel',
    alternator: 'Stamford Brushless Alternator (Class H)',
    amfPanel: 'Automated AMF Panel with < 8-Second Switchover',
    fuelType: 'Diesel with In-Base 1,200L Tank + 2,500L Storage',
    uptimeGuarantee: '100% Uninterrupted Power Guarantee',
    fuelTankCapacity: '3,700 Liters Total (48+ Hours Continuous Full Load)',
    coverage: 'Powers all 22 Power Presses, Decoilers, Recoilers, Compressors & Tool Room',
    operationalRole: 'Guarantees continuous 24/7 stamping operation and prevents line-down disruptions during power grid cuts.'
  },
  {
    id: 'DG-380KVA',
    name: '380 kVA Heavy-Duty Silent DG Genset (Standby Synchronized)',
    ratingKVA: '380 kVA / 304 kW (415V, 3-Phase)',
    quantity: 1,
    engineMake: 'Kirloskar / Perkins 6-Cylinder Heavy-Duty Engine',
    alternator: 'Leroy Somer High-Efficiency Industrial Alternator',
    amfPanel: 'Automated AMF Controller with Auto-Synchronizing',
    fuelType: 'Diesel with Dual Filtration & Water Separators',
    uptimeGuarantee: 'Instant Hot-Standby Auto-Start',
    fuelTankCapacity: '950 Liter In-Base Day Tank',
    coverage: 'Powers Metrology Lab, Surface Grinders, Tool Room & Essential Systems',
    operationalRole: 'Prevents thermal fluctuations or voltage spikes in the precision quality inspection and tool room.'
  }
];

// DG Facility Summary Details
export const DG_FACILITY_SUMMARY = {
  totalGeneratingCapacity: '880 kVA Combined Power Backup',
  automaticTransferSwitch: 'Automatic Mains Failure (AMF) panel switches in under 8 seconds',
  fuelAutonomy: '48+ Hours uninterrupted full-capacity run-time on reserve fuel tanks',
  acousticCanopy: 'Soundproof Enclosures (< 75 dB(A) at 1 meter)',
  plantSupplyGuarantee: 'Zero risk of customer line-down from power outage — JIT delivery commitment strictly safeguarded'
};

// ========================================================
// 7. AREA FOR PARTS IMAGES (WHICH WILL BE ADDED LATER)
// ========================================================
export const PARTS_IMAGE_GALLERY_ITEMS: PartImagePlaceholder[] = [
  {
    id: 'PART-IMG-01',
    partNumber: 'AF-HNG-4420-P',
    partName: 'Automotive Door Hinge Pivot Pin',
    category: 'Body & Closures',
    vehicleApplication: 'Passenger Cars & Commercial Vehicles (Door Hinge Assembly)',
    materialGrade: 'Case-Hardened 8620 Alloy Steel',
    thickness: 'Ø 12.00 mm Solid Pin Shaft',
    pressTonnage: 'Press #12 (60T) Coining & Piercing',
    imageUrl: '',
    placeholderStatus: 'Image To Be Added',
    notes: 'High-wear door pivot pin. Formatted slot ready for physical part photography.'
  },
  {
    id: 'PART-IMG-02',
    partNumber: 'AF-LTC-8812-M',
    partName: 'Rotary Door Latch Safety Pawl',
    category: 'Body & Closures',
    vehicleApplication: 'FMVSS 206 Crash Safety Door Latch Assembly',
    materialGrade: 'High-Carbon C1075 Spring Steel',
    thickness: '3.2 mm High-Tensile Strip',
    pressTonnage: 'Press #3 (160T) Heavy Blanking',
    imageUrl: '',
    placeholderStatus: 'Image To Be Added',
    notes: 'Precision sheared edge tooth geometry. Formatted slot ready for actual stamped part image.'
  },
  {
    id: 'PART-IMG-03',
    partNumber: 'AF-BRK-3108-G',
    partName: 'Floating Brake Caliper Guide Pin',
    category: 'Braking & Chassis',
    vehicleApplication: 'Front & Rear Disc Brake Caliper Assembly',
    materialGrade: 'AISI 4140H Chromium-Molybdenum Steel',
    thickness: 'Ø 14.00 mm Bar Stock with Micro-Grind',
    pressTonnage: 'Press #9 (80T) Heading & Piercing',
    imageUrl: '',
    placeholderStatus: 'Image To Be Added',
    notes: 'Corrosion-resistant slide pin. Formatted slot ready for component photo.'
  },
  {
    id: 'PART-IMG-04',
    partNumber: 'AF-SHM-6204-S',
    partName: 'Brake Pad Anti-Rattle Abutment Clip',
    category: 'Braking & Chassis',
    vehicleApplication: 'Automotive Caliper Abutment & Pad Return',
    materialGrade: 'Full Hard SUS301 Stainless Steel',
    thickness: '0.45 mm Precision Strip',
    pressTonnage: 'Press #9 (80T) Progressive Stamping',
    imageUrl: '',
    placeholderStatus: 'Image To Be Added',
    notes: 'Multi-stage progressive stamping. Formatted slot ready for spring clip photo.'
  },
  {
    id: 'PART-IMG-05',
    partNumber: 'AF-BUS-9901-C',
    partName: 'EV Battery Module Flexible Laminated Busbar',
    category: 'Powertrain & EV',
    vehicleApplication: 'High-Voltage 800V EV Battery Pack Modules',
    materialGrade: 'C11000 Electrolytic Tough Pitch (ETP) Copper 99.9%',
    thickness: '0.50 mm x 12 Layers Laminated',
    pressTonnage: 'Press #7 (100T) Progressive Stamping',
    imageUrl: '',
    placeholderStatus: 'Image To Be Added',
    notes: 'Nickel-plated high-conductivity busbar. Formatted slot ready for production part photo.'
  },
  {
    id: 'PART-IMG-06',
    partNumber: 'AF-REC-9400-P',
    partName: 'Seat Recliner Sector Cam Pawl',
    category: 'Interior & Safety',
    vehicleApplication: 'Front Driver & Passenger Recline Mechanisms',
    materialGrade: 'Micro-Alloyed HSLA Saphir 400',
    thickness: '4.0 mm Heavy Gauge Strip',
    pressTonnage: 'Press #2 (200T) Progressive Die',
    imageUrl: '',
    placeholderStatus: 'Image To Be Added',
    notes: '1,800 Nm impact torque lock teeth. Formatted slot ready for sector part photo.'
  },
  {
    id: 'PART-IMG-07',
    partNumber: 'AF-DRW-5510-C',
    partName: 'Deep Drawn Automotive Fuel Filter Cup',
    category: 'Deep Drawn',
    vehicleApplication: 'Automotive Fuel Injection & Hydraulic Reservoir',
    materialGrade: 'Deep Drawing Steel DD14 / CR4 EN 10130',
    thickness: '1.20 mm Cold Rolled Sheet',
    pressTonnage: 'Press #1 (250T) Deep Draw Line',
    imageUrl: '',
    placeholderStatus: 'Image To Be Added',
    notes: 'Zero-wrinkle deep draw cup with uniform wall ironing. Formatted slot ready for photo.'
  },
  {
    id: 'PART-IMG-08',
    partNumber: 'AF-BKT-7730-B',
    partName: 'Chassis Cross-Member Stiffener Bracket',
    category: 'Brackets & Hinges',
    vehicleApplication: 'SUV & Light Commercial Vehicle Chassis Frame',
    materialGrade: 'High-Strength Low-Alloy Steel (HSLA Grade 50)',
    thickness: '3.50 mm Heavy Stamping Plate',
    pressTonnage: 'Press #1 (250T) Straight-Sided Press',
    imageUrl: '',
    placeholderStatus: 'Image To Be Added',
    notes: 'Structural automotive bracket with formed rib stiffeners. Formatted slot ready for photo.'
  }
];

// ========================================================
// 8. WORKING FOR (COMPANIES NAMES - TO BE ADDED LATER)
// ========================================================
export const WORKING_FOR_COMPANIES: WorkingForCompany[] = [
  {
    id: 'WF-01',
    displayName: '[ OEM Client Name — To Be Added Later ]',
    companyCategory: '4-Wheeler Passenger Car OEM',
    region: 'Automotive Industrial Cluster',
    suppliedAutomobileParts: 'Door Hinges, Strike Plates, Hood Latch Child Parts & Body Reinforcement Brackets',
    partnershipStatus: 'Active Serial Production',
    ndaProtected: true,
    notes: 'Direct vendor supply agreement. Company name will be added upon client instruction.'
  },
  {
    id: 'WF-02',
    displayName: '[ Tier-1 Braking System Leader — To Be Added Later ]',
    companyCategory: 'Tier-1 Automotive System Supplier',
    region: 'Tier-1 Automotive Supplier Hub',
    suppliedAutomobileParts: 'Brake Caliper Guide Pins, Abutment Clips, Anti-Rattle Shims & Piston Collars',
    partnershipStatus: 'Active Serial Production',
    ndaProtected: true,
    notes: 'Supplying brake child parts with zero-defect quality. Company name slot ready.'
  },
  {
    id: 'WF-03',
    displayName: '[ Electric Vehicle (EV) Platform — To Be Added Later ]',
    companyCategory: 'Electric Vehicle (EV) Platform',
    region: 'EV Powertrain Manufacturing Hub',
    suppliedAutomobileParts: 'HV Battery Pack Copper Busbars, Thermal Enclosure Clamps & Ground Terminals',
    partnershipStatus: 'Active Serial Production',
    ndaProtected: true,
    notes: 'Direct supplier to high-voltage EV battery powertrain programs. Company name slot ready.'
  },
  {
    id: 'WF-04',
    displayName: '[ Commercial Vehicle & Truck OEM — To Be Added Later ]',
    companyCategory: 'Commercial Vehicle & Truck OEM',
    region: 'Commercial Vehicle Corridor',
    suppliedAutomobileParts: 'Heavy-Duty Cabin Mount Brackets, Steering U-Joint Crosses & Exhaust Clamps',
    partnershipStatus: 'Active Serial Production',
    ndaProtected: true,
    notes: 'Long-term Tier-1 supply for commercial vehicles and trucks. Company name slot ready.'
  },
  {
    id: 'WF-05',
    displayName: '[ Automotive Seating Tier-1 Integrator — To Be Added Later ]',
    companyCategory: 'Tier-1 Automotive System Supplier',
    region: 'Seating Mechanisms Hub',
    suppliedAutomobileParts: 'Seat Recliner Sector Gears, Cam Pawls, Pivot Bushings & Clock Return Springs',
    partnershipStatus: 'Active Serial Production',
    ndaProtected: true,
    notes: 'Crash-rated seating mechanisms child components. Company name slot ready.'
  },
  {
    id: 'WF-06',
    displayName: '[ Two-Wheeler & Three-Wheeler Automaker — To Be Added Later ]',
    companyCategory: '2-Wheeler & 3-Wheeler Automaker',
    region: 'Automobile Hub',
    suppliedAutomobileParts: 'Engine Mounting Plates, Footrest Brackets, Chain Adjuster Washers & Brake Linkages',
    partnershipStatus: 'Active Serial Production',
    ndaProtected: true,
    notes: 'High-volume progressive stamping child parts supply. Company name slot ready.'
  }
];

// ========================================================
// 9. HIRE TOOL ROOM FACILITIES (PROPER FORMAT AREA)
// ========================================================
export const HIRE_TOOL_ROOM_FACILITIES: HireToolRoomFacility[] = [
  {
    id: 'TR-VMC-01',
    machineTitle: 'Vertical Machining Center (VMC 3-Axis / 4-Axis)',
    category: 'CNC Machining (VMC)',
    specifications: 'Spindle Speed: 10,000 - 12,000 RPM, BT40 / HSK63 Tooling, 24-Pocket ATC',
    workingEnvelope: 'X: 1050 mm x Y: 600 mm x Z: 600 mm (Table Load: 800 kg)',
    accuracy: 'Positioning: ±0.003 mm, Repeatability: ±0.002 mm',
    hireAvailability: 'Available for Hire / Contract Tooling',
    status: 'Ready for Shift Booking & Job-Work Operations',
    detailsNote: '[ Machine specifications and hire terms to be detailed by client — structured format area ready ]'
  },
  {
    id: 'TR-WEDM-02',
    machineTitle: 'CNC Wire Cut EDM (Electrical Discharge Machining)',
    category: 'Wire Cut EDM & Spark EDM',
    specifications: 'Submerged Wire Cutting with 0.15 - 0.30 mm Brass & Coated Wire, Automatic Wire Threading (AWT)',
    workingEnvelope: 'X: 600 mm x Y: 400 mm x Z: 310 mm (Max Workpiece: 500 kg)',
    accuracy: 'Cutting Accuracy: ±0.002 mm, Surface Roughness: Ra 0.20 µm',
    hireAvailability: 'Per-Hour Machine Rental',
    status: 'High-Precision Die Punch & Matrix Die Cavity Cutting',
    detailsNote: '[ Machine specifications and hire terms to be detailed by client — structured format area ready ]'
  },
  {
    id: 'TR-GRND-03',
    machineTitle: 'Precision Hydraulic Surface Grinder (600 x 300 mm)',
    category: 'Precision Surface & Cylindrical Grinding',
    specifications: 'Hydraulic Table Traverse with Micro-Downfeed Increments of 0.001 mm',
    workingEnvelope: 'Magnetic Chuck Area: 600 mm x 300 mm',
    accuracy: 'Flatness and Parallelism: within 0.002 mm over 500 mm span',
    hireAvailability: 'Available for Hire / Contract Tooling',
    status: 'Ready for Die Bolster, Punch Plate & Guide Pillar Grinding',
    detailsNote: '[ Machine specifications and hire terms to be detailed by client — structured format area ready ]'
  },
  {
    id: 'TR-LTH-04',
    machineTitle: 'Heavy-Duty Lathe Machines & Radial Drilling Machine',
    category: 'Heavy Lathes & Radial Drills',
    specifications: 'Heavy-Duty Geared Head Lathes (Swing over Bed: 600 mm, Length: 2000 mm) + Radial Drill (Cap: 60 mm in Steel)',
    workingEnvelope: 'Bed Length 2000 mm, Radial Arm Reach 1600 mm',
    accuracy: 'ISO Precision Machine Tool Standards',
    hireAvailability: 'Full Die Development Job-Work',
    status: 'Tool Shank Turning, Guide Bush Bores & Heavy Bolster Drilling',
    detailsNote: '[ Machine specifications and hire terms to be detailed by client — structured format area ready ]'
  },
  {
    id: 'TR-TRY-05',
    machineTitle: 'Progressive Press Tool Assembly, Try-Out & Maintenance Bay',
    category: 'Tool & Die Assembly & Trial',
    specifications: 'Dedicated Try-Out Press with Micro-Inching, Bed Area: 1600 x 1200 mm',
    workingEnvelope: 'Accommodates Progressive Dies up to 2.5 Meters Length',
    accuracy: 'Full In-Die Sensor Testing & Strip Strip-Out Validation',
    hireAvailability: 'Available for Hire / Contract Tooling',
    status: 'Complete Press Tool Trials, Die Sharpening & Preventive Overhaul',
    detailsNote: '[ Machine specifications and hire terms to be detailed by client — structured format area ready ]'
  }
];

// Confidentiality & Privacy Notice Statement for Automobile Manufacturing
export const CONFIDENTIALITY_PRIVACY_NOTICE = {
  title: 'Confidentiality & OEM Privacy Policy',
  badge: 'Proprietary OEM Protection & NDA Compliant',
  statement: 'In accordance with strict bilateral Non-Disclosure Agreements (NDAs) and international intellectual property (IP) standards, all engineering CAD drawings, vector diagrams, and proprietary geometries of child parts manufactured for automotive clients are strictly confidential. We protect client design privacy by restricting public display of technical diagrams. Technical specifications, capacity envelopes, material grades, and designated physical part image areas are provided for supplier evaluation.',
  keyProtections: [
    'No public exposure of customer CAD drawings, vector diagrams, or proprietary GD&T models',
    'Customer company names maintained under strict confidentiality until authorized for publication',
    'Single dedicated manufacturing plant with secure in-house tool room and controlled data access',
    'Physical part photography areas configured strictly for client-approved component showcases'
  ]
};

// ========================================================
// 9. METALS USED IN PLANT (ROLLS / COILS & SHEETS / BLANKS)
// Dimensions, Specifications, Die Compatibility & Part Pieces
// ========================================================
export const PLANT_METALS_LIST: PlantMetalMaterial[] = [
  {
    id: 'METAL-CRCA-01',
    metalName: 'Cold Rolled Close Annealed (CRCA) Steel',
    metalCategory: 'Ferrous Stamping Steel',
    formType: 'Both Rolls & Sheets',
    standardGrades: [
      'IS 513 CR1 / CR2 / CR3 (Extra Deep Drawing - EDD)',
      'JIS G3141 SPCC / SPCD / SPCE',
      'DIN EN 10130 DC01 / DC03 / DC04',
      'ASTM A1008 CS / DS / DDS'
    ],
    rollSpecs: {
      thicknessRange: '0.40 mm to 3.20 mm',
      widthRange: '20 mm to 650 mm (Matches In-House Decoiler & Feeder Line)',
      innerDiameterID: '508 mm (Standard Expanding Mandrel)',
      outerDiameterOD: 'Up to 1,350 mm max',
      maxCoilWeight: '3,000 kg (3.0 Ton Max In-House Decoiler Capacity)',
      uncoilingMethod: 'Motorized uncoiling with ultrasonic loop sensor, 7-roll precision straightener, and NC servo roll feeder'
    },
    sheetSpecs: {
      thicknessRange: '0.50 mm to 3.20 mm',
      standardSheetSizes: [
        '1,000 mm × 2,000 mm (Standard Mill Sheet)',
        '1,250 mm × 2,500 mm (Wide Sheet)',
        'Pre-sheared strip blanks: 100 × 150 mm up to 800 × 1,200 mm'
      ],
      maxSheetDimension: '1,250 mm × 2,500 mm',
      shearingTolerance: '±0.15 mm on programmable hydraulic guillotine shear',
      loadingMethod: 'Automated pneumatic blank feeder & manual vacuum-cup ergonomic hoist'
    },
    compatibleDieTypes: [
      'Progressive Dies (High-Speed Multi-Stage Coining & Piercing)',
      'Compound Blanking & Piercing Dies',
      'Multi-Stage Bending & Forming Dies',
      'Continuous Blanking Press Tools'
    ],
    pressTonnageRange: '10 Ton to 250 Ton (Used across Presses #1 to #19)',
    createdPartPieces: [
      'Door Lock Striker Reinforcement Plates (Subsystem: Door Assemblies)',
      'Automotive Seat Track Slider Channels (Subsystem: Seating Systems)',
      'Seat Recliner Adjustment Gears & Levers',
      'Window Regulator Guide Rails & Mounting Channels',
      'Electrical Distribution Fuse Box Mounting Brackets',
      'Instrument Panel Cross-Member Support Clips'
    ],
    keyMechanicalProperties: {
      tensileStrength: '270 – 410 MPa',
      yieldStrength: '140 – 260 MPa (Superior formability)',
      elongation: '34% – 42% (High ductility for intricate cold forming)'
    },
    surfaceFinish: 'Matte (Ra 0.8 – 1.4 µm) with light protective anti-rust oil (slushing oil) ready for painting or zinc plating',
    applicationNotes: 'The primary workhorse metal of the press shop. Processed either continuously from slit coils on our decoiler line or as precision sheared blanks for deep drawing and heavy blanking.'
  },
  {
    id: 'METAL-HRPO-02',
    metalName: 'Hot Rolled Pickled & Oiled (HRPO) Steel',
    metalCategory: 'High-Strength & Structural Steel',
    formType: 'Both Rolls & Sheets',
    standardGrades: [
      'IS 2062 E250 / E350BR',
      'JIS G3113 SAPH 370 / SAPH 400 / SAPH 440',
      'DIN EN 10111 DD11 / DD13 / DD14',
      'ASTM A1011 HSLAS Grade 50'
    ],
    rollSpecs: {
      thicknessRange: '1.60 mm to 4.50 mm',
      widthRange: '40 mm to 600 mm',
      innerDiameterID: '508 mm / 610 mm (Heavy duty hydraulic expansion)',
      outerDiameterOD: 'Up to 1,400 mm max',
      maxCoilWeight: '3,000 kg (3.0 Ton Max Capacity)',
      uncoilingMethod: 'Heavy-duty decoiler with hydraulic snubber roll, peeler table, and powered heavy straightener'
    },
    sheetSpecs: {
      thicknessRange: '2.00 mm to 6.00 mm (Heavy gauge structural blanks)',
      standardSheetSizes: [
        '1,250 mm × 2,500 mm (Standard Structural Sheet)',
        'Cut-to-size blanks: 200 × 200 mm up to 1,000 × 1,500 mm'
      ],
      maxSheetDimension: '1,250 mm × 2,500 mm',
      shearingTolerance: '±0.20 mm',
      loadingMethod: 'Overhead jib crane with pneumatic vacuum lifter & heavy press feed guides'
    },
    compatibleDieTypes: [
      'Heavy-Tonnage Blanking & Piercing Dies (Presses #1 to #5, 110T – 250T)',
      'Heavy Compound Dies with Hardened Tool Steel Inserts',
      'Structural Bending & Flanging Dies',
      'Heavy Coining & Chamfering Press Tools'
    ],
    pressTonnageRange: '80 Ton to 250 Ton (Presses #1, #2, #3, #4, #5, #6)',
    createdPartPieces: [
      'Suspension Lower Control Arm Mounting Gussets (Subsystem: Chassis & Suspension)',
      'Engine & Transmission Support Mounting Brackets',
      'Chassis Frame Cross-Member Reinforcements',
      'Steering Gearbox Mounting Plates (6.0 mm Heavy Gauge)',
      'Automotive Towing Eye & Recovery Anchor Plates',
      'Shock Absorber Lower Fork Brackets'
    ],
    keyMechanicalProperties: {
      tensileStrength: '400 – 540 MPa',
      yieldStrength: '260 – 440 MPa',
      elongation: '24% – 32%'
    },
    surfaceFinish: 'Pickled & chemically descaled with rust-inhibiting electrostatic oil film; scale-free for clean die life',
    applicationNotes: 'Used for safety-critical load-bearing automotive chassis and suspension child parts requiring high yield strength and severe fatigue resistance.'
  },
  {
    id: 'METAL-GI-GA-03',
    metalName: 'Galvanized & Galvannealed (GI / GA) Stamping Steel',
    metalCategory: 'Coated & Corrosion-Resistant Steel',
    formType: 'Rolls (Coils)',
    standardGrades: [
      'JIS G3302 SGCC / SGCD / SGCE (Hot-Dip Galvanized GI)',
      'JIS G3353 JFS A3011 JAC270D / JAC440W (Galvannealed GA for Spot Welding)',
      'ASTM A653 CS / DS / HSLAS Type B',
      'DIN EN 10346 DX51D+Z / DX54D+ZF'
    ],
    rollSpecs: {
      thicknessRange: '0.50 mm to 2.50 mm',
      widthRange: '25 mm to 650 mm (Slit Coils & Full Width Rolls)',
      innerDiameterID: '508 mm',
      outerDiameterOD: 'Up to 1,300 mm max',
      maxCoilWeight: '2,800 kg (2.8 Ton)',
      uncoilingMethod: 'Motorized decoiler with rubberized pinch rolls to protect zinc coating integrity'
    },
    sheetSpecs: {
      thicknessRange: '0.60 mm to 2.50 mm',
      standardSheetSizes: [
        '1,000 mm × 2,000 mm',
        'Custom sheared strip blanks for batch secondary operations'
      ],
      maxSheetDimension: '1,250 mm × 2,000 mm',
      shearingTolerance: '±0.15 mm',
      loadingMethod: 'Automated feeder with anti-marking polymer rollers'
    },
    compatibleDieTypes: [
      'Progressive Dies with Hard PVD/TiCN Coated Punches (Prevents Zinc Pick-Up)',
      'High-Speed Notch, Pierce, and Bend Dies',
      'Multi-Slide Stamping Tools with Carbide Inserts'
    ],
    pressTonnageRange: '25 Ton to 160 Ton (Presses #4, #5, #7, #9, #10, #13)',
    createdPartPieces: [
      'Automotive Fuel Tank Retaining Straps & Saddles',
      'Underbody Splash Shield Retention Brackets (High Corrosion Environment)',
      'EV Battery Pack Lower Protection Flange Brackets',
      'Fender & Wheel Arch Liner Reinforcement Clips',
      'Door Water-Deflector Retention Clips',
      'Exhaust Heat Shield Standoff Brackets'
    ],
    keyMechanicalProperties: {
      tensileStrength: '280 – 440 MPa',
      yieldStrength: '150 – 300 MPa',
      elongation: '32% – 40% (Coating adhesion tested to 0-T bend standards)'
    },
    surfaceFinish: 'Zinc coating: 60 g/m² to 180 g/m² (Zero Spangle / Minimized Spangle) or Galvannealed Iron-Zinc alloy coating (ZF) ready for spot welding',
    applicationNotes: 'Directly fed into progressive dies for corrosion-resistant vehicle underbody brackets. Tooling uses specialized clearance and coatings to prevent zinc flaking inside die cavities.'
  },
  {
    id: 'METAL-SS-04',
    metalName: 'Austenitic & Ferritic Stainless Steel (AISI 304, 316L & 430)',
    metalCategory: 'Stainless Steel',
    formType: 'Both Rolls & Sheets',
    standardGrades: [
      'AISI 304 / 304L (UNS S30400 / S30403 - Austenitic Non-Magnetic)',
      'AISI 316L (UNS S31603 - Marine & Chemical Exhaust Grade)',
      'AISI 430 (UNS S43000 - Ferritic Magnetic Stainless)',
      'DIN EN 10088-2 1.4301 / 1.4404 / 1.4016'
    ],
    rollSpecs: {
      thicknessRange: '0.30 mm to 2.00 mm',
      widthRange: '20 mm to 500 mm',
      innerDiameterID: '400 mm / 508 mm',
      outerDiameterOD: 'Up to 1,200 mm max',
      maxCoilWeight: '2,000 kg (2.0 Ton)',
      uncoilingMethod: 'Precision paper interleaf rewinder decoiler to preserve pristine mirror & 2B surface'
    },
    sheetSpecs: {
      thicknessRange: '0.50 mm to 3.00 mm',
      standardSheetSizes: [
        '1,000 mm × 2,000 mm',
        '1,250 mm × 2,500 mm',
        'Precision sheared circle blanks for deep drawing'
      ],
      maxSheetDimension: '1,250 mm × 2,500 mm',
      shearingTolerance: '±0.10 mm with specialized high-chrome shear blades',
      loadingMethod: 'Protective PE-film covered blank loading'
    },
    compatibleDieTypes: [
      'Deep Draw Dies with Polished Carbide (Tungsten) Die Rings',
      'Progressive Dies with High-Pressure Chlorinated / Synthetic Lubrication',
      'Precision Compound Blanking & Piercing Tools',
      'Embossing & Coin-Forming Dies'
    ],
    pressTonnageRange: '20 Ton to 200 Ton (Presses #2, #3, #5, #8, #11, #14)',
    createdPartPieces: [
      'Automotive Exhaust Oxygen Sensor Boss Caps & Retainers',
      'Catalytic Converter High-Temperature Heat Shield Retaining Cups',
      'High-Pressure Fuel Injection Rail Retaining Clips (AISI 304)',
      'Electric Vehicle High-Voltage Inverter Shielding Cans',
      'Automotive EGR Valve Diaphragm Housings (Deep Drawn)',
      'Exterior Window Channel Trim Moldings (Polished AISI 430)'
    ],
    keyMechanicalProperties: {
      tensileStrength: '520 – 720 MPa (High work hardening capacity)',
      yieldStrength: '210 – 350 MPa',
      elongation: '45% – 55% (Extraordinary deep drawability)'
    },
    surfaceFinish: '2B Mill Finish, Bright Annealed (BA), or No. 4 Hairline Satin with protective laser-film coating',
    applicationNotes: 'Demands rigid die alignment and precision clearance (7% - 9% of stock thickness). Used for high-temperature exhaust and fuel child parts where corrosion resistance is imperative.'
  },
  {
    id: 'METAL-AHSS-05',
    metalName: 'Advanced High-Strength Steel (AHSS / DP600 / DP800 / SAPH440)',
    metalCategory: 'High-Strength & Structural Steel',
    formType: 'Both Rolls & Sheets',
    standardGrades: [
      'Dual Phase DP 600 / DP 800 (CR330Y590T-DP / CR440Y780T-DP)',
      'HSLA Steel IS 2062 E450 / ASTM A1011 Grade 60',
      'Transformation-Induced Plasticity (TRIP 700)',
      'Automotive Standard VDA 239-100 CR290Y490T-DP'
    ],
    rollSpecs: {
      thicknessRange: '1.00 mm to 3.20 mm',
      widthRange: '30 mm to 550 mm',
      innerDiameterID: '508 mm',
      outerDiameterOD: 'Up to 1,350 mm max',
      maxCoilWeight: '3,000 kg (3.0 Ton)',
      uncoilingMethod: 'Reinforced 9-roll heavy-duty straightener with backup rolls to eliminate coil set in high-yield strip'
    },
    sheetSpecs: {
      thicknessRange: '1.20 mm to 4.50 mm',
      standardSheetSizes: [
        '1,000 mm × 2,000 mm',
        'Custom pre-blanked trapezoidal & shaped blanks for crash components'
      ],
      maxSheetDimension: '1,250 mm × 2,200 mm',
      shearingTolerance: '±0.15 mm with hardened tool steel blades',
      loadingMethod: 'Hydraulic scissor-lift feeding table with heavy guide rails'
    },
    compatibleDieTypes: [
      'Heavy-Duty Progressive Dies with D2 / Vanadis-4 / DC53 Punches',
      'Nitrogen Gas Spring-Equipped Crash Part Stamping Dies',
      'High-Force Blanking & Piercing Tools with Cam-Operated Piercing Units',
      'Double-Action Forming Dies (Press #1 250 Ton & Press #2 200 Ton)'
    ],
    pressTonnageRange: '110 Ton to 250 Ton (Presses #1, #2, #3, #4, #5)',
    createdPartPieces: [
      'B-Pillar Anti-Intrusion Reinforcement Child Plates (Subsystem: Body Structure)',
      'Front Seat Belt Lower Anchor Anchor Plates (Crash Safety Compliant)',
      'Front Bumper Crash-Box Stiffener Channels',
      'Door Side-Impact Beam Attachment Brackets',
      'Seat Recliner Base Reinforcement Plates',
      'Automotive Subframe Mounting Tower Gussets'
    ],
    keyMechanicalProperties: {
      tensileStrength: '600 – 850 MPa',
      yieldStrength: '350 – 550 MPa (Dual-phase ferrite-martensite microstructure)',
      elongation: '16% – 24% (Controlled springback characteristics)'
    },
    surfaceFinish: 'Pickled & oiled or lightly zinc-coated (GA) with minimal oil lubricant',
    applicationNotes: 'Essential for passive safety components. Dies are engineered in our tool room with customized springback compensation angles (overbend allowances) to achieve sub-millimeter tolerances.'
  },
  {
    id: 'METAL-ALUM-06',
    metalName: 'Automotive Stamping Aluminum Alloys (AA 5052-H32 / AA 5754 / AA 6061)',
    metalCategory: 'Non-Ferrous (Aluminum / Copper / Brass)',
    formType: 'Both Rolls & Sheets',
    standardGrades: [
      'AA 5052-H32 (Al-Mg Alloy for Complex Formed Stampings)',
      'AA 5754-O / H111 (European Automotive Standard for Body & Structural)',
      'AA 6061-T4 / T6 (Heat Treatable High-Strength Aluminum)',
      'JIS A5052P / A6061P'
    ],
    rollSpecs: {
      thicknessRange: '0.60 mm to 2.50 mm',
      widthRange: '30 mm to 600 mm',
      innerDiameterID: '508 mm',
      outerDiameterOD: 'Up to 1,250 mm max',
      maxCoilWeight: '1,800 kg (1.8 Ton)',
      uncoilingMethod: 'Urethane-coated decoiler rolls with anti-scratch felt wipers and soft-start tension controller'
    },
    sheetSpecs: {
      thicknessRange: '0.80 mm to 4.00 mm',
      standardSheetSizes: [
        '1,000 mm × 2,000 mm',
        '1,250 mm × 2,500 mm',
        'Precision blanks with protective peel-off poly film'
      ],
      maxSheetDimension: '1,250 mm × 2,500 mm',
      shearingTolerance: '±0.15 mm',
      loadingMethod: 'Non-marking vacuum suction loader'
    },
    compatibleDieTypes: [
      'Specialized Aluminum Progressive Dies with Mirror-Polished Draw Radii',
      'Air-Cushion Blanking & Forming Dies with Zero-Burr Edge Control',
      'Multi-Stage Notch & Flange Tools with Synthetic Water-Soluble Lubricant'
    ],
    pressTonnageRange: '25 Ton to 160 Ton (Presses #3, #4, #6, #8, #10, #13)',
    createdPartPieces: [
      'Lightweight EV Battery Module Bottom Heat Dissipation Trays',
      'Automotive Radiator Top & Bottom Mount Reinforcements',
      'Vehicle Powertrain Under-Engine Aero Shield Retention Plates',
      'Automotive Alternator Heat Deflector Shields',
      'Hood Latch Reinforcement Doubler Plates',
      'Electric Vehicle Power Distribution Box Housing Enclosures'
    ],
    keyMechanicalProperties: {
      tensileStrength: '210 – 290 MPa',
      yieldStrength: '130 – 220 MPa',
      elongation: '12% – 25%'
    },
    surfaceFinish: 'Mill finish with electro-static vanishing dry lube or removable protective laser plastic film',
    applicationNotes: 'Lightweighting material critical for electric vehicle range extension. Dies feature 5% - 7% stock thickness clearance and diamond-like carbon (DLC) coated tooling to eliminate aluminum pick-up.'
  },
  {
    id: 'METAL-COPPER-07',
    metalName: 'High Conductivity Copper & Cartridge Brass (C1100 / C2600)',
    metalCategory: 'Non-Ferrous (Aluminum / Copper / Brass)',
    formType: 'Rolls (Coils)',
    standardGrades: [
      'ETP Copper C11000 (Electrolytic Tough Pitch - 99.9% Cu)',
      'OFHC Copper C10200 (Oxygen-Free High Conductivity for EV Busbars)',
      'Cartridge Brass C26000 (70/30 Brass for Deep Drawn Connector Shells)',
      'Phosphor Bronze C51900 / C52100 (Spring Contact Clips)'
    ],
    rollSpecs: {
      thicknessRange: '0.20 mm to 2.00 mm (Ultra-precise strip thickness)',
      widthRange: '15 mm to 350 mm',
      innerDiameterID: '300 mm / 400 mm',
      outerDiameterOD: 'Up to 900 mm max',
      maxCoilWeight: '1,200 kg (1.2 Ton)',
      uncoilingMethod: 'High-speed precision uncoiler with optical loop sensor for high-speed continuous press feeding'
    },
    sheetSpecs: {
      thicknessRange: '0.50 mm to 3.00 mm',
      standardSheetSizes: [
        '500 mm × 1,000 mm flat sheets',
        'Precision slit flat strips and pre-blanked heavy busbar rectangles'
      ],
      maxSheetDimension: '600 mm × 1,200 mm',
      shearingTolerance: '±0.08 mm',
      loadingMethod: 'Precision gravity slide feeder & manual high-precision strip feed'
    },
    compatibleDieTypes: [
      'High-Speed Progressive Blanking & Crimping Dies (Up to 150 SPM)',
      'Precision Terminal Embossing, Coining & Piercing Tools',
      'Compound Blank & Form Dies with Sub-Micron Carbide Guide Pillars'
    ],
    pressTonnageRange: '10 Ton to 45 Ton (Presses #15, #16, #17, #18, #19)',
    createdPartPieces: [
      'Electric Vehicle (EV) High-Voltage Battery Busbar Terminals',
      'Automotive Starter Motor Rectifier Ground Terminals',
      'Automotive Fuse Link Strips & Battery Cable Lug Terminals',
      'Wheel Speed Sensor Electrical Connector Blades',
      'Ignition Coil Grounding Tabs & Spring Contact Pins',
      'Electronic Control Unit (ECU) Power Distribution Pin Headers'
    ],
    keyMechanicalProperties: {
      tensileStrength: '220 – 380 MPa',
      yieldStrength: '70 – 300 MPa',
      elongation: '20% – 45% (Electrical conductivity: 100% – 101% IACS for C1100)'
    },
    surfaceFinish: 'Bright rolled finish; ready for direct tin-plating (Sn), silver-plating (Ag), or nickel-plating (Ni)',
    applicationNotes: 'Dedicated to high-frequency electronic and EV powertrain child parts stamped on our high-speed power presses (#15 to #19). Maintains strict burr height limit (< 0.02 mm).'
  },
  {
    id: 'METAL-SPRING-08',
    metalName: 'Precision Spring Steel Strips (EN42J / SAE 1075 / C67S)',
    metalCategory: 'High-Strength & Structural Steel',
    formType: 'Both Rolls & Sheets',
    standardGrades: [
      'IS 2507 Grade EN42J / C67S (Hardened & Tempered Spring Steel)',
      'SAE 1075 / AISI 1074 High Carbon Spring Steel',
      'DIN 17222 67SiCr5 / 51CrV4 (Alloy Spring Steel)',
      'JIS G4802 SK5 / SKS51 Strip'
    ],
    rollSpecs: {
      thicknessRange: '0.30 mm to 1.80 mm',
      widthRange: '15 mm to 300 mm',
      innerDiameterID: '400 mm',
      outerDiameterOD: 'Up to 1,000 mm max',
      maxCoilWeight: '1,000 kg (1.0 Ton)',
      uncoilingMethod: 'Heavy-torque brake decoiler with tension control for pre-hardened or annealed spring strip'
    },
    sheetSpecs: {
      thicknessRange: '0.40 mm to 2.50 mm',
      standardSheetSizes: [
        '500 mm × 1,500 mm Annealed Flat Strips',
        'Custom sheared flat billets for heavy automotive leaf clips'
      ],
      maxSheetDimension: '600 mm × 1,500 mm',
      shearingTolerance: '±0.10 mm with carbide shearing knives',
      loadingMethod: 'Manual precision guide channel feed'
    },
    compatibleDieTypes: [
      'Precision Progressive Notch & Blank Dies with Micro-Grain Carbide Punches',
      'Multi-Stage Spring Clip Forming Tools',
      'Compound Blank & Pierce Dies for Heat-Treated Components'
    ],
    pressTonnageRange: '20 Ton to 75 Ton (Presses #8, #9, #11, #12, #14)',
    createdPartPieces: [
      'Automotive Radiator & Fuel Hose Spring Band Clamps (Constant Tension)',
      'Car Seat Lumbar & Recliner Anti-Backlash Retention Spring Clips',
      'Disc Brake Caliper Anti-Rattle Spring Plates & Pad Retainers',
      'Automotive Fuel & Brake Line Chassis Routing Snap Clips',
      'Gearbox Selector Detent Spring Clips',
      'Vehicle Door Handle Return Spring Brackets'
    ],
    keyMechanicalProperties: {
      tensileStrength: '1,100 – 1,450 MPa (Hardened state) / 550 – 700 MPa (Annealed state)',
      yieldStrength: '950 – 1,250 MPa',
      elongation: '6% – 12%'
    },
    surfaceFinish: 'Blue tempered, polished grey, or phosphate & oil coated; ready for zinc flake or dacromet anti-corrosion coating',
    applicationNotes: 'Stamped in soft annealed state or pre-hardened state, then transferred to our certified heat treatment cycle (austempering / oil quenching) to achieve high elasticity and spring memory.'
  }
];

// Summary Statistics for Raw Metals in Plant
export const RAW_METALS_SUMMARY = {
  monthlyCapacity: '650+ Metric Tons / Month Processing Volume',
  formatsAvailable: 'Metal Coils / Rolls (Slit & Master) + Flat Cut Sheets / Pre-Sheared Blanks',
  thicknessSpan: '0.20 mm to 8.00 mm (Comprehensive automotive stamping range)',
  widthSpan: '15 mm to 650 mm coil width (Direct match to 3.0 Ton decoiler line)',
  maxCoilWeight: 'Up to 3,000 kg (3.0 Ton) per roll',
  maxSheetDimension: '1,250 mm × 2,500 mm sheared blank envelope',
  totalMetalsHandled: 8,
  primaryCategories: [
    'Ferrous Stamping Steel (CRCA IS 513 EDD)',
    'High-Strength Structural Steel (HRPO SAPH440 / DP600 / DP800)',
    'Coated Anti-Corrosion Steel (GI Galvanized / GA Galvannealed)',
    'Austenitic Stainless Steel (AISI 304 / 316L / 430)',
    'Automotive Lightweight Aluminum (AA 5052-H32 / AA 6061)',
    'Electrical Conductive Copper & Brass (C1100 / C2600)',
    'High Carbon Spring Steel (EN42J / SAE 1075)'
  ],
  testingAndQuality: [
    'Mill Test Certificate (MTC) 3.1 verification for every incoming coil/heat batch',
    'Spectrometric chemical composition testing & tensile test coupon validation',
    'Ultrasonic & magnetic thickness verification across width',
    'Erichsen cupping test for deep draw ductility verification',
    'Coating thickness gauge (Elcometer) for galvanized & galvannealed layers'
  ]
};

