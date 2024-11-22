import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { SiPhp, SiMysql, SiHtml5, SiCss3, SiSwift, SiFigma, SiXcode, SiGit } from 'react-icons/si';
import { TbBrain } from 'react-icons/tb';
import { Project } from '../types/project';

const projects: Project[] = [
  {
    title: "APOD Daily",
    description: "A SwiftUI application that showcases NASA's Astronomy Picture of the Day, featuring daily space imagery and educational content.",
    link: "https://github.com/egemengunel/APOD-Daily",
    techStack: [
      { icon: SiSwift, name: 'Swift' },
      { icon: SiSwift, name: 'SwiftUI' },
      { icon: SiFigma, name: 'Figma' },
      { icon: SiXcode, name: 'Xcode' },
      { icon: SiGit, name: 'Git' }
    ],
    media: [
      {
        type: 'video',
        url: '/projects/apod-daily/daily-apod-preview.mov',
        thumbnail: '/projects/apod-daily/apod-preview.webp',
        caption: 'APOD Daily App Preview'
      }
    ],
    features: [
      {
        title: "Daily Space Content",
        description: "Fresh astronomical content updated daily from NASA's APOD API"
      },
      {
        title: "Interactive Interface",
        description: "Smooth and intuitive SwiftUI interface with fluid animations"
      },
      {
        title: "Educational Information",
        description: "Detailed explanations and scientific context for each image"
      },
      {
        title: "Offline Support",
        description: "Cache system for viewing previous content without internet"
      }
    ]
  },
  {
    title: "Traveled Website",
    description: "A modern travel planning platform built with PHP and MySQL, helping users discover and organize their travel experiences.",
    link: "https://github.com/egemengunel/Traveled-Website-Project",
    techStack: [
      { icon: SiPhp, name: 'PHP' },
      { icon: SiMysql, name: 'MySQL' },
      { icon: SiHtml5, name: 'HTML5' },
      { icon: SiCss3, name: 'CSS3' },
      { icon: SiGit, name: 'Git' },
      { icon: SiFigma, name: 'Figma' }
    ],
    media: [
      {
        type: 'video',
        url: '/projects/traveled/traveled-website-preview.mov',
        thumbnail: '/projects/traveled/traveled-preview.webp',
        caption: 'Traveled Website Walkthrough'
      }
    ],
    features: [
      {
        title: "Travel Planning",
        description: "Comprehensive tools for planning and organizing trips"
      },
      {
        title: "User Profiles",
        description: "Personalized user accounts with travel preferences and history"
      },
      {
        title: "Destination Discovery",
        description: "Explore popular destinations with detailed information"
      },
      {
        title: "Interactive Maps",
        description: "Visual travel planning with interactive map integration"
      }
    ]
  },
  {
    title: "AdoptMe Website",
    description: "A responsive web application built with PHP that simplifies the pet adoption process, featuring user authentication and favorites system.",
    link: "https://github.com/egemengunel/AdoptMe-Website",
    techStack: [
      { icon: SiPhp, name: 'PHP' },
      { icon: SiMysql, name: 'MySQL' },
      { icon: SiHtml5, name: 'HTML5' },
      { icon: SiCss3, name: 'CSS3' },
      { icon: SiGit, name: 'Git' },
      { icon: SiFigma, name: 'Figma' }
    ],
    media: [
      {
        type: 'video',
        url: '/projects/adoptme/adoptme-website.mov',
        thumbnail: '/projects/adoptme/adoptme-main.png',
        caption: 'AdoptMe Website Walkthrough'
      },
    ],
    features: [
      {
        title: "User Authentication",
        description: "Secure login and registration system with email verification"
      },
      {
        title: "Pet Browse & Filter",
        description: "Advanced search and filtering options for finding the perfect pet"
      },
      {
        title: "Favorites System",
        description: "Save and organize favorite pets with custom collections"
      },
      {
        title: "Responsive Design",
        description: "Fully responsive interface that works on all devices"
      }
    ]
  },
  {
    title: "QUOX (Early Private Development)",
    description: "A SwiftUI-based AI-powered quote generator currently in early private development. The development repository is private as the project evolves.",
    link: "#",
    techStack: [
      { icon: SiSwift, name: 'Swift' },
      { icon: SiSwift, name: 'SwiftUI' },
      { icon: TbBrain, name: 'AI Integration' },
      { icon: SiFigma, name: 'Figma' },
      { icon: SiXcode, name: 'Xcode' },
      { icon: SiGit, name: 'Git' }
    ],
    media: [
      {
        type: 'video',
        url: '/projects/quox/quox-preview.mov',
        thumbnail: '/projects/quox/quox-preview.webp',
        caption: 'QUOX App Preview'
      }
    ],
    features: [
      {
        title: "AI-Powered Quotes",
        description: "Intelligent quote generation based on user preferences and context"
      },
      {
        title: "Modern SwiftUI Interface",
        description: "Clean and intuitive design with smooth animations and transitions"
      },
      {
        title: "Development Status",
        description: "Currently in early private development phase, focusing on core functionality and user experience"
      }
    ]
  }
];

export { projects };
export type { Project };

export function Projects() {
  return (
    <section className="mb-8 md:mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        My Projects
      </h2>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-3 md:px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;