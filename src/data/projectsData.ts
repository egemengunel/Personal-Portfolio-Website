import { SiPhp, SiMysql, SiHtml5, SiCss3, SiSwift, SiFigma, SiXcode, SiGit } from 'react-icons/si';
import { TbBrain } from 'react-icons/tb';
import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: "Cosmo Papers",
    description: "A native iOS space-wallpapers app built on NASA's Astronomy Picture of the Day — rebuilt for v2.0 with the complete APOD archive (1995–present), on-device natural-language search, curated cosmic categories, Home Screen widgets, and a Cosmo Plus subscription. SwiftUI + MVVM with a coordinator, Core Data, and iOS 26 Liquid Glass throughout.",
    link: "https://cosmopapers.app",
    linkText: "View on App Store",
    linkIcon: "appstore",
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
        url: '/projects/cosmo-papers/cosmo1.webp',
      },
      {
        type: 'image',
        url: '/projects/cosmo-papers/cosmo2.webp',
      },
      {
        type: 'image',
        url: '/projects/cosmo-papers/cosmo3.webp',
      },
      {
        type: 'image',
        url: '/projects/cosmo-papers/cosmo4.webp',
      },
    ],
    features: [
      {
        title: "Complete NASA Archive",
        description: "Browse the entire Astronomy Picture of the Day catalog from 1995 to today, organized into curated categories like Aurora, Hubble & Webb, Black Holes & Cosmology, Mars, and Spacecraft & Missions."
      },
      {
        title: "Natural-Language Search",
        description: "On-device smart search powered by Apple's NaturalLanguage framework understands queries the way you'd say them out loud — 'aurora over mountains' or 'Saturn' — with built-in voice search and live inline highlighting."
      },
      {
        title: "Widgets & Lock-Screen Wallpapers",
        description: "Preview any image as a lock-screen wallpaper, save in full resolution, favorite what you love, and add rotating cosmos widgets to your Home Screen."
      },
      {
        title: "Cosmo Plus",
        description: "A subscription (RevenueCat + Superwall) that unlocks the full archive, premium categories, smart search, HD saves, on-device translation, and live rotating widgets."
      }
    ]
  },
  {
    title: "Shelf",
    description: "A SwiftUI book discovery app powered by the Gutendex API, giving access to over 70,000 public domain classics from Project Gutenberg. Browse by genre, search by title or author, and save favorites — no account or API key required.",
    link: "https://github.com/egemengunel/Shelf-App",
    icon: "/icons/shelf-icon.jpg",
    techStack: [
      { icon: SiSwift, name: 'Swift' },
      { icon: SiSwift, name: 'SwiftUI' },
      { icon: SiXcode, name: 'Xcode' },
      { icon: SiGit, name: 'Git' }
    ],
    media: [
      {
        type: 'image',
        url: '/projects/shelf/shelf-browse.png',
      },
      {
        type: 'image',
        url: '/projects/shelf/shelf-search.png',
      },
      {
        type: 'image',
        url: '/projects/shelf/shelf-favorites.png',
      },
      {
        type: 'image',
        url: '/projects/shelf/shelf-book-detail.png',
      }
    ],
    features: [
      {
        title: "Genre Carousels",
        description: "Horizontally-scrolling category carousels (Horror, Sci-Fi, Philosophy, History, and more), loaded progressively in batches as you scroll to avoid thundering-herd requests on launch."
      },
      {
        title: "Full-Text Search",
        description: "Real-time search across 70,000+ titles and authors with a four-state state machine — idle, loading, results, and empty — powered by URLSession async/await with response caching."
      },
      {
        title: "Book Detail View",
        description: "Cover image, authors with birth/death years, AI-generated summaries, and genre tags for every book in the Project Gutenberg catalog."
      },
      {
        title: "Local Favorites",
        description: "Save and manage books locally with a persistent FavoritesManager backed by @AppStorage, surviving app restarts without any backend or account required."
      }
    ]
  },
  {
    title: "Coughylyzer",
    description: "An iOS application that analyzes respiratory sounds to identify potential respiratory conditions using machine learning, developed as my Computer Engineering thesis.",
    link: "https://github.com/egemengunel/Coughylyzer",
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
        url: '/projects/coughylyzer/Coughylyzer1.png',

      },
      {
        type: 'image',
        url: '/projects/coughylyzer/Coughylyzer2.png',

      },
      {
        type: 'image',
        url: '/projects/coughylyzer/Coughylyzer3.png',

      },
      {
        type: 'image',
        url: '/projects/coughylyzer/Coughylyzer4.png',

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
    title: "Moodful Music",
    description: "A macOS app that creates personalized tracks based on mood and environment selections using an ML Model. | Swift Student Challange 2025 Submission",
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
        url: '/projects/moodful-music/Moodful Music-1.png',
      },
      {
        type: 'image',
        url: '/projects/moodful-music/Moodful Music-2.png',
      },
      {
        type: 'image',
        url: '/projects/moodful-music/Moodful Music-3.png',
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
    title: "AdoptMe",
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