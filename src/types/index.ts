export type PageId = 'home' | 'about' | 'services' | 'portfolio' | 'drawings' | 'metals' | 'facility' | 'emergency' | 'contact';

export interface DrawingDimension {
  label: string;
  value: string;
  nominal: number;
  tolerance: string;
  criticality: 'Critical (CTQ)' | 'Major' | 'Standard';
  note: string;
}

export interface ChildPartItem {
  id: string;
  name: string;
  partNumber: string;
  material: string;
  process: string;
  tolerance: string;
  functionInParent: string;
  emergencyBufferUnits: number;
  drawingType?: 'turned_pin' | 'stamped_pawl' | 'bracket_plate' | 'spring' | 'busbar' | 'bushing' | 'custom';
  drawingImage?: string;
  drawingRevision?: string;
  cadFormats?: string[];
  dimensions?: DrawingDimension[];
  parentMatingInterface?: string;
  gdtCallouts?: string[];
  tonnageRequired?: string;
  sheetThickness?: string;
  imagePlaceholderNote?: string;
}

export interface ParentSubsystem {
  id: string;
  title: string;
  category: 'Body & Closures' | 'Braking & Chassis' | 'Powertrain & EV' | 'Steering & Drivetrain' | 'Interior & Safety';
  parentDescription: string;
  image: string;
  oemApplication: string;
  childParts: ChildPartItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
  image: string;
}

export interface MachineSpec {
  name: string;
  count: string;
  capacity: string;
  brand: string;
  application: string;
}

export interface ClientPartner {
  name: string;
  tier: string;
  region: string;
  suppliedAssemblies: string;
}

// 1. Power Press Shop Details: 19 Power Presses Specifications (PP-1 to PP-19)
export interface PowerPressDetail {
  id: string;
  pressNumber: number; // 1 to 19 (S.No)
  machineNo: string; // 'PP-1' to 'PP-19'
  pressName: string;
  tonnage: number;
  tonnageLabel: string; // e.g., "150T", "50T", "30T", "20T", "10T", "5T"
  shutHeight: string; // e.g. '8"', '10"', '12"', '14"', '6"'
  strokeLength: string; // e.g. '2 1/2"', '3"', '4"', '5"', '2"', '1 1/2"' (also referred to as stroke/stock height)
  pressType: 'H-Frame Straight Sided' | 'Pneumatic Clutch Press' | 'Mechanical C-Frame Press' | 'Hydraulic Deep Draw Press' | 'High-Speed Stamping Press' | 'Precision Bench Press' | string;
  bedSize: string;
  dieHeight: string; // Kept for backward compatibility (matches shutHeight)
  strokesPerMinute: string;
  dieTypesUsed: string; // Different dies paired with different press capacities
  keyApplications: string;
  brand: string;
  activeDieId?: string;
  activeDieName?: string;
}

// Plant Compressor Specification (Item 20: Compressor = 2)
export interface CompressorSpec {
  id: string;
  unitName: string;
  quantity: number; // 2 units
  pressureRating: string;
  flowCapacity: string;
  motorPower: string;
  application: string;
  airReceiverTank: string;
}

// 1b. Die Inventory Item (19 Active on Presses + 11 Standby/Available = 30 Total Dies)
export interface DieInventoryItem {
  id: string;
  dieNumber: number; // 1 to 30
  dieName: string;
  dieType: 'Progressive Die' | 'Deep Drawing Die' | 'Compound Die' | 'Combination Die' | 'Bending V/U Die' | 'Piercing & Notching Die' | 'Coining & Trimming Die';
  status: 'Active (Mounted on Press)' | 'Available (Tool Storage Racks / Standby)';
  assignedPress?: string; // e.g. "Press #01 (250 Ton)"
  pressTonnageRequired: string;
  stationsCount: string;
  partProduced: string;
  strokeSpeedRating: string;
  maintenanceStatus: 'Production Ready' | 'Recently Serviced' | 'Calibrated';
}

// Die Types Compatibility & Uses
export interface DieTypeCapability {
  dieTypeName: string;
  pressTonnageRange: string;
  operationDescription: string;
  suitablePresses: string;
  automotivePartsMade: string;
}

// Page Topic Item for the Mini Index / Top Menu Navigator
export interface PageTopic {
  id: string;
  label: string;
  shortLabel?: string;
  badge?: string;
  count?: number | string;
  category?: string;
}

// 2. Decoiler, Recoiler, Auto Straightener & Coil Feeding Tools
export interface DecoilerSpec {
  id: string;
  unitNumber: number; // 1 to 5
  machineNo: string; // 'DC-1' to 'DC-5'
  name: string;
  tonnageLabel: string; // '3.0T', '2.0T', '1.5T', '1.0T', '0.5T'
  coilWeightCapacity: string;
  stripWidthRange: string;
  sheetThicknessRange: string;
  mandrelExpansion: string;
  speedRange: string;
  pairedPressLine: string;
  features: string[];
  role: string;
}

export interface StraightenerSpec {
  id: string;
  unitNumber: number; // 1
  machineNo: string; // 'ST-1'
  name: string;
  capacityBadge: string; // '0.3 - 3.5 mm'
  levelingCapacity: string;
  stripWidthCapacity: string;
  rollerConfiguration: string;
  micrometerAdjustment: string;
  feedSpeed: string;
  syncInterface: string;
  features: string[];
  role: string;
}

export interface SurfaceGrinderSpec {
  id: string;
  unitNumber: number; // 1
  machineNo: string; // 'SG-1'
  name: string;
  accuracyBadge: string; // '0.001 mm'
  tableSize: string;
  magneticChuckSize: string;
  spindleSpeed: string;
  accuracyDownfeed: string;
  wheelDimensions: string;
  features: string[];
  dieApplication: string;
}

export interface CoilHandlingEquipment {
  id: string;
  equipmentName: string;
  equipmentCategory: 'Decoiler (Uncoiler)' | 'Recoiler (Rewinder)' | 'Auto Straightener / Leveler' | 'NC Servo Feeder' | 'Combined 3-in-1 Line';
  capacitySpec: string; // e.g. "3.0 Ton Coil Weight", "2.0 Ton Recoil Weight", "0.3 - 3.5 mm thickness"
  stripWidthCapacity: string;
  thicknessCapacity: string;
  speedRange: string;
  features: string[];
  roleInPressShop: string;
}

export type PressAutomationEquipment = CoilHandlingEquipment;

// 3. Grinding Machines (Surface Grinder, Tool & Cutter, Bench Grinder)
export interface GrinderMachineSpec {
  id: string;
  grinderName: string;
  grinderType: 'Hydraulic Surface Grinder' | 'Precision Tool & Cutter Grinder' | 'Heavy-Duty Pedestal Grinder';
  tableSize: string;
  magneticChuckSize: string;
  spindleSpeed: string;
  accuracyDownfeed: string;
  dieApplication: string;
}

// 4. DG Generator (Diesel Generator) Backup Facility
export interface DGGensetFacility {
  id: string;
  name: string;
  ratingKVA: string;
  quantity: number;
  engineMake: string;
  alternator: string;
  amfPanel: string;
  fuelType: string;
  uptimeGuarantee: string;
  fuelTankCapacity: string;
  coverage: string;
  operationalRole: string;
}

// 5. Dimensional Measuring Tools & Metrology Schedule (Required to check product dimensions)
export interface MeasuringInstrumentDetail {
  id: string;
  instrumentName: string;
  category: 'Linear & Depth Measuring' | 'Bore & Internal Diameter' | 'Height & Flatness Master' | 'Angular & Contour Profile' | 'Limit Gauges (Go/No-Go)' | 'Surface Finish & Hardness';
  measuringRange: string;
  leastCount: string;
  makeBrand: string;
  quantityCount: string;
  calibrationFrequency: string;
  application: string;
}

// 6. Parts Image Area (To be added later)
export interface PartImagePlaceholder {
  id: string;
  partNumber: string;
  partName: string;
  category: 'Body & Closures' | 'Braking & Chassis' | 'Powertrain & EV' | 'Steering & Drivetrain' | 'Interior & Safety' | 'Deep Drawn' | 'Brackets & Hinges';
  vehicleApplication: string;
  materialGrade: string;
  thickness: string;
  pressTonnage: string;
  imageUrl?: string;
  placeholderStatus: 'Image To Be Added' | 'Pending Final Production Photo' | 'Client Supplied Sample';
  notes: string;
}

// 7. Working For (Companies Names - To Be Added Later)
export interface WorkingForCompany {
  id: string;
  displayName: string;
  companyCategory: '4-Wheeler Passenger Car OEM' | 'Commercial Vehicle & Truck OEM' | 'Tier-1 Automotive System Supplier' | 'Electric Vehicle (EV) Platform' | '2-Wheeler & 3-Wheeler Automaker';
  region: string;
  suppliedAutomobileParts: string;
  partnershipStatus: 'Active Serial Production' | 'Development Phase' | 'Qualified Tier-1 Vendor';
  ndaProtected: boolean;
  notes: string;
}

// 8. Hire Tool Room Facilities (Proper Format Area for User Details)
export interface HireToolRoomFacility {
  id: string;
  machineTitle: string;
  category: 'CNC Machining (VMC)' | 'Wire Cut EDM & Spark EDM' | 'Precision Surface & Cylindrical Grinding' | 'Heavy Lathes & Radial Drills' | 'Tool & Die Assembly & Trial';
  specifications: string;
  workingEnvelope: string;
  accuracy: string;
  hireAvailability: 'Available for Hire / Contract Tooling' | 'Per-Hour Machine Rental' | 'Full Die Development Job-Work';
  status: string;
  detailsNote: string;
}

// 9. Plant Raw Metals: Rolls / Coils & Sheets / Blanks Dimensions & Die Uses
export interface MetalRollSpecification {
  thicknessRange: string;
  widthRange: string;
  innerDiameterID: string;
  outerDiameterOD: string;
  maxCoilWeight: string;
  uncoilingMethod: string;
}

export interface MetalSheetSpecification {
  thicknessRange: string;
  standardSheetSizes: string[];
  maxSheetDimension: string;
  shearingTolerance: string;
  loadingMethod: string;
}

export interface PlantMetalMaterial {
  id: string;
  metalName: string;
  metalCategory: 'Ferrous Stamping Steel' | 'High-Strength & Structural Steel' | 'Coated & Corrosion-Resistant Steel' | 'Stainless Steel' | 'Non-Ferrous (Aluminum / Copper / Brass)';
  formType: 'Rolls (Coils)' | 'Sheets (Cut Sheets / Blanks)' | 'Both Rolls & Sheets';
  standardGrades: string[];
  rollSpecs?: MetalRollSpecification;
  sheetSpecs?: MetalSheetSpecification;
  compatibleDieTypes: string[];
  pressTonnageRange: string;
  createdPartPieces: string[];
  keyMechanicalProperties: {
    tensileStrength: string;
    yieldStrength: string;
    elongation: string;
  };
  surfaceFinish: string;
  applicationNotes: string;
}
