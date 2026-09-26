import React from 'react';
import { DisasterCategory } from '../types';
import { IndiaRiskMap } from './IndiaRiskMap';
import { HAZARD_CATEGORIES } from '../data/hazards';
import { HISTORICAL_DISASTERS } from '../data/disasters';
import { TricolourBrand } from './TricolourBrand';
import { 
  Shield, 
  Map, 
  Search, 
  HeartHandshake, 
  ArrowRight, 
  ExternalLink, 
  TrendingUp, 
  AlertTriangle, 
  Thermometer, 
  Waves, 
  Zap, 
  Mountain, 
  Compass, 
  FileText, 
  BookOpen, 
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (tab: string, stateOrQuery?: string) => void;
  onSelectDisaster: (disasterId: string) => void;
  onOpenSos: () => void;
  analyticsMode: boolean;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectDisaster,
  onOpenSos,
  analyticsMode
}) => {
  const featuredDisasters = HISTORICAL_DISASTERS.slice(0, 4);

  return (
    <div className="space-y-12 max-w-7xl mx-auto">
      {/* 1. HERO SECTION: Global Warming to India Resilience */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/60 border border-slate-800 rounded-3xl p-6 sm:p-12 shadow-2xl">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <TricolourBrand size="lg" withBadge={true} withChakraIcon={true} />
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>OFFICIAL CLIMATE INTELLIGENCE</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
            Bridging Climate Science, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-slate-100 to-emerald-400">
              Disaster Preparedness & Action
            </span> for India.
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            <span className="font-extrabold text-amber-400">Bhoomi</span><span className="text-slate-200 font-bold mx-0.5">·</span><span className="font-extrabold text-emerald-400">Rakshak</span> translates complex meteorological data from IMD, MoES, NDMA, and the IPCC into 
            localized hazard intelligence, verified historical post-mortems (1970–2025), and frugal resilience actions 
            tailored for Indian households, panchayats, and municipalities.
          </p>

          {/* Quick CTA Actions */}
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('hazards')}
              className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-emerald-950"
            >
              <span>Explore 10 Hazard Categories</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('disasters')}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer border border-slate-700"
            >
              <Search className="w-4 h-4 text-emerald-400" />
              <span>Search Historical Calamities</span>
            </button>
            <button
              onClick={() => onNavigate('solutions')}
              className="px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-xs sm:text-sm transition-all cursor-pointer border border-slate-800"
            >
              Frugal Solutions (&lt; ₹5k)
            </button>
          </div>
        </div>

        {/* Headline Indicators Strip */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
          <div>
            <span className="text-slate-500 uppercase tracking-wider block text-[10px]">India Land Warming</span>
            <span className="text-emerald-400 font-bold text-lg sm:text-xl">+0.7°C</span>
            <span className="text-slate-400 text-[11px] block">MoES 1901–2018 record</span>
          </div>
          <div>
            <span className="text-slate-500 uppercase tracking-wider block text-[10px]">Indian Ocean Warming</span>
            <span className="text-blue-400 font-bold text-lg sm:text-xl">+1.2°C</span>
            <span className="text-slate-400 text-[11px] block">Fastest tropical ocean</span>
          </div>
          <div>
            <span className="text-slate-500 uppercase tracking-wider block text-[10px]">Extreme Rain Frequency</span>
            <span className="text-teal-400 font-bold text-lg sm:text-xl">+300%</span>
            <span className="text-slate-400 text-[11px] block">Events &gt; 150mm / day</span>
          </div>
          <div>
            <span className="text-slate-500 uppercase tracking-wider block text-[10px]">Vulnerable Coastline</span>
            <span className="text-amber-400 font-bold text-lg sm:text-xl">7,516 km</span>
            <span className="text-slate-400 text-[11px] block">Storm surges &amp; erosion</span>
          </div>
        </div>
      </section>

      {/* 2. WHY INDIA IS UNIQUELY VULNERABLE (4 Pillars) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <span>Why India Is Uniquely Vulnerable to Climate Extremes</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Unique convergence of high population density, fragile Himalayan geomorphology, and tropical ocean dynamics
            </p>
          </div>
          <button
            onClick={() => onNavigate('climate101')}
            className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold cursor-pointer hidden sm:flex items-center gap-1"
          >
            <span>Read Climate 101 Guide</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all space-y-2">
            <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-wider block">
              PILLAR 01 · CRYOSPHERE
            </span>
            <h3 className="text-sm font-bold text-white">The "Third Pole" Glaciers</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Himalayas warm faster than the global mean (Elevation-Dependent Warming). Retreating ice expands over 180 dangerous moraine lakes, risking catastrophic GLOFs.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all space-y-2">
            <span className="text-[10px] font-mono font-bold text-teal-400 uppercase tracking-wider block">
              PILLAR 02 · MARITIME
            </span>
            <h3 className="text-sm font-bold text-white">Rapid Cyclonic Intensification</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Elevated ocean heat content in the Arabian Sea (+52% cyclone surge) and Bay of Bengal triggers explosive Category 4/5 cyclone deepening within 24 hours.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all space-y-2">
            <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider block">
              PILLAR 03 · MONSOON
            </span>
            <h3 className="text-sm font-bold text-white">Compressed Monsoonal Bursts</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Rainfall regime is shifting to "fewer rainy days, but violent bursts". Concretized cities face pluvial flash floods, while agrarian drylands face sudden drought breaks.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all space-y-2">
            <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider block">
              PILLAR 04 · SOCIO-ECONOMIC
            </span>
            <h3 className="text-sm font-bold text-white">Informal Labor & Heat Stress</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Hundreds of millions of outdoor farm, construction, and gig workers operate at the dangerous physiological limits of wet-bulb temperature (&gt; 31°C).
            </p>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE INDIA HAZARD & RISK MAP */}
      <section className="space-y-4">
        <IndiaRiskMap
          onSelectStateForDisasters={(stateName) => onNavigate('disasters', stateName)}
          onSelectStateForProfile={(stateId) => onNavigate('location', stateId)}
        />
      </section>

      {/* 4. VERIFIED HISTORICAL DISASTER SPOTLIGHTS */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-400" />
              <span>Flagship Historical Disaster Case Studies</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Detailed post-mortems analyzing physical triggers, attribution confidence, institutional responses, and lessons learned
            </p>
          </div>
          <button
            onClick={() => onNavigate('disasters')}
            className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold cursor-pointer flex items-center gap-1"
          >
            <span>View All ({HISTORICAL_DISASTERS.length}) Disasters</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredDisasters.map((d) => (
            <div
              key={d.id}
              onClick={() => onSelectDisaster(d.id)}
              className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                  <span className="text-emerald-400 font-bold">{d.year}</span>
                  <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 capitalize text-[10px]">
                    {d.category}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
                  {d.name}
                </h3>
                <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">{d.statesAffected.join(', ')}</p>
                <p className="text-xs text-slate-300 mt-2.5 line-clamp-3 leading-relaxed">
                  {d.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-emerald-400 font-semibold">
                <span>View Full Dossier</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. QUICK GATEWAYS: CASCADING & FRUGAL SOLUTIONS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Gateway 1: Cascading Failure Tree */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-blue-950/40 border border-slate-800 shadow-xl space-y-3 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
              SYSTEMIC RISK SIMULATOR
            </span>
            <h3 className="text-xl font-bold text-white mt-2">
              "What Could Happen Next?" Domino Chains
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              Explore step-by-step visual cascade simulations for Urban Flooding, Heat Domes, Cyclones, and GLOFs. 
              Understand how atmospheric shocks knock out municipal drainage, electrical substations, water purification, and healthcare.
            </p>
          </div>
          <button
            onClick={() => onNavigate('cascading')}
            className="w-fit py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2 transition-colors cursor-pointer mt-4"
          >
            <span>Launch Cascading Simulator</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Gateway 2: Low-Cost Solutions */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-emerald-950/40 border border-slate-800 shadow-xl space-y-3 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
              INDIAN FRUGAL ENGINEERING
            </span>
            <h3 className="text-xl font-bold text-white mt-2">
              Low-Cost Household & Community Solutions (&lt; ₹5,000)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              Adaptation shouldn't be locked behind expensive imported technology. Discover high-albedo cool roof lime-wash, 
              deep-root vetiver slope binding, bamboo check dams, and indigenous millet agriculture.
            </p>
          </div>
          <button
            onClick={() => onNavigate('solutions')}
            className="w-fit py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs flex items-center gap-2 transition-colors cursor-pointer mt-4"
          >
            <span>Explore Frugal Solutions Matrix</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
