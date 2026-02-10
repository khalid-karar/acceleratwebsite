import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/PageHero';

const ConsultingServices: React.FC = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      serviceOverview: {
        title: "Consulting Services",
        tagline: "Consult, Innovate and Accelerate.",
        description: "Technology-Driven Business Optimization"
      },
      services: {
        title: "Our Consulting Services",
        items: [
          {
            title: "Process Optimization",
            description: "Streamline and enhance business processes to improve efficiency, reduce waste, and maximize productivity across your organization."
          },
          {
            title: "Mergers & Acquisitions (M&A)",
            description: "End-to-end M&A support including target identification, due diligence, valuation, deal structuring, and post-merger integration."
          },
          {
            title: "Corporate Finance & Investment Advisory",
            description: "Strategic financial advisory services for capital raising, investment decisions, financial restructuring, and value creation."
          },
          {
            title: "Regulatory Advisory & Market Entry Strategies",
            description: "Navigate regulatory requirements and develop market entry strategies for expansion into Saudi Arabia and GCC markets."
          },
          {
            title: "Change Management & Business Resilience Consulting",
            description: "Build organizational resilience and lead successful change initiatives with structured methodologies and stakeholder engagement."
          },
          {
            title: "Strategic Planning & Business Model Transformation",
            description: "Develop comprehensive strategic plans and transform business models to capture new opportunities and drive sustainable growth."
          },
          {
            title: "Technology, Information Security & Digital Strategy Consulting",
            description: "Align technology investments with business objectives and develop robust digital and cybersecurity strategies."
          },
          {
            title: "Data Governance and Data Analytics",
            description: "Establish data governance frameworks and leverage analytics to drive data-driven decision making and business insights."
          },
          {
            title: "Business Process Improvement",
            description: "Identify inefficiencies and implement improvements to enhance operational performance and customer satisfaction."
          },
          {
            title: "Operational Efficiency and Cost Optimization",
            description: "Reduce operational costs and improve efficiency through lean methodologies, automation, and process redesign."
          },
          {
            title: "Market Research and Feasibility Studies",
            description: "Comprehensive market analysis and feasibility assessments to support informed investment and expansion decisions."
          },
          {
            title: "Z-Score Model for Financial Analysis",
            description: "Apply Altman Z-Score and other predictive models for financial health assessment, bankruptcy prediction, and credit risk analysis."
          },
          {
            title: "Local Content",
            description: "Support compliance with Saudi local content requirements and develop strategies to maximize local content contributions."
          },
          {
            title: "Prepare for Initial Public Offering (IPO)",
            description: "Comprehensive IPO readiness services including financial preparation, governance enhancement, and regulatory compliance."
          },
          {
            title: "Qualifying Real Estate Developers & Accountants for WAFI",
            description: "Assist real estate developers and accountants in meeting WAFI (off-plan sales) qualification requirements and compliance."
          },
          {
            title: "Financial Management of Real Estate Contributions",
            description: "Specialized financial management services for real estate contributions, escrow account management, and regulatory compliance."
          }
        ]
      },
      approach: {
        title: "Our Consulting Approach",
        description: "We combine strategic thinking with practical execution to deliver consulting solutions that create lasting value. Our technology-driven approach leverages data analytics, AI, and industry best practices to optimize your business operations and accelerate growth. We work as true partners, committed to your success from strategy through implementation."
      },
      cta: "Request Consulting Services"
    },
    ar: {
      serviceOverview: {
        title: "خدمات الاستشارات",
        tagline: "استشر، ابتكر، وتسارع.",
        description: "تحسين الأعمال المدفوع بالتكنولوجيا"
      },
      services: {
        title: "خدمات الاستشارات لدينا",
        items: [
          {
            title: "تحسين العمليات",
            description: "تبسيط وتعزيز العمليات التجارية لتحسين الكفاءة وتقليل الهدر وزيادة الإنتاجية عبر مؤسستك."
          },
          {
            title: "الاندماج والاستحواذ",
            description: "دعم شامل للاندماج والاستحواذ بما في ذلك تحديد الأهداف والعناية الواجبة والتقييم وهيكلة الصفقات والتكامل بعد الاندماج."
          },
          {
            title: "استشارات التمويل المؤسسي والاستثمار",
            description: "خدمات استشارية مالية استراتيجية لجمع رأس المال وقرارات الاستثمار وإعادة الهيكلة المالية وخلق القيمة."
          },
          {
            title: "الاستشارات التنظيمية واستراتيجيات دخول السوق",
            description: "التنقل في المتطلبات التنظيمية وتطوير استراتيجيات دخول السوق للتوسع في المملكة العربية السعودية وأسواق الخليج."
          },
          {
            title: "إدارة التغيير واستشارات مرونة الأعمال",
            description: "بناء المرونة التنظيمية وقيادة مبادرات التغيير الناجحة من خلال منهجيات منظمة وإشراك أصحاب المصلحة."
          },
          {
            title: "التخطيط الاستراتيجي وتحويل نموذج الأعمال",
            description: "تطوير خطط استراتيجية شاملة وتحويل نماذج الأعمال لاغتنام الفرص الجديدة ودفع النمو المستدام."
          },
          {
            title: "استشارات التكنولوجيا وأمن المعلومات والاستراتيجية الرقمية",
            description: "مواءمة استثمارات التكنولوجيا مع أهداف الأعمال وتطوير استراتيجيات رقمية وأمن سيبراني قوية."
          },
          {
            title: "حوكمة البيانات وتحليلات البيانات",
            description: "إنشاء أطر حوكمة البيانات والاستفادة من التحليلات لدفع اتخاذ القرارات المبنية على البيانات ورؤى الأعمال."
          },
          {
            title: "تحسين العمليات التجارية",
            description: "تحديد أوجه القصور وتنفيذ التحسينات لتعزيز الأداء التشغيلي ورضا العملاء."
          },
          {
            title: "الكفاءة التشغيلية وتحسين التكاليف",
            description: "تقليل التكاليف التشغيلية وتحسين الكفاءة من خلال منهجيات لين والأتمتة وإعادة تصميم العمليات."
          },
          {
            title: "أبحاث السوق ودراسات الجدوى",
            description: "تحليل شامل للسوق وتقييمات الجدوى لدعم قرارات الاستثمار والتوسع المستنيرة."
          },
          {
            title: "نموذج Z-Score للتحليل المالي",
            description: "تطبيق نموذج Altman Z-Score والنماذج التنبؤية الأخرى لتقييم الصحة المالية والتنبؤ بالإفلاس وتحليل مخاطر الائتمان."
          },
          {
            title: "المحتوى المحلي",
            description: "دعم الامتثال لمتطلبات المحتوى المحلي السعودي وتطوير استراتيجيات لتعظيم مساهمات المحتوى المحلي."
          },
          {
            title: "الإعداد للطرح العام الأولي",
            description: "خدمات شاملة للاستعداد للطرح العام الأولي بما في ذلك الإعداد المالي وتعزيز الحوكمة والامتثال التنظيمي."
          },
          {
            title: "تأهيل المطورين العقاريين والمحاسبين لوافي",
            description: "مساعدة المطورين العقاريين والمحاسبين في تلبية متطلبات تأهيل وافي (البيع على الخارطة) والامتثال."
          },
          {
            title: "الإدارة المالية للمساهمات العقارية",
            description: "خدمات إدارة مالية متخصصة للمساهمات العقارية وإدارة حسابات الضمان والامتثال التنظيمي."
          }
        ]
      },
      approach: {
        title: "منهجنا الاستشاري",
        description: "نجمع بين التفكير الاستراتيجي والتنفيذ العملي لتقديم حلول استشارية تخلق قيمة دائمة. يستفيد نهجنا المدفوع بالتكنولوجيا من تحليلات البيانات والذكاء الاصطناعي وأفضل ممارسات الصناعة لتحسين عمليات أعمالك وتسريع النمو. نعمل كشركاء حقيقيين ملتزمون بنجاحك من الاستراتيجية إلى التنفيذ."
      },
      cta: "طلب خدمات الاستشارات"
    }
  };

  const c = content[lang];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title={c.serviceOverview.title}
        backgroundImage="/images/consulting-services-hero.jpg"
        height="md"
        overlay="medium"
      />

      <div className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Tagline */}
          <div className="text-center mb-12">
            <p className="text-2xl md:text-3xl font-bold text-cyber-emerald dark:text-digital-green italic mb-4">
              "{c.serviceOverview.tagline}"
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              {c.serviceOverview.description}
            </p>
          </div>

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

export default ConsultingServices;
