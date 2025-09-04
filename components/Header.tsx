'use client';

import { Search, Plus, Bell, Settings2 } from 'lucide-react';
import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name } from '@coinbase/onchainkit/identity';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Header({ searchQuery, onSearchChange }: HeaderProps) {
  return (
    <header className="h-16 bg-white bg-opacity-10 backdrop-blur-lg border-b border-white border-opacity-20 flex items-center justify-between px-6">
      {/* Search Bar */}
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="ChronoFilter For..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Plus className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
          </button>
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center space-x-4 ml-6">
        <button className="p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors">
          <Bell className="w-5 h-5 text-gray-300 hover:text-white" />
        </button>
        
        <button className="p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors">
          <Settings2 className="w-5 h-5 text-gray-300 hover:text-white" />
        </button>

        {/* Wallet Connection */}
        <Wallet>
          <ConnectWallet className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            <Name className="text-white" />
          </ConnectWallet>
        </Wallet>
      </div>
    </header>
  );
}
