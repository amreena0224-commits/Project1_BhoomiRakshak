import { HistoricalDisaster } from '../types';
import { SOURCES_REPOSITORY } from './sources';
import { ARCHIVE_1970_2009 } from './historicalArchive1970_2009';
import { ARCHIVE_2010_2024 } from './historicalArchive2010_2024';

const srcMoes = SOURCES_REPOSITORY[0];
const srcImd = SOURCES_REPOSITORY[1];
const srcIpccWg1 = SOURCES_REPOSITORY[2];
const srcIpccWg2 = SOURCES_REPOSITORY[3];
const srcNdmaHeat = SOURCES_REPOSITORY[4];
const srcNdmaCyclone = SOURCES_REPOSITORY[5];
const srcCwc = SOURCES_REPOSITORY[6];
const srcIsroLandslide = SOURCES_REPOSITORY[7];
const srcIitmCyclone = SOURCES_REPOSITORY[8];
const srcWorldBank = SOURCES_REPOSITORY[9];
const srcCurrentSciGlof = SOURCES_REPOSITORY[11];

const CORE_HISTORICAL_DISASTERS: HistoricalDisaster[] = [
  {
    id: 'cyclone-fani-2019',
    name: 'Extremely Severe Cyclonic Storm Fani',
    year: 2019,
    dateRange: 'April 26 – May 5, 2019 (Landfall: May 3)',
    statesAffected: ['Odisha', 'Andhra Pradesh', 'West Bengal'],
    primaryLocations: ['Puri', 'Bhubaneswar', 'Cuttack', 'Khurda', 'Ganjam'],
    coordinates: { lat: 19.8135, lng: 85.8312 },
    category: 'cyclone',
    subCategory: 'Extremely Severe Cyclonic Storm (ESCS)',
    description: 'Cyclone Fani was the strongest tropical cyclone to strike the state of Odisha since the 1999 Super Cyclone. Originating from a tropical depression west of Sumatra, it underwent rapid intensification over exceptionally warm Bay of Bengal waters (SST 30–31°C), making landfall near Puri with sustained winds of 175–185 km/h gusting to 205 km/h.',
    meteorologicalTrigger: 'Anomalously high Sea Surface Temperatures (30–31°C) and deep oceanic heat content in the equatorial Indian Ocean and south-central Bay of Bengal, coupled with low vertical wind shear, allowing rapid intensification into a Category 4 equivalent cyclone.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'While tropical cyclogenesis in the Bay of Bengal is a natural seasonal phenomenon, the unusually rapid intensification and high thermodynamic potential are directly linked to elevated ocean heat content driven by greenhouse warming (IITM / MoES 2020).',
    impacts: {
      deaths: 64,
      displaced: 1500000,
      populationAffected: 16500000,
      economicLossINR: 24176, // ₹24,176 Crores according to Odisha State Relief Commission & World Bank damage assessment
      infrastructureDamageSummary: 'Massive collapse of electric transmission grid; 5 lakh houses damaged; uprooting of over 10 million trees; total communication blackout in Puri and Bhubaneswar for weeks.',
      agriculturalDamageSummary: 'Devastation of coconut, betel vine, and cashew plantations across Puri and Khurda; salt-spray inundation damaged standing rabi crops.',
      environmentalImpactSummary: 'Severe defoliation of coastal forests and Balukhand-Konark Wildlife Sanctuary; saline water intrusion into Chilika Lake affecting estuarine ecology.'
    },
    institutionalResponse: {
      governmentAction: 'Massive pre-emptive evacuation of 1.4+ million citizens within 48 hours to 1,000+ Multipurpose Cyclone Shelters, earning global praise from the United Nations.',
      ndmaNdrfDeployment: 'Deployment of 65 NDRF and ODRAF specialized search-and-rescue teams equipped with satellite phones and tree cutters.',
      earlyWarningPerformance: 'Pinpoint landfall forecasting by IMD 5 days in advance with less than 25 km spatial error margin.',
      lessonsLearned: [
        'Mass evacuation saves human lives, but infrastructure remains highly vulnerable',
        'Crucial need for underground cabling of power grids in coastal towns',
        'Multi-hazard building codes must be strictly enforced for rural and semi-urban homes'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Under 1.5°C to 2°C warming, models project higher frequency of Very Severe and Extremely Severe cyclonic storms in the North Indian Ocean, with higher storm surge inundation due to rising baseline sea levels.',
      vulnerableHotspots: ['Coastal Odisha (Puri, Jagatsinghpur, Kendrapara)', 'West Bengal Sundarbans', 'North Andhra Coast']
    },
    sources: [srcImd, srcNdmaCyclone, srcIitmCyclone]
  },
  {
    id: 'kerala-floods-2018',
    name: 'Kerala Mega Floods 2018',
    year: 2018,
    dateRange: 'August 8 – August 22, 2018',
    statesAffected: ['Kerala'],
    primaryLocations: ['Idukki', 'Ernakulam', 'Alappuzha', 'Pathanamthitta', 'Thrissur', 'Wayanad'],
    coordinates: { lat: 9.8500, lng: 76.9667 },
    category: 'flood',
    subCategory: 'Synchronous Fluvial, Pluvial & Dam-Spill Inundation',
    description: 'During August 2018, the state of Kerala experienced its worst flood in nearly a century. Continuous torrential monsoon rain from August 1 to 19 resulted in 42% excess monsoon rainfall (and 164% excess during August 8–16). With soil already completely saturated, water gushed into 35 of the state\'s major dams, forcing emergency shutter openings simultaneously.',
    meteorologicalTrigger: 'Persistent low-pressure trough anchored over central peninsular India combined with strong orographic lifting along the Western Ghats, drawing intense moisture streams from the warm Arabian Sea.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'IITM Pune and World Weather Attribution studies confirmed that atmospheric warming increased the atmospheric moisture payload, rendering the extreme multi-day rainfall event ~10–18% more intense than it would have been in the pre-industrial era.',
    impacts: {
      deaths: 483,
      displaced: 1450000,
      populationAffected: 5400000,
      economicLossINR: 31000, // ₹31,000 Crores according to Post-Disaster Needs Assessment (PDNA) by UN & Govt of Kerala
      infrastructureDamageSummary: 'Over 10,000 km of highways and district roads washed out; Cochin International Airport submerged and closed for 14 days; hundreds of bridges destroyed.',
      agriculturalDamageSummary: 'Destruction of 57,000 hectares of agricultural crops including rubber, cardamom, pepper, banana, and paddy.',
      environmentalImpactSummary: 'Triggered over 300 major landslides in the Western Ghats; severe soil erosion and riverbank degradation.'
    },
    institutionalResponse: {
      governmentAction: 'Statewide joint relief operation by Indian Armed Forces (Operation Madad), NDRF, Indian Coast Guard, and local traditional fishermen ("Kerala\'s coastal army") who rescued 65,000+ people.',
      ndmaNdrfDeployment: '58 NDRF teams deployed across all 14 affected districts in the largest ever rescue deployment in Kerala history.',
      earlyWarningPerformance: 'Rainfall forecasts were issued by IMD, but localized dam-inflow telemetry and catchment-scale flood routing integration had gaps.',
      lessonsLearned: [
        'Need for Rule Curves and real-time inflow telemetry for all major reservoirs',
        'Strict regulation of building construction in ecologically sensitive Western Ghats zones (Madhav Gadgil & Kasturirangan recommendations)',
        'Crucial role of community responders (fisherfolk) in localized disaster rescue'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'OBSERVED',
      projectedOutlookNote: 'Observed trend shows a 3-fold rise in widespread extreme rain events along the Western Ghats over the last 6 decades, pointing to repeated flood threats despite lower total seasonal rainfall.',
      vulnerableHotspots: ['Periyar Basin (Ernakulam/Idukki)', 'Pamba Basin (Pathanamthitta)', 'Kuttanad delta', 'Chaliyar Basin']
    },
    sources: [srcImd, srcCwc, srcMoes]
  },
  {
    id: 'north-india-heatwave-2024',
    name: 'North & Central India Prolonged Heat Dome 2024',
    year: 2024,
    dateRange: 'May 16 – June 20, 2024',
    statesAffected: ['Delhi', 'Rajasthan', 'Uttar Pradesh', 'Haryana', 'Punjab', 'Madhya Pradesh', 'Bihar'],
    primaryLocations: ['Delhi NCR', 'Churu', 'Phalodi', 'Banda', 'Prayagraj', 'Varanasi', 'Sirsa'],
    coordinates: { lat: 28.6139, lng: 77.2090 },
    category: 'heatwave',
    subCategory: 'Severe Heatwave & Nocturnal Thermal Stress Event',
    description: 'An unprecedented, prolonged heatwave gripped northern, central, and eastern India for over 35 consecutive days in May and June 2024. Maximum temperatures consistently surpassed 47–49°C across dozens of stations, with Delhi recording 49.2°C and Phalodi (Rajasthan) exceeding 50°C. Critically, night temperatures in Delhi stayed above 35°C, offering no nocturnal physiological relief.',
    meteorologicalTrigger: 'A persistent, stationary anticyclone (heat dome) over north-western India and Pakistan trapped hot air near the surface, while cloud-free skies maximized radiative heating and advected dry, blistering winds eastward across the Gangetic belt.',
    climateConnection: 'direct',
    scientificConfidence: 'very_high',
    attributionEvidence: 'Attribution analysis by international climate scientists and IMD indicates that such prolonged heat domes in South Asia have been made at least 45 times more likely and 1.5°C hotter due to human-induced climate change (World Weather Attribution / MoES).',
    impacts: {
      deaths: 211, // Verified direct heatstroke deaths (hundreds more suspected in hospitalizations across UP/Bihar/Delhi)
      displaced: 'Data unavailable',
      populationAffected: 300000000, // Hundreds of millions under extreme thermal stress
      economicLossINR: 'Data unavailable',
      infrastructureDamageSummary: 'Peak electricity demand in Delhi breached all-time high of 8,656 MW; power transformer explosions and cooling water shortages at thermal plants; widespread water tanker riots in urban slums.',
      agriculturalDamageSummary: 'Scorching of summer vegetables, reduced milk yields from heat-stressed cattle (down 15–20%), drying of fruit orchards.',
      environmentalImpactSummary: 'Drying up of village water ponds, mass death of birds and bats from dehydration across north Indian cities.'
    },
    institutionalResponse: {
      governmentAction: 'Implementation of revised Heat Action Plans in Delhi, Ahmedabad, and UP; municipal water sprinkling on roads; school summer holidays extended by 2 weeks.',
      ndmaNdrfDeployment: 'NDMA issued daily Red Alerts through SACHET Cell Broadcast to over 100 million mobile phones.',
      earlyWarningPerformance: 'IMD accurately predicted the heat dome onset 7 days ahead with continuous red-coded warnings.',
      lessonsLearned: [
        'Night-time temperatures are the deadliest factor in human heat mortality',
        'Outdoor construction and manual labor must be prohibited during peak heat hours (12 PM–4 PM)',
        'Urban cooling shelters and cool roofs are non-negotiable for informal settlements'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'IPCC AR6 projects that South Asia will face severe wet-bulb temperatures exceeding 31°C regularly under 2°C warming, approaching physiological human survival limits for outdoor laborers.',
      vulnerableHotspots: ['Indo-Gangetic Plain', 'Western Arid Plains', 'Vidarbha and Marathwada', 'Urban Heat Islands of Delhi, Lucknow, Jaipur']
    },
    sources: [srcImd, srcNdmaHeat, srcIpccWg2]
  },
  {
    id: 'sikkim-glof-2023',
    name: 'South Lhonak Glacial Lake Outburst Flood (GLOF)',
    year: 2023,
    dateRange: 'October 3 – October 4, 2023',
    statesAffected: ['Sikkim', 'West Bengal'],
    primaryLocations: ['Chungthang', 'Mangan', 'Singtam', 'Rangpo', 'Dikchu'],
    coordinates: { lat: 27.9150, lng: 88.2000 },
    category: 'glof',
    subCategory: 'Moraine Breach & Dam Break Surge',
    description: 'In the pre-dawn hours of October 4, 2023, the moraine dam holding the South Lhonak Glacial Lake in North Sikkim collapsed. A colossal wall of water, ice, and moraine sediment surged into the Teesta River basin. The deluge completely destroyed the 1,200 MW Teesta-III hydroelectric dam at Chungthang within minutes and devastated downstream military camps and civilian settlements.',
    meteorologicalTrigger: 'A sudden failure of the lateral/frontal moraine dam, likely triggered by a massive rock/ice avalanche into the lake following intense localized rainfall, which created a displacement wave that overtopped the natural moraine dam.',
    climateConnection: 'direct',
    scientificConfidence: 'very_high',
    attributionEvidence: 'Satellite imagery tracked by ISRO and Swiss researchers showed South Lhonak Lake had expanded more than 250% in area between 1990 and 2023 due to rapid glacial ice retreat driven by warming Himalayan temperatures.',
    impacts: {
      deaths: 102, // 102 confirmed fatalities including 23 Indian Army soldiers; over 70 missing
      displaced: 8800,
      populationAffected: 88700,
      economicLossINR: 23324, // Major loss including the ₹14,000 Cr Teesta-III dam replacement and infrastructure
      infrastructureDamageSummary: 'Total structural destruction of the 1,200 MW Chungthang dam; 14 major bridges swept away; National Highway 10 completely severed, isolating Sikkim for months.',
      agriculturalDamageSummary: 'Submergence of cardamom and ginger farmlands under meters of glacial slurry and boulders.',
      environmentalImpactSummary: 'Riverbed gouging of up to 10 meters depth; sedimentation of aquatic habitats across the entire Teesta valley into northern West Bengal.'
    },
    institutionalResponse: {
      governmentAction: 'Indian Army, SDRF, and NDRF mobilized emergency air sorties and constructed Bailey suspension bridges for remote communities.',
      ndmaNdrfDeployment: '9 NDRF teams airlifted to Sikkim with deep-search detectors and canine squads.',
      earlyWarningPerformance: 'While scientific studies had flagged South Lhonak as "extremely high risk" since 2013, real-time telemetry sensors installed months prior were non-operational or destroyed during the initial breach.',
      lessonsLearned: [
        'Glacial lake early-warning systems must be redundant, satellite-linked, and hardened against extreme weather',
        'Large hydroelectric dams must not be constructed immediately downstream of hazardous glacial lakes without burst-wave spillways',
        'Real-time communication lines must be independent of terrestrial fiber optic cables in mountain valleys'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Over 180 glacial lakes in the Indian Himalayas are classified as high-risk and continue to expand in volume as Himalayan glaciers lose mass at an accelerating pace.',
      vulnerableHotspots: ['Teesta Basin (Sikkim)', 'Alaknanda & Bhagirathi Basins (Uttarakhand)', 'Sutlej & Chenab Basins (Himachal Pradesh)']
    },
    sources: [srcCurrentSciGlof, srcMoes, srcIpccWg1]
  },
  {
    id: 'chamoli-disaster-2021',
    name: 'Chamoli Rock-Ice Avalanche & Flash Flood',
    year: 2021,
    dateRange: 'February 7, 2021',
    statesAffected: ['Uttarakhand'],
    primaryLocations: ['Raini', 'Tapovan', 'Joshimath', 'Dhauliganga Valley'],
    coordinates: { lat: 30.4853, lng: 79.7337 },
    category: 'glof',
    subCategory: 'High-Altitude Rock-Ice Detachment & Debris Surge',
    description: 'On February 7, 2021, a massive wedge of rock and hanging glacier detached from the north face of Ronti peak (approx. 5,600 m altitude) in the Nanda Devi sanctuary. Falling over 1,800 vertical meters, the potential energy pulverized the ice and bedrock into a fast-moving fluidized slurry of rock, ice, and dust that surged down the Rishiganga and Dhauliganga rivers, destroying the Rishiganga power project and flooding the Tapovan Vishnugad tunnel.',
    meteorologicalTrigger: 'Brittle detachment of approximately 27 million cubic meters of rock and hanging ice along a geological fault line, preceded by anomalous winter warming and freeze-thaw cycles that destabilized permafrost.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'Published studies in Science and Nature indicate that warming air temperatures degrade high-altitude permafrost that cements steep rock walls together, destabilizing hanging glaciers and steep mountain crags (Science, Shugar et al., 2021).',
    impacts: {
      deaths: 204, // 204 deaths/presumed dead, mostly engineers and workers trapped inside Tapovan tunnel
      displaced: 350,
      populationAffected: 2500,
      economicLossINR: 1500, // Estimated direct project infrastructure loss
      infrastructureDamageSummary: 'Rishiganga small hydro project wiped out; NTPC Tapovan Vishnugad barrage and intake tunnels heavily inundated with thick debris; 5 border road bridges destroyed.',
      agriculturalDamageSummary: 'Localized destruction of terraced agriculture and apple orchards along Raini village.',
      environmentalImpactSummary: 'Gorging of the Dhauliganga riverbed; alteration of water turbidity for months downstream.'
    },
    institutionalResponse: {
      governmentAction: 'Massive multi-agency rescue involving NDRF, SDRF, ITBP, Indian Army, and thermal imaging drones to penetrate the slush-filled Tapovan tunnel.',
      ndmaNdrfDeployment: 'Continuous tunnel excavation operations for over 3 weeks in hazardous sub-zero mountain conditions.',
      earlyWarningPerformance: 'No real-time early warning was in place; downstream workers had under 10 minutes from visual/audible sighting before the debris torrent struck.',
      lessonsLearned: [
        'Underground work sites in glaciated river valleys must have emergency acoustic sirens linked to upstream acoustic/seismic sensors',
        'Permafrost thaw must be mapped across all Himalayan infrastructure zones',
        'Worker safety chambers inside tunnels with independent oxygen supplies must be mandated'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'OBSERVED',
      projectedOutlookNote: 'Permafrost thaw and degradation in high Himalayan peaks is accelerating under warming, increasing the frequency of large-scale catastrophic rock-ice detachments.',
      vulnerableHotspots: ['Garhwal Himalayas (Uttarakhand)', 'Zanskar Range (Ladakh)', 'Kinnaur & Spiti (Himachal Pradesh)']
    },
    sources: [srcMoes, srcIpccWg1]
  },
  {
    id: 'chennai-floods-2015',
    name: 'Chennai Extreme Deluge & Urban Inundation 2015',
    year: 2015,
    dateRange: 'November 8 – December 4, 2015 (Peak: Dec 1)',
    statesAffected: ['Tamil Nadu', 'Andhra Pradesh', 'Puducherry'],
    primaryLocations: ['Chennai', 'Kanchipuram', 'Tiruvallur', 'Cuddalore'],
    coordinates: { lat: 13.0827, lng: 80.2707 },
    category: 'extreme_rainfall',
    subCategory: 'Northeast Monsoon Extreme Convective Deluge & Urban Drainage Failure',
    description: 'During the Northeast Monsoon of 2015, coastal Tamil Nadu was struck by record-breaking rainfall fueled by a very strong El Niño event. On December 1, Chennai recorded 494 mm of rainfall in 24 hours, the highest in over a century. Over 1,000 sq km of the urban sprawl was inundated as the Adyar and Cooum rivers burst their banks and Chembarambakkam reservoir discharged 29,000 cusecs of water.',
    meteorologicalTrigger: 'A quasi-stationary low-pressure system in the southwest Bay of Bengal, heavily energized by warm sea surface temperatures and strong El Niño-linked easterly wave moisture flux, interacting with coastal convergence.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'While the Northeast Monsoon naturally brings rain to Tamil Nadu, thermodynamic modeling shows that the intensity of 24-hour rainfall extremes has increased significantly due to a warmer Bay of Bengal (IIT Madras / IIT Bombay studies). Crucially, the catastrophic impact was heavily exacerbated by rampant urbanization over wetlands (Pallikaranai marsh shrank from 5,000 to ~600 hectares).',
    impacts: {
      deaths: 289,
      displaced: 1800000,
      populationAffected: 4000000,
      economicLossINR: 20000, // Estimated ₹15,000 - ₹25,000 Crores
      infrastructureDamageSummary: 'Chennai airport runway submerged and closed for 5 days; southern railway tracks washed away; total power and mobile telecommunications blackout for 4 days.',
      agriculturalDamageSummary: 'Inundation of 3.8 lakh hectares of paddy and groundnut in Kanchipuram and Tiruvallur.',
      environmentalImpactSummary: 'Raw sewage overflowed into residential streets and coastal bays; massive silting of waterways.'
    },
    institutionalResponse: {
      governmentAction: 'Deployment of Indian Army, Navy, Air Force, and NDRF in Operation Madad; airdropping of food packets and inflatable boats across submerged suburbs.',
      ndmaNdrfDeployment: '50 NDRF rescue teams deployed with inflatable zodiac boats.',
      earlyWarningPerformance: 'Rainfall warnings were issued, but urban flood forecasting indicating specific street-level inundation depths did not exist.',
      lessonsLearned: [
        'Urban water bodies and marshlands are critical flood buffers and must not be concretized',
        'Stormwater drainage master plans must be designed for rainfall intensities of at least 70–80 mm/hour rather than legacy 25 mm/hour standards',
        'Crucial need for an integrated Urban Flood Management System (which led to the later creation of C-FLOWS Chennai)'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Projections indicate that coastal urban deluges will occur with greater intensity as coastal atmospheric moisture increases under ongoing warming.',
      vulnerableHotspots: ['Chennai Urban Basin (Velachery, Mudichur, Tambaram)', 'Cuddalore Coastal Plain', 'Nagapattinam Lowlands']
    },
    sources: [srcImd, srcCwc, srcIpccWg2]
  },
  {
    id: 'wayanad-landslides-2024',
    name: 'Wayanad Multi-Point Catastrophic Landslides 2024',
    year: 2024,
    dateRange: 'July 30, 2024',
    statesAffected: ['Kerala'],
    primaryLocations: ['Chooralmala', 'Mundakkai', 'Meppadi', 'Vellarimala'],
    coordinates: { lat: 11.5300, lng: 76.1900 },
    category: 'landslide',
    subCategory: 'Rainfall-Induced Debris Avalanche & Mudflow',
    description: 'In the early hours of July 30, 2024, twin massive debris flows originated near the crest of Vellarimala in the Western Ghats following over 572 mm of rain in 48 hours. A torrent of mud, boulders, and pulverized timber roared down the Iruvaizhinji river valley, completely burying the settlements of Mundakkai and Chooralmala while residents slept.',
    meteorologicalTrigger: 'Intense orographic precipitation driven by a deep monsoon offshore trough along the Konkan-Kerala coast, discharging over 370 mm of rain in 24 hours on soil already saturated by weeks of continuous monsoon rain.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'World Weather Attribution (WWA) study found that the 1-day extreme rainfall event that triggered the slides was made 10% heavier by climate change. This compounded with anthropogenic factors such as monoculture tea/cardamom plantations with shallow root systems replacing native deep-rooted rainforest canopy.',
    impacts: {
      deaths: 420, // 420+ confirmed deaths and missing
      displaced: 10000,
      populationAffected: 30000,
      economicLossINR: 1200,
      infrastructureDamageSummary: 'Chooralmala bridge linking Mundakkai washed away; hundreds of concrete houses, schools, and commercial establishments reduced to rubble; power and water networks pulverized.',
      agriculturalDamageSummary: 'Wiping out of hundreds of hectares of high-yield tea and cardamom plantations under 5–10 meters of mud and stone.',
      environmentalImpactSummary: 'Massive landscape alteration of river valley; complete denudation of native slope vegetation over 8 km track.'
    },
    institutionalResponse: {
      governmentAction: 'Indian Army Madras Sappers constructed a 190-foot Bailey Bridge in record 31 hours across raging torrents, allowing heavy rescue machinery to reach Mundakkai.',
      ndmaNdrfDeployment: 'Joint deployment of NDRF, SDRF, Indian Army, Navy, Coast Guard, and search dog squads.',
      earlyWarningPerformance: 'General orange alert was issued by IMD, but localized site-specific landslide early warning systems with precise catchment thresholding were absent.',
      lessonsLearned: [
        'Habitations in the direct runout zone of high-order mountain drainage channels must be permanently relocated',
        'Slope stabilization through deep-rooted native tree belts must replace tea plantation edges on steep inclines (>20 degrees)',
        'Crucial need for Doppler radar coverage over the Western Ghats gap'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'OBSERVED',
      projectedOutlookNote: 'ISRO Landslide Atlas notes that Kerala\'s Western Ghats have seen an exponential rise in rainfall-triggered shallow landslides over the last 15 years.',
      vulnerableHotspots: ['Wayanad (Meppadi, Vythiri)', 'Idukki (Munnar, Rajamalai)', 'Kozhikode and Malappuram hills']
    },
    sources: [srcIsroLandslide, srcImd, srcMoes]
  },
  {
    id: 'cyclone-biparjoy-2023',
    name: 'Extremely Severe Cyclonic Storm Biparjoy',
    year: 2023,
    dateRange: 'June 6 – June 19, 2023 (Landfall: June 15)',
    statesAffected: ['Gujarat', 'Rajasthan'],
    primaryLocations: ['Jakhau Port', 'Kutch', 'Dwarka', 'Morbi', 'Barmer'],
    coordinates: { lat: 23.2383, lng: 68.7383 },
    category: 'cyclone',
    subCategory: 'Extremely Long-Lived Arabian Sea Cyclone',
    description: 'Cyclone Biparjoy set the record as the longest-lived cyclonic storm over the Arabian Sea (active for 13 days and 3 hours). Traversing the warm Arabian Sea, it made landfall near Jakhau Port in Kutch, Gujarat, with sustained winds of 125–140 km/h, before tracking inland as a depression causing unprecedented flooding in the desert districts of western Rajasthan.',
    meteorologicalTrigger: 'Abnormally high Arabian Sea surface temperatures (31–32°C, 2–3°C above seasonal normal) sustaining a warm core vortex for an exceptionally long duration despite unfavorable wind shear periods.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'Historically, the Arabian Sea witnessed infrequent and short-lived cyclones. IITM Pune research shows a 52% increase in cyclone frequency and an 80% increase in cyclone duration over the Arabian Sea, directly correlated with rapid tropical Indian Ocean warming (IITM / Nature Climate Change).',
    impacts: {
      deaths: 2, // Minimal human casualties due to massive evacuation of 100,000+ people
      displaced: 108000,
      populationAffected: 1200000,
      economicLossINR: 1013,
      infrastructureDamageSummary: 'Over 5,120 electricity poles uprooted in Kutch and Saurashtra, plunging 4,600 villages into darkness; extensive damage to salt pans and port jetties.',
      agriculturalDamageSummary: 'Damage to standing groundnut and cotton crops; destruction of Kutch date-palm orchards.',
      environmentalImpactSummary: 'Flooding of desert ecosystems in the Great Rann of Kutch and western Rajasthan desert scrub.'
    },
    institutionalResponse: {
      governmentAction: 'Proactive evacuation of over 100,000 people from zero to 10 km from the coastline into 1,500 cyclone shelters and pucca buildings.',
      ndmaNdrfDeployment: '18 NDRF teams and 12 SDRF teams pre-positioned across Gujarat coastal districts.',
      earlyWarningPerformance: 'Extremely accurate IMD track forecasting over 10 days, predicting Jakhau landfall days ahead.',
      lessonsLearned: [
        'Timely multi-departmental evacuation achieves zero/minimal casualty goals',
        'Western Indian desert states (Rajasthan) must now prepare for post-cyclone extreme flash flood impacts',
        'Salt pan workers and coastal fisherfolk need dedicated concrete shelter structures'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'The Arabian Sea is warming at the fastest rate among all tropical oceans, leading to continued high frequency of severe cyclones threatening the western Indian coastline.',
      vulnerableHotspots: ['Kutch and Saurashtra (Gujarat)', 'Konkan Coast (Maharashtra)', 'Goa']
    },
    sources: [srcImd, srcIitmCyclone, srcNdmaCyclone]
  },
  {
    id: 'bundelkhand-drought-2015-16',
    name: 'Bundelkhand Chronic Agrarian Drought 2015–2016',
    year: 2015,
    dateRange: 'June 2015 – July 2016',
    statesAffected: ['Uttar Pradesh', 'Madhya Pradesh'],
    primaryLocations: ['Banda', 'Mahoba', 'Jhansi', 'Lalitpur', 'Tikamgarh', 'Chhatarpur', 'Panna'],
    coordinates: { lat: 25.4484, lng: 78.5685 },
    category: 'drought',
    subCategory: 'Multi-Season Compound Meteorological & Hydrological Drought',
    description: 'Following successive monsoon failures in 2014 and 2015 linked to a super El Niño, the semi-arid Bundelkhand region spanning 13 districts of UP and MP experienced an acute agrarian crisis. Over 70% of open dug wells and handpumps ran dry, leading to widespread crop failure of pulses and oilseeds, mass abandonment of cattle ("Anna Pratha"), and distress migration of over 40% of rural youth.',
    meteorologicalTrigger: 'Consecutive deficient Southwest Monsoons (rainfall deficit exceeding 40–50% across two years), combined with extreme summer temperatures exceeding 47°C causing extreme evapotranspiration.',
    climateConnection: 'amplified',
    scientificConfidence: 'medium',
    attributionEvidence: 'While drought cycles have occurred historically in Bundelkhand, anthropogenic climate change has increased the frequency of back-to-back monsoon failures and intensified heat-driven soil moisture depletion (MoES 2020 / NITI Aayog).',
    impacts: {
      deaths: 'Data unavailable', // Indirect deaths due to heat and malnutrition reported in local surveys
      displaced: 1200000, // Millions migrated to Delhi, Surat, and Mumbai as construction labor
      populationAffected: 18000000,
      economicLossINR: 7500, // Crop and livestock losses across 13 districts
      infrastructureDamageSummary: 'Depletion of all major irrigation reservoirs; drying up of Betwa and Ken riverbeds; emergency "Water Trains" deployed to supply drinking water.',
      agriculturalDamageSummary: 'Complete loss of Kharif pulse crop and 60% reduction in Rabi wheat sowing; death or abandonment of over 3 lakh cattle.',
      environmentalImpactSummary: 'Severe depletion of hard-rock basement aquifers down to critical unconfined water table levels.'
    },
    institutionalResponse: {
      governmentAction: 'Central government Bundelkhand Drought Relief Package; implementation of PM Krishi Sinchayee Yojana; expanded MGNREGS work days from 100 to 150 days.',
      ndmaNdrfDeployment: 'Deployment of specialized water trains by Indian Railways (similar to Latur water express).',
      earlyWarningPerformance: 'Rainfall deficits were well-tracked, but ground-level agricultural contingency seed distribution lagged.',
      lessonsLearned: [
        'Restoration of traditional Chandela and Bundela era cascade tanks is essential for regional water security',
        'Promotion of indigenous Bundelkhandi drought-tolerant millets over water-intensive wheat',
        'Urgent need for community-managed fodder banks during dry spells'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Projections show increased frequency of multi-year dry spells in central India under high-emission scenarios, compounding groundwater over-exploitation.',
      vulnerableHotspots: ['Bundelkhand (UP/MP)', 'Marathwada (Maharashtra)', 'Rayalaseema (Andhra Pradesh)']
    },
    sources: [srcMoes, srcWorldBank]
  },
  {
    id: 'mumbai-deluge-2005',
    name: 'Mumbai 26 July Cloudburst & Deluge 2005',
    year: 2005,
    dateRange: 'July 26 – July 27, 2005',
    statesAffected: ['Maharashtra'],
    primaryLocations: ['Mumbai', 'Thane', 'Raigad'],
    coordinates: { lat: 19.0760, lng: 72.8777 },
    category: 'extreme_rainfall',
    subCategory: 'Mesoscale Convective Cloudburst & Urban Stormwater Overload',
    description: 'On July 26, 2005, Mumbai experienced an unprecedented hydrometeorological catastrophe. The Santacruz weather station recorded 944 mm of rain in a single 24-hour period (with over 380 mm in a 3-hour burst), coinciding with a 4.48-meter high tide. The Mithi River burst its banks, submerging the financial capital, trapping suburban train passengers, and inundating the domestic and international airports.',
    meteorologicalTrigger: 'An intense mesoscale convective vortex embedded in the monsoon trough, anchored by coastal convergence and stationary orographic blocking against the Western Ghats.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'Atmospheric thermodynamics dictate that warmer oceanic and air temperatures support extreme localized convective updrafts. This coupled with Mumbai\'s rapid concretization, loss of mangrove wetlands, and clogging of the Mithi River resulted in an extreme human disaster.',
    impacts: {
      deaths: 1094,
      displaced: 100000,
      populationAffected: 12000000,
      economicLossINR: 5500, // Estimated direct economic loss in 2005 values (exceeds ₹15,000 Cr in modern terms)
      infrastructureDamageSummary: 'Mumbai suburban railway network paralyzed for 3 days; thousands of vehicles submerged on roads; total communication network failure.',
      agriculturalDamageSummary: 'Severe losses to suburban vegetable farming and dairy cattle across Thane and Raigad.',
      environmentalImpactSummary: 'Massive contamination of coastal bays with industrial effluent and domestic sewage; post-flood leptospirosis outbreak infecting thousands.'
    },
    institutionalResponse: {
      governmentAction: 'Indian Navy and Army deployed boats in suburbs like Kurla and Kalina; Citizens displayed extraordinary collective solidarity ("Spirit of Mumbai") feeding stranded commuters.',
      ndmaNdrfDeployment: 'Pre-dates the formal operationalization of NDRF (which was established in 2006 following this very catastrophe).',
      earlyWarningPerformance: 'Doppler radar in Mumbai was non-functional on that fateful day; IMD forecast general heavy rain but failed to capture the 944 mm localized burst.',
      lessonsLearned: [
        'Catalyzed the enactment of the Disaster Management Act, 2005 and creation of NDMA/NDRF in India',
        'Necessitated the Mithi River rejuvenation project and BRIMSTOWAD urban storm drainage modernization',
        'Crucial need for multi-Doppler radar networks in all mega-cities'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'OBSERVED',
      projectedOutlookNote: 'Observed extreme rainfall bursts (>100 mm/hour) in Mumbai have doubled in decadal frequency since 2000, regularly causing localized waterlogging.',
      vulnerableHotspots: ['Mithi River Basin (Kurla, Kalina, Chunabhatti)', 'Hindmata and Dadar Lowlands', 'Andheri Subway']
    },
    sources: [srcImd, srcMoes]
  },
  {
    id: 'cyclone-amphan-2020',
    name: 'Super Cyclonic Storm Amphan 2020',
    year: 2020,
    dateRange: 'May 16 – May 21, 2020 (Landfall: May 20)',
    statesAffected: ['West Bengal', 'Odisha'],
    primaryLocations: ['Kolkata', 'South 24 Parganas', 'North 24 Parganas', 'East Medinipur', 'Sundarbans'],
    coordinates: { lat: 21.6500, lng: 88.3500 },
    category: 'cyclone',
    subCategory: 'Super Cyclonic Storm / Category 5 Equivalent',
    description: 'Cyclone Amphan was the first Super Cyclonic Storm in the Bay of Bengal since 1999. It underwent explosive rapid intensification in 24 hours, reaching sustained winds of 260 km/h with a central pressure of 906 hPa over the central Bay of Bengal. Making landfall near Bakkhali in West Bengal, it battered the fragile Sundarbans mangrove delta and delivered Category 2 hurricane-force winds into the heart of Kolkata.',
    meteorologicalTrigger: 'Record-high Sea Surface Temperatures in the Bay of Bengal (32–34°C), driven by a marine heatwave and low vertical wind shear, enabling explosive deepening from a Category 1 to Category 5 system within 24 hours.',
    climateConnection: 'amplified',
    scientificConfidence: 'very_high',
    attributionEvidence: 'The marine heatwave in the Bay of Bengal was directly attributed to anthropogenically driven ocean heat content accumulation (IITM / Nature Climate Change).',
    impacts: {
      deaths: 128, // Across India and Bangladesh (98 in West Bengal)
      displaced: 3000000,
      populationAffected: 18000000,
      economicLossINR: 102446, // ₹1,02,446 Crores ($13.7 Billion), the costliest cyclone in the North Indian Ocean on record
      infrastructureDamageSummary: 'Kolkata\'s century-old tree canopy decimated; streetlights, mobile towers, and power transformers collapsed; airport flooded; Sundarbans earthen embankments breached in 160 places.',
      agriculturalDamageSummary: 'Over 10 lakh hectares of agricultural land flooded with saline seawater, ruining paddy crops and freshwater aquaculture ponds for years.',
      environmentalImpactSummary: 'Severe mangrove forest destruction across 1,200 sq km of the Indian Sundarbans; destruction of Royal Bengal Tiger habitats.'
    },
    institutionalResponse: {
      governmentAction: 'Over 3 million people evacuated into cyclone shelters while managing strict COVID-19 pandemic protocols (social distancing and mask distribution).',
      ndmaNdrfDeployment: '41 NDRF teams mobilized in West Bengal and Odisha for immediate route clearing and humanitarian aid.',
      earlyWarningPerformance: 'IMD accurately predicted track and landfall timing 4 days ahead, preventing mass loss of life.',
      lessonsLearned: [
        'Earthen embankments in the Sundarbans cannot withstand compounding storm surges; need reinforced mangrove bio-shields',
        'Concurrent disasters (cyclone during a pandemic) require dedicated compound disaster SOPs',
        'Power restoration in urban centers requires rapid specialized electrical restoration task forces'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Marine heatwaves in the Bay of Bengal and Arabian Sea are projected to become 10 times more frequent under 2°C global warming, fueling super cyclonic storms.',
      vulnerableHotspots: ['Sundarbans Delta', 'Kolkata Metropolitan Area', 'Coastal Balasore and Bhadrak']
    },
    sources: [srcImd, srcIitmCyclone, srcNdmaCyclone]
  },
  {
    id: 'kedarnath-cloudburst-2013',
    name: 'Kedarnath Extreme Cloudburst & Debris Deluge 2013',
    year: 2013,
    dateRange: 'June 13 – June 17, 2013',
    statesAffected: ['Uttarakhand', 'Himachal Pradesh'],
    primaryLocations: ['Kedarnath', 'Rudraprayag', 'Chamoli', 'Uttarkashi', 'Pithoragarh'],
    coordinates: { lat: 30.7352, lng: 79.0669 },
    category: 'glof',
    subCategory: 'Compound Cloudburst, Moraine Breach & Debris Flow',
    description: 'In June 2013, the state of Uttarakhand received an extraordinary pre-monsoon deluge—over 375% of normal seasonal rainfall. Over June 16–17, intense cloudbursts struck the Kedarnath valley. Behind the sacred Kedarnath shrine, Chorabari Lake (Gandhi Sarovar) filled with massive meltwater and debris, before bursting its moraine dam. A catastrophic surge of water and 10-meter boulders washed away the town of Rambara and devastated the temple township.',
    meteorologicalTrigger: 'An unprecedented meteorological collision between the early-advancing Indian Summer Monsoon moisture surge and an unseasonal mid-latitude Western Disturbance, causing prolonged torrential downpours on snowpacks.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'Climate analyses (IIT Delhi & MoES) indicate that the collision of energetic Western Disturbances with early monsoon surges is becoming more frequent under changing jet stream dynamics, while melting permafrost and moraine destabilization exacerbated the catastrophic dam break.',
    impacts: {
      deaths: 5700, // Official estimate of deaths and missing pilgrims/residents
      displaced: 100000,
      populationAffected: 4200000,
      economicLossINR: 12000,
      infrastructureDamageSummary: 'Rambara township completely erased from existence; 1,000+ bridges destroyed; National Highway 58 and 108 obliterated in multiple stretches.',
      agriculturalDamageSummary: 'Thousands of hillside terrace farms buried under sediment; livestock wiped out across valley villages.',
      environmentalImpactSummary: 'Altered morphology of the Mandakini and Alaknanda riverbeds for tens of kilometers.'
    },
    institutionalResponse: {
      governmentAction: 'Operation Surya Hope: The Indian Armed Forces, NDRF, and ITBP executed the largest civilian helicopter evacuation in human history, airlifting over 100,000 stranded pilgrims.',
      ndmaNdrfDeployment: '14 NDRF battalions deployed; tragic crash of an IAF Mi-17 rescue helicopter claimed the lives of 20 brave rescuers.',
      earlyWarningPerformance: 'General rainfall alerts were issued, but pilgrimage flow control and valley-scale early warning evacuation systems did not exist.',
      lessonsLearned: [
        'Mandatory biometric registration and tracking of all high-altitude pilgrims (Char Dham yatra)',
        'Total prohibition of multi-story concrete hotels on active river floodplains in mountain valleys',
        'Continuous monitoring of moraine-dammed glacial lakes across the Himalayas'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Western Disturbances interacting with monsoonal surges are projected to cause heightened cloudburst frequency across the western and central Himalayas.',
      vulnerableHotspots: ['Mandakini Valley', 'Bhagirathi Valley', 'Alaknanda Gorge', 'Kullu & Beas Valleys']
    },
    sources: [srcMoes, srcImd, srcIpccWg1]
  },
  {
    id: 'bihar-up-lightning-2020',
    name: 'Northern Plains Severe Lightning Outbreak 2020',
    year: 2020,
    dateRange: 'June 25, 2020',
    statesAffected: ['Bihar', 'Uttar Pradesh'],
    primaryLocations: ['Gopalganj', 'Madhubani', 'Siwan', 'Deoria', 'Prayagraj'],
    coordinates: { lat: 26.4700, lng: 84.4400 },
    category: 'lightning',
    subCategory: 'Pre-Monsoon Mesoscale Electrostatic Lightning Strikes',
    description: 'On a single tragic day on June 25, 2020, violent thunderstorms sweeping across the northern Gangetic plains generated tens of thousands of cloud-to-ground lightning strikes. In less than 12 hours, 107 people were struck and killed across Bihar (83 deaths) and Uttar Pradesh (24 deaths). Most victims were agricultural laborers transplanting paddy in flooded fields or sheltering under isolated trees.',
    meteorologicalTrigger: 'Extreme convective available potential energy (CAPE) generated by high surface temperatures (>40°C) colliding with moist monsoonal winds from the Bay of Bengal, creating tall thunderstorm clouds (up to 16 km high) with violent internal charge separation.',
    climateConnection: 'amplified',
    scientificConfidence: 'medium',
    attributionEvidence: 'Atmospheric research (IITM Pune / Climate Dynamics) indicates that for every 1°C increase in surface temperature, lightning frequency increases by ~10–12% due to stronger convective updrafts and higher atmospheric water vapor content.',
    impacts: {
      deaths: 107,
      displaced: 0,
      populationAffected: 50000,
      economicLossINR: 'Data unavailable',
      infrastructureDamageSummary: 'Burnout of dozens of rural electrical distribution transformers; localized telecommunication tower outages.',
      agriculturalDamageSummary: 'Hundreds of farm cattle killed in open pastures.',
      environmentalImpactSummary: 'No significant ecological damage; severe human and livestock trauma.'
    },
    institutionalResponse: {
      governmentAction: 'State governments of Bihar and UP announced ex-gratia compensation of ₹4 lakh per victim family; launched public awareness drives on lightning safety.',
      ndmaNdrfDeployment: 'SDRF teams assisted district administrations in medical triaging and relief processing.',
      earlyWarningPerformance: 'IMD and Indian Institute of Tropical Meteorology DAMINI app generated real-time lightning alerts, but last-mile dissemination to rural farmers in open paddy fields was deficient.',
      lessonsLearned: [
        'Lightning early warnings must be broadcast via village panchayat sirens and regional radio, not just smartphone apps',
        'Paddy farmers need community lightning shelters with lightning conductors in open agricultural fields',
        'Widespread public education on the "Lightning Crouch" and CPR saves lives'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Thunderstorm days and lightning strike density over eastern and central India are modeled to rise by 15–25% over the next two decades under continuing warming.',
      vulnerableHotspots: ['North Bihar (Gopalganj, Siwan, Purnea)', 'Eastern Uttar Pradesh', 'Chhota Nagpur Plateau (Jharkhand)']
    },
    sources: [srcImd, srcMoes]
  },
  {
    id: 'himachal-floods-2023',
    name: 'Himachal Pradesh Extreme Monsoon Deluge & Landslides 2023',
    year: 2023,
    dateRange: 'July 7 – August 25, 2023',
    statesAffected: ['Himachal Pradesh', 'Punjab', 'Uttarakhand'],
    primaryLocations: ['Mandi', 'Kullu', 'Manali', 'Shimla', 'Solan'],
    coordinates: { lat: 31.9579, lng: 77.1095 },
    category: 'landslide',
    subCategory: 'Compound Cloudbursts, Fluvial Surges & Slope Failures',
    description: 'During the 2023 monsoon season, Himachal Pradesh faced an unprecedented hydrological onslaught. In two distinct spells (July 7–11 and August 12–15), the state received catastrophic downpours that caused the Beas, Sutlej, and Ravi rivers to rage at record levels. Catastrophic flash floods washed away entire markets in Manali, while multiple slope failures and building collapses devastated Shimla and Mandi.',
    meteorologicalTrigger: 'A persistent interaction of an active monsoon low with a strong Western Disturbance, resulting in continuous heavy precipitation over steep mountain catchments.',
    climateConnection: 'amplified',
    scientificConfidence: 'high',
    attributionEvidence: 'MoES and geological analyses confirmed that while intense rainfall was climate-amplified, catastrophic structural losses were heavily driven by unscientific slope cutting for 4-lane highway expansion, construction on active river floodplains, and blocked natural drainage channels.',
    impacts: {
      deaths: 428,
      displaced: 25000,
      populationAffected: 1500000,
      economicLossINR: 10000, // Government of HP estimated losses over ₹10,000 Crores
      infrastructureDamageSummary: 'Over 2,500 houses completely destroyed, 11,000 damaged; Chandigarh-Manali NH-21 washed into the Beas; historic Shiv Bawadi temple in Shimla collapsed killing 20.',
      agriculturalDamageSummary: 'Decimation of apple orchards due to landslides; washed away vegetable crops worth hundreds of crores.',
      environmentalImpactSummary: 'Siltation of Bhakra and Pong dam reservoirs to critical levels; massive deforestation of river banks.'
    },
    institutionalResponse: {
      governmentAction: 'State government declared the entire state a "Natural Calamity Affected Area"; mobilized rapid restoration of water and electricity lines.',
      ndmaNdrfDeployment: '14 NDRF teams and Indian Air Force helicopters deployed for rescue and airlifting of stranded tourists in high-altitude Lahaul-Spiti.',
      earlyWarningPerformance: 'IMD red alerts were issued 24 hours in advance, but slope stability warning systems were lacking.',
      lessonsLearned: [
        'Road widening in the Himalayas must use tunnel-and-viaduct designs rather than vertical hill cutting',
        'Strict building bye-laws prohibiting construction on slopes steeper than 35 degrees',
        'Catchment-level silt monitoring for all run-of-the-river hydroelectric power projects'
      ]
    },
    futureOutlook: {
      trendDirection: 'Increasing',
      confidenceTag: 'PROJECTED',
      projectedOutlookNote: 'Projections indicate higher frequency of compound heavy-rain and Western Disturbance events over the northwest Himalayas.',
      vulnerableHotspots: ['Beas River Basin (Kullu-Manali)', 'Shimla Urban Hills', 'Mandi Valley']
    },
    sources: [srcImd, srcIsroLandslide, srcMoes]
  }
];

export const HISTORICAL_DISASTERS: HistoricalDisaster[] = [
  ...CORE_HISTORICAL_DISASTERS,
  ...ARCHIVE_1970_2009,
  ...ARCHIVE_2010_2024
].sort((a, b) => b.year - a.year);

