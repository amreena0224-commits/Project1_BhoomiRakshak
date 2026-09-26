import React, { useState } from 'react';
import { SOURCES_REPOSITORY } from '../data/sources';
import { 
  FileCheck, 
  ShieldCheck, 
  ExternalLink, 
  Search, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  AlertTriangle,
  Scale
} from 'lucide-react';

export const SourcesView: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSources = SOURCES_REPOSITORY.filter((s) => {
    if (selectedTier !== 'all' && s.tier !== selectedTier) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchesOrg = s.organization.toLowerCase().includes(q);
      const matchesTitle = s.title.toLowerCase().includes(q);
      const matchesNotes = s.notes?.toLowerCase().includes(q) || false;
      if (!matchesOrg && !matchesTitle && !matchesNotes) return false;
    }
    return true;
  });

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
            PHASE 13 & PHASE 15: SCIENTIFIC GOVERNANCE & SOURCE CITATIONS
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Scientific Source Hierarchy & Attribution Governance
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
            BhoomiRakshak enforces strict empirical discipline. Every metric, disaster statistic, and projected trend 
            links directly to primary institutional baselines. We never invent probabilities, fabricate numbers, or sensationalize risks.
          </p>
        </div>
      </div>

      {/* The 4-Tier Source Hierarchy Explanation */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-emerald-400" />
          <span>The Four-Tier Verification Hierarchy</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {/* Tier 1 */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-emerald-400 font-bold">TIER 1 (GOLD)</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                Primary Mandate
              </span>
            </div>
            <h3 className="font-bold text-white text-sm">Official Government & Global Mandates</h3>
            <p className="text-slate-400 leading-relaxed">
              India Meteorological Department (IMD), Ministry of Earth Sciences (MoES), NDMA, ISRO NRSC, Central Water Commission (CWC), IPCC AR6.
            </p>
          </div>

          {/* Tier 2 */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-blue-500/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-blue-400 font-bold">TIER 2 (PEER REVIEW)</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                Empirical Science
              </span>
            </div>
            <h3 className="font-bold text-white text-sm">Peer-Reviewed Scientific Journals</h3>
            <p className="text-slate-400 leading-relaxed">
              Indian Institute of Tropical Meteorology (IITM Pune), IITs, Wadia Institute, <em>Nature Climate Change</em>, <em>Science</em>, <em>Current Science</em>.
            </p>
          </div>

          {/* Tier 3 */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-purple-500/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-purple-400 font-bold">TIER 3 (MULTILATERAL)</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                Recognized Orgs
              </span>
            </div>
            <h3 className="font-bold text-white text-sm">Accredited International Bodies</h3>
            <p className="text-slate-400 leading-relaxed">
              World Meteorological Organization (WMO), World Bank South Asia Climate, UNEP, Asian Development Bank.
            </p>
          </div>

          {/* Tier 4 */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-700 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-slate-300 font-bold">TIER 4 (ARCHIVAL)</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-700">
                Historical Context
              </span>
            </div>
            <h3 className="font-bold text-white text-sm">Official Gazettes & Archival Relief Records</h3>
            <p className="text-slate-400 leading-relaxed">
              State Government Relief Commission reports, District Gazettes, and verified archival press for casualty cross-validation.
            </p>
          </div>
        </div>
      </div>

      {/* Strict Scientific Attribution Rules */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-3 flex items-center gap-2">
          <Scale className="w-5 h-5 text-emerald-400" />
          <span>Core Scientific Governance Rules Enforced in BhoomiRakshak</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <h4 className="font-bold text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              1. Zero Fabricated Future Probabilities
            </h4>
            <p className="text-slate-300 leading-relaxed">
              We never invent false numerical probabilities like "73% chance of cyclone in 2035". All future outlooks are presented with qualitative trend directions, scenario ranges, and explicit certainty tags: <strong>OBSERVED</strong>, <strong>PROJECTED</strong>, <strong>MODELED</strong>, or <strong>UNCERTAIN</strong>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <h4 className="font-bold text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              2. Strict Attribution Discipline
            </h4>
            <p className="text-slate-300 leading-relaxed">
              We do not automatically classify every natural disaster as caused by global warming. We separate direct thermodynamic connections from climate influence/amplification, uncertain interactions, and local human engineering failures (e.g. building on floodplains).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <h4 className="font-bold text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              3. Honest Missing Data Transparency
            </h4>
            <p className="text-slate-300 leading-relaxed">
              Where reliable government or peer-reviewed records are unavailable for historical parameters (e.g., precise displacement in 1970s floods or informal labor economic loss), the platform explicitly marks the field as <strong>"Data unavailable"</strong> rather than interpolating assumptions.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <h4 className="font-bold text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              4. Anti-Fearmongering & Action Focus
            </h4>
            <p className="text-slate-300 leading-relaxed">
              Fear paralyzes action; scientific clarity empowers preparedness. For every hazard identified, BhoomiRakshak couples the risk assessment with practical, low-cost adaptation protocols actionable within Indian economic reality.
            </p>
          </div>
        </div>
      </div>

      {/* Filterable Sources Repository Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-white">Primary Document Repository</h2>
            <p className="text-xs text-slate-400">All citations currently active across the platform</p>
          </div>

          {/* Tier buttons */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setSelectedTier('all')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                selectedTier === 'all' ? 'bg-slate-800 text-white font-bold' : 'text-slate-400'
              }`}
            >
              All Tiers
            </button>
            <button
              onClick={() => setSelectedTier(1)}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                selectedTier === 1 ? 'bg-emerald-600 text-slate-950 font-bold' : 'text-slate-400'
              }`}
            >
              Tier 1
            </button>
            <button
              onClick={() => setSelectedTier(2)}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                selectedTier === 2 ? 'bg-blue-600 text-white font-bold' : 'text-slate-400'
              }`}
            >
              Tier 2
            </button>
            <button
              onClick={() => setSelectedTier(3)}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                selectedTier === 3 ? 'bg-purple-600 text-white font-bold' : 'text-slate-400'
              }`}
            >
              Tier 3
            </button>
          </div>
        </div>

        {/* Source Cards */}
        <div className="space-y-3 pt-2">
          {filteredSources.map((src) => (
            <div
              key={src.id}
              className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded border ${
                    src.tier === 1
                      ? 'bg-emerald-950 text-emerald-400 border-emerald-800'
                      : src.tier === 2
                      ? 'bg-blue-950 text-blue-400 border-blue-800'
                      : 'bg-purple-950 text-purple-400 border-purple-800'
                  }`}>
                    Tier {src.tier}
                  </span>
                  <span className="font-semibold text-white">{src.organization}</span>
                  <span className="text-slate-400 font-mono">({src.yearPublished})</span>
                </div>
                <h4 className="text-slate-200 font-medium">{src.title}</h4>
                {src.notes && <p className="text-slate-400 text-[11px] leading-snug">{src.notes}</p>}
              </div>

              <div className="shrink-0 flex items-center gap-3 text-right">
                <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">
                  Verified: {src.lastVerifiedDate}
                </span>
                {src.url && (
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer border border-slate-700"
                  >
                    <span>Official Portal</span>
                    <ExternalLink className="w-3 h-3 text-emerald-400" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
