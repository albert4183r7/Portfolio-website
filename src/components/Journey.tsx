import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Award, Briefcase, Users, Lightbulb, Trophy, Cloud, Zap, Target, Globe } from 'lucide-react';

interface JourneyItem {
  id: number;
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'education' | 'achievement' | 'experience' | 'certification';
  details: string[];
}

const Journey: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const journeyItems: JourneyItem[] = [
    {
      id: 1,
      year: '2021-2022',
      title: 'Admitted via SNBP to ITB',
      description: 'Began my journey at ITB, starting with the Preparatory Program (TPB) at STEI (School of Electrical Engineering and Informatics), where I gained my first hands-on programming experience.',
      icon: <BookOpen className="w-6 h-6" />,
      category: 'education',
      details: [
        'Enrolled through SNBP (National Selection for State University Entrance)',
        'Started in TPB STEI (Common First Year - School of Electrical Engineering and Informatics)',
        'First exposure to programming and engineering fundamentals',
        'Built strong foundation in mathematics and physics'
      ]
    },
    {
      id: 2,
      year: '2022',
      title: 'Majoring in Telecommunication Engineering',
      description: 'Redirected to Telecommunication Engineering due to competition, I discovered a passion for ICT through network technologies.',
      icon: <Target className="w-6 h-6" />,
      category: 'education',
      details: [
        'Selected Telecommunication Engineering as major',
        'Initially wanted Computer Science but not selected due to high competition',
        'Determined to find exciting opportunities in telecommunication field',
        'Started exploring network technologies and telecommunications'
      ]
    },
    {
      id: 3,
      year: '2023',
      title: 'First Apprentice at Harisenin.com',
      description: 'Gained first professional experience as a product tester, learning about UI/UX and compatibility testing methodologies.',
      icon: <Briefcase className="w-6 h-6" />,
      category: 'experience',
      details: [
        'Product testing and UI/UX design',
        'Learning testing methodologies and best practices',
        'First exposure to professional work environment',
        'Developed attention to detail and systematic thinking'
      ]
    },
    {
      id: 4,
      year: '2023',
      title: 'UNESCO Youth Research Leadership Experience',
      description: 'Working with 5-person research team studying academic performance of visually impaired children in Indonesian educational system, where I gain first leadership experience.',
      icon: <Users className="w-6 h-6" />,
      category: 'achievement',
      details: [
        'Conducted in-depth interviews at SLB A Pajajaran Bandung',
        'UNESCO Youth as Researchers and Tanoto Student Research Awards program participation held in Jakarta',
        'Work with 5-person research team on presenting our research on SDG #4 to stakeholders',
      ]
    },
    {
      id: 5,
      year: '2023',
      title: 'HCIA Huawei Cloud Certification',
      description: 'Earned first cloud certification, sparking deep interest in cloud computing technologies.',
      icon: <Cloud className="w-6 h-6" />,
      category: 'certification',
      details: [
        'HCIA - Cloud Service V3.0 certification',
        'Mastered Huawei cloud service products',
        'Developed interest in cloud computing',
        'Foundation for future cloud expertise'
      ]
    },
    {
      id: 6,
      year: '2023',
      title: 'ZTE Indonesia Scholarship',
      description: 'Awarded prestigious scholarship as one of four recipients for outstanding academic performance.',
      icon: <Trophy className="w-6 h-6" />,
      category: 'achievement',
      details: [
        'Selected as one of four scholarship awardees',
        'Full scholarship coverage for 4 semesters',
        'Recognition for academic excellence',
        'Opened doors to industry connections'
      ]
    },
    {
      id: 7,
      year: '2024',
      title: 'Active Cloud Certification Journey',
      description: 'Intensively pursued multiple cloud certifications, particularly focusing on Alibaba Cloud technologies.',
      icon: <Zap className="w-6 h-6" />,
      category: 'certification',
      details: [
        'ACA - Cloud Computing certification',
        'ACA - Big Data certification',
        'ACA - Database certification',
      ]
    },
    {
      id: 8,
      year: '2024',
      title: 'ZTE Indonesia Internship',
      description: 'Gained hands-on industry experience as Service Delivery Engineer Intern, working on Building Management System (BMS).',
      icon: <Briefcase className="w-6 h-6" />,
      category: 'experience',
      details: [
        'Service Delivery Engineer Intern position',
        'Troubleshooting and commissioning Building Management Systems',
        'Network switch configuration for BMS and security systems',
        'Cross-division collaboration and problem-solving'
      ]
    },
    {
      id: 9,
      year: '2024',
      title: 'Bangkit Academy & Capstone Project',
      description: 'Completed Dicoding and Google-sponsored cloud computing program and build innovative machine learning capstone project.',
      icon: <Lightbulb className="w-6 h-6" />,
      category: 'achievement',
      details: [
        'Cloud Computing Learning Track at Bangkit Academy',
        'Work with 7-person capstone project team',
        'Deployed ML models and backend APIs on Google Cloud Platform',
      ]
    },
    {
      id: 10,
      year: '2025',
      title: 'Google ACE Certification',
      description: 'Working towards Google Associate Cloud Engineer certification to solidify cloud expertise.',
      icon: <Globe className="w-6 h-6" />,
      category: 'certification',
      details: [
        'Passed Google Associate Cloud Engineer certification',
        'Advanced cloud architecture and deployment skills',
        'Professional-level cloud computing expertise',
        'Industry-recognized cloud competency'
      ]
    },
    {
      id: 11,
      year: '2025',
      title: 'Graduation (July-Expected)',
      description: 'Completing Bachelor of Engineering in Telecommunication Engineering with strong academic record.',
      icon: <Award className="w-6 h-6" />,
      category: 'education',
      details: [
        'B.Eng. in Telecommunication Engineering completion',
        'Current GPA: 3.66/4.00',
        'Solid foundation in ICT and telecommunications',
        'Ready for professional career in industry'
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleItems((prev) => [...prev, itemId]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll('.journey-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'education':
        return 'bg-blue-500';
      case 'achievement':
        return 'bg-green-500';
      case 'experience':
        return 'bg-purple-500';
      case 'certification':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="journey" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From curious beginner to a new graduate ready to dive into the field - every step has shaped my expertise 
            and passion for ICT technology and telecommunications.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-teal-400 rounded-full"></div>

          {/* Journey items */}
          <div className="space-y-12">
            {journeyItems.map((item, index) => (
              <div
                key={item.id}
                data-id={item.id}
                className={`journey-item relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div
                    className={`bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                      visibleItems.includes(item.id)
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                    onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`p-2 rounded-lg ${getCategoryColor(item.category)} text-white`}>
                        {item.icon}
                      </div>
                      <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {item.description}
                    </p>
                    
                    {/* Expandable details */}
                    {activeItem === item.id && (
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                        <ul className="space-y-2">
                          {item.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div
                    className={`w-4 h-4 rounded-full ${getCategoryColor(item.category)} border-4 border-white dark:border-gray-800 transition-all duration-300 ${
                      visibleItems.includes(item.id) ? 'scale-100' : 'scale-0'
                    }`}
                  ></div>
                </div>

                {/* Empty space on the other side */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;