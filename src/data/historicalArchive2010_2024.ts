import { HistoricalDisaster } from '../types';
import { SOURCES_REPOSITORY } from './sources';

const srcMoes = SOURCES_REPOSITORY[0];
const srcImd = SOURCES_REPOSITORY[1];
const srcNdmaHeat = SOURCES_REPOSITORY[4];
const srcNdmaCyclone = SOURCES_REPOSITORY[5];
const srcCwc = SOURCES_REPOSITORY[6];
const srcIsroLandslide = SOURCES_REPOSITORY[7];
const srcIitmCyclone = SOURCES_REPOSITORY[8];
const srcWorldBank = SOURCES_REPOSITORY[9];

export const ARCHIVE_2010_2024: HistoricalDisaster[] = [
  {
    id: 'leh-cloudburst-2010',
    name: 'Leh Ladakh Arid Cloudburst & Debris Flow 2010',
    year: 2010,
    dateRange: 'August 6, 2010',
    statesAffected: ['Ladakh', 'Jammu & Kashmir'],
    primaryLocations: ['Leh', 'Choglamsar', 'Saboo', 'Nimu', 'Shey'],
    coordinates: { lat: 34.1526, lng: 77.5771 },
    category: 'glof',
    subCategory: 'High-Altitude Cold-Desert Cloudburst & Mud-Bouldered Surge',
    description: 'During the night of August 6, 2010, an unprecedented intense cloudburst (over 150 mm in 2 hours) struck the cold desert town of Leh and neighboring Choglamsar. In an ecosystem accustomed to less than 100 mm of rain annually, torrents of mud, gravel, and colossal boulders tore through mud-brick settlements, burying the main hospital and military barracks.',
    meteorologicalTrigger: 'An unusually northward-penetrating monsoon depression interacting with high-altitude Himalayan topography in the trans-Himalayan rain shadow.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'IPCC AR6 highlights that high-altitude cold deserts are experiencing shifting precipitation regimes with increasing convective cloudburst events as tropical moisture penetrates deeper into the Himalayas.',
    impacts: {
      deaths: 255,
      displaced: 15000,
      populationAffected: 50000,
      economicLossINR: 500,
      infrastructureDamageSummary: 'SNM Hospital submerged under 6 feet of mud; Leh-Manali and Leh-Srinagar highways completely severed; 1,400 homes destroyed.',
      agriculturalDamageSummary: 'Alluvial barley and apricot terraces suffocated under 3 to 5 feet of rocky sterile silt.',
      environmentalImpactSummary: 'Severe alteration of fragile dry valleys and destruction of traditional water-harvesting glacial canals (Zings).'
    },
    institutionalResponse: {
      governmentAction: 'Massive mobilization by Indian Army 14 Corps in "Operation Vasundhara" for rescue and hospital reconstruction.',
      ndmaNdrfDeployment: 'NDRF deployed canine teams and ground-penetrating radar to locate victims buried under mud.',
      earlyWarningPerformance: 'No Doppler weather radar existed in Ladakh at the time; zero advance warning.',
      lessonsLearned: [
        'Cold-desert mud-brick architecture is highly vulnerable to heavy liquid precipitation',
        'Mandatory ban on construction on active alluvial fan debris corridors',
        'Deployment of X-band Doppler radar at Leh airport to track localized convective storm clouds'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Projections show increased convective precipitation over trans-Himalayan Ladakh, altering its historic cold-arid climate.',
      vulnerableHotspots: ['Choglamsar Alluvial Fan', 'Leh Town Drainage Nullahs', 'Zanskar River Basin']
    },
    sources: [srcImd, srcMoes]
  },
  {
    id: 'kashmir-floods-2014',
    name: 'Jammu & Kashmir Mega Valley Floods 2014',
    year: 2014,
    dateRange: 'September 2 – 12, 2014',
    statesAffected: ['Jammu & Kashmir'],
    primaryLocations: ['Srinagar', 'Anantnag', 'Pulwama', 'Baramulla', 'Jammu'],
    coordinates: { lat: 34.0837, lng: 74.7973 },
    category: 'flood',
    subCategory: 'Jhelum River Basin Inundation & Wetland Encroachment Crisis',
    description: 'In September 2014, the Kashmir Valley received more than 550% excess rainfall in a continuous 5-day spell. The Jhelum River overflowed its embankments, causing the worst flooding in Kashmir in over 100 years. Srinagar’s commercial center (Lal Chowk, Rajbagh, Jawahar Nagar) was submerged under 12 to 18 feet of water for over two weeks, marooning hundreds of thousands on rooftops.',
    meteorologicalTrigger: 'Compound interaction of an intense late-monsoon western depression with a Mediterranean Western Disturbance stalled over the Pir Panjal mountains.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'While extreme rainfall triggered the flood, catastrophic water retention was caused by human destruction of the valley’s natural sponge wetlands (Wular, Dal, and Anchar lakes shrunk by 40–50% over decades due to urbanization).',
    impacts: {
      deaths: 277,
      displaced: 1200000,
      populationAffected: 2500000,
      economicLossINR: 10000,
      infrastructureDamageSummary: 'Srinagar city underwater for 14 days; civil secretariat, high court, and hospitals submerged; telecommunications collapsed completely.',
      agriculturalDamageSummary: 'Destruction of world-famous apple orchards, walnut groves, and saffron fields in Pampore.',
      environmentalImpactSummary: 'Severe waterlogging and massive septic sewage overflow contaminated urban drinking wells for months.'
    },
    institutionalResponse: {
      governmentAction: 'Indian Armed Forces launched "Operation Megh Rahat", rescuing over 290,000 citizens with 80+ helicopters and rescue boats.',
      ndmaNdrfDeployment: 'NDRF deployed 23 battalions with satellite SATPHONE terminals to restore contact with isolated hospitals.',
      earlyWarningPerformance: 'CWC flood warnings were issued, but local drainage spill channels were severely clogged and could not convey the discharge.',
      lessonsLearned: [
        'Urban lakes and marshes in river basins must be legally protected as vital flood mitigation buffers',
        'Critical urban infrastructure (hospitals, power stations, telecom nodes) must be located on high ground',
        'Need for a dedicated flood spill channel for the Jhelum river capable of discharging 60,000 cusecs'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Compound monsoon-Western Disturbance systems are projected to become more intense over the northern Himalayas.',
      vulnerableHotspots: ['Jhelum River Floodplains', 'Srinagar Low-Lying Neighborhoods (Rajbagh, Bemina)', 'Wular Lake Catchment']
    },
    sources: [srcCwc, srcImd, srcMoes]
  },
  {
    id: 'cyclone-hudhud-2014',
    name: 'Cyclone Hudhud Visakhapatnam Direct Hit 2014',
    year: 2014,
    dateRange: 'October 7 – 14, 2014 (Landfall: Oct 12)',
    statesAffected: ['Andhra Pradesh', 'Odisha'],
    primaryLocations: ['Visakhapatnam', 'Vizianagaram', 'Srikakulam', 'Koraput'],
    coordinates: { lat: 17.6868, lng: 83.2185 },
    category: 'cyclone',
    subCategory: 'Category 4 Very Severe Cyclonic Storm (VSCS)',
    description: 'Cyclone Hudhud made direct landfall precisely over the major industrial port city of Visakhapatnam on October 12, 2014, with sustained winds of 185 km/h gusting to 215 km/h. It shattered the modern city infrastructure, ripped the roof off Visakhapatnam International Airport, destroyed the Eastern Naval Command naval base installations, and uprooted over 500,000 urban trees.',
    meteorologicalTrigger: 'Intense cyclogenesis in the Andaman Sea that rapidly escalated over warm sea surface temperatures (SST > 30°C) with low vertical wind shear.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'Demonstrated the modern threat of high-intensity cyclones scoring direct bullseye hits on dense, multi-billion-dollar coastal industrial smart cities.',
    impacts: {
      deaths: 46,
      displaced: 500000,
      populationAffected: 2100000,
      economicLossINR: 21900,
      infrastructureDamageSummary: 'Visakhapatnam airport terminal roof destroyed; 40,000 power transmission poles flattened; naval base and steel plant operations shut down.',
      agriculturalDamageSummary: 'Widespread loss of horticultural crops, banana plantations, and cashews in northern coastal Andhra.',
      environmentalImpactSummary: 'Kailasagiri and Kambalakonda urban wildlife sanctuary suffered 80% tree cover loss.'
    },
    institutionalResponse: {
      governmentAction: 'Andhra Pradesh government utilized GIS spatial mapping and pre-emptively deployed 42 NDRF/SDRF teams and heavy earthmovers.',
      ndmaNdrfDeployment: 'Rapid clearance of highway debris restored connectivity to Visakhapatnam within 36 hours.',
      earlyWarningPerformance: 'IMD predicted the exact landfall location and hour with remarkable 15 km precision.',
      lessonsLearned: [
        'Airport terminals and industrial coastal structures must be engineered to Category 4 aerodynamic standards',
        'Underground coastal electrical ducting is mandatory for industrial coastal megacities',
        'Early evacuation saved thousands of lives, proving that modern warning systems work when combined with political will'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Bay of Bengal cyclonic storms carry greater kinetic energy, posing catastrophic risks to growing coastal industrial clusters.',
      vulnerableHotspots: ['Visakhapatnam Industrial Port', 'Kakinada Seaport Corridor', 'Srikakulam Coastline']
    },
    sources: [srcImd, srcNdmaCyclone]
  },
  {
    id: 'cyclone-ockhi-2017',
    name: 'Cyclone Ockhi Rapid Intensification & Marine Crisis 2017',
    year: 2017,
    dateRange: 'November 29 – December 6, 2017',
    statesAffected: ['Kerala', 'Tamil Nadu', 'Lakshadweep'],
    primaryLocations: ['Kanyakumari', 'Thiruvananthapuram (Vizhinjam)', 'Kollam', 'Lakshadweep Islands'],
    coordinates: { lat: 8.0883, lng: 77.5385 },
    category: 'cyclone',
    subCategory: 'Rapidly Intensifying Arabian Sea Very Severe Cyclonic Storm',
    description: 'Cyclone Ockhi originated as a weak depression over Sri Lanka and rapidly intensified into a Very Severe Cyclonic Storm within 36 hours off the coast of Kanyakumari and southern Kerala. The lightning-fast intensification caught thousands of deep-sea artisanal fishermen off guard in motorized skiffs beyond VHF radio range, resulting in 365 fishermen dead or missing at sea.',
    meteorologicalTrigger: 'Exceptionally high ocean heat content in the southern Arabian Sea and Comorin sea belt, providing explosive thermodynamic fueling.',
    climateConnection: 'direct',
    scientificConfidence: 'high',
    attributionEvidence: 'Published studies (IITM / Nature Climate Change) proved that the Arabian Sea has warmed at nearly triple the rate of the Indian Ocean average, fueling a 52% surge in rapid cyclonic intensification near peninsular coasts.',
    impacts: {
      deaths: 365,
      displaced: 35000,
      populationAffected: 500000,
      economicLossINR: 2000,
      infrastructureDamageSummary: 'Lakshadweep island communication towers and water desalination plants battered; coastal roads in Kanyakumari severed.',
      agriculturalDamageSummary: 'Rubber and banana plantations in Kanyakumari completely flattened.',
      environmentalImpactSummary: 'Severe loss of coral reefs in Lakshadweep archipelago due to physical wave battering.'
    },
    institutionalResponse: {
      governmentAction: 'Massive offshore search-and-rescue mission by Indian Navy, Coast Guard, and Air Force scanning 500,000 sq km of ocean.',
      ndmaNdrfDeployment: 'NDRF deployed in coastal fishing hamlets for community support and trauma counseling.',
      earlyWarningPerformance: 'Because system developed in less than 24 hours just offshore, conventional warning bulletins failed to reach vessels beyond 20 nautical miles.',
      lessonsLearned: [
        'Prompted the development of the "GEMINI" satellite-based device using ISRO GAGAN satellites to broadcast emergency cyclone alerts to deep-sea fishermen',
        'Mandated NavIC transponders on all deep-sea fishing trawlers',
        'Emphasized that rapid intensification is the new climate-driven reality in the Arabian Sea'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'OBSERVED',
      projectedOutlookNote: 'Rapid intensification events (<24 hours from depression to severe storm) in the Arabian Sea have increased threefold over the past 40 years.',
      vulnerableHotspots: ['Southern Kerala Coastal Belt (Vizhinjam to Kollam)', 'Kanyakumari District', 'Lakshadweep Coral Atolls']
    },
    sources: [srcImd, srcIitmCyclone, srcMoes]
  },
  {
    id: 'cyclone-tauktae-2021',
    name: 'Cyclone Tauktae Arabian Sea Mega Storm 2021',
    year: 2021,
    dateRange: 'May 14 – 19, 2021 (Landfall: May 17)',
    statesAffected: ['Gujarat', 'Maharashtra', 'Goa', 'Karnataka', 'Kerala'],
    primaryLocations: ['Saurashtra (Una, Diu, Amreli)', 'Mumbai Offshore (Bombay High)', 'Raigad'],
    coordinates: { lat: 20.7500, lng: 71.0000 },
    category: 'cyclone',
    subCategory: 'Extremely Severe Cyclonic Storm (ESCS)',
    description: 'Cyclone Tauktae was the strongest tropical cyclone to strike the Gujarat coast since the 1998 Kandla disaster. Packing sustained winds of 185–195 km/h, it raked the entire western coastline of India, causing heavy casualties offshore at the Bombay High oil fields when the accommodation barge P305 sank, killing 86 offshore workers.',
    meteorologicalTrigger: 'Record-high SSTs in the Arabian Sea (31°C) providing continuous energy for an exceptionally long northward track parallel to the coast.',
    climateConnection: 'direct',
    scientificConfidence: 'high',
    attributionEvidence: 'Peer-reviewed studies confirm Tauktae was an emblem of climate change in the Arabian Sea: elevated heat content allows cyclones to maintain intensity while traveling north rather than dissipating rapidly.',
    impacts: {
      deaths: 169,
      displaced: 250000,
      populationAffected: 3000000,
      economicLossINR: 15000,
      infrastructureDamageSummary: 'Over 16,000 houses destroyed in Saurashtra; 2,500 electricity substations damaged; Barge P305 sank off Mumbai coast.',
      agriculturalDamageSummary: 'Complete destruction of the world-renowned Kesar mango orchards in Gir-Somnath and Junagadh.',
      environmentalImpactSummary: 'Damage to Asiatic Lion habitat trees in Gir National Park, though lion mortality was averted.'
    },
    institutionalResponse: {
      governmentAction: 'Gujarat administration evacuated over 200,000 citizens from coastal areas within 24 hours during the height of the COVID-19 pandemic.',
      ndmaNdrfDeployment: 'Historic offshore rescue operation by Indian Navy warships (INS Kochi, INS Kolkata) in 8-meter waves.',
      earlyWarningPerformance: 'IMD landfall forecasting was accurate 5 days ahead, but offshore private maritime compliance failures led to the barge tragedy.',
      lessonsLearned: [
        'Mandatory de-manning of all offshore oil rigs and accommodation barges at least 72 hours before a Category 3+ cyclone approaches',
        'COVID-19 protocols during mass evacuation (quarantine centers within cyclone shelters)',
        'Strengthening of rural power transmission poles with spun concrete poles in cyclone-prone Saurashtra'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'OBSERVED',
      projectedOutlookNote: 'Arabian Sea cyclones are intensifying faster and lasting longer, threatening critical offshore energy assets.',
      vulnerableHotspots: ['Saurashtra Coast (Gir Somnath, Bhavnagar)', 'Mumbai Maritime Infrastructure', 'Diu Archipelago']
    },
    sources: [srcImd, srcIitmCyclone, srcMoes]
  },
  {
    id: 'assam-silchar-flood-2022',
    name: 'Assam Silchar Urban Deluge & Brahmaputra Mega Floods 2022',
    year: 2022,
    dateRange: 'May 14 – July 15, 2022',
    statesAffected: ['Assam', 'Meghalaya'],
    primaryLocations: ['Silchar (Cachar)', 'Barpeta', 'Dhubri', 'Dima Hasao', 'Nagaon'],
    coordinates: { lat: 24.8333, lng: 92.7789 },
    category: 'flood',
    subCategory: 'Compound Fluvial Flood & Urban Dyke Breach',
    description: 'In June 2022, consecutive waves of torrential monsoon rains over the Meghalaya hills (Mawsynram recorded over 1,000 mm in 2 days) caused catastrophic flooding in Assam. In Silchar, the commercial hub of Barak Valley, an illegal breach in the Bethukandi dyke allowed the raging Barak River to roar directly into the city, submerging 90% of the town under 10–14 feet of water for over 10 days.',
    meteorologicalTrigger: 'Extreme southwesterly monsoon moisture advection colliding with the steep Meghalaya plateau, creating continuous cloudburst-level downpours.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'Extreme rainfall events over northeast India during pre-monsoon and early monsoon have intensified due to warmer Bay of Bengal evaporation providing unprecedented moisture loads.',
    impacts: {
      deaths: 192,
      displaced: 3500000,
      populationAffected: 8900000,
      economicLossINR: 10000,
      infrastructureDamageSummary: 'Silchar city completely cut off without electricity or drinking water for 12 days; Dima Hasao railway station buried in mudslides.',
      agriculturalDamageSummary: 'Over 250,000 hectares of cropland damaged; thousands of cattle drowned across the Brahmaputra valley.',
      environmentalImpactSummary: 'Kaziranga National Park flooded; dozens of rhinos and deer forced to cross national highway to escape drowning.'
    },
    institutionalResponse: {
      governmentAction: 'Indian Air Force deployed heavy transport planes to air-drop clean drinking water and food packets onto Silchar rooftops.',
      ndmaNdrfDeployment: 'NDRF and SDRF deployed over 120 rescue boats in the narrow, submerged urban lanes of Silchar.',
      earlyWarningPerformance: 'Rainfall alerts were accurate, but municipal dyke integrity failed due to human tampering and inadequate river engineering.',
      lessonsLearned: [
        'Urban embankments and river dykes must be treated as critical national infrastructure with round-the-clock security and CCTV monitoring',
        'Megacities in river basins need dedicated elevated drinking water storage towers that remain operational during total ground-level inundation',
        'Restoration of natural oxbow lakes and wetlands in the Barak and Brahmaputra valleys'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Pre-monsoon and early-monsoon heavy precipitation events in Assam and Meghalaya are projected to rise by 20–30%.',
      vulnerableHotspots: ['Barak Valley (Silchar, Karimganj)', 'Lower Brahmaputra (Barpeta, Dhubri)', 'Dima Hasao Hill Slopes']
    },
    sources: [srcCwc, srcImd, srcMoes]
  },
  {
    id: 'delhi-record-flood-2023',
    name: 'Delhi Record Yamuna River Inundation 2023 (208.66m)',
    year: 2023,
    dateRange: 'July 9 – 16, 2023',
    statesAffected: ['Delhi', 'Haryana', 'Himachal Pradesh'],
    primaryLocations: ['Red Fort Ring Road', 'Kashmere Gate ISBT', 'Supreme Court Ring', 'Civil Lines', 'Monastery Market'],
    coordinates: { lat: 28.6562, lng: 77.2410 },
    category: 'flood',
    subCategory: 'Compound Fluvial Flood & Urban Regulator Gate Failure',
    description: 'In July 2023, following record-breaking rainfall across Himachal Pradesh and Haryana, the Yamuna River at Delhi smashed all historical records, reaching a peak level of 208.66 meters on July 13 (surpassing the 1978 record of 207.49m). Water breached drainage regulators, entering the Supreme Court complex, flooding the historic Red Fort moat, and submerging the Kashmere Gate ISBT bus terminal.',
    meteorologicalTrigger: 'Compound heavy rainfall in the upper Yamuna catchments (over 300 mm in 48 hours) combined with localized urban cloudbursts in Delhi NCR.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'While river discharge was not the absolute highest in volume, the river level reached an all-time record because decades of siltation, bridge piers, and floodplain concretization severely restricted the channel cross-section.',
    impacts: {
      deaths: 8,
      displaced: 27000,
      populationAffected: 250000,
      economicLossINR: 1500,
      infrastructureDamageSummary: 'Wazirabad and Chandrawal water treatment plants submerged, cutting off drinking water to 25% of Delhi; Ring Road closed for days.',
      agriculturalDamageSummary: 'Complete destruction of thousands of acres of organic vegetables and nurseries grown in the Yamuna Khadar floodplains.',
      environmentalImpactSummary: 'Severe backflow of toxic untreated industrial drain water from Najafgarh drain into residential colonies.'
    },
    institutionalResponse: {
      governmentAction: 'Delhi Government deployed Indian Army engineers to blast open jammed gates at the ITO barrage to restore outflow.',
      ndmaNdrfDeployment: 'NDRF deployed 16 rescue teams with motorized boats across Yamuna Khadar colonies, rescuing stranded cattle and citizens.',
      earlyWarningPerformance: 'CWC flood trajectory models accurately forecasted the peak, giving 24 hours to evacuate low-lying slum dwellers.',
      lessonsLearned: [
        'Urban river regulators and barrage gates must undergo mandatory pre-monsoon desilting and operational testing',
        'The Yamuna floodplain cannot be treated as real estate; natural retention space is essential to prevent urban heartland flooding',
        'Need for non-return valves on all 22 major storm drains entering the Yamuna'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'OBSERVED',
      projectedOutlookNote: 'Intense short-duration rainfall over the northwest Himalayas is creating higher peak flow spikes into the Yamuna basin.',
      vulnerableHotspots: ['Yamuna Floodplain (Khadar)', 'Civil Lines Ring Road', 'ITO Barrage Junction']
    },
    sources: [srcCwc, srcImd]
  },
  {
    id: 'cyclone-michaung-2023',
    name: 'Cyclone Michaung & Chennai Industrial Deluge 2023',
    year: 2023,
    dateRange: 'December 1 – 6, 2023',
    statesAffected: ['Tamil Nadu', 'Andhra Pradesh'],
    primaryLocations: ['Chennai', 'Tiruvallur', 'Kanchipuram', 'Bapatla', 'Nellore'],
    coordinates: { lat: 13.0827, lng: 80.2707 },
    category: 'cyclone',
    subCategory: 'Stationary Coastal Cyclonic Storm & Extreme Urban Deluge',
    description: 'Cyclone Michaung stalled barely 90 km off the Chennai coast for nearly 24 hours in early December 2023, dumping 450 to 500 mm of torrential rain across Chennai and Tiruvallur. The extreme downpour caused catastrophic urban flooding in suburban industrial zones (Tambaram, Velachery, Ambattur, and Ennore), trapping thousands in their homes and shutting down automotive factories.',
    meteorologicalTrigger: 'A quasi-stationary cyclonic storm with continuous spiral rainbands pumping tropical moisture directly into coastal Tamil Nadu.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'The deceleration (slowing forward translation speed) of tropical cyclones near coastlines is an observed global warming trend (Nature), causing storms to dump catastrophic rainfall volumes over the same spot.',
    impacts: {
      deaths: 17,
      displaced: 40000,
      populationAffected: 2000000,
      economicLossINR: 5000,
      infrastructureDamageSummary: 'Ennore oil refinery suffered oil spillage into the Kosasthalaiyar river; automotive manufacturing plants flooded; power shutdown for 4 days.',
      agriculturalDamageSummary: 'Severe waterlogging in paddy fields across Tiruvallur and southern Andhra districts.',
      environmentalImpactSummary: 'Severe crude oil spillage into Ennore creek severely damaged mangrove habitats and killed hundreds of thousands of fish.'
    },
    institutionalResponse: {
      governmentAction: 'Tamil Nadu Government deployed 1,000+ motorized suction pumps and organized massive community food kitchens.',
      ndmaNdrfDeployment: 'NDRF and Indian Army deployed high-clearance inflatable boats to rescue isolated IT workers and elderly citizens in Velachery.',
      earlyWarningPerformance: 'Rainfall alerts were issued, but the slow translation speed resulted in rain volumes exceeding storm drain capacity by 400%.',
      lessonsLearned: [
        'Slow-moving cyclones require an entirely different emergency response than fast-landfalling wind storms',
        'Industrial oil refineries must have containment berms designed for 500 mm / 24 hr rainfall to prevent toxic ecological leaks',
        'Comprehensive desilting of Chennai’s Adyar, Cooum, and Buckingham Canal waterways'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Projections indicate higher frequency of slow-moving post-monsoon cyclonic storms dumping intense rainfall on peninsular India.',
      vulnerableHotspots: ['South Chennai Basins (Velachery, Pallikaranai Marsh)', 'Ennore Creek Industrial Hub', 'North Coastal Tamil Nadu']
    },
    sources: [srcImd, srcNdmaCyclone]
  },
  {
    id: 'cyclone-dana-2024',
    name: 'Severe Cyclonic Storm Dana 2024',
    year: 2024,
    dateRange: 'October 23 – 26, 2024 (Landfall: Oct 25)',
    statesAffected: ['Odisha', 'West Bengal'],
    primaryLocations: ['Habalikhati Nature Camp (Kendrapara)', 'Bhadrak', 'Dhamra Port', 'Balasore', 'East Medinipur'],
    coordinates: { lat: 20.7500, lng: 86.9500 },
    category: 'cyclone',
    subCategory: 'Severe Cyclonic Storm (SCS) with 120 km/h Landfall Winds',
    description: 'In late October 2024, Severe Cyclonic Storm Dana struck the coast of Odisha near Bhitarkanika National Park and Dhamra Port with wind speeds of 100–110 km/h gusting to 120 km/h. Demonstrating the peak maturity of India’s disaster management ecosystem, the Odisha State Disaster Management Authority (OSDMA) successfully evacuated over 600,000 citizens to 6,000+ cyclone shelters, resulting in ZERO direct human fatalities.',
    meteorologicalTrigger: 'Rapid depression consolidation in the east-central Bay of Bengal, steered directly northwestward by subtropical ridge currents.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'While wind speeds were lower than Super Cyclone 1999 or Fani, elevated sea surface temperatures in the northern Bay of Bengal (30°C) fueled widespread torrential downpours exceeding 250 mm.',
    impacts: {
      deaths: 0,
      displaced: 600000,
      populationAffected: 3500000,
      economicLossINR: 600,
      infrastructureDamageSummary: 'Uprooting of hundreds of electric poles; minor damage to thatched roofs; major highways quickly cleared by ODRAF teams.',
      agriculturalDamageSummary: 'Heavy waterlogging in standing kharif paddy fields across Bhadrak, Kendrapara, and Balasore.',
      environmentalImpactSummary: 'Bhitarkanika mangrove biosphere absorbed the bulk of the storm surge wave energy, protecting inland villages from saline inundation.'
    },
    institutionalResponse: {
      governmentAction: 'Odisha Government achieved its celebrated "Zero Casualty" target; set up dedicated shelter pregnant-women care centers delivering 1,600 babies safely during the storm.',
      ndmaNdrfDeployment: '20 NDRF and 51 ODRAF teams deployed with mechanized tree clearers, restoring normal traffic within 12 hours of landfall.',
      earlyWarningPerformance: 'Flawless track and landfall timing prediction by IMD 4 days in advance.',
      lessonsLearned: [
        'Proves the effectiveness of India’s 25-year institutional disaster management evolution from 1999 to 2024',
        'Highlights the irreplaceable ecological protective role of the Bhitarkanika mangrove buffer',
        'Need for improved agricultural drainage to save standing paddy from post-cyclone waterlogging'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Early-warning and mass evacuation systems have effectively neutralized cyclone mortality, shifting the adaptation priority entirely to safeguarding rural livelihoods and agricultural resilience.',
      vulnerableHotspots: ['Kendrapara Bhitarkanika Fringe', 'Bhadrak Low-Lying Coastal Blocks', 'Dhamra Estuary']
    },
    sources: [srcImd, srcNdmaCyclone]
  },
  {
    id: 'phuktal-landslide-glof-2015',
    name: '2015 Zanskar Phuktal River Landslide Dam Burst & Surge',
    year: 2015,
    dateRange: 'December 31, 2014 – May 7, 2015 (Breach: May 7)',
    statesAffected: ['Ladakh'],
    primaryLocations: ['Zanskar Valley', 'Padum', 'Phuktal Monastery', 'Shinkun La Reach'],
    coordinates: { lat: 33.2667, lng: 77.1833 },
    category: 'glof',
    subCategory: 'Massive Hillslope Rockslide Dam & Landslide Lake Outburst Flood (LDOF)',
    description: 'In late December 2014, a colossal rockslide of over 50 million cubic meters detached from steep trans-Himalayan cliffs, choking the Phuktal (Tsarap Chu) river in southern Zanskar. A 15-kilometer-long artificial lake formed behind a 60-meter-high debris dam. On May 7, 2015, warming spring meltwaters caused the dam to breach catastrophically, unleashing a devastating flash flood that swept away 12 suspension bridges, 2 schools, and critical border roads in Ladakh.',
    meteorologicalTrigger: 'Winter freeze-thaw cracking of fractured granite cliffs in an arid high-altitude permafrost zone, followed by rapid spring thermal melt overtopping the debris wall.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'ISRO National Remote Sensing Centre (NRSC) documented that warming trans-Himalayan permafrost degradation increases rock mass failures in narrow glaciated gorges.',
    impacts: {
      deaths: 0,
      displaced: 3000,
      populationAffected: 15000,
      economicLossINR: 120,
      infrastructureDamageSummary: '12 motorable and pedestrian suspension bridges washed away; Padum-Darcha trek route severed; 2 village schools destroyed.',
      agriculturalDamageSummary: 'Silt and boulder deposition ruined alluvial barley terraces along the Tsarap Chu valley.',
      environmentalImpactSummary: 'Riverbed scouring and alteration of the aquatic ecology of the Zanskar river system.'
    },
    institutionalResponse: {
      governmentAction: 'National Crisis Management Committee (NCMC) dispatched an inter-agency expert team including Army engineers and CWC hydrologists who created a controlled siphon spillway.',
      ndmaNdrfDeployment: 'NDRF and Indian Army 14 Corps pre-evacuated 3,000 residents living along the flood surge path.',
      earlyWarningPerformance: 'Satellite surveillance by ISRO Cartosat provided weekly water accumulation estimates, enabling zero fatalities.',
      lessonsLearned: [
        'Satellite radar monitoring of landslide damming in remote Himalayan valleys prevents catastrophic unannounced breaches',
        'Controlled channel siphoning significantly lowers peak flood breach discharge',
        'Suspension bridges in mountain river basins must be anchored at least 15 meters above maximum high flood level'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Permafrost thaw in Zanskar and Ladakh is projected to accelerate steep-cliff rock avalanches blocking tributary gorges.',
      vulnerableHotspots: ['Zanskar River Gorge', 'Shyok Basin (Nubra)', 'Suru River Catchment (Kargil)']
    },
    sources: [srcIsroLandslide, srcCwc, srcMoes]
  },
  {
    id: 'telangana-heatwave-2015',
    name: '2015 Telangana & Coastal Andhra Extreme Lethal Heatwave',
    year: 2015,
    dateRange: 'May 21 – June 10, 2015',
    statesAffected: ['Telangana', 'Andhra Pradesh'],
    primaryLocations: ['Khammam', 'Nalgonda', 'Karimnagar', 'Hyderabad', 'Guntur', 'Vijayawada'],
    coordinates: { lat: 17.2473, lng: 80.1514 },
    category: 'heatwave',
    subCategory: 'Deadly High Wet-Bulb & Radiant Thermal Extreme',
    description: 'During late May 2015, an unbearable heatwave gripped Telangana and neighboring Andhra Pradesh. Temperatures crossed 48°C in Khammam and Ramagundam, accompanied by intense humidity along coastal Andhra that pushed wet-bulb temperatures into the danger threshold (>30°C). Over 585 citizens in Telangana and 1,735 in Andhra Pradesh lost their lives to heatstroke, predominantly agricultural laborers, rickshaw pullers, and the elderly.',
    meteorologicalTrigger: 'A persistent hot, dry northwesterly wind stream traversing the parched central Indian plateau, coupled with a delayed southwest monsoon onset.',
    climateConnection: 'direct',
    scientificConfidence: 'very_high',
    attributionEvidence: 'World Weather Attribution and MoES analyses demonstrated that human-induced climate warming has dramatically raised both the maximum temperature and the duration of pre-monsoon heatwaves across the Deccan plateau.',
    impacts: {
      deaths: 2320,
      displaced: 0,
      populationAffected: 85000000,
      economicLossINR: 500,
      infrastructureDamageSummary: 'Thermal power generation cut due to cooling water shortages; electricity grid overload due to air conditioning demand; asphalt road melting in Hyderabad.',
      agriculturalDamageSummary: 'Massive poultry mortality (over 1.5 crore broiler birds died across Telangana and coastal AP); scorched chili and cotton nurseries.',
      environmentalImpactSummary: 'Drying of village percolation tanks; widespread death of migratory birds and wildlife in Deccan scrub forests.'
    },
    institutionalResponse: {
      governmentAction: 'Telangana government pioneered its first comprehensive Heat Wave Action Plan (HAP); mandated free buttermilk and ORS kiosks (Chalivendram) across all urban transit hubs.',
      ndmaNdrfDeployment: 'NDMA released national guidelines on Heat Wave Management directly inspired by the 2015 tragedy.',
      earlyWarningPerformance: 'IMD heat bulletins were issued, but localized community cooling centers were not yet institutionalized.',
      lessonsLearned: [
        'Direct catalyst for the nationwide rollout of Heat Action Plans across 130+ Indian cities and districts',
        'Prohibition of outdoor construction work between 11 AM and 4 PM during red alert days',
        'Installation of cool roofs in low-income informal settlements reduces indoor temperatures by 3–5°C'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Climate models project that extreme heatwave days in the Deccan will double by 2050, with rising humidity heightening heat index perils.',
      vulnerableHotspots: ['Ramagundam Industrial Coal Belt', 'Khammam Lowlands', 'Nalgonda Arid Plateau']
    },
    sources: [srcImd, srcNdmaHeat, srcMoes]
  },
  {
    id: 'maharashtra-latur-drought-2016',
    name: '2016 Marathwada Extreme Drought & Latur Water Train Crisis',
    year: 2016,
    dateRange: 'March – June 2016',
    statesAffected: ['Maharashtra', 'Karnataka'],
    primaryLocations: ['Latur', 'Beed', 'Osmanabad (Dharashiv)', 'Jalna', 'Parbhani'],
    coordinates: { lat: 18.4088, lng: 76.5604 },
    category: 'drought',
    subCategory: 'Compound Multi-Year Hydrological & Agrarian Water Table Collapse',
    description: 'Following successive monsoon failures in 2014 and 2015 driven by a super El Niño, the semi-arid Marathwada region experienced an unprecedented drinking water collapse. In Latur city (population 500,000), municipal water taps went dry for months. For the first time in modern Indian history, the Ministry of Railways operated the dedicated "Jaldoot" water express train, transporting 2.5 million liters of potable water daily over 340 km from Miraj to Latur.',
    meteorologicalTrigger: 'Back-to-back monsoon deficits exceeding 40% across two consecutive years, coupled with over-cultivation of water-guzzling sugarcane in an arid rain-shadow zone.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'While El Niño suppressed monsoonal rainfall, anthropogenic water table over-extraction for cash crops transformed a meteorological drought into a total socio-economic breakdown (IIT Bombay & MoES).',
    impacts: {
      deaths: 350,
      displaced: 800000,
      populationAffected: 15000000,
      economicLossINR: 12000,
      infrastructureDamageSummary: 'Dhanegaon and Manjara reservoirs hit dead storage; schools and hospitals operated on emergency bottled water; section 144 imposed near water tankers to prevent riots.',
      agriculturalDamageSummary: 'Total failure of soybean, pulse, and sugarcane crops; death and distress-sale of millions of farm cattle at emergency fodder camps.',
      environmentalImpactSummary: 'Hard-rock basalt aquifers pumped dry beyond 800 feet depth; massive soil desiccation.'
    },
    institutionalResponse: {
      governmentAction: 'Operation of "Jaldoot" water train delivering 250 million liters of water; creation of 300+ government cattle fodder camps (Chhavani).',
      ndmaNdrfDeployment: 'Armed police escort provided for municipal water distribution tankers to prevent civilian skirmishes.',
      earlyWarningPerformance: 'Rainfall deficits were tracked, but groundwater depletion monitoring was fragmented.',
      lessonsLearned: [
        'Sugarcane cultivation in rain-shadow drought belts must be regulated with mandatory micro-drip irrigation',
        'Decentralized farm ponds (Jalyukt Shivar) and groundwater recharge shafts are vital for community survival',
        'Urban water grids must have multi-source redundancy rather than single-reservoir dependency'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Marathwada faces lengthening dry spells between monsoon pulses, with heat-driven evapotranspiration reducing soil moisture.',
      vulnerableHotspots: ['Manjara River Basin (Latur)', 'Beed District Rain-Shadow', 'Osmanabad Semi-Arid Plateau']
    },
    sources: [srcMoes, srcWorldBank, srcCwc]
  },
  {
    id: 'karnataka-floods-2019',
    name: '2019 North Karnataka & Belagavi Mega Deluge',
    year: 2019,
    dateRange: 'August 3 – 20, 2019',
    statesAffected: ['Karnataka', 'Maharashtra'],
    primaryLocations: ['Belagavi', 'Bagalkot', 'Raichur', 'Kodagu', 'Uttara Kannada', 'Dharwad'],
    coordinates: { lat: 15.8497, lng: 74.4977 },
    category: 'flood',
    subCategory: 'Compound Fluvial Flood, Reservoir Surcharge & Western Ghats Slope Failures',
    description: 'In August 2019, record-shattering rainfall in the Western Ghats of southern Maharashtra (Mahabaleshwar recorded 600+ mm in 24 hours) forced massive discharges from Koyna and Radhanagari dams into the Krishna river. Simultaneous extreme downpours in Karnataka’s Belagavi and Kodagu triggered widespread landslides and flash floods, submerging 100+ villages under 15 feet of water, killing 84 people, and forcing over 400,000 citizens into relief camps.',
    meteorologicalTrigger: 'An offshore monsoon trough interacting with a low-pressure depression over the Bay of Bengal, creating an atmospheric conveyor belt of heavy rain over the upper Krishna catchments.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'Published research (IITM Pune / Geophysical Research Letters) confirms that 3-fold surges in widespread extreme precipitation events over the Western Ghats frequently overwhelm interstate reservoir coordination mechanisms.',
    impacts: {
      deaths: 84,
      displaced: 400000,
      populationAffected: 7000000,
      economicLossINR: 35000,
      infrastructureDamageSummary: 'Over 1.5 lakh houses damaged; National Highway 4 (Pune-Bengaluru) flooded and shut for 9 days; railway tracks severed in 40 locations.',
      agriculturalDamageSummary: 'Sugarcane, maize, and horticultural crops submerged across 7 lakh hectares in the Krishna and Malaprabha deltas.',
      environmentalImpactSummary: 'Colossal landslides in Kodagu and Uttara Kannada scarred forested Western Ghats mountain corridors.'
    },
    institutionalResponse: {
      governmentAction: 'Karnataka and Maharashtra established an emergency joint ministerial committee for coordinated dam discharge schedules.',
      ndmaNdrfDeployment: '20 NDRF teams, Indian Army Maratha Light Infantry, and Indian Navy divers deployed across Belagavi and Bagalkot.',
      earlyWarningPerformance: 'Rainfall alerts were issued, but sudden surge discharges from upstream Maharashtra dams caught border villages by surprise.',
      lessonsLearned: [
        'Mandatory real-time bi-state telemetry protocol between Maharashtra and Karnataka dam operators',
        'Strict mapping of flood contour lines along the Krishna river to halt permanent riverbed encroachments',
        'Landslide early-warning sensors required along Western Ghats highway cuts'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'OBSERVED',
      projectedOutlookNote: 'Extreme precipitation events along the Western Ghats have tripled over the last 60 years, increasing inter-state riverine flood hazards.',
      vulnerableHotspots: ['Belagavi Chikkodi & Athani Taluks', 'Bagalkot Jamkhandi Plains', 'Kodagu Hill Slopes']
    },
    sources: [srcCwc, srcImd, srcMoes]
  },
  {
    id: 'patna-floods-2019',
    name: '2019 Patna Severe Urban Submergence & Drainage Paralysis',
    year: 2019,
    dateRange: 'September 27 – October 4, 2019',
    statesAffected: ['Bihar'],
    primaryLocations: ['Patna (Rajendra Nagar, Kankarbagh)', 'Nalanda', 'Vaishali', 'Bhagalpur'],
    coordinates: { lat: 25.5941, lng: 85.1376 },
    category: 'extreme_rainfall',
    subCategory: 'Late-Monsoon Extreme Convective Deluge & Urban Sump Choke',
    description: 'In late September 2019, as the southwest monsoon was retreating, a stationary convective system dumped over 342 mm of rain in 36 hours onto the capital city of Patna. Because the Ganga and Punpun rivers were flowing above danger levels, municipal drainage sluice gates could not be opened to gravity-drain urban stormwater. Over 60% of Patna, including posh residential areas like Rajendra Nagar and Kankarbagh, was submerged under 6 to 9 feet of toxic sewage-mixed water for over a week.',
    meteorologicalTrigger: 'An unusually energetic late-monsoon low-pressure system colliding with the Gangetic plain, triggering localized high-intensity rainfall.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'Climate analyses demonstrate that the Indian Summer Monsoon retreat is increasingly delayed, with late-September extreme rainfall bursts occurring 20% more frequently over the Gangetic belt (MoES 2020).',
    impacts: {
      deaths: 73,
      displaced: 150000,
      populationAffected: 2000000,
      economicLossINR: 3000,
      infrastructureDamageSummary: 'Patna medical college and hospital wards flooded; thousands of luxury and commercial vehicles submerged; complete power blackout in central Patna.',
      agriculturalDamageSummary: 'Heavy waterlogging in peri-urban vegetable nurseries and paddy fields across Patna rural.',
      environmentalImpactSummary: 'Severe bio-hazard due to mixing of municipal open sewage with residential drinking water supplies; post-flood dengue outbreak.'
    },
    institutionalResponse: {
      governmentAction: 'State government deployed NDRF and SDRF teams with 80+ inflatable motorboats in city streets; airlifting of food packets by Air Force helicopters in urban neighborhoods.',
      ndmaNdrfDeployment: 'NDRF rescued over 20,000 urban citizens including the state Deputy Chief Minister from submerged residences.',
      earlyWarningPerformance: 'Heavy rain alert was issued, but municipal storm pumping sumps were silted and power backup failed.',
      lessonsLearned: [
        'Urban pumping stations must have elevated diesel generator backups isolated from street-level flooding',
        'River cities need automated non-return flap valves on storm drains discharging into major rivers',
        'Wetlands and natural chaurs (depressions) in South Patna must be conserved rather than concretized'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Urban flooding in Gangetic plain megacities is projected to worsen due to rapid impervious surface expansion.',
      vulnerableHotspots: ['Rajendra Nagar-Kankarbagh Low Basin', 'Pataliputra Colony', 'South Patna Canal Rim']
    },
    sources: [srcCwc, srcImd]
  },
  {
    id: 'hyderabad-floods-2020',
    name: '2020 Hyderabad Extreme Urban Deluge & Musi River Flash Floods',
    year: 2020,
    dateRange: 'October 13 – 19, 2020',
    statesAffected: ['Telangana', 'Andhra Pradesh'],
    primaryLocations: ['Hyderabad', 'Balanagar', 'Begumpet', 'Alwal', 'Falaknuma', 'Hafiz Baba Nagar'],
    coordinates: { lat: 17.3850, lng: 78.4867 },
    category: 'extreme_rainfall',
    subCategory: 'Deep Depression Convective Cloudburst & Urban Lake Cascade Breach',
    description: 'On October 13–14, 2020, a rare post-monsoon deep depression crossed the Andhra coast and parked directly over Hyderabad. The city witnessed its heaviest 24-hour rainfall in over a century: Begumpet recorded 192 mm and Balanagar logged an astonishing 324 mm in a single night. Historic lakes and storm canals (Nalas) overflowed, unleashing raging flash floods that swept away hundreds of cars, breached 14 urban lake bunds, drowned 80 citizens, and inflicted catastrophic damage.',
    meteorologicalTrigger: 'A well-organized deep depression from the Bay of Bengal maintaining cyclonic intensity over land, drawing continuous tropical moisture convergence over the Musi river basin.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'Published research (IMD & IIT Hyderabad) confirms that tropical depressions maintain higher intensity inland due to warmer continental ground and elevated moisture fluxes, while urban concretization increased runoff velocity by over 300%.',
    impacts: {
      deaths: 80,
      displaced: 100000,
      populationAffected: 2500000,
      economicLossINR: 5000,
      infrastructureDamageSummary: 'Over 40,000 houses flooded; boundary walls and roads collapsed; PV Narasimha Rao Expressway traffic halted; Outer Ring Road underpasses submerged.',
      agriculturalDamageSummary: 'Heavy waterlogging in suburban vegetable farms and dairy belts across Ranga Reddy and Medchal districts.',
      environmentalImpactSummary: 'Severe contamination of Hussain Sagar, Osmansagar, and Musi rivers with untreated municipal solid waste and sewage.'
    },
    institutionalResponse: {
      governmentAction: 'Telangana government announced ₹10,000 immediate cash relief per affected household and launched the Strategic Nala Development Programme (SNDP).',
      ndmaNdrfDeployment: 'NDRF and Indian Army rescue columns deployed rubber boats in the narrow lanes of old Hyderabad and Chandrayangutta.',
      earlyWarningPerformance: 'Rainfall alerts were issued by IMD, but localized sub-catchment runoff velocity was heavily underestimated.',
      lessonsLearned: [
        'Urban lakes in Hyderabad are naturally cascading; encroaching connecting channels (Nalas) guarantees catastrophic downstream breaches',
        'Need for strict legal demolition of constructions on natural lake beds (Full Tank Level)',
        'Prompted the formulation of the Strategic Nala Development Programme (SNDP)'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Hyderabad’s rapid urban expansion without proportional drainage capacity increases urban flash-flood vulnerability during convective cloudbursts.',
      vulnerableHotspots: ['Musi River Basin Corridors', 'Balanagar-Alwal Low-Lying Chain', 'Old City Nala Belts']
    },
    sources: [srcImd, srcCwc, srcMoes]
  },
  {
    id: 'maharashtra-taliye-landslide-2021',
    name: '2021 Mahad Taliye Western Ghats Catastrophic Landslide',
    year: 2021,
    dateRange: 'July 22 – 23, 2021',
    statesAffected: ['Maharashtra'],
    primaryLocations: ['Taliye (Mahad, Raigad)', 'Chiplun (Ratnagiri)', 'Satara', 'Kolhapur'],
    coordinates: { lat: 18.0833, lng: 73.4167 },
    category: 'landslide',
    subCategory: 'Compound Convective Cloudburst & Massive Hillside Debris Slide',
    description: 'During late July 2021, the Konkan coast and Western Ghats of Maharashtra experienced an extraordinary precipitation onslaught. Mahabaleshwar recorded an astonishing 594 mm of rain in 24 hours. The continuous deluge saturated the lateritic hill slopes above the village of Taliye in Mahad taluk, Raigad district. On July 22, the entire mountain crest gave way in a colossal debris avalanche that buried 44 houses and killed 86 villagers under 15 feet of rocky slurry.',
    meteorologicalTrigger: 'A powerful monsoon offshore trough anchored by strong low-level jet winds, funneling moisture directly against the Western Ghats mountain barrier.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'ISRO Landslide Atlas of India notes that extreme 1-day rainfall triggers shallow translational landslides in lateritic soils, exacerbated by unscientific road cutting and slope destabilization.',
    impacts: {
      deaths: 86,
      displaced: 3500,
      populationAffected: 50000,
      economicLossINR: 400,
      infrastructureDamageSummary: 'Taliye hamlet completely pulverized; access roads buried under mud; Mumbai-Goa highway shut due to flooding in Mahad town.',
      agriculturalDamageSummary: 'Terraced paddy and horticultural plantations swept into the river gorge.',
      environmentalImpactSummary: 'Severe hill denudation and alteration of the Savitri river valley drainage.'
    },
    institutionalResponse: {
      governmentAction: 'Maharashtra Government declared permanent rehabilitation of vulnerable hill hamlets to safe plains; constructed new township for Taliye survivors.',
      ndmaNdrfDeployment: 'NDRF deployed specialized canine squads and earthmovers under continuous heavy rain and active rockfall hazards.',
      earlyWarningPerformance: 'General red alert for Konkan was active, but village-specific slope instability warnings did not exist.',
      lessonsLearned: [
        'Hilltop villages in the Western Ghats direct debris runout zone require scheduled monsoon evacuations',
        'Installation of automated rain-gauge thresholds for immediate slope evacuation',
        'Ban on heavy construction and quarrying within 500 meters of vulnerable slope crests'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'OBSERVED',
      projectedOutlookNote: 'Western Ghats slope failures have surged exponentially over the last two decades under warming-amplified orographic deluges.',
      vulnerableHotspots: ['Raigad Mahad-Poladpur Slopes', 'Ratnagiri Chiplun Catchment', 'Satara Patan Taluk']
    },
    sources: [srcIsroLandslide, srcImd, srcMoes]
  },
  {
    id: 'mp-chambal-floods-2021',
    name: '2021 Madhya Pradesh Gwalior-Chambal Extreme River Inundation',
    year: 2021,
    dateRange: 'August 1 – 9, 2021',
    statesAffected: ['Madhya Pradesh', 'Rajasthan'],
    primaryLocations: ['Sheopur', 'Shivpuri', 'Gwalior', 'Datia', 'Bhind', 'Morena'],
    coordinates: { lat: 25.6667, lng: 76.7000 },
    category: 'flood',
    subCategory: 'Mesoscale Cloudburst & Severe Fluvial River Surge',
    description: 'In early August 2021, an intense low-pressure system stalled over northern Madhya Pradesh, dumping up to 470 mm of torrential rain in 24 hours on Sheopur and Shivpuri districts. The rivers Sindh, Kwari, Parbati, and Chambal rose at record speed. Floods washed away four major concrete bridges on state highways, marooned over 1,200 villages, and left the district headquarters of Sheopur completely submerged and isolated for three days.',
    meteorologicalTrigger: 'A stationary monsoon depression interacting with local topography in central India, dumping unprecedented localized rainfall volumes.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'Climate analyses (IITM Pune) indicate that the central Indian monsoon belt is experiencing a significant increase in the frequency of localized high-intensity rainfall bursts even while total seasonal rainfall remains erratic.',
    impacts: {
      deaths: 24,
      displaced: 35000,
      populationAffected: 1500000,
      economicLossINR: 2200,
      infrastructureDamageSummary: '4 major highway bridges on Sindh river washed away; thousands of electric poles collapsed; Sheopur town municipal complex inundated.',
      agriculturalDamageSummary: 'Extensive damage to standing soybean and sesame crops across 3 lakh hectares in the Gwalior-Chambal belt.',
      environmentalImpactSummary: 'Severe ravine erosion and bank cutting across the fragile Chambal badlands.'
    },
    institutionalResponse: {
      governmentAction: 'State government launched massive air-rescue operations with Indian Air Force helicopters and deployed Indian Army columns.',
      ndmaNdrfDeployment: 'NDRF deployed 8 rescue teams with inflatable boats in Sheopur and Shivpuri.',
      earlyWarningPerformance: 'Rainfall alerts were issued, but rapid nocturnal river surges caught villagers asleep.',
      lessonsLearned: [
        'Bridge designs on central Indian rivers must account for higher clearance to accommodate unprecedented flood peaks',
        'Townships in river basins need dedicated elevated flood shelters with wireless satellite communication',
        'Watershed soil conservation in the Chambal basin is crucial to prevent rapid surface runoff'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Projections show a rise in intense convective storms over central India, increasing flash-flood risks in northern Madhya Pradesh.',
      vulnerableHotspots: ['Sindh River Basin (Sheopur, Shivpuri)', 'Chambal Confluence (Bhind, Morena)', 'Narmada Valley']
    },
    sources: [srcCwc, srcImd]
  },
  {
    id: 'punjab-floods-2023',
    name: '2023 Punjab Sutlej & Ghaggar River Embankment Breaches',
    year: 2023,
    dateRange: 'July 8 – August 15, 2023',
    statesAffected: ['Punjab', 'Haryana'],
    primaryLocations: ['Patiala', 'Rupnagar', 'Sangrur', 'Fazilka', 'Mansa', 'Firozpur'],
    coordinates: { lat: 30.0000, lng: 75.8000 },
    category: 'flood',
    subCategory: 'Compound Fluvial Flood & Major Dhussi Bandh Breaches',
    description: 'During July and August 2023, following record rainfall in the Himachal Pradesh mountains, Punjab’s river networks experienced catastrophic surges. The Sutlej, Beas, Ravi, and the seasonal Ghaggar river overflowed, causing over 150 breaches in Dhussi bundhs (earthen dykes). Over 1,400 villages across 19 districts were submerged, 44 people died, and vast swathes of basmati paddy fields were buried under sand.',
    meteorologicalTrigger: 'Extreme compound rainfall over Himachal Pradesh catchments combined with record 3-day downpours across the Punjab plains.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'Attribution studies indicate that anomalous Western Disturbance collisions with early monsoon moisture pulses have intensified river inflow surges into the Punjab plains.',
    impacts: {
      deaths: 44,
      displaced: 30000,
      populationAffected: 2500000,
      economicLossINR: 2000,
      infrastructureDamageSummary: 'Over 150 embankment breaches; village schools and link roads destroyed; power transformers inundated in rural circles.',
      agriculturalDamageSummary: 'Destruction of standing paddy across 6 lakh acres; thick layers of river sand deposited on fertile agricultural soil.',
      environmentalImpactSummary: 'Severe contamination of rural drinking water handpumps with agricultural runoff.'
    },
    institutionalResponse: {
      governmentAction: 'Punjab Government and village panchayats mobilized thousands of community volunteers ("Kar Seva") to plug breaches with sandbags alongside Indian Army engineers.',
      ndmaNdrfDeployment: 'NDRF deployed 15 teams with rescue boats across Patiala and Rupnagar.',
      earlyWarningPerformance: 'IMD rainfall alerts were accurate, but structural embankment maintenance was inadequate before the flood.',
      lessonsLearned: [
        'Earthen Dhussi bundhs require pre-monsoon stone pitching and geo-synthetic reinforcement',
        'Seasonal rivulets (Ghaggar, Tangri) must be desilted to restore original cross-sectional discharge capacity',
        'Inter-state coordination between Punjab, Haryana, and Himachal dam authorities is essential'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Projections indicate higher frequency of compound rain bursts over the northwest Himalayas feeding into the Punjab river basin.',
      vulnerableHotspots: ['Ghaggar Basin (Patiala, Mansa, Moonak)', 'Sutlej River Plains (Rupnagar, Anandpur Sahib)', 'Fazilka Border Reach']
    },
    sources: [srcCwc, srcImd]
  },
  {
    id: 'bengaluru-drought-2024',
    name: '2024 Bengaluru Metropolitan Groundwater Depletion & Water Crisis',
    year: 2024,
    dateRange: 'February – May 2024',
    statesAffected: ['Karnataka'],
    primaryLocations: ['Bengaluru Urban (Whitefield, Mahadevapura, Electronic City, Bellandur)'],
    coordinates: { lat: 12.9716, lng: 77.5946 },
    category: 'drought',
    subCategory: 'Anthropogenic & Hydro-Meteorological Mega-City Water Emergency',
    description: 'During the spring of 2024, India’s tech capital Bengaluru faced an acute, historic drinking water emergency. The failure of the 2023 southwest and northeast monsoons, combined with an intense summer heat dome, caused water levels in the Cauvery basin reservoirs (KRS, Kabini) to plunge. Simultaneously, over 6,900 out of 14,000 municipal and private borewells ran completely dry, leaving millions of tech workers and residents reliant on unregulated private water tankers charging exorbitant rates.',
    meteorologicalTrigger: 'A severe monsoon deficit of over 38% in the southern interior Karnataka plateau in 2023, followed by a winter-spring heat anomaly with temperatures reaching 38.5°C.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'Demonstrated the lethal compounding of climate variability (El Niño-driven drought) with unconstrained urban concretization (loss of 88% of Bengaluru’s tree canopy and 79% of water bodies since 1973, according to IISc research).',
    impacts: {
      deaths: 0,
      displaced: 10000,
      populationAffected: 14000000,
      economicLossINR: 2500,
      infrastructureDamageSummary: 'IT parks mandated work-from-home due to lack of restroom water; commercial hotels, hospitals, and educational institutions operated on emergency water quotas.',
      agriculturalDamageSummary: 'Severe drying of peri-urban vegetable farming and eucalyptus plantations around Bengaluru rural.',
      environmentalImpactSummary: 'Historic drawdown of deep aquifer water tables beyond 1,500 feet depth; drying up of Bellandur and Varthur lake catchments.'
    },
    institutionalResponse: {
      governmentAction: 'Karnataka Government nationalized and capped private water tanker prices; mandated treated wastewater reuse for construction; initiated Cauvery Stage V pipeline acceleration.',
      ndmaNdrfDeployment: 'City administration deployed centralized water helplines and deployed municipal water tankers to slums.',
      earlyWarningPerformance: 'Hydrological data flagged the crisis 6 months prior, but contingency water rationing began only after borewells failed.',
      lessonsLearned: [
        'Megacities cannot rely on single-source distant river pipelines (Cauvery); mandatory decentralized rainwater harvesting is survival-critical',
        'Rejuvenation of Bengaluru’s interconnected lake systems (cascade tanks) is essential to recharge groundwater',
        'Mandatory dual-piping and 100% wastewater recycling in all commercial and residential apartment complexes'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Urban heat islands combined with longer dry spells are projected to increase metropolitan water vulnerability across peninsular India.',
      vulnerableHotspots: ['Whitefield & Mahadevapura IT Belts', 'Electronic City Peripheral Blocks', 'North Bengaluru (Yelahanka, Hebbal)']
    },
    sources: [srcWorldBank, srcMoes]
  },
  {
    id: 'sikkim-mangan-landslides-2024',
    name: '2024 North Sikkim Monsoon Landslides & Teesta Bridge Washout',
    year: 2024,
    dateRange: 'June 12 – 18, 2024',
    statesAffected: ['Sikkim', 'West Bengal'],
    primaryLocations: ['Mangan', 'Dzongu', 'Chungthang', 'Lachung', 'Sankalang'],
    coordinates: { lat: 27.5000, lng: 88.5333 },
    category: 'landslide',
    subCategory: 'Compound Orographic Downpour & Multi-Point Rockslides',
    description: 'In June 2024, less than nine months after the catastrophic South Lhonak GLOF had destabilized the Teesta valley, incessant pre-monsoon downpours hammered North Sikkim. Over 100 simultaneous landslides struck Mangan district. The newly constructed suspension bridge at Sankalang was washed away, cutting off Dzongu, Lachung, and Lachen. Nine citizens died, and over 1,500 tourists were stranded in high-altitude valleys before being evacuated.',
    meteorologicalTrigger: 'Continuous heavy rainfall (over 300 mm in 72 hours) acting on steep Himalayan hillslopes that had already lost vegetative support and river toe stability during the 2023 GLOF.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'Illustrates the compounding cascade of climate disasters: high-altitude GLOF events strip riverbank toe slopes, leaving hillsides hyper-vulnerable to subsequent normal or high monsoon rains (Geological Survey of India / MoES).',
    impacts: {
      deaths: 9,
      displaced: 2500,
      populationAffected: 45000,
      economicLossINR: 450,
      infrastructureDamageSummary: 'Sankalang suspension bridge collapsed; National Highway 10 blocked in 35 places; telecommunication cables severed, cutting off North Sikkim.',
      agriculturalDamageSummary: 'Complete burial of large cardamom and ginger plantations in Dzongu under mud and rockslides.',
      environmentalImpactSummary: 'Massive slope scars along the Teesta and Kanaka rivers, accelerating sediment loads into downstream hydroelectric turbines.'
    },
    institutionalResponse: {
      governmentAction: 'Sikkim Government and Indian Army Border Roads Organisation (BRO) constructed emergency ropeway crossings and foot tracks to evacuate stranded tourists.',
      ndmaNdrfDeployment: 'NDRF and SDRF conducted search-and-rescue operations across damaged houses in Mangan.',
      earlyWarningPerformance: 'Rainfall alerts were active, but slope-scale real-time displacement telemetry was absent.',
      lessonsLearned: [
        'Post-GLOF river valleys remain in an active phase of slope adjustment for years and require strict access controls during monsoon',
        'Suspension bridge towers must be anchored in deep bedrock outside the immediate active debris cone',
        'Installation of regional radar telemetry for localized mountain cloudburst tracking'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Compounding extreme precipitation and fragile post-hazard mountain morphology will increase landslide frequency across North Sikkim.',
      vulnerableHotspots: ['Dzongu Valley (Sankalang, Shipgyer)', 'Chungthang-Lachen Highway', 'Teesta Gorge NH-10 Corridor']
    },
    sources: [srcIsroLandslide, srcImd, srcMoes]
  }
];

