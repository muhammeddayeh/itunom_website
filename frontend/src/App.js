import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GalleryHero from "./components/GalleryHero";
import PhotoGallery from "./components/PhotoGallery";
import VideoGallery from "./components/VideoGallery";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import AchievementsPage from "./pages/AchievementsPage";
import VehiclesPage from "./pages/VehiclesPage";
import BlogPage from "./pages/BlogPage";
import SponsorsPage from "./pages/SponsorsPage";
import ContactPage from "./pages/ContactPage";

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('photos');

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-16">
        <GalleryHero onTabChange={setActiveTab} activeTab={activeTab} />
        {activeTab === 'photos' ? <PhotoGallery /> : <VideoGallery />}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/galeri" element={<GalleryPage />} />
          <Route path="/araclar" element={<VehiclesPage />} />
          <Route path="/takim" element={<TeamPage />} />
          <Route path="/basarilar" element={<AchievementsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/sponsorlar" element={<SponsorsPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
