'use client';

import { useState } from 'react';
import { 
  Bell, 
  Moon, 
  Globe, 
  Shield, 
  Smartphone, 
  Wifi, 
  Download,
  Settings2,
  ChevronRight
} from 'lucide-react';

export function SettingsPanel() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: true,
    autoRefresh: true,
    biometrics: false,
    dataSync: true,
    offlineMode: false,
  });

  const toggleSetting = (key: string) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const settingsGroups = [
    {
      title: 'General',
      items: [
        {
          id: 'notifications',
          icon: Bell,
          label: 'Notifications',
          description: 'Push notifications for price alerts',
          value: settings.notifications
        },
        {
          id: 'darkMode',
          icon: Moon,
          label: 'Dark Mode',
          description: 'Use dark theme interface',
          value: settings.darkMode
        },
        {
          id: 'autoRefresh',
          icon: Wifi,
          label: 'Auto Refresh',
          description: 'Automatically update data',
          value: settings.autoRefresh
        }
      ]
    },
    {
      title: 'Security',
      items: [
        {
          id: 'biometrics',
          icon: Shield,
          label: 'Biometric Auth',
          description: 'Use fingerprint or face ID',
          value: settings.biometrics
        }
      ]
    },
    {
      title: 'Data & Storage',
      items: [
        {
          id: 'dataSync',
          icon: Globe,
          label: 'Cloud Sync',
          description: 'Sync data across devices',
          value: settings.dataSync
        },
        {
          id: 'offlineMode',
          icon: Smartphone,
          label: 'Offline Mode',
          description: 'Cache data for offline use',
          value: settings.offlineMode
        }
      ]
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
          <p className="text-gray-300">Customize your ChronoFilter experience</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-white">$3,556</p>
          <p className="text-sm text-gray-400">Total Portfolio Value</p>
        </div>
      </div>

      {/* Settings Groups */}
      <div className="space-y-8">
        {settingsGroups.map((group) => (
          <div key={group.title} className="glass-card p-6">
            <h2 className="text-xl font-semibold text-white mb-6">{group.title}</h2>
            <div className="space-y-4">
              {group.items.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="flex items-center justify-between p-4 hover:bg-white hover:bg-opacity-5 rounded-lg transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-600 bg-opacity-20 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">{item.label}</h3>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleSetting(item.id)}
                      className={`w-12 h-6 rounded-full relative transition-colors ${
                        item.value ? 'bg-blue-600' : 'bg-gray-600'
                      }`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                        item.value ? 'right-1' : 'left-1'
                      }`}></div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Options */}
      <div className="glass-card p-6">
        <h2 className="text-xl font-semibold text-white mb-6">More Options</h2>
        <div className="space-y-4">
          {[
            { icon: Download, label: 'Export Data', description: 'Download your portfolio data' },
            { icon: Settings2, label: 'Advanced Settings', description: 'Configure advanced options' },
            { icon: Globe, label: 'Language & Region', description: 'Change language and currency' },
          ].map((option, index) => {
            const Icon = option.icon;
            return (
              <button
                key={index}
                className="w-full flex items-center justify-between p-4 hover:bg-white hover:bg-opacity-5 rounded-lg transition-colors text-left"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-600 bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{option.label}</h3>
                    <p className="text-sm text-gray-400">{option.description}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
