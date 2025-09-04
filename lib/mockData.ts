import { Asset, Portfolio, ChartData, Platform } from './types';

export const mockAssets: Asset[] = [
  {
    id: '1',
    symbol: 'ETH',
    name: 'Ethereum',
    price: 2456.78,
    change24h: 5.2,
    volume: 15600000000,
    marketCap: 295000000000,
    platform: 'Uniswap'
  },
  {
    id: '2',
    symbol: 'USDC',
    name: 'USD Coin',
    price: 1.00,
    change24h: 0.1,
    volume: 8900000000,
    marketCap: 32000000000,
    platform: 'Base'
  },
  {
    id: '3',
    symbol: 'WBTC',
    name: 'Wrapped Bitcoin',
    price: 67890.45,
    change24h: -2.1,
    volume: 1200000000,
    marketCap: 10500000000,
    platform: 'Compound'
  },
  {
    id: '4',
    symbol: 'UNI',
    name: 'Uniswap',
    price: 8.92,
    change24h: 12.5,
    volume: 450000000,
    marketCap: 5400000000,
    platform: 'Uniswap'
  },
  {
    id: '5',
    symbol: 'AAVE',
    name: 'Aave',
    price: 156.34,
    change24h: -1.8,
    volume: 280000000,
    marketCap: 2300000000,
    platform: 'Aave'
  }
];

export const mockPortfolio: Portfolio = {
  totalValue: 19608.45,
  change24h: 3.2,
  platforms: ['Uniswap', 'Base', 'Compound', 'Aave'],
  assets: [
    {
      asset: mockAssets[0],
      balance: 2.5,
      value: 6142.00,
      allocation: 31.3
    },
    {
      asset: mockAssets[1],
      balance: 5000,
      value: 5000.00,
      allocation: 25.5
    },
    {
      asset: mockAssets[2],
      balance: 0.12,
      value: 8146.85,
      allocation: 41.5
    },
    {
      asset: mockAssets[3],
      balance: 35,
      value: 312.20,
      allocation: 1.6
    }
  ]
};

export const mockChartData: ChartData[] = [
  { name: 'Jan', value: 15200 },
  { name: 'Feb', value: 16800 },
  { name: 'Mar', value: 14500 },
  { name: 'Apr', value: 18200 },
  { name: 'May', value: 17600 },
  { name: 'Jun', value: 19100 },
  { name: 'Jul', value: 20400 },
  { name: 'Aug', value: 18900 },
  { name: 'Sep', value: 21200 },
  { name: 'Oct', value: 19800 },
  { name: 'Nov', value: 22100 },
  { name: 'Dec', value: 19608 }
];

export const mockPlatforms: Platform[] = [
  {
    id: '1',
    name: 'Uniswap',
    logo: '🦄',
    connected: true,
    assets: 12,
    value: 8456.78
  },
  {
    id: '2',
    name: 'Base',
    logo: '🔵',
    connected: true,
    assets: 8,
    value: 5234.12
  },
  {
    id: '3',
    name: 'Compound',
    logo: '🏛️',
    connected: true,
    assets: 5,
    value: 3891.45
  },
  {
    id: '4',
    name: 'Aave',
    logo: '👻',
    connected: false,
    assets: 0,
    value: 0
  }
];
