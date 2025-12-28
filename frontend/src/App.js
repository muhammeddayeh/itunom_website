import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GalleryHero from "./components/GalleryHero";
import PhotoGallery from "./components/PhotoGallery";
import VideoGallery from "./components/VideoGallery";

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

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-16 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">İTÜNOM UAV TEAM</h1>
          <p className="text-xl text-gray-400">Galeri sayfasını görmek için menüden GALERİ'ye tıklayın</p>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeri" element={<GalleryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
