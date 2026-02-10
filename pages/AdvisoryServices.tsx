import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/PageHero';

const AdvisoryServices: React.FC = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      serviceOverview: {
        title: "Advisory Services",
        tagline: "Your trusted partner in business excellence.",
        description: "Strategic Risk and AI-Driven Insights with Leading Practices"
      },
      services: {
        title: "Our Advisory Services",
        items: [
          {
            title: "Gap Assessment and Diagnostic Review",
            description: "Comprehensive assessment to identify gaps in your current operations, controls, and processes against industry best practices and regulatory requirements."
          },
          {
            title: "Strategy Development & Implementation",
            description: "End-to-end strategic planning and execution support to align your business objectives with market opportunities and organizational capabilities."
          },
          {
            title: "Operational Turnaround Advisory and Business Transformation",
            description: "Drive organizational change and operational efficiency through structured turnaround strategies and transformation initiatives."
          },
          {
            title: "Internal Controls Assessment",
            description: "Evaluate entity level controls, financial reporting controls, policies & procedures, and delegation of authority matrix to strengthen your control environment."
          },
          {
            title: "Policy and Procedure Development",
            description: "Design and implement robust policies and procedures aligned with regulatory requirements and industry best practices."
          },
          {
            title: "Corporate Governance Framework and Restructuring",
            description: "Develop and enhance corporate governance structures to ensure accountability, transparency, and effective board oversight."
          },
          {
            title: "AI-Powered Enterprise Risk Management (ERM)",
            description: "Leverage artificial intelligence to identify, assess, and mitigate enterprise risks with predictive analytics and real-time monitoring."
          },
          {
            title: "Governance, Risk, and Compliance (GRC) Advisory",
            description: "Integrated GRC solutions that align governance structures, risk management processes, and compliance requirements."
          },
          {
            title: "AI & Machine Learning for Risk Intelligence",
            description: "Deploy advanced AI and ML models to enhance risk detection, prediction, and decision-making capabilities."
          },
          {
            title: "Cybersecurity & AI-Powered Threat Detection",
            description: "Protect your digital assets with AI-driven cybersecurity assessments and threat intelligence solutions."
          },
          {
            title: "Data Privacy & AI Ethics Governance",
            description: "Establish frameworks for responsible AI use, data privacy compliance, and ethical technology governance."
          },
          {
            title: "AI-Enabled Internal Audit & Risk Analytics",
            description: "Transform internal audit functions with AI-powered analytics, continuous monitoring, and automated risk assessment."
          },
          {
            title: "Disaster Recovery, Business Continuity & Crisis Management",
            description: "Develop comprehensive strategies to ensure organizational resilience and rapid recovery from disruptions."
          },
          {
            title: "Sustainability & ESG Risk Advisory with AI Integration",
            description: "Integrate AI into ESG frameworks to monitor environmental, social, and governance risks and opportunities."
          },
          {
            title: "Internal Audit Reviews & Quality Assessments",
            description: "Diagnostic reviews, quality assessments for internal audit functions, and IA framework establishment."
          },
          {
            title: "Cybersecurity & IT Risk Advisory",
            description: "Comprehensive IT risk assessments, security architecture reviews, and technology risk management solutions."
          },
          {
            title: "Anti-Money Laundering (AML) & Financial Crime",
            description: "AML compliance, financial crime prevention, and digital forensics to protect against fraud and illicit activities."
          },
          {
            title: "Digital Transformation & Risk Analytics Advisory",
            description: "Guide your digital transformation journey with risk-aware strategies and advanced analytics capabilities."
          }
        ]
      },
      approach: {
        title: "Our Advisory Approach",
        description: "We combine deep industry expertise with cutting-edge AI and analytics capabilities to deliver strategic insights that drive measurable outcomes. Our collaborative approach ensures that recommendations are practical, implementable, and aligned with your organizational goals."
      },
      cta: "Request Advisory Consultation"
    },
    ar: {
      serviceOverview: {
        title: "الخدمات الاستشارية",
        tagline: "شريكك الموثوق في التميز المؤسسي.",
        description: "المخاطر الاستراتيجية والرؤى المدعومة بالذكاء الاصطناعي مع أفضل الممارسات"
      },
      services: {
        title: "خدماتنا الاستشارية",
        items: [
          {
            title: "تقييم الفجوات والمراجعة التشخيصية",
            description: "تقييم شامل لتحديد الفجوات في عملياتك الحالية والضوابط والإجراءات مقارنة بأفضل الممارسات والمتطلبات التنظيمية."
          },
          {
            title: "تطوير وتنفيذ الاستراتيجية",
            description: "دعم التخطيط الاستراتيجي والتنفيذ الشامل لمواءمة أهداف عملك مع فرص السوق والقدرات التنظيمية."
          },
          {
            title: "استشارات التحول التشغيلي وتحويل الأعمال",
            description: "دفع التغيير التنظيمي والكفاءة التشغيلية من خلال استراتيجيات التحول المنظمة ومبادرات التحويل."
          },
          {
            title: "تقييم الضوابط الداخلية",
            description: "تقييم ضوابط مستوى الكيان وضوابط التقارير المالية والسياسات والإجراءات ومصفوفة تفويض الصلاحيات."
          },
          {
            title: "تطوير السياسات والإجراءات",
            description: "تصميم وتنفيذ سياسات وإجراءات قوية متوافقة مع المتطلبات التنظيمية وأفضل الممارسات."
          },
          {
            title: "إطار حوكمة الشركات وإعادة الهيكلة",
            description: "تطوير وتعزيز هياكل حوكمة الشركات لضمان المساءلة والشفافية والرقابة الفعالة من مجلس الإدارة."
          },
          {
            title: "إدارة المخاطر المؤسسية المدعومة بالذكاء الاصطناعي",
            description: "الاستفادة من الذكاء الاصطناعي لتحديد وتقييم وتخفيف المخاطر المؤسسية مع التحليلات التنبؤية والمراقبة الفورية."
          },
          {
            title: "استشارات الحوكمة والمخاطر والامتثال",
            description: "حلول متكاملة للحوكمة والمخاطر والامتثال تواءم هياكل الحوكمة وعمليات إدارة المخاطر ومتطلبات الامتثال."
          },
          {
            title: "الذكاء الاصطناعي والتعلم الآلي لذكاء المخاطر",
            description: "نشر نماذج الذكاء الاصطناعي والتعلم الآلي المتقدمة لتعزيز قدرات اكتشاف المخاطر والتنبؤ واتخاذ القرار."
          },
          {
            title: "الأمن السيبراني واكتشاف التهديدات بالذكاء الاصطناعي",
            description: "حماية أصولك الرقمية من خلال تقييمات الأمن السيبراني المدعومة بالذكاء الاصطناعي وحلول استخبارات التهديدات."
          },
          {
            title: "خصوصية البيانات وحوكمة أخلاقيات الذكاء الاصطناعي",
            description: "إنشاء أطر للاستخدام المسؤول للذكاء الاصطناعي والامتثال لخصوصية البيانات وحوكمة التكنولوجيا الأخلاقية."
          },
          {
            title: "التدقيق الداخلي وتحليلات المخاطر المدعومة بالذكاء الاصطناعي",
            description: "تحويل وظائف التدقيق الداخلي من خلال التحليلات المدعومة بالذكاء الاصطناعي والمراقبة المستمرة وتقييم المخاطر الآلي."
          },
          {
            title: "التعافي من الكوارث واستمرارية الأعمال وإدارة الأزمات",
            description: "تطوير استراتيجيات شاملة لضمان المرونة التنظيمية والتعافي السريع من الاضطرابات."
          },
          {
            title: "استشارات الاستدامة ومخاطر ESG مع تكامل الذكاء الاصطناعي",
            description: "دمج الذكاء الاصطناعي في أطر ESG لمراقبة المخاطر والفرص البيئية والاجتماعية والحوكمة."
          },
          {
            title: "مراجعات التدقيق الداخلي وتقييمات الجودة",
            description: "المراجعات التشخيصية وتقييمات الجودة لوظائف التدقيق الداخلي وإنشاء إطار التدقيق الداخلي."
          },
          {
            title: "استشارات الأمن السيبراني ومخاطر تقنية المعلومات",
            description: "تقييمات شاملة لمخاطر تقنية المعلومات ومراجعات هندسة الأمان وحلول إدارة مخاطر التكنولوجيا."
          },
          {
            title: "مكافحة غسل الأموال والجرائم المالية",
            description: "الامتثال لمكافحة غسل الأموال ومنع الجرائم المالية والتحقيقات الرقمية للحماية من الاحتيال والأنشطة غير المشروعة."
          },
          {
            title: "استشارات التحول الرقمي وتحليلات المخاطر",
            description: "توجيه رحلة التحول الرقمي من خلال استراتيجيات واعية بالمخاطر وقدرات تحليلية متقدمة."
          }
        ]
      },
      approach: {
        title: "منهجنا الاستشاري",
        description: "نجمع بين الخبرة العميقة في الصناعة وقدرات الذكاء الاصطناعي والتحليلات المتطورة لتقديم رؤى استراتيجية تحقق نتائج قابلة للقياس. يضمن نهجنا التعاوني أن تكون التوصيات عملية وقابلة للتنفيذ ومتوافقة مع أهدافك التنظيمية."
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

export default AdvisoryServices;
