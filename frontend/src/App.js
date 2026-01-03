import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
import JoinUsPage from "./pages/JoinUsPage";
import VehicleDetail from "./pages/VehicleDetail";

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('photos');

  return (
    <div className="min-h-screen bg-black">
      <div className="pt-16">
        <GalleryHero onTabChange={setActiveTab} activeTab={activeTab} />
        {activeTab === 'photos' ? <PhotoGallery /> : <VideoGallery />}
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<><HomePage /><Footer /></>} />
          <Route path="/galeri" element={<GalleryPage />} />
          <Route path="/araclar" element={<><VehiclesPage /><Footer /></>} />
          <Route path="/araclar/:vehicleName" element={<><VehicleDetail /><Footer /></>} />
          <Route path="/takim" element={<><TeamPage /><Footer /></>} />
          <Route path="/basarilar" element={<><AchievementsPage /><Footer /></>} />
          <Route path="/blog" element={<><BlogPage /><Footer /></>} />
          <Route path="/sponsorlar" element={<><SponsorsPage /><Footer /></>} />
          <Route path="/iletisim" element={<><ContactPage /><Footer /></>} />
          <Route path="/join-us" element={<><JoinUsPage /><Footer /></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;