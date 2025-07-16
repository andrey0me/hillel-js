import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import HotelsPage from './pages/HotelsPage';

const App = () => (
  <div className="container">
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/hotels" element={<HotelsPage />} />
    </Routes>
  </div>
);

export default App;
