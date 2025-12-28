import React, { useState } from 'react';
import { X, Calendar, Tag } from 'lucide-react';
import { galleryData, categories } from '../mock/galleryData';

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredPhotos = selectedCategory === 'Tümü'
    ? galleryData.photos
    : galleryData.photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.photos.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-red-600 text-white shadow-lg shadow-red-500/50'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative overflow-hidden rounded-lg cursor-pointer bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-w-16 aspect-h-10 relative overflow-hidden">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{photo.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-300">
                  <span className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{photo.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Tag size={14} />
                    <span>{photo.category}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm">
          <div className="relative max-w-5xl w-full bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {selectedPhoto.title}
                </h2>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedPhoto.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar size={18} />
                    <span>{selectedPhoto.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Tag size={18} />
                    <span>{selectedPhoto.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
