'use client';

import { useState, useEffect } from 'react';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { Dashboard } from '../components/Dashboard';
import { AssetSearch } from '../components/AssetSearch';
import { SettingsPanel } from '../components/SettingsPanel';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const { setFrameReady } = useMiniKit();

  useEffect(() => {
    setFrameReady();
  }, [setFrameReady]);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'search':
        return <AssetSearch searchQuery={searchQuery} />;
      case 'portfolio':
        return <Dashboard />; // Reuse dashboard for now
      case 'settings':
        return <SettingsPanel />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600">
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
          
          {/* Content */}
          <main className="flex-1 overflow-y-auto scrollbar-hide">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}
