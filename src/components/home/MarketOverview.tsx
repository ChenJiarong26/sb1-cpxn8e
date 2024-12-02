import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { DEFAULT_MARKETS } from '../../constants/marketData';
import { Market } from '../../types/market';

const MarketItem: React.FC<{ market: Market }> = ({ market }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-3">
      <span className="text-sm font-medium">{market.pair}</span>
    </div>
    <div className="flex items-center space-x-4">
      <span className="text-sm">${market.price}</span>
      <span className={`flex items-center text-sm ${market.trending ? 'text-green-500' : 'text-red-500'}`}>
        {market.trending ? <TrendingUp size={16} className="mr-1" /> : <TrendingDown size={16} className="mr-1" />}
        {market.change}
      </span>
    </div>
  </div>
);

const MarketOverview: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Market Overview</h2>
      <div className="space-y-4">
        {DEFAULT_MARKETS.map((market) => (
          <MarketItem key={market.pair} market={market} />
        ))}
      </div>
    </div>
  );
};

export default MarketOverview;