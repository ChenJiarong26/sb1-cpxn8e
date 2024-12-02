import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { SearchBarProps } from '../../types/market';

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch,
  placeholder = "Search coins, markets, or features..."
}) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onSearch?.(newValue);
  };

  return (
    <div className="relative mx-4 mt-4">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Search 
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
        size={20} 
      />
    </div>
  );
};

export default SearchBar;