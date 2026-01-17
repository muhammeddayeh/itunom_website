import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Instagram, Youtube, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.team'), path: '/takim' },
    { name: t('nav.vehicles'), path: '/araclar' },
    { name: t('nav.achievements'), path: '/basarilar' }
  ];

  const resources = [
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.sponsors'), path: '/sponsorlar' },
    { name: t('nav.contact'), path: '/iletisim' },
    { name: t('nav.join_us'), path: '/join-us' }
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="col-span-2">
            <Link to="/" className="text-2xl font-bold text-white mb-4 block">
              {t('footer.teamName')}
            </Link>
            <p className="text-gray-400 mb-4">
              {t('footer.teamDesc')}
            </p>
            <p className="text-gray-400 text-sm">
              {t('footer.about')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-2">
              {resources.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="text-white font-semibold mb-2">{t('footer.email')}</h4>
              <a 
                href="mailto:itunomuavteam@gmail.com" 
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                itunomuavteam@gmail.com
              </a>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">{t('footer.address')}</h4>
              <p className="text-gray-400 whitespace-pre-line">
                <a 
                  href="https://maps.app.goo.gl/KQd8edMwTB4q56T79"
                  target="_blank"
                  rel="noopener noreferrer"> 
                  {t('footer.addressText')}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {t('footer.copyright', { year: currentYear })}
          </p>

          <div className="flex items-center space-x-6">
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/itunomuavteam?igsh=NTZrYjFxbGQzZXpm"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-red-600 text-white rounded-lg transition-colors"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/itunomuavteam/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-red-600 text-white rounded-lg transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://youtube.com/@itunomuavteam?si=lNGYWg7QpKiqQAV7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-red-600 text-white rounded-lg transition-colors"
                title="YouTube"
              >
                <Youtube size={20} />
              </a>
              
            </div>

            {/* Language Switcher - TR / EN */}
            <div className="hidden lg:flex items-center space-x-3">
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;