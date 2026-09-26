import { ClimateIndicator } from '../types';

export const INDIA_CLIMATE_METRICS: ClimateIndicator[] = [
  {
    id: 'india-temp-rise',
    title: 'India Mean Surface Temperature Rise',
    value: '+0.7°C',
    unit: 'above 1901–1930 baseline',
    baseline: '1901–2024 Historical Record',
    trend: 'up',
    trendDescription: 'Driven by anthropogenic greenhouse gas radiative forcing, with accelerated warming observed since the 1980s.',
    sourceOrg: 'Ministry of Earth Sciences (MoES)',
    sourceDoc: 'Assessment of Climate Change over the Indian Region (2020)',
    implicationForIndia: 'Expanding spatial extent of summer heatwaves, earlier onset of pre-monsoon heat domes, and warmer winters reducing wheat chilling hours.'
  },
  {
    id: 'indian-ocean-warming',
    title: 'Tropical Indian Ocean Surface Warming',
    value: '+1.2°C',
    unit: 'rise over 1950–2020',
    baseline: 'Rate of 0.15°C per decade',
    trend: 'up',
    trendDescription: 'Warming at the fastest rate of any tropical ocean basin globally, accounting for over 25% of global ocean heat absorption.',
    sourceOrg: 'IITM Pune / IPCC AR6',
    sourceDoc: 'Nature Climate Change & IPCC WG1 South Asia',
    implicationForIndia: 'Thermodynamic fuel for rapid cyclonic intensification in the Arabian Sea & Bay of Bengal; frequent marine heatwaves damaging coral reefs.'
  },
  {
    id: 'extreme-rain-intensity',
    title: 'Central India Daily Extreme Rain Events (>150mm)',
    value: '+300%',
    unit: 'increase in frequency',
    baseline: 'Compared to 1950–1970 averages',
    trend: 'up',
    trendDescription: 'The 3-fold rise in localized torrential downpours occurs alongside an overall slight decline in total monsoon seasonal precipitation.',
    sourceOrg: 'IITM Pune',
    sourceDoc: 'Roxy et al., Nature Communications',
    implicationForIndia: 'Compressed rainfall regimes: prolonged dry spells interrupted by high-velocity deluge events that overwhelm stormwater drainage.'
  },
  {
    id: 'indian-sea-level-rise',
    title: 'Indian Coast Relative Sea-Level Rise',
    value: '3.3 mm/yr',
    unit: 'average coastal rate (1993–2024)',
    baseline: 'Historical century rate was 1.7 mm/yr',
    trend: 'up',
    trendDescription: 'Accelerated thermal expansion and global ice sheet meltwater contribution compounded by local delta subsidence.',
    sourceOrg: 'MoES / National Centre for Coastal Research (NCCR)',
    sourceDoc: 'NCCR Shoreline Management Atlas',
    implicationForIndia: 'Accelerating tidal flooding, severe shoreline erosion affecting 34% of mainland coast, and deep inland saline intrusion into coastal freshwater aquifers.'
  },
  {
    id: 'himalayan-glacier-loss',
    title: 'Himalayan Cryosphere Glacier Mass Balance',
    value: '-0.23 m w.e./yr',
    unit: 'annual average ice loss rate',
    baseline: 'Monitored across 1970–2024',
    trend: 'down',
    trendDescription: 'Consistent negative mass balance across Hindu Kush-Himalaya glaciers driven by atmospheric warming and black carbon deposition.',
    sourceOrg: 'ISRO / Wadia Institute of Himalayan Geology',
    sourceDoc: 'IPCC SROCC & ISRO Cryosphere Atlas',
    implicationForIndia: 'Initial expansion of hazardous moraine-dammed glacial lakes (GLOF risk), followed by projected post-2050 decline in dry-season lean flows for Indus and Ganga.'
  }
];

export interface ScienceCoreConcept {
  id: string;
  title: string;
  badge: string;
  definition: string;
  deepDive: string;
  indianContext: string;
  commonMisconceptions: string[];
}

export const CLIMATE_SCIENCE_CONCEPTS: ScienceCoreConcept[] = [
  {
    id: 'global-warming-vs-climate-change',
    title: 'Global Warming vs. Climate Change',
    badge: 'Fundamental Distinction',
    definition: 'Global Warming refers specifically to the long-term rise in Earth\'s global average surface temperature caused by human greenhouse gas emissions. Climate Change is the broader umbrella term encompassing global warming PLUS all resulting shifts in precipitation, wind patterns, sea levels, and seasonal cycles.',
    deepDive: 'The greenhouse effect is a natural physical process: greenhouse gases like CO2, CH4, and N2O trap outgoing longwave infrared radiation, keeping Earth\'s average temperature at an inhabitable ~15°C (instead of a frozen -18°C). However, burning fossil fuels, deforestation, and industrial agriculture have elevated atmospheric CO2 from pre-industrial ~280 ppm to over 420 ppm, creating an energy imbalance of ~1 Watt/m² continuously warming the planetary system.',
    indianContext: 'In India, global warming is not felt merely as "warmer air". Because India is bounded by the warming tropical Indian Ocean to the south and the high-altitude Himalayan cryosphere to the north, slight temperature increases fundamentally perturb the South Asian summer monsoon engine.',
    commonMisconceptions: [
      'Misconception: "Global warming means every single day and season will be hotter everywhere." Fact: Global warming shifts the climate baseline, which can also trigger erratic unseasonal cold snaps or destabilized jet streams.',
      'Misconception: "Climate change and natural weather variability are the same thing." Fact: Weather is the atmospheric state over hours or days; climate is the statistical average of weather over 30+ years.'
    ]
  },
  {
    id: 'variability-vs-anthropogenic-trend',
    title: 'Natural Climate Variability vs. Anthropogenic Trends',
    badge: 'Attribution Rigor',
    definition: 'Natural climate variability describes natural cyclic oscillations (like El Niño-Southern Oscillation, Indian Ocean Dipole) that redistribute heat without changing total planetary energy. Anthropogenic climate change is a sustained, secular upward trend in total planetary heat caused by human activities.',
    deepDive: 'Natural cycles operate on multi-month or decadal timescales: El Niño conditions in the Pacific typically suppress the Indian Southwest Monsoon, while a Positive Indian Ocean Dipole (IOD) tends to enhance rainfall. Anthropogenic warming does not replace these cycles; rather, it "loads the climate dice," altering their baseline frequencies and amplifying extreme phases.',
    indianContext: 'Attribution scientists must carefully separate whether an erratic monsoon year was caused by an active El Niño, a negative IOD, or anthropogenic warming. Often, it is a compound interaction: El Niño provides the trigger, while warmer baseline air amplifies the severity of heat and moisture deficits.',
    commonMisconceptions: [
      'Misconception: "Every severe flood or cyclone in India is proof of climate change." Fact: India has experienced severe floods and cyclones for millennia; climate change acts as an amplifier (more moisture, rapid intensification), not the sole creator.',
      'Misconception: "If a drought happens during an El Niño, climate change had zero role." Fact: Higher baseline temperatures cause higher evapotranspiration, making that El Niño-induced drought significantly drier.'
    ]
  },
  {
    id: 'southwest-monsoon-engine',
    title: 'The Indian Southwest Monsoon & Thermodynamic Shifts',
    badge: 'Meteorological Engine',
    definition: 'The Southwest Monsoon (June–September) accounts for over 70% of India\'s annual precipitation, driven by differential solar heating between the Asian landmass and the Indian Ocean, steered by the Coriolis effect.',
    deepDive: 'Under global warming, two competing forces affect the monsoon: (1) Thermodynamic effect: A warmer atmosphere holds ~7% more moisture per 1°C (Clausius-Clapeyron equation), favoring heavier rain bursts. (2) Dynamic effect: Aerosol pollution (sulfates and black carbon) over South Asia reflects sunlight, dimming the land surface and weakening the thermal contrast that drives monsoon winds.',
    indianContext: 'The result is a more volatile monsoon: total seasonal rainfall has shown a slight weakening over central India, but extreme, high-volume daily rainfall events (>150 mm) have increased threefold since 1950. Farmers face longer dry breaks interspersed with violent downpours.',
    commonMisconceptions: [
      'Misconception: "Climate change will simply cause the monsoon to fail completely." Fact: Scientific consensus projects a more erratic, spatially uneven monsoon with higher day-to-day variability and more intense extreme wet and dry spells.'
    ]
  }
];

export interface ImpactCausalStep {
  step: number;
  label: string;
  detail: string;
  exampleInIndia: string;
}

export const CLIMATE_IMPACT_CHAIN: ImpactCausalStep[] = [
  {
    step: 1,
    label: 'Global Warming',
    detail: 'Elevated greenhouse gas concentrations trap excess infrared radiation, raising global mean surface and ocean temperatures.',
    exampleInIndia: 'Pan-India surface temperature has risen by +0.7°C since 1901; northern latitudes and Western Ghats warm faster.'
  },
  {
    step: 2,
    label: 'Changing Temperature Patterns',
    detail: 'Higher thermal energy shifts the baseline: maximum and minimum temperatures rise; nocturnal cooling decreases.',
    exampleInIndia: 'May 2024: 35+ consecutive days of 45–49°C across northern India; night temperatures stay above 35°C in Delhi.'
  },
  {
    step: 3,
    label: 'Changing Rainfall Patterns',
    detail: 'Warmer atmosphere holds more water vapor (~7%/°C), altering monsoon circulation, sea breezes, and storm tracks.',
    exampleInIndia: 'Fewer total rainy days across central India, but 300% increase in daily torrential rain bursts exceeding 150 mm.'
  },
  {
    step: 4,
    label: 'Shifting Extreme Hazard Dynamics',
    detail: 'Thermodynamics fuel rapid intensification of tropical storms, heat domes, localized cloudbursts, and accelerated glacial retreat.',
    exampleInIndia: 'Arabian Sea cyclone frequency surges by 52%; rapid intensification occurs within 24 hours (e.g. Cyclone Tauktae, Biparjoy).'
  },
  {
    step: 5,
    label: 'Environmental & Socioeconomic Shocks',
    detail: 'Physical hazards strike vulnerable ecosystems and built environments, causing structural disruption.',
    exampleInIndia: 'Flash floods breach mountain riverbanks; saline seawater inundates Sundarbans paddy fields; urban water drains fail.'
  },
  {
    step: 6,
    label: 'Compound Risks to Human Life & Economy',
    detail: 'Cascading failures across health, food security, drinking water access, critical infrastructure, and national GDP.',
    exampleInIndia: 'Outdoor labor productivity loss, crop loss in Bundelkhand, leptospirosis outbreaks, and billions of dollars in annual disaster damage.'
  }
];

export const ATTRIBUTION_LEVELS_EXPLAINED = [
  {
    type: 'direct',
    title: 'Direct Climate Connection',
    color: 'emerald',
    badge: 'Direct Link',
    criteria: 'Direct thermodynamic causality with high empirical consensus. Physics directly mandates the shift.',
    examples: 'Increasing frequency/intensity of extreme heatwaves; sea-level rise along Indian coasts; retreat of Himalayan valley glaciers.',
    scientificConfidence: 'Very High (IPCC AR6 / MoES 2020)'
  },
  {
    type: 'amplified',
    title: 'Climate Influence / Amplification',
    color: 'blue',
    badge: 'Amplified Hazard',
    criteria: 'Natural meteorological triggers (e.g. monsoon low, convective storm) are amplified in intensity, duration, or moisture volume by climate warming.',
    examples: 'Clausius-Clapeyron intensification of short-duration rainfall; rapid intensification of tropical cyclones over warm oceans; rainfall-triggered landslides.',
    scientificConfidence: 'High (IITM Pune / Nature Climate Change)'
  },
  {
    type: 'uncertain',
    title: 'Possible / Complex / Uncertain',
    color: 'amber',
    badge: 'Uncertain / Complex',
    criteria: 'Multiple competing dynamic factors where long-term historical records show mixed signals or observational limitations.',
    examples: 'Total number of Bay of Bengal cyclonic storms (frequency vs. intensity); localized lightning density trends; fine-scale cloudburst dynamics.',
    scientificConfidence: 'Medium to Low (Requires continued observation)'
  },
  {
    type: 'primarily_non_climate',
    title: 'Primarily Non-Climate / Human Driven',
    color: 'slate',
    badge: 'Local Anthropogenic',
    criteria: 'Catastrophic losses driven predominantly by local land-use failure, encroachment, or geological factors, where climate is only a secondary aggravator.',
    examples: 'Urban flooding caused by building on lakebeds and blocked storm drains; landslides caused by toe-cutting for road widening; tectonic rockfalls.',
    scientificConfidence: 'High (Geological & urban planning audits)'
  }
];
