import React from 'react';
import SearchBar from '../components/common/SearchBar';
import QuickActions from '../components/home/QuickActions';
import MarketOverview from '../components/home/MarketOverview';

const Home: React.FC = () => {
  const handleSearch = (value: string) => {
    console.log('Search:', value);
  };

  return (
    <>
      <header className="bg-white dark:bg-gray-800 py-4">
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">ZapQuick AI</h1>
      </header>
      
      <SearchBar onSearch={handleSearch} />
      
      <section className="mt-6">
        <QuickActions />
      </section>
      
      <section className="mt-6 mx-4">
        <MarketOverview />
      </section>
    </>
  );
};

export default Home;