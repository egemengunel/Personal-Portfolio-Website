import { SiPhp, SiMysql, SiHtml5, SiCss3, SiSwift, SiFigma, SiXcode, SiGit } from 'react-icons/si';
import { TbBrain } from 'react-icons/tb';
import type { Project } from '../types/project';

export const projects: Project[] = [
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
        url: 'https://player.vimeo.com/video/1032591004?h=708f6d97be&badge=0&autopause=0&player_id=0&app_id=58479',
        caption: 'APOD Daily App Preview',
        thumbnail: ''
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
    description: "A modern travel blogging platform built with PHP and MySQL, helping users discover and organize their travel experiences.",
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
        url: 'https://player.vimeo.com/video/1032591780?h=a19c024761&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
        caption: 'Traveled Website Walkthrough',
        thumbnail: ''
      }
    ],
    features: [
      {
        title: "Travel Planning",
        description: "Comprehensive tools for planning and organizing trips"
      },
      {
        title: "Advanced Search Functionality",
        description: "Advanced serach function to find places that have been blogged about"
      },
      {
        title: "Destination Discovery",
        description: "Explore popular destinations with detailed information"
      },
      {
        title: "Adding Reviews",
        description: "Easy blog entry options right from the website"
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
        url: 'https://player.vimeo.com/video/1032590859?h=d769a1670e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
        caption: 'AdoptMe Website Walkthrough',
        thumbnail: ''
      }
    ],
    features: [
      {
        title: "User Authentication",
        description: "Secure login and registration system with email"
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
    description: "A joint SwiftUI-based AI-powered quote generator project with a friend,currently in early private development. The repository is kept private for the time being.",
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
        url: 'https://player.vimeo.com/video/1032590894?h=da32acede6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
        caption: 'QUOX App Preview',
        thumbnail: ''
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