import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Mail, Phone, Printer } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { lang } = useLanguage();

  const footerLinks = {
    whoWeAre: {
      title: lang === 'ar' ? 'من نحن' : 'Who We Are',
      links: [
        { label: lang === 'ar' ? 'نبذة عنا' : 'About us', href: '/who-we-are#about' },
        { label: lang === 'ar' ? 'رؤيتنا ومهمتنا' : 'Our Mission & Vision', href: '/who-we-are#mission' },
        { label: lang === 'ar' ? 'قيمنا' : 'Our Values', href: '/who-we-are#values' },
        { label: lang === 'ar' ? 'استراتيجيتنا' : 'Our Strategy', href: '/who-we-are#strategy' },
      ]
    },
    establishmentLaw: {
      title: lang === 'ar' ? 'نظام التأسيس' : 'Establishment Law',
      links: [
        { label: lang === 'ar' ? 'البحث' : 'Search', href: '/search/establishment-law' },
      ]
    },
    whatWeDo: {
      title: lang === 'ar' ? 'ماذا نقدم' : 'What We Do',
      links: [
        { label: lang === 'ar' ? 'التدقيق المالي' : 'Financial Audit', href: '/financial-audit' },
        { label: lang === 'ar' ? 'تدقيق الأداء' : 'Performance Audit', href: '/performance-audit' },
        { label: lang === 'ar' ? 'التدقيق الرقمي' : 'Digital Audit', href: '/digital-audit' },
        { label: lang === 'ar' ? 'الأكاديمية' : 'Academy', href: '/fa-academy' },
        { label: lang === 'ar' ? 'الاستشارات' : 'Consulting', href: '/consulting-assessments' },
        { label: lang === 'ar' ? 'خدمات أخرى' : 'Other Services', href: '/other-audit' },
      ]
    },
    whoWeAudit: {
      title: lang === 'ar' ? 'من نُدقق' : 'Who We Audit',
      links: [
        { label: lang === 'ar' ? 'نطاق التدقيق' : 'Audit Universe', href: '/who-we-audit#universe' },
        { label: lang === 'ar' ? 'القطاعات' : 'Sectors', href: '/who-we-audit#sectors' },
      ]
    },
    other: {
      links: [
        { label: lang === 'ar' ? 'الشراكات' : 'Partnerships', href: '/partnerships' },
        { label: lang === 'ar' ? 'الأخبار والفعاليات' : 'News & Events', href: '/news-events' },
        { label: lang === 'ar' ? 'تواصل معنا' : 'Contact Us', href: '/contact-us' },
      ]
    }
  };

  const bottomLinks = [
    { label: lang === 'ar' ? 'الأسئلة الشائعة' : 'FAQ', href: '/faq' },
    { label: lang === 'ar' ? 'الوظائف' : 'Careers', href: '/careers' },
    { label: lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy', href: '/privacy-policy' },
    { label: lang === 'ar' ? 'خريطة الموقع' : 'Sitemap', href: '/sitemap' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          
          {/* Home */}
          <div>
            <Link to="/" className="text-lg font-bold hover:text-digital-green transition-colors">
              {lang === 'ar' ? 'الرئيسية' : 'Home'}
            </Link>
          </div>

          {/* Who We Are */}
          <div>
            <Link to="/who-we-are" className="text-lg font-bold hover:text-digital-green transition-colors block mb-4">
              {footerLinks.whoWeAre.title}
            </Link>
            <ul className="space-y-2">
              {footerLinks.whoWeAre.links.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Establishment Law */}
          <div>
            <Link to="/search/establishment-law" className="text-lg font-bold hover:text-digital-green transition-colors block mb-4">
              {footerLinks.establishmentLaw.title}
            </Link>
            <ul className="space-y-2">
              {footerLinks.establishmentLaw.links.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Do */}
          <div>
            <Link to="/what-we-do" className="text-lg font-bold hover:text-digital-green transition-colors block mb-4">
              {footerLinks.whatWeDo.title}
            </Link>
            <ul className="space-y-2">
              {footerLinks.whatWeDo.links.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Who We Audit */}
          <div>
            <Link to="/who-we-audit" className="text-lg font-bold hover:text-digital-green transition-colors block mb-4">
              {footerLinks.whoWeAudit.title}
            </Link>
            <ul className="space-y-2">
              {footerLinks.whoWeAudit.links.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links + Connect */}
          <div>
            <ul className="space-y-2 mb-8">
              {footerLinks.other.links.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="text-lg font-bold hover:text-digital-green transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div>
              <h4 className="text-sm font-bold text-gray-400 mb-3">
                {lang === 'ar' ? 'تواصل' : 'Connect'}
              </h4>
              <div className="flex gap-4">
                <a href="https://accelerateconsulting.net/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-digital-green transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://accelerateconsulting.net/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-digital-green transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="https://accelerateconsulting.net/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-digital-green transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Last Update & Browser Info */}
            <div className="text-xs text-gray-500 text-center md:text-left">
              <p>{lang === 'ar' ? 'آخر تحديث:' : 'Last update was on'} {new Date().toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
              <p className="mt-1">{lang === 'ar' ? 'يُفضل عرض الموقع باستخدام Chrome, Firefox, Safari, Edge' : 'The site is best viewed using Chrome, Mozilla Firefox, Safari and Edge.'}</p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="mailto:info@accelerat.sa" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} />
                info@accelerat.sa
              </a>
              <a href="tel:+966112345678" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={14} />
                +966 11 234 5678
              </a>
            </div>

            {/* Print & Copyright */}
            <div className="flex items-center gap-6 text-xs text-gray-500">
              <button onClick={() => window.print()} className="flex items-center gap-1 hover:text-white transition-colors">
                <Printer size={14} />
                {lang === 'ar' ? 'طباعة' : 'Print this page'}
              </button>
              <span>© {currentYear}. {lang === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}.</span>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 pt-6 border-t border-white/5">
            {bottomLinks.map((link, idx) => (
              <Link key={idx} to={link.href} className="text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-wider">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
