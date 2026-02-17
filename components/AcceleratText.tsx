import React from 'react';

/**
 * Replaces all occurrences of "ACCELERAT" in a string with a bold-italic styled span.
 * For use in JSX where ACCELERAT should always appear bold and italic.
 */
export const AcceleratText: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  if (!text.includes('ACCELERAT')) {
    return <span className={className}>{text}</span>;
  }

  const parts = text.split(/(ACCELERAT)/g);
  return (
    <span className={className}>
      {parts.map((part, i) =>
        part === 'ACCELERAT' ? (
          <span key={i} className="font-bold italic">ACCELERAT</span>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </span>
  );
};

/**
 * Standalone ACCELERAT brand text component - always renders bold and italic.
 */
export const AcceleratBrand: React.FC<{ suffix?: string; className?: string }> = ({ suffix = '', className = '' }) => (
  <span className={className}>
    <span className="font-bold italic">ACCELERAT</span>{suffix}
  </span>
);

export default AcceleratText;
