import React, { useState } from 'react';
import { HazardCategoryInfo, DisasterCategory } from '../types';
import { HAZARD_CATEGORIES } from '../data/hazards';
import { 
  Flame, 
  CloudRain, 
  Waves, 
  Compass, 
  SunMedium, 
  Mountain, 
  Snowflake, 
  Zap, 
  Anchor, 
  FlameKindling,
  ArrowRight,
  ShieldCheck,
  MapPin,
  TrendingUp,
  FileText,
  X,
  AlertTriangle,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface HazardsViewProps {
  onSelectHazardForDisasters: (hazardId: DisasterCategory) => void;
  onSelectHazardForSolutions: (hazardId: DisasterCategory) => void;
}

export const HazardsView: React.FC<HazardsViewProps> = ({
  onSelectHazardForDisasters,
  onSelectHazardForSolutions
}) => {
  const [selectedHazard, setSelectedHazard] = useState<HazardCategoryInfo | null>(null);

  const getHazardIcon = (id: DisasterCategory) => {
    switch (id) {
      case 'heatwave': return Flame;
      case 'extreme_rainfall': return CloudRain;
      case 'flood': return Waves;
      case 'cyclone': return Compass;
      case 'drought': return SunMedium;
      case 'landslide': return Mountain;
      case 'glof': return Snowflake;
      case 'lightning': return Zap;
      case 'coastal': return Anchor;
      case 'wildfire': return FlameKindling;
      default: return AlertTriangle;
    }
  };

  const getAttributionColor = (attr: string) => {
    switch (attr) {
      case 'direct':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'amplified':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'uncertain':
        return 'bg-amber-500/10 text-amber-300 border-amber-500/30';
      default:
        return 'bg-slate-700 text-slate-300 border-slate-600';
    }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-2">
            PHASE 2 & PHASE 5: INDIA HAZARD TAXONOMY
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Classification of India's Environmental & Climate Hazards
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
            Covering 22 specific phenomena across 10 primary clusters. Grounded in physical mechanisms, 
            empirical decadal trends, and NDMA hazard management frameworks without forcing unrelated disasters into climate attribution.
          </p>
        </div>
      </div>

      {/* 10 Hazard Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {HAZARD_CATEGORIES.map((cat) => {
          const Icon = getHazardIcon(cat.id);
          return (
            <div
              key={cat.id}
              className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 shadow-lg flex flex-col justify-between transition-all group hover:bg-slate-900/90"
            >
              <div>
                {/* Card Top: Icon & Attribution Tag */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shadow-md">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span
                    className={`text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded border ${getAttributionColor(
                      cat.climateChangeRelationship.attributionLevel
                    )}`}
                  >
                    {cat.climateChangeRelationship.attributionLevel.replace('_', ' ')}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-[11px] font-mono text-slate-400 mt-0.5 line-clamp-1">
                  {cat.scientificTerm}
                </p>

                <p className="text-xs text-slate-300 mt-3 line-clamp-3 leading-relaxed">
                  {cat.summary}
                </p>

                {/* Hotspot highlights */}
                <div className="mt-4 pt-3 border-t border-slate-800">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Key Hotspots:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {cat.indiaHotspotRegions.slice(0, 2).map((reg, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60 truncate max-w-full"
                      >
                        {reg.split('(')[0].trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center gap-2">
                <button
                  onClick={() => setSelectedHazard(cat)}
                  className="flex-1 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-md"
                >
                  <span>Scientific Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onSelectHazardForDisasters(cat.id)}
                  className="py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium border border-slate-700 transition-colors cursor-pointer"
                >
                  Events
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Deep Dive Modal */}
      {selectedHazard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950/60 p-6 border-b border-slate-800 flex items-start justify-between">
              <div className="flex items-center gap-3.5">
                {(() => {
                  const Icon = getHazardIcon(selectedHazard.id);
                  return (
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                  );
                })()}
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                      {selectedHazard.name}
                    </h2>
                    <span
                      className={`text-xs font-mono uppercase px-2 py-0.5 rounded border ${getAttributionColor(
                        selectedHazard.climateChangeRelationship.attributionLevel
                      )}`}
                    >
                      {selectedHazard.climateChangeRelationship.attributionLevel} attribution
                    </span>
                  </div>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    {selectedHazard.scientificTerm}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedHazard(null)}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-300">
              {/* Summary Banner */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 leading-relaxed text-slate-300">
                {selectedHazard.summary}
              </div>

              {/* Physical Mechanism & Climate Connection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-emerald-400" />
                    Physical Mechanism (Why It Occurs)
                  </h4>
                  <p className="text-slate-400 leading-relaxed text-xs">
                    {selectedHazard.physicalMechanism}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    Climate Change Connection
                  </h4>
                  <p className="text-slate-400 leading-relaxed text-xs">
                    {selectedHazard.climateChangeRelationship.driverMechanism}
                  </p>
                  <div className="pt-2 text-[11px] font-mono text-slate-300 border-t border-slate-800/80">
                    Consensus: {selectedHazard.climateChangeRelationship.scientificConsensusSummary}
                  </div>
                </div>
              </div>

              {/* Decadal Trends & Hotspots */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                    Observed Decadal Trends
                  </h4>
                  <p className="text-slate-400 leading-relaxed text-xs">
                    {selectedHazard.decadalTrends}
                  </p>
                  <p className="text-[11px] text-emerald-400/90 font-mono mt-2">
                    Observed: {selectedHazard.climateChangeRelationship.observedTrend}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    India Hotspot Regions
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-400">
                    {selectedHazard.indiaHotspotRegions.map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-400">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* NDMA Citizen Preparedness Protocols (Before, During, After) */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Official NDMA Citizen Preparedness Protocol</span>
                  </h4>
                  <span className="text-[10px] font-mono text-slate-400">
                    {selectedHazard.ndmaGuidelineRef}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  {/* Before */}
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-2">
                      1. Before (Mitigation & Prep)
                    </span>
                    <ul className="space-y-1.5 text-slate-300">
                      {selectedHazard.preparednessBrief.before.map((step, i) => (
                        <li key={i} className="flex items-start gap-1.5 leading-snug">
                          <span className="text-amber-400 mt-0.5">•</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* During */}
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider block mb-2">
                      2. During (Active Hazard)
                    </span>
                    <ul className="space-y-1.5 text-slate-300">
                      {selectedHazard.preparednessBrief.during.map((step, i) => (
                        <li key={i} className="flex items-start gap-1.5 leading-snug">
                          <span className="text-red-400 mt-0.5">•</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* After */}
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-2">
                      3. After (Recovery)
                    </span>
                    <ul className="space-y-1.5 text-slate-300">
                      {selectedHazard.preparednessBrief.after.map((step, i) => (
                        <li key={i} className="flex items-start gap-1.5 leading-snug">
                          <span className="text-emerald-400 mt-0.5">•</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  const hId = selectedHazard.id;
                  setSelectedHazard(null);
                  onSelectHazardForDisasters(hId);
                }}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs transition-colors cursor-pointer shadow-md"
              >
                View Historical Disasters for {selectedHazard.name}
              </button>
              <button
                onClick={() => {
                  const hId = selectedHazard.id;
                  setSelectedHazard(null);
                  onSelectHazardForSolutions(hId);
                }}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
              >
                View Tailored Sustainable Solutions
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
