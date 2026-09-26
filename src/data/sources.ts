import { SourceCitation } from '../types';

export const SOURCES_REPOSITORY: SourceCitation[] = [
  {
    id: 'moes-2020-assessment',
    tier: 1,
    organization: 'Ministry of Earth Sciences (MoES), Govt of India',
    title: 'Assessment of Climate Change over the Indian Region: A Report of the Ministry of Earth Sciences',
    yearPublished: 2020,
    documentType: 'official_report',
    url: 'https://www.moes.gov.in',
    lastVerifiedDate: '2026-03-15',
    notes: 'Primary scientific baseline for observed warming (+0.7°C between 1901-2018) and tropical Indian Ocean warming (+1.2°C).'
  },
  {
    id: 'imd-climate-summary',
    tier: 1,
    organization: 'India Meteorological Department (IMD)',
    title: 'Statement on Climate of India During 2024 & Annual Climate Summary Series',
    yearPublished: 2025,
    documentType: 'official_report',
    url: 'https://mausam.imd.gov.in',
    lastVerifiedDate: '2026-01-20',
    notes: 'Official observational data on temperature anomalies, heatwave days, cyclogenesis in Bay of Bengal/Arabian Sea.'
  },
  {
    id: 'ipcc-ar6-wg1-south-asia',
    tier: 1,
    organization: 'Intergovernmental Panel on Climate Change (IPCC)',
    title: 'Sixth Assessment Report (AR6): The Physical Science Basis - Chapter 10 & 12 (South Asia)',
    yearPublished: 2021,
    documentType: 'official_report',
    url: 'https://www.ipcc.ch/report/ar6/wg1/',
    lastVerifiedDate: '2025-11-10',
    notes: 'High confidence on intensification of heavy precipitation events, retreat of glaciers, compound heat-humidity extremes.'
  },
  {
    id: 'ipcc-ar6-wg2-impacts',
    tier: 1,
    organization: 'Intergovernmental Panel on Climate Change (IPCC)',
    title: 'Climate Change 2022: Impacts, Adaptation and Vulnerability - Chapter 10 (Asia)',
    yearPublished: 2022,
    documentType: 'official_report',
    url: 'https://www.ipcc.ch/report/ar6/wg2/',
    lastVerifiedDate: '2025-12-05',
    notes: 'Assesses urban heat island compounding, agricultural yield sensitivity (wheat/rice in Indo-Gangetic plains).'
  },
  {
    id: 'ndma-heatwave-guidelines',
    tier: 1,
    organization: 'National Disaster Management Authority (NDMA)',
    title: 'National Guidelines for Preparation of Action Plan - Prevention and Management of Heat Wave',
    yearPublished: 2019,
    documentType: 'government_bulletin',
    url: 'https://ndma.gov.in',
    lastVerifiedDate: '2026-04-01',
    notes: 'Standard operating procedures for heat action plans (HAPs), color-coded threshold alerts and hydration posts.'
  },
  {
    id: 'ndma-cyclone-guidelines',
    tier: 1,
    organization: 'National Disaster Management Authority (NDMA)',
    title: 'National Disaster Management Guidelines: Management of Cyclones',
    yearPublished: 2021,
    documentType: 'government_bulletin',
    url: 'https://ndma.gov.in',
    lastVerifiedDate: '2026-02-14',
    notes: 'Standardized evacuation criteria, cyclone shelter maintenance, storm surge forecasting integration.'
  },
  {
    id: 'cwc-flood-database',
    tier: 1,
    organization: 'Central Water Commission (CWC), Ministry of Jal Shakti',
    title: 'Integrated Flood Management & Water Resources Information System (India-WRIS)',
    yearPublished: 2024,
    documentType: 'atlas',
    url: 'https://indiawris.gov.in',
    lastVerifiedDate: '2026-03-01',
    notes: 'Basin-wise gauge telemetry, flood inundation modeling for Ganga, Brahmaputra, Mahanadi, Godavari, and Krishna.'
  },
  {
    id: 'isro-nrsc-landslide-atlas',
    tier: 1,
    organization: 'National Remote Sensing Centre (NRSC), ISRO',
    title: 'Landslide Atlas of India: Spatial Risk and Susceptibility Mapping',
    yearPublished: 2023,
    documentType: 'atlas',
    url: 'https://bhuvan.nrsc.gov.in',
    lastVerifiedDate: '2026-02-28',
    notes: 'Exhaustive inventory of 80,000+ landslides across Western Ghats and Himalayas (Rudraprayag, Tehri, Wayanad rankings).'
  },
  {
    id: 'iitm-cyclone-intensification',
    tier: 2,
    organization: 'Indian Institute of Tropical Meteorology (IITM), Pune',
    title: 'Changing status of tropical cyclones over the north Indian Ocean: Rapid intensification in the Arabian Sea',
    yearPublished: 2021,
    documentType: 'peer_reviewed_paper',
    url: 'https://www.nature.com/articles/s41558-021-01053-4',
    lastVerifiedDate: '2026-01-15',
    notes: 'Peer-reviewed study documenting 52% increase in Arabian Sea cyclone frequency and 150% surge in severe storm duration.'
  },
  {
    id: 'world-bank-south-asia-hotspots',
    tier: 3,
    organization: 'World Bank Group',
    title: 'South Asia\'s Hotspots: The Impact of Temperature and Precipitation Changes on Living Standards',
    yearPublished: 2018,
    documentType: 'official_report',
    url: 'https://openknowledge.worldbank.org',
    lastVerifiedDate: '2025-10-18',
    notes: 'Economic model predicting climate hotspot impact on GDP per capita across central and inland Indian districts.'
  },
  {
    id: 'wmo-state-climate-asia',
    tier: 3,
    organization: 'World Meteorological Organization (WMO)',
    title: 'State of the Climate in Asia 2023–2024',
    yearPublished: 2024,
    documentType: 'official_report',
    url: 'https://wmo.int',
    lastVerifiedDate: '2026-02-10',
    notes: 'Overview of warming rates in the Asian landmass and regional extreme hydrometeorological occurrences.'
  },
  {
    id: 'current-science-himalayan-glof',
    tier: 2,
    organization: 'Current Science / Wadia Institute of Himalayan Geology',
    title: 'Glacial retreat and emerging moraine-dammed lake hazards in the Sikkim and Garhwal Himalayas',
    yearPublished: 2023,
    documentType: 'peer_reviewed_paper',
    url: 'https://www.currentscience.ac.in',
    lastVerifiedDate: '2026-03-20',
    notes: 'Evaluation of South Lhonak and Shako Cho glacial lakes expansion rate in eastern Himalayas.'
  }
];
