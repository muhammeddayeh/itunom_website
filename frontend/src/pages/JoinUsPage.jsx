import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Rocket, Brain, Code, Wrench, Send } from 'lucide-react';

const JoinUsPage = () => {
  const { t } = useTranslation();

  const departments = [
    {
      icon: <Code size={32} className="text-red-500" />,
      title: t('joinUs.departments.software.title'),
      description: t('joinUs.departments.software.desc'),
      link: "https://docs.google.com/forms/d/e/1FAIpQLSf8Cp-ew7qwDo8GqG-4xF9qieEDGor8yOYrWfXCgiF3CPRA8Q/viewform?embedded=true"
    },
    {
      icon: <Wrench size={32} className="text-red-500" />,
      title: t('joinUs.departments.mechanical.title'),
      description: t('joinUs.departments.mechanical.desc'),
      link: "https://docs.google.com/forms/d/e/1FAIpQLSepVbk-hHlpLR581LpLo-EmAieIJstj3LUGLJ6Jor5qgg2rkQ/viewform?embedded=true"

    },
    {
      icon: <Brain size={32} className="text-red-500" />,
      title: t('joinUs.departments.promotion.title'),
      description: t('joinUs.departments.promotion.desc'),
      link: "https://docs.google.com/forms/d/e/1FAIpQLSd9FRLS6N9U3EL1V0d6ACeGQeHe-Mwi5NPjV3qQu2Gv4XAeLQ/viewform?embedded=true"
    },
    {
      icon: <Rocket size={32} className="text-red-500" />,
      title: t('joinUs.departments.avionics.title'),
      description: t('joinUs.departments.avionics.desc'),
      link: "https://docs.google.com/forms/d/e/1FAIpQLScP5tA1wUL4vQRtxvDfKhMu3mpHyaUCRfcz8T-KgBoO9cxBsA/viewform?embedded=true"
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t('joinUs.title')}
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('joinUs.subtitle')}
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            {t('joinUs.departmentsTitle')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover:transform hover:-translate-y-1 group">
                <div className="mb-6 p-4 bg-black/50 rounded-full w-fit group-hover:scale-110 transition-transform">
                  {dept.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{dept.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {dept.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process - Multiple Boxes */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Users size={48} className="text-red-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">
              {t('joinUs.process.title')}
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {t('joinUs.process.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {departments.map((dept, index) => (
              <div key={index} className="bg-black/50 p-8 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gray-900 rounded-lg">
                    {dept.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {dept.title}
                  </h3>
                </div>
                <p className="text-gray-400 mb-6">
                  {t('joinUs.apply.text')}
                </p>
                <a 
                  href={dept.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/20 hover:shadow-red-600/40"
                >
                  <Send size={18} />
                  {t('joinUs.apply.button')}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUsPage;