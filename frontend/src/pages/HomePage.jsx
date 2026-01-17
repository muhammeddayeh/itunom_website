import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Cog, BookOpen, Calendar, Trophy, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageTitle from '../components/PageTitle';

const HomePage = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Award size={32} />,
      title: t('home.features.achievements.title'),
      description: t('home.features.achievements.description'),
      link: '/basarilar'
    },
    {
      icon: <Cog size={32} />,
      title: t('home.features.vehicles.title'),
      description: t('home.features.vehicles.description'),
      link: '/araclar'
    },
    {
      icon: <BookOpen size={32} />,
      title: t('home.features.blog.title'),
      description: t('home.features.blog.description'),
      link: '/blog'
    }
  ];

  // Vehicle timeline data with translation keys
  const vehicleTimeline = [
    { 
      year: '2025', 
      name: t('home.timeline.vehicles.0.name'), 
      description: t('home.timeline.vehicles.0.description') ,
      medal : ''
    },
    { 
      year: '2024', 
      name: t('home.timeline.vehicles.1.name'), 
      description: t('home.timeline.vehicles.1.description') ,
      medal : ''
    },
    { 
      year: '2023', 
      name: t('home.timeline.vehicles.2.name'), 
      description: t('home.timeline.vehicles.2.description'),
      medal: 'gold'
    },
    { 
      year: '2022', 
      name: t('home.timeline.vehicles.3.name'), 
      description: t('home.timeline.vehicles.3.description') ,
      medal : ''
    },
    { 
      year: '2021', 
      name: t('home.timeline.vehicles.4.name'), 
      description: t('home.timeline.vehicles.4.description') ,
      medal : ''
    },
    { 
      year: '2020', 
      name: t('home.timeline.vehicles.5.name'), 
      description: t('home.timeline.vehicles.5.description'),
      medal: 'gold'
    },
    { 
      year: '2018', 
      name: t('home.timeline.vehicles.6.name'), 
      description: t('home.timeline.vehicles.6.description'),
      medal : ''
    },
    { 
      year: '2017', 
      name: t('home.timeline.vehicles.7.name'), 
      description: t('home.timeline.vehicles.7.description') ,
      medal : ''
    }
  ];


  // Achievements data with translation keys
  const recentAchievements = [
    {
      title: t('home.achievements.recent.0.title'),
      category: t('home.achievements.recent.0.category'),
      date: t('home.achievements.recent.0.date'),
      medal: "bronze",
      link:'araclar/vibe'
    },
    {
      title: t('home.achievements.recent.1.title'),
      category: t('home.achievements.recent.1.category'),
      date: t('home.achievements.recent.1.date'),
      medal: "silver",
      link:'araclar/dissiz'
    },
    {
      title: t('home.achievements.recent.2.title'),
      category: t('home.achievements.recent.2.category'),
      date: t('home.achievements.recent.2.date'),
      medal: "gold",
      link:'araclar/simsek'
    }
    
  ];
    const getMedalColor = (medal) => {
    switch (medal) {
      case 'gold': return 'from-yellow-400 to-yellow-600';
      case 'silver': return 'from-gray-300 to-gray-500';
      case 'bronze': return 'from-orange-400 to-orange-600';
      default: return 'from-gray-600 to-gray-800';
    }
  };

  // Blog posts data with translation keys
  const recentPosts = [
    {
      id: '5',
      title: t('blog.titles.t5'),
      excerpt: t('blog.excerpts.e5'),
      date: '03/2024',
      author: t('blog.authors.a1'),
      category: t('blog.categories.manufacturing'),
      image: '/photos/blog/saustest1.png',
      link: "https://www.instagram.com/p/DKpcrLVq_a5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      
    },,
    {
      id: '2',
      title: t('blog.titles.t2'),
      excerpt: t('blog.excerpts.e2'),
      date: '02/2024',
      author: t('blog.authors.a1'),
      category: t('blog.categories.workshop'),
      image: '/photos/blog/tanitim101.png',
      link:"https://www.instagram.com/p/DRCsuTmDdb1/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="
     
    },
    {
      id: '3',
      title: t('blog.titles.t3'),
      excerpt: t('blog.excerpts.e3'),
      date: '02/2024',
      author: t('blog.authors.a1'),
      category: t('blog.categories.competitions'),
      image: '/photos/blog/teknofest1.png',
      link: "https://www.instagram.com/p/DO6VTwmDRUK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      
    }

  ];

  return (
    <div className="min-h-screen bg-black">
      <PageTitle titleKey="pageTitles.home" />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/photos/hakkimizda.jpg"
            alt="Drone Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            {t('home.hero.subtitle')}
          </p>
          <p className="text-lg text-gray-400 mb-12">
            {t('home.hero.university')}
          </p>
          <Link
            to="/araclar"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-500/50 hover:shadow-red-500/70 hover:scale-105"
          >
            <span>{t('home.hero.cta')}</span>
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            {t('home.about.title')}
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
          
          <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed mb-8">
            {t('home.about.description')}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 hover:border-red-600 transition-colors">
              <img
                src="/photos/vision.jpg"
                alt="About Team"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-white mb-4">{t('home.about.vision.title')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('home.about.vision.text')}
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 hover:border-red-600 transition-colors">
              <img
                src="/photos/mekanik.png"
                alt="Workshop"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-white mb-4">{t('home.about.workspace.title')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('home.about.workspace.text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Timeline Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-red-600/10 border border-red-600/20 rounded-full text-red-500 text-sm font-semibold tracking-wider mb-4">
              {t('home.timeline.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {t('home.timeline.title')}
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-red-600 opacity-30"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {vehicleTimeline.map((vehicle, index) => (
                <div key={index} className={`relative flex items-center  ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}  `}>
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-16'} pl-16 md:pl-0 `}>
                    <div className={`p-6 rounded-2xl bg-gray-900/30 border border-gray-700/20 hover:border-red-600/40 transition-all duration-300 ${index % 2 === 0 ? 'md:ml-auto' : ''} max-w-md`}>
                      <div className={`flex items-center gap-2 mb-2 `}>
                        <span className="text-red-500 font-bold">{vehicle.year}</span>
                        <span className="text-gray-500 text-sm">{vehicle.quarter}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{vehicle.name}</h3>
                      <p className="text-gray-400 text-sm">{vehicle.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-red-600 border-4 border-black z-10"></div>

                  {/* Spacing for alternating layout */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/araclar"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-red-600"
            >
              <span>{t('home.timeline.viewAll')}</span>
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('home.achievements.title')}
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg">{t('home.achievements.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentAchievements.map((achievement, index) => (
              <a href={achievement.link}>
              <div
                key={index}
                className={`relative group bg-gradient-to-br ${getMedalColor(achievement.medal)} p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden`}
              >
                <Trophy className="text-white mb-4 group-hover:scale-110 transition-transform " size={40} />
                <div className="text-sm text-white font-semibold mb-2 ">{achievement.category}</div>
                <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                <div className="text-white text-sm">{achievement.date}</div>
              </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/basarilar"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-red-600"
            >
              <span>{t('home.achievements.viewAll')}</span>
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('home.blog.title')}
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg">{t('home.blog.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <div
                key={index}
                className="bg-gray-800/30 rounded-lg border border-gray-700 hover:border-red-600 transition-all duration-300 hover:scale-105 overflow-hidden group"

              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-400 mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                  <Link
                    to={`${post.link}`}  target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-red-500 hover:text-red-400 transition-colors"
                  >
                    {/* to={`/blog/${post.id}`} */}
                    <span>{t('home.blog.readMore')}</span>
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-red-600"
            >
              <span>{t('home.blog.viewAll')}</span>
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group bg-gray-800/30 p-8 rounded-lg border border-gray-700 hover:border-red-600 transition-all duration-300 hover:scale-105 hover:bg-gray-800/50"
              >
                <div className="text-red-600 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            {t('home.cta.description')}
          </p>
          <Link
            to="/iletisim"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:scale-105"
          >
            <span>{t('home.cta.button')}</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;