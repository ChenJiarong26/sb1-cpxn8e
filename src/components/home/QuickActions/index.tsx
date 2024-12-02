import React from 'react';
import { QUICK_ACTIONS } from '../../../constants/marketData';
import ActionButton from './ActionButton';
import ErrorBoundary from '../../common/ErrorBoundary';

const QuickActions: React.FC = () => {
  const handleActionClick = (label: string) => {
    console.log(`Action clicked: ${label}`);
  };

  return (
    <ErrorBoundary>
      <div className="grid grid-cols-2 gap-4 p-4">
        {QUICK_ACTIONS.map((action) => (
          <ActionButton
            key={action.label}
            action={action}
            onClick={() => handleActionClick(action.label)}
          />
        ))}
      </div>
    </ErrorBoundary>
  );
};

export default QuickActions;