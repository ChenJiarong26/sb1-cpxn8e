import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Wallet from '../pages/Wallet';
import Markets from '../pages/Markets';
import Trade from '../pages/Trade';
import Profile from '../pages/Profile';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/markets" element={<Markets />} />
      <Route path="/trade" element={<Trade />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;