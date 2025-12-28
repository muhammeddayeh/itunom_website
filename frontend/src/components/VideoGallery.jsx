import React, { useState } from 'react';
import { Play, Clock, Calendar, Tag } from 'lucide-react';
import { galleryData, categories } from '../mock/galleryData';

const VideoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const filteredVideos = selectedCategory === 'Tümü'
    ? galleryData.videos
    : galleryData.videos.filter(video => video.category === selectedCategory);

  const handleVideoClick = (videoUrl) => {
    window.open(videoUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.videos.map((category) => (
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

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => handleVideoClick(video.videoUrl)}
              className="group relative overflow-hidden rounded-lg cursor-pointer bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play size={28} className="text-white ml-1" fill="white" />
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 rounded-md flex items-center space-x-1 text-white text-sm">
                  <Clock size={14} />
                  <span>{video.duration}</span>
                </div>
              </div>
              
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-red-500 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {video.description}
                </p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{video.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Tag size={14} />
                    <span>{video.category}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
