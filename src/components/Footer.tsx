import React from 'react';
import { Shield, PhoneCall, ExternalLink, Heart } from 'lucide-react';
import { TricolourBrand } from './TricolourBrand';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenSos: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenSos }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info with Tricolour Theme */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <TricolourBrand size="md" withBadge={true} />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              India's evidence-based climate-risk intelligence, disaster preparedness, and sustainable-action platform. 
              Designed for citizens, researchers, and administrators.
            </p>
            <div className="text-[11px] font-mono text-slate-500">
              Zero fabricated statistics. Strict 4-tier source hierarchy.
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">
              Platform Modules
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('climate101')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Climate Science 101 & Southwest Monsoon
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('hazards')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  India 10 Hazard Taxonomy (22 Phenomena)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('disasters')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Historical Disasters Database (1970–2025)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('cascading')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Cascading Impact Domino Simulator
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('solutions')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Low-Cost Sustainable Solutions (&lt; ₹5k)
                </button>
              </li>
            </ul>
          </div>

          {/* Institutional Data Sources */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">
              Official Data Partners
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200">
                <span>• India Meteorological Department (IMD)</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200">
                <span>• Ministry of Earth Sciences (MoES)</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200">
                <span>• National Disaster Management Authority (NDMA)</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200">
                <span>• Central Water Commission (CWC)</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200">
                <span>• ISRO National Remote Sensing Centre (NRSC)</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200">
                <span>• IPCC Sixth Assessment Report (AR6)</span>
              </li>
            </ul>
          </div>

          {/* Emergency SOS & Hotlines */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">
              Emergency Hotlines
            </h4>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase block">NDMA National Helpline</span>
                <span className="font-mono text-emerald-400 font-bold text-sm">1078 (Toll-Free 24x7)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase block">Police / Fire / Ambulance</span>
                <span className="font-mono text-amber-400 font-bold text-sm">112 (Unified Emergency)</span>
              </div>
              <button
                onClick={onOpenSos}
                className="w-full mt-2 py-2 px-3 rounded-lg bg-red-600/20 text-red-300 border border-red-500/30 hover:bg-red-600/30 transition-colors font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Open Full Emergency Directory</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 border-t border-slate-900 text-[11px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} BhoomiRakshak Platform · Dedicated to climate resilience, disaster preparedness, and ecological stewardship in India.
          </p>
          <div className="flex items-center gap-4">
            <button onClick={() => setActiveTab('sources')} className="hover:text-slate-300 underline cursor-pointer">
              Source Governance
            </button>
            <span>·</span>
            <span>Made with rigor for 1.4 Billion Citizens</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
