import { SiPhp, SiMysql, SiHtml5, SiCss3, SiSwift, SiFigma, SiXcode, SiGit } from 'react-icons/si';
import { TbBrain } from 'react-icons/tb';
import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: "Shelf",
    description: "A SwiftUI book discovery app on the Gutendex API, with 70,000 public domain classics from Project Gutenberg. Browse by genre, search by title or author, save favourites. No account, no API key.",
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
        description: "Real-time search across 70,000+ titles and authors with a four-state state machine (idle, loading, results, and empty) powered by URLSession async/await with response caching."
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
    period: "Oct 2025 to Feb 2026",
    description: "An iOS app that classifies respiratory sounds with an on-device Core ML model, built as my Computer Engineering thesis. The model is 66% accurate, which is the interesting part and the subject of its case study.",
    link: "https://github.com/egemengunel/Coughylyzer",
    icon: "/icons/coughylyzer-icon.png",
    caseStudySlug: "coughylyzer",
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
        url: '/projects/coughylyzer/coughylyzer1.webp',

      },
      {
        type: 'image',
        url: '/projects/coughylyzer/coughylyzer2.webp',

      },
      {
        type: 'image',
        url: '/projects/coughylyzer/coughylyzer3.webp',

      },
      {
        type: 'image',
        url: '/projects/coughylyzer/coughylyzer4.webp',

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
    period: "2025",
    description: "A macOS app that suggests a track from your mood and your surroundings, using a text classification model trained in Create ML. My Swift Student Challenge 2025 submission.",
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
    period: "2024",
    description: "A pet adoption site in PHP and MySQL, with authentication, filtered search, and saved favourites. My first full project with a database behind it.",
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
