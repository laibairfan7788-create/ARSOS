import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import OurSectors from '../pages/OurSectors';
import SectorDetail from '../pages/SectorDetail';
import WhyChooseUsPage from '../pages/WhyChooseUsPage';
import MissionVisionPage from '../pages/MissionVisionPage';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sectors" element={<OurSectors />} />
        <Route path="/sectors/:slug" element={<SectorDetail />} />
        <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
        <Route path="/mission-vision" element={<MissionVisionPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;