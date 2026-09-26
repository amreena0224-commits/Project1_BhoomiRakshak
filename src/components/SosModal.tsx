import React from 'react';
import { X, PhoneCall, AlertOctagon, ShieldAlert, Radio, ExternalLink } from 'lucide-react';
import { STATES_HAZARDS } from '../data/states';

interface SosModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectState?: (stateId: string) => void;
}

export const SosModal: React.FC<SosModalProps> = ({ isOpen, onClose, onSelectState }) => {
  if (!isOpen) return null;

  const nationalHelplines = [
    { title: 'National Disaster Helpline (NDMA)', number: '1078', desc: 'Toll-free 24x7 control room for national emergency coordination', primary: true },
    { title: 'National Emergency Response System (Police/Fire/Ambulance)', number: '112', desc: 'Single pan-India unified emergency response number', primary: true },
    { title: 'Disaster Emergency Operations Center (District)', number: '1077', desc: 'Direct access to District Disaster Management Authority (DDMA)' },
    { title: 'State Disaster Emergency Operations Center', number: '1070', desc: 'State disaster control rooms and relief commissioners' },
    { title: 'Forest Fire Emergency Helpline', number: '1926', desc: 'Rapid response for forest wildfires and wildlife emergencies' },
    { title: 'Central Water Commission (CWC) Flood Information', number: '011-26106523', desc: 'Real-time river level updates and flood telemetry bulletins' },
    { title: 'Indian Coast Guard Maritime SAR', number: '1554', desc: 'Search and rescue for fishermen and coastal storm distress' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-red-950/80 via-slate-900 to-amber-950/80 p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30">
              <ShieldAlert className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                India Disaster Emergency Directory
                <span className="text-xs px-2 py-0.5 rounded bg-red-900/60 text-red-200 border border-red-700/50">
                  24x7 TOLL FREE
                </span>
              </h2>
              <p className="text-xs text-slate-300 mt-0.5">
                Official Government of India, NDMA, and State Disaster Control Rooms
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* SACHET CAP Banner */}
          <div className="bg-amber-950/40 border border-amber-500/30 rounded-xl p-4 flex items-start gap-3.5">
            <Radio className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-200/90 leading-relaxed">
              <strong className="text-amber-300 font-semibold block text-sm mb-1">
                SACHET Portal & Cell Broadcast Alerts (NDMA / DoT)
              </strong>
              In the event of an imminent cyclone, flash flood, or dam breach, the Government of India transmits priority audio-visual alerts directly to all mobile handsets in the target geographic radius using Common Alerting Protocol (CAP). If you receive an emergency buzzer alert, follow the on-screen instructions immediately.
            </div>
          </div>

          {/* National Helplines Grid */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">
              National Emergency Hotlines
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {nationalHelplines.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border transition-all ${
                    item.primary
                      ? 'bg-slate-800/90 border-red-500/40 hover:border-red-400'
                      : 'bg-slate-800/50 border-slate-700/60 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-snug">{item.desc}</p>
                    </div>
                    <a
                      href={`tel:${item.number.replace(/\s+/g, '')}`}
                      className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-mono text-sm font-bold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer shrink-0"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>{item.number}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* State Disaster Management Authorities (SDMA) Directory */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3 flex items-center justify-between">
              <span>State Disaster Management Control Rooms</span>
              <span className="text-xs text-slate-400 font-normal">Click state to view full profile</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-64 overflow-y-auto pr-1">
              {STATES_HAZARDS.map((st) => (
                <div
                  key={st.id}
                  onClick={() => {
                    if (onSelectState) onSelectState(st.id);
                    onClose();
                  }}
                  className="p-2.5 rounded-lg bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800 hover:border-emerald-500/50 transition-all cursor-pointer text-left"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-200">{st.name}</span>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/50">
                      {st.sdmaHelpline}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 truncate">{st.stateEmergencyCenter}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Remember: Dial 112 for immediate life-threatening incidents</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors cursor-pointer"
          >
            Close Directory
          </button>
        </div>
      </div>
    </div>
  );
};
