import React from 'react';
import { DEFAULT_MARKETS } from '../../../constants/marketData';
import MarketItem from './MarketItem';
import ErrorBoundary from '../../common/ErrorBoundary';

const MarketOverview: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Market Overview</h2>
        <div className="space-y-2">
          {DEFAULT_MARKETS.map((market) => (
            <MarketItem key={market.pair} market={market} />
          ))}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default MarketOverview;