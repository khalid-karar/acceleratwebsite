import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/PageHero';

const AssuranceServices: React.FC = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      serviceOverview: {
        title: "Assurance Services",
        tagline: "Your shield in a dynamic world.",
        description: "AI-Enhanced Auditing and Compliance"
      },
      services: {
        title: "Our Assurance Services",
        items: [
          {
            title: "Financial & Regulatory Compliance Audits",
            description: "Comprehensive audits ensuring adherence to financial regulations, reporting standards, and regulatory requirements across industries."
          },
          {
            title: "Cybersecurity Risk & Threat Assessments",
            description: "In-depth evaluation of your cybersecurity posture, identifying vulnerabilities and threats to protect your digital assets."
          },
          {
            title: "Fraud Investigation & Forensic Audits",
            description: "Expert investigation services to detect, investigate, and prevent fraud through forensic analysis and evidence gathering."
          },
          {
            title: "Risk Based & Performance Audits",
            description: "Strategic audits focused on high-risk areas and performance metrics to optimize operations and mitigate risks."
          },
          {
            title: "Quality Assurance Audits",
            description: "Systematic evaluation of quality management systems and processes to ensure consistency and continuous improvement."
          },
          {
            title: "AI-Based Enterprise Fraud Detection & Prevention",
            description: "Leverage artificial intelligence and machine learning to detect anomalies, patterns, and potential fraud in real-time."
          },
          {
            title: "Operational & Strategic Audits",
            description: "Assess operational efficiency and strategic alignment to identify improvement opportunities and optimize performance."
          },
          {
            title: "IT Audit & Cybersecurity Assessments",
            description: "Comprehensive evaluation of IT infrastructure, controls, and security measures against industry standards and best practices."
          },
          {
            title: "Third-Party & Vendor Risk Audits",
            description: "Evaluate and monitor risks associated with third-party relationships, vendors, and supply chain dependencies."
          },
          {
            title: "Corporate Due Diligence & Special Assignments",
            description: "Thorough due diligence investigations and specialized audit engagements for mergers, acquisitions, and strategic decisions."
          },
          {
            title: "Corporate Financial Evaluation",
            description: "Comprehensive assessment of corporate financial health, performance indicators, and value drivers."
          },
          {
            title: "Assets Evaluation",
            description: "Professional valuation of tangible and intangible assets for financial reporting, transactions, and strategic planning."
          },
          {
            title: "Tax Compliance & Financial Reporting Assurance",
            description: "Ensure accuracy and compliance in tax filings and financial reporting in accordance with local and international standards."
          },
          {
            title: "Governance, Risk & Compliance (GRC) Audits",
            description: "Integrated audits assessing the effectiveness of governance structures, risk management, and compliance frameworks."
          },
          {
            title: "Due Diligence Reviews",
            description: "Comprehensive reviews to support investment decisions, partnerships, and strategic transactions with reliable insights."
          },
          {
            title: "Continuous Audit",
            description: "Ongoing audit processes leveraging technology to provide real-time assurance and continuous monitoring of controls."
          },
          {
            title: "Pre-Certification Audits for ISO Standards",
            description: "Gap assessments and readiness audits to prepare your organization for ISO certification across various standards."
          },
          {
            title: "Penetration Testing and Ethical Hacking",
            description: "Simulated cyber attacks to identify security vulnerabilities and test the effectiveness of your defense mechanisms."
          },
          {
            title: "SAP Review and Audit",
            description: "Specialized audits of SAP systems, configurations, access controls, and process workflows for compliance and efficiency."
          },
          {
            title: "Maturity Assessment",
            description: "Comprehensive maturity assessments of GRC, Internal Controls, Performance Management, Board of Directors, and Committees."
          }
        ]
      },
      approach: {
        title: "Our Assurance Methodology",
        description: "Our AI-enhanced assurance methodology combines traditional audit rigor with cutting-edge technology. We leverage advanced analytics, continuous monitoring, and intelligent automation to deliver deeper insights, faster results, and more comprehensive coverage. Our risk-based approach ensures that we focus on what matters most to your organization."
      },
      cta: "Request Assurance Services"
    },
    ar: {
      serviceOverview: {
        title: "خدمات التأكيد",
        tagline: "درعك في عالم متغير.",
        description: "التدقيق والامتثال المعزز بالذكاء الاصطناعي"
      },
      services: {
        title: "خدمات التأكيد لدينا",
        items: [
          {
            title: "تدقيق الامتثال المالي والتنظيمي",
            description: "تدقيق شامل لضمان الالتزام باللوائح المالية ومعايير التقارير والمتطلبات التنظيمية عبر الصناعات."
          },
          {
            title: "تقييم مخاطر الأمن السيبراني والتهديدات",
            description: "تقييم متعمق لوضعك في الأمن السيبراني وتحديد نقاط الضعف والتهديدات لحماية أصولك الرقمية."
          },
          {
            title: "التحقيق في الاحتيال والتدقيق الجنائي",
            description: "خدمات تحقيق متخصصة للكشف عن الاحتيال والتحقيق فيه ومنعه من خلال التحليل الجنائي وجمع الأدلة."
          },
          {
            title: "التدقيق القائم على المخاطر وتدقيق الأداء",
            description: "تدقيق استراتيجي يركز على المناطق عالية المخاطر ومقاييس الأداء لتحسين العمليات وتخفيف المخاطر."
          },
          {
            title: "تدقيق ضمان الجودة",
            description: "تقييم منهجي لأنظمة وعمليات إدارة الجودة لضمان الاتساق والتحسين المستمر."
          },
          {
            title: "كشف ومنع الاحتيال المؤسسي بالذكاء الاصطناعي",
            description: "الاستفادة من الذكاء الاصطناعي والتعلم الآلي للكشف عن الشذوذ والأنماط والاحتيال المحتمل في الوقت الفعلي."
          },
          {
            title: "التدقيق التشغيلي والاستراتيجي",
            description: "تقييم الكفاءة التشغيلية والمواءمة الاستراتيجية لتحديد فرص التحسين وتحسين الأداء."
          },
          {
            title: "تدقيق تقنية المعلومات وتقييمات الأمن السيبراني",
            description: "تقييم شامل للبنية التحتية لتقنية المعلومات والضوابط وإجراءات الأمان مقارنة بمعايير الصناعة وأفضل الممارسات."
          },
          {
            title: "تدقيق مخاطر الأطراف الثالثة والموردين",
            description: "تقييم ومراقبة المخاطر المرتبطة بعلاقات الأطراف الثالثة والموردين وتبعيات سلسلة التوريد."
          },
          {
            title: "العناية الواجبة للشركات والمهام الخاصة",
            description: "تحقيقات شاملة للعناية الواجبة وارتباطات تدقيق متخصصة لعمليات الاندماج والاستحواذ والقرارات الاستراتيجية."
          },
          {
            title: "التقييم المالي للشركات",
            description: "تقييم شامل للصحة المالية للشركات ومؤشرات الأداء ومحركات القيمة."
          },
          {
            title: "تقييم الأصول",
            description: "تقييم مهني للأصول الملموسة وغير الملموسة للتقارير المالية والمعاملات والتخطيط الاستراتيجي."
          },
          {
            title: "تأكيد الامتثال الضريبي والتقارير المالية",
            description: "ضمان الدقة والامتثال في الإقرارات الضريبية والتقارير المالية وفقاً للمعايير المحلية والدولية."
          },
          {
            title: "تدقيق الحوكمة والمخاطر والامتثال",
            description: "تدقيق متكامل لتقييم فعالية هياكل الحوكمة وإدارة المخاطر وأطر الامتثال."
          },
          {
            title: "مراجعات العناية الواجبة",
            description: "مراجعات شاملة لدعم قرارات الاستثمار والشراكات والمعاملات الاستراتيجية برؤى موثوقة."
          },
          {
            title: "التدقيق المستمر",
            description: "عمليات تدقيق مستمرة تستفيد من التكنولوجيا لتوفير التأكيد في الوقت الفعلي والمراقبة المستمرة للضوابط."
          },
          {
            title: "تدقيق ما قبل الشهادة لمعايير ISO",
            description: "تقييمات الفجوات وتدقيق الاستعداد لإعداد مؤسستك لشهادة ISO عبر معايير مختلفة."
          },
          {
            title: "اختبار الاختراق والقرصنة الأخلاقية",
            description: "هجمات إلكترونية محاكاة لتحديد نقاط الضعف الأمنية واختبار فعالية آليات الدفاع لديك."
          },
          {
            title: "مراجعة وتدقيق SAP",
            description: "تدقيق متخصص لأنظمة SAP والتكوينات وضوابط الوصول وسير عمل العمليات للامتثال والكفاءة."
          },
          {
            title: "تقييم النضج",
            description: "تقييمات شاملة لنضج الحوكمة والمخاطر والامتثال والضوابط الداخلية وإدارة الأداء ومجلس الإدارة واللجان."
          }
        ]
      },
      approach: {
        title: "منهجية التأكيد لدينا",
        description: "تجمع منهجية التأكيد المعززة بالذكاء الاصطناعي لدينا بين صرامة التدقيق التقليدي والتكنولوجيا المتطورة. نستفيد من التحليلات المتقدمة والمراقبة المستمرة والأتمتة الذكية لتقديم رؤى أعمق ونتائج أسرع وتغطية أكثر شمولاً. يضمن نهجنا القائم على المخاطر التركيز على ما يهم مؤسستك أكثر."
      },
      cta: "طلب خدمات التأكيد"
    }
  };

  const c = content[lang];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title={c.serviceOverview.title}
        backgroundImage="/images/assurance-services-hero.jpg"
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

export default AssuranceServices;
