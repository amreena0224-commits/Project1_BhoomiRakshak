import React, { useState } from 'react';
import { StateHazardProfile, DisasterCategory } from '../types';
import { STATES_HAZARDS } from '../data/states';
import { HAZARD_CATEGORIES } from '../data/hazards';
import { 
  ShieldAlert, 
  MapPin, 
  AlertTriangle, 
  PhoneCall, 
  ArrowRight, 
  Scale, 
  Layers, 
  Info,
  Flame,
  Waves,
  Compass,
  SunMedium,
  Mountain,
  Snowflake,
  ExternalLink
} from 'lucide-react';

interface IndiaRiskMapProps {
  onSelectStateForDisasters: (stateName: string) => void;
  onSelectStateForProfile: (stateId: string) => void;
}

export const IndiaRiskMap: React.FC<IndiaRiskMapProps> = ({
  onSelectStateForDisasters,
  onSelectStateForProfile
}) => {
  const [selectedHazard, setSelectedHazard] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [activeState, setActiveState] = useState<StateHazardProfile>(STATES_HAZARDS[0]); // default Odisha
  const [compareMode, setCompareMode] = useState<boolean>(false);
  const [compareStateId, setCompareStateId] = useState<string>('kerala');

  const regions = ['all', 'Northern', 'Southern', 'Eastern', 'Western', 'Central', 'Northeastern'];

  const hazardFilterButtons = [
    { id: 'all', label: 'Composite Risk', icon: Layers },
    { id: 'heatwave', label: 'Heatwaves', icon: Flame },
    { id: 'cyclone', label: 'Cyclones', icon: Compass },
    { id: 'flood', label: 'Floods', icon: Waves },
    { id: 'landslide', label: 'Landslides', icon: Mountain },
    { id: 'glof', label: 'GLOFs', icon: Snowflake },
    { id: 'drought', label: 'Droughts', icon: SunMedium },
  ];

  // Filter states by region
  const filteredStates = STATES_HAZARDS.filter((st) => {
    if (selectedRegion !== 'all' && st.region !== selectedRegion) return false;
    if (selectedHazard !== 'all') {
      return st.dominantHazards.includes(selectedHazard as DisasterCategory);
    }
    return true;
  });

  // Calculate score color
  const getScoreColor = (score: number) => {
    if (score >= 88) return 'bg-red-500 text-white';
    if (score >= 82) return 'bg-orange-500 text-white';
    if (score >= 75) return 'bg-amber-500 text-slate-950';
    return 'bg-emerald-500 text-white';
  };

  const getScoreBorder = (score: number) => {
    if (score >= 88) return 'border-red-500/50 hover:border-red-400 bg-red-950/20';
    if (score >= 82) return 'border-orange-500/50 hover:border-orange-400 bg-orange-950/20';
    if (score >= 75) return 'border-amber-500/50 hover:border-amber-400 bg-amber-950/20';
    return 'border-emerald-500/50 hover:border-emerald-400 bg-emerald-950/20';
  };

  const getHazardRiskBadge = (level: string) => {
    switch (level) {
      case 'Severe':
        return 'bg-red-500/20 text-red-400 border border-red-500/40';
      case 'High':
        return 'bg-orange-500/20 text-orange-400 border border-orange-500/40';
      case 'Moderate':
        return 'bg-amber-500/20 text-amber-300 border border-amber-500/30';
      default:
        return 'bg-slate-800 text-slate-400 border border-slate-700';
    }
  };

  const compareState = STATES_HAZARDS.find((s) => s.id === compareStateId) || STATES_HAZARDS[1];

  return (
    <div className="space-y-6">
      {/* Control Filters */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-400" />
              <span>India Climate Vulnerability & Multi-Hazard Atlas</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Select a hazard layer or geographical zone to evaluate sub-national exposure based on IMD, NDMA & CWC baselines
            </p>
          </div>

          {/* Compare toggle */}
          <button
            onClick={() => setCompareMode(!compareMode)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
              compareMode
                ? 'bg-blue-600 text-white border-blue-500 shadow-md'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white hover:bg-slate-700'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>{compareMode ? 'Exit Comparison' : 'Compare 2 States'}</span>
          </button>
        </div>

        {/* Hazard Layer Toggles */}
        <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap gap-2">
          {hazardFilterButtons.map((h) => {
            const Icon = h.icon;
            const isSelected = selectedHazard === h.id;
            return (
              <button
                key={h.id}
                onClick={() => setSelectedHazard(h.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-950'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-slate-950' : 'text-slate-400'}`} />
                <span>{h.label}</span>
              </button>
            );
          })}
        </div>

        {/* Region Filter Pills */}
        <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span className="text-slate-400 font-medium whitespace-nowrap text-[11px] uppercase tracking-wider">
            Region:
          </span>
          {regions.map((reg) => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              className={`px-2.5 py-1 rounded-full text-[11px] transition-colors whitespace-nowrap cursor-pointer ${
                selectedRegion === reg
                  ? 'bg-slate-700 text-emerald-400 font-semibold border border-emerald-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {reg === 'all' ? 'All Regions' : `${reg} India`}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Interactive State Selector & Details Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: States Grid with Vulnerability Heatmap */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              {filteredStates.length} States & UTs Loaded
            </span>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span> Severe (88+)
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span> High (82–87)
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Moderate (&lt;82)
              </span>
            </div>
          </div>

          {/* Interactive States Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[520px] overflow-y-auto pr-1">
            {filteredStates.map((st) => {
              const isSelected = activeState.id === st.id;
              return (
                <div
                  key={st.id}
                  onClick={() => setActiveState(st)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer text-left ${getScoreBorder(
                    st.vulnerabilityScore
                  )} ${
                    isSelected
                      ? 'ring-2 ring-emerald-400 shadow-lg scale-[1.02] bg-slate-800/90'
                      : 'hover:scale-[1.01]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-white tracking-wide">{st.name}</span>
                        <span className="text-[10px] text-slate-400 font-mono">({st.code})</span>
                      </div>
                      <span className="text-[10px] text-slate-400 block mt-0.5">{st.region}</span>
                    </div>
                    <span
                      className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded shadow-sm ${getScoreColor(
                        st.vulnerabilityScore
                      )}`}
                    >
                      {st.vulnerabilityScore}
                    </span>
                  </div>

                  {/* Badges preview */}
                  <div className="mt-2.5 flex flex-wrap gap-1">
                    {st.dominantHazards.slice(0, 3).map((hz) => (
                      <span
                        key={hz}
                        className="text-[9px] px-1 py-0.5 rounded bg-slate-800/80 text-slate-300 font-medium capitalize"
                      >
                        {hz}
                      </span>
                    ))}
                    {st.dominantHazards.length > 3 && (
                      <span className="text-[9px] px-1 py-0.5 rounded bg-slate-800 text-slate-400">
                        +{st.dominantHazards.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
            <span>*Vulnerability score (0–100) integrates exposure, sensitivity, and adaptive coping capacity.</span>
            <span>Click any tile to inspect</span>
          </div>
        </div>

        {/* Right: State Risk Dossier or Side-by-Side Comparison */}
        <div className="lg:col-span-5 space-y-4">
          {!compareMode ? (
            /* Single State Dossier */
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
              <div className="flex items-start justify-between border-b border-slate-800 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white">{activeState.name}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {activeState.type} · {activeState.region}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {activeState.disasterSummary}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <div className={`text-2xl font-black font-mono px-3 py-1 rounded-xl shadow-lg ${getScoreColor(activeState.vulnerabilityScore)}`}>
                    {activeState.vulnerabilityScore}
                  </div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block mt-1">
                    Vulnerability
                  </span>
                </div>
              </div>

              {/* Hazard Risk Matrix Table */}
              <div>
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                  Hazard Vulnerability Ratings
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                    <span className="text-slate-300 flex items-center gap-1.5">
                      <Waves className="w-3.5 h-3.5 text-blue-400" /> Flood Risk
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${getHazardRiskBadge(activeState.floodRisk)}`}>
                      {activeState.floodRisk}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                    <span className="text-slate-300 flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-amber-400" /> Heatwave
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${getHazardRiskBadge(activeState.heatwaveRisk)}`}>
                      {activeState.heatwaveRisk}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                    <span className="text-slate-300 flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-teal-400" /> Cyclone
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${getHazardRiskBadge(activeState.cycloneRisk)}`}>
                      {activeState.cycloneRisk}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                    <span className="text-slate-300 flex items-center gap-1.5">
                      <Mountain className="w-3.5 h-3.5 text-orange-400" /> Landslide
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${getHazardRiskBadge(activeState.landslideRisk)}`}>
                      {activeState.landslideRisk}
                    </span>
                  </div>
                </div>
              </div>

              {/* District Hotspots */}
              <div>
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
                  High-Risk District Hotspots
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeState.keyDistrictsHotspots.map((dist) => (
                    <span
                      key={dist}
                      className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-xs border border-slate-700/80 flex items-center gap-1"
                    >
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      {dist}
                    </span>
                  ))}
                </div>
              </div>

              {/* Emergency Operations & Helpline */}
              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-semibold text-slate-300">State Helpline</span>
                  </div>
                  <a
                    href={`tel:${activeState.sdmaHelpline.split('/')[0].trim()}`}
                    className="font-mono text-sm font-bold text-emerald-400 hover:text-emerald-300 cursor-pointer"
                  >
                    {activeState.sdmaHelpline}
                  </a>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">{activeState.stateEmergencyCenter}</p>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => onSelectStateForDisasters(activeState.name)}
                  className="flex-1 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
                >
                  <span>Historical Disasters ({activeState.historicalEventsCount})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onSelectStateForProfile(activeState.id)}
                  className="py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer border border-slate-700"
                >
                  Local Emergency Guide
                </button>
              </div>
            </div>
          ) : (
            /* Comparison Mode */
            <div className="bg-slate-900 border border-blue-500/40 rounded-2xl p-5 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-blue-400" />
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    Comparative Vulnerability
                  </h4>
                </div>
                <select
                  value={compareStateId}
                  onChange={(e) => setCompareStateId(e.target.value)}
                  className="bg-slate-800 text-slate-200 text-xs rounded-lg px-2.5 py-1 border border-slate-700 focus:outline-none"
                >
                  {STATES_HAZARDS.map((s) => (
                    <option key={s.id} value={s.id}>
                      Compare with: {s.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Side by side comparison table */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                {/* State 1 */}
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                  <h5 className="font-bold text-white text-base">{activeState.name}</h5>
                  <div className="mt-2 text-2xl font-black font-mono text-emerald-400">
                    {activeState.vulnerabilityScore}
                    <span className="text-xs text-slate-400 font-normal"> / 100</span>
                  </div>
                  <div className="mt-3 space-y-1.5 text-[11px] text-slate-300">
                    <div>Coastline: <span className="font-mono">{activeState.coastalKm ? `${activeState.coastalKm} km` : 'Inland'}</span></div>
                    <div>Flood: <span className="font-semibold">{activeState.floodRisk}</span></div>
                    <div>Heatwave: <span className="font-semibold">{activeState.heatwaveRisk}</span></div>
                    <div>Cyclone: <span className="font-semibold">{activeState.cycloneRisk}</span></div>
                    <div>Landslide: <span className="font-semibold">{activeState.landslideRisk}</span></div>
                  </div>
                </div>

                {/* State 2 */}
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                  <h5 className="font-bold text-white text-base">{compareState.name}</h5>
                  <div className="mt-2 text-2xl font-black font-mono text-blue-400">
                    {compareState.vulnerabilityScore}
                    <span className="text-xs text-slate-400 font-normal"> / 100</span>
                  </div>
                  <div className="mt-3 space-y-1.5 text-[11px] text-slate-300">
                    <div>Coastline: <span className="font-mono">{compareState.coastalKm ? `${compareState.coastalKm} km` : 'Inland'}</span></div>
                    <div>Flood: <span className="font-semibold">{compareState.floodRisk}</span></div>
                    <div>Heatwave: <span className="font-semibold">{compareState.heatwaveRisk}</span></div>
                    <div>Cyclone: <span className="font-semibold">{compareState.cycloneRisk}</span></div>
                    <div>Landslide: <span className="font-semibold">{compareState.landslideRisk}</span></div>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                <strong className="text-white font-semibold">Key Difference: </strong>
                {activeState.coastalKm && !compareState.coastalKm ? (
                  `${activeState.name} faces severe marine storm surge and coastal salinity threats, whereas ${compareState.name} is predominantly inland with terrestrial hydrological risks.`
                ) : (
                  `Both states require localized adaptation plans matching their unique geomorphology and agro-climatic zones.`
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
