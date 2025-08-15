import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, 
  Award,
  Target,
  Cpu,
  Network,
} from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  icon: React.ReactNode;
  categories: string[];
  achievements: string[];
  skills: string[];
}

const OrganizationalExperience: React.FC = () => {
  const [visibleExperiences, setVisibleExperiences] = useState<number[]>([]);
  const [activeExperience, setActiveExperience] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const experiences: Experience[] = [
    {
      id: 1,
      title: 'Head of Programming Division',
      organization: 'ITB Robotics KRSBI-H Humanoid Team',
      period: 'Aug 2023 – May 2024',
      description: 'Led the programming team in developing advanced locomotion dynamics and computer vision systems for humanoid robots.',
      icon: <Cpu className="w-6 h-6" />,
      categories: ['technical', 'leadership'],
      achievements: [
        'Successfully led programming team for humanoid robot development',
        'Manual tuned locomotion dynamics to implement stable robot movement',
        'Developed ball detection system using ROS and OpenCV',
        'Managed robot simulation systems using Linux',
      ],
      skills: ['ROS (Robot Operating System)', 'OpenCV', 'Python', 'C++', 'Ubuntu (Linux)', 'Computer Vision', 'Team Leadership']
    },
    {
      id: 2,
      title: 'Head of Research and Appreciation Works Division',
      organization: 'IMT "Signum" ITB (Telecom Engineering Student Association)',
      period: 'Jul 2023 – Feb 2024',
      description: 'Led a division of 8 members focused on encouraging innovation through in-depth discussions and the development of relevant works in the field of telecommunications.',
      icon: <Users className="w-6 h-6" />,
      categories: ['leadership'],
      achievements: [
        'Successfully managed team of 8 members across various activities',
        'Organized comprehensive four-day technical workshop covering Proxmox virtualization, LoRa wireless technology, and Cisco OSPF networking.',
        'Initiated and managed key programs: telecom study sessions, competition and info sharing, technical workshops, article writing for Propagasi magazine, and member project curation.',
        'Achieved 88% of the division’s vision and mission targets through consistent member engagement.'
      ],
      skills: ['Leadership', 'Team Management', 'Workshop Organization', 'Communication', 'Project Management', 'Telecommunications']
    },
    {
      id: 3,
      title: 'Front-end Developer',
      organization: 'OSKM ITB 2022',
      period: 'Jul 2022 – Aug 2022',
      description: 'Served as a Front-End Developer on the Study Orientation Committee\'s IT Division, building a student-focused website to centralize orientation information using TypeScript and Tailwind CSS.',
      icon: <Network className="w-6 h-6" />,
      categories: ['technical'],
      achievements: [
        'Designed and implemented 9 high-fidelity website pages using Figma',
        'Developed intuitive navigation with interactive hover-effect buttons to enhance user experience',
        'Seamlessly integrated logos from 50+ sponsors/partners, ensuring brand accuracy and visual consistency',
        'Delivered a user-centric information hub supporting student orientation activities'
      ],
      skills: ['Typescript (React)', 'Tailwind CSS', 'Figma', 'Team Collaboration', 'Web Development']
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const experienceId = parseInt(entry.target.getAttribute('data-experience') || '0');
            setVisibleExperiences((prev) => [...prev, experienceId]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const experiences = sectionRef.current?.querySelectorAll('.experience-item');
    experiences?.forEach((experience) => observer.observe(experience));

    return () => observer.disconnect();
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'leadership':
        return 'bg-blue-500';
      case 'technical':
        return 'bg-green-500';
      case 'research':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'leadership':
        return 'Leadership';
      case 'technical':
        return 'Technical';
      case 'research':
        return 'Research';
      default:
        return 'Other';
    }
  };

  return (
    <section id="organizational" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Organizational Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Leadership roles and technical contributions that have shaped my soft skills 
            and ability to drive meaningful impact in academic and professional environments.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              data-experience={experience.id}
              className={`experience-item transition-all duration-300 ${
                visibleExperiences.includes(experience.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-12 h-12 ${getCategoryColor(experience.categories[0])} rounded-lg flex items-center justify-center text-white`}>
                      {experience.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {experience.title}
                          </h3>
                          <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                            {experience.organization}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex flex-wrap gap-2 mt-1">
                            {experience.categories.map((category, index) => (
                              <span
                                key={index}
                                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)} text-white`}
                              >
                                {getCategoryLabel(category)}
                              </span>
                            ))}
                          </div>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {experience.period}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {experience.description}
                      </p>

                      {/* Toggle Button */}
                      <button
                        onClick={() => setActiveExperience(activeExperience === experience.id ? null : experience.id)}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-300"
                      >
                        {activeExperience === experience.id ? 'Show Less' : 'Show More Details'}
                      </button>

                      {/* Expandable Content */}
                      {activeExperience === experience.id && (
                        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Achievements */}
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                                <Award className="w-5 h-5 mr-2 text-yellow-500" />
                                Key Achievements
                              </h4>
                              <ul className="space-y-2">
                                {experience.achievements.map((achievement, achievementIndex) => (
                                  <li key={achievementIndex} className="flex items-start space-x-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                                      {achievement}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Skills */}
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                                <Target className="w-5 h-5 mr-2 text-blue-500" />
                                Skills Developed
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {experience.skills.map((skill, skillIndex) => (
                                  <span
                                    key={skillIndex}
                                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizationalExperience;