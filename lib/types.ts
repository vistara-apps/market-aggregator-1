export interface Asset {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  volume: number;
  marketCap: number;
  platform: string;
  logo?: string;
}

export interface Portfolio {
  totalValue: number;
  assets: PortfolioAsset[];
  change24h: number;
  platforms: string[];
}

export interface PortfolioAsset {
  asset: Asset;
  balance: number;
  value: number;
  allocation: number;
}

export interface ChartData {
  name: string;
  value: number;
  change?: number;
}

export interface UserSettings {
  theme: 'dark' | 'light';
  notifications: boolean;
  autoRefresh: boolean;
  currency: 'USD' | 'ETH' | 'BTC';
}

export interface Platform {
  id: string;
  name: string;
  logo: string;
  connected: boolean;
  assets: number;
  value: number;
}
