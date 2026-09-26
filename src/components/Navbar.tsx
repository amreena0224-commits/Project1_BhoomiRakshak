import React, { useState } from 'react';
import { 
  Shield, 
  Map, 
  BookOpen, 
  AlertTriangle, 
  Database, 
  GitCommit, 
  HeartHandshake, 
  MapPin, 
  FileCheck, 
  PhoneCall, 
  Sliders,
  X,
  ExternalLink
} from 'lucide-react';

import { TricolourBrand } from './TricolourBrand';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  analyticsMode: boolean;
  setAnalyticsMode: (val: boolean) => void;
  onOpenSos: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  analyticsMode,
  setAnalyticsMode,
  onOpenSos
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Overview & Map', icon: Map },
    { id: 'climate101', label: 'Climate 101', icon: BookOpen },
    { id: 'hazards', label: 'Hazards Matrix', icon: AlertTriangle },
    { id: 'disasters', label: 'Disaster Archive', icon: Database },
    { id: 'cascading', label: 'Cascading Simulator', icon: GitCommit },
    { id: 'solutions', label: 'Solutions & Preparedness', icon: HeartHandshake },
    { id: 'location', label: 'Local Risk Profile', icon: MapPin },
    { id: 'sources', label: 'Scientific Sources', icon: FileCheck },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 text-slate-100">
      {/* Top emergency bulletin bar */}
      <div className="bg-gradient-to-r from-amber-950/70 via-slate-950 to-emerald-950/70 px-4 py-1.5 border-b border-slate-800/80 text-xs flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            OFFICIAL SCIENTIFIC DATA
          </span>
          <span className="text-slate-300 hidden sm:inline">
            Sourced from IMD, MoES Assessment, NDMA Guidelines & IPCC AR6 South Asia Chapters
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSos}
            className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-medium transition-colors cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Emergency Helplines (NDMA 1078)</span>
          </button>
          <span className="text-slate-600">|</span>
          {/* Dual mode switch */}
          <div className="flex items-center gap-1.5 bg-slate-900 px-2 py-0.5 rounded-full border border-slate-700/60">
            <Sliders className="w-3 h-3 text-slate-400" />
            <span className="text-[11px] text-slate-400">Mode:</span>
            <button
              onClick={() => setAnalyticsMode(false)}
              className={`px-1.5 py-0.5 rounded text-[10px] font-medium transition-colors cursor-pointer ${
                !analyticsMode ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Citizen
            </button>
            <button
              onClick={() => setAnalyticsMode(true)}
              className={`px-1.5 py-0.5 rounded text-[10px] font-medium transition-colors cursor-pointer ${
                analyticsMode ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Researcher
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo with Tricolour Theme */}
          <div 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-slate-800 to-emerald-600 p-[1.5px] shadow-lg shadow-amber-950/30 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Shield className="w-5 h-5 text-amber-400 group-hover:text-emerald-400 transition-colors" />
              </div>
            </div>
            <div>
              <TricolourBrand size="md" />
              <p className="text-[11px] text-slate-400 hidden sm:block">
                National Climate Risk & Disaster Resilience Platform
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-800 text-emerald-400 shadow-sm border border-slate-700 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile hamburger button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : (
                <div className="w-5 h-5 flex flex-col justify-around">
                  <span className="w-full h-0.5 bg-slate-300 rounded"></span>
                  <span className="w-full h-0.5 bg-slate-300 rounded"></span>
                  <span className="w-full h-0.5 bg-slate-300 rounded"></span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                  isActive
                    ? 'bg-slate-800 text-emerald-400 border border-slate-700'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
