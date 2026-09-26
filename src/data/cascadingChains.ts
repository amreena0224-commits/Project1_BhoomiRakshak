import { CascadingChain } from '../types';

export const CASCADING_CHAINS: CascadingChain[] = [
  {
    id: 'cascade-urban-flood',
    hazardName: 'Urban Flood & Stormwater Deluge',
    hazardId: 'flood',
    initialTrigger: 'Extreme 100mm+/hour convective rainfall burst over a concretized metropolitan basin',
    realWorldExample: 'Chennai December 2015 / Mumbai July 2005 / Bengaluru September 2022',
    nodes: [
      {
        step: 1,
        title: 'Atmospheric Shock',
        category: 'Meteorology',
        sector: 'meteorology',
        description: 'Moisture-laden convective storm cell releases high-intensity localized precipitation exceeding historical drainage return-period thresholds.',
        impactLevel: 'Moderate'
      },
      {
        step: 2,
        title: 'Stormwater Infrastructure Overload',
        category: 'Drainage Systems',
        sector: 'infrastructure',
        description: 'Impervious paved surfaces prevent ground infiltration. Silt-choked underground drains and concretized natural nallahs backup, flooding arterial streets to 1–2 meter depths.',
        impactLevel: 'Severe'
      },
      {
        step: 3,
        title: 'Transportation & Mobility Paralysis',
        category: 'Transport Networks',
        sector: 'infrastructure',
        description: 'Suburban railway tracks submerge; metro stations close floodgates; bus depots and underpasses inundate; airports halt runways. Hundreds of thousands of commuters are stranded.',
        impactLevel: 'Critical'
      },
      {
        step: 4,
        title: 'Power & Telecommunications Blackout',
        category: 'Critical Utilities',
        sector: 'infrastructure',
        description: 'Electricity distribution companies shut off ground-level transformer substations as a precautionary safety measure, plunging entire districts into darkness and disabling mobile cell tower batteries within 4 hours.',
        impactLevel: 'Critical'
      },
      {
        step: 5,
        title: 'Municipal Water & Sanitation Contamination',
        category: 'Public Health',
        sector: 'health',
        description: 'Raw sewage from overflowing manholes enters underground domestic drinking water sumps and municipal potable pipes through low-pressure suction, creating cross-contamination.',
        impactLevel: 'Critical'
      },
      {
        step: 6,
        title: 'Secondary Disease Outbreaks & Economic Shock',
        category: 'Socioeconomic System',
        sector: 'economy',
        description: 'Stagnant floodwaters lead to post-disaster leptospirosis, cholera, and dengue outbreaks. Commercial trade, banking servers, and informal retail operations suffer hundreds of crores in daily lost output.',
        impactLevel: 'Severe'
      }
    ],
    resilienceBreakers: [
      'De-paving urban walkways with permeable interlocking concrete pavers to restore percolation',
      'Elevating electrical distribution substations 2.5 meters above maximum high flood levels',
      'Deploying automatic backflow prevention valves on municipal stormwater outfalls to prevent reverse tidal entry',
      'Distributing prophylactic doxycycline and emergency water chlorination kits via neighborhood health posts within 24 hours'
    ]
  },
  {
    id: 'cascade-heat-dome',
    hazardName: 'Prolonged Heat Dome & Nocturnal Thermal Stress',
    hazardId: 'heatwave',
    initialTrigger: 'Stationary high-pressure anticyclone creating persistent 46–49°C temperatures with night lows >32°C',
    realWorldExample: 'North & Central India May–June 2024 / Andhra Pradesh May 2015',
    nodes: [
      {
        step: 1,
        title: 'Persistent Radiative Forcing',
        category: 'Atmospheric Physics',
        sector: 'meteorology',
        description: 'Upper-level atmospheric ridge traps sinking superheated dry air over plains, maximizing direct solar insolation with zero cloud cover.',
        impactLevel: 'Moderate'
      },
      {
        step: 2,
        title: 'Urban Heat Island Compounding',
        category: 'Built Environment',
        sector: 'infrastructure',
        description: 'Dense concrete buildings, asphalt roads, and lack of tree canopies absorb daytime heat and re-radiate it at night. Minimum temperatures stay above 33°C, depriving human bodies of nocturnal cooling.',
        impactLevel: 'Severe'
      },
      {
        step: 3,
        title: 'Energy Grid Overload & Transformer Blowouts',
        category: 'Power Grid',
        sector: 'infrastructure',
        description: 'Peak cooling electricity demand spikes to historic records. Distribution transformers overheat and catch fire; thermal generation plants face cooling water shortages, triggering rolling blackouts.',
        impactLevel: 'Critical'
      },
      {
        step: 4,
        title: 'Water Scarcity & Tanker Gridlocks',
        category: 'Municipal Utilities',
        sector: 'society',
        description: 'Per-capita water demand surges for hydration and cooling while surface reservoirs evaporate rapidly. Groundwater borewells trip due to power outages, triggering acute water tanker queues in low-income settlements.',
        impactLevel: 'Critical'
      },
      {
        step: 5,
        title: 'Agricultural Terminal Heat Shock',
        category: 'Food Security',
        sector: 'economy',
        description: 'Standing summer vegetable and fruit crops wither. Heat-stressed dairy cows produce 15–20% less milk. Poultry mortality rates surge, triggering localized food inflation.',
        impactLevel: 'Severe'
      },
      {
        step: 6,
        title: 'Surge in Exertional Heatstroke & Labor Loss',
        category: 'Human Health & Livelihood',
        sector: 'health',
        description: 'Informal daily-wage outdoor laborers (construction, gig delivery, farm workers) suffer acute dehydration and heat exhaustion. Emergency hospital wards run short of ice beds and IV fluids.',
        impactLevel: 'Critical'
      }
    ],
    resilienceBreakers: [
      'Applying high-albedo cool roof lime-wash coatings across informal settlements to reduce indoor heat by 3–5°C',
      'Enforcing mandatory cessation of outdoor manual labor between 12:00 PM and 3:30 PM with wage protection',
      'Establishing air-cooled community hydration centers in bus terminals, religious institutions, and panchayats',
      'Implementing automated peak-load shifting and battery storage to prevent transformer burnouts'
    ]
  },
  {
    id: 'cascade-super-cyclone',
    hazardName: 'Rapidly Intensifying Tropical Cyclone & Storm Surge',
    hazardId: 'cyclone',
    initialTrigger: 'Low-pressure system over 31°C sea surface undergoing rapid intensification into a Category 4/5 equivalent storm',
    realWorldExample: 'Cyclone Amphan 2020 / Cyclone Fani 2019 / Odisha 1999 Super Cyclone',
    nodes: [
      {
        step: 1,
        title: 'Oceanic Thermodynamic Fueling',
        category: 'Ocean Atmosphere Interaction',
        sector: 'meteorology',
        description: 'Elevated ocean heat content in the upper 50 meters fuels explosive thunderstorm clusters, dropping central barometric pressure below 940 hPa.',
        impactLevel: 'Moderate'
      },
      {
        step: 2,
        title: 'Catastrophic Coastal Storm Surge',
        category: 'Coastal Hydrodynamics',
        sector: 'infrastructure',
        description: 'Vicious cyclonic winds pile up sea water into a 3 to 6-meter wall of ocean surge that overtops coastal earthen dykes, penetrating 10–15 km inland.',
        impactLevel: 'Critical'
      },
      {
        step: 3,
        title: 'Agricultural Soil Salinization',
        category: 'Agro-Ecosystem',
        sector: 'economy',
        description: 'Seawater submerges fertile paddy fields and fills freshwater village ponds with hyper-saline water, rendering prime farmland uncultivable for 3–5 cropping cycles.',
        impactLevel: 'Critical'
      },
      {
        step: 4,
        title: 'Lifeline Infrastructure Decimation',
        category: 'Communications & Energy',
        sector: 'infrastructure',
        description: 'Extreme wind gusts (180–220 km/h) buckle high-voltage transmission towers, snap optical fiber cables, and unroof cyclone-resistant shelters, isolating district administrations.',
        impactLevel: 'Critical'
      },
      {
        step: 5,
        title: 'Marine Artisanal Fishery Destruction',
        category: 'Livelihoods',
        sector: 'economy',
        description: 'Traditional wooden trawlers, motorized catamarans, cold storage ice factories, and fishing nets along landing beaches are shattered, terminating fishing incomes for months.',
        impactLevel: 'Severe'
      },
      {
        step: 6,
        title: 'Long-Term Ecological Distress & Migration',
        category: 'Ecosystems & Demographics',
        sector: 'society',
        description: 'Loss of coastal mangrove buffers and saline groundwater intrusion compels distress migration of smallholders to urban peripheries as precarious informal workers.',
        impactLevel: 'Severe'
      }
    ],
    resilienceBreakers: [
      'Dense multi-tier mangrove bio-shield belts (100–300m depth) to dissipate 60%+ of wave energy',
      'Subterranean underground electrical power grids in coastal towns to prevent grid collapse',
      'Desalinating village community ponds using mobile reverse-osmosis relief vans and sluice flush gates',
      'Introducing salinity-tolerant indigenous rice varieties (e.g. Pokkali, Lunishree) to restart farming'
    ]
  },
  {
    id: 'cascade-glacial-glof',
    hazardName: 'Himalayan Glacial Lake Outburst Flood (GLOF)',
    hazardId: 'glof',
    initialTrigger: 'Rock/ice avalanche into expanding moraine-dammed glacial lake overtopping loose moraine barrier',
    realWorldExample: 'Sikkim South Lhonak GLOF October 2023 / Chamoli February 2021',
    nodes: [
      {
        step: 1,
        title: 'Cryosphere Instability',
        category: 'Glaciology',
        sector: 'meteorology',
        description: 'Rising high-altitude air temperatures melt sub-surface permafrost; unstable hanging glaciers detach into deep proglacial moraine lake.',
        impactLevel: 'Moderate'
      },
      {
        step: 2,
        title: 'Moraine Breach & High-Velocity Debris Wave',
        category: 'Hydromorphology',
        sector: 'infrastructure',
        description: 'Displacement wave breaches unconsolidated sediment dam. Millions of cubic meters of water, ice, and massive boulders rush down steep mountain gorge at 40–60 km/h.',
        impactLevel: 'Critical'
      },
      {
        step: 3,
        title: 'Hydroelectric Dam & Barrage Destruction',
        category: 'Strategic Infrastructure',
        sector: 'infrastructure',
        description: 'Immense kinetic force of boulder-laden slurry pulverizes downstream concrete dam spillways, submerges powerhouse turbines, and washes away intake gates.',
        impactLevel: 'Critical'
      },
      {
        step: 4,
        title: 'Arterial Highway & Strategic Bridge Severance',
        category: 'National Security & Connectivity',
        sector: 'infrastructure',
        description: 'Bridges and river-hugging national highways are washed into the riverbed, severing border trade routes and military logistical supply lines for months.',
        impactLevel: 'Critical'
      },
      {
        step: 5,
        title: 'Farmland Sedimentation & Riverbed Raising',
        category: 'Agrarian Valley',
        sector: 'economy',
        description: 'Downstream river terraces are blanketed with 2–5 meters of sterile glacial silt and boulders, extinguishing cardamom, ginger, and rice agriculture.',
        impactLevel: 'Severe'
      },
      {
        step: 6,
        title: 'Prolonged Regional Energy & Economic Deficit',
        category: 'Macroeconomics',
        sector: 'economy',
        description: 'Loss of 1,000+ MW clean power generation triggers regional electricity tariffs hikes, requires emergency power purchases from national grid, and burdens state debt.',
        impactLevel: 'Severe'
      }
    ],
    resilienceBreakers: [
      'Engineering siphoning and controlled spillway cuts to lower glacial lake water levels before critical expansion',
      'Automated upstream acoustic/radar water-level sensors linked directly to downstream valley sirens via satellite radio',
      'Prohibiting permanent habitations and heavy infrastructure within the dynamic river hydraulic floodway',
      'Mandatory insurance underwriting and independent risk assessments for high-altitude hydroelectric assets'
    ]
  }
];
