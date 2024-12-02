import React from 'react';
import { NavItemProps } from '../../types/navigation';

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false, onClick }) => (
  <button 
    className={`flex flex-col items-center space-y-1 ${
      active ? 'text-blue-600' : 'text-gray-600 dark:text-gray-400'
    }`}
    onClick={onClick}
  >
    {icon}
    <span className="text-xs">{label}</span>
  </button>
);

export default NavItem;