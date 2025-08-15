import React, { useState, useEffect, useRef } from 'react';
import { 
  ExternalLink,
  Github, 
  Radio, 
  Shield,
  Cloud,
  SignalHigh,
  Egg
} from 'lucide-react';
import sinyalkuImage from '../assets/sinyalku-bg.png'; 

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  categories: string[];
  image: string;
  downloadUrl?: string;
  otherUrl?: string;
  githubUrl?: string;
  icon: React.ReactNode;
}

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const sectionRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Final Thesis: Soft-Actor-Critic (SAC) Based Beacon Rate and Transmission Power in Vehicle-to-Vehicle (V2V) Communication',
      description: 'RL-based beacon rate and transmission power optimization for VANETs, maximizing V2V efficiency via Channel Busy Ratio (CBR) and Signal-to-Interference-Noise Ratio (SINR) metrics.',
      technologies: ['Python', 'Pytorch', 'SUMO'],
      categories: ['ml'],
      image: 'https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/albert4183r7/v2v-rl-optimization-dashboard',
      icon: <Radio className="w-6 h-6" />
    },
    {
      id: 2,
      title: 'Egglyze: Cloud Infrastructure for AI Egg Quality Classification via Shell Analysis',
      description: 'AI-powered egg quality classification system based on shell analysis using machine learning, deployed on Cloud, and integrated with mobile development.',
      technologies: ['Python (Flask)', 'Google Cloud Compute Engine', 'Google Cloud Firestore', 'Postman', 'GitHub'],
      categories: ['cloud', 'ml'],
      image: 'https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/orgs/Capstone-Egglyze/repositories',
      otherUrl: 'https://www.canva.com/design/DAGY_8a-meA/dGgHnHOp_rWZK3JcccNjzg/edit?utm_content=DAGY_8a-meA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      icon: <Egg className="w-6 h-6" />
    },
    {
      id: 3,
      title: 'AWS Cloud-based CRUD Student Data Management System',
      description: 'CRUD web application using multiple AWS services for efficient student data management.',
      technologies: ['AWS EC2', 'AWS RDS', 'AWS S3', 'AWS Route 53', 'AWS IAM', 'Javascript', 'MySQL'],
      categories: ['cloud'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/albert4183r7/Cloud-Based-Student-Data-Management-System',
      icon: <Cloud className="w-6 h-6" />
    },
    {
      id: 4,
      title: 'Hoax Detection in Text Using NLP and Deep Learning for Sentiment Analysis',
      description: 'AI-driven deep learning system for detecting hoaxes in democracy-related news using advanced NLP models.',
      technologies: ['Python', 'LSTM', 'BERT', 'TensorFlow', 'NLP', 'Deep Learning', 'Transformers'],
      categories: ['ml'],
      image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/albert4183r7/hoax-detection-NLP',
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: 5,
      title: 'SinyalKu: Network Signal Strength Monitoring and Visualization Platform',
      description: 'A web-based platform that visualizes mobile network signal strength, integrated with a mobile app for seamless data collection and analysis.',
      technologies: ['React.js', 'leaflet.js', 'React Native (Android)', 'Python (FastAPI)', 'SQLAlchemy', 'PostgreSQL'],
      categories: ['fullstack'],
      image: sinyalkuImage,
      githubUrl: 'https://github.com/orgs/Sinyalku-Project/repositories',
      otherUrl: 'https://sinyalku.netlify.app',
      downloadUrl: '../assets/app-release.apk',
      icon: <SignalHigh className="w-6 h-6" />
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'ml', name: 'Machine Learning', count: projects.filter(p => p.categories.includes('ml')).length},
    { id: 'cloud', name: 'Cloud Computing', count: projects.filter(p => p.categories.includes('cloud')).length},
    { id: 'fullstack', name: 'FullStack', count: projects.filter(p => p.categories.includes('fullstack')).length}
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
                  {project.technologies.slice(0, 8).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 8 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
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
                  {project.downloadUrl && (
                    <a
                      href={project.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 rounded-lg transition-colors duration-300"
                      download
                    >
                      Download APK
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;