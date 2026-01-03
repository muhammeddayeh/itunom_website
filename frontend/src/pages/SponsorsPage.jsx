import React from 'react';
import { useTranslation } from 'react-i18next';

const SponsorsPage = () => {
  const { t } = useTranslation();
  // TODO: Bu bölümü gerçek sponsorlarınızın bilgileriyle güncelleyin
  const mainSponsors = [
    {
      name: 'Turkish Technic',
      logo: '/photos/sponsors/1.png',
      tier: '',
      descriptionKey: 'sponsors.list.turkishTechnic'
    },
    {
      name: 'MKE',
      logo: '/photos/sponsors/mke.png',
      tier: '',
      descriptionKey: 'sponsors.list.mke'
    },
    {
      name: 'TÜBİTAK',
      logo: '/photos/sponsors/tubitak.png',
      tier: '',
      descriptionKey: 'sponsors.list.tubitak'
    },
    { 
      name: 'Halkbank', 
      logo: '/photos/sponsors/halkbank.png',
      tier: '',
      descriptionKey: 'sponsors.list.halkbank'
    },
    { 
      name: 'ASELSAN', 
      logo: '/photos/sponsors/aselsann.png',
      tier: '',
      descriptionKey: 'sponsors.list.aselsan'
    },
    { 
      name: 'Arz Portföy', 
      logo: '/photos/sponsors/arz.png',
      tier: '',
      descriptionKey: 'sponsors.list.arzPortfoy'
    },
    { 
      name: 'Ege Bant', 
      logo: '/photos/sponsors/ege_bant.png',
      tier: '',
      descriptionKey: 'sponsors.list.egeBant'
    },
    { 
      name: 'Koyuncu', 
      logo: '/photos/sponsors/2.png',
      tier: '',
      descriptionKey: 'sponsors.list.koyuncu'
    },
    { 
      name: 'İTÜ', 
      logo: '/photos/sponsors/itu.png',
      tier: '',
      descriptionKey: 'sponsors.list.itu'
    }
  ];



  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t('sponsors.title')}
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('sponsors.description')}
          </p>
          <p className="text-red-500 mt-4">
            {t('sponsors.note')}
          </p>
        </div>
      </section>

      {/* Main Sponsors Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            {t('sponsors.main')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {mainSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center h-32 mb-6">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <span className="inline-block px-4 py-1 bg-red-600 text-white text-sm font-semibold rounded-full mb-3">
                    {sponsor.tier}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{sponsor.name}</h3>
                  <p className="text-gray-600 text-sm">{t(sponsor.descriptionKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Become a Sponsor Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('sponsors.become.title')}
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            {t('sponsors.become.description')}
          </p>
          <a
            href="mailto:itunomuavteam@itu.edu.tr?subject=Sponsorluk Talebi"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-500/50"
          >
            <span>{t('sponsors.become.button')}</span>
          </a>
        </div>
      </section>

      {/* Sponsorship Benefits */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            {t('sponsors.benefits.title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="text-red-500 text-4xl font-bold mb-3">01</div>
              <h3 className="text-xl font-bold text-white mb-3">{t('sponsors.benefits.visibility.title')}</h3>
              <p className="text-gray-300">
                {t('sponsors.benefits.visibility.text')}
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="text-red-500 text-4xl font-bold mb-3">02</div>
              <h3 className="text-xl font-bold text-white mb-3">{t('sponsors.benefits.talent.title')}</h3>
              <p className="text-gray-300">
                {t('sponsors.benefits.talent.text')}
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="text-red-500 text-4xl font-bold mb-3">03</div>
              <h3 className="text-xl font-bold text-white mb-3">{t('sponsors.benefits.investment.title')}</h3>
              <p className="text-gray-300">
                {t('sponsors.benefits.investment.text')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SponsorsPage;
