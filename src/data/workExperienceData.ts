import { SiSwift, SiTypescript, SiVuedotjs, SiNuxtdotjs, SiTailwindcss, SiGit, SiFigma } from 'react-icons/si';
import type { Project } from '../types/project';

export const workExperience: Project[] = [
    {
        title: "Fullstack Web Developer Intern",
        description: "WeDance (wedance.vip) | June 2024 – Sep. 2024",
        link: "https://wedance.vip",
        techStack: [
            { icon: SiTypescript, name: 'TypeScript' },
            { icon: SiVuedotjs, name: 'Vue.js' },
            { icon: SiNuxtdotjs, name: 'Nuxt.js' },
            { icon: SiTailwindcss, name: 'Tailwind CSS' },
            { icon: SiGit, name: 'Git' }
        ],
        media: [
            {
                type: 'image',
                url: '',
                caption: 'Fullstack Development at WeDance'
            }
        ],
        features: [
            {
                title: "Real-time Chat System",
                description: "Architected and implemented real-time chat system using Server-Sent Events (SSE), enabling persistent messaging with connection recovery mechanisms."
            },
            {
                title: "Facebook Event Integration",
                description: "Built Facebook event import pipeline that automated event data entry process and increased event listings by 40%."
            },
            {
                title: "Calendar Syncing System",
                description: "Developed complete calendar syncing system with iCal parsing, scheduled jobs, and admin approval interfaces for seamless event management."
            },
            {
                title: "Performance & Stability",
                description: "Optimized critical rendering paths to eliminate UI flickering issues and implemented exponential backoff reconnection with error handling for production stability."
            }
        ]
    },
    {
        title: "iOS Developer (Collaboration)",
        description: "QUOX (quox.app) | Oct. 2024 – May. 2025",
        link: "https://quox.app",
        techStack: [
            { icon: SiSwift, name: 'Swift' },
            { icon: SiSwift, name: 'SwiftUI' },
            { icon: SiFigma, name: 'Figma' },
            { icon: SiGit, name: 'Git' }
        ],
        media: [
            {
                type: 'video',
                url: 'https://player.vimeo.com/video/1032590894?h=da32acede6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
                caption: '',
                thumbnail: ''
            }
        ],
        features: [
            {
                title: "SwiftUI App Development",
                description: "Built the iOS app from scratch using SwiftUI for future versions, helping transition from UIKit to modern declarative UI patterns."
            },
            {
                title: "Responsive UI Components",
                description: "Created clean, responsive card layouts that users could easily interact with, enhancing overall user experience."
            },
            {
                title: "Reusable Component System",
                description: "Designed reusable UI components with custom animations that reduced development time for new features by approximately 40%."
            },
            {
                title: "Interactive Animations",
                description: "Added polished animations that made the quote cards more engaging and responsive to user interactions."
            }
        ]
    },

];

