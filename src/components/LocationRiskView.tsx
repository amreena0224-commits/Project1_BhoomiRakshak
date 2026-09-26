import React, { useState } from 'react';
import { StateHazardProfile, DisasterCategory } from '../types';
import { STATES_HAZARDS } from '../data/states';
import { HISTORICAL_DISASTERS } from '../data/disasters';
import { SUSTAINABLE_SOLUTIONS } from '../data/solutions';
import { 
  MapPin, 
  ShieldAlert, 
  PhoneCall, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink,
  Waves,
  Flame,
  Compass,
  Mountain,
  Snowflake,
  SunMedium
} from 'lucide-react';

interface LocationRiskViewProps {
  initialStateId?: string;
  onNavigateToDisasters: (stateName: string) => void;
  onNavigateToSolutions: (hazardId: DisasterCategory) => void;
}

export const LocationRiskView: React.FC<LocationRiskViewProps> = ({
  initialStateId,
  onNavigateToDisasters,
  onNavigateToSolutions
}) => {
  const [selectedStateId, setSelectedStateId] = useState<string>(initialStateId || 'odisha');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');

  const currentState = STATES_HAZARDS.find((s) => s.id === selectedStateId) || STATES_HAZARDS[0];

  // Disasters matching this state
  const stateDisasters = HISTORICAL_DISASTERS.filter((d) =>
    d.statesAffected.includes(currentState.name)
  );

  // Recommended solutions for this state's dominant hazards
  const relevantSolutions = SUSTAINABLE_SOLUTIONS.filter((sol) =>
    sol.hazardTargets.some((hz) => currentState.dominantHazards.includes(hz))
  ).slice(0, 4);

  const getScoreColor = (score: number) => {
    if (score >= 88) return 'text-red-400 bg-red-950/60 border-red-500/40';
    if (score >= 82) return 'text-orange-400 bg-orange-950/60 border-orange-500/40';
    return 'text-amber-400 bg-amber-950/60 border-amber-500/40';
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
            PHASE 10 & 11: LOCATION-BASED RISK ASSESSMENT
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Localized Climate Risk Profile & Emergency Directory
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
            Select your Indian State or Union Territory to inspect its multi-hazard exposure index, 
            district hotspots, historical calamity log, and direct State Disaster Management Authority (SDMA) helplines.
          </p>
        </div>

        {/* State and District Selectors */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
              Select State / Union Territory:
            </label>
            <select
              value={selectedStateId}
              onChange={(e) => {
                setSelectedStateId(e.target.value);
                setSelectedDistrict('');
              }}
              className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
            >
              {STATES_HAZARDS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} ({s.type} - {s.region} India)
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
              Select Vulnerable District (Optional):
            </label>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
            >
              <option value="">All State Hotspots</option>
              {currentState.keyDistrictsHotspots.map((d) => (
                <option key={d} value={d}>
                  {d} (High-Risk Hotspot)
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main State Risk Overview Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 8 Cols: Hazard Profile & Past Events */}
        <div className="lg:col-span-8 space-y-6">
          {/* State Summary Banner */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold text-white">{currentState.name}</h2>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {currentState.region} India
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {currentState.disasterSummary}
                </p>
              </div>

              <div className="shrink-0 text-right">
                <div className={`px-4 py-2 rounded-2xl border font-mono text-center ${getScoreColor(currentState.vulnerabilityScore)}`}>
                  <div className="text-2xl font-black">{currentState.vulnerabilityScore}</div>
                  <div className="text-[9px] uppercase tracking-wider">Vulnerability / 100</div>
                </div>
              </div>
            </div>

            {/* Dominant Hazards Matrix */}
            <div>
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                Identified Dominant Climate Hazards
              </span>
              <div className="flex flex-wrap gap-2">
                {currentState.dominantHazards.map((hz) => (
                  <button
                    key={hz}
                    onClick={() => onNavigateToSolutions(hz)}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors cursor-pointer flex items-center gap-1.5 capitalize"
                  >
                    <span>{hz}</span>
                    <ArrowRight className="w-3 h-3 text-emerald-400" />
                  </button>
                ))}
              </div>
            </div>

            {/* District Hotspots list */}
            <div>
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                Key Vulnerable District Hotspots:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentState.keyDistrictsHotspots.map((dist) => (
                  <span
                    key={dist}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono flex items-center gap-1 border ${
                      selectedDistrict === dist
                        ? 'bg-emerald-600 text-slate-950 font-bold border-emerald-500'
                        : 'bg-slate-950 text-slate-300 border-slate-800'
                    }`}
                  >
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    <span>{dist}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Historical Disaster Occurrences for this State */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                <span>Major Documented Historical Calamities in {currentState.name}</span>
              </h3>
              <button
                onClick={() => onNavigateToDisasters(currentState.name)}
                className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold cursor-pointer"
              >
                View in Search Archive →
              </button>
            </div>

            {stateDisasters.length === 0 ? (
              <p className="text-xs text-slate-400">
                No high-casualty disasters cataloged for {currentState.name} in the primary database sample.
              </p>
            ) : (
              <div className="space-y-3">
                {stateDisasters.map((d) => (
                  <div
                    key={d.id}
                    className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-emerald-400">{d.year}</span>
                        <h4 className="text-sm font-bold text-white">{d.name}</h4>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-1">{d.description}</p>
                    </div>

                    <div className="text-right shrink-0 text-xs font-mono">
                      <div className="text-red-400 font-bold">
                        {typeof d.impacts.deaths === 'number'
                          ? `${d.impacts.deaths.toLocaleString('en-IN')} deaths`
                          : d.impacts.deaths}
                      </div>
                      <div className="text-slate-400 text-[11px]">
                        {typeof d.impacts.economicLossINR === 'number'
                          ? `₹${d.impacts.economicLossINR} Cr loss`
                          : d.impacts.economicLossINR}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right 4 Cols: Helplines & Recommended Local Solutions */}
        <div className="lg:col-span-4 space-y-6">
          {/* Emergency Operations Contact Card */}
          <div className="bg-slate-900 border border-red-500/30 rounded-3xl p-6 shadow-xl space-y-4">
            <div className="flex items-center gap-2 text-red-400">
              <ShieldAlert className="w-6 h-6 animate-pulse" />
              <h3 className="text-base font-bold text-white tracking-tight">
                {currentState.name} SDMA Emergency Control
              </h3>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-1">
              <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                TOLL-FREE EMERGENCY HELPLINE
              </span>
              <a
                href={`tel:${currentState.sdmaHelpline.split('/')[0].trim()}`}
                className="text-2xl font-black font-mono text-emerald-400 hover:text-emerald-300 block tracking-tight"
              >
                {currentState.sdmaHelpline}
              </a>
              <span className="text-[11px] text-slate-400 block">Available 24 hours / 7 days</span>
            </div>

            <div className="text-xs text-slate-300 space-y-2">
              <div>
                <strong className="text-slate-400 block text-[11px] uppercase">Control Center:</strong>
                <p className="font-medium text-slate-200 mt-0.5">{currentState.stateEmergencyCenter}</p>
              </div>
              <div>
                <strong className="text-slate-400 block text-[11px] uppercase">Unified Police/Fire/Medical:</strong>
                <p className="font-mono text-amber-400 font-bold">Dial 112</p>
              </div>
              <div>
                <strong className="text-slate-400 block text-[11px] uppercase">District Control Room:</strong>
                <p className="font-mono text-slate-300 font-bold">Dial 1077 (within district)</p>
              </div>
            </div>
          </div>

          {/* Recommended Localized Solutions */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span>Priority Adaptation Actions for {currentState.name}</span>
            </h3>
            <p className="text-xs text-slate-400 leading-snug">
              Low-cost measures matching {currentState.name}'s specific climatic hazards:
            </p>

            <div className="space-y-2.5 pt-2">
              {relevantSolutions.map((sol) => (
                <div
                  key={sol.id}
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs hover:border-emerald-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-xs">{sol.title}</span>
                    <span className="text-[10px] font-mono text-emerald-400">{sol.costCategory} cost</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{sol.expectedBenefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
