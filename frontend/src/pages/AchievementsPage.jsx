import React from 'react';
import { Trophy, Calendar, MapPin, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AchievementsPage = () => {
  const { t } = useTranslation();
  // TODO: Update this section with your real achievements
  const suasAchievements = [
    { year: '2025', place: '11th Place', location: 'Maryland, USA', link: '/araclar/vibe'},
    { year: '2024', place: '2nd Place', location: 'Maryland, USA', medal: 'silver', link: '/araclar/dissiz' },
    { year: '2023', place: 'Champion', location: 'Maryland, USA', medal: 'gold', link: '/araclar/simsek' },
    { year: '2022', place: '3rd Place', location: 'Maryland, USA', medal: 'bronze', link: '/araclar/tosun' },
    { year: '2019', place: '8th Place', location: 'Maryland, USA', link: '' },
    { year: '2018', place: '7th Place', location: 'Maryland, USA', link: '/araclar/goldenhorn' },
    { year: '2017', place: '4th Place', location: 'Maryland, USA', link: '/araclar/lodos' },
    { year: '2016', place: '12th Place', location: 'Maryland, USA', link: '' }
  ];

  const teknofestAchievements = [
    { year: '2025', place: '3rd Place', location: 'Türkiye', medal: 'bronze', link: '/araclar/vibe' },
    { year: '2024', place: '3rd Place', location: 'Türkiye', medal: 'bronze', link: '/araclar/dissiz' },
    { year: '2023', place: '2nd Place', location: 'Türkiye', medal: 'silver', link: '/araclar/simsek' },
    { year: '2021', place: '3rd Place', location: 'Türkiye', medal: 'bronze', link: '/araclar/kv-55' },
    { year: '2019', place: 'Champion', location: 'Türkiye', medal: 'gold', link: '/araclar/blacksparrow' }
  ];

  const getMedalColor = (medal) => {
    switch (medal) {
      case 'gold': return 'from-yellow-400 to-yellow-600';
      case 'silver': return 'from-gray-300 to-gray-500';
      case 'bronze': return 'from-orange-400 to-orange-600';
      default: return 'from-gray-600 to-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block p-4 bg-red-600/20 rounded-full mb-6">
            <Trophy size={32} className="text-red-500" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t('achievements.title')}
          </h1>
          <div className="w-48 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-30xl mx-auto">
            {t('achievements.description')}
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            {t('achievements.highlights')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/10 p-8 rounded-lg border-2 border-yellow-600/50 hover:border-yellow-500 transition-colors">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-yellow-600 rounded-full">
                  <Trophy size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{t('achievements.highlight1.title')}</h3>
                  <p className="text-yellow-400 font-semibold">{t('achievements.highlight1.subtitle')}</p>
                </div>
              </div>
              <p className="text-gray-300">
                {t('achievements.highlight1.description')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-900/30 to-red-800/10 p-8 rounded-lg border-2 border-red-600/50 hover:border-red-500 transition-colors">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-red-600 rounded-full">
                  <Trophy size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{t('achievements.highlight2.title')}</h3>
                  <p className="text-red-400 font-semibold">{t('achievements.highlight2.subtitle')}</p>
                </div>
              </div>
              <p className="text-gray-300">
                {t('achievements.highlight2.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SUAS Competition Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            {t('achievements.suas')}
          </h2>
          <p className="text-center text-gray-400 mb-4">
            {t('achievements.suasDesc')}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {suasAchievements.map((achievement, index) => (
              <a href={achievement.link}>
              <div
                key={index}
                className={`relative group bg-gradient-to-br ${getMedalColor(achievement.medal)} p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden`}
              >
                {achievement.medal && (
                  <div className="absolute top-0 right-0 p-2">
                    <Award size={32} className="text-white/80" />
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-2 text-white/90 mb-2">
                    <Calendar size={18} />
                    <span className="font-semibold">{achievement.year}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {achievement.place}
                  </h3>
                  
                  <div className="flex items-center space-x-2 text-white/80">
                    <MapPin size={16} />
                    <span className="text-sm">{achievement.location}</span>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
              </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Teknofest Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            {t('achievements.teknofest')}
          </h2>
          <p className="text-center text-gray-400 mb-4">
            {t('achievements.teknofestDesc')}
          </p>
          
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {teknofestAchievements.map((achievement, index) => (
              <a href={achievement.link}>
              <div
                key={index}
                className={`relative group bg-gradient-to-br ${getMedalColor(achievement.medal)} p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden`}
              >
                {achievement.medal && (
                  <div className="absolute top-0 right-0 p-2">
                    <Award size={28} className="text-white/80" />
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-2 text-white/90 mb-2">
                    <Calendar size={16} />
                    <span className="font-semibold text-sm">{achievement.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {achievement.place}
                  </h3>
                  
                  <div className="flex items-center space-x-2 text-white/80">
                    <MapPin size={14} />
                    <span className="text-xs">{achievement.location}</span>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
              </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default AchievementsPage;