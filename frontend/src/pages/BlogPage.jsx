import React from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BlogPage = () => {
  const { t } = useTranslation();
  // TODO: Update this section with your real blog posts
  const blogPosts = [
    {
      id: '1',
      title: 'blog.titles.t1',
      excerpt: 'blog.excerpts.e1',
      date: '06/2023',
      author: 'blog.authors.a1',
      category: t('blog.categories.competitions'),
      image: '/photos/blog/sampiyonluk.png',
      link: 'https://www.instagram.com/p/C8tJ8vJMLUi/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=='
     
    },
    {
      id: '2',
      title: 'blog.titles.t2',
      excerpt: 'blog.excerpts.e2',
      date: '02/2024',
      author: 'blog.authors.a1',
      category: t('blog.categories.workshop'),
      image: '/photos/blog/tanitim101.png',
      link:"https://www.instagram.com/p/DRCsuTmDdb1/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="
     
    },
    {
      id: '3',
      title: 'blog.titles.t3',
      excerpt: 'blog.excerpts.e3',
      date: '02/2024',
      author: 'blog.authors.a1',
      category: t('blog.categories.competitions'),
      image: '/photos/blog/teknofest1.png',
      link: "https://www.instagram.com/p/DO6VTwmDRUK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      
    },
    {
      id: '4',
      title: 'blog.titles.t4',
      excerpt: 'blog.excerpts.e4',
      date: '06/2023',
      author: 'blog.authors.a1',
      category: t('blog.categories.competitions'),
      image: '/photos/blog/saus2.png',
      link: 'https://www.instagram.com/p/DLscZYQMLWO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
     
    },
    {
      id: '5',
      title: 'blog.titles.t5',
      excerpt: 'blog.excerpts.e5',
      date: '03/2024',
      author: 'blog.authors.a1',
      category: 'Manufacturing',
      image: '/photos/blog/saustest1.png',
      link: "https://www.instagram.com/p/DKpcrLVq_a5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      
    }
  ];

  const categories = [
    t('blog.categories.all'),
    t('blog.categories.vehicleDevelopment'),
    t('blog.categories.autonomousSystems'),
    t('blog.categories.artificialIntelligence'),
    t('blog.categories.competitions'),
    t('blog.categories.manufacturing'),
    t('blog.categories.workshop'),
    t('blog.categories.electronics'),
    t('blog.categories.navigation')
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t('blog.title')}
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('blog.description')}
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-red-600 text-white shadow-lg shadow-red-500/50'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-gray-800/30 rounded-lg overflow-hidden border border-gray-700 hover:border-red-600 transition-all duration-300 hover:scale-105"
              >
                
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 px-3 py-1 rounded-full text-white text-xs font-semibold">
                    {post.category}
                  </div>
                </div>
                <Link to={`/blog/${post.id}`} className="flex items-center space-x-1 text-red-500 hover:text-red-400 transition-colors font-semibold">
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{t(post.author)}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-red-500 transition-colors">
                    {t(post.title)}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {t(post.excerpt)}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{post.readTime} {t('blog.readTime')}</span>
                      <span className="flex items-center space-x-1 text-red-500 hover:text-red-400 transition-colors font-semibold">
                      <span>{t('blog.readMore')}</span>
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('blog.newsletter.title')}
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            {t('blog.newsletter.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:itunomuavteam@itu.edu.tr"
              className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              {t('blog.newsletter.button')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;