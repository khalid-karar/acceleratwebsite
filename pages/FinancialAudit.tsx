import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AcceleratText } from '../components/AcceleratText';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/PageHero';

const AdvisoryServices: React.FC = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      serviceOverview: {
        title: "Advisory Services",
        description: "ACCELERAT provides strategic advisory services that help organizations navigate complex business challenges, drive transformation, and achieve sustainable growth. Our advisory team combines deep industry expertise with innovative methodologies to deliver actionable insights and measurable outcomes."
      },
      services: {
        title: "Our Advisory Services",
        items: [
          {
            title: "Strategic Planning & Transformation",
            description: "Develop comprehensive strategies aligned with your vision, market dynamics, and organizational capabilities to drive sustainable growth."
          },
          {
            title: "Governance & Board Advisory",
            description: "Enhance board effectiveness, corporate governance structures, and decision-making frameworks to meet regulatory requirements and best practices."
          },
          {
            title: "Risk Management Advisory",
            description: "Design and implement enterprise risk management frameworks that identify, assess, and mitigate risks across your organization."
          },
          {
            title: "Regulatory Compliance Advisory",
            description: "Navigate complex regulatory landscapes including SAMA, CMA, NCA, and international standards with confidence and compliance."
          },
          {
            title: "ESG & Sustainability Advisory",
            description: "Develop ESG strategies, sustainability frameworks, and reporting mechanisms aligned with global standards and stakeholder expectations."
          },
          {
            title: "Digital Transformation Advisory",
            description: "Guide your digital journey with strategic roadmaps, technology assessments, and change management expertise."
          }
        ]
      },
      approach: {
        title: "Our Advisory Approach",
        description: "We take a collaborative, insight-driven approach to advisory services. Our methodology combines rigorous analysis with practical implementation support, ensuring that strategic recommendations translate into tangible business results. We work as partners, not just consultants, committed to your long-term success."
      },
      cta: "Request Advisory Consultation"
    },
    ar: {
      serviceOverview: {
        title: "الخدمات الاستشارية",
        description: "تقدم أكسيليريت خدمات استشارية استراتيجية تساعد المؤسسات على التعامل مع التحديات المعقدة ودفع التحول وتحقيق النمو المستدام. يجمع فريقنا الاستشاري بين الخبرة العميقة في الصناعة والمنهجيات المبتكرة لتقديم رؤى قابلة للتنفيذ ونتائج قابلة للقياس."
      },
      services: {
        title: "خدماتنا الاستشارية",
        items: [
          {
            title: "التخطيط الاستراتيجي والتحول",
            description: "تطوير استراتيجيات شاملة متوافقة مع رؤيتك وديناميكيات السوق وقدرات المؤسسة لدفع النمو المستدام."
          },
          {
            title: "استشارات الحوكمة ومجلس الإدارة",
            description: "تعزيز فعالية مجلس الإدارة وهياكل حوكمة الشركات وأطر صنع القرار لتلبية المتطلبات التنظيمية وأفضل الممارسات."
          },
          {
            title: "استشارات إدارة المخاطر",
            description: "تصميم وتنفيذ أطر إدارة المخاطر المؤسسية التي تحدد وتقيم وتخفف المخاطر عبر مؤسستك."
          },
          {
            title: "استشارات الامتثال التنظيمي",
            description: "التنقل في المشهد التنظيمي المعقد بما في ذلك ساما وهيئة السوق المالية والهيئة الوطنية للأمن السيبراني والمعايير الدولية بثقة وامتثال."
          },
          {
            title: "استشارات الاستدامة والحوكمة البيئية والاجتماعية",
            description: "تطوير استراتيجيات الحوكمة البيئية والاجتماعية وأطر الاستدامة وآليات الإبلاغ المتوافقة مع المعايير العالمية وتوقعات أصحاب المصلحة."
          },
          {
            title: "استشارات التحول الرقمي",
            description: "توجيه رحلتك الرقمية من خلال خرائط طريق استراتيجية وتقييمات تقنية وخبرة في إدارة التغيير."
          }
        ]
      },
      approach: {
        title: "منهجنا الاستشاري",
        description: "نتبع نهجاً تعاونياً قائماً على الرؤى في الخدمات الاستشارية. تجمع منهجيتنا بين التحليل الدقيق ودعم التنفيذ العملي، مما يضمن ترجمة التوصيات الاستراتيجية إلى نتائج أعمال ملموسة. نعمل كشركاء وليس مجرد مستشارين، ملتزمون بنجاحك على المدى الطويل."
      },
      cta: "طلب استشارة"
    }
  };

  const c = content[lang];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title={c.serviceOverview.title}
        backgroundImage="/images/advisory-services-hero.jpg"
        height="md"
        overlay="medium"
      />

      <div className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-16 leading-relaxed">
            <AcceleratText text={c.serviceOverview.description} />
          </p>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-cyber-emerald dark:text-white mb-8">
              {c.services.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {c.services.items.map((service, idx) => (
                <div key={idx} className="p-6 bg-gradient-to-br from-cyber-emerald/5 to-transparent dark:from-digital-green/10 rounded-lg border border-cyber-emerald/20 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-cyber-emerald dark:text-digital-green mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Our Approach */}
          <section className="mb-16 p-8 bg-white dark:bg-gray-800 rounded-lg border border-cyber-emerald/20">
            <h2 className="text-3xl font-bold text-cyber-emerald dark:text-white mb-4">
              {c.approach.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {c.approach.description}
            </p>
          </section>

          {/* CTA */}
          <a href="/contact-us" className="inline-flex items-center gap-3 px-10 py-4 bg-cyber-emerald dark:bg-digital-green text-white font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
            {c.cta}
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdvisoryServices;
