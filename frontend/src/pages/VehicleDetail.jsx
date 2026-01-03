import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Cpu, Radio, Camera, Battery, Ruler, Weight, Calendar, Trophy } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const VehicleDetail = () => {
  const { vehicleName } = useParams();
  const { t } = useTranslation();

  // All vehicle data in one place
  const vehiclesData = {
    'vibe': {
      name: 'VIBE',
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
      ],
      detailedDescription: 'VIBE represents our latest achievement in autonomous UAV technology, designed specifically for the RoboNation SUAS 2025 competition. This platform incorporates cutting-edge avionics, advanced computer vision systems, and robust mechanical design.',
      gallery: [
        '/photos/vehicles/tetikorti.jpg',
        '/photos/vehicles/tetikorti.jpg',
        '/photos/vehicles/tetikorti.jpg'
      ],
      ylink: []
    },
    'dissiz': {
      name: 'DİŞSİZ',
      year: '2024',
      competition: 'Teknofest Combat UAV',
      image: '/photos/vehicles/dissizkucuk.jpg',
      description: 'High-maneuverability platform developed for the Teknofest 2024 Combat UAV category.',
      specs: [
        { icon: <Ruler size={20} />, label: 'Wingspan', value: '2.2 m' },
        { icon: <Weight size={20} />, label: 'Weight', value: '12 kg' },
        { icon: <Battery size={20} />, label: 'Flight Time', value: '25 min' },
        { icon: <Camera size={20} />, label: 'Camera', value: 'HD Camera' },
        { icon: <Radio size={20} />, label: 'Range', value: '15 km' },
        { icon: <Cpu size={20} />, label: 'Processor', value: 'Pixhawk' }
      ],
      features: [
        'High maneuverability for combat scenarios',
        'Reinforced carbon fiber airframe',
        'Advanced flight control systems',
        'Real-time telemetry'
      ],
      detailedDescription: 'DİŞSİZ was engineered for high-speed maneuvers and combat operations. Its robust design and powerful propulsion system make it ideal for competitive UAV combat scenarios.',
      gallery: [
        '/photos/vehicles/dissizkucuk.jpg'
      ],
      ylink: ["https://www.youtube.com/embed/A6gpxHMv9UA"]
    },
    'simsek': {
      name: 'ŞİMŞEK',
      year: '2023',
      competition: 'RoboNation SUAS 2024',
      image: '/photos/vehicles/simseknew.jpg',
      description: 'Autonomous UAV system developed for SUAS 2024.',
      specs: [
        { icon: <Ruler size={20} />, label: 'Wingspan', value: '2.5 m' },
        { icon: <Weight size={20} />, label: 'Weight', value: '13 kg' },
        { icon: <Battery size={20} />, label: 'Flight Time', value: '30 min' },
        { icon: <Camera size={20} />, label: 'Camera', value: '4K Camera' },
        { icon: <Radio size={20} />, label: 'Range', value: '18 km' },
        { icon: <Cpu size={20} />, label: 'Processor', value: 'Jetson Nano' }
      ],
      features: [
        'Autonomous navigation system',
        'Object detection and tracking',
        'Efficient aerodynamic design',
        'Modular payload system'
      ],
      detailedDescription: 'ŞİMŞEK showcases our advancement in autonomous flight technology with sophisticated computer vision and navigation capabilities.',
      gallery: [
        '/photos/vehicles/simseknew.jpg'
      ],
      ylink: ["https://www.youtube.com/embed/hibQ0Qpx12o"]
    },
    'tosun': {
      name: 'TOSUN',
      year: '2022',
      competition: 'AUVSI SUAS 2022',
      image: '/photos/vehicles/tosunson.jpg',
      description: 'High-performance UAV system that achieved 3rd place in the SUAS 2022 competition.',
      specs: [
        { icon: <Ruler size={20} />, label: 'Wingspan', value: '2.6 m' },
        { icon: <Weight size={20} />, label: 'Weight', value: '14 kg' },
        { icon: <Battery size={20} />, label: 'Flight Time', value: '32 min' },
        { icon: <Camera size={20} />, label: 'Camera', value: '4K Gimbal' },
        { icon: <Radio size={20} />, label: 'Range', value: '19 km' },
        { icon: <Cpu size={20} />, label: 'Processor', value: 'Jetson Xavier' }
      ],
      features: [
        'Award-winning design (3rd place)',
        'Advanced autonomous capabilities',
        'Precision landing system',
        'Robust communication system'
      ],
      detailedDescription: 'TOSUN achieved remarkable success at SUAS 2022, securing 3rd place with its reliable performance and advanced autonomous systems.',
      gallery: [
        '/photos/vehicles/tosunson.jpg'
      ],
      ylink: ["https://www.youtube.com/embed/Ktycf5VRdO4?start=451"]
    },
    'kv-55': {
      name: 'KV-55',
      year: '2021',
      competition: 'Teknofest 2021',
      image: '/photos/vehicles/kv55website.png',
      description: 'Compact and agile design that secured 3rd place in Teknofest 2021.',
      specs: [
        { icon: <Ruler size={20} />, label: 'Wingspan', value: '2.0 m' },
        { icon: <Weight size={20} />, label: 'Weight', value: '10 kg' },
        { icon: <Battery size={20} />, label: 'Flight Time', value: '28 min' },
        { icon: <Camera size={20} />, label: 'Camera', value: 'HD Camera' },
        { icon: <Radio size={20} />, label: 'Range', value: '12 km' },
        { icon: <Cpu size={20} />, label: 'Processor', value: 'Pixhawk' }
      ],
      features: [
        'Compact lightweight design',
        'High agility',
        'Efficient power management',
        '3rd place at Teknofest 2021'
      ],
      detailedDescription: 'KV-55 demonstrated exceptional agility and performance, earning 3rd place at Teknofest 2021 with its innovative compact design.',
      gallery: [
        '/photos/vehicles/kv55website.png'
      ]
    },
    'blacksparrow': {
      name: 'BLACKSPARROW',
      year: '2020',
      competition: 'SUAS 2020',
      image: '/photos/vehicles/blacksparrowwebsite.png',
      description: 'Platform featuring an innovative carbon fiber airframe and advanced avionics.',
      specs: [
        { icon: <Ruler size={20} />, label: 'Wingspan', value: '2.4 m' },
        { icon: <Weight size={20} />, label: 'Weight', value: '12 kg' },
        { icon: <Battery size={20} />, label: 'Flight Time', value: '30 min' },
        { icon: <Camera size={20} />, label: 'Camera', value: 'HD Gimbal' },
        { icon: <Radio size={20} />, label: 'Range', value: '16 km' },
        { icon: <Cpu size={20} />, label: 'Processor', value: 'Pixhawk' }
      ],
      features: [
        'Carbon fiber construction',
        'Advanced avionics suite',
        'Stable flight characteristics',
        'Modular design'
      ],
      detailedDescription: 'BLACKSPARROW featured innovative carbon fiber construction and advanced avionics, setting new standards for our team.',
      gallery: [
        '/photos/vehicles/blacksparrowwebsite.png'
      ]
    },
    'goldenhorn': {
      name: 'GOLDENHORN',
      year: '2018',
      competition: 'AUVSI SUAS 2018',
      image: '/photos/vehicles/goldenhornwebsite.png',
      description: 'System distinguished by its high-efficiency wing profile and modular design.',
      specs: [
        { icon: <Ruler size={20} />, label: 'Wingspan', value: '2.3 m' },
        { icon: <Weight size={20} />, label: 'Weight', value: '11 kg' },
        { icon: <Battery size={20} />, label: 'Flight Time', value: '29 min' },
        { icon: <Camera size={20} />, label: 'Camera', value: 'HD Camera' },
        { icon: <Radio size={20} />, label: 'Range', value: '14 km' },
        { icon: <Cpu size={20} />, label: 'Processor', value: 'Pixhawk' }
      ],
      features: [
        'High-efficiency wing profile',
        'Modular payload system',
        'Optimized aerodynamics',
        'Reliable performance'
      ],
      detailedDescription: 'GOLDENHORN showcased our expertise in aerodynamic design with its high-efficiency wing profile and modular architecture.',
      gallery: [
        '/photos/vehicles/goldenhornwebsite.png'
      ]
    },
    'lodos': {
      name: 'LODOS',
      year: '2017',
      competition: 'AUVSI SUAS 2017',
      image: '/photos/vehicles/lodoswebsite.png',
      description: 'Stable and reliable platform that achieved 4th place in SUAS 2017.',
      specs: [
        { icon: <Ruler size={20} />, label: 'Wingspan', value: '2.2 m' },
        { icon: <Weight size={20} />, label: 'Weight', value: '10.5 kg' },
        { icon: <Battery size={20} />, label: 'Flight Time', value: '27 min' },
        { icon: <Camera size={20} />, label: 'Camera', value: 'HD Camera' },
        { icon: <Radio size={20} />, label: 'Range', value: '13 km' },
        { icon: <Cpu size={20} />, label: 'Processor', value: 'Pixhawk' }
      ],
      features: [
        'Exceptional stability',
        'Reliable flight systems',
        '4th place at SUAS 2017',
        'Proven design'
      ],
      detailedDescription: 'LODOS earned 4th place at SUAS 2017 through its exceptional stability and reliable performance in challenging conditions.',
      gallery: [
        '/photos/vehicles/lodoswebsite.png'
      ],
      ylink: ["https://www.youtube.com/embed/fTL40tWat_E"]
    }
  };

  const vehicle = vehiclesData[vehicleName.toLowerCase()];

  // If vehicle not found, redirect to vehicles page
  if (!vehicle) {
    return <Navigate to="/araclar" replace />;
  }

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="relative py-12 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/araclar"
            className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Vehicles
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="text-red-500" size={24} />
                <span className="text-gray-400 text-lg">{vehicle.year}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {vehicle.name}
              </h1>
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="text-red-500" size={24} />
                <p className="text-xl text-red-500 font-semibold">{vehicle.competition}</p>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {vehicle.detailedDescription}
              </p>
            </div>

            <div className="relative">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">{t('vehicles.specs')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicle.specs.map((spec, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-red-600 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-3 text-red-500 mb-3">
                  {spec.icon}
                  <span className="text-gray-400 font-medium">{spec.label}</span>
                </div>
                <p className="text-white text-2xl font-bold">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">{t('vehicles.features')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {vehicle.features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/30 p-6 rounded-lg border border-gray-700 hover:border-red-600 transition-colors"
              >
                <div className="flex items-start space-x-3">
                  <span className="text-red-500 text-2xl mt-1">•</span>
                  <span className="text-gray-300 text-lg">
                    {feature.startsWith('vehicles.') ? t(feature) : feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      {vehicle.ylink && vehicle.ylink.length > 0 && (
        <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Videos</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {vehicle.ylink.filter(video => video && video.trim() !== "").map((video, index) => (
                <div key={index} className="relative rounded-lg overflow-hidden shadow-2xl aspect-video">
                  <iframe 
                    className="w-full h-full"
                    src={video}
                    title={`${vehicle.name} Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Image Gallery */}
      {vehicle.gallery && vehicle.gallery.length > 1 && (
        <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Gallery</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {vehicle.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${vehicle.name} ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default VehicleDetail;