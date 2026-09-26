import React, { useState, useMemo } from 'react';
import { HistoricalDisaster, DisasterCategory, AttributionType } from '../types';
import { HISTORICAL_DISASTERS } from '../data/disasters';
import { STATES_HAZARDS, doesDisasterMatchState, normalizeStateName, STATE_ALIASES } from '../data/states';
import { DisasterDossierModal } from './DisasterDossierModal';
import { 
  Search, 
  Filter, 
  Calendar, 
  MapPin, 
  AlertTriangle, 
  TrendingUp, 
  SlidersHorizontal, 
  LayoutGrid, 
  Table, 
  Clock, 
  ArrowUpDown, 
  ExternalLink,
  Users,
  IndianRupee,
  X,
  Sparkles,
  RotateCcw
} from 'lucide-react';

interface DisasterExplorerViewProps {
  initialSearchState?: string;
  initialSearchCategory?: string;
}

export const DisasterExplorerView: React.FC<DisasterExplorerViewProps> = ({
  initialSearchState,
  initialSearchCategory
}) => {
  // If an initial state is passed, filter directly by that state without forcing text search
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialSearchCategory || 'all');
  const [selectedAttribution, setSelectedAttribution] = useState<string>('all');
  const [selectedState, setSelectedState] = useState<string>(initialSearchState || 'all');
  const [minYear, setMinYear] = useState<number>(1970);
  const [maxYear, setMaxYear] = useState<number>(2025);
  const [viewMode, setViewMode] = useState<'cards' | 'table' | 'timeline'>('cards');
  const [selectedDisaster, setSelectedDisaster] = useState<HistoricalDisaster | null>(null);
  const [sortField, setSortField] = useState<'year' | 'deaths' | 'economicLossINR'>('year');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  // Quick preset search queries as requested in prompt
  const presetQueries = [
    'Odisha cyclone',
    'Flood 2023',
    'Heat wave Rajasthan',
    'Major floods after 2015',
    'Western Ghats landslides',
    'Himalayan GLOF',
    'Extreme rainfall Maharashtra',
    'Bengaluru water crisis'
  ];

  // Helper for stemming words
  const getStem = (w: string): string => {
    if (w.endsWith('ies') && w.length > 4) return w.slice(0, -3) + 'y';
    if (w.endsWith('es') && w.length > 4) return w.slice(0, -2);
    if (w.endsWith('s') && !w.endsWith('ss') && w.length > 3) return w.slice(0, -1);
    if (w.endsWith('ing') && w.length > 5) return w.slice(0, -3);
    if (w.endsWith('ed') && w.length > 4) return w.slice(0, -2);
    return w;
  };

  // Natural language query handler
  const handlePresetClick = (q: string) => {
    setSearchQuery(q);
    // Intelligent category & filter reset to allow full natural query matching
    setSelectedCategory('all');
    setSelectedAttribution('all');
    setSelectedState('all');
    setMinYear(1970);
    setMaxYear(2025);
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedAttribution('all');
    setSelectedState('all');
    setMinYear(1970);
    setMaxYear(2025);
  };

  // Filter and sort logic with multi-token natural language search
  const filteredDisasters = useMemo(() => {
    return HISTORICAL_DISASTERS.filter((d) => {
      // 1. Faceted State filter (using alias-aware matching)
      if (selectedState !== 'all') {
        if (!doesDisasterMatchState(d.statesAffected, selectedState)) {
          return false;
        }
      }

      // 2. Faceted Category filter
      if (selectedCategory !== 'all' && d.category !== selectedCategory) {
        return false;
      }

      // 3. Faceted Attribution filter
      if (selectedAttribution !== 'all' && d.climateConnection !== selectedAttribution) {
        return false;
      }

      // 4. Faceted Year filter
      if (d.year < minYear || d.year > maxYear) {
        return false;
      }

      // 5. Free text and natural language query search
      if (searchQuery.trim()) {
        const rawQ = searchQuery.toLowerCase().trim();

        // Check for year modifiers like "after 2015", "since 2015", "post 2015", "> 2015"
        const afterYearMatch = rawQ.match(/(?:after|since|post|>|from)\s*(\d{4})/i);
        if (afterYearMatch && d.year < parseInt(afterYearMatch[1], 10)) {
          return false;
        }

        // Check for before year modifiers like "before 2000", "< 2000", "prior to 2000"
        const beforeYearMatch = rawQ.match(/(?:before|prior|<|upto|until)\s*(\d{4})/i);
        if (beforeYearMatch && d.year > parseInt(beforeYearMatch[1], 10)) {
          return false;
        }

        // Tokenize into meaningful search words, stripping noise words
        const stopWords = new Set([
          'show', 'me', 'all', 'major', 'severe', 'disasters', 'disaster', 'events', 'event', 'in', 
          'india', 'affecting', 'affected', 'the', 'of', 'and', 'recent', 'after', 
          'before', 'since', 'post', 'from', 'prior', 'to', 'for', 'with', 'at', 'by', 'on',
          'state', 'district', 'between', 'during', 'nct', 'ut'
        ]);

        const tokens = rawQ
          .replace(/[^\w\s]/g, ' ')
          .split(/\s+/)
          .filter((t) => t.length > 1 && !stopWords.has(t));

        if (tokens.length > 0) {
          const stateAliasesForRecord = d.statesAffected.flatMap(st => STATE_ALIASES[st.toLowerCase()] || []).join(' ');

          const searchableText = [
            d.name,
            d.category,
            d.subCategory,
            d.description,
            d.meteorologicalTrigger,
            d.statesAffected.join(' '),
            stateAliasesForRecord,
            d.primaryLocations.join(' '),
            d.year.toString(),
            d.dateRange,
            d.climateConnection,
            d.attributionEvidence,
            d.futureOutlook.vulnerableHotspots.join(' '),
            d.futureOutlook.projectedOutlookNote,
            d.institutionalResponse.lessonsLearned.join(' '),
            // Aliases & Synonyms
            d.category === 'cyclone' ? 'cyclone cyclones cyclonic storm hurricane typhoon gale landfall surge' : '',
            d.category === 'flood' ? 'flood floods flooding deluge inundation riverine overflow breach spate' : '',
            d.category === 'heatwave' ? 'heatwave heat wave heatwaves loo thermal heat dome temperature extreme' : '',
            d.category === 'landslide' ? 'landslide landslides mudslide rockslide debris slope failure' : '',
            d.category === 'glof' ? 'glof glofs glacial glacier avalanche moraine lake burst cryosphere' : '',
            d.category === 'extreme_rainfall' ? 'extreme rainfall cloudburst rain downpour heavy precipitation monsoon deluge' : '',
            d.category === 'drought' ? 'drought droughts dry water scarcity famine borewell groundwater depletion' : '',
            d.category === 'lightning' ? 'lightning thunderstorm strike electrocution storm' : '',
            d.category === 'wildfire' ? 'wildfire forest fire blaze' : '',
            d.category === 'coastal' ? 'coastal tsunami surge sea erosion sea-level marine' : ''
          ].join(' ').toLowerCase();

          // Every token must match somewhere in searchable text, stem, location, or state
          const allTokensMatch = tokens.every((token) => {
            const tokenStem = getStem(token);

            if (/^\d{4}$/.test(token)) {
              return d.year.toString() === token || d.dateRange.includes(token);
            }

            if (searchableText.includes(token) || searchableText.includes(tokenStem)) {
              return true;
            }

            if (d.statesAffected.some((st) => {
              const normSt = normalizeStateName(st);
              return normSt.includes(token) || normSt.includes(tokenStem);
            })) {
              return true;
            }

            if (d.primaryLocations.some((loc) => {
              const normLoc = loc.toLowerCase();
              return normLoc.includes(token) || normLoc.includes(tokenStem);
            })) {
              return true;
            }

            if (token.length >= 4 && searchableText.includes(token.slice(0, 4))) {
              return true;
            }

            return false;
          });

          if (!allTokensMatch) {
            return false;
          }
        }
      }

      return true;
    }).sort((a, b) => {
      let valA: number = 0;
      let valB: number = 0;

      if (sortField === 'year') {
        valA = a.year;
        valB = b.year;
      } else if (sortField === 'deaths') {
        valA = typeof a.impacts.deaths === 'number' ? a.impacts.deaths : 0;
        valB = typeof b.impacts.deaths === 'number' ? b.impacts.deaths : 0;
      } else if (sortField === 'economicLossINR') {
        valA = typeof a.impacts.economicLossINR === 'number' ? a.impacts.economicLossINR : 0;
        valB = typeof b.impacts.economicLossINR === 'number' ? b.impacts.economicLossINR : 0;
      }

      return sortOrder === 'desc' ? valB - valA : valA - valB;
    });
  }, [searchQuery, selectedCategory, selectedAttribution, selectedState, minYear, maxYear, sortField, sortOrder]);

  // Aggregate stats
  const totalFatalities = useMemo(() => {
    return filteredDisasters.reduce((acc, d) => {
      return acc + (typeof d.impacts.deaths === 'number' ? d.impacts.deaths : 0);
    }, 0);
  }, [filteredDisasters]);

  const totalEconomicLoss = useMemo(() => {
    return filteredDisasters.reduce((acc, d) => {
      return acc + (typeof d.impacts.economicLossINR === 'number' ? d.impacts.economicLossINR : 0);
    }, 0);
  }, [filteredDisasters]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
            PHASE 3 & PHASE 4: HISTORICAL DISASTER ARCHIVE & NATURAL SEARCH
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Verified Indian Climate Disasters Database (1970–2025+)
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
            Search verified historical records with meteorological triggers, scientific attribution confidence ratings, 
            and official damage assessments. Zero fabricated statistics; missing parameters are marked "Data unavailable".
          </p>
        </div>

        {/* Search Bar & Natural Language Presets */}
        <div className="mt-6 space-y-3">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by disaster name, state, district, year, or keyword (e.g. 'Odisha cyclone', 'Wayanad', '2023 flood')..."
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-slate-950 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick natural query suggestions */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="text-slate-400 flex items-center gap-1 text-[11px] font-medium whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              Try Natural Queries:
            </span>
            {presetQueries.map((pq) => (
              <button
                key={pq}
                onClick={() => handlePresetClick(pq)}
                className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors whitespace-nowrap border border-slate-700/60 cursor-pointer"
              >
                "{pq}"
              </button>
            ))}
          </div>
        </div>

        {/* Active Filter Chips */}
        {(selectedState !== 'all' || selectedCategory !== 'all' || selectedAttribution !== 'all' || minYear > 1970 || searchQuery.trim() !== '') && (
          <div className="mt-4 pt-3 border-t border-slate-800/60 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-[11px] font-semibold text-slate-400">Active Filters:</span>
            {searchQuery.trim() && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-medium">
                <span>Query: "{searchQuery}"</span>
                <button onClick={() => setSearchQuery('')} className="hover:text-white cursor-pointer ml-0.5">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedState !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/30 font-medium">
                <MapPin className="w-3 h-3" />
                <span>State: {selectedState}</span>
                <button onClick={() => setSelectedState('all')} className="hover:text-white cursor-pointer ml-0.5">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30 font-medium capitalize">
                <span>Category: {selectedCategory.replace('_', ' ')}</span>
                <button onClick={() => setSelectedCategory('all')} className="hover:text-white cursor-pointer ml-0.5">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedAttribution !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/30 font-medium capitalize">
                <span>Attribution: {selectedAttribution.replace('_', ' ')}</span>
                <button onClick={() => setSelectedAttribution('all')} className="hover:text-white cursor-pointer ml-0.5">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {minYear > 1970 && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 font-medium">
                <Calendar className="w-3 h-3 text-emerald-400" />
                <span>Since {minYear}</span>
                <button onClick={() => setMinYear(1970)} className="hover:text-white cursor-pointer ml-0.5">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            <button
              onClick={resetFilters}
              className="text-[11px] text-slate-400 hover:text-emerald-400 underline cursor-pointer ml-1 flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear all</span>
            </button>
          </div>
        )}

        {/* Faceted Filters Toolbar */}
        <div className="mt-5 pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          {/* Hazard Category */}
          <div>
            <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Hazard Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 text-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              <option value="all">All Categories</option>
              <option value="cyclone">Cyclones</option>
              <option value="flood">Floods</option>
              <option value="heatwave">Heatwaves</option>
              <option value="landslide">Landslides</option>
              <option value="glof">GLOFs & Cryosphere</option>
              <option value="extreme_rainfall">Extreme Rainfall</option>
              <option value="drought">Droughts</option>
              <option value="lightning">Lightning</option>
              <option value="wildfire">Wildfires</option>
            </select>
          </div>

          {/* Attribution Level */}
          <div>
            <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Scientific Attribution
            </label>
            <select
              value={selectedAttribution}
              onChange={(e) => setSelectedAttribution(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 text-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              <option value="all">All Attribution Levels</option>
              <option value="direct">Direct Connection</option>
              <option value="amplified">Climate Amplified</option>
              <option value="uncertain">Uncertain / Complex</option>
              <option value="primarily_non_climate">Local Anthropogenic / Non-Climate</option>
            </select>
          </div>

          {/* State Selector */}
          <div>
            <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              State Affected
            </label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 text-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              <option value="all">All Indian States & UTs</option>
              {STATES_HAZARDS.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          {/* Minimum Year Slider */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Since Year:
              </label>
              <span className="font-mono text-emerald-400 font-bold">{minYear}</span>
            </div>
            <input
              type="range"
              min={1970}
              max={2025}
              step={1}
              value={minYear}
              onChange={(e) => setMinYear(parseInt(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
          </div>
        </div>

        {/* Reset and active count */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <div>
            Found <strong className="text-white">{filteredDisasters.length}</strong> verified events matching criteria
          </div>
          <button
            onClick={resetFilters}
            className="text-xs text-emerald-400 hover:text-emerald-300 font-medium cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      </div>

      {/* Aggregate Stats Summary Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
          <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider block">
            Matching Disasters
          </span>
          <div className="mt-1 text-2xl font-black font-mono text-white">
            {filteredDisasters.length}
          </div>
          <span className="text-[11px] text-slate-400">Cataloged in archive</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
          <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider block">
            Verified Fatalities
          </span>
          <div className="mt-1 text-2xl font-black font-mono text-red-400">
            {totalFatalities.toLocaleString('en-IN')}
          </div>
          <span className="text-[11px] text-slate-400">Official death toll</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
          <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider block">
            Estimated Economic Loss
          </span>
          <div className="mt-1 text-2xl font-black font-mono text-emerald-400">
            ₹{totalEconomicLoss.toLocaleString('en-IN')} Cr
          </div>
          <span className="text-[11px] text-slate-400">Verified state assessments</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
          <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider block">
            Attribution Standard
          </span>
          <div className="mt-1 text-lg font-bold text-blue-400 font-mono">
            IPCC / MoES
          </div>
          <span className="text-[11px] text-slate-400">Peer-reviewed criteria</span>
        </div>
      </div>

      {/* View Switcher & Sorting Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900/60 p-3 rounded-2xl border border-slate-800 text-xs">
        {/* View mode toggle */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setViewMode('cards')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
              viewMode === 'cards'
                ? 'bg-emerald-600 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Cards</span>
          </button>
          <button
            onClick={() => setViewMode('table')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
              viewMode === 'table'
                ? 'bg-emerald-600 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Table className="w-3.5 h-3.5" />
            <span>Data Table</span>
          </button>
          <button
            onClick={() => setViewMode('timeline')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
              viewMode === 'timeline'
                ? 'bg-emerald-600 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Timeline</span>
          </button>
        </div>

        {/* Sort controls */}
        <div className="flex items-center gap-2">
          <span className="text-slate-400 font-medium">Sort by:</span>
          <select
            value={sortField}
            onChange={(e) => setSortField(e.target.value as any)}
            className="bg-slate-950 border border-slate-700 text-slate-200 rounded-lg px-2.5 py-1 focus:outline-none"
          >
            <option value="year">Event Year</option>
            <option value="deaths">Fatalities</option>
            <option value="economicLossINR">Economic Loss (Crores)</option>
          </select>
          <button
            onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
            className="p-1.5 rounded-lg bg-slate-950 text-slate-300 border border-slate-700 hover:text-white"
            title="Toggle sort direction"
          >
            <ArrowUpDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Content Render */}
      {filteredDisasters.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center space-y-3">
          <AlertTriangle className="w-10 h-10 text-amber-400 mx-auto" />
          <h3 className="text-lg font-bold text-white">No historical disasters matched your filter criteria</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Try adjusting your search terms, selecting "All Categories", or lowering the minimum year threshold.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : viewMode === 'cards' ? (
        /* Cards View */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDisasters.map((disaster) => (
            <div
              key={disaster.id}
              onClick={() => setSelectedDisaster(disaster)}
              className="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-5 shadow-lg flex flex-col justify-between transition-all cursor-pointer group hover:bg-slate-900/90"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {disaster.year}
                  </span>
                  <span className={`text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded ${
                    disaster.climateConnection === 'direct'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : disaster.climateConnection === 'amplified'
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/40'
                      : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  }`}>
                    {disaster.climateConnection}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
                  {disaster.name}
                </h3>
                <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-1 font-mono">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  <span className="truncate">{disaster.statesAffected.join(', ')}</span>
                </div>

                <p className="text-xs text-slate-300 mt-3 line-clamp-3 leading-relaxed">
                  {disaster.description}
                </p>

                {/* Impact badges */}
                <div className="mt-4 pt-3 border-t border-slate-800 grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2 rounded bg-slate-950 border border-slate-800/80">
                    <span className="text-[10px] text-slate-400 uppercase block">Fatalities</span>
                    <span className="text-red-400 font-bold">
                      {typeof disaster.impacts.deaths === 'number'
                        ? disaster.impacts.deaths.toLocaleString('en-IN')
                        : disaster.impacts.deaths}
                    </span>
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800/80">
                    <span className="text-[10px] text-slate-400 uppercase block">Loss</span>
                    <span className="text-emerald-400 font-bold truncate block">
                      {typeof disaster.impacts.economicLossINR === 'number'
                        ? `₹${disaster.impacts.economicLossINR} Cr`
                        : disaster.impacts.economicLossINR}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-emerald-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                <span>Open Full Dossier</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      ) : viewMode === 'table' ? (
        /* Data Table View */
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950 border-b border-slate-800 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                <tr>
                  <th className="p-3.5">Year</th>
                  <th className="p-3.5">Disaster Name</th>
                  <th className="p-3.5">Category</th>
                  <th className="p-3.5">States Affected</th>
                  <th className="p-3.5">Attribution</th>
                  <th className="p-3.5 text-right">Fatalities</th>
                  <th className="p-3.5 text-right">Economic Loss</th>
                  <th className="p-3.5 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {filteredDisasters.map((d) => (
                  <tr key={d.id} className="hover:bg-slate-800/60 transition-colors">
                    <td className="p-3.5 font-mono text-emerald-400 font-bold">{d.year}</td>
                    <td className="p-3.5 font-semibold text-white max-w-xs">{d.name}</td>
                    <td className="p-3.5 capitalize font-medium">{d.category}</td>
                    <td className="p-3.5 max-w-[150px] truncate">{d.statesAffected.join(', ')}</td>
                    <td className="p-3.5">
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 capitalize">
                        {d.climateConnection}
                      </span>
                    </td>
                    <td className="p-3.5 font-mono text-right text-red-400 font-bold">
                      {typeof d.impacts.deaths === 'number'
                        ? d.impacts.deaths.toLocaleString('en-IN')
                        : d.impacts.deaths}
                    </td>
                    <td className="p-3.5 font-mono text-right text-emerald-400 font-bold">
                      {typeof d.impacts.economicLossINR === 'number'
                        ? `₹${d.impacts.economicLossINR} Cr`
                        : d.impacts.economicLossINR}
                    </td>
                    <td className="p-3.5 text-center">
                      <button
                        onClick={() => setSelectedDisaster(d)}
                        className="px-2.5 py-1 rounded bg-slate-800 hover:bg-emerald-600 hover:text-slate-950 text-slate-300 text-[11px] font-bold transition-colors cursor-pointer"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Timeline View */
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-8 my-4">
          {filteredDisasters.map((d) => (
            <div key={d.id} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-500 group-hover:scale-125 transition-transform"></div>

              <div
                onClick={() => setSelectedDisaster(d)}
                className="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-5 shadow-lg cursor-pointer transition-all hover:bg-slate-900/90"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-emerald-400 font-bold text-sm">{d.year}</span>
                    <span className="text-slate-400">·</span>
                    <span className="font-mono text-slate-400">{d.dateRange}</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 w-fit">
                    {d.category} · {d.climateConnection}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {d.name}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">{d.primaryLocations.join(', ')} ({d.statesAffected.join(', ')})</p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">{d.description}</p>

                <div className="mt-3 flex items-center gap-4 text-xs font-mono text-slate-400">
                  <span>Fatalities: <strong className="text-red-400">{typeof d.impacts.deaths === 'number' ? d.impacts.deaths.toLocaleString('en-IN') : d.impacts.deaths}</strong></span>
                  <span>Loss: <strong className="text-emerald-400">{typeof d.impacts.economicLossINR === 'number' ? `₹${d.impacts.economicLossINR} Cr` : d.impacts.economicLossINR}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Individual Disaster Dossier Modal */}
      {selectedDisaster && (
        <DisasterDossierModal
          disaster={selectedDisaster}
          onClose={() => setSelectedDisaster(null)}
        />
      )}
    </div>
  );
};
