import React from 'react';
import { QUICK_ACTIONS } from '../../constants/marketData';
import { QuickAction } from '../../types/market';

const ActionButton: React.FC<{ action: QuickAction }> = ({ action }) => (
  <button
    className={`flex flex-col items-center justify-center p-4 rounded-xl ${
      action.highlight
        ? 'bg-blue-600 text-white'
        : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
    } shadow-sm hover:shadow-md transition-shadow`}
  >
    {action.icon}
    <span className="mt-2 font-medium">{action.label}</span>
    <span className="text-xs mt-1 opacity-80">{action.subtext}</span>
  </button>
);

const QuickActions: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {QUICK_ACTIONS.map((action) => (
        <ActionButton key={action.label} action={action} />
      ))}
    </div>
  );
};

export default QuickActions;