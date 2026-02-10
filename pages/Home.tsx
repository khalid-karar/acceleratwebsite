import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import { pageContent } from '../content/pageContent';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { lang } = useLanguage();
  const content = pageContent.home[lang];

  // Values and Strategy bullet points
  const valuesPoints = lang === 'ar' 
    ? ['النزاهة والثقة', 'الابتكار', 'التميز', 'التعاون والريادة الفكرية', 'المرونة والتكيف', 'المسؤولية البيئية والاجتماعية']
    : ['Integrity and Trust', 'Innovation', 'Excellence', 'Collaboration and Thought Leadership', 'Agility and Adaptability', 'ESG Responsibility'];

  const strategyPoints = lang === 'ar'
    ? ['الحوكمة وإدارة المخاطر المدعومة بالذكاء الاصطناعي', 'التحول المؤسسي والابتكار الرقمي', 'التوسع الإقليمي والعالمي', 'تقديم خدمات مستقبلية', 'تمكين المواهب وقيادة الذكاء الاصطناعي', 'تعزيز الممارسات البيئية والاجتماعية المستدامة']
    : ['AI-Driven Governance & Risk Management', 'Business Transformation & Digital Innovation', 'Expand Regional & Global Reach', 'Deliver Future-Ready Services', 'Empower Talent & AI Leadership', 'Promote ESG & Sustainable Practices'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 md:px-12 py-32 md:py-40">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            {/* Left: Welcome */}
            <div className="flex-1">
              <h1 className="text-6xl md:text-7xl font-bold mb-8 text-cyber-emerald">
                {content.hero.welcome}
              </h1>
            </div>

            {/* Right: Social, Values, Strategy */}
            <div className="flex-1 space-y-8">
              {/* Social Connect */}
              <div className="border-b border-white/20 pb-6">
                <p className="text-sm font-semibold tracking-widest mb-4 opacity-70">
                  {content.hero.connectLabel}
                </p>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-cyber-emerald transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="hover:text-cyber-emerald transition-colors">
                    <Twitter size={24} />
                  </a>
                  <a href="#" className="hover:text-cyber-emerald transition-colors">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>

              {/* Values Box */}
              <div className="bg-white/5 border border-white/20 rounded-lg p-6 backdrop-blur">
                <h3 className="text-cyber-emerald font-bold text-lg mb-3">
                  {content.hero.values.title}
                </h3>
                <ul className={`text-sm leading-relaxed opacity-90 space-y-2 ${lang === 'ar' ? 'pr-4' : 'pl-4'}`}>
                  {valuesPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyber-emerald mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Strategy Box */}
              <div className="bg-cyber-emerald/10 border border-cyber-emerald/30 rounded-lg p-6 backdrop-blur">
                <h3 className="text-cyber-emerald font-bold text-lg mb-3">
                  {content.hero.strategy.title}
                </h3>
                <ul className={`text-sm leading-relaxed space-y-2 ${lang === 'ar' ? 'pr-4' : 'pl-4'}`}>
                  {strategyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyber-emerald mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Column Card Section */}
      <section className="px-6 md:px-12 py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Who We Are */}
          <div className="bg-gradient-to-br from-cyber-emerald to-[#0a3d35] text-white rounded-lg p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            <div>
              <p className="text-xs font-semibold tracking-widest opacity-70 mb-4">
                {content.cards.whoWeAre.label}
              </p>
              <p className="text-base leading-relaxed mb-6">
                {content.cards.whoWeAre.description}
              </p>
            </div>
            <button className="text-sm font-bold text-cyber-emerald bg-white rounded px-4 py-2 hover:bg-opacity-90 transition-all w-fit">
              {content.cards.whoWeAre.cta}
            </button>
          </div>

          {/* Card 2: Establishment Law (Split) */}
          <div className="flex flex-col gap-0">
            <div className="bg-gradient-to-br from-[#f07563] to-[#e85a4f] text-white rounded-t-lg p-8 flex-1">
              <p className="text-xs font-semibold tracking-widest opacity-70 mb-4">
                {content.cards.establishmentLaw.label}
              </p>
              <h3 className="text-xl font-bold">
                {content.cards.establishmentLaw.title}
              </h3>
            </div>
            <div className="bg-gradient-to-br from-cyber-emerald to-[#0a3d35] text-white rounded-b-lg p-8">
              <p className="text-xs font-semibold tracking-widest opacity-70 mb-3">
                {content.cards.establishmentLaw.whoWeAuditLabel}
              </p>
              <p className="text-sm mb-4">
                {content.cards.establishmentLaw.whoWeAuditDescription}
              </p>
              <button className="text-xl font-bold hover:text-cyber-emerald transition-colors">
                {content.cards.establishmentLaw.cta}
              </button>
            </div>
          </div>

          {/* Card 3: What We Do */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-lg p-8">
            <p className="text-xs font-semibold tracking-widest opacity-70 mb-4">
              {content.cards.whatWeDo.label}
            </p>
            <p className="text-sm opacity-90 mb-6">
              {content.cards.whatWeDo.intro}
            </p>
            <div className="space-y-4">
              {content.cards.whatWeDo.services.map((service, idx) => (
                <div key={idx} className="border-t border-white/10 pt-4 first:border-0 first:pt-0">
                  <h4 className="font-bold text-sm mb-1">
                    {service.title}
                  </h4>
                  <p className="text-xs opacity-70 mb-2">
                    {service.subtitle}
                  </p>
                  <button className="text-lg font-bold text-cyber-emerald hover:text-[#f07563] transition-colors">
                    {service.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: News & Events */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-lg p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold tracking-widest opacity-70 mb-4">
                {content.cards.newsEvents.label}
              </p>
              <p className="text-xs opacity-60 mb-3">
                {content.cards.newsEvents.date}
              </p>
              <h3 className="text-base font-bold leading-relaxed">
                {content.cards.newsEvents.headline}
              </h3>
            </div>
            <div className="flex gap-3 mt-6">
              <button className="text-xl font-bold hover:text-cyber-emerald transition-colors">
                ‹
              </button>
              <button className="text-xl font-bold hover:text-cyber-emerald transition-colors">
                ›
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
