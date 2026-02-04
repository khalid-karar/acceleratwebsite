import React from 'react';
import { Building2, Landmark, Heart, Home, Factory, Radio, HardHat, Store } from 'lucide-react';
import { pageContent2 } from '../content/pageContent2';
import { useLanguage } from '../context/LanguageContext';

const WhoWeAudit: React.FC = () => {
  const { lang } = useLanguage();
  const content = pageContent2.whoWeAudit[lang];

  const sectorIcons = [
    { icon: Landmark, color: 'bg-cyber-emerald' },
    { icon: Building2, color: 'bg-[#1a1a2e]' },
    { icon: Heart, color: 'bg-[#e85a4f]' },
    { icon: Home, color: 'bg-[#0f4c75]' },
    { icon: Factory, color: 'bg-[#2d3436]' },
    { icon: Radio, color: 'bg-[#4a4e69]' },
    { icon: HardHat, color: 'bg-[#f07563]' },
    { icon: Store, color: 'bg-[#1b262c]' }
  ];

  // Audit universe items matching FAA design
  const auditUniverse = [
    {
      column: 1,
      items: lang === 'ar' ? [
        'الجهات الحكومية',
        'الهيئات والمجالس الحكومية',
        'الشركات المملوكة كلياً أو جزئياً للحكومة',
        'الشركات التي تضمن الحكومة لها حداً أدنى من الربح',
        'أي منشأة أو جهة يكلفنا بها العميل'
      ] : [
        'Government Departments',
        'Government authorities and councils',
        'Companies owned fully or partially by the client',
        'Companies for which the client guarantees a minimum profit',
        'Any enterprise or entity assigned by the client'
      ]
    },
    {
      column: 2,
      items: lang === 'ar' ? [
        'الوكالات والمؤسسات العامة',
        'أي جهة أخرى ذات صلة',
        'الشركات التي يمتلك فيها العميل حصة',
        'الجهات التي تتلقى دعماً مالياً',
        'الجهات الأخرى المطلوب تدقيقها'
      ] : [
        'Public agencies and corporations',
        'Any other related entity',
        'Companies in which the client holds shares',
        'Entities which receive financial subsidies',
        'Other entities required to be audited'
      ]
    },
    {
      column: 3,
      title: lang === 'ar' ? 'من أيضاً؟' : 'Who else?',
      items: lang === 'ar' ? [
        'أي جهة يحددها العميل لتكون متورطة في مخالفات مالية وإدارية، وفي هذه الحالة يقتصر التدقيق على تلك المخالفات وفقاً للتشريعات السارية.'
      ] : [
        'Any entity identified by the client to be involved in financial and administrative violations, in which case, the audit will be limited to such violations and in accordance with the legislation in force.'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="/images/who-we-audit-hero.jpg"
          alt="Who We Audit"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-emerald/80 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            {lang === 'ar' ? 'من نُدقق' : 'Who We Audit'}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            {lang === 'ar' 
              ? 'تعرف على المزيد عن الجهات التي نخدمها' 
              : 'GET TO KNOW MORE ABOUT OUR AUDITEES'}
          </p>
        </div>
      </section>

      {/* Audit Universe Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-cyber-emerald dark:text-white mb-4">
            {lang === 'ar' ? 'ما الذي يشمله نطاق التدقيق؟' : 'What does the Audit Universe include?'}
          </h2>
          <div className="w-24 h-1 bg-cyber-emerald dark:bg-digital-green mb-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {auditUniverse.map((col, colIdx) => (
              <div key={colIdx} className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg border-t-4 border-cyber-emerald">
                {col.title && (
                  <h3 className="text-xl font-bold text-cyber-emerald dark:text-digital-green mb-6">
                    {col.title}
                  </h3>
                )}
                <ul className="space-y-4">
                  {col.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <span className="text-cyber-emerald dark:text-digital-green mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {content.sectors.title}
          </h2>
          <div className="w-24 h-1 bg-cyber-emerald dark:bg-digital-green mb-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.sectors.sectorsList.map((sector, idx) => {
              const IconComponent = sectorIcons[idx]?.icon || Building2;
              const bgColor = sectorIcons[idx]?.color || 'bg-cyber-emerald';
              
              return (
                <div
                  key={idx}
                  className="group bg-white dark:bg-gray-800 rounded-lg p-6 border border-cyber-emerald/20 hover:shadow-xl hover:border-cyber-emerald/50 transition-all"
                >
                  <div className={`w-14 h-14 ${bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {sector.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {sector.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-cyber-emerald to-[#0a3d35]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {lang === 'ar' ? 'هل تحتاج إلى خدماتنا؟' : 'Need Our Audit Services?'}
          </h2>
          <p className="text-xl text-white/80 mb-8">
            {lang === 'ar'
              ? 'تواصل معنا لمناقشة احتياجاتك'
              : 'Contact us to discuss your requirements'}
          </p>
          <a
            href="/contact-us"
            className="inline-block px-10 py-4 bg-white text-cyber-emerald font-bold rounded-lg hover:bg-gray-100 transition-all"
          >
            {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </a>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAudit;
