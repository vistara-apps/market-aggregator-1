'use client';

import { useState } from 'react';
import { 
  Home, 
  Search, 
  TrendingUp, 
  Wallet, 
  Settings2, 
  Bell, 
  HelpCircle,
  BarChart3,
  Layers,
  User
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const sidebarItems = [
  { id: 'dashboard', icon: Home, label: 'Dashboard' },
  { id: 'search', icon: Search, label: 'Asset Search' },
  { id: 'portfolio', icon: Wallet, label: 'Portfolio' },
  { id: 'analytics', icon: BarChart3, label: 'Analytics' },
  { id: 'platforms', icon: Layers, label: 'Platforms' },
  { id: 'trending', icon: TrendingUp, label: 'Trending' },
  { id: 'notifications', icon: Bell, label: 'Notifications' },
  { id: 'settings', icon: Settings2, label: 'Settings' },
  { id: 'help', icon: HelpCircle, label: 'Help' },
];

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <div className="w-16 lg:w-64 bg-gray-900 bg-opacity-40 backdrop-blur-lg border-r border-gray-700 flex flex-col">
      {/* User Profile */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div className="hidden lg:block">
            <p className="text-sm font-medium text-white">Dan Coaching</p>
            <p className="text-xs text-gray-400">Premium User</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`sidebar-item w-full ${
                isActive 
                  ? 'bg-blue-600 bg-opacity-20 text-blue-400 border-r-2 border-blue-400' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="hidden lg:block text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <div className="text-xs text-gray-400 hidden lg:block">
          <p>ChronoFilter v2.1</p>
          <p>© 2024 Base Network</p>
        </div>
      </div>
    </div>
  );
}
