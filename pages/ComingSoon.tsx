import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ComingSoonProps {
  title: string;
  description?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ title, description }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center px-6 md:px-12 py-20 bg-gradient-to-br from-cyber-emerald/5 to-transparent dark:from-digital-green/5">
      <div className="max-w-2xl text-center space-y-6">
        <div className="inline-block mb-6">
          <div className="w-24 h-24 rounded-full bg-cyber-emerald/10 dark:bg-digital-green/10 flex items-center justify-center border-2 border-cyber-emerald/30 dark:border-digital-green/30">
            <div className="text-4xl">🚀</div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-cyber-emerald dark:text-white">
          Coming Soon
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
          {title}
        </h2>

        {description && (
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {description}
          </p>
        )}

        <p className="text-base text-gray-600 dark:text-gray-400">
          We're working hard to bring you this page. Check back soon for updates!
        </p>

        <div className="pt-8">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-3 px-8 py-3 bg-cyber-emerald dark:bg-digital-green text-white font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Back to Home
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
