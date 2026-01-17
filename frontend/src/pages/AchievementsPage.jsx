import React from 'react';
import { Trophy, Calendar, MapPin, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageTitle from '../components/PageTitle';


const AchievementsPage = () => {
  const { t } = useTranslation();
  // TODO: Update this section with your real achievements
  const suasAchievements = [
    { year: '2025', place: '11th Place', location: 'Maryland, USA', link: '/araclar/vibe', photo: '/photos/vehicles/tetikorti.jpg'},
    { year: '2024', place: '2nd Place', location: 'Maryland, USA', medal: 'silver', link: '/araclar/dissiz', photo: '/photos/vehicles/dissizkucuk.jpg'},
    { year: '2023', place: 'Champion', location: 'Maryland, USA', medal: 'gold', link: '/araclar/simsek', photo: '/photos/vehicles/simseknew.jpg' },
    { year: '2022', place: '3rd Place', location: 'Maryland, USA', medal: 'bronze', link: '/araclar/tosun' , photo: '/photos/vehicles/tosunson.jpg'},
    { year: '2018', place: '7th Place', location: 'Maryland, USA', link: '/araclar/goldenhorn' , photo: '/photos/vehicles/goldenhornwebsite.png'},
    { year: '2017', place: '4th Place', location: 'Maryland, USA', link: '/araclar/lodos' , photo: '/photos/vehicles/lodoswebsite.png'}
  ];

  const teknofestAchievements = [
    { year: '2025', place: '3rd Place', location: 'Türkiye', medal: 'bronze', link: '/araclar/vibe', photo: '/photos/vehicles/tetikorti.jpg' },
    { year: '2024', place: '3rd Place', location: 'Türkiye', medal: 'bronze', link: '/araclar/dissiz', photo: '/photos/vehicles/dissizkucuk.jpg' },
    { year: '2023', place: '2nd Place', location: 'Türkiye', medal: 'silver', link: '/araclar/simsek', photo: '/photos/vehicles/simseknew.jpg' },
    { year: '2021', place: '3rd Place', location: 'Türkiye', medal: 'bronze', link: '/araclar/kv-55', photo: '/photos/vehicles/kv55website.png' },
    { year: '2019', place: 'Champion', location: 'Türkiye', medal: 'gold', link: '/araclar/blacksparrow', photo: '/photos/vehicles/blacksparrowwebsite.png' }
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
            <PageTitle titleKey="pageTitles.achievements" />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block p-4 bg-red-600/20 rounded-full mb-6">
            <Trophy size={32} className="text-red-500" />
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suasAchievements.map((achievement, index) => (
              <a href={achievement.link} key={index}>
                <div
                  className={`relative group bg-gradient-to-br ${getMedalColor(achievement.medal)} rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden h-80`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={achievement.photo} 
                      alt={`${achievement.place} - ${achievement.year}`}
                      className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  </div>

                  {/* Medal Icon */}
                  {achievement.medal && (
                    <div className="absolute top-4 right-4 z-20">
                      <Award size={32} className="text-white/90 drop-shadow-lg" />
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <div className="flex items-center space-x-2 text-white/90 mb-2">
                      <Calendar size={18} />
                      <span className="font-semibold">{achievement.year}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {achievement.place}
                    </h3>
                    
                    <div className="flex items-center space-x-2 text-white/90">
                      <MapPin size={16} />
                      <span className="text-sm">{achievement.location}</span>
                    </div>
                  </div>
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto center">
            {teknofestAchievements.map((achievement, index) => (
              <a href={achievement.link} key={index}>
                <div
                  className={`relative group bg-gradient-to-br ${getMedalColor(achievement.medal)} rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden h-64`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={achievement.photo} 
                      alt={`${achievement.place} - ${achievement.year}`}
                      className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  </div>

                  {/* Medal Icon */}
                  {achievement.medal && (
                    <div className="absolute top-3 right-3 z-20">
                      <Award size={28} className="text-white/90 drop-shadow-lg" />
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <div className="flex items-center space-x-2 text-white/90 mb-2">
                      <Calendar size={16} />
                      <span className="font-semibold text-sm">{achievement.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">
                      {achievement.place}
                    </h3>
                    
                    <div className="flex items-center space-x-2 text-white/90">
                      <MapPin size={14} />
                      <span className="text-xs">{achievement.location}</span>
                    </div>
                  </div>
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