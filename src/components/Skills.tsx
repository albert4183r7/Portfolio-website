import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, 
  Network, 
  Cpu,  
  Zap, 
  Database,
  Settings,
  Cloud,
  ExternalLink,
  WashingMachine,
  Computer,
  Signal
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  color: string;
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
  link?: string;
}

const Skills: React.FC = () => {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Web Development',
      color: 'blue',
      skills: [
        {
          name: 'Python',
          icon: <Code className="w-5 h-5" />,
          description: 
          'Flask for backend development, FastAPI for APIs'
        },
        {
          name: 'JavaScript',
          icon: <Settings className="w-5 h-5" />,
          description: 'React.js for frontend development, Node.js for backend development, Express.js for RESTful APIs'
        },
        {
          name: 'HTML/CSS',
          icon: <Code className="w-5 h-5" />,
          description: 'Frontend development with responsive design, Tailwind CSS for styling'
        }
      ]
    },
    {
      title: 'Database',
      color: 'green',
      skills: [
        {
          name: 'MySQL',
          icon: <Database className="w-5 h-5" />,
          description: 'Database management, SQL queries, data modeling'
        },
        {
          name: 'PostgreSQL',
          icon: <Database className="w-5 h-5" />,
          description: 'Advanced database management, complex queries, data integrity'
        },
        {
          name: 'MongoDB',
          icon: <Cloud className="w-5 h-5" />,
          description: 'NoSQL database management, document-oriented storage, data retrieval'
        }
      ]
    },
    {
      title: 'Network & Cloud',
      color: 'purple',
      skills: [
        {
          name: 'Cisco Technologies',
          icon: <Network className="w-5 h-5" />,
          description: 'CCNA course completion - Routing, Switching, Wireless, OSPF (Cisco Packet Tracer)'
        },
        {
          name: 'Huawei Technologies',
          icon: <Cloud className="w-5 h-5" />,
          description: 'HCIA Cloud Service certified, Huawei routing & switching (eNSP)'
        },
        {
          name: 'Google Cloud Platform',
          icon: <Cloud className="w-5 h-5" />,
          description: 'Google Associate Cloud Engineer certified, cloud infrastructure management, deployment, and monitoring'
        },
        {
          name: 'AWS',
          icon: <Cloud className="w-5 h-5" />,
          description: 'Amazon Web Services fundamentals, cloud computing concepts, deployment, and management'
        },
      ]
    },
    {
      title: 'AI & Data',
      color: 'orange',
      skills: [
        {
          name: 'Machine Learning',
          icon: <Computer className="w-5 h-5" />,
          description: 'NLP (LSTM & BERT models), TensorFlow, Deep Reinforcement Learning (PyTorch), scikit-learn, computer vision (OpenCV, YOLO)'
        },
        {
          name: 'Data Analysis',
          icon: <Database className="w-5 h-5" />,
          description: 'Data preprocessing, feature engineering, data visualization (Matplotlib, Seaborn), statistical analysis'
        },
      ]
    },
  ];

  const certifications: Certification[] = [
    {
      name: 'Google Associate Cloud Engineer',
      issuer: 'Google Cloud',
      year: '2025',
      link: 'https://www.credly.com/badges/e2ffbcda-2102-4938-9bc2-a4cb5b5aed95/linked_in_profile'
    },
    {
      name: 'ACA - Cloud Computing',
      issuer: 'Alibaba Cloud',
      year: '2024',
      link: 'https://drive.google.com/file/d/16z3--7-bUHMnEJjVamaSEWAsWRKgSgmG/view?usp=sharing'
    },
    {
      name: 'ACA - Big Data',
      issuer: 'Alibaba Cloud',
      year: '2024',
      link: 'https://drive.google.com/file/d/14yCSRyr0nQn3YzPgSkIdMfyYHfHlpafQ/view?usp=sharing'
    },
    {
      name: 'ACA - Database',
      issuer: 'Alibaba Cloud',
      year: '2024',
      link: 'https://drive.google.com/file/d/1u3fFjMWEDMNnXZMLF8vc6CE0ixj4TFCI/view?usp=sharing'
    },
    {
      name: 'HCIA - Cloud Service V3.0',
      issuer: 'Huawei',
      year: '2023',
      link: 'https://drive.google.com/file/d/1EQm4AnZ8qO-epaPkbQ94rxmH-uJQUfb4/view?usp=sharing'
    },
    {
      name: 'CCNA Course Completion',
      issuer: 'Cisco',
      year: '2023'
    },
    {
      name: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
      issuer: 'Amazon Web Services',
      year: '2024'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillIndex = parseInt(entry.target.getAttribute('data-skill') || '0');
            setVisibleSkills((prev) => [...prev, skillIndex]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const skills = sectionRef.current?.querySelectorAll('.skill-item');
    skills?.forEach((skill) => observer.observe(skill));

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-500 border-blue-500 text-blue-600',
      green: 'bg-green-500 border-green-500 text-green-600',
      purple: 'bg-purple-500 border-purple-500 text-purple-600',
      orange: 'bg-orange-500 border-orange-500 text-orange-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive skill set spanning from software development to cloud infrastructure, 
            with deep expertise in ICT technologies and telecommunications.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? `${getColorClasses(category.color).split(' ')[0]} text-white`
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={index}
              data-skill={index}
              className={`skill-item bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                visibleSkills.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-3 rounded-lg ${getColorClasses(skillCategories[activeCategory].color).split(' ')[0]} text-white`}>
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Certifications & Badges
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center group hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {cert.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {cert.issuer} • {cert.year}
                </p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm transition-colors duration-300"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Languages
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">Indonesian</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Native</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">English</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Professional Working Proficiency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">Chinese</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Full Professional (HSK 5, TOCFL B2)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;