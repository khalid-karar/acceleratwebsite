import React, { createContext, useContext } from 'react';

interface LanguageContextType {
  lang: 'en' | 'ar';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode; lang: 'en' | 'ar' }> = ({ children, lang }) => {
  return (
    <LanguageContext.Provider value={{ lang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
