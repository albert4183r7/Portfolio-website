import React, { useState, useEffect, useRef } from 'react';
import { 
  Target, 
  Heart, 
  Lightbulb, 
  Users, 
  Globe,
  Zap,
  Code,
  Coins,
  Blocks
} from 'lucide-react';

const PersonalBrand: React.FC = () => {
  const [visibleElements, setVisibleElements] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState<string>('values');
  const sectionRef = useRef<HTMLElement>(null);

  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Continuous Learning',
      description: 'Passionate about staying current with emerging technologies and continuously expanding knowledge in cloud computing, ICT, and blockchain technologies.',
      color: 'yellow'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaboration & Communication',
      description: 'Love connecting with people and refining communication skills, demonstrated through leadership roles and team projects.',
      color: 'blue'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Technical Excellence',
      description: 'Committed to mastering both theoretical foundations and practical applications in cloud computing, network design, AI, and web development.',
      color: 'green'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Innovation & Problem Solving',
      description: 'Enjoy tackling complex technical challenges and finding innovative solutions through problem solving and creative thinking.',
      color: 'red'
    }
  ];

  const vision = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Cloud Engineer & Solution Architect',
      description: 'Aspiring to become a leading expert in cloud infrastructure and solution architecture, contributing to Indonesia\'s digital transformation and enterprise cloud adoption.',
      timeline: '1st Career Goal'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Network Infrastructure Specialist',
      description: 'Developing expertise in network engineering and telecommunications infrastructure, focusing on scalable and efficient network solutions.',
      timeline: '2nd Career Goal'
    },
    {
      icon: <Blocks className="w-8 h-8" />,
      title: 'Web3 & Blockchain Innovation',
      description: 'Exploring emerging technologies in Web3, blockchain, and cryptocurrency, aiming to develop new expertise in decentralized technologies.',
      timeline: 'Interest'
    }
  ];

  const interests = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Engineering & Development',
      description: 'Passionate about developing innovative solutions and building systems that solve real-world problems.'
    },
    {
      icon: <Coins className="w-6 h-6" />,
      title: 'Web3 & Cryptocurrency',
      description: 'Interested in blockchain technology, decentralized applications, and the future of digital finance.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Mental Arithmetic',
      description: 'Enjoy mathematical challenges and mental calculations, which enhance problem solving skills.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Traveling & Entertainment',
      description: 'Love exploring new places and cultures, enjoying various forms of entertainment and leisure activities.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementIndex = parseInt(entry.target.getAttribute('data-element') || '0');
            setVisibleElements((prev) => [...prev, elementIndex]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.brand-element');
    elements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color: string) => {
    const colors = {
      yellow: 'bg-yellow-500 text-yellow-600',
      blue: 'bg-blue-500 text-blue-600',
      green: 'bg-green-500 text-green-600',
      red: 'bg-red-500 text-red-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Albert
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Born in Medan, North Sumatra, as the second child. From small town to high school in Medan, 
            then ventured to Bandung for higher education at ITB. Driven by passion for ICT innovation 
            and committed to building tomorrow's technology infrastructure.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            {[
              { id: 'values', label: 'Core Values', icon: <Heart className="w-4 h-4" /> },
              { id: 'vision', label: 'Vision & Goals', icon: <Target className="w-4 h-4" /> },
              { id: 'interests', label: 'Interests', icon: <Lightbulb className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Core Values Tab */}
        {activeTab === 'values' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                data-element={index}
                className={`brand-element bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  visibleElements.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg ${getColorClasses(value.color).split(' ')[0]} flex items-center justify-center mb-4 text-white`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Vision & Goals Tab */}
        {activeTab === 'vision' && (
          <div className="space-y-8">
            {vision.map((item, index) => (
              <div
                key={index}
                data-element={index}
                className={`brand-element flex items-start space-x-6 bg-gray-50 dark:bg-gray-800 rounded-lg p-8 transition-all duration-300 ${
                  visibleElements.includes(index)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                }`}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                      {item.timeline}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Interests Tab */}
        {activeTab === 'interests' && (
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  data-element={index}
                  className={`brand-element bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                    visibleElements.includes(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center mb-4 text-white">
                    {interest.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {interest.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Personal Background */}
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Personal Background
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Early Life & Education
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Born in Medan, North Sumatra (2nd child)</li>
                    <li>• Completed elementary through high school in Medan</li>
                    <li>• Moved to Bandung for undergraduate studies at ITB</li>
                    <li>• Chose to explore new horizons for higher education</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Current Interests & Hobbies
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Mental arithmetic and mathematical challenges</li>
                    <li>• Traveling and exploring new cultures</li>
                    <li>• Entertainment and leisure activities</li>
                    <li>• Web3, blockchain, and cryptocurrency technologies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Make an Impact
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm excited to bring my passion for ICT technology and telecommunications engineering to your team. 
              Let's build the future of connectivity and innovation together.
            </p>
            <a 
              href="https://www.linkedin.com/in/a-albert/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-block"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalBrand;