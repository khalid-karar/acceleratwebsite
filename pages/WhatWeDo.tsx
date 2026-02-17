import React from 'react';
import { ArrowRight, Shield, BarChart3, Monitor, GraduationCap, Lightbulb, FileSearch } from 'lucide-react';
import { AcceleratText } from '../components/AcceleratText';
import { useLanguage } from '../context/LanguageContext';

const WhatWeDo: React.FC = () => {
  const { lang } = useLanguage();

  const services = [
    {
      icon: Shield,
      title: lang === 'ar' ? 'التدقيق المالي والامتثال' : 'Financial & Compliance Audit',
      description: lang === 'ar' 
        ? 'مراجعة شاملة للعمليات المالية وضمان الامتثال للمعايير واللوائح المعمول بها.'
        : 'Comprehensive review of financial operations ensuring compliance with applicable standards and regulations.',
      link: '/financial-audit',
      color: 'from-cyber-emerald to-[#0a3d35]'
    },
    {
      icon: BarChart3,
      title: lang === 'ar' ? 'تدقيق الأداء والعمليات' : 'Performance Audit & Assessment',
      description: lang === 'ar'
        ? 'تقييم فعالية وكفاءة العمليات والبرامج وتحديد فرص التحسين.'
        : 'Evaluating the effectiveness and efficiency of operations and programs, identifying improvement opportunities.',
      link: '/performance-audit',
      color: 'from-[#1a1a2e] to-[#16213e]'
    },
    {
      icon: Monitor,
      title: lang === 'ar' ? 'التدقيق الرقمي والتقني' : 'Digital & Technology Audit',
      description: lang === 'ar'
        ? 'تقييمات الأمن السيبراني ومراجعة أنظمة تقنية المعلومات والحوكمة الرقمية.'
        : 'Cybersecurity assessments, IT systems review, and digital governance evaluation.',
      link: '/digital-audit',
      color: 'from-[#2d3436] to-[#1e272e]'
    },
    {
      icon: GraduationCap,
      title: lang === 'ar' ? 'أكاديمية التدريب' : 'Training Academy',
      description: lang === 'ar'
        ? 'برامج تدريبية متقدمة في الحوكمة والمخاطر والامتثال والتدقيق.'
        : 'Advanced training programs in governance, risk management, compliance, and audit.',
      link: '/fa-academy',
      color: 'from-[#0f4c75] to-[#1b262c]'
    },
    {
      icon: Lightbulb,
      title: lang === 'ar' ? 'الاستشارات والتقييمات' : 'Consulting & Assessments',
      description: lang === 'ar'
        ? 'أكسيليريت 360 - أداة تقييم تشخيصية مدعومة بالذكاء الاصطناعي لقياس نضج المنظمة.'
        : 'ACCELERAT 360° - AI-powered diagnostic assessment tool measuring organizational maturity.',
      link: '/consulting-assessments',
      color: 'from-[#f07563] to-[#e85a4f]'
    },
    {
      icon: FileSearch,
      title: lang === 'ar' ? 'الخدمات المتخصصة' : 'Specialized Services',
      description: lang === 'ar'
        ? 'التحقيقات والغش، التحليلات المتقدمة، واستشارات الحوكمة والمخاطر والامتثال.'
        : 'Fraud investigations, advanced analytics, and GRC consulting services.',
      link: '/other-audit',
      color: 'from-[#4a4e69] to-[#22223b]'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="/images/what-we-do-hero.jpg"
          alt="What We Do"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-emerald/80 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            {lang === 'ar' ? 'ماذا نقدم' : 'What We Do'}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            {lang === 'ar' 
              ? 'خدمات مهنية ومبتكرة تضيف قيمة حقيقية' 
              : 'INNOVATIVE PROFESSIONAL SERVICES THAT ADD REAL VALUE'}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-cyber-emerald dark:text-white mb-4">
            {lang === 'ar' ? 'مقدمة' : 'Introduction'}
          </h2>
          <div className="w-24 h-1 bg-cyber-emerald dark:bg-digital-green mx-auto mb-8" />
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            <AcceleratText text={lang === 'ar'
              ? 'تقدم أكسيليريت خدمات مهنية ومبتكرة تضيف قيمة للعملاء، وتدعمهم في تحقيق أهدافهم، وتحسين عملياتهم، وتعزيز امتثالهم للقوانين واللوائح المعمول بها.'
              : 'ACCELERAT provides innovative professional services that add value to clients, support them in achieving their objectives, improve their operations, and enhance their compliance with applicable laws and regulations.'} />
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            {lang === 'ar' ? 'خدماتنا' : 'Our Services'}
          </h2>
          <div className="w-24 h-1 bg-cyber-emerald dark:bg-digital-green mx-auto mb-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <a
                key={idx}
                href={service.link}
                className={`group bg-gradient-to-br ${service.color} rounded-lg p-8 text-white hover:shadow-2xl hover:scale-105 transition-all duration-300`}
              >
                <service.icon className="w-12 h-12 mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/80 mb-6 leading-relaxed"><AcceleratText text={service.description} /></p>
                <div className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                  <span className="text-sm font-semibold">
                    {lang === 'ar' ? 'اقرأ المزيد' : 'Learn More'}
                  </span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-cyber-emerald to-[#0a3d35]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {lang === 'ar' ? 'هل تحتاج إلى خدماتنا؟' : 'Need Our Services?'}
          </h2>
          <p className="text-xl text-white/80 mb-8">
            {lang === 'ar'
              ? 'تواصل معنا اليوم للحصول على استشارة مجانية'
              : 'Contact us today for a free consultation'}
          </p>
          <a
            href="/contact-us"
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-cyber-emerald font-bold rounded-lg hover:bg-gray-100 transition-all"
          >
            {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
