import React from 'react';
import { QuickAction } from '../../../types/market';

interface ActionButtonProps {
  action: QuickAction;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ action, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center p-4 rounded-xl w-full ${
      action.highlight
        ? 'bg-blue-600 text-white'
        : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
    } shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1`}
  >
    {action.icon}
    <span className="mt-2 font-medium">{action.label}</span>
    <span className="text-xs mt-1 opacity-80">{action.subtext}</span>
  </button>
);

export default ActionButton;