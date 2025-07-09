import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, Download, Mail, Signal, Waves, Router, 
  MapPin, GraduationCap 
} from 'lucide-react';
import profileImage from '../assets/profile.jpg'; 

const Hero: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const words = [' Networks', ' Cloud', ' Innovation', ' Future'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 animate-pulse">
            <Signal className="w-8 h-8 text-blue-400" />
          </div>
          <div className="absolute top-20 right-20 animate-bounce">
            <Waves className="w-6 h-6 text-teal-400" />
          </div>
          <div className="absolute bottom-20 left-1/4 animate-pulse">
            <Router className="w-10 h-10 text-purple-400" />
          </div>
          <div className="absolute bottom-10 right-10 animate-bounce">
            <Signal className="w-7 h-7 text-blue-500" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm Albert.
                <span className="block mt-2">
                  Building The 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                    {isTyping ? words[currentWord] : ''}
                  </span>
                  <span className="animate-pulse text-blue-600">|</span>
                </span>
              </h1>
              <div className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 space-y-6">
                <div>
                  As a final-year Telecommunication Engineering student, I am deeply  passionate about ICT and building innovative technology infrastructure. Driven to shape tomorrow’s digital transformation, I’m actively seeking opportunities to grow my skills and contribute to impactful projects.
                </div>
                <div>
                  Want to know more? Explore my work or reach out directly. Let’s connect and build the future together!
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Born in Medan, North Sumatra</span>
              </div>
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-4 h-4" />
                <span>Bandung Insitute of Technology</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://drive.google.com/file/d/1iWdKCG_iB4XBw9_qlDvfjpd2fC8G5t7n/view?usp=sharing"
                download="Albert_CV.pdf"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Download CV</span>
                </span>
              </a>
              <a
                href="mailto:albertlie8338@gmail.com"
                className="group px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5 group-hover:animate-pulse" />
                  <span>Get In Touch</span>
                </span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">3.66</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">GPA / 4.00</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">4+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">IT Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">1+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative">
            <div className="relative w-96 h-96 mx-auto">
              {/* Animated background circles */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 animate-pulse" style={{ animationDelay: '2s' }}></div>
              
              {/* Profile image */}
              <div className="absolute inset-6 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Albert" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg animate-bounce">
              <Router className="w-6 h-6 text-blue-500" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
              <Waves className="w-6 h-6 text-teal-500" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;