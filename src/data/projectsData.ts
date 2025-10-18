import { SiPhp, SiMysql, SiHtml5, SiCss3, SiSwift, SiFigma, SiXcode, SiGit } from 'react-icons/si';
import { TbBrain } from 'react-icons/tb';
import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: "Coughylyzer (Thesis Project)",
    description: "An iOS application that analyzes respiratory sounds to identify potential respiratory conditions using machine learning, developed as my Computer Engineering thesis.",
    link: "#",
    icon: "/icons/coughylyzer-icon.png",
    techStack: [
      { icon: SiSwift, name: 'Swift' },
      { icon: SiSwift, name: 'SwiftUI' },
      { icon: TbBrain, name: 'Core ML' },
      { icon: SiXcode, name: 'Xcode' },
      { icon: SiGit, name: 'Git' }
    ],
    media: [
      {
        type: 'image',
        url: '/projects/coughylyzer/screenshot1.png',

      },
      {
        type: 'image',
        url: '/projects/coughylyzer/screenshot2.png',

      },
      {
        type: 'image',
        url: '/projects/coughylyzer/screenshot3.png',

      },
      {
        type: 'image',
        url: '/projects/coughylyzer/screenshot4.png',

      },
      {
        type: 'image',
        url: '/projects/coughylyzer/screenshot5.png',

      }
    ],
    features: [
      {
        title: "Real-time Audio Analysis",
        description: "Engineering respiratory analysis platform that processes audio input in real-time using AVFoundation for precise sound capture."
      },
      {
        title: "Machine Learning Classification",
        description: "Integrating ML model trained on Coswara dataset that achieves 66% accuracy in respiratory pattern classification with on-device Core ML inference."
      },
      {
        title: "Health Metrics Tracking",
        description: "Building comprehensive chart and scoring system for tracking lung health metrics over time (0-100 scale) with persistent Core Data storage."
      },
      {
        title: "Liquid Glass UI Effects",
        description: "Implemented iOS 26's Liquid Glass effects for morphing UI transitions and dynamic elements, creating smooth state changes during recording."
      }
    ]
  },
  {
    title: "Cosmo Papers",
    description: "A SwiftUI application that showcases NASA's Astronomy Picture of the Day, featuring daily space imagery and educational content.",
    link: "#",
    icon: "/icons/cosmo-papers-icon.png",
    techStack: [
      { icon: SiSwift, name: 'Swift' },
      { icon: SiSwift, name: 'SwiftUI' },
      { icon: SiFigma, name: 'Figma' },
      { icon: SiXcode, name: 'Xcode' },
      { icon: SiGit, name: 'Git' }
    ],
    media: [
      {
        type: 'image',
        url: '/projects/cosmo-papers/screenshot1.png',

      },
      {
        type: 'image',
        url: '/projects/cosmo-papers/screenshot2.jpg',

      },
      {
        type: 'image',
        url: '/projects/cosmo-papers/screenshot3.jpg',

      },
      {
        type: 'image',
        url: '/projects/cosmo-papers/screenshot4.jpg',

      },
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
    title: "Moodful Music",
    description: "A macOS app that creates personalized tracks based on mood and envorinment selections using an ML Model.",
    link: "https://github.com/egemengunel/Moodful-Music",
    icon: "/icons/moodful-music-icon.png",
    techStack: [
      { icon: SiSwift, name: 'Swift' },
      { icon: SiSwift, name: 'SwiftUI' },
      { icon: SiFigma, name: 'Figma' },
      { icon: SiXcode, name: 'Xcode' },
      { icon: SiGit, name: 'Git' }
    ],
    media: [
      {
        type: 'image',
        url: '/projects/moodful-music/screenshot1.png',
      },
      {
        type: 'image',
        url: '/projects/moodful-music/screenshot2.png',
      },
      {
        type: 'image',
        url: '/projects/moodful-music/screenshot3.png',
      },
    ],
    features: [
      {
        title: "Mood-Based Recommendations",
        description: "Get personalized music suggestions based on your current mood and surroundings"
      },
      {
        title: "Core ML Integration",
        description: "Powered by a custom-trained text classification model using Create ML"
      },
      {
        title: "Minimal SwiftUI Design",
        description: "Clean, modern interface with a lightweight and responsive layout"
      },
      {
        title: "Built-in Audio Playback",
        description: "Listen to curated tracks instantly with seamless AVFoundation integration"
      }
    ]

  },
  {
    title: "AdoptMe Website",
    description: "A responsive web application built with PHP that simplifies the pet adoption process, featuring user authentication and favorites system.",
    link: "https://github.com/egemengunel/AdoptMe-Website",
    icon: "/icons/adoptme-website-icon.jpg",
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
        type: 'image',
        url: '/projects/adoptme-website/screenshot1.jpg',
      },
      {
        type: 'image',
        url: '/projects/adoptme-website/screenshot2.jpg',
      },
      {
        type: 'image',
        url: '/projects/adoptme-website/screenshot3.jpg',
      },
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
];