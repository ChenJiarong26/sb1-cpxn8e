import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Market } from '../../../types/market';

interface MarketItemProps {
  market: Market;
}

const MarketItem: React.FC<MarketItemProps> = ({ market }) => (
  <div className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
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

export default MarketItem;