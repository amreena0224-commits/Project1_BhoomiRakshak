import React, { useState } from 'react';
import { 
  INDIA_CLIMATE_METRICS, 
  CLIMATE_SCIENCE_CONCEPTS, 
  CLIMATE_IMPACT_CHAIN, 
  ATTRIBUTION_LEVELS_EXPLAINED 
} from '../data/climate101';
import { 
  BookOpen, 
  ArrowRight, 
  TrendingUp, 
  HelpCircle, 
  AlertCircle, 
  CheckCircle2, 
  FileText, 
  Scale, 
  Thermometer, 
  Waves, 
  Zap, 
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  MapPin
} from 'lucide-react';

interface Climate101ViewProps {
  analyticsMode: boolean;
}

export const Climate101View: React.FC<Climate101ViewProps> = ({ analyticsMode }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [expandedConcept, setExpandedConcept] = useState<string>('global-warming-vs-climate-change');

  return (
    <div className="space-y-10 max-w-7xl mx-auto">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/50 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>PHASE 1: SCIENTIFIC FOUNDATION</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Understanding Climate Science & Its Realities in India
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Distinguishing empirical facts from assumptions. Rooted in observational data from the 
            <strong className="text-emerald-400 font-semibold"> India Meteorological Department (IMD)</strong>, 
            <strong className="text-emerald-400 font-semibold"> Ministry of Earth Sciences (MoES)</strong>, and the 
            <strong className="text-emerald-400 font-semibold"> IPCC 6th Assessment Report</strong>.
          </p>
        </div>
      </div>

      {/* Official Empirical Climate Indicators for India */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Thermometer className="w-5 h-5 text-emerald-400" />
              <span>Official Indian Climate Metrics (Observed Empirical Records)</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Verified physical measurements published by MoES, IMD, and IITM Pune. No model interpolations.
            </p>
          </div>
          <span className="text-[11px] font-mono text-slate-400 px-2 py-1 rounded bg-slate-900 border border-slate-800 hidden sm:inline">
            1901 – 2025 BASELINES
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {INDIA_CLIMATE_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all shadow-md flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase block">
                  {metric.title}
                </span>
                <div className="mt-2 text-2xl font-black font-mono text-emerald-400">
                  {metric.value}
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">{metric.unit}</div>
                <p className="text-xs text-slate-300 mt-2.5 leading-snug">
                  {metric.trendDescription}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] text-slate-400 flex items-center justify-between">
                <span className="font-semibold text-slate-300">{metric.sourceOrg}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The 6-Step Causal Chain: Global Warming to Human Risk */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-slate-800 text-slate-300 border border-slate-700 mb-2">
            PHYSICAL MECHANISM & CASUAL PATHWAY
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            How Global Warming Translates Into Human & Economic Risk in India
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Global warming is not a single isolated event—it is a continuous thermodynamic chain reaction. 
            Click any step to inspect the physical mechanism and its concrete manifestations in India:
          </p>
        </div>

        {/* Step-by-Step Chain Interactive Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
          {CLIMATE_IMPACT_CHAIN.map((step) => {
            const isSelected = activeStep === step.step;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-950/50 border-emerald-500 text-white shadow-lg ring-1 ring-emerald-500/50'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                  <span className={`font-bold ${isSelected ? 'text-emerald-400' : 'text-slate-500'}`}>
                    STEP 0{step.step}
                  </span>
                  {step.step < 6 && <ArrowRight className="w-3 h-3 text-slate-600 hidden lg:block" />}
                </div>
                <div className="text-xs font-semibold leading-tight line-clamp-2">
                  {step.label}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detail Panel */}
        {(() => {
          const current = CLIMATE_IMPACT_CHAIN.find((s) => s.step === activeStep)!;
          return (
            <div className="bg-slate-950 border border-emerald-500/30 rounded-2xl p-5 sm:p-6 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
                <div>
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    Stage {current.step} of 6
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">{current.label}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Next Stage:</span>
                  <button
                    onClick={() => setActiveStep(activeStep < 6 ? activeStep + 1 : 1)}
                    className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-slate-950 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>{activeStep < 6 ? `Go to Step 0${activeStep + 1}` : 'Restart Cycle'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                  <h4 className="font-semibold text-slate-200 uppercase tracking-wider text-xs mb-1.5 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-emerald-400" />
                    Physical Scientific Process
                  </h4>
                  <p className="text-slate-300 leading-relaxed">{current.detail}</p>
                </div>

                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                  <h4 className="font-semibold text-emerald-400 uppercase tracking-wider text-xs mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    Real-World Evidence in India
                  </h4>
                  <p className="text-slate-300 leading-relaxed">{current.exampleInIndia}</p>
                </div>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Scientific Attribution Framework (Crucial Rule) */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-2">
            STRICT SCIENTIFIC RULE
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Scientific Attribution: Not Every Disaster Is "Caused By Climate Change"
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Science requires empirical rigor. We strictly classify every Indian event into one of four attribution tiers based on the IPCC & MoES attribution guidelines:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ATTRIBUTION_LEVELS_EXPLAINED.map((level) => (
            <div
              key={level.type}
              className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {level.badge}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {level.scientificConfidence.split(' ')[0]} Conf.
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{level.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">{level.criteria}</p>
                
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/80 text-xs">
                  <strong className="text-slate-300 block mb-1">Key Examples:</strong>
                  <span className="text-slate-400">{level.examples}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] text-slate-400 font-mono">
                Consensus: {level.scientificConfidence}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Scientific Concepts & Misconceptions Debunked */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
          Core Scientific Debates & Misconceptions Debunked
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mb-6">
          Clarity on natural oscillations (ENSO, IOD) versus secular climate trends, and common myths:
        </p>

        <div className="space-y-3">
          {CLIMATE_SCIENCE_CONCEPTS.map((concept) => {
            const isExpanded = expandedConcept === concept.id;
            return (
              <div
                key={concept.id}
                className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setExpandedConcept(isExpanded ? '' : concept.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-slate-900/60 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/50">
                      {concept.badge}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white">{concept.title}</h3>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>

                {isExpanded && (
                  <div className="p-5 pt-0 border-t border-slate-800/60 space-y-4 text-xs sm:text-sm text-slate-300">
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <strong className="text-white block mb-1">Definition:</strong>
                      {concept.definition}
                    </div>

                    <div>
                      <strong className="text-white block mb-1">Scientific Deep Dive:</strong>
                      <p className="leading-relaxed text-slate-400">{concept.deepDive}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                      <strong className="text-emerald-400 block mb-1">Why This Matters For India:</strong>
                      <p className="leading-relaxed text-slate-300">{concept.indianContext}</p>
                    </div>

                    <div>
                      <strong className="text-amber-400 block mb-2">Common Misconceptions Addressed:</strong>
                      <div className="space-y-2">
                        {concept.commonMisconceptions.map((misc, idx) => (
                          <div key={idx} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs leading-relaxed text-slate-300 flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                            <span>{misc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
