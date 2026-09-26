export type DisasterCategory =
  | 'heatwave'
  | 'extreme_rainfall'
  | 'flood'
  | 'cyclone'
  | 'drought'
  | 'landslide'
  | 'glof'
  | 'lightning'
  | 'coastal'
  | 'wildfire';

export type AttributionType =
  | 'direct'
  | 'amplified'
  | 'uncertain'
  | 'primarily_non_climate';

export type ConfidenceLevel = 'very_high' | 'high' | 'medium' | 'low';

export type OutlookTag = 'OBSERVED' | 'PROJECTED' | 'MODELED' | 'UNCERTAIN';

export type CostCategory = 'low' | 'medium' | 'high';

export type ImplementationScale =
  | 'individual'
  | 'household'
  | 'community'
  | 'city'
  | 'state'
  | 'national';

export interface SourceCitation {
  id: string;
  tier: 1 | 2 | 3 | 4;
  organization: string; // e.g. "IMD", "NDMA", "MoES", "IPCC", "IITM Pune", "ISRO", "CWC"
  title: string;
  yearPublished: number;
  documentType: 'official_report' | 'peer_reviewed_paper' | 'government_bulletin' | 'atlas' | 'verified_gazette';
  url?: string;
  lastVerifiedDate: string;
  notes?: string;
}

export interface HistoricalDisaster {
  id: string;
  name: string;
  year: number;
  dateRange: string;
  statesAffected: string[];
  primaryLocations: string[];
  coordinates?: { lat: number; lng: number };
  category: DisasterCategory;
  subCategory: string;
  description: string;
  meteorologicalTrigger: string;

  // Attribution
  climateConnection: AttributionType;
  scientificConfidence: ConfidenceLevel;
  attributionEvidence: string;

  // Impact Data (Real or marked 'Data unavailable')
  impacts: {
    deaths: number | 'Data unavailable';
    displaced: number | 'Data unavailable';
    populationAffected: number | 'Data unavailable';
    economicLossINR: number | 'Data unavailable'; // in Crores INR
    infrastructureDamageSummary: string;
    agriculturalDamageSummary: string;
    environmentalImpactSummary: string;
  };

  // Institutional Response
  institutionalResponse: {
    governmentAction: string;
    ndmaNdrfDeployment: string;
    earlyWarningPerformance: string;
    lessonsLearned: string[];
  };

  // Future Outlook
  futureOutlook: {
    trendDirection: 'Increasing' | 'Stable' | 'Shifting Patterns' | 'Uncertain';
    confidenceTag: OutlookTag;
    projectedOutlookNote: string;
    vulnerableHotspots: string[];
  };

  sources: SourceCitation[];
}

export interface HazardCategoryInfo {
  id: DisasterCategory;
  name: string;
  scientificTerm: string;
  iconName: string;
  tagline: string;
  summary: string;
  physicalMechanism: string;
  climateChangeRelationship: {
    driverMechanism: string;
    attributionLevel: AttributionType;
    scientificConsensusSummary: string;
    observedTrend: string;
  };
  historicalImpactSummary: string;
  indiaHotspotRegions: string[];
  decadalTrends: string;
  cascadingImpacts: string[];
  preparednessBrief: {
    before: string[];
    during: string[];
    after: string[];
  };
  keySolutions: string[];
  ndmaGuidelineRef: string;
}

export interface StateHazardProfile {
  id: string;
  name: string;
  code: string;
  type: 'State' | 'UT';
  region: 'Northern' | 'Southern' | 'Eastern' | 'Western' | 'Central' | 'Northeastern' | 'Islands';
  vulnerabilityScore: number; // 0 - 100 composite index
  dominantHazards: DisasterCategory[];
  coastalKm?: number;
  floodRisk: 'Severe' | 'High' | 'Moderate' | 'Low';
  heatwaveRisk: 'Severe' | 'High' | 'Moderate' | 'Low';
  cycloneRisk: 'Severe' | 'High' | 'Moderate' | 'Low';
  landslideRisk: 'Severe' | 'High' | 'Moderate' | 'Low';
  droughtRisk: 'Severe' | 'High' | 'Moderate' | 'Low';
  glofRisk?: 'Severe' | 'High' | 'Moderate' | 'Low';
  keyDistrictsHotspots: string[];
  sdmaHelpline: string;
  stateEmergencyCenter: string;
  disasterSummary: string;
  historicalEventsCount: number;
}

export interface SustainableSolution {
  id: string;
  title: string;
  category: 'mitigation' | 'adaptation';
  scale: ImplementationScale;
  hazardTargets: DisasterCategory[];
  costCategory: CostCategory;
  estimatedCostRangeINR: string;
  implementationDifficulty: 'simple' | 'moderate' | 'complex';
  requiredInfrastructure: string;
  implementedBy: string;
  expectedBenefit: string;
  maintenanceRequirements: string;
  timeToImplement: string;
  scalability: string;
  suitableForRural: boolean;
  suitableForUrban: boolean;
  indigenousOrNatureBased: boolean;
  description: string;
  practicalSteps: string[];
  caseStudyOrExample: string;
  sourceOrg: string;
}

export interface CascadingNode {
  step: number;
  title: string;
  category: string;
  sector: 'meteorology' | 'infrastructure' | 'society' | 'economy' | 'health';
  description: string;
  impactLevel: 'Critical' | 'Severe' | 'Moderate';
}

export interface CascadingChain {
  id: string;
  hazardName: string;
  hazardId: DisasterCategory;
  initialTrigger: string;
  realWorldExample: string;
  nodes: CascadingNode[];
  resilienceBreakers: string[]; // How to break the cascade
}

export interface ClimateIndicator {
  id: string;
  title: string;
  value: string;
  unit: string;
  baseline: string;
  trend: 'up' | 'down' | 'variable';
  trendDescription: string;
  sourceOrg: string;
  sourceDoc: string;
  implicationForIndia: string;
}
