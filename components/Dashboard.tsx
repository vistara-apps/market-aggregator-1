'use client';

import { TrendingUp, TrendingDown, BarChart3, DollarSign } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { mockPortfolio, mockChartData, mockPlatforms } from '../lib/mockData';

export function Dashboard() {
  const portfolio = mockPortfolio;
  const chartData = mockChartData;
  const platforms = mockPlatforms;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">ChronoFilter</h1>
          <p className="text-gray-300">Coordinate Assets on Universe</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-green-400">
            <span className="text-sm">Status</span>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">32.7%</p>
            <p className="text-sm text-green-400">6,679 ↗</p>
          </div>
        </div>
      </div>

      {/* Main Chart */}
      <div className="chart-container">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Portfolio Performance</h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-300">Total Value</span>
            </div>
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#3B82F6" 
                strokeWidth={2}
                dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Experience</p>
              <p className="text-2xl font-bold text-white">$14.4</p>
              <p className="text-xs text-gray-500">of platform</p>
            </div>
            <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-blue-400" />
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Status</p>
              <p className="text-2xl font-bold text-white">11,906</p>
            </div>
            <div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-400" />
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Accounts</p>
              <p className="text-2xl font-bold text-white">$365,695</p>
            </div>
            <div className="w-12 h-12 bg-purple-500 bg-opacity-20 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-purple-400" />
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Activity</p>
              <p className="text-2xl font-bold text-white">$11,404</p>
            </div>
            <div className="w-12 h-12 bg-orange-500 bg-opacity-20 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-orange-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Content Filterers */}
        <div className="chart-container">
          <h3 className="text-lg font-semibold text-white mb-4">Content Filterers</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-white">$19,608</span>
              <span className="text-sm text-gray-400">FEATURE DISK</span>
            </div>
            
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData.slice(-7)}>
                  <Bar dataKey="value" fill="#3B82F6" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">EMC</span>
              <span className="text-gray-400">S.org</span>
            </div>
          </div>
        </div>

        {/* User Settings */}
        <div className="chart-container">
          <h3 className="text-lg font-semibold text-white mb-4">User Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Game Recycling</span>
              <div className="w-10 h-6 bg-blue-600 rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            
            <div className="space-y-3">
              {platforms.slice(0, 3).map((platform) => (
                <div key={platform.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{platform.logo}</span>
                    <span className="text-sm text-gray-300">{platform.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-white">${platform.value.toLocaleString()}</span>
                    <div className={`w-10 h-6 rounded-full relative ${platform.connected ? 'bg-blue-600' : 'bg-gray-600'}`}>
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${platform.connected ? 'right-1' : 'left-1'}`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
