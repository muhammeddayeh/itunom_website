import React from 'react';
import { ArrowRight, Cpu, Radio, Camera, Battery, Ruler, Weight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const VehiclesPage = () => {
  const { t } = useTranslation();
  // TODO: Update this section with your real vehicles' information
  const currentVehicle = {
    name: 'VIBE',
    slug: 'vibe',
    year: '2025',
    competition: 'RoboNation SUAS 2025',
    description: t('vehicles.description'),
    image: '/photos/vehicles/tetikorti.jpg',
    specs: [
      { icon: <Ruler size={20} />, label: 'Wingspan', value: '2.8 m' },
      { icon: <Weight size={20} />, label: 'Weight', value: '15 kg' },
      { icon: <Battery size={20} />, label: 'Flight Time', value: '34 min' },
      { icon: <Camera size={20} />, label: 'Camera', value: '4K Gimbal' },
      { icon: <Radio size={20} />, label: 'Range', value: '20 km' },
      { icon: <Cpu size={20} />, label: 'Processor', value: 'Jetson Orin Nano' }
    ],
    features: [
      'vehicles.featuresItems.f1',
      'vehicles.featuresItems.f2',
      'vehicles.featuresItems.f3',
      'vehicles.featuresItems.f4',
      'vehicles.featuresItems.f5',
      'vehicles.featuresItems.f6'
    ]
  };

  const pastVehicles = [
    {
      name: 'DİŞSİZ',
      slug: 'dissiz',
      year: '2024',
      competition: 'Teknofest Combat UAV',
      image: '/photos/vehicles/dissizkucuk.jpg',
      description: 'High-maneuverability platform developed for the Teknofest 2024 Combat UAV category.'
    },
    {
      name: 'ŞİMŞEK',
      slug: 'simsek',
      year: '2023',
      competition: 'RoboNation SUAS 2024',
      image: '/photos/vehicles/simseknew.jpg',
      description: 'Autonomous UAV system developed for SUAS 2024.'
    },
    {
      name: 'TOSUN',
      slug: 'tosun',
      year: '2022',
      competition: 'AUVSI SUAS 2022',
      image: '/photos/vehicles/tosunson.jpg',
      description: 'High-performance UAV system that achieved 3rd place in the SUAS 2022 competition.'
    },
    {
      name: 'KV-55',
      slug: 'kv-55',
      year: '2021',
      competition: 'Teknofest 2021',
      image: '/photos/vehicles/kv55website.png  ',
      description: 'Compact and agile design that secured 3rd place in Teknofest 2021.'
    },
    {
      name: 'BLACKSPARROW',
      slug: 'blacksparrow',
      year: '2020',
      competition: 'SUAS 2020',
      image: '/photos/vehicles/blacksparrowwebsite.png',
      description: 'Platform featuring an innovative carbon fiber airframe and advanced avionics.'
    },
    {
      name: 'GOLDENHORN',
      slug: 'goldenhorn',
      year: '2018',
      competition: 'AUVSI SUAS 2018',
      image: '/photos/vehicles/goldenhornwebsite.png',
      description: 'System distinguished by its high-efficiency wing profile and modular design.'
    },
    {
      name: 'LODOS',
      slug: 'lodos',
      year: '2017',
      competition: 'AUVSI SUAS 2017',
      image: '/photos/vehicles/lodoswebsite.png',
      description: 'Stable and reliable platform that achieved 4th place in SUAS 2017.'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t('vehicles.title')}
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('vehicles.description')}
          </p>
        </div>
      </section>

      {/* Current Vehicle Detailed Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              {t('vehicles.current')}: {currentVehicle.name}
            </h2>
            <p className="text-red-500 text-lg">{currentVehicle.competition}</p>
            <p className="text-gray-400 mt-2">
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <img
                src={currentVehicle.image}
                alt={currentVehicle.name}
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                {currentVehicle.description}
              </p>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">{t('vehicles.specs')}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {currentVehicle.specs.map((spec, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-red-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2 text-red-500 mb-2">
                        {spec.icon}
                        <span className="text-sm text-gray-400">{spec.label}</span>
                      </div>
                      <p className="text-white font-semibold">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">{t('vehicles.features')}</h3>
                <ul className="space-y-2">
                  {currentVehicle.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2 text-gray-300">
                      <span className="text-red-500 mt-1">•</span>
                      <span>{t(feature)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to={`/araclar/${currentVehicle.slug}`}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-500/50"
            >
              <span>{t('vehicles.viewProcess')}</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Past Vehicles Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            {t('vehicles.past')}
          </h2>
      
                
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastVehicles.map((vehicle, index) => (
              <Link 
                    to={`/araclar/${vehicle.slug}`}
                    
                  >
              <div
                key={index}
                className="group bg-gray-800/30 rounded-lg overflow-hidden border border-gray-700 hover:border-red-600 transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{vehicle.name}</h3>
                    <p className="text-red-500 font-semibold text-sm">{vehicle.year}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-400 text-sm mb-3">{vehicle.competition}</p>
                  <p className="text-gray-300 text-sm">{vehicle.description}</p>
                  <span className="mt-4 inline-flex items-center text-red-500 hover:text-red-400 transition-colors font-semibold text-sm">
                    {t('vehicles.viewProcess')} <ArrowRight size={16} className="ml-2" />
                  </span>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            {t('vehicles.philosophy')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-block p-4 bg-red-600/20 rounded-full mb-4">
                <Cpu size={48} className="text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t('vehicles.philosophyItems.autonomous.title')}</h3>
              <p className="text-gray-300">
                {t('vehicles.philosophyItems.autonomous.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block p-4 bg-red-600/20 rounded-full mb-4">
                <Camera size={48} className="text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t('vehicles.philosophyItems.vision.title')}</h3>
              <p className="text-gray-300">
                {t('vehicles.philosophyItems.vision.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block p-4 bg-red-600/20 rounded-full mb-4">
                <Radio size={48} className="text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t('vehicles.philosophyItems.reliability.title')}</h3>
              <p className="text-gray-300">
                {t('vehicles.philosophyItems.reliability.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VehiclesPage;