import React from 'react';
import { Handshake, Award, Shield, Globe } from 'lucide-react';
import { pageContent2 } from '../content/pageContent2';
import { useLanguage } from '../context/LanguageContext';

const Partnerships: React.FC = () => {
  const { lang } = useLanguage();
  const content = pageContent2.partnerships[lang];

  const certifications = [
    { name: 'IFRS', fullName: lang === 'ar' ? 'معايير التقارير المالية الدولية' : 'International Financial Reporting Standards' },
    { name: 'ISA', fullName: lang === 'ar' ? 'معايير التدقيق الدولية' : 'International Standards on Auditing' },
    { name: 'ISO 31000', fullName: lang === 'ar' ? 'معايير إدارة المخاطر' : 'Risk Management Standards' },
    { name: 'COSO', fullName: lang === 'ar' ? 'إطار الرقابة الداخلية' : 'Internal Control Framework' },
    { name: 'COBIT', fullName: lang === 'ar' ? 'حوكمة تقنية المعلومات' : 'IT Governance Framework' },
    { name: 'NIST', fullName: lang === 'ar' ? 'معايير الأمن السيبراني' : 'Cybersecurity Standards' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="/images/partnerships-hero.jpg"
          alt="Partnerships"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-emerald/80 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            {lang === 'ar' ? 'الشراكات' : 'Partnerships'}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            {lang === 'ar' 
              ? 'معاً نستطيع تحقيق أشياء عظيمة' 
              : 'TOGETHER WE CAN DO GREAT THINGS'}
          </p>
        </div>
      </section>

      {/* Partnership Philosophy */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-cyber-emerald dark:bg-digital-green rounded-full flex items-center justify-center">
              <Handshake className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-cyber-emerald dark:text-white mb-4">
            {content.partnershipPhilosophy.title}
          </h2>
          <div className="w-24 h-1 bg-cyber-emerald dark:bg-digital-green mx-auto mb-8" />
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            {content.partnershipPhilosophy.description}
          </p>
        </div>
      </section>

      {/* Key Partnership */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-cyber-emerald dark:text-white mb-4">
                {content.keyPartnership.title}
              </h2>
              <div className="w-24 h-1 bg-cyber-emerald dark:bg-digital-green mb-8" />
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {content.keyPartnership.description}
              </p>
              
              {/* Partner Highlight Boxes */}
              <div className="space-y-6">
                {/* Al-Saeed Partner Box */}
                <div className="bg-gradient-to-br from-cyber-emerald to-[#0a3d35] rounded-lg p-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xl">📊</span>
                    </div>
                    <span className="text-sm font-bold tracking-widest opacity-70 uppercase">
                      {lang === 'ar' ? 'الشريك الاستراتيجي' : 'Strategic Partner'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {lang === 'ar' ? 'شركة السعيد للمحاسبين والمدققين والاستشاريين' : 'Al-Saeed Accountants, Auditors & Consultants'}
                  </h3>
                  <p className="text-white/80">
                    {lang === 'ar'
                      ? 'شريكنا الاستراتيجي بخبرة تمتد لعقود في السوق السعودي والخليجي'
                      : 'Our strategic partner with decades of experience in the Saudi and Gulf markets'}
                  </p>
                </div>

                {/* Contact Point Partner Box */}
                <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-lg p-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xl">🤖</span>
                    </div>
                    <span className="text-sm font-bold tracking-widest opacity-70 uppercase">
                      {lang === 'ar' ? 'الذراع التقني والذكاء الاصطناعي' : 'Technical & AI Arm'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {lang === 'ar' ? 'شركة كونتاكت بوينت' : 'Contact Point Company'}
                  </h3>
                  <p className="text-white/80">
                    {lang === 'ar'
                      ? 'شريكنا التقني المتخصص في البنية التحتية للذكاء الاصطناعي والأمن السيبراني والتحول الرقمي'
                      : 'Our technology partner specializing in AI infrastructure, cybersecurity, and digital transformation'}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/images/partnership-handshake.jpg"
                alt="Partnership"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-cyber-emerald dark:bg-digital-green text-white p-6 rounded-lg shadow-xl">
                <div className="text-4xl font-bold">20+</div>
                <div className="text-sm">
                  {lang === 'ar' ? 'سنوات من الشراكة' : 'Years of Partnership'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Affiliations */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {content.professionalAffiliations.title}
            </h2>
            <div className="w-24 h-1 bg-cyber-emerald dark:bg-digital-green mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 text-center border border-cyber-emerald/20 hover:shadow-lg hover:border-cyber-emerald/50 transition-all group"
              >
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyber-emerald/10 transition-colors">
                  <Award className="w-8 h-8 text-cyber-emerald dark:text-digital-green" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{cert.name}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">{cert.fullName}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            {lang === 'ar' ? 'لماذا الشراكة معنا؟' : 'Why Partner With Us?'}
          </h2>
          <div className="w-24 h-1 bg-cyber-emerald dark:bg-digital-green mx-auto mb-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-cyber-emerald/10 dark:bg-digital-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-cyber-emerald dark:text-digital-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {lang === 'ar' ? 'الخبرة والثقة' : 'Expertise & Trust'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {lang === 'ar'
                  ? 'فريق متخصص بشهادات مهنية عالية وخبرة دولية'
                  : 'Specialized team with high professional certifications and international experience'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-cyber-emerald/10 dark:bg-digital-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-cyber-emerald dark:text-digital-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {lang === 'ar' ? 'الوصول الإقليمي' : 'Regional Reach'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {lang === 'ar'
                  ? 'تواجد في المملكة العربية السعودية والإمارات ومصر'
                  : 'Presence in Saudi Arabia, UAE, and Egypt'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-cyber-emerald/10 dark:bg-digital-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-10 h-10 text-cyber-emerald dark:text-digital-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {lang === 'ar' ? 'القيم المشتركة' : 'Shared Values'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {lang === 'ar'
                  ? 'التزام بالنزاهة والتميز والابتكار'
                  : 'Commitment to integrity, excellence, and innovation'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-cyber-emerald to-[#0a3d35]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {lang === 'ar' ? 'هل ترغب في الشراكة معنا؟' : 'Interested in Partnering With Us?'}
          </h2>
          <p className="text-xl text-white/80 mb-8">
            {lang === 'ar'
              ? 'نرحب بفرص الشراكة الاستراتيجية'
              : 'We welcome strategic partnership opportunities'}
          </p>
          <a
            href="/contact-us"
            className="inline-block px-10 py-4 bg-white text-cyber-emerald font-bold rounded-lg hover:bg-gray-100 transition-all"
          >
            {lang === 'ar' ? 'تواصل معنا' : 'Get in Touch'}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;
