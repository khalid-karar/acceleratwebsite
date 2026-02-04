import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import InfoGrid from './components/InfoGrid';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
// Page imports
import WhoWeAre from './pages/WhoWeAre';
import EstablishmentLaw from './pages/EstablishmentLaw';
import WhatWeDo from './pages/WhatWeDo';
import FinancialAudit from './pages/FinancialAudit';
import PerformanceAudit from './pages/PerformanceAudit';
import DigitalAudit from './pages/DigitalAudit';
import FAAcademy from './pages/FAAcademy';
import ConsultingAssessments from './pages/ConsultingAssessments';
import OtherAudit from './pages/OtherAudit';
import WhoWeAudit from './pages/WhoWeAudit';
import Partnerships from './pages/Partnerships';
import NewsEvents from './pages/NewsEvents';
import ContactUs from './pages/ContactUs';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FAQ from './pages/FAQ';
import TermsConditions from './pages/TermsConditions';

// Scroll to top on route change
const ScrollToTopOnNavigate: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Page wrapper with footer
const WithFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
);

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState<'ar' | 'en'>('en');
  const [zoom, setZoom] = useState(100);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Apply Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Apply Zoom
  useEffect(() => {
    document.documentElement.style.fontSize = `${zoom}%`;
  }, [zoom]);

  // Apply Language Direction
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // TTS Logic
  const toggleTTS = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const text = document.body.innerText;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang === 'ar' ? 'ar-SA' : 'en-US';
      utterance.rate = 0.9;
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const navProps = {
    darkMode,
    toggleDarkMode: () => setDarkMode(!darkMode),
    lang,
    toggleLang: () => setLang(prev => prev === 'en' ? 'ar' : 'en'),
    zoomIn: () => setZoom(prev => Math.min(prev + 10, 150)),
    zoomOut: () => setZoom(prev => Math.max(prev - 10, 80)),
    isSpeaking,
    toggleTTS
  };

  return (
    <Router>
      <LanguageProvider lang={lang}>
        <ScrollToTopOnNavigate />
        <div className={`min-h-screen flex flex-col overflow-x-hidden transition-colors duration-300 ${lang === 'ar' ? 'font-arabic' : 'font-sans'} bg-gray-50 dark:bg-gray-900`}>
        {/* Header - Sticky & White Background for Branding */}
        <div className="sticky top-0 z-50 bg-white dark:bg-[#002c23] shadow-md transition-colors duration-300">
          <TopBar darkMode={darkMode} />
          <NavBar {...navProps} />
        </div>
        
        <main className="flex-grow flex flex-col">
          <Routes>
            {/* Home - No Footer */}
            <Route path="/" element={<><Hero /><InfoGrid /></>} />
            
            {/* Who We Are - Has its own footer */}
            <Route path="/who-we-are" element={<WhoWeAre />} />
            
            {/* All other pages - With Footer */}
            <Route path="/search/establishment-law" element={<WithFooter><EstablishmentLaw /></WithFooter>} />
            <Route path="/establishment-law" element={<WithFooter><EstablishmentLaw /></WithFooter>} />
            <Route path="/what-we-do" element={<WithFooter><WhatWeDo /></WithFooter>} />
            <Route path="/financial-audit" element={<WithFooter><FinancialAudit /></WithFooter>} />
            <Route path="/performance-audit" element={<WithFooter><PerformanceAudit /></WithFooter>} />
            <Route path="/digital-audit" element={<WithFooter><DigitalAudit /></WithFooter>} />
            <Route path="/faa-academy" element={<WithFooter><FAAcademy /></WithFooter>} />
            <Route path="/fa-academy" element={<WithFooter><FAAcademy /></WithFooter>} />
            <Route path="/consulting-assessments" element={<WithFooter><ConsultingAssessments /></WithFooter>} />
            <Route path="/consulting" element={<WithFooter><ConsultingAssessments /></WithFooter>} />
            <Route path="/other-audit" element={<WithFooter><OtherAudit /></WithFooter>} />
            <Route path="/who-we-audit" element={<WithFooter><WhoWeAudit /></WithFooter>} />
            <Route path="/partnerships" element={<WithFooter><Partnerships /></WithFooter>} />
            <Route path="/news-events" element={<WithFooter><NewsEvents /></WithFooter>} />
            <Route path="/contact-us" element={<WithFooter><ContactUs /></WithFooter>} />
            <Route path="/careers" element={<WithFooter><Careers /></WithFooter>} />
            <Route path="/privacy-policy" element={<WithFooter><PrivacyPolicy /></WithFooter>} />
            <Route path="/faq" element={<WithFooter><FAQ /></WithFooter>} />
            <Route path="/terms-conditions" element={<WithFooter><TermsConditions /></WithFooter>} />
          </Routes>
        </main>
        
        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
      </LanguageProvider>
    </Router>
  );
};

export default App;