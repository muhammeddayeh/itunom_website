import React from 'react';
import { Image, Video } from 'lucide-react';

const GalleryHero = ({ onTabChange, activeTab }) => {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1600&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          GALERİ
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Ekibimizin fotoğraf ve videolarına aşağıdaki düğmeler üzerinden ulaşabilirsiniz.
          Ekibimize ait medya ve galeri arşivini{' '}
          <a href="mailto:iha@itu.edu.tr" className="text-red-500 hover:text-red-400 transition-colors">
            iha@itu.edu.tr
          </a>{' '}
          adresine e-posta göndererek talep edebilirsiniz.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={() => onTabChange('photos')}
            className={`group w-64 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 ${
              activeTab === 'photos'
                ? 'bg-red-600 text-white shadow-lg shadow-red-500/50 scale-105'
                : 'bg-white/10 text-white border-2 border-white/20 hover:bg-white/20 hover:border-white/40'
            }`}
          >
            <Image size={24} className="group-hover:scale-110 transition-transform" />
            <span>Fotoğraflar</span>
          </button>

          <button
            onClick={() => onTabChange('videos')}
            className={`group w-64 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 ${
              activeTab === 'videos'
                ? 'bg-red-600 text-white shadow-lg shadow-red-500/50 scale-105'
                : 'bg-white/10 text-white border-2 border-white/20 hover:bg-white/20 hover:border-white/40'
            }`}
          >
            <Video size={24} className="group-hover:scale-110 transition-transform" />
            <span>Videolar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryHero;
