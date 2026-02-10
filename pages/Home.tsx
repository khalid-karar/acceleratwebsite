import React from 'react';
import { Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      welcome: "Welcome",
      connectLabel: "CONNECT",
      values: { title: "Values" },
      strategy: { title: "Strategy" },
      whoWeAre: {
        label: "WHO WE ARE",
        description: "A premier business consulting and assurance alliance empowering organizations with strategic insights, governance excellence, and innovative solutions.",
        cta: "READ MORE"
      },
      accelerat360: {
        label: "ACCELERAT 360",
        title: "AI-Powered Diagnostic Platform",
        description: "Comprehensive GRC assessment tool powered by artificial intelligence for governance, risk, and compliance excellence.",
        cta: "LEARN MORE"
      },
      whoWeServe: {
        label: "WHO WE SERVE",
        description: "Government Entities, Financial Institutions, Corporations, and SMEs"
      },
      whatWeDo: {
        label: "WHAT WE DO",
        intro: "ACCELERAT provides value-adding professional and innovative services through...",
        services: [
          {
            title: "Advisory Services",
            subtitle: "STRATEGIC RISK AND AI-DRIVEN INSIGHTS...",
            link: "/advisory-services"
          },
          {
            title: "Assurance Services",
            subtitle: "AI-ENHANCED AUDITING AND COMPLIANCE...",
            link: "/assurance-services"
          },
          {
            title: "Consulting Services",
            subtitle: "TECHNOLOGY-DRIVEN BUSINESS OPTIMIZATION...",
            link: "/consulting-services"
          }
        ]
      },
      newsEvents: {
        label: "NEWS AND EVENTS",
        date: "January 19, 2026",
        headline: "ACCELERAT launches AI-powered ACCELERAT 360 diagnostic platform for Saudi market."
      }
    },
    ar: {
      welcome: "أهلاً بكم",
      connectLabel: "تواصل معنا",
      values: { title: "قيمنا" },
      strategy: { title: "استراتيجيتنا" },
      whoWeAre: {
        label: "من نحن",
        description: "تحالف رائد في استشارات الأعمال وخدمات التأكيدات، نُمكّن المؤسسات بالرؤى الاستراتيجية والتميز في الحوكمة والحلول المبتكرة.",
        cta: "اقرأ المزيد"
      },
      accelerat360: {
        label: "أكسيليريت 360",
        title: "منصة التشخيص المدعومة بالذكاء الاصطناعي",
        description: "أداة تقييم شاملة للحوكمة والمخاطر والامتثال مدعومة بالذكاء الاصطناعي للتميز المؤسسي.",
        cta: "اعرف المزيد"
      },
      whoWeServe: {
        label: "من نخدم",
        description: "الجهات الحكومية، المؤسسات المالية، الشركات، والمنشآت الصغيرة والمتوسطة"
      },
      whatWeDo: {
        label: "ماذا نقدم",
        intro: "تقدم أكسيليريت خدمات مهنية ومبتكرة ذات قيمة مضافة من خلال...",
        services: [
          {
            title: "الخدمات الاستشارية",
            subtitle: "المخاطر الاستراتيجية والرؤى المدعومة بالذكاء الاصطناعي...",
            link: "/advisory-services"
          },
          {
            title: "خدمات التأكيد",
            subtitle: "التدقيق والامتثال المعزز بالذكاء الاصطناعي...",
            link: "/assurance-services"
          },
          {
            title: "خدمات الاستشارات",
            subtitle: "تحسين الأعمال المدفوع بالتكنولوجيا...",
            link: "/consulting-services"
          }
        ]
      },
      newsEvents: {
        label: "الأخبار والفعاليات",
        date: "19 يناير 2026",
        headline: "أكسيليريت تطلق منصة ACCELERAT 360 التشخيصية المدعومة بالذكاء الاصطناعي للسوق السعودي."
      }
    }
  };

  const c = content[lang];

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
                {c.welcome}
              </h1>
            </div>

            {/* Right: Social, Values, Strategy */}
            <div className="flex-1 space-y-8">
              {/* Social Connect */}
              <div className="border-b border-white/20 pb-6">
                <p className="text-sm font-semibold tracking-widest mb-4 opacity-70">
                  {c.connectLabel}
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
                  {c.values.title}
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
                  {c.strategy.title}
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
                {c.whoWeAre.label}
              </p>
              <p className="text-base leading-relaxed mb-6">
                {c.whoWeAre.description}
              </p>
            </div>
            <Link to="/who-we-are" className="text-sm font-bold text-cyber-emerald bg-white rounded px-4 py-2 hover:bg-opacity-90 transition-all w-fit">
              {c.whoWeAre.cta}
            </Link>
          </div>

          {/* Card 2: ACCELERAT 360 (Split) */}
          <div className="flex flex-col gap-0">
            <Link to="/accelerat-360" className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white rounded-t-lg p-8 flex-1 hover:from-[#252550] hover:to-[#1a2a4e] transition-all">
              <p className="text-xs font-semibold tracking-widest opacity-70 mb-4">
                {c.accelerat360.label}
              </p>
              <h3 className="text-xl font-bold mb-2">
                {c.accelerat360.title}
              </h3>
              <p className="text-sm opacity-80">
                {c.accelerat360.description}
              </p>
            </Link>
            <div className="bg-gradient-to-br from-cyber-emerald to-[#0a3d35] text-white rounded-b-lg p-8">
              <p className="text-xs font-semibold tracking-widest opacity-70 mb-3">
                {c.whoWeServe.label}
              </p>
              <p className="text-sm mb-4">
                {c.whoWeServe.description}
              </p>
              <Link to="/accelerat-360" className="inline-flex items-center gap-2 text-sm font-bold hover:text-white/80 transition-colors">
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* Card 3: What We Do - 3 Services */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-lg p-8">
            <p className="text-xs font-semibold tracking-widest opacity-70 mb-4">
              {c.whatWeDo.label}
            </p>
            <p className="text-sm opacity-90 mb-6">
              {c.whatWeDo.intro}
            </p>
            <div className="space-y-4">
              {c.whatWeDo.services.map((service, idx) => (
                <Link key={idx} to={service.link} className="block border-t border-white/10 pt-4 first:border-0 first:pt-0 hover:bg-white/5 -mx-2 px-2 rounded transition-all">
                  <h4 className="font-bold text-sm mb-1">
                    {service.title}
                  </h4>
                  <p className="text-xs opacity-70 mb-2">
                    {service.subtitle}
                  </p>
                  <span className="text-lg font-bold text-cyber-emerald hover:text-[#f07563] transition-colors">
                    ›
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Card 4: News & Events */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-lg p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold tracking-widest opacity-70 mb-4">
                {c.newsEvents.label}
              </p>
              <p className="text-xs text-cyber-emerald font-semibold mb-3">
                {c.newsEvents.date}
              </p>
              <h3 className="text-base font-bold leading-relaxed">
                {c.newsEvents.headline}
              </h3>
            </div>
            <div className="flex gap-3 mt-6">
              <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                ‹
              </button>
              <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
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
