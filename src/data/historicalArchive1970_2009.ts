import { HistoricalDisaster } from '../types';
import { SOURCES_REPOSITORY } from './sources';

const srcMoes = SOURCES_REPOSITORY[0];
const srcImd = SOURCES_REPOSITORY[1];
const srcNdmaCyclone = SOURCES_REPOSITORY[5];
const srcCwc = SOURCES_REPOSITORY[6];
const srcIsroLandslide = SOURCES_REPOSITORY[7];
const srcIitmCyclone = SOURCES_REPOSITORY[8];

export const ARCHIVE_1970_2009: HistoricalDisaster[] = [
  {
    id: 'alaknanda-flood-1970',
    name: 'Alaknanda Valley Cloudburst & Flash Flood 1970',
    year: 1970,
    dateRange: 'July 20, 1970',
    statesAffected: ['Uttarakhand', 'Uttar Pradesh'],
    primaryLocations: ['Chamoli', 'Joshimath', 'Belakuchi', 'Pipalkoti', 'Srinagar (Garhwal)'],
    coordinates: { lat: 30.5562, lng: 79.5637 },
    category: 'flood',
    subCategory: 'Cloudburst-Induced Landslide Dam Outburst Flood (LDOF)',
    description: 'A catastrophic cloudburst in the upper catchments of the Alaknanda and Birahi Ganga rivers caused colossal rockslides that temporarily dammed the river at Belakuchi. When the landslide dam collapsed, an enormous wall of water and boulders swept downstream, destroying entire hamlets, wiping out 55 transport buses, and inundating the upper Gangetic plains down to Haridwar.',
    meteorologicalTrigger: 'Extreme localized cloudburst concentrated over steep glaciated Himalayan valleys, saturating fragile pre-Cambrian rock formations and inducing simultaneous hillslope failures.',
    climateConnection: 'uncertain',
    scientificConfidence: 'medium',
    attributionEvidence: 'Historically documented as an extreme orographic monsoon event. This catastrophe played a pivotal historical role: local hill communities observed that commercial deforestation directly aggravated the slope collapses, sparking the historic Chipko Movement led by Gaura Devi in 1974.',
    impacts: {
      deaths: 100,
      displaced: 12000,
      populationAffected: 150000,
      economicLossINR: 25, // ₹25 Crores in 1970 currency terms
      infrastructureDamageSummary: 'Belakuchi settlement completely washed away; 5 major bridges on Rishikesh-Badrinath highway destroyed; 10 km of motorable road vanished.',
      agriculturalDamageSummary: 'Heavy silt and boulder deposition ruined hundreds of acres of terrace cultivation in the Alaknanda valley.',
      environmentalImpactSummary: 'Triggered the birth of India’s modern Himalayan forest conservation and community anti-logging resistance (Chipko).'
    },
    institutionalResponse: {
      governmentAction: 'District administration mobilized army engineering columns to carve bypass foot tracks along the cliffs.',
      ndmaNdrfDeployment: 'Pre-dates modern NDRF; operations carried out by Border Roads Organisation (BRO) and local police.',
      earlyWarningPerformance: 'Zero early warning; telemetry or weather radars did not exist in the upper Himalayas in 1970.',
      lessonsLearned: [
        'Commercial clear-felling on steep Himalayan catchments drastically accelerates catastrophic debris avalanches',
        'River floodplain encroachment in narrow gorges leads to fatal washouts during dam breaches',
        'Himalayan river telemetry is mandatory for downstream settlements'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Compound cloudbursts and landslide dam bursts are projected to intensify across the Alaknanda and Bhagirathi catchments under accelerated cryosphere melt and warming.',
      vulnerableHotspots: ['Joshimath-Rishiganga Valley', 'Dhauliganga Basin', 'Mandakini Gorge']
    },
    sources: [srcMoes, srcIsroLandslide]
  },
  {
    id: 'odisha-cyclone-1971',
    name: '1971 Odisha Severe Super Cyclone',
    year: 1971,
    dateRange: 'October 29 – 30, 1971',
    statesAffected: ['Odisha', 'West Bengal'],
    primaryLocations: ['Kendrapara', 'Paradip', 'Jagatsinghpur', 'Cuttack', 'Bhadrak'],
    coordinates: { lat: 20.3168, lng: 86.6111 },
    category: 'cyclone',
    subCategory: 'Extremely Severe Cyclonic Storm & Storm Surge',
    description: 'A ferocious cyclone struck the coast of Odisha near Paradip in October 1971. A devastating storm surge of 5 to 6 meters surged up to 15 kilometers inland into low-lying coastal villages of Kendrapara, drowning over 10,000 people and killing hundreds of thousands of livestock.',
    meteorologicalTrigger: 'Rapid cyclogenesis in the central Bay of Bengal with rapid intensification near landfall and coincidence with high astronomical tides.',
    climateConnection: 'uncertain',
    scientificConfidence: 'medium',
    attributionEvidence: 'Natural tropical cyclogenesis in post-monsoon peak; early evidence demonstrated that absence of cyclone shelters and coastal embankment revetments created lethal exposure.',
    impacts: {
      deaths: 10000,
      displaced: 1000000,
      populationAffected: 5000000,
      economicLossINR: 150,
      infrastructureDamageSummary: 'Complete destruction of mud-and-thatch settlements; Paradip Port operations paralyzed; all telegraph and road links snapped.',
      agriculturalDamageSummary: 'Saline seawater inundated 1 million hectares of prime paddy fields, sterilizing coastal soil for multiple seasons.',
      environmentalImpactSummary: 'Mangrove degradation in the Mahanadi delta exacerbated direct coastal surge penetration.'
    },
    institutionalResponse: {
      governmentAction: 'Armed forces deployed for emergency air-dropping of food grains and chlorinated water packets.',
      ndmaNdrfDeployment: 'Disaster handled under pre-NDMA civil defense and state revenue relief commissioners.',
      earlyWarningPerformance: 'Rudimentary IMD coastal bulletins broadcast via All India Radio, but last-mile village evacuation was nonexistent.',
      lessonsLearned: [
        'High astronomical tide combined with cyclone landfall multiplies mortality tenfold',
        'Concrete cyclone shelters are indispensable for coastal human survival',
        'Preservation of coastal mangrove buffer belts is vital to dissipate kinetic wave energy'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'OBSERVED',
      projectedOutlookNote: 'Bay of Bengal tropical cyclones exhibit higher post-monsoon intensification rates with rising baseline sea level amplifying storm surges.',
      vulnerableHotspots: ['Kendrapara Coast', 'Paradip Maritime Belt', 'Ganjam-Puri Corridor']
    },
    sources: [srcImd, srcNdmaCyclone]
  },
  {
    id: 'andhra-diviseema-cyclone-1977',
    name: 'Andhra Pradesh Diviseema Super Cyclone 1977',
    year: 1977,
    dateRange: 'November 19, 1977',
    statesAffected: ['Andhra Pradesh', 'Tamil Nadu'],
    primaryLocations: ['Diviseema (Krishna District)', 'Machilipatnam', 'Bapatla', 'Guntur'],
    coordinates: { lat: 16.1800, lng: 81.1300 },
    category: 'cyclone',
    subCategory: 'Super Cyclonic Storm with 6-Meter Storm Surge',
    description: 'One of the deadliest tropical cyclones in modern Indian history. Making landfall near Chirala and sweeping over Diviseema island in Krishna district with sustained winds exceeding 200 km/h, the cyclone generated a 6-meter-high tidal wave that swept 20 km inland, killing an estimated 10,000 citizens in a single night.',
    meteorologicalTrigger: 'Extremely deep central pressure (~940 hPa) with catastrophic onshore wind forcing at the Krishna river estuary during peak lunar high tide.',
    climateConnection: 'uncertain',
    scientificConfidence: 'medium',
    attributionEvidence: 'Historically documented benchmark event. This disaster was the definitive turning point that compelled the Government of India and the Red Cross to launch the National Cyclone Risk Mitigation Project and construct hundreds of permanent elevated cyclone shelters.',
    impacts: {
      deaths: 10000,
      displaced: 2000000,
      populationAffected: 3400000,
      economicLossINR: 350,
      infrastructureDamageSummary: 'Nearly 100 villages entirely erased; rail tracks twisted; complete communication collapse across coastal Andhra.',
      agriculturalDamageSummary: 'Total destruction of standing paddy and sugarcane crops; massive salinization of Krishna delta aquifers.',
      environmentalImpactSummary: 'Severe marine intrusion into freshwater canals and destruction of coastal casuarina plantations.'
    },
    institutionalResponse: {
      governmentAction: 'Massive mobilization of Indian Army and voluntary organizations for mass cremations and cholera prevention.',
      ndmaNdrfDeployment: 'Led by Andhra Pradesh Revenue and Relief departments with Indian Air Force food drops.',
      earlyWarningPerformance: 'IMD had issued warnings 24 hours prior, but community communication mechanisms were absent, leaving villagers unaware of the lethal surge.',
      lessonsLearned: [
        'Prompted India’s first large-scale Multipurpose Cyclone Shelter construction program',
        'Showed that storm surge, not wind alone, causes 90%+ of coastal cyclone mortality',
        'Established dedicated coastal cyclone warning radar network along the eastern seaboard'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Extreme sea level events along the Andhra coast will occur with higher frequency due to sea level rise and increased cyclone intensity.',
      vulnerableHotspots: ['Krishna-Godavari Delta', 'Machilipatnam Lowlands', 'Bapatla-Chirala Belt']
    },
    sources: [srcImd, srcNdmaCyclone]
  },
  {
    id: 'delhi-yamuna-flood-1978',
    name: 'The Great Delhi & Northern Plains Yamuna Flood 1978',
    year: 1978,
    dateRange: 'September 1 – 10, 1978',
    statesAffected: ['Delhi', 'Haryana', 'Uttar Pradesh'],
    primaryLocations: ['Model Town', 'Jahangirpuri', 'Old Delhi', 'Shahdara', 'Kashmere Gate'],
    coordinates: { lat: 28.6692, lng: 77.2285 },
    category: 'flood',
    subCategory: 'Fluvial Riverine Mega-Flood & Embankment Breaches',
    description: 'In September 1978, torrential rainfall in the upper Yamuna catchments in Himachal Pradesh and Haryana triggered unprecedented discharge from the Tajewala barrage. The Yamuna at Delhi’s Old Railway Bridge soared to a historic level of 207.49 meters, submerging 43 sq km of urban Delhi, drowning 18 lives, and leaving over 250,000 people homeless in Model Town and Shahdara.',
    meteorologicalTrigger: 'Synchronous cloudbursts across the lower Himalayas coupled with continuous rainfall in Haryana plains funneling water through the Yamuna channel.',
    climateConnection: 'uncertain',
    scientificConfidence: 'medium',
    attributionEvidence: 'Historically considered a 1-in-100-year hydrological return period event, illustrating Delhi’s acute vulnerability when floodplains are colonized and natural storm drains backflow.',
    impacts: {
      deaths: 18,
      displaced: 250000,
      populationAffected: 1000000,
      economicLossINR: 175,
      infrastructureDamageSummary: 'Ring Road submerged under 4 feet of water; major water treatment plants inundated; power substations flooded.',
      agriculturalDamageSummary: 'Thousands of hectares of agricultural floodplains in Yamuna Khadar completely submerged.',
      environmentalImpactSummary: 'Severe municipal sewage overflow into drinking water distribution pipelines.'
    },
    institutionalResponse: {
      governmentAction: 'Delhi Administration erected emergency sandbag dykes and deployed 500+ army boats for rescue.',
      ndmaNdrfDeployment: 'Executed by Indian Army flood relief columns and Delhi Police.',
      earlyWarningPerformance: 'CWC river gauges gave 36 hours warning, enabling timely evacuation of low-lying Jhuggi clusters.',
      lessonsLearned: [
        'Urban settlement within active river floodplains (Khadar) inevitably leads to catastrophic inundation',
        'Need for structural channel dredging and reinforcement of Delhi Ring Road embankments',
        'City storm drains must have non-return flap valves to prevent river backflow into residential colonies'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'OBSERVED',
      projectedOutlookNote: 'Surpassed in July 2023 (when the Yamuna touched 208.66m), proving that urban concretization drastically increases flood frequency.',
      vulnerableHotspots: ['Yamuna Floodplains (Khadar)', 'East Delhi Ring Road', 'Kashmere Gate Inter-State Bus Terminus']
    },
    sources: [srcCwc, srcImd]
  },
  {
    id: 'great-india-drought-1987',
    name: 'The Great All-India Monsoon Drought 1987',
    year: 1987,
    dateRange: 'June – October 1987',
    statesAffected: ['Rajasthan', 'Gujarat', 'Maharashtra', 'Madhya Pradesh', 'Karnataka', 'Punjab', 'Haryana', 'Uttar Pradesh'],
    primaryLocations: ['Thar Desert', 'Saurashtra', 'Marathwada', 'Bundelkhand', 'Malwa Plateau'],
    coordinates: { lat: 26.9124, lng: 75.7873 },
    category: 'drought',
    subCategory: 'Centennial All-India Meteorological & Agrarian Drought',
    description: 'The 1987 southwest monsoon failure was one of the most severe pan-India droughts of the 20th century. Rainfall was deficient in 83% of the meteorological sub-divisions, with northwest India receiving 47% below normal. Massive drinking water crises paralyzed Gujarat and Rajasthan, forcing emergency cattle fodder trains and employment guarantee relief schemes.',
    meteorologicalTrigger: 'A powerful positive El Niño event combined with adverse equatorial Indian Ocean dynamics that suppressed monsoon cross-equatorial flow.',
    climateConnection: 'uncertain',
    scientificConfidence: 'high',
    attributionEvidence: 'Grounded in strong natural climate variability (El Niño Southern Oscillation), but demonstrated how compound heat and lack of precipitation deplete nationwide reservoir storages.',
    impacts: {
      deaths: 300,
      displaced: 500000,
      populationAffected: 285000000,
      economicLossINR: 2500,
      infrastructureDamageSummary: 'Hydropower generation dropped by 25%; major reservoirs like Bhakra, Ukai, and Gandhi Sagar reached dead storage levels.',
      agriculturalDamageSummary: 'Kharif food grain production declined by over 17 million tonnes; catastrophic loss of dairy cattle in western India.',
      environmentalImpactSummary: 'Severe water table drawdown and acceleration of desertification along the Aravalli fringe.'
    },
    institutionalResponse: {
      governmentAction: 'Central government launched the National Technology Mission on Drinking Water and expanded public food grain buffer distribution.',
      ndmaNdrfDeployment: 'Operated through inter-ministerial drought relief groups and state relief commissioners.',
      earlyWarningPerformance: 'Long-range monsoon forecast indicated weak performance, enabling early contingency planning for seed reserves.',
      lessonsLearned: [
        'Buffer food grain stocks (FCI) are essential to prevent famine during severe drought years',
        'Promotion of drought-tolerant traditional dryland crops (jowar, bajra, ragi) is crucial for farm resilience',
        'Decentralized watershed management is far more effective than emergency water tanker trains'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'While total monsoon precipitation is projected to increase, intra-seasonal dry spells are lengthening, heightening acute agricultural drought risks.',
      vulnerableHotspots: ['Western Rajasthan', 'Saurashtra & Kutch', 'Marathwada (MH)', 'North Karnataka']
    },
    sources: [srcImd, srcMoes]
  },
  {
    id: 'kandla-cyclone-1998',
    name: 'Gujarat Kandla Port Super Cyclone 1998',
    year: 1998,
    dateRange: 'June 4 – 9, 1998',
    statesAffected: ['Gujarat', 'Rajasthan'],
    primaryLocations: ['Kandla Port', 'Kutch', 'Jamnagar', 'Porbandar', 'Jalore'],
    coordinates: { lat: 23.0044, lng: 70.2183 },
    category: 'cyclone',
    subCategory: 'Extremely Severe Cyclonic Storm & Storm Surge',
    description: 'On June 9, 1998, an Extremely Severe Cyclonic Storm tore into the Gulf of Kutch near Kandla Port with winds exceeding 165 km/h and a 5-meter tidal surge. Over 3,000 salt-pan workers, port laborers, and informal settlers who lived on low-lying mudflats without shelter were swept away into the Arabian Sea.',
    meteorologicalTrigger: 'Rapid intensification over exceptionally warm northeastern Arabian Sea waters, making landfall during spring tide conditions.',
    climateConnection: 'amplified',
    scientificConfidence: 'medium',
    attributionEvidence: 'Historically, intense cyclones were rare in the northern Arabian Sea; post-1990 trends show a 52% increase in Arabian Sea cyclone frequency due to warming tropical waters (IITM 2020).',
    impacts: {
      deaths: 3000,
      displaced: 300000,
      populationAffected: 1200000,
      economicLossINR: 2000,
      infrastructureDamageSummary: 'Kandla Port installations heavily damaged; crude oil transmission berths submerged; transmission towers crumpled.',
      agriculturalDamageSummary: 'Thousands of acres of salt works and coastal date palm plantations ruined.',
      environmentalImpactSummary: 'Extensive mudflat erosion and marine diesel spillages inside the Gulf of Kutch.'
    },
    institutionalResponse: {
      governmentAction: 'State government launched massive ex-gratia distribution and began planning Gujarat State Disaster Management Authority (GSDMA).',
      ndmaNdrfDeployment: 'Indian Navy and Coast Guard conducted offshore search operations for missing port workers.',
      earlyWarningPerformance: 'Warnings were issued, but last-mile dissemination failed to reach transient migrant salt-pan laborers in remote pans.',
      lessonsLearned: [
        'Early warnings must reach transient, informal, and migrant laborers, not just municipal residents',
        'Industrial ports in storm-surge hazard zones require mandatory reinforced coastal storm shelters',
        'Catalyzed the formation of GSDMA following the 2001 earthquake'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'OBSERVED',
      projectedOutlookNote: 'Arabian Sea cyclogenesis is accelerating in both frequency and rapid intensification index under warming SSTs.',
      vulnerableHotspots: ['Gulf of Kutch Maritime Rim', 'Saurashtra Coast', 'Low-lying Rann of Kutch']
    },
    sources: [srcImd, srcIitmCyclone]
  },
  {
    id: 'odisha-super-cyclone-1999',
    name: 'The 1999 Odisha Super Cyclone (BOB 05B)',
    year: 1999,
    dateRange: 'October 25 – November 4, 1999 (Landfall: Oct 29)',
    statesAffected: ['Odisha', 'West Bengal'],
    primaryLocations: ['Ersama', 'Jagatsinghpur', 'Kendrapara', 'Cuttack', 'Bhubaneswar', 'Puri'],
    coordinates: { lat: 20.0800, lng: 86.5800 },
    category: 'cyclone',
    subCategory: 'Category 5 Super Cyclonic Storm with 7-Meter Storm Surge',
    description: 'The defining catastrophe of modern Indian disaster history. Making landfall near Ersama in Jagatsinghpur district with central pressure of 912 hPa and sustained wind speeds of 260 km/h, the cyclone remained stationary over coastal Odisha for over 36 hours. A colossal 7-meter storm surge penetrated 20 km inland, killing 9,887 people, destroying 1.6 million homes, and flattening coastal communications.',
    meteorologicalTrigger: 'Exceptional tropical ocean heat content in the central Bay of Bengal; system reached Super Cyclone intensity and stalled over the coast due to weak steering currents, dumping over 900 mm of torrential rain.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'Exemplified the ultimate compound coastal disaster: extreme thermodynamic energy, peak storm surge, and stationary post-landfall deluges. This single event prompted the establishment of OSDMA (1999) and the national Disaster Management Act (2005).',
    impacts: {
      deaths: 9887,
      displaced: 15000000,
      populationAffected: 19000000,
      economicLossINR: 20000,
      infrastructureDamageSummary: '2 million homes completely flattened; entire telecommunications, electrical transmission, and road networks severed; Bhubaneswar and Cuttack isolated for days.',
      agriculturalDamageSummary: 'Over 1.7 million hectares of crops destroyed; 4 lakh head of cattle died; massive soil salinization in Ersama block.',
      environmentalImpactSummary: '90 million trees uprooted; coastal casuarina shelterbelts flattened; Balukhand sanctuary ravaged.'
    },
    institutionalResponse: {
      governmentAction: 'State government founded OSDMA, India’s first autonomous state disaster management agency, and pioneered the construction of 800+ multi-purpose cyclone shelters.',
      ndmaNdrfDeployment: 'National Crisis Management Committee (NCMC) deployed 35,000 army personnel and launched Operation Sahayata.',
      earlyWarningPerformance: 'IMD tracked the cyclone via INSAT-2E, but last-mile warning dissemination failed due to lack of local emergency sirens and community volunteer networks.',
      lessonsLearned: [
        'Direct catalyst for the Disaster Management Act 2005 and the creation of NDMA and NDRF',
        'Proved that disaster risk reduction requires multi-purpose cyclone shelters, dedicated coastal embankments, and village volunteer taskforces',
        'Led to Odisha transforming from an unprepared victim to a global benchmark in zero-casualty disaster management'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Category 4 and 5 cyclones in the Bay of Bengal are projected to carry 10–20% higher precipitation rates and greater maximum wind speeds.',
      vulnerableHotspots: ['Jagatsinghpur & Ersama Belt', 'Kendrapara Lowlands', 'Puri Coastal Zone']
    },
    sources: [srcImd, srcNdmaCyclone, srcMoes]
  },
  {
    id: 'kosi-flood-2008',
    name: 'Bihar Kosi River Avulsion & Mega Flood 2008',
    year: 2008,
    dateRange: 'August 18 – October 2008',
    statesAffected: ['Bihar'],
    primaryLocations: ['Supaul', 'Madhepura', 'Saharsa', 'Araria', 'Purnea'],
    coordinates: { lat: 26.5411, lng: 86.9189 },
    category: 'flood',
    subCategory: 'Transboundary River Avulsion & Embankment Breach',
    description: 'On August 18, 2008, the Kosi River (the "Sorrow of Bihar") breached its eastern afflux embankment at Kusaha in Nepal. In an extraordinary geological event known as an avulsion, the entire river abandoned its engineered course and shifted 120 km eastwards into ancient abandoned paleochannels, submerging thousands of villages that had not experienced flooding in over 50 years.',
    meteorologicalTrigger: 'Heavy monsoon downpours in the Nepal Himalayas coupled with prolonged heavy siltation raising the riverbed higher than the surrounding floodplains.',
    climateConnection: 'amplified',
    scientificConfidence: 'medium',
    attributionEvidence: 'While the breach itself was an engineering failure on an embankment, the extreme sediment load and high peak flows are heavily influenced by changing glacial dynamics and high-intensity rainfall in the transboundary Nepal-Tibet catchments.',
    impacts: {
      deaths: 527,
      displaced: 3300000,
      populationAffected: 4500000,
      economicLossINR: 4500,
      infrastructureDamageSummary: 'Over 300,000 houses washed away; National Highway 106 and railway tracks completely snapped; towns of Madhepura and Supaul isolated under 6 to 9 feet of water.',
      agriculturalDamageSummary: '350,000 hectares of farmland choked with thick infertile coarse sand (Kosi silt), ruining agrarian livelihoods for a decade.',
      environmentalImpactSummary: 'Massive disruption of local riverine wetlands and destruction of village agroforestry.'
    },
    institutionalResponse: {
      governmentAction: 'Declared a National Calamity; mega relief camps set up housing over 400,000 displaced citizens; launched the World Bank-assisted Bihar Kosi Flood Recovery Project.',
      ndmaNdrfDeployment: 'First major large-scale deployment of the newly formed NDRF (19 battalions and Indian Navy divers deployed with 800 inflatable boats).',
      earlyWarningPerformance: 'Breach was not detected early enough by transboundary monitoring agencies, giving villagers only a few hours to escape.',
      lessonsLearned: [
        'Transboundary river management requires real-time bilateral hydrological data sharing between India and Nepal',
        'Embankments without adequate sediment flushing create perched riverbeds, making eventual breaches catastrophic',
        'Showed the indispensable role of a dedicated national specialist force (NDRF)'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Himalayan transboundary rivers will experience heightened sediment transport and erratic peak discharges due to accelerated glacier retreat.',
      vulnerableHotspots: ['Kosi River Basin (Supaul, Madhepura)', 'Gandak Embankment Zones', 'Bagmati Delta']
    },
    sources: [srcCwc, srcMoes]
  },
  {
    id: 'cyclone-aila-2009',
    name: 'Cyclone Aila & Sundarbans Salinity Crisis 2009',
    year: 2009,
    dateRange: 'May 23 – 26, 2009',
    statesAffected: ['West Bengal', 'Assam'],
    primaryLocations: ['South 24 Parganas', 'North 24 Parganas', 'Gosaba', 'Hingalganj', 'Kolkata'],
    coordinates: { lat: 21.9000, lng: 88.8000 },
    category: 'cyclone',
    subCategory: 'Severe Cyclonic Storm & Chronic Saline Inundation',
    description: 'Cyclone Aila struck the Sundarbans delta in West Bengal on May 25, 2009. While its wind speeds (110 km/h) were moderate compared to super cyclones, it generated a massive 3-to-4 meter storm surge that destroyed over 400 km of earthen river embankments, submerging hundreds of islands under brackish seawater for months and triggering long-term agrarian displacement.',
    meteorologicalTrigger: 'Monsoon-onset cyclogenesis over the central Bay of Bengal, making landfall precisely at astronomical high tide.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'The Sundarbans delta is recognized by the IPCC as one of the world’s most vulnerable regions to climate change, combining relative sea level rise (3.9 mm/yr), land subsidence, and cyclone storm surge exposure.',
    impacts: {
      deaths: 149,
      displaced: 1000000,
      populationAffected: 5100000,
      economicLossINR: 2500,
      infrastructureDamageSummary: '400 km of river embankments washed away; thousands of island tube-wells contaminated with seawater; total collapse of thatched homes.',
      agriculturalDamageSummary: 'Saline water poisoned 100,000+ hectares of paddy lands, rendering fields infertile for over 3 years and forcing massive labor out-migration.',
      environmentalImpactSummary: 'Severe tiger-human conflict escalated as Royal Bengal Tigers were displaced from flooded mangrove islands into human villages.'
    },
    institutionalResponse: {
      governmentAction: 'State government launched embankment reconstruction projects and distributed saline-tolerant traditional paddy varieties (Pokkali and Hamilton).',
      ndmaNdrfDeployment: 'NDRF and Indian Army deployed amphibian vehicles and medical relief camps across isolated islands.',
      earlyWarningPerformance: 'IMD track was accurate, but breached earthen mud dykes could not withstand the combined surge.',
      lessonsLearned: [
        'Earthen mud dykes in the Sundarbans fail repeatedly; need concrete-armored geo-textile revetments',
        'Chronic post-disaster salinity is more economically devastating to farmers than the immediate cyclone winds',
        'Preservation of dense mangrove fringes is 5x more cost-effective than continuous embankment rebuilding'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'OBSERVED',
      projectedOutlookNote: 'The Sundarbans faces compounding sea-level rise and increasing cyclone frequency, with multiple islands facing partial abandonment by 2050.',
      vulnerableHotspots: ['Sundarbans Delta Islands (Gosaba, Mousuni, Sagar)', 'Coastal East Medinipur', 'Kolkata Metropolitan Fringe']
    },
    sources: [srcImd, srcNdmaCyclone]
  },
  {
    id: 'morbi-dam-failure-1979',
    name: '1979 Gujarat Machchhu Dam Failure & Morbi Inundation',
    year: 1979,
    dateRange: 'August 11, 1979',
    statesAffected: ['Gujarat'],
    primaryLocations: ['Morbi', 'Rajkot', 'Machchhu River Basin', 'Maliya Miyana'],
    coordinates: { lat: 22.8167, lng: 70.8333 },
    category: 'flood',
    subCategory: 'Extreme Rain-Induced Dam Overtopping & Catastrophic Dam Burst',
    description: 'On August 11, 1979, unprecedented monsoon rainfall (over 600 mm in 24 hours) in the Saurashtra region overwhelmed the Machchhu-II earthen dam near Morbi. The incoming flood discharge of 14,000 m³/s overwhelmed the spillway design capacity of 5,663 m³/s, overtopping the earthen flanks. The dam collapsed, unleashing a 20-foot-high wall of water that slammed into the industrial town of Morbi within 15 minutes, killing an estimated 2,000 to 5,000 people.',
    meteorologicalTrigger: 'A stationary depression over Saurashtra discharging torrential rainfall over saturated soil, exceeding the historical probable maximum precipitation (PMP).',
    climateConnection: 'uncertain',
    scientificConfidence: 'medium',
    attributionEvidence: 'Historically documented as the worst dam-break catastrophe in modern Indian history. Highlighted that legacy hydrological design standards failed to account for extreme precipitation outliers.',
    impacts: {
      deaths: 2500,
      displaced: 150000,
      populationAffected: 300000,
      economicLossINR: 100,
      infrastructureDamageSummary: 'Morbi industrial ceramic and clock factories pulverized; entire town buried under 3 to 6 feet of mud and debris; railway bridges snapped.',
      agriculturalDamageSummary: 'Thousands of acres of fertile topsoil washed away across the Machchhu basin.',
      environmentalImpactSummary: 'River morphology permanently reshaped and massive silting of coastal estuarine zones.'
    },
    institutionalResponse: {
      governmentAction: 'State government launched massive military relief and reconstruction; pioneered India’s early state dam safety review panels.',
      ndmaNdrfDeployment: 'Pre-NDMA era; Indian Army engineers and voluntary youth organizations executed rescue and body recoveries.',
      earlyWarningPerformance: 'Telecommunications snapped before the warning could reach municipal citizens, resulting in mass casualties.',
      lessonsLearned: [
        'Dam spillway capacities must be calibrated against probable maximum precipitation (PMP), not mere historical averages',
        'Downstream river cities must have dedicated automated siren networks linked directly to dam monitoring stations',
        'Spurred the creation of the Central Dam Safety Organisation under CWC'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Projections show a significant rise in short-duration extreme downpours in Saurashtra, requiring retrofitting of aging dams.',
      vulnerableHotspots: ['Machchhu River Basin', 'Aji Basin (Rajkot)', 'Saurashtra Reservoir Clusters']
    },
    sources: [srcCwc, srcImd]
  },
  {
    id: 'bihar-mega-floods-1987',
    name: '1987 North Bihar Transboundary Monsoon Floods',
    year: 1987,
    dateRange: 'July – September 1987',
    statesAffected: ['Bihar'],
    primaryLocations: ['Saharsa', 'Katihar', 'Madhubani', 'Darbhanga', 'Samastipur', 'Muzaffarpur'],
    coordinates: { lat: 26.1542, lng: 85.8918 },
    category: 'flood',
    subCategory: 'Transboundary Fluvial Multi-Basin Inundation',
    description: 'During the monsoon of 1987, while northwest India experienced severe drought, eastern India and North Bihar faced the worst flood onslaught of the 20th century. Simultaneous swelling of the Kosi, Gandak, Bagmati, Burhi Gandak, and Kamla Balan rivers inundated 24 million people across 30 districts, causing 1,399 fatalities and submerging over 4.7 million hectares of land.',
    meteorologicalTrigger: 'Consecutive low-pressure systems stalling over the Nepal Himalayas, dumping massive precipitation in the upper catchments of North Bihar rivers.',
    climateConnection: 'uncertain',
    scientificConfidence: 'medium',
    attributionEvidence: 'Historically represented a classic monsoon trough anomaly (the "Monsoon Break" synoptic pattern, where rainfall shifts from central India to the Himalayan foothills).',
    impacts: {
      deaths: 1399,
      displaced: 8000000,
      populationAffected: 24500000,
      economicLossINR: 1200,
      infrastructureDamageSummary: 'Over 1.6 million homes damaged; eastern railway corridors severed; dozens of embankment breaches.',
      agriculturalDamageSummary: 'Total loss of Kharif paddy crop across 1.5 million hectares, leading to widespread rural malnutrition.',
      environmentalImpactSummary: 'Widespread deposition of coarse silt over productive agricultural soil.'
    },
    institutionalResponse: {
      governmentAction: 'Massive army airdrops of food grains; establishment of village relief camps and cholera quarantine centers.',
      ndmaNdrfDeployment: 'Operated through State Relief Commissioners and district magistrates.',
      earlyWarningPerformance: 'River gauge warnings were delayed due to lack of transboundary data exchange with Nepal.',
      lessonsLearned: [
        'Floods in North Bihar cannot be managed by embankments alone; requires transboundary flood warning networks',
        'Elevated community shelter mounds (Chabutras) are essential for rural floodplains',
        'Need for flood-resistant traditional floating agriculture and deep-water paddy seeds'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'IPCC AR6 projects intensified Himalayan precipitation and glacial melt, heightening transboundary flood discharge into North Bihar.',
      vulnerableHotspots: ['Kosi Basin (Supaul, Saharsa)', 'Bagmati Basin (Sitamarhi, Sheohar)', 'Kamla Balan Delta']
    },
    sources: [srcCwc, srcImd]
  },
  {
    id: 'punjab-floods-1993',
    name: '1993 Punjab Sutlej & Beas Basin Mega Floods',
    year: 1993,
    dateRange: 'July 9 – 22, 1993',
    statesAffected: ['Punjab', 'Haryana'],
    primaryLocations: ['Patiala', 'Rupnagar (Ropar)', 'Firozpur', 'Amritsar', 'Ludhiana'],
    coordinates: { lat: 30.3398, lng: 76.3869 },
    category: 'flood',
    subCategory: 'Fluvial Inundation & Dhussi Embankment Breaches',
    description: 'In July 1993, unprecedented cloudbursts in the Himachal hills coincided with relentless rainfall in the Punjab plains. Rivers Sutlej, Beas, and the seasonal Ghaggar swelled to record levels. The bursting of Dhussi bundhs (earthen river dykes) submerged over 5,000 villages across 13 districts. Patiala city was submerged under 5 to 8 feet of water when the seasonal Badi Nadi breached.',
    meteorologicalTrigger: 'Synchronized extreme downpours in Himachal catchments forcing emergency sluice gate discharges from Bhakra and Pong dams simultaneously.',
    climateConnection: 'uncertain',
    scientificConfidence: 'medium',
    attributionEvidence: 'Historical compound hydro-meteorological event exacerbated by encroachment along seasonal drains (choes) and lack of desilting of the Ghaggar river channel.',
    impacts: {
      deaths: 823,
      displaced: 1200000,
      populationAffected: 6500000,
      economicLossINR: 1500,
      infrastructureDamageSummary: 'Ropar thermal power plant flooded; Grand Trunk Road (NH-1) disrupted; extensive breaches in major irrigation canals.',
      agriculturalDamageSummary: 'Over 8 lakh hectares of prime basmati and sugarcane fields ruined; drowning of over 40,000 livestock.',
      environmentalImpactSummary: 'Severe water table surge and secondary salinization in southwest Punjab.'
    },
    institutionalResponse: {
      governmentAction: 'Mobilization of 40 Army columns with assault boats; Punjab government initiated long-term Ghaggar channelization projects.',
      ndmaNdrfDeployment: 'Pre-NDMA disaster relief managed by Army Western Command and Punjab Police.',
      earlyWarningPerformance: 'Dam releases were communicated to district headquarters, but village evacuation lacked motorized transit.',
      lessonsLearned: [
        'Regulated reservoir release schedules are critical to prevent sudden downstream wall-of-water surges',
        'Seasonal rivulets (Ghaggar, Badi Nadi) require dedicated embankments and regular silt clearing',
        'Agricultural drainage systems must be cleared before the onset of monsoon'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Projections indicate higher frequency of compound rain bursts over the Shivalik foothills, increasing flash flood peaks in Punjab.',
      vulnerableHotspots: ['Ghaggar Basin (Patiala, Sangrur)', 'Sutlej Belt (Rupnagar, Anandpur Sahib)', 'Fazilka Border Reach']
    },
    sources: [srcCwc, srcImd]
  },
  {
    id: 'haryana-rohtak-floods-1995',
    name: '1995 Rohtak & Northern Haryana Chronic Waterlogging Deluge',
    year: 1995,
    dateRange: 'September 1 – 20, 1995',
    statesAffected: ['Haryana'],
    primaryLocations: ['Rohtak', 'Bhiwani', 'Jhajjar', 'Hisar', 'Sonipat'],
    coordinates: { lat: 28.8955, lng: 76.6066 },
    category: 'flood',
    subCategory: 'Endorheic Depression Inundation & Chronic Soil Waterlogging',
    description: 'In September 1995, continuous heavy monsoon downpours dumped over 450 mm of rain within 48 hours over central and southern Haryana. Because of the region’s bowl-like inland saucer depression and impermeable subterranean clay pan, rainwater had no natural gravity outlet. The city of Rohtak and hundreds of villages remained submerged under 3 to 6 feet of stagnant floodwaters for over two months.',
    meteorologicalTrigger: 'A late-monsoon deep depression stationary over Haryana colliding with high local water tables caused by decades of intensive canal irrigation.',
    climateConnection: 'uncertain',
    scientificConfidence: 'medium',
    attributionEvidence: 'The disaster was a classic example of an anthropogenic compound risk: extreme natural precipitation combined with high water-logging due to unlined canal networks and blocked natural palaeo-drainage channels.',
    impacts: {
      deaths: 112,
      displaced: 350000,
      populationAffected: 2200000,
      economicLossINR: 850,
      infrastructureDamageSummary: 'Rohtak city waterworks, colleges, and hospital wards submerged for weeks; 60,000 houses collapsed due to foundation liquefaction.',
      agriculturalDamageSummary: 'Over 4 lakh hectares of standing cotton and bajra completely destroyed; soil salinity surged as water evaporated.',
      environmentalImpactSummary: 'Severe mosquito-borne malaria epidemic and groundwater contamination.'
    },
    institutionalResponse: {
      governmentAction: 'Haryana Government deployed 3,000 high-capacity diesel water pumps to lift floodwaters into Drain No. 8 and the Yamuna.',
      ndmaNdrfDeployment: 'Assisted by military engineering units and Indian Red Cross emergency water purification plants.',
      earlyWarningPerformance: 'Rainfall was forecasted, but the lack of drainage outlets prevented any operational flood evacuation.',
      lessonsLearned: [
        'In saucer-shaped inland basins, storm drainage must include dedicated lift-pumping stations',
        'Canal seepage control through geo-membrane lining is essential to prevent rising water tables',
        'Natural drainage depressions (Jheels) must not be urbanized or blocked'
      ]
    },
    futureOutlook: {
      trendDirection: 'Stable',
      confidenceTag: 'OBSERVED',
      projectedOutlookNote: 'Haryana’s central plain continues to face urban waterlogging during short-duration high-intensity rainfall spikes.',
      vulnerableHotspots: ['Rohtak-Jhajjar Saucer Depression', 'Hisar Canal Command', 'Gurugram Najafgarh Basin']
    },
    sources: [srcCwc, srcImd]
  },
  {
    id: 'assam-floods-2004',
    name: '2004 Assam Brahmaputra & Barak Catastrophic Inundation',
    year: 2004,
    dateRange: 'June 25 – August 10, 2004',
    statesAffected: ['Assam'],
    primaryLocations: ['Dhemaji', 'Barpeta', 'Dhubri', 'Kamrup', 'Morigaon', 'Cachar'],
    coordinates: { lat: 26.2006, lng: 92.9376 },
    category: 'flood',
    subCategory: 'Compound Fluvial Flood & Major Embankment Collapses',
    description: 'The 2004 Assam floods were among the most devastating in the Brahmaputra valley’s recorded history. Incessant monsoon rains across the eastern Himalayas triggered massive river discharges that breached 150+ earthen dykes in 28 out of 31 districts. Over 12 million people were affected, 251 people died, and 65% of Kaziranga National Park was inundated, drowning over 1,000 wild animals.',
    meteorologicalTrigger: 'Repeated monsoon depressions moving across the Bay of Bengal into the Assam-Arunachal hills, discharging continuous heavy rains onto steep saturated catchments.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'The Brahmaputra basin is one of the world’s most dynamic hydrological systems; accelerated glacier and snowpack melt in Tibet combined with warming-driven heavy rainfall spikes has amplified peak discharge variability (IPCC AR6).',
    impacts: {
      deaths: 251,
      displaced: 3200000,
      populationAffected: 12400000,
      economicLossINR: 2800,
      infrastructureDamageSummary: 'Over 150 embankment breaches; National Highway 37 snapped in 20 locations; 1,800 schools and health sub-centers damaged.',
      agriculturalDamageSummary: 'Over 1.2 million hectares of standing Sali paddy submerged; colossal livestock mortality.',
      environmentalImpactSummary: 'Severe animal mortality in Kaziranga National Park, including one-horned rhinos, elephants, and swamp deer.'
    },
    institutionalResponse: {
      governmentAction: 'State government launched massive relief operations; Indian Armed Forces deployed helicopters for continuous food drop sorties.',
      ndmaNdrfDeployment: 'Pre-dates NDRF; rescue managed by Army Eastern Command and village boat committees.',
      earlyWarningPerformance: 'CWC river gauges tracked danger levels, but rapid night-time embankment failures gave little escape time.',
      lessonsLearned: [
        'Earthen embankments in high-seismic, braided river systems have finite lifespans and require modern geo-textile reinforcement',
        'National Parks need elevated artificial highlands (Mounds) for wildlife refuge during flood seasons',
        'Community early warning through village sirens saves human lives'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Projections show a 15–25% increase in high-flow days in the Brahmaputra basin under climate change scenarios.',
      vulnerableHotspots: ['Majuli Island (Jorhat)', 'Dhemaji & Lakhimpur Catchments', 'Barpeta & Dhubri Lower Plains']
    },
    sources: [srcCwc, srcImd, srcMoes]
  },
  {
    id: 'barmer-desert-flood-2006',
    name: '2006 Barmer Thar Desert Flash Floods & Kawas Inundation',
    year: 2006,
    dateRange: 'August 16 – 25, 2006',
    statesAffected: ['Rajasthan'],
    primaryLocations: ['Barmer', 'Kawas', 'Malo', 'Jaisalmer', 'Jalore'],
    coordinates: { lat: 25.7500, lng: 71.4000 },
    category: 'extreme_rainfall',
    subCategory: 'Arid Desert Flash Flood & Bentonite Subterranean Ponding',
    description: 'In August 2006, an extraordinary monsoon depression traversed the Great Thar Desert. The arid district of Barmer, which receives barely 277 mm of rain in an entire year, was hammered by over 580 mm of rain in 3 days. Low-lying desert villages like Kawas and Malo were submerged under 15 feet of water that could not seep into the ground due to subterranean impermeable bentonite clay sheets, turning the desert into an inland lake for over six months.',
    meteorologicalTrigger: 'A deep monsoon depression tracking an uncharacteristically westward trajectory deep into the Thar desert, fueled by anomalous moisture transport from the northern Arabian Sea.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'IPCC AR6 identifies shifting monsoon depression trajectories as an observed signature of changing tropical circulation, bringing unprecedented convective moisture bursts into historically hyper-arid zones.',
    impacts: {
      deaths: 139,
      displaced: 50000,
      populationAffected: 450000,
      economicLossINR: 1200,
      infrastructureDamageSummary: 'Kawas railway station completely submerged for 6 months; National Highway 15 buried under water; hundreds of rural mud-brick Dhani homes collapsed.',
      agriculturalDamageSummary: 'Destruction of standing bajra and moth bean crops; loss of over 10,000 desert cattle and camels.',
      environmentalImpactSummary: 'Altered hydrogeology of desert depression zones; mobilization of saline gypsum layers.'
    },
    institutionalResponse: {
      governmentAction: 'Indian Army launched Operation Sahayata; military engineers constructed bypass channels and operated water siphons for months.',
      ndmaNdrfDeployment: 'Army columns deployed motor boats across sand dunes to rescue marooned villagers.',
      earlyWarningPerformance: 'Local residents had no cultural memory of flooding in the desert and disregarded initial heavy rain advisories.',
      lessonsLearned: [
        'Arid ecosystems require flash-flood preparedness as climate change shifts monsoon tracks westward',
        'Subterranean geological mapping (bentonite/gypsum layers) is essential before planning infrastructure in desert zones',
        'Desert architecture must incorporate water-resistant foundation footings'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Arabian Sea deep depressions entering western Rajasthan are projected to occur more frequently, compounding extreme heat with sudden flash deluges.',
      vulnerableHotspots: ['Kawas-Uttarlai Low Basin (Barmer)', 'Luni River Basin', 'Jalore-Sirohi Plain']
    },
    sources: [srcImd, srcMoes]
  },
  {
    id: 'karnataka-floods-2009',
    name: '2009 North Karnataka Krishna Basin Flash Floods',
    year: 2009,
    dateRange: 'September 30 – October 5, 2009',
    statesAffected: ['Karnataka', 'Andhra Pradesh'],
    primaryLocations: ['Belagavi', 'Bagalkot', 'Bijapur (Vijayapura)', 'Raichur', 'Gadag', 'Koppal'],
    coordinates: { lat: 16.1800, lng: 75.7000 },
    category: 'flood',
    subCategory: 'Upper Krishna Basin Cloudburst & Reservoir Inundation',
    description: 'In late September 2009, a deep depression stalled over the northern Karnataka Deccan plateau, dumping over 400 mm of torrential rain in 48 hours onto a region that had suffered drought for months. Rivers Krishna, Malaprabha, Ghataprabha, and Tungabhadra surged catastrophically. In Bagalkot, Belagavi, and Raichur, over 229 people perished and 3.5 lakh houses collapsed in the worst flood in northern Karnataka in over a century.',
    meteorologicalTrigger: 'A slow-moving cyclonic depression originating in the Bay of Bengal traversing the Deccan plateau, releasing extreme precipitation over the dry black-cotton soil belt.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'Black-cotton soils have very low permeability; when subjected to sudden extreme rainfall spikes, surface runoff is instantaneous, creating flash deluges even in semi-arid zones.',
    impacts: {
      deaths: 229,
      displaced: 1800000,
      populationAffected: 4500000,
      economicLossINR: 16500,
      infrastructureDamageSummary: '3.5 lakh homes destroyed or washed away; historic temples in Hampi and Pattadakal inundated; 1,200 bridges and culverts damaged.',
      agriculturalDamageSummary: 'Complete wipeout of standing maize, cotton, and sunflower crops across 25 lakh hectares.',
      environmentalImpactSummary: 'Severe soil erosion across the semi-arid northern plateau.'
    },
    institutionalResponse: {
      governmentAction: 'Karnataka Government launched the "Aasare" scheme to reconstruct 60,000 homes on higher elevated ground; Indian Air Force conducted 400+ rescue sorties.',
      ndmaNdrfDeployment: 'NDRF deployed 12 battalions across the Krishna river basin.',
      earlyWarningPerformance: 'Rapid deluge overwhelmed local hydrological gauges within hours.',
      lessonsLearned: [
        'Semi-arid regions require flood contingency plans alongside traditional drought mitigation',
        'Black-cotton soil settlements need elevated concrete foundations rather than traditional adobe bricks',
        'Real-time joint reservoir management between Maharashtra and Karnataka dams on the Krishna river'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Projections show a tendency for semi-arid interior Karnataka to experience longer dry spells punctuated by intense 1-day extreme rainfall spikes.',
      vulnerableHotspots: ['Krishna-Malaprabha Confluence (Bagalkot)', 'Belagavi Chikkodi Basin', 'Raichur Tungabhadra Belt']
    },
    sources: [srcCwc, srcImd, srcMoes]
  }
];
