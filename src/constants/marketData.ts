import { Market, QuickAction } from '../types/market';
import { Wallet, TrendingUp, Coins, Users } from 'lucide-react';

export const DEFAULT_MARKETS: Market[] = [
  { pair: 'BTC/USDT', price: '64,532.21', change: '+2.45%', trending: true },
  { pair: 'ETH/USDT', price: '3,421.15', change: '-0.82%', trending: false },
  { pair: 'SOL/USDT', price: '142.73', change: '+5.21%', trending: true },
];

export const QUICK_ACTIONS: QuickAction[] = [
  { icon: <Wallet className="h-6 w-6" />, label: 'Deposit', subtext: '0% Fee', highlight: true },
  { icon: <TrendingUp className="h-6 w-6" />, label: 'Trade', subtext: 'Spot & Futures' },
  { icon: <Coins className="h-6 w-6" />, label: 'Earn', subtext: 'Up to 12% APY' },
  { icon: <Users className="h-6 w-6" />, label: 'Copy Trade', subtext: 'Follow Pros' },
];