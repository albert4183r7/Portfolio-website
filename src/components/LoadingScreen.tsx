import React from 'react';
import { Radio, Waves, Cloud } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="animate-spin rounded-full h-20 w-20 border-4 border-white border-t-transparent mx-auto"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Cloud className="w-8 h-8 text-white animate-pulse" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Loading Portfolio</h2>
        <p className="text-white/80">Initializing ICT technology expertise...</p>
        <div className="flex justify-center mt-4 space-x-2">
          <Waves className="w-4 h-4 text-white animate-bounce" style={{ animationDelay: '0ms' }} />
          <Radio className="w-4 h-4 text-white animate-bounce" style={{ animationDelay: '150ms' }} />
          <Cloud className="w-4 h-4 text-white animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;