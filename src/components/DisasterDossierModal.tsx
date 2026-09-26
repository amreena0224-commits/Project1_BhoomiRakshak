import React from 'react';
import { HistoricalDisaster } from '../types';
import { 
  X, 
  Calendar, 
  MapPin, 
  AlertTriangle, 
  TrendingUp, 
  FileText, 
  Users, 
  IndianRupee, 
  Building, 
  Trees, 
  ShieldCheck, 
  ExternalLink,
  Info,
  CheckCircle2
} from 'lucide-react';

interface DisasterDossierModalProps {
  disaster: HistoricalDisaster | null;
  onClose: () => void;
}

export const DisasterDossierModal: React.FC<DisasterDossierModalProps> = ({ disaster, onClose }) => {
  if (!disaster) return null;

  const getAttributionBadge = (attr: string) => {
    switch (attr) {
      case 'direct':
        return 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40';
      case 'amplified':
        return 'bg-blue-500/20 text-blue-400 border border-blue-500/40';
      case 'uncertain':
        return 'bg-amber-500/20 text-amber-300 border border-amber-500/30';
      default:
        return 'bg-slate-800 text-slate-300 border border-slate-700';
    }
  };

  const getConfidenceBadge = (conf: string) => {
    switch (conf) {
      case 'very_high':
        return 'text-emerald-400 font-bold';
      case 'high':
        return 'text-blue-400 font-bold';
      case 'medium':
        return 'text-amber-400 font-bold';
      default:
        return 'text-slate-400';
    }
  };

  const getOutlookBadge = (tag: string) => {
    switch (tag) {
      case 'OBSERVED':
        return 'bg-emerald-950/80 text-emerald-300 border-emerald-600/50';
      case 'PROJECTED':
        return 'bg-blue-950/80 text-blue-300 border-blue-600/50';
      case 'MODELED':
        return 'bg-purple-950/80 text-purple-300 border-purple-600/50';
      default:
        return 'bg-amber-950/80 text-amber-300 border-amber-600/50';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950/70 p-6 border-b border-slate-800 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                {disaster.subCategory}
              </span>
              <span className={`text-xs font-mono uppercase px-2 py-0.5 rounded ${getAttributionBadge(disaster.climateConnection)}`}>
                {disaster.climateConnection.replace('_', ' ')} attribution
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Scientific Confidence: <span className={getConfidenceBadge(disaster.scientificConfidence)}>{disaster.scientificConfidence.replace('_', ' ')}</span>
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {disaster.name}
            </h2>
            <div className="flex items-center gap-4 text-xs text-slate-400 mt-2 flex-wrap font-mono">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                {disaster.dateRange}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {disaster.primaryLocations.join(', ')} ({disaster.statesAffected.join(', ')})
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dossier Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-300">
          {/* Executive Overview */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              1. Event Overview & What Happened
            </h4>
            <p className="text-slate-300 leading-relaxed">{disaster.description}</p>
          </div>

          {/* Meteorological Trigger & Climate Attribution Evidence */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                Meteorological Trigger (Atmospheric Physics)
              </h4>
              <p className="text-slate-400 leading-relaxed text-xs">
                {disaster.meteorologicalTrigger}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                Scientific Attribution Evidence
              </h4>
              <p className="text-slate-400 leading-relaxed text-xs">
                {disaster.attributionEvidence}
              </p>
            </div>
          </div>

          {/* Impact Metrics (Sourced or Data Unavailable) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3 flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              Human & Socio-Economic Toll (Verified Sourced Data)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Casualties (Deaths)</span>
                <span className="text-lg font-bold font-mono text-red-400 mt-1 block">
                  {typeof disaster.impacts.deaths === 'number'
                    ? disaster.impacts.deaths.toLocaleString('en-IN')
                    : disaster.impacts.deaths}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Displaced Persons</span>
                <span className="text-lg font-bold font-mono text-amber-400 mt-1 block">
                  {typeof disaster.impacts.displaced === 'number'
                    ? disaster.impacts.displaced.toLocaleString('en-IN')
                    : disaster.impacts.displaced}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Population Affected</span>
                <span className="text-lg font-bold font-mono text-slate-200 mt-1 block">
                  {typeof disaster.impacts.populationAffected === 'number'
                    ? disaster.impacts.populationAffected.toLocaleString('en-IN')
                    : disaster.impacts.populationAffected}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Economic Loss</span>
                <span className="text-lg font-bold font-mono text-emerald-400 mt-1 block">
                  {typeof disaster.impacts.economicLossINR === 'number'
                    ? `₹${disaster.impacts.economicLossINR.toLocaleString('en-IN')} Cr`
                    : disaster.impacts.economicLossINR}
                </span>
              </div>
            </div>

            {/* Sectoral damage breakdown */}
            <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80">
                <strong className="text-slate-300 block mb-1 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-slate-400" /> Infrastructure Impact:
                </strong>
                <p className="text-slate-400 leading-snug">{disaster.impacts.infrastructureDamageSummary}</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80">
                <strong className="text-slate-300 block mb-1 flex items-center gap-1.5">
                  <Trees className="w-3.5 h-3.5 text-emerald-400" /> Agricultural Damage:
                </strong>
                <p className="text-slate-400 leading-snug">{disaster.impacts.agriculturalDamageSummary}</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80">
                <strong className="text-slate-300 block mb-1 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-blue-400" /> Environmental Impact:
                </strong>
                <p className="text-slate-400 leading-snug">{disaster.impacts.environmentalImpactSummary}</p>
              </div>
            </div>
          </div>

          {/* Institutional Response & Lessons Learned */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Government & Disaster Management (NDMA/NDRF) Response
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div>
                <strong className="text-slate-300 block mb-1">State & National Action:</strong>
                <p className="text-slate-400 leading-relaxed">{disaster.institutionalResponse.governmentAction}</p>
              </div>
              <div>
                <strong className="text-slate-300 block mb-1">NDRF / SDRF Deployment:</strong>
                <p className="text-slate-400 leading-relaxed">{disaster.institutionalResponse.ndmaNdrfDeployment}</p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800">
              <strong className="text-slate-300 block mb-1 text-xs">Lessons Learned & Institutional Reforms:</strong>
              <ul className="space-y-1 text-xs text-slate-400">
                {disaster.institutionalResponse.lessonsLearned.map((l, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Future Outlook (With Strict Scientific Rule: OBSERVED / PROJECTED / MODELED / UNCERTAIN) */}
          <div className="p-4 rounded-xl bg-slate-950 border border-blue-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                Future Risk Assessment (What Could Happen Next?)
              </h4>
              <span className={`text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded border ${getOutlookBadge(disaster.futureOutlook.confidenceTag)}`}>
                {disaster.futureOutlook.confidenceTag}
              </span>
            </div>

            <div className="text-xs leading-relaxed text-slate-300 space-y-2">
              <p>
                <strong className="text-white">Trend Direction: </strong> 
                <span className="font-semibold text-emerald-400">{disaster.futureOutlook.trendDirection}</span>
              </p>
              <p className="text-slate-400">
                {disaster.futureOutlook.projectedOutlookNote}
              </p>
              <div>
                <strong className="text-white block mb-1">Vulnerable Hotspots:</strong>
                <div className="flex flex-wrap gap-1.5">
                  {disaster.futureOutlook.vulnerableHotspots.map((h, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Source Citations */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs">
            <h4 className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
              Official Primary Sources Cited:
            </h4>
            <div className="space-y-1.5">
              {disaster.sources.map((src) => (
                <div key={src.id} className="flex items-center justify-between text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.2 rounded bg-slate-900 text-slate-300 border border-slate-800 text-[10px] font-mono">
                      Tier {src.tier}
                    </span>
                    <span className="text-slate-300 font-medium">{src.organization}:</span>
                    <span className="italic">{src.title} ({src.yearPublished})</span>
                  </div>
                  {src.url && (
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 shrink-0 ml-2"
                    >
                      <span>Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors cursor-pointer"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
