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
    },
    {
      key: 'contact-point',
      name: lang === 'ar' ? 'Contact Point' : 'Contact Point',
      role: lang === 'ar' ? 'شريك التكنولوجيا' : 'Technology Partner',
      bullets: lang === 'ar'
        ? ['بنية تحتية للذكاء الاصطناعي', 'الأمن السيبراني والتحول الرقمي', 'حلول مرنة قابلة للتكامل']
        : ['AI infrastructure & platform engineering', 'Cybersecurity & digital transformation', 'Flexible, integrable technology solutions'],
      logo: '/images/partners/contact-point.png',
    },
    {
      key: 'missan-tech',
      name: lang === 'ar' ? 'شركة ميسان التقنية' : 'Missan Tech Company',
      role: lang === 'ar' ? 'شريك الحلول الرقمية' : 'Digital Solutions Partner',
      bullets: lang === 'ar'
        ? ['تطوير حلول برمجية مبتكرة', 'تحسين وتطوير النظم', 'دعم التحول الرقمي للشركات']
        : ['Innovative software solutions development', 'Systems optimization and enhancement', 'Enterprise digital transformation support'],
      logo: '/images/partners/missan-tech.png',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {partners.map((p) => (
            <article key={p.key} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col gap-6 items-start">
              <div className="w-full flex items-center justify-center h-28">
                <img src={p.logo} alt={p.name} className="max-h-24 object-contain" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{p.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold mb-4">{p.role}</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-12 bg-gray-50 dark:bg-gray-900 rounded-lg p-8 border border-cyber-emerald/10">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{lang === 'ar' ? 'كيفية التعاون' : 'How we collaborate'}</h4>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {lang === 'ar'
            ? ['تجمع شراكتنا بين خبرة السعيد في المحاسبة والتدقيق، وقدرات Contact Point في البنية التحتية الرقمية والأمن السيبراني، وخبرات شركة ميسان التقنية في الحلول الرقمية لتقديم حلول متكاملة تدعم الحوكمة، إدارة المخاطر، والتحول الرقمي.']
              : [`Our partnership combines Al‑Saeed's accounting and audit expertise, Contact Point's digital infrastructure and cybersecurity capabilities, alongside Missan Tech Company\'s digital solutions to deliver integrated approaches for governance, risk management, and digital transformation.`]}
          </p>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Partnerships;
