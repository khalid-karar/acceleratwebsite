import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/PageHero';
import PageWrapper from '../components/PageWrapper';

const Partnerships: React.FC = () => {
  const { lang } = useLanguage();

  const partners = [
    {
      key: 'al-saeed',
      name: lang === 'ar' ? 'شركة السعيد للمحاسبين والمدققين والاستشاريين' : 'Al‑Saeed Accountants, Auditors & Consultants',
      role: lang === 'ar' ? 'شريك المحاسبة والتدقيق' : 'Accounting, Auditing & Advisory Partner',
      bullets: lang === 'ar'
        ? ['خبرة عقود في المحاسبة والتدقيق', 'حلول حوكمة وامتثال مخصصة', 'فريق محترف مع شهادات دولية']
        : ['Decades of accounting & audit experience', 'Tailored governance & compliance solutions', 'Experienced team with international credentials'],
      logo: '/images/partners/al-saeed.png',
      cta: { label: lang === 'ar' ? 'عرض الشريك' : 'View Partner', href: '#' }
    },
    {
      key: 'contact-point',
      name: lang === 'ar' ? 'Contact Point' : 'Contact Point',
      role: lang === 'ar' ? 'شريك التكنولوجيا' : 'Technology Partner',
      bullets: lang === 'ar'
        ? ['بنية تحتية للذكاء الاصطناعي', 'الأمن السيبراني والتحول الرقمي', 'حلول مرنة قابلة للتكامل']
        : ['AI infrastructure & platform engineering', 'Cybersecurity & digital transformation', 'Flexible, integrable technology solutions'],
      logo: '/images/partners/contact-point.png',
      cta: { label: lang === 'ar' ? 'عرض الشريك' : 'View Partner', href: '#' }
    }
  ];

  return (
    <PageWrapper>
      <PageHero
        title={lang === 'ar' ? 'شركاؤنا' : 'Partnerships'}
        backgroundImage="/images/partners-hero.jpg"
        height="md"
        overlay="medium"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {partners.map((p) => (
            <article key={p.key} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col lg:flex-row gap-6 items-start">
              <div className="w-full lg:w-40 flex-shrink-0 flex items-center justify-center">
                <img src={p.logo} alt={p.name} className="h-24 object-contain" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{p.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold mb-4">{p.role}</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                <div className="flex items-center gap-4">
                  <a href={p.cta.href} className="inline-block px-6 py-2 bg-cyber-emerald text-white rounded-md font-semibold hover:bg-[#013626] transition-colors">{p.cta.label}</a>
                  <span className="text-sm text-gray-500">{lang === 'ar' ? 'دور الشريك' : 'Partner role'}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-12 bg-gray-50 dark:bg-gray-900 rounded-lg p-8 border border-cyber-emerald/10">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{lang === 'ar' ? 'كيفية التعاون' : 'How we collaborate'}</h4>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {lang === 'ar'
              ? 'تجمع شراكتنا بين خبرة السعيد في المحاسبة والتدقيق مع قدرات Contact Point في البنية التحتية الرقمية والأمن السيبراني لتقديم حلول متكاملة تدعم الحوكمة، إدارة المخاطر، والتحول الرقمي.'
              : 'Our partnership combines Al‑Saeed’s accounting and audit expertise with Contact Point’s digital infrastructure, AI and cybersecurity capabilities to deliver integrated solutions for governance, risk management, and digital transformation.'}
          </p>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Partnerships;
