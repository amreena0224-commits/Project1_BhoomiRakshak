import React, { useState, useMemo } from 'react';
import { SustainableSolution, DisasterCategory, ImplementationScale, CostCategory } from '../types';
import { SUSTAINABLE_SOLUTIONS } from '../data/solutions';
import { HAZARD_CATEGORIES } from '../data/hazards';
import { 
  HeartHandshake, 
  Filter, 
  Search, 
  IndianRupee, 
  Clock, 
  Wrench, 
  CheckCircle2, 
  Sparkles, 
  TreePine, 
  Building2, 
  ShieldCheck, 
  Printer, 
  Download,
  ChevronDown,
  ChevronUp,
  X,
  ExternalLink
} from 'lucide-react';

interface SolutionsViewProps {
  initialHazardFilter?: DisasterCategory;
}

export const SolutionsView: React.FC<SolutionsViewProps> = ({ initialHazardFilter }) => {
  const [activeTab, setActiveTab] = useState<'solutions' | 'emergency_checklists'>('solutions');
  const [selectedStrategy, setSelectedStrategy] = useState<'all' | 'adaptation' | 'mitigation'>('all');
  const [selectedScale, setSelectedScale] = useState<string>('all');
  const [selectedCost, setSelectedCost] = useState<string>('all');
  const [selectedHazard, setSelectedHazard] = useState<string>(initialHazardFilter || 'all');
  const [ruralOnly, setRuralOnly] = useState<boolean>(false);
  const [urbanOnly, setUrbanOnly] = useState<boolean>(false);
  const [natureBasedOnly, setNatureBasedOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedSolutionId, setExpandedSolutionId] = useState<string>('cool-roof-limewash');

  // Filter solutions
  const filteredSolutions = useMemo(() => {
    return SUSTAINABLE_SOLUTIONS.filter((sol) => {
      if (selectedStrategy !== 'all' && sol.category !== selectedStrategy) return false;
      if (selectedScale !== 'all' && sol.scale !== selectedScale) return false;
      if (selectedCost !== 'all' && sol.costCategory !== selectedCost) return false;
      if (selectedHazard !== 'all' && !sol.hazardTargets.includes(selectedHazard as DisasterCategory)) return false;
      if (ruralOnly && !sol.suitableForRural) return false;
      if (urbanOnly && !sol.suitableForUrban) return false;
      if (natureBasedOnly && !sol.indigenousOrNatureBased) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = sol.title.toLowerCase().includes(q);
        const matchesDesc = sol.description.toLowerCase().includes(q);
        const matchesBenefit = sol.expectedBenefit.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDesc && !matchesBenefit) return false;
      }

      return true;
    });
  }, [selectedStrategy, selectedScale, selectedCost, selectedHazard, ruralOnly, urbanOnly, natureBasedOnly, searchQuery]);

  const getCostBadge = (cat: CostCategory) => {
    switch (cat) {
      case 'low':
        return 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40';
      case 'medium':
        return 'bg-blue-500/20 text-blue-400 border border-blue-500/40';
      default:
        return 'bg-purple-500/20 text-purple-300 border border-purple-500/40';
    }
  };

  const resetFilters = () => {
    setSelectedStrategy('all');
    setSelectedScale('all');
    setSelectedCost('all');
    setSelectedHazard('all');
    setRuralOnly(false);
    setUrbanOnly(false);
    setNatureBasedOnly(false);
    setSearchQuery('');
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
            PHASE 8 & PHASE 9: FRUGAL ADAPTATION & INDIAN RESILIENCE ECONOMICS
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Practical Sustainable Solutions & Citizen Preparedness Hub
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
            Prioritizing low-cost (&lt; ₹5,000), nature-based, and vernacular engineering adapted for Indian economic conditions. 
            Clear distinction between <strong className="text-blue-400 font-semibold">Mitigation</strong> (reducing greenhouse gases) 
            and <strong className="text-emerald-400 font-semibold">Adaptation</strong> (reducing damage from unavoidable climate impacts).
          </p>
        </div>

        {/* Sub-tab Switcher: Solutions Matrix vs Emergency Action Protocols */}
        <div className="mt-6 flex flex-wrap gap-2 border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab('solutions')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'solutions'
                ? 'bg-emerald-600 text-slate-950 shadow-md'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            Sustainable Solutions Directory ({filteredSolutions.length})
          </button>
          <button
            onClick={() => setActiveTab('emergency_checklists')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'emergency_checklists'
                ? 'bg-emerald-600 text-slate-950 shadow-md'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>NDMA Emergency Action Protocols (Before / During / After)</span>
          </button>
        </div>
      </div>

      {activeTab === 'solutions' ? (
        /* SOLUTIONS EXPLORER VIEW */
        <div className="space-y-6">
          {/* Filter Bar */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg space-y-4">
            {/* Top row: Search & Strategy */}
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search solutions (e.g. 'cool roof', 'vetiver', 'drip irrigation', 'RWH')..."
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              {/* Strategy toggle */}
              <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs shrink-0">
                <button
                  onClick={() => setSelectedStrategy('all')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                    selectedStrategy === 'all' ? 'bg-slate-800 text-white font-bold' : 'text-slate-400'
                  }`}
                >
                  All Types
                </button>
                <button
                  onClick={() => setSelectedStrategy('adaptation')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                    selectedStrategy === 'adaptation' ? 'bg-emerald-600 text-slate-950 font-bold' : 'text-slate-400'
                  }`}
                >
                  Adaptation
                </button>
                <button
                  onClick={() => setSelectedStrategy('mitigation')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                    selectedStrategy === 'mitigation' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400'
                  }`}
                >
                  Mitigation
                </button>
              </div>
            </div>

            {/* Faceted Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              {/* Cost Filter */}
              <div>
                <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Budget Category
                </label>
                <select
                  value={selectedCost}
                  onChange={(e) => setSelectedCost(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 text-slate-200 rounded-xl px-3 py-2 focus:outline-none"
                >
                  <option value="all">All Budgets</option>
                  <option value="low">Low Cost (&lt; ₹5,000)</option>
                  <option value="medium">Medium Cost (₹5k – ₹50k)</option>
                  <option value="high">High Cost (&gt; ₹50k / Institutional)</option>
                </select>
              </div>

              {/* Implementation Scale */}
              <div>
                <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Implementation Scale
                </label>
                <select
                  value={selectedScale}
                  onChange={(e) => setSelectedScale(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 text-slate-200 rounded-xl px-3 py-2 focus:outline-none"
                >
                  <option value="all">All Scales</option>
                  <option value="individual">Individual</option>
                  <option value="household">Household</option>
                  <option value="community">Community / Panchayat</option>
                  <option value="city">City / Municipal</option>
                  <option value="state">State Infrastructure</option>
                </select>
              </div>

              {/* Hazard Target */}
              <div>
                <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Target Hazard
                </label>
                <select
                  value={selectedHazard}
                  onChange={(e) => setSelectedHazard(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 text-slate-200 rounded-xl px-3 py-2 focus:outline-none"
                >
                  <option value="all">All Target Hazards</option>
                  <option value="heatwave">Heatwaves</option>
                  <option value="flood">Floods</option>
                  <option value="cyclone">Cyclones</option>
                  <option value="drought">Droughts</option>
                  <option value="landslide">Landslides</option>
                  <option value="lightning">Lightning</option>
                  <option value="coastal">Coastal / Sea-level</option>
                </select>
              </div>
            </div>

            {/* Quick Checkbox Tags */}
            <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-1.5 cursor-pointer text-slate-300">
                  <input
                    type="checkbox"
                    checked={natureBasedOnly}
                    onChange={(e) => setNatureBasedOnly(e.target.checked)}
                    className="accent-emerald-500 rounded"
                  />
                  <span>🌿 Nature-Based / Vernacular Only</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer text-slate-300">
                  <input
                    type="checkbox"
                    checked={ruralOnly}
                    onChange={(e) => setRuralOnly(e.target.checked)}
                    className="accent-emerald-500 rounded"
                  />
                  <span>🌾 Suitable for Rural India</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer text-slate-300">
                  <input
                    type="checkbox"
                    checked={urbanOnly}
                    onChange={(e) => setUrbanOnly(e.target.checked)}
                    className="accent-emerald-500 rounded"
                  />
                  <span>🏙️ Suitable for Urban Metros</span>
                </label>
              </div>

              <button
                onClick={resetFilters}
                className="text-emerald-400 hover:text-emerald-300 text-xs font-semibold cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Solutions Accordion / Cards List */}
          <div className="space-y-4">
            {filteredSolutions.map((sol) => {
              const isExpanded = expandedSolutionId === sol.id;
              return (
                <div
                  key={sol.id}
                  className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-md transition-all hover:border-slate-700"
                >
                  {/* Card Header (Always visible) */}
                  <div
                    onClick={() => setExpandedSolutionId(isExpanded ? '' : sol.id)}
                    className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer hover:bg-slate-800/40 transition-colors"
                  >
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded ${getCostBadge(sol.costCategory)}`}>
                          {sol.costCategory} Cost ({sol.estimatedCostRangeINR.split('(')[0].trim()})
                        </span>
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {sol.scale} scale
                        </span>
                        <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                          sol.category === 'adaptation' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-blue-950 text-blue-400 border border-blue-800'
                        }`}>
                          {sol.category}
                        </span>
                        {sol.indigenousOrNatureBased && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-950/80 text-teal-300 border border-teal-800">
                            🌿 Vernacular / Nature-Based
                          </span>
                        )}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {sol.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-1">
                        {sol.expectedBenefit}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className="text-right hidden sm:block text-xs font-mono">
                        <span className="text-slate-400 block text-[10px]">TIME REQUIRED</span>
                        <span className="text-emerald-400 font-bold">{sol.timeToImplement}</span>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-800 text-slate-300">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Body */}
                  {isExpanded && (
                    <div className="p-5 pt-0 border-t border-slate-800/80 space-y-4 text-xs sm:text-sm text-slate-300 bg-slate-950/40">
                      {/* Description */}
                      <p className="text-slate-300 leading-relaxed pt-3">
                        {sol.description}
                      </p>

                      {/* Technical specifications grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-[10px] text-slate-400 uppercase block">Estimated Cost:</span>
                          <span className="text-emerald-400 font-bold mt-0.5 block">{sol.estimatedCostRangeINR}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-[10px] text-slate-400 uppercase block">Implementation Difficulty:</span>
                          <span className="text-slate-200 capitalize font-bold mt-0.5 block">{sol.implementationDifficulty}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-[10px] text-slate-400 uppercase block">Implemented By:</span>
                          <span className="text-slate-200 truncate font-bold mt-0.5 block">{sol.implementedBy}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-[10px] text-slate-400 uppercase block">Maintenance Needs:</span>
                          <span className="text-slate-200 truncate font-bold mt-0.5 block">{sol.maintenanceRequirements}</span>
                        </div>
                      </div>

                      {/* Step-by-Step Practical Blueprint */}
                      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                        <strong className="text-xs uppercase font-bold text-white tracking-wider flex items-center gap-1.5">
                          <Wrench className="w-4 h-4 text-emerald-400" />
                          Practical Step-by-Step Implementation Blueprint:
                        </strong>
                        <div className="space-y-1.5 text-xs text-slate-300 pt-1">
                          {sol.practicalSteps.map((step, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <span className="text-emerald-400 font-mono font-bold mt-0.5">0{idx + 1}.</span>
                              <span className="leading-snug">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Real Case Study & Policy Alignment */}
                      <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                        <div>
                          <strong className="text-emerald-400 block font-semibold">
                            Documented Indian Precedent / Pilot:
                          </strong>
                          <span className="text-slate-300">{sol.caseStudyOrExample}</span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 shrink-0">
                          Source: {sol.sourceOrg}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* EMERGENCY ACTION PROTOCOLS VIEW (Before / During / After) */
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200/90 leading-relaxed flex items-center justify-between">
            <div>
              <strong className="text-amber-300 font-semibold block text-sm mb-0.5">
                Official NDMA Standard Operating Procedures
              </strong>
              These actionable checklists are formulated according to NDMA guidelines for cyclones, floods, heatwaves, landslides, and cloudbursts.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HAZARD_CATEGORIES.slice(0, 6).map((haz) => (
              <div key={haz.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span>{haz.name} Protocol</span>
                  </h3>
                  <span className="text-[10px] font-mono text-slate-400">{haz.ndmaGuidelineRef.split('(')[0]}</span>
                </div>

                {/* 3 Phases */}
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                    <span className="font-bold text-amber-400 block mb-1.5 uppercase tracking-wider text-[10px]">
                      Before (Preparedness)
                    </span>
                    <ul className="space-y-1 text-slate-300">
                      {haz.preparednessBrief.before.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-amber-400">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                    <span className="font-bold text-red-400 block mb-1.5 uppercase tracking-wider text-[10px]">
                      During (Active Threat)
                    </span>
                    <ul className="space-y-1 text-slate-300">
                      {haz.preparednessBrief.during.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-red-400">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                    <span className="font-bold text-emerald-400 block mb-1.5 uppercase tracking-wider text-[10px]">
                      After (Immediate Recovery)
                    </span>
                    <ul className="space-y-1 text-slate-300">
                      {haz.preparednessBrief.after.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-400">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
