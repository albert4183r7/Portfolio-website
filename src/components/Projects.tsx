import React, { useState, useEffect, useRef } from 'react';
import { 
  ExternalLink,
  Github, 
  Play, 
  Radio, 
  Shield,
  Brain,
  Cloud
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  categories: string[];
  image: string;
  otherUrl?: string;
  githubUrl?: string;
  icon: React.ReactNode;
  features: string[];
  challenges: string[];
  results: string[];
}

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const sectionRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Final Thesis: Soft-Actor-Critic (SAC) Based Beacon Rate and Transmission Power in Vehicle-to-Vehicle (V2V) Communication',
      description: 'RL-based beacon rate and transmission power optimization for VANETs, maximizing V2V efficiency via Channel Busy Ratio (CBR) and Signal-to-Interference-Noise Ratio (SINR) metrics.',
      longDescription: 'Final thesis project implementing reinforcement learning algorithms to optimize beacon transmission rate and power levels in Vehicle-to-Vehicle (V2V) communication systems, improving channel utilization and reducing interference.',
      technologies: ['Python', 'Pytorch', 'SUMO'],
      categories: ['ml'],
      image: 'https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/albert4183r7/TA-dashboard',
      icon: <Radio className="w-6 h-6" />,
      features: [
        'Reinforcement learning algorithm for dynamic parameter optimization',
        'V2V communication simulation and modeling',
        'Beacon rate and transmission power optimization',
        'Network performance analysis and evaluation',
      ],
      challenges: [
        'Complex vehicular network modeling and simulation',
        'Designing effective reinforcement learning reward functions',
        'Balancing communication reliability with minimum interference',
        'Handling various dynamic network mobility scenario'
      ],
      results: [
        'Improved V2V communication efficiency through RL optimization',
        'Reduced network interference and improve channel usage',
        'Novel approach to vehicular network optimization',
        'Contribution to intelligent transportation systems research'
      ]
    },
    {
      id: 2,
      title: 'Deploying Egglyze: Cloud Infrastructure for AI Egg Quality Classification via Shell Analysis',
      description: 'AI-powered egg quality classification system based on shell analysis using machine learning, deployed on Cloud, and integrated with mobile development.',
      longDescription: 'My role in the cloud computing cohort involves deploying backend APIs using python (Flask) and the ML team\'s model on Google Compute Engine, utilizing Firestore for efficient data storage.',
      technologies: ['Python (Flask)', 'Google Cloud', 'Firestore'],
      categories: ['cloud', 'ml'],
      image: 'https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/orgs/Capstone-Egglyze/repositories',
      otherUrl: 'https://www.canva.com/design/DAGY_8a-meA/dGgHnHOp_rWZK3JcccNjzg/edit?utm_content=DAGY_8a-meA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      icon: <Brain className="w-6 h-6" />,
      features: [
        'AI-powered egg quality classification using machine learning',
        'Real-time shell analysis and defect detection',
        'Mobile application for farmers and quality inspectors',
        'Cloud-based model inference with scalable architecture',
        'Firestore integration for prediction result storage'
      ],
      challenges: [
        'Developing accurate image classification model for egg quality',
        'Optimizing model for real-time inference on mobile devices',
        'Implementing secure cloud-to-mobile data synchronization',
        'Designing scalable cloud infrastructure** for fluctuating user demand'
      ],
      results: [
        'High accuracy egg quality detection system',
        'Efficient cloud deployment on Google Cloud Platform',
        'User-friendly mobile interface for farmers',
        'Successful team collaboration and project delivery'
      ]
    },
    {
      id: 3,
      title: 'AWS Cloud-based CRUD Student Data Management System',
      description: 'CRUD web application using multiple AWS services for efficient student data management.',
      longDescription: 'Collaborated with a partner to develop a full-stack web application leveraging multiple AWS services including EC2, RDS, S3, Route 53, and IAM for secure and efficient student data management with scalable architecture.',
      technologies: ['AWS EC2', 'AWS RDS', 'AWS S3', 'Route 53', 'IAM', 'Javascript', 'MySQL'],
      categories: ['cloud'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/albert4183r7/Cloud-Based-Student-Data-Management-System',
      icon: <Cloud className="w-6 h-6" />,
      features: [
        'Complete CRUD operations for student data management',
        'Secure user authentication and authorization',
        'Scalable database architecture using AWS RDS',
        'File storage and management with AWS S3',
        'Custom domain setup with Route 53'
      ],
      challenges: [
        'Integrating multiple AWS services seamlessly',
        'Implementing secure database access and user management',
        'Designing cost-effective and scalable architecture',
        'Ensuring data security and compliance'
      ],
      results: [
        'Efficient and secure student data management system',
        'Successful multi-service AWS deployment',
        'Cost-effective cloud infrastructure implementation',
        'Gained practical experience with enterprise cloud solutions'
      ]
    },
    {
      id: 4,
      title: 'Hoax Detection in Text Using NLP and Deep Learning for Sentiment Analysis',
      description: 'AI-driven deep learning system for detecting hoaxes in democracy-related news using advanced NLP models.',
      longDescription: 'Work with partner to develop an advanced natural language processing system using LSTM and BERT models to detect hoaxes and misinformation in democracy-related news articles, contributing to information integrity research.',
      technologies: ['Python', 'LSTM', 'BERT', 'TensorFlow', 'NLP', 'Deep Learning', 'Transformers'],
      categories: ['ml'],
      image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/albert4183r7/hoax-detection-NLP',
      icon: <Shield className="w-6 h-6" />,
      features: [
        'Advanced NLP model implementation with LSTM and BERT',
        'Comparative analysis of different deep learning approaches',
        'Democracy-focused news analysis and classification',
        'High accuracy hoax detection and misinformation identification',
        'Comprehensive text preprocessing and feature extraction'
      ],
      challenges: [
        'Complex text preprocessing for various language content',
        'Optimizing model architecture for maximum accuracy',
        'Handling diverse news formats and writing styles',
        'Balancing model complexity with inference speed'
      ],
      results: [
        'Fairly high accuracy hoax detection system for democracy-related content',
        'Successful implementation and comparison of LSTM and BERT models',
        'Valuable contribution to misinformation research',
        'Enhanced understanding of NLP and deep learning techniques'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'ml', name: 'Machine Learning & AI', count: projects.filter(p => p.categories.includes('ml')).length},
    { id: 'cloud', name: 'Cloud Computing', count: projects.filter(p => p.categories.includes('cloud')).length},
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt(entry.target.getAttribute('data-project') || '0');
            setVisibleProjects((prev) => [...prev, projectId]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projects = sectionRef.current?.querySelectorAll('.project-card');
    projects?.forEach((project) => observer.observe(project));

    return () => observer.disconnect();
  }, []);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of ICT technology projects, from AI-powered applications to cloud infrastructure. 
            Each project demonstrates practical application of engineering principles and innovative problem-solving.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center mb-12 gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              data-project={project.id}
              className={`project-card bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                visibleProjects.includes(project.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  {project.icon}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Play className="w-4 h-4" />
                    <span>View Details</span>
                  </button>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 rounded-lg transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.otherUrl && (
                    <a
                      href={project.otherUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 rounded-lg transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-2xl"
                  >
                    ×
                  </button>
                </div>

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {selectedProject.longDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technical Challenges
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Results & Impact
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedProject.results.map((result, index) => (
                      <div key={index} className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-green-700 dark:text-green-300 font-medium">
                            Achievement
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;