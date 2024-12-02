import React from 'react';
import { Home, Wallet, LineChart, BarChart2, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavItem from './NavItem';

const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { icon: <Home size={24} />, label: 'Home', path: '/' },
    { icon: <Wallet size={24} />, label: 'Wallet', path: '/wallet' },
    { icon: <LineChart size={24} />, label: 'Markets', path: '/markets' },
    { icon: <BarChart2 size={24} />, label: 'Trade', path: '/trade' },
    { icon: <User size={24} />, label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {navItems.map((item) => (
            <NavItem
              key={item.path}
              icon={item.icon}
              label={item.label}
              active={location.pathname === item.path}
              onClick={() => navigate(item.path)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;