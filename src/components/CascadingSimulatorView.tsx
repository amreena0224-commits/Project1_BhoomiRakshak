import React, { useState } from 'react';
import { CASCADING_CHAINS } from '../data/cascadingChains';
import { 
  GitCommit, 
  ArrowDown, 
  ShieldCheck, 
  AlertTriangle, 
  Activity, 
  Building, 
  Users, 
  HeartPulse, 
  TrendingDown, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const CascadingSimulatorView: React.FC = () => {
  const [activeChainId, setActiveChainId] = useState<string>(CASCADING_CHAINS[0].id);

  const activeChain = CASCADING_CHAINS.find((c) => c.id === activeChainId) || CASCADING_CHAINS[0];

  const getSectorBadge = (sector: string) => {
    switch (sector) {
      case 'meteorology':
        return { label: 'Atmospheric Physics', icon: Activity, color: 'text-blue-400 bg-blue-950/80 border-blue-800' };
      case 'infrastructure':
        return { label: 'Critical Utilities', icon: Building, color: 'text-amber-400 bg-amber-950/80 border-amber-800' };
      case 'society':
        return { label: 'Community & Labor', icon: Users, color: 'text-purple-400 bg-purple-950/80 border-purple-800' };
      case 'health':
        return { label: 'Public Health Epidemic', icon: HeartPulse, color: 'text-red-400 bg-red-950/80 border-red-800' };
      case 'economy':
        return { label: 'Economic Disruption', icon: TrendingDown, color: 'text-emerald-400 bg-emerald-950/80 border-emerald-800' };
      default:
        return { label: 'System shock', icon: AlertTriangle, color: 'text-slate-400 bg-slate-800 border-slate-700' };
    }
  };

  const getSeverityBadge = (level: string) => {
    switch (level) {
      case 'Critical':
        return 'bg-red-500/20 text-red-400 border border-red-500/40';
      case 'Severe':
        return 'bg-orange-500/20 text-orange-400 border border-orange-500/40';
      default:
        return 'bg-amber-500/20 text-amber-300 border border-amber-500/30';
    }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-2">
            PHASE 7: WHAT COULD HAPPEN NEXT?
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Compounding Cascading Impact Simulator
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
            Climate disasters do not occur in silos. In India's dense urban and agrarian ecosystems, an atmospheric shock 
            triggers a rapid multi-sector domino effect. Explore how disruptions cascade through utilities, health, and livelihoods, 
            and see how specific resilience circuit-breakers halt the chain.
          </p>
        </div>

        {/* Hazard Cascade Selectors */}
        <div className="mt-6 flex flex-wrap gap-2">
          {CASCADING_CHAINS.map((chain) => {
            const isSelected = activeChain.id === chain.id;
            return (
              <button
                key={chain.id}
                onClick={() => setActiveChainId(chain.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-950 scale-102'
                    : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700'
                }`}
              >
                {chain.hazardName}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Cascade Tree & Breakers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Cascade Chain Sequence (Left 8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          {/* Trigger Banner */}
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
            <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block">
              INITIAL METEOROLOGICAL TRIGGER:
            </span>
            <p className="text-sm font-bold text-white mt-1">
              {activeChain.initialTrigger}
            </p>
            <div className="mt-2 text-xs font-mono text-emerald-400">
              Documented Precedent: {activeChain.realWorldExample}
            </div>
          </div>

          {/* Sequential Domino Nodes */}
          <div className="space-y-3 relative pl-6 sm:pl-8 border-l-2 border-slate-800 my-4">
            {activeChain.nodes.map((node, index) => {
              const sectorInfo = getSectorBadge(node.sector);
              const SectorIcon = sectorInfo.icon;
              return (
                <div key={node.step} className="relative group">
                  {/* Step Connector Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-4 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-400 flex items-center justify-center text-[9px] font-mono font-bold text-emerald-400">
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-lg space-y-2 hover:border-slate-700 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-emerald-400">
                          STAGE 0{node.step}
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-white">
                          {node.title}
                        </h4>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border flex items-center gap-1 ${sectorInfo.color}`}>
                          <SectorIcon className="w-3 h-3" />
                          <span>{sectorInfo.label}</span>
                        </span>
                        <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${getSeverityBadge(node.impactLevel)}`}>
                          {node.impactLevel}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                      {node.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right 4 cols: Resilience Circuit Breakers */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-slate-900 border border-emerald-500/30 rounded-3xl p-5 sm:p-6 shadow-xl sticky top-20">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  Resilience Circuit-Breakers
                </h3>
                <p className="text-xs text-slate-400">
                  How proactive engineering & planning stops the domino chain
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Disasters become catastrophes when secondary and tertiary systems fail. 
              Implementing these targeted, cost-effective interventions breaks the cascade:
            </p>

            <div className="space-y-3">
              {activeChain.resilienceBreakers.map((breaker, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed flex items-start gap-2.5 hover:border-emerald-500/40 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{breaker}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400">
              *All circuit breakers are mapped to low-and-medium cost Indian municipal adaptation standards.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
