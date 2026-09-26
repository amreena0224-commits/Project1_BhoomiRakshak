/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { Climate101View } from './components/Climate101View';
import { HazardsView } from './components/HazardsView';
import { DisasterExplorerView } from './components/DisasterExplorerView';
import { CascadingSimulatorView } from './components/CascadingSimulatorView';
import { SolutionsView } from './components/SolutionsView';
import { LocationRiskView } from './components/LocationRiskView';
import { SourcesView } from './components/SourcesView';
import { SosModal } from './components/SosModal';
import { DisasterDossierModal } from './components/DisasterDossierModal';
import { Footer } from './components/Footer';
import { HISTORICAL_DISASTERS } from './data/disasters';
import { DisasterCategory, HistoricalDisaster } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [analyticsMode, setAnalyticsMode] = useState<boolean>(false);
  const [sosOpen, setSosOpen] = useState<boolean>(false);

  // Cross-component parameters
  const [selectedDisasterId, setSelectedDisasterId] = useState<string | null>(null);
  const [targetStateForProfile, setTargetStateForProfile] = useState<string | undefined>(undefined);
  const [targetStateForDisasters, setTargetStateForDisasters] = useState<string | undefined>(undefined);
  const [targetHazardForDisasters, setTargetHazardForDisasters] = useState<string | undefined>(undefined);
  const [targetHazardForSolutions, setTargetHazardForSolutions] = useState<DisasterCategory | undefined>(undefined);

  // Active disaster modal for direct inspection
  const activeDisasterModal: HistoricalDisaster | null = selectedDisasterId
    ? HISTORICAL_DISASTERS.find((d) => d.id === selectedDisasterId) || null
    : null;

  const handleNavigateWithQuery = (tab: string, stateOrQuery?: string) => {
    if (tab === 'disasters') {
      setTargetStateForDisasters(stateOrQuery);
      setTargetHazardForDisasters(undefined);
    } else if (tab === 'location') {
      setTargetStateForProfile(stateOrQuery);
    }
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectHazardForDisasters = (hazardId: DisasterCategory) => {
    setTargetHazardForDisasters(hazardId);
    setTargetStateForDisasters(undefined);
    setActiveTab('disasters');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectHazardForSolutions = (hazardId: DisasterCategory) => {
    setTargetHazardForSolutions(hazardId);
    setActiveTab('solutions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        analyticsMode={analyticsMode}
        setAnalyticsMode={setAnalyticsMode}
        onOpenSos={() => setSosOpen(true)}
      />

      {/* Main View Port */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {activeTab === 'home' && (
          <HomeView
            onNavigate={handleNavigateWithQuery}
            onSelectDisaster={(dId) => setSelectedDisasterId(dId)}
            onOpenSos={() => setSosOpen(true)}
            analyticsMode={analyticsMode}
          />
        )}

        {activeTab === 'climate101' && (
          <Climate101View analyticsMode={analyticsMode} />
        )}

        {activeTab === 'hazards' && (
          <HazardsView
            onSelectHazardForDisasters={handleSelectHazardForDisasters}
            onSelectHazardForSolutions={handleSelectHazardForSolutions}
          />
        )}

        {activeTab === 'disasters' && (
          <DisasterExplorerView
            initialSearchState={targetStateForDisasters}
            initialSearchCategory={targetHazardForDisasters}
          />
        )}

        {activeTab === 'cascading' && (
          <CascadingSimulatorView />
        )}

        {activeTab === 'solutions' && (
          <SolutionsView
            initialHazardFilter={targetHazardForSolutions}
          />
        )}

        {activeTab === 'location' && (
          <LocationRiskView
            initialStateId={targetStateForProfile}
            onNavigateToDisasters={(stName) => handleNavigateWithQuery('disasters', stName)}
            onNavigateToSolutions={handleSelectHazardForSolutions}
          />
        )}

        {activeTab === 'sources' && (
          <SourcesView />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSos={() => setSosOpen(true)}
      />

      {/* Emergency SOS Directory Modal */}
      <SosModal
        isOpen={sosOpen}
        onClose={() => setSosOpen(false)}
        onSelectState={(stateId) => {
          setTargetStateForProfile(stateId);
          setActiveTab('location');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Standalone Disaster Dossier Modal */}
      {activeDisasterModal && (
        <DisasterDossierModal
          disaster={activeDisasterModal}
          onClose={() => setSelectedDisasterId(null)}
        />
      )}
    </div>
  );
}
