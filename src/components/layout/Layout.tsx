import React from 'react';
import Navigation from './Navigation';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const showNavigation = location.pathname !== '/auth';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className={showNavigation ? 'pb-20' : ''}>
        {children}
      </main>
      {showNavigation && <Navigation />}
    </div>
  );
};

export default Layout;