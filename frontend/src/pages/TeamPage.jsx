import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageTitle from '../components/PageTitle';

const TeamPage = () => {
  const { t } = useTranslation();
  
  const teamLeaders = [
    {
      name: 'Burak  Emir Cengiz',
      role: t('team.roles.captain'),
      image: '/photos/team/burak.jpg',
      email: 'burak24@itu.edu.tr',
      linkedin: '#'
    },
    {
      name: 'Aziz Başar',
      role: t('team.roles.softwareLeader'),
      image: '/photos/team/jr.png',
      email: 'basara23@itu.edu.tr',
      linkedin: '#'
    },
    {
      name: 'Eren Dölen',
      role: t('team.roles.mechanicalLeader'),
      image: '/photos/team/input.jpg',
      email: 'eren@itu.edu.tr',
      linkedin: '#'
    },
    {
      name: 'Recep Sedat Tokay',
      role: t('team.roles.avionicLeader'),
      image: '/photos/team/reco.jpg',
      email: 'recep@itu.edu.tr',
      linkedin: '#'
    },
    {
      name: 'Asu İrem Güllüoğlu',
      role: t('team.roles.promotionLeader'),
      image: '/photos/team/asu.jpg',
      email: 'can@itu.edu.tr',
      linkedin: '#'
    }
  ];

  const mechanicalTeam = [
    {
      name: 'Ömer Faruk Paşaoğlu',
      role: t('team.roles.mechanicalMember'),
      image: '/photos/team/',
      email: 'pasaogluo23@itu.edu.tr',
      linkedin: '#'
    },
    {
      name: 'Muhammed Yusuf Zaloğlu',
      role: t('team.roles.mechanicalMember'),
      image: '/photos/team/',
      email: 'zaloglu24@itu.edu.tr',
      linkedin: '#'
    },
    {
      name: 'Ferit Musa Öz',
      role: t('team.roles.mechanicalMember'),
      image: '/photos/team/',
      email: 'ozfe25@itu.edu.tr',
      linkedin: '#'
    },
    {
      name: 'Furkan Demiryürek',
      role: t('team.roles.mechanicalMember'),
      image: '/photos/team/',
      email: 'demiryurek24@itu.edu.tr',
      linkedin: '#'
    },
    {
      name: 'Ziya Yaman',
      role: t('team.roles.mechanicalMember'),
      image: '/photos/team/',
      email: 'yamanz25@itu.edu.tr',
      linkedin: '#'
    },
    {
      name: 'Merve Yiğit',
      role: t('team.roles.mechanicalMember'),
      image: '/photos/team/',
      email: 'yigitm25@itu.edu.tr',
      linkedin: '#'
    }
  ];

  const softwareTeam = [
    {
      name: 'Pınar Başman',
      role: t('team.roles.softwareMember'),
      image: '/photos/team/',
      email: 'basman24@itu.edu.tr',
      linkedin: '#'
    },
    {
      name: 'Elif Rumeysa Atılgan',
      role: t('team.roles.softwareMember'),
      image: '/photos/team/',
      email: 'atilgane24@itu.edu.tr',
      linkedin: '#'
    },
    {
      name: 'Emir Taha Demir',
      role: t('team.roles.softwareMember'),
      image: '/photos/team/',
      email: 'demirem24@itu.edu.tr',
      linkedin: '#'
    },
    {
      name: 'Muhammed Dayeh',
      role: t('team.roles.softwareMember'),
      image: '/photos/team/',
      email: 'dayeh24@itu.edu.tr',
      linkedin: 'https://www.linkedin.com/in/muhammed-dayeh/'
    }
  ];

  const avionicsTeam = [
    {
      name: 'Fuad Yusifov',
      role: t('team.roles.avionicsMember'),
      image: '/photos/team/',
      email: 'yusifov24@itu.edu.tr',
      linkedin: '#'
    },
    {
      name: 'Serkan Alakaş',
      role: t('team.roles.avionicsMember'),
      image: '/photos/team/',
      email: 'alakas25@itu.edu.tr',
      linkedin: '#'
    },
    {
      name: 'Veysel Efe Dinç',
      role: t('team.roles.avionicsMember'),
      image: '/photos/team/',
      email: 'dincv24@itu.edu.tr',
      linkedin: '#'
    },
    {
      name: 'Arda Turan',
      role: t('team.roles.avionicsMember'),
      image: '/photos/team/',
      email: 'turana25@itu.edu.tr',
      linkedin: '#'
    },
    {
      name: 'Emre Yusuf Yentür',
      role: t('team.roles.avionicsMember'),
      image: '/photos/team/',
      email: 'yentur24@itu.edu.tr',
      linkedin: '#'
    },
    {
      name: 'Tarık Ziya İnci',
      role: t('team.roles.avionicsMember'),
      image: '/photos/team/',
      email: 'incit22@itu.edu.tr',
      linkedin: '#'
    }
  ];

  const promotionTeam = [
    {
      name: 'Emine Bahar Ercan',
      role: t('team.roles.promotionMember'),
      image: '/photos/team/',
      email: 'ercane23@itu.edu.tr',
      linkedin: '#'
    }
  ];

  const advisors = [
    {
      name: 'Prof. Dr. Emre Koyuncu',
      role: t('team.roles.advisor'),
      department: t('team.advisorDepartment'),
      image: '/photos/team/koyuncu.jpeg'
    }
  ];

  const TeamMemberCard = ({ member }) => (
    <div className="group bg-gray-800/30 rounded-lg overflow-hidden border border-gray-700 hover:border-red-600 transition-all duration-300 hover:scale-105">
      <div className="relative overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
        <p className="text-red-500 font-semibold mb-2">{member.role}</p>
        <p className="text-gray-400 text-sm mb-4">{member.department}</p>
        
        <div className="flex space-x-3">
          <a
            href={`mailto:${member.email}`}
            className="p-2 bg-gray-700 hover:bg-red-600 text-white rounded-lg transition-colors"
            title="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-700 hover:bg-red-600 text-white rounded-lg transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </div>
  );

  const TeamSection = ({ title, members }) => (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {members.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-black pt-16">
      <PageTitle titleKey="pageTitles.team" />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t('team.title')}
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('team.description')}
          </p>
        </div>
      </section>

      {/* Team Leaders Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            {t('team.leaders')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamLeaders.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Mechanical Team Section */}
      <TeamSection 
        title={t('team.sections.mechanical')} 
        members={mechanicalTeam} 
      />

      {/* Software Team Section */}
      <TeamSection 
        title={t('team.sections.software')} 
        members={softwareTeam} 
      />

      {/* Avionics Team Section */}
      <TeamSection 
        title={t('team.sections.avionics')} 
        members={avionicsTeam} 
      />

      {/* Promotion & Sponsorship Team Section */}
      <TeamSection 
        title={t('team.sections.promotion')} 
        members={promotionTeam} 
      />

      {/* Advisors Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            {t('team.advisors')}
          </h2>
          
          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="bg-gray-800/30 rounded-lg overflow-hidden border border-gray-700 hover:border-red-600 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row items-center p-6 space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-red-600"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{advisor.name}</h3>
                    <p className="text-red-500 font-semibold mb-1">{advisor.role}</p>
                    <p className="text-gray-400 text-sm">{advisor.department}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('team.join.title')}
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            {t('team.join.description')}
          </p>
          <a
            href="mailto:itunomuavteam@itu.edu.tr"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-500/50"
          >
            <Mail size={20} />
            <span>{t('team.join.button')}</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;