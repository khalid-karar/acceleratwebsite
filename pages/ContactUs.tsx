import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { pageContent3 } from '../content/pageContent3';
import { useLanguage } from '../context/LanguageContext';

const ContactUs: React.FC = () => {
  const { lang } = useLanguage();
  const content = pageContent3.contactUs[lang];
  
  const form = useRef<HTMLFormElement>(null);
  
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;

    setStatus('sending');

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_PUBLIC_KEY'
    )
    .then((result) => {
        console.log('Email sent:', result.text);
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
    }, (error) => {
        console.error('Email error:', error.text);
        setStatus('error');
    });
  };

  const subjects = [
    { value: 'general', label: lang === 'ar' ? 'استفسار عام' : 'General Inquiry' },
    { value: 'consulting', label: lang === 'ar' ? 'الاستشارات والتقييمات' : 'Consulting & Assessment' },
    { value: 'audit', label: lang === 'ar' ? 'خدمات التدقيق' : 'Audit Services' },
    { value: 'training', label: lang === 'ar' ? 'التدريب والتطوير' : 'Training & Development' },
    { value: 'careers', label: lang === 'ar' ? 'الوظائف' : 'Careers' },
    { value: 'other', label: lang === 'ar' ? 'أخرى' : 'Other' }
  ];

  return (
    <div className="min-h-screen">
       {/* (Hero and Office Cards sections omitted for brevity as requested) */}

      {/* Contact Form Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Map Section with Contact Info Overlay */}
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden h-[600px] relative shadow-lg group">
              <iframe 
                width="100%" height="100%" id="gmap_canvas" 
                src="https://maps.google.com/maps?q=Riyadh&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0}
                title="Accelerate Consulting Riyadh Office"
                className="w-full h-full filter grayscale-[20%] contrast-[1.1] group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
              
              {/* === ADDED: Contact Info Card Overlay === */}
              <div className={`absolute bottom-6 ${lang === 'ar' ? 'right-6' : 'left-6'} bg-white/95 dark:bg-gray-800/95 backdrop-blur-md p-6 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 max-w-sm w-[calc(100%-3rem)]`}>
                
                {/* Address Item */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-cyber-emerald/10 rounded-lg shrink-0">
                    <MapPin className="w-6 h-6 text-cyber-emerald" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      {lang === 'ar' ? 'مكتبنا الرئيسي' : 'Main Office'}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {lang === 'ar' ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}
                    </p>
                  </div>
                </div>

                {/* Phone Item - NEW NUMBER ADDED HERE */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-cyber-emerald/10 rounded-lg shrink-0">
                    <Phone className="w-6 h-6 text-cyber-emerald" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      {lang === 'ar' ? 'اتصل بنا' : 'Call Us'}
                    </h4>
                    <a 
                      href="tel:0555388824" 
                      dir="ltr" 
                      className="text-sm text-gray-600 dark:text-gray-300 hover:text-cyber-emerald transition-colors font-medium block"
                    >
                      0555388824
                    </a>
                  </div>
                </div>

                {/* Email Item */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyber-emerald/10 rounded-lg shrink-0">
                    <Mail className="w-6 h-6 text-cyber-emerald" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      {lang === 'ar' ? 'البريد الإلكتروني' : 'Email Us'}
                    </h4>
                    <a href="mailto:info@accelerat.sa" className="text-sm text-gray-600 dark:text-gray-300 hover:text-cyber-emerald transition-colors break-all">
                      info@accelerat.sa
                    </a>
                  </div>
                </div>

              </div>
              {/* === END Contact Info Card === */}

            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-cyber-emerald dark:text-white mb-2">
                {lang === 'ar' ? 'تواصل معنا' : 'Get in Touch'}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                {lang === 'ar' ? 'يرجى تعبئة النموذج التالي وسنتواصل معك قريباً' : 'Please complete the following form and we will contact you soon.'}
              </p>

              {status === 'success' ? (
                <div className="text-center py-12 animate-fade-in">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {lang === 'ar' ? 'شكراً لتواصلك!' : 'Thank You!'}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {lang === 'ar' ? 'تم إرسال رسالتك بنجاح' : 'Your message has been sent successfully.'}
                  </p>
                </div>
              ) : (
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        {lang === 'ar' ? 'الاسم' : 'Your Name'} *
                      </label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyber-emerald"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        {lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'} *
                      </label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyber-emerald"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        {lang === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                      </label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyber-emerald"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        {lang === 'ar' ? 'الشركة/المؤسسة' : 'Company/Organization'}
                      </label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyber-emerald"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {lang === 'ar' ? 'الموضوع' : 'Subject'}
                    </label>
                    <select name="subject" value={formData.subject} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyber-emerald"
                    >
                      <option value="">{lang === 'ar' ? 'اختر الموضوع' : 'Select Subject'}</option>
                      {subjects.map(subject => (
                        <option key={subject.value} value={subject.value}>{subject.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {lang === 'ar' ? 'الرسالة' : 'Message'} *
                    </label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyber-emerald resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded-lg">
                        <AlertCircle size={20} />
                        <span className="text-sm">{lang === 'ar' ? 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.' : 'Error sending message. Please try again.'}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-cyber-emerald dark:bg-digital-green text-white font-bold rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {status === 'sending' ? (
                        <span>{lang === 'ar' ? 'جاري الإرسال...' : 'Sending...'}</span>
                    ) : (
                        <>
                           <Send size={20} />
                           {lang === 'ar' ? 'إرسال' : 'Send Message'}
                        </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;