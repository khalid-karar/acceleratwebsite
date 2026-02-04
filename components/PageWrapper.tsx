import React from 'react';
import Footer from './Footer';

interface PageWrapperProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, showFooter = true }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        {children}
      </div>
      {showFooter && <Footer />}
    </div>
  );
};

export default PageWrapper;
