import { HazardCategoryInfo } from '../types';

export const HAZARD_CATEGORIES: HazardCategoryInfo[] = [
  {
    id: 'heatwave',
    name: 'Heat Waves & Thermal Extremes',
    scientificTerm: 'Extreme High Temperature & Wet-Bulb Stress Anomalies',
    iconName: 'Flame',
    tagline: 'Rising surface temperatures, prolonged heat domes, and dangerous wet-bulb compounding across northern, central, and coastal plains.',
    summary: 'A condition of atmospheric temperature that leads to physiological stress on human bodies and ecosystems. In India, IMD defines a heatwave when maximum temperatures reach at least 40°C in plains, 37°C in coastal areas, and 30°C in hilly regions, with departures of +4.5°C to +6.4°C from normal.',
    physicalMechanism: 'Persistent anticyclonic high-pressure systems aloft cause air to sink, compress, and heat adiabatically. Clear skies allow intense solar radiation to heat the dry land surface. Pre-monsoon dry continental air from the northwest (Pakistan/Thar Desert) advects eastward across northern and central India.',
    climateChangeRelationship: {
      driverMechanism: 'Global mean atmospheric warming directly shifts the entire temperature probability distribution to the right, causing extreme tail events to become more frequent, prolonged, and geographically expansive.',
      attributionLevel: 'direct',
      scientificConsensusSummary: 'Very High Confidence (IPCC AR6 & MoES 2020). Human-induced warming has directly intensified the frequency, duration, and peak intensity of heatwaves over India since the 1950s.',
      observedTrend: 'IMD records show an increase of 2.5 to 3.5 heatwave days per decade in core heatwave zones (Rajasthan, MP, UP, Bihar, Odisha, Andhra Pradesh) over 1961–2024.'
    },
    historicalImpactSummary: 'Severe mortality events (e.g. 2015 Andhra Pradesh/Telangana with >2,500 deaths, May 2024 North India heat dome recording 49°C+ with widespread heatstroke and grid strain). Significant loss of labor productivity among outdoor informal workers, farm labor, and construction workers.',
    indiaHotspotRegions: [
      'North-Western Plains (Rajasthan, Punjab, Haryana, Delhi)',
      'Gangetic Plains (Uttar Pradesh, Bihar, West Bengal)',
      'Central India (Madhya Pradesh, Vidarbha/Maharashtra, Chhattisgarh)',
      'Eastern Coastal Belt (Odisha, Coastal Andhra Pradesh, Rayalaseema)'
    ],
    decadalTrends: 'Night-time minimum temperatures are rising faster than daytime maximums, depriving the human body of nocturnal cooling. Pre-monsoon heatwaves now begin earlier (late March instead of May).',
    cascadingImpacts: [
      'Power grid failure due to air-conditioning overload & thermal generator cooling strain',
      'Wheat terminal heat stress reducing grain yield during milking stage',
      'Urban water reservoir depletion and severe groundwater overdraft',
      'Spike in heatstroke hospital admissions, cardiovascular strain, and worker mortality'
    ],
    preparednessBrief: {
      before: [
        'Paint roofs with high-albedo reflective lime wash to lower indoor temperatures by 3–5°C',
        'Stock oral rehydration salts (ORS), glucose, and clean drinking water in insulated containers',
        'Tune into local IMD color-coded heat warnings (Yellow / Orange / Red) via the SACHET portal',
        'Employers must adjust outdoor work shifts to early morning (6 AM – 11 AM) and late evening'
      ],
      during: [
        'Avoid direct sun exposure between 12:00 PM and 3:30 PM',
        'Wear loose, light-colored cotton clothing and cover head with cloth or umbrella',
        'Drink plenty of fluids (water, chaas, nimbu pani, coconut water) even if not thirsty',
        'Never leave elderly family members or pets inside parked vehicles'
      ],
      after: [
        'Monitor vulnerable individuals for symptoms of heat exhaustion (dizziness, nausea, rapid pulse)',
        'For heatstroke symptoms (loss of consciousness, hot dry skin > 40°C), move to shade and cool immediately with cold water/ice while rushing to medical care',
        'Replenish municipal water tankers and verify community water coolers'
      ]
    },
    keySolutions: [
      'Low-cost lime-wash cool roof coatings (< ₹1,500 per household)',
      'City-wide Heat Action Plans (HAP) with dedicated cooling centers and shade canopies',
      'Urban green buffers, tree canopy restoration, and water body revival to mitigate Urban Heat Islands',
      'Mandatory resting intervals and shade provision for outdoor workers under labor guidelines'
    ],
    ndmaGuidelineRef: 'NDMA Guidelines for Preparation of Action Plan - Prevention and Management of Heat Wave (2019)'
  },
  {
    id: 'extreme_rainfall',
    name: 'Extreme Rainfall & Cloudbursts',
    scientificTerm: 'High-Intensity Short-Duration Mesoscale Convective Precipitation',
    iconName: 'CloudRain',
    tagline: 'Thermodynamic intensification of precipitation bursts, flash inundations, and localized cloudburst events across mountain and urban valleys.',
    summary: 'Precipitation events that deliver localized, high-volume rainfall in a very short span. IMD classifies heavy rainfall as 64.5–115.5 mm/day, very heavy as 115.6–204.4 mm/day, and extremely heavy as >204.4 mm/day. Cloudbursts represent extreme precipitation rates exceeding 100 mm in one hour over a localized area (~20–30 sq km).',
    physicalMechanism: 'The Clausius-Clapeyron thermodynamic relationship dictates that a warmer atmosphere holds approximately 7% more water vapor per 1°C of warming. When intense solar heating creates strong vertical convective updrafts, or when moisture-laden monsoon air encounters mountain barriers (orographic lifting), deep convective storm cells dump enormous moisture volumes rapidly.',
    climateChangeRelationship: {
      driverMechanism: 'Elevated Sea Surface Temperatures (SST) in the Arabian Sea and Bay of Bengal inject copious moisture into monsoonal lows, while atmospheric warming increases convective instability and moisture holding capacity.',
      attributionLevel: 'amplified',
      scientificConsensusSummary: 'High Confidence (IITM Pune & IPCC AR6). While natural monsoonal dynamics create rain events, anthropogenic warming has directly amplified the magnitude and frequency of localized extreme rainfall spells, even as total seasonal monsoon rainy days decrease.',
      observedTrend: '300% increase in daily extreme rainfall events (>150 mm) across central India over 1950–2020 (IITM Pune, Nature Communications study).'
    },
    historicalImpactSummary: 'Mumbai 2005 (944 mm in 24 hours), Chennai 2015 (494 mm in 24 hours), Kedarnath 2013 cloudburst and debris flow, Himachal Pradesh 2023 flash deluges. Triggers widespread urban paralysis, hillside landslides, and severe infrastructure destruction.',
    indiaHotspotRegions: [
      'Western Ghats Windward Escarpment (Konkan, Goa, Coastal Karnataka, Kerala)',
      'Western & Central Himalayas (Himachal Pradesh, Uttarakhand, Jammu & Kashmir)',
      'Northeastern Hills (Meghalaya, Assam, Arunachal Pradesh)',
      'Densely Urbanized Coastal & Riverine Metros (Mumbai, Chennai, Kolkata, Ahmedabad)'
    ],
    decadalTrends: 'Monsoon season exhibits a pattern of "fewer rainy days, but more intense rain bursts" — prolonged dry spells punctuated by torrential downpours that overwhelm conventional storm drainage.',
    cascadingImpacts: [
      'Sudden mountain debris flows and rockfall severing national highways',
      'Urban street inundation paralyzing metro systems, airports, and bus terminals',
      'Sewage overflow mixing into potable water supplies, triggering cholera and hepatitis outbreaks',
      'Flooding of ground-level electrical substations causing prolonged blackout'
    ],
    preparednessBrief: {
      before: [
        'Clear domestic roof gutters, surface drains, and perimeter ditches of debris',
        'Store important identity documents, medications, and dry food in waterproof bags',
        'Familiarize household with local high-ground evacuation routes',
        'Keep battery-powered torches, portable power banks, and radio tuned to IMD nowcasts'
      ],
      during: [
        'Stay indoors away from mountain slopes prone to debris slides and open drains',
        'Never attempt to drive or walk through flooded roadways (just 15 cm of moving water can knock an adult down)',
        'Disconnect primary electrical mains if floodwaters enter your ground floor',
        'Avoid touching fallen utility poles or dangling cables'
      ],
      after: [
        'Boil all drinking water for at least 1 minute before consumption',
        'Report open manholes, damaged transformers, and road cave-ins to municipal helpline',
        'Disinfect flooded premises with bleaching powder to prevent fungal and bacterial hazards'
      ]
    },
    keySolutions: [
      'Urban bioswales, retention ponds, and porous pedestrian pathways',
      'Doppler Weather Radar (DWR) integration with localized nowcasting (IMD SACHET)',
      'Catchment afforestation in upper Himalayan river valleys to decelerate surface runoff',
      'Strict ban on constructing homes inside active riverbeds and natural drainage nallahs'
    ],
    ndmaGuidelineRef: 'NDMA Guidelines for Management of Urban Flooding and Flash Floods (2010/2020)'
  },
  {
    id: 'flood',
    name: 'Floods: Riverine, Urban & Flash Inundations',
    scientificTerm: 'Fluvial, Pluvial & Surface Hydrological Overtopping',
    iconName: 'Waves',
    tagline: 'Overtopping of major riverbanks, stormwater drainage paralysis in asphalted metros, and rapid mountain flash torrents.',
    summary: 'Submersion of normally dry land caused by swollen river systems (riverine/fluvial), overwhelmed municipal drainage networks (urban/pluvial), or abrupt dam releases and cloudbursts (flash floods). Affects over 40 million hectares of Indian territory annually.',
    physicalMechanism: 'Continuous heavy rainfall across a river catchment exceeds the river channel capacity, causing overbank spilling. In urban areas, widespread concretization and loss of natural wetlands (sponges) prevent rainwater percolation, causing 80–90% of rain to convert instantly into surface runoff.',
    climateChangeRelationship: {
      driverMechanism: 'Warming fuels erratic monsoonal surges and simultaneous multi-basin cloudbursts, while simultaneous high tides or sea-level rise impede gravity drainage at river mouths.',
      attributionLevel: 'amplified',
      scientificConsensusSummary: 'High Confidence for extreme precipitation amplification; High Confidence for human land-use exacerbation. IPCC AR6 notes that climate change intensifies the hydrological cycle, but catastrophic damage is heavily driven by riverbed encroachment and wetland loss.',
      observedTrend: 'Increased incidence of compound flood events (e.g. extreme river discharge meeting coastal high tides) and synchronous floods across adjacent river basins.'
    },
    historicalImpactSummary: 'Kerala 2018 Floods (483 deaths, ₹31,000+ Cr loss), Assam Brahmaputra annual inundation (millions displaced), Bihar Kosi 2008 avulsion flood (affected 3.3 million), Delhi Yamuna 2023 overtopping ring road.',
    indiaHotspotRegions: [
      'Indo-Gangetic Basin (Bihar, Uttar Pradesh, West Bengal)',
      'Brahmaputra & Barak Basins (Assam, Arunachal Pradesh)',
      'Coastal Deltas (Odisha Mahanadi, Andhra Godavari-Krishna)',
      'Piedmont & Valley Metros (Chennai, Bengaluru, Mumbai, Srinagar, Delhi)'
    ],
    decadalTrends: 'Urban flooding has shifted from a rare decadal occurrence to an almost annual crisis in Indian tier-1 and tier-2 cities due to impermeable asphalt surfaces and lost lakes.',
    cascadingImpacts: [
      'Widespread standing crop rot and submerged grain silos triggering food inflation',
      'Industrial supply chain disruptions and cargo port access stoppages',
      'Vector-borne disease epidemics (dengue, malaria, leptospirosis) in waterlogged colonies',
      'Groundwater contamination from submerged septic tanks and industrial effluent'
    ],
    preparednessBrief: {
      before: [
        'Elevate electrical switchboards, critical household appliances, and plinths above historical flood levels',
        'Identify community flood shelters, high-school halls, and safe livestock shelters',
        'Maintain a family emergency go-kit with dry rations, water purification tablets, and copies of property records',
        'Know the evacuation signal from local District Disaster Management Authority (DDMA)'
      ],
      during: [
        'Evacuate immediately when directed by authorities; do not wait until water enters the house',
        'Move to upper floors or designated relief centers with emergency essentials',
        'Keep livestock untied so animals can swim or seek higher elevation',
        'Drink only bottled or boiled water; discard all food that has come into contact with floodwater'
      ],
      after: [
        'Do not turn on electrical appliances until inspected by a certified electrician',
        'Administer chlorination to household open wells and underground sumps',
        'Cooperate with relief health camps for preventive leptospirosis chemoprophylaxis (Doxycycline)'
      ]
    },
    keySolutions: [
      'Wetland restoration and restoration of traditional cascade tank systems (e.g. Kudimaramath in Tamil Nadu, Mission Kakatiya in Telangana)',
      'Strict enforcement of River Basin Regulation Zones preventing construction on floodplains',
      'Telemetry-based Real-Time Inflow Forecasting for dams to prevent sudden catastrophic water releases',
      'Decentralized urban rainwater harvesting recharge shafts to convert floodwater into aquifer storage'
    ],
    ndmaGuidelineRef: 'NDMA Guidelines: Management of Floods (2008 & 2019 update)'
  },
  {
    id: 'cyclone',
    name: 'Tropical Cyclones & Storm Surges',
    scientificTerm: 'North Indian Ocean Severe Cyclonic Storms & Rapid Intensification',
    iconName: 'Compass',
    tagline: 'Intensifying cyclonic storms in the Bay of Bengal and Arabian Sea, fueled by warm ocean heat content and devastating coastal storm surges.',
    summary: 'Intense low-pressure vortex systems that form over warm tropical oceans (SST > 26.5°C) featuring closed cyclonic wind circulation. IMD classifies them from Cyclonic Storm (62–88 km/h) up to Super Cyclonic Storm (winds > 222 km/h). Associated storm surges elevate sea level by 2 to 7 meters, inundating low-lying coastlines.',
    physicalMechanism: 'High ocean heat content provides sensible and latent heat flux to evaporate moisture. Warm air rises rapidly, condensing into thunderstorms and releasing latent heat of condensation, which lowers central surface pressure and drives stronger rotational inflow steered by the Coriolis force.',
    climateChangeRelationship: {
      driverMechanism: 'Elevated Sea Surface Temperatures and deep Ocean Heat Content (OHC) in both the Bay of Bengal and Arabian Sea provide unprecedented thermodynamic fuel, facilitating "Rapid Intensification" (winds accelerating > 55 km/h in 24 hours).',
      attributionLevel: 'amplified',
      scientificConsensusSummary: 'High Confidence (IITM Pune, IPCC AR6). While overall cyclone numbers in the Bay of Bengal have remained stable or slightly decreased, the proportion of Very Severe (VSCS) and Extremely Severe Cyclonic Storms (ESCS) has increased markedly, alongside a 52% surge in Arabian Sea cyclones.',
      observedTrend: 'Arabian Sea, historically calmer than the Bay of Bengal, has witnessed frequent severe cyclones in the pre- and post-monsoon seasons (Mekunu, Vayu, Nisarga, Tauktae, Biparjoy).'
    },
    historicalImpactSummary: '1999 Odisha Super Cyclone (9,887 deaths, 260 km/h winds, 6m surge), Cyclone Phailin 2013 (successful mass evacuation of 1M+ people, low fatalities), Cyclone Fani 2019 (Extremely Severe, devastated Puri/Bhubaneswar, ₹24,000+ Cr loss), Cyclone Amphan 2020 (Sundarbans and Kolkata ravaged, ₹1,00,000+ Cr loss).',
    indiaHotspotRegions: [
      'East Coast (Odisha, Andhra Pradesh, West Bengal, Tamil Nadu)',
      'West Coast Emerging Hotspot (Gujarat - Saurashtra/Kutch, Maharashtra - Konkan)',
      'Island Territories (Andaman & Nicobar Islands, Lakshadweep)'
    ],
    decadalTrends: 'Rapid Intensification is occurring closer to coastlines, shortening the available early-warning reaction window for maritime and coastal evacuation.',
    cascadingImpacts: [
      'Severe seawater inundation salinizing fertile paddy fields for 3–5 growing seasons',
      'Massive power and telecom grid collapse due to snapped high-tension transmission towers',
      'Destruction of traditional coastal artisanal fishing craft and harbor infrastructure',
      'Uprooting of millions of trees disrupting urban transportation and emergency rescue routes'
    ],
    preparednessBrief: {
      before: [
        'Secure or store loose outdoor objects (tin roofs, signboards, water tanks) that can turn into deadly projectiles',
        'Trim large tree branches near powerlines and rooftops before cyclone season',
        'Identify the nearest multipurpose cyclone shelter (MPCS) and know the evacuation route',
        'Fishermen must heed coastal advisories and strictly avoid venturing out when signals 3 or higher are hoisted'
      ],
      during: [
        'Do not leave safe shelter until officially declared all-clear; beware the calm "eye of the storm" which is followed by ferocious reverse-direction winds',
        'Stay inside the strongest room, away from glass windows and doors',
        'Turn off domestic gas cylinders and switch off the main electrical breaker',
        'Rely exclusively on official IMD/AIR/DDMA bulletins; avoid sharing unverified social media forwards'
      ],
      after: [
        'Do not approach snapped overhead power lines; treat every downed cable as live',
        'Beware of displaced venomous snakes and reptiles seeking dry shelter on plinths',
        'Assess structural damage cautiously before re-entering partially damaged dwellings'
      ]
    },
    keySolutions: [
      'Continuous coastal mangrove greenbelt and casuarina bio-shield plantations to attenuate wave energy',
      'Underground electrical power cabling in vulnerable coastal municipal corridors',
      'Multipurpose Cyclone Shelter (MPCS) networks with resilient rainwater tanks and solar power backups',
      'Automated Early Warning Dissemination System (EWDS) sirens and Cell Broadcast location alerts'
    ],
    ndmaGuidelineRef: 'NDMA Guidelines: Management of Cyclones (2021) & National Cyclone Risk Mitigation Project (NCRMP)'
  },
  {
    id: 'drought',
    name: 'Agricultural & Hydrological Droughts',
    scientificTerm: 'Meteorological, Hydrological & Soil Moisture Deficit',
    iconName: 'SunMedium',
    tagline: 'Prolonged monsoon dry spells, critical reservoir depletion, and systemic groundwater over-extraction in agrarian drylands.',
    summary: 'A prolonged deficiency of precipitation resulting in water shortages for crops, groundwater reserves, and human consumption. Progresses from Meteorological (rainfall deficit > 25–50%) to Agricultural (soil moisture deficit damaging crops) and Hydrological (reservoir and river depletion).',
    physicalMechanism: 'Persistent atmospheric high-pressure ridges prevent convective cloud formation. El Niño events in the equatorial Pacific often weaken the Indian Summer Monsoon circulation, suppressing convection over the subcontinent and lengthening dry spells.',
    climateChangeRelationship: {
      driverMechanism: 'Higher ambient temperatures increase atmospheric vapor pressure deficit and evapotranspiration rates, drying soils faster even when seasonal rainfall totals appear near normal.',
      attributionLevel: 'amplified',
      scientificConsensusSummary: 'High Confidence (MoES 2020, IPCC AR6). Climate change is expanding the spatial extent and severity of agricultural droughts by lengthening intra-monsoon dry breaks and accelerating land surface drying.',
      observedTrend: 'Significant increase in frequency and intensity of droughts across central and peninsular India over the past 6 decades (MoES).'
    },
    historicalImpactSummary: 'Bundelkhand chronic drought series (2015–2016, acute water trains to Latur, mass livestock abandonment), Maharashtra Marathwada crisis (2018–2019, extensive crop failure), pan-India drought of 2002 and 2009.',
    indiaHotspotRegions: [
      'Central Drylands (Bundelkhand - MP/UP, Vidarbha - Maharashtra)',
      'Peninsular Rainshadow Belt (Marathwada, Rayalaseema - AP, North Interior Karnataka)',
      'Arid & Semi-Arid West (Western Rajasthan, Kutch/Saurashtra - Gujarat)'
    ],
    decadalTrends: 'Monsoons exhibit more frequent "breaks" (7–15 day dry intervals within the June–September season), depleting soil moisture right when kharif crops are flowering.',
    cascadingImpacts: [
      'Agrarian distress, debt accumulation, and distress migration of rural labor to informal urban slums',
      'Critical depletion of drinking water aquifers requiring emergency rail tanker supplies',
      'Fodder shortages causing distress sale or death of agricultural draft and milch cattle',
      'Hydroelectric power generation cuts forcing thermal power rationing'
    ],
    preparednessBrief: {
      before: [
        'Adopt farm-level contour bunding and continuous contour trenches to trap every drop of in-situ rain',
        'Construct low-cost farm ponds (Khet Talab) lined with polyethylene to harvest runoff',
        'Switch to drought-hardy, climate-resilient indigenous millets (Bajra, Jowar, Ragi) instead of water-thirsty sugarcane/paddy',
        'Maintain emergency community seed reserves of short-duration crop varieties'
      ],
      during: [
        'Implement micro-irrigation (drip and sprinkler) to deliver water directly to root zones at night',
        'Apply thick biomass or straw mulching across crop rows to cut soil evaporation by up to 50%',
        'Prioritize remaining groundwater for human and livestock drinking over irrigation',
        'Pool community water resources under Gram Panchayat rationing protocols'
      ],
      after: [
        'Plant deep-rooted perennial fodder trees (Subabul, Gliricidia) to build fodder security for upcoming dry cycles',
        'Participate in village watershed management works under MGNREGS for check-dam desilting',
        'Enroll in Pradhan Mantri Fasal Bima Yojana (PMFBY) with timely local survey submissions'
      ]
    },
    keySolutions: [
      'Micro-watershed development: check dams, percolation tanks, and gully plugs using local stone/bamboo',
      'Crop diversification shifting away from water-guzzling crops in semi-arid zones (e.g. sugarcane in Marathwada)',
      'Solar-powered micro-drip irrigation with moisture sensors',
      'Community-managed Aquifer Recharge (MAR) mapping via Central Ground Water Board (CGWB) data'
    ],
    ndmaGuidelineRef: 'NDMA Guidelines: Management of Drought (2010) & Manual for Drought Management (Ministry of Agriculture)'
  },
  {
    id: 'landslide',
    name: 'Landslides & Slope Instabilities',
    scientificTerm: 'Mass Wasting & Rainfall-Induced Slope Failures',
    iconName: 'Mountain',
    tagline: 'Gravity-driven downslope mass movement of rock, debris, and soil triggered by extreme precipitation on fragile geomorphology.',
    summary: 'The movement of a mass of rock, debris, or earth down a slope under the direct influence of gravity. India accounts for ~12% of global landslide casualties, predominantly across the Himalayas and the Western Ghats.',
    physicalMechanism: 'Infiltration of heavy rainfall increases pore water pressure inside slope materials, reducing the shear strength of the soil. When the downslope gravitational force exceeds the resisting shear strength, failure occurs along slip planes.',
    climateChangeRelationship: {
      driverMechanism: 'More frequent extreme short-duration precipitation events rapidly saturate slope soils beyond critical pore-pressure thresholds, converting stable slopes into rapid debris flows.',
      attributionLevel: 'amplified',
      scientificConsensusSummary: 'High Confidence for rainfall trigger amplification; High Confidence for anthropogenic slope modification (road widening, unscientific cutting, deforestation) acting as primary co-factors.',
      observedTrend: 'ISRO Landslide Atlas documents rising frequency of catastrophic multi-point landslide clusters following intense monsoon downpours in Kerala (Wayanad 2024, Idukki 2018) and Himachal Pradesh/Uttarakhand.'
    },
    historicalImpactSummary: 'Wayanad 2024 (Chooralmala/Meppadi debris flow, 400+ casualties, entire townships pulverized), Malin Village Maharashtra 2014 (151 deaths), Kedarnath debris flows 2013, Himachal Pradesh monsoon 2023 (Shimla, Mandi, Kullu landslides destroying hundreds of structures).',
    indiaHotspotRegions: [
      'Western Ghats (Wayanad, Idukki - Kerala; Nilgiris - TN; Kodagu - Karnataka; Raigad - Maharashtra)',
      'North-Western Himalayas (Rudraprayag, Chamoli, Tehri - Uttarakhand; Shimla, Mandi - HP; J&K)',
      'Eastern & North-Eastern Himalayas (Darjeeling - WB; Sikkim; East Khasi Hills - Meghalaya)'
    ],
    decadalTrends: 'Expanding infrastructure development (highways, tunnels, hydro dams) intersecting with intense monsoon downpours has multiplied slope failure incidents.',
    cascadingImpacts: [
      'Damming of mountain rivers by landslide debris forming temporary landslide lakes that later burst into deadly flash floods',
      'Severing of vital lifeline highways (NH-58, NH-5) stranding pilgrims, tourists, and critical food supplies',
      'Destruction of hillside terraced farms and wiping out apple and spice orchards',
      'Burial of power stations, bridges, and mountain habitations'
    ],
    preparednessBrief: {
      before: [
        'Watch for early warning slope indicators: new cracks in plaster/foundations, tilted utility poles, jamming doors, or muddy seepage from hillsides',
        'Direct roof stormwater runoff into natural downhill drainage channels rather than allowing it to soak into slope edges',
        'Never excavate the toe of steep slopes without certified retaining walls',
        'Heed ISRO/GSI regional landslide early warnings disseminated via district authorities'
      ],
      during: [
        'Evacuate immediately upon hearing rumbling sounds, snapping trees, or sudden surges in muddy water',
        'Move across the slope to stable rock ground; do not attempt to run downhill in the path of debris flow',
        'If escape is impossible, curl into a tight ball and protect your head with arms and objects'
      ],
      after: [
        'Stay away from the slide area; secondary slips frequently occur within 24–48 hours',
        'Check for injured or trapped neighbors without directly entering the unstable slide zone',
        'Report severed gas, water, or electric lines to disaster control immediately'
      ]
    },
    keySolutions: [
      'Bio-engineering slope stabilization: Vetiver grass, bamboo root networking, and deep-rooted native hill shrubs',
      'Mandatory Landslide Zonation Mapping (LSZM) compliance before clearing any road widening or construction',
      'Proper hillside drainage management (perforated horizontal drains to relieve pore-water pressure)',
      'Community-based rainfall threshold monitoring using low-cost manual rain gauges'
    ],
    ndmaGuidelineRef: 'NDMA Guidelines: Management of Landslides and Snow Avalanches (2009) & GSI Early Warning System'
  },
  {
    id: 'glof',
    name: 'Glacial Hazards & GLOFs',
    scientificTerm: 'Glacial Lake Outburst Floods & Permafrost Degradation',
    iconName: 'Snowflake',
    tagline: 'Rapid retreat of Himalayan glaciers creating unstable moraine-dammed lakes prone to catastrophic breach and downstream deluge.',
    summary: 'Sudden release of substantial water volumes from glacial lakes formed behind unstable natural moraine dams as glaciers retreat. The surge discharges millions of cubic meters of water, ice, and boulders down narrow mountain gorges at torrential velocity.',
    physicalMechanism: 'Rising Himalayan temperatures accelerate ice melt, forming proglacial lakes. Moraine dams made of loose unconsolidated glacial till, rock, and ice cores are destabilized by ice/rock avalanches splashing into the lake (displacement waves), piping failure, or heavy rainfall.',
    climateChangeRelationship: {
      driverMechanism: 'Himalayan temperatures are rising at ~0.2°C per decade, significantly faster than the global mean (Elevation-Dependent Warming). This has driven rapid glacial shrinkage and exponential growth in moraine-dammed lake volumes.',
      attributionLevel: 'direct',
      scientificConsensusSummary: 'Very High Confidence (IPCC AR6 SROCC, Wadia Institute, MoES). Direct thermodynamic linkage between atmospheric warming, glacier mass loss, and lake destabilization.',
      observedTrend: 'ISRO and CWC surveys document over 2,000 glacial lakes in the Indian Himalayan Region, with more than 180 classified as potentially hazardous or expanding rapidly.'
    },
    historicalImpactSummary: 'Sikkim South Lhonak Lake GLOF (October 2023, breached moraine washed away Teesta-III dam, Chungthang town, 100+ deaths), Chamoli Disaster (February 2021, rock/ice avalanche from Raunthi glacier triggered flash flood killing 200+ workers at Tapovan Vishnugad project), Kedarnath 2013 (Chorabari Lake breach).',
    indiaHotspotRegions: [
      'Eastern Himalayas (Sikkim - Teesta Basin, Arunachal Pradesh)',
      'Central Himalayas (Uttarakhand - Alaknanda, Bhagirathi, Dhauliganga Basins)',
      'Western Himalayas (Himachal Pradesh - Sutlej, Chenab Basins; Ladakh)'
    ],
    decadalTrends: 'Glacial lakes are expanding in volume by 30–50% per decade, pushing water bodies closer to hanging ice slopes susceptible to climate-induced rockfall.',
    cascadingImpacts: [
      'Catastrophic structural failure of downstream hydroelectric dams and barrages',
      'Wiping out of critical military infrastructure and border connectivity bridges',
      'Deposition of massive silt and boulder layers over downstream farmland for decades',
      'Long-term alteration of seasonal downstream river discharge affecting Gangetic water security'
    ],
    preparednessBrief: {
      before: [
        'Establish automated lake water-level sensors and real-time early warning sirens connected to downstream villages',
        'Conduct regular multi-agency mock drills in vulnerable valley habitations',
        'Maintain emergency evacuation trails leading directly to heights > 30 meters above the riverbed',
        'Prohibit permanent settlements on low-lying river terraces directly downstream of high-risk glacial lakes'
      ],
      during: [
        'Move immediately to designated high ground upon hearing early warning sirens; do not pause to collect belongings',
        'Stay clear of all riverbanks, bridges, and dam structures',
        'Do not use vehicles on narrow valley roads that may become blocked or swept away'
      ],
      after: [
        'Do not re-enter the river valley until official clearance is issued by the State Disaster Management Authority',
        'Drink only tested water supplies; river water will be heavily contaminated with thick glacial mud and toxins',
        'Assist in clearing debris from key arterial supply lines'
      ]
    },
    keySolutions: [
      'Engineering siphoning and controlled spillway cuts to lower hazardous glacial lake water levels (as trialed at South Lhonak)',
      'ISRO satellite Synthetic Aperture Radar (SAR) interferometry for continuous glacier monitoring',
      'Installation of automated downstream acoustic siren alert networks',
      'Rigorous climate-risk auditing for all proposed Himalayan infrastructure and hydroelectric projects'
    ],
    ndmaGuidelineRef: 'NDMA Guidelines: Management of Glacial Lake Outburst Floods (GLOFs) (2020)'
  },
  {
    id: 'lightning',
    name: 'Thunderstorms, Lightning & Squalls',
    scientificTerm: 'Severe Convective Storms, Downbursts & Atmospheric Electrostatics',
    iconName: 'Zap',
    tagline: 'Sudden, deadly electrical strikes and severe squalls causing more single-event casualties annually in India than cyclones and floods combined.',
    summary: 'A transient atmospheric electric discharge between clouds or between a cloud and the ground, accompanied by thunder. India witnesses ~2,000 to 2,500 lightning deaths annually, making it one of the deadliest meteorological hazards in the country.',
    physicalMechanism: 'Violent convective updrafts loft supercooled water droplets into freezing altitudes where they collide with ice graupel pellets, transferring electrostatic charges. Positive charges accumulate at the cloud top, negative charges at the base, eventually discharging through the air dielectric to the ground.',
    climateChangeRelationship: {
      driverMechanism: 'Higher surface temperatures and enhanced atmospheric moisture drive stronger convective available potential energy (CAPE), resulting in taller, more energetic thunderclouds capable of higher lightning flash rates.',
      attributionLevel: 'amplified',
      scientificConsensusSummary: 'Medium to High Confidence. Atmospheric studies indicate that for every 1°C increase in global average temperature, lightning strike frequency increases by approximately 10–12%.',
      observedTrend: 'Lightning Resilient India Campaign records show a ~34% increase in lightning strikes across India between 2019 and 2023, particularly across the eastern and central belts.'
    },
    historicalImpactSummary: 'June 2020: 107 people killed in a single day across Bihar and Uttar Pradesh by severe lightning strikes during pre-monsoon squalls. High casualties among farmers planting paddy, grazing livestock, or sheltering under isolated trees.',
    indiaHotspotRegions: [
      'Eastern & Central States (Bihar, Jharkhand, Odisha, Chhattisgarh, West Bengal)',
      'North-Eastern Hills (Meghalaya, Assam, Manipur)',
      'Northern Plains (Uttar Pradesh, Madhya Pradesh)'
    ],
    decadalTrends: 'Pre-monsoon (Kalbaishakhi/Nor\'westers) thunderstorm seasons are displaying increased peak wind shear, larger hail sizes, and higher lightning strike density.',
    cascadingImpacts: [
      'Destruction of rural livestock herds grazing in open fields',
      'Ignition of rural thatched huts, barn fires, and localized forest brush fires',
      'Burnout of electrical distribution transformers and village transmission nodes',
      'Long-term neurological disabilities, burns, and trauma among survivors'
    ],
    preparednessBrief: {
      before: [
        'Install cost-effective Franklin lightning rods (conductors) on village schools, panchayat halls, and tall buildings',
        'Download IMD DAMINI Lightning Alert app providing 20-km radius early alerts 30–45 minutes in advance',
        'Trim tall tree branches away from residential roofs'
      ],
      during: [
        'Adhere to the 30-30 Rule: If thunder sounds within 30 seconds of lightning, seek indoor shelter immediately; stay indoors for 30 minutes after the last thunderclap',
        'If trapped outdoors in an open field, DO NOT shelter under isolated tall trees or tin sheds',
        'Crouch low on balls of feet (lightning crouch) with feet together and hands covering ears to minimize ground contact; DO NOT lie flat on the ground',
        'Avoid metal fences, tractors, bicycles, and bodies of water'
      ],
      after: [
        'Lightning victims do not carry an electrical charge and can be safely touched; administer CPR immediately if breathing has stopped',
        'Treat burns and transport victim to primary health center promptly',
        'Check domestic wiring for tripped breakers and scorched outlets'
      ]
    },
    keySolutions: [
      'Universal installation of low-cost lightning arresters on all rural public buildings',
      'Dissemination of DAMINI app alerts via village panchayat loudspeakers and SMS',
      'Community training on the "Lightning Crouch" and CPR in rural farming communities',
      'Inclusion of lightning-safe structures in Pradhan Mantri Awas Yojana (PMAY) house designs'
    ],
    ndmaGuidelineRef: 'NDMA Guidelines: Preparation of Action Plan for Prevention and Management of Thunderstorm & Lightning / Squall (2019)'
  },
  {
    id: 'coastal',
    name: 'Coastal Hazards, Sea-Level Rise & Erosion',
    scientificTerm: 'Relative Sea-Level Rise, Coastal Inundation & Saline Intrusion',
    iconName: 'Anchor',
    tagline: 'Gradual sea-level encroachment, shoreline erosion, tidal saltwater flooding, and acute delta subsidence along India\'s 7,516 km coastline.',
    summary: 'The progressive loss of coastal land, inundation of low-lying deltas, and intrusion of saline seawater into coastal freshwater aquifers driven by thermal expansion of oceans and melting land ice, combined with extreme tidal surges.',
    physicalMechanism: 'Thermal expansion of seawater under global warming plus meltwater contribution from polar ice sheets and mountain glaciers increases global ocean volume. Local relative sea-level rise is further compounded by delta sediment compaction and groundwater extraction.',
    climateChangeRelationship: {
      driverMechanism: 'Ocean warming and polar ice sheet melting are primary direct consequences of planetary radiative imbalance.',
      attributionLevel: 'direct',
      scientificConsensusSummary: 'Very High Confidence (IPCC AR6 & MoES 2020). Sea level along the Indian coast has risen at an average rate of 1.7 mm/year over the last century, accelerating to ~3.3 mm/year over the past 2.5 decades.',
      observedTrend: 'National Centre for Coastal Research (NCCR) shoreline change atlas indicates that ~34% of the Indian mainland coastline is under varying degrees of erosion, with West Bengal and Puducherry suffering the highest erosion rates.'
    },
    historicalImpactSummary: 'Submergence of islands in the Sundarbans (e.g. Lohachara and Bedford islands, erosion of Ghoramara island displacing thousands of "climate refugees"), chronic tidal water inundation in coastal cities like Mumbai and Kochi during king tides, extensive salinity intrusion in Odisha\'s Kendrapara and Gujarat\'s Kutch destroying groundwater.',
    indiaHotspotRegions: [
      'Ganges-Brahmaputra-Meghna Delta (Sundarbans - West Bengal)',
      'Mahanadi & Godavari-Krishna Deltas (Odisha, Andhra Pradesh)',
      'Low-lying Urban Coasts (Mumbai, Kochi, Chennai, Surat)',
      'Island Territories (Lakshadweep Atolls, Andaman & Nicobar)'
    ],
    decadalTrends: 'Accelerating high-tide "sunny-day flooding" in coastal urban streets even in the absence of rain, alongside inland migration of salinity front up to 15–20 km in river estuaries.',
    cascadingImpacts: [
      'Irreversible contamination of coastal drinking water borewells forcing water imports',
      'Salinization of fertile coastal rice fields forcing farmers out of agriculture into distress migration',
      'Structural corrosion of seaside buildings, bridges, and port installations due to chloride attack',
      'Erosion of sandy nesting beaches for endangered Olive Ridley sea turtles'
    ],
    preparednessBrief: {
      before: [
        'Protect and replant natural coastal sand dunes, beach creepers (Ipomoea pes-caprae), and mangrove belts',
        'Elevate coastal wells and seal them against high-tide saltwater inundation',
        'Switch coastal farm plots to salt-tolerant traditional paddy varieties (e.g. Pokkali in Kerala, Bhata in Odisha)',
        'Check Coastal Regulation Zone (CRZ) setbacks before constructing any permanent structure'
      ],
      during: [
        'During full-moon king tides or tidal surges, park vehicles and store sensitive goods above predicted flood marks',
        'Avoid drinking untreated borewell water in coastal belts if it tastes brackish or saline'
      ],
      after: [
        'Rinse metal equipment and vehicle undercarriages with freshwater after exposure to coastal floodwaters to halt rapid rust corrosion',
        'Flush salinized fields with monsoon rainwater through improved field drainage sluices'
      ]
    },
    keySolutions: [
      'Nature-based coastal protection: Mangrove restoration (Rhizophora, Avicennia) and living breakwaters',
      'Strict enforcement of CRZ regulations preventing concrete hardening right at high-tide lines',
      'Promotion of salt-tolerant saline-resilient agro-ecosystems (Pokkali rice-prawn rotation)',
      'Rainwater recharge barriers in coastal aquifers to push back saltwater intrusion wedges'
    ],
    ndmaGuidelineRef: 'MoEFCC Coastal Regulation Zone (CRZ) Notifications & NCCR Shoreline Management Plans'
  },
  {
    id: 'wildfire',
    name: 'Forest Fires & Biomass Stress',
    scientificTerm: 'Landscape Wildfires & Forest Fuel Desiccation',
    iconName: 'FlameKindling',
    tagline: 'High-temperature fuel desiccation, prolonged dry seasons, and widespread burning across deciduous and pine forests of the Himalayas and central plateaus.',
    summary: 'Uncontrolled fires that burn through vegetative fuel in forests, grasslands, and protected reserves. In India, over 95% of forest fires have human ignition sources (e.g. NTFP collection, stubble burning, unextinguished campfires), but climate-induced dry spells provide the critical dry fuel conditions for rapid fire spread.',
    physicalMechanism: 'High surface temperatures, low relative humidity (< 30%), and absence of pre-monsoon showers create extreme vapor pressure deficits, desiccating ground leaf litter, fallen pine needles (chir pine), and dry understory brush into highly flammable fuel.',
    climateChangeRelationship: {
      driverMechanism: 'Extended pre-monsoon dry seasons and elevated temperatures dramatically reduce fuel moisture content, while erratic rainfall leaves forests dry for longer windows each spring.',
      attributionLevel: 'amplified',
      scientificConsensusSummary: 'Medium to High Confidence. While human activity provides the ignition spark, climate warming creates the hyper-dry conditions that allow localized sparks to explode into uncontrollable landscape blazes.',
      observedTrend: 'Forest Survey of India (FSI) reports that ~36% of India\'s forest cover is prone to frequent forest fires, with fire alert frequency surging in the hot dry months of March–May.'
    },
    historicalImpactSummary: 'Similipal Biosphere Reserve fires (Odisha, March 2021, raging for weeks across tiger reserve), Uttarakhand Forest Fires (2016, 2021, 2024 with thousands of hectares burned and thick smoke plumes covering hill stations), Bandipur Tiger Reserve fire (Karnataka, 2019).',
    indiaHotspotRegions: [
      'Western & Central Himalayas (Uttarakhand, Himachal Pradesh - Chir Pine belts)',
      'Central Dry Deciduous Forests (Odisha, Madhya Pradesh, Chhattisgarh, Jharkhand)',
      'North-Eastern Hill Forests (Mizoram, Manipur, Nagaland)',
      'Deccan Dry Forests (Western Ghats leeward slopes, Similipal, Bandipur)'
    ],
    decadalTrends: 'Fire season begins earlier (February instead of late March) and extends deeper into summer due to delayed pre-monsoon rains.',
    cascadingImpacts: [
      'Deposition of black carbon and soot on Himalayan glaciers, lowering albedo and accelerating glacial melt',
      'Severe respiratory illness spikes across mountain towns and downwind plains from PM2.5 smoke',
      'Loss of medicinal herbs, endangered wildlife habitats, and critical rural non-timber forest products (Mahua, Kendu leaves)',
      'Soil denudation leading to heightened monsoon landslide susceptibility on burnt slopes'
    ],
    preparednessBrief: {
      before: [
        'Forest departments and Van Panchayats must conduct controlled winter burning and maintain cleared fire lines (firebreaks)',
        'Rake and safely collect dry pine needle fuel from community forest floors for briquetting',
        'Check Forest Survey of India (FSI) Van Agni satellite fire alert SMS before entering forest tracks',
        'Report smoke plumes immediately to the 1926 Forest Emergency Helpline'
      ],
      during: [
        'Never attempt to combat a crown fire (treetop fire) without specialized equipment; evacuate downwind valleys',
        'Wear N95 masks or wet cloth over nose and mouth to filter toxic fine particulate matter and wood smoke',
        'Clear dry leaves, firewood stacks, and brush at least 30 meters away from rural homestead perimeters (defensible space)'
      ],
      after: [
        'Avoid burnt hillside slopes during subsequent monsoon rains as topsoil is loose and prone to mudslides',
        'Participate in community reforestation using native broadleaf species (Banj oak) that hold moisture rather than monoculture conifers'
      ]
    },
    keySolutions: [
      'Commercial utilization of fallen chir pine needles for biomass fuel pellets and eco-briquettes (creating rural income while removing fuel)',
      'Empowerment of community Van Panchayats with fire-beaters, water backpacks, and safety gear',
      'Satellite real-time fire detection (MODIS/SNPP-VIIRS) linked with instant SMS to beat forest guards',
      'Replacement of dry pine monocultures with indigenous water-retaining broadleaf oak forests'
    ],
    ndmaGuidelineRef: 'NDMA National Action Plan on Forest Fires (NAPFF) & Forest Survey of India Guidelines'
  }
];
