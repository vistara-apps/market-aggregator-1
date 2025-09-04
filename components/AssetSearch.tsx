'use client';

import { useState } from 'react';
import { Search, Filter, TrendingUp, TrendingDown, ExternalLink } from 'lucide-react';
import { mockAssets } from '../lib/mockData';
import { Asset } from '../lib/types';

interface AssetSearchProps {
  searchQuery: string;
}

export function AssetSearch({ searchQuery }: AssetSearchProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('marketCap');

  const filters = [
    { id: 'all', label: 'All Assets' },
    { id: 'defi', label: 'DeFi' },
    { id: 'stablecoin', label: 'Stablecoins' },
    { id: 'trending', label: 'Trending' },
  ];

  const filteredAssets = mockAssets.filter(asset => 
    asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    asset.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatNumber = (num: number) => {
    if (num >= 1e9) return `$${(num / 1e9).toFixed(1)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(1)}M`;
    if (num >= 1e3) return `$${(num / 1e3).toFixed(1)}K`;
    return `$${num.toFixed(2)}`;
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Asset Search</h1>
          <p className="text-gray-300">Discover and track assets across all platforms</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
          <Filter className="w-4 h-4" />
          <span>Advanced Filters</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setSelectedFilter(filter.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedFilter === filter.id
                ? 'bg-blue-600 text-white'
                : 'bg-white bg-opacity-10 text-gray-300 hover:bg-opacity-20'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Assets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssets.map((asset) => (
          <div key={asset.id} className="glass-card p-6 hover:bg-opacity-20 transition-all cursor-pointer">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{asset.symbol.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{asset.symbol}</h3>
                  <p className="text-sm text-gray-400">{asset.name}</p>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Price</span>
                <span className="text-lg font-semibold text-white">{formatNumber(asset.price)}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">24h Change</span>
                <div className={`flex items-center space-x-1 ${
                  asset.change24h >= 0 ? 'text-green-400' : 'text-red-400'
                }`}>
                  {asset.change24h >= 0 ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span className="text-sm font-medium">{Math.abs(asset.change24h)}%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Market Cap</span>
                <span className="text-sm text-white">{formatNumber(asset.marketCap)}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Platform</span>
                <span className="text-sm text-blue-400">{asset.platform}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-700">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors">
                Add to Portfolio
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white px-6 py-3 rounded-lg font-medium transition-colors">
          Load More Assets
        </button>
      </div>
    </div>
  );
}
