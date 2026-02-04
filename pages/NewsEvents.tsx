import React, { useState } from 'react';
import { Calendar, ArrowRight, Filter, Instagram, Twitter, Linkedin } from 'lucide-react';
import { pageContent2 } from '../content/pageContent2';
import { useLanguage } from '../context/LanguageContext';

const NewsEvents: React.FC = () => {
  const { lang } = useLanguage();
  const content = pageContent2.newsEvents[lang];
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('recent');

  // Sample news data - in production, this would come from a CMS or API
  const newsItems = [
    {
      id: 1,
      category: 'company',
      title: lang === 'ar' 
        ? 'أكسيليريت تطلق منصة ACCELERAT 360 التشخيصية المدعومة بالذكاء الاصطناعي'
        : 'ACCELERAT Launches AI-Powered ACCELERAT 360 Diagnostic Platform',
      description: lang === 'ar'
        ? 'منصة تقييم متقدمة تقيس نضج المنظمة وتوفر رؤى شاملة'
        : 'Advanced assessment platform measuring organizational maturity and providing comprehensive insights',
      date: '2026-01-19',
      image: '/images/news-1.jpg'
    },
    {
      id: 2,
      category: 'events',
      title: lang === 'ar'
        ? 'ورشة عمل: أفضل ممارسات الحوكمة والمخاطر والامتثال'
        : 'Workshop: GRC Best Practices',
      description: lang === 'ar'
        ? 'ورشة عمل تفاعلية حول أحدث ممارسات الحوكمة'
        : 'Interactive workshop on the latest governance practices',
      date: '2026-01-15',
      image: '/images/news-2.jpg'
    },
    {
      id: 3,
      category: 'insights',
      title: lang === 'ar'
        ? 'تقرير: اتجاهات التدقيق الرقمي في 2026'
        : 'Report: Digital Audit Trends in 2026',
      description: lang === 'ar'
        ? 'تحليل شامل لأحدث اتجاهات التدقيق الرقمي'
        : 'Comprehensive analysis of the latest digital audit trends',
      date: '2026-01-10',
      image: '/images/news-3.jpg'
    },
    {
      id: 4,
      category: 'thought-leadership',
      title: lang === 'ar'
        ? 'مقال: مستقبل الذكاء الاصطناعي في التدقيق'
        : 'Article: The Future of AI in Auditing',
      description: lang === 'ar'
        ? 'رؤية خبرائنا حول تأثير الذكاء الاصطناعي على مهنة التدقيق'
        : 'Our experts\' vision on AI\'s impact on the audit profession',
      date: '2026-01-05',
      image: '/images/news-4.jpg'
    }
  ];

  const categories = [
    { id: 'all', label: lang === 'ar' ? 'الكل' : 'All' },
    { id: 'company', label: lang === 'ar' ? 'أخبار الشركة' : 'Company News' },
    { id: 'events', label: lang === 'ar' ? 'الفعاليات' : 'Events' },
    { id: 'insights', label: lang === 'ar' ? 'الرؤى' : 'Insights' },
    { id: 'thought-leadership', label: lang === 'ar' ? 'الفكر القيادي' : 'Thought Leadership' }
  ];

  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  const sortedNews = [...filteredNews].sort((a, b) => {
    if (sortOrder === 'recent') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="/images/news-hero.jpg"
          alt="News & Events"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-emerald/80 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            {lang === 'ar' ? 'الأخبار والفعاليات' : 'News & Events'}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            {lang === 'ar' 
              ? 'تابع آخر أخبارنا وفعالياتنا' 
              : 'STAY UPDATED WITH OUR LATEST NEWS AND EVENTS'}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Filters */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      activeCategory === cat.id
                        ? 'bg-cyber-emerald text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center gap-2">
                <Filter size={16} className="text-gray-500" />
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm"
                >
                  <option value="recent">{lang === 'ar' ? 'الأحدث' : 'Most Recent'}</option>
                  <option value="oldest">{lang === 'ar' ? 'الأقدم' : 'Oldest'}</option>
                </select>
              </div>
            </div>

            {/* News Grid */}
            <div className="space-y-8">
              {/* Featured News */}
              {sortedNews.length > 0 && (
                <div className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={sortedNews[0].image}
                      alt={sortedNews[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-cyber-emerald text-white text-xs font-bold px-3 py-1 rounded-full">
                        {categories.find(c => c.id === sortedNews[0].category)?.label}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-3">
                      <Calendar size={14} />
                      <span>{new Date(sortedNews[0].date).toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyber-emerald transition-colors">
                      {sortedNews[0].title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{sortedNews[0].description}</p>
                    <a href="#" className="inline-flex items-center gap-2 text-cyber-emerald dark:text-digital-green font-semibold hover:gap-4 transition-all">
                      {lang === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              )}

              {/* Other News */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sortedNews.slice(1).map(news => (
                  <div key={news.id} className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition-all">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs mb-2">
                        <Calendar size={12} />
                        <span>{new Date(news.date).toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-cyber-emerald transition-colors line-clamp-2">
                        {news.title}
                      </h4>
                      <a href="#" className="text-sm text-cyber-emerald dark:text-digital-green font-semibold">
                        {lang === 'ar' ? 'اقرأ المزيد' : 'Read More'} →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Social Feeds */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Instagram size={20} className="text-pink-500" />
                {lang === 'ar' ? 'تابعنا على انستغرام' : 'Instagram Feed'}
              </h3>
              <a 
                href="https://accelerateconsulting.net/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyber-emerald dark:text-digital-green hover:underline"
              >
                @accelerat.sa
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Twitter size={20} className="text-blue-400" />
                {lang === 'ar' ? 'تابعنا على تويتر' : 'Twitter Feed'}
              </h3>
              <a 
                href="https://accelerateconsulting.net/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyber-emerald dark:text-digital-green hover:underline"
              >
                @accelerat_sa
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Linkedin size={20} className="text-blue-600" />
                {lang === 'ar' ? 'تابعنا على لينكدإن' : 'LinkedIn'}
              </h3>
              <a 
                href="https://accelerateconsulting.net/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyber-emerald dark:text-digital-green hover:underline"
              >
                ACCELERAT Consulting
              </a>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-cyber-emerald to-[#0a3d35] rounded-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-4">
                {content.newsletter.title}
              </h3>
              <p className="text-white/80 text-sm mb-4">
                {content.newsletter.description}
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder={lang === 'ar' ? 'بريدك الإلكتروني' : 'Your email address'}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/50"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-white text-cyber-emerald font-bold rounded-lg hover:bg-gray-100 transition-all"
                >
                  {lang === 'ar' ? 'اشتراك' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsEvents;
