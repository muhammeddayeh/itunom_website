import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Youtube, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageTitle from '../components/PageTitle';

const ContactPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add form submission when backend integration is ready
    const mailtoLink = `mailto:itunomuavteam@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black pt-16">
            <PageTitle titleKey="pageTitles.contact" />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t('contact.title')}
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                {t('contact.info')}
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
              
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-red-600 rounded-lg">
                    <Mail size={24} className="text-white" />
                  </div>  
                  <div>
                    <h3 className="text-white font-semibold mb-1">{t('contact.email')}</h3>
                    <a 
                      href="mailto:itunomuavteam@gmail.com" 
                      className="text-gray-300 hover:text-red-500 transition-colors"
                    >
                      itunomuavteam@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-red-600 rounded-lg">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{t('contact.address')}</h3>
                    <a 
                  href="https://maps.app.goo.gl/KQd8edMwTB4q56T79"
                  target="_blank"
                  rel="noopener noreferrer"> 
                    <p className="text-gray-300">
                      Istanbul Technical University<br />
                      Ayazağa Campus<br />
                      34469 Maslak, Istanbul
                    </p>
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">
                  {t('contact.social')}
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/itunomuavteam?igsh=NTZrYjFxbGQzZXpm"
                  target="_blank"
                  rel="noopener noreferrer"
                    className="p-3 bg-gray-800 hover:bg-red-600 text-white rounded-lg transition-colors"
                    title="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/itunomuavteam/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 hover:bg-red-600 text-white rounded-lg transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://youtube.com/@itunomuavteam?si=lNGYWg7QpKiqQAV7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 hover:bg-red-600 text-white rounded-lg transition-colors"
                    title="YouTube"
                  >
                    <Youtube size={24} />
                  </a>
                  
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                {t('contact.form.title')}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-600 transition-colors"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-600 transition-colors"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-semibold mb-2">
                    {t('contact.form.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-600 transition-colors"
                    placeholder={t('contact.form.subjectPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-600 transition-colors resize-none"
                    placeholder={t('contact.form.messagePlaceholder')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-500/50"
                >
                  <span>{t('contact.form.send')}</span>
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            {t('contact.location')}
          </h2>
          
          <div className="relative h-96 bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95270.72483806618!2d28.956471009790945!3d41.037176426277355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5e7bbf9e733%3A0xb837a9180f79ad03!2sITU%20Aerospace%20Research%20Center%20(ITU-ARC)!5e1!3m2!1sen!2str!4v1768045125772!5m2!1sen!2str" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="ITU Aerospace Research Center Location"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            {t('contact.faq.title')}
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">
                {t('contact.faq.q1.question')}
              </h3>
              <p className="text-gray-300">
                {t('contact.faq.q1.answer')}
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">
                {t('contact.faq.q2.question')}
              </h3>
              <p className="text-gray-300">
                {t('contact.faq.q2.answer')}
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">
                {t('contact.faq.q3.question')}
              </h3>
              <p className="text-gray-300">
                {t('contact.faq.q3.answer')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;