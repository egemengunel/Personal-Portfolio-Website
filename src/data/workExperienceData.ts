import { SiSwift, SiTypescript, SiVuedotjs, SiNuxtdotjs, SiTailwindcss, SiGit, SiFigma } from 'react-icons/si';
import type { Project } from '../types/project';

export const workExperience: Project[] = [
    {
        title: "WeDance",
        description: "Fullstack Web Developer Intern | June 2025 - Sep. 2025",
        link: "https://wedance.vip",
        linkText: "Visit WeDance",
        linkIcon: "/icons/wedance-icon.png",
        icon: "/icons/wedance-icon.png",
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
                url: '/work-experience/wedance/screenshot1.png',
            },
            {
                type: 'image',
                url: '/work-experience/wedance/screenshot2.png',
            },
            {
                type: 'image',
                url: '/work-experience/wedance/screenshot3.png',
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
        title: "QUOX",
        description: "iOS Developer (Collaboration) | Oct. 2024 - May. 2025",
        link: "https://quox.app",
        linkText: "Visit QUOX",
        linkIcon: "/icons/quox-visit-icon.png",
        icon: "/icons/quox-icon.png",
        techStack: [
            { icon: SiSwift, name: 'Swift' },
            { icon: SiSwift, name: 'SwiftUI' },
            { icon: SiFigma, name: 'Figma' },
            { icon: SiGit, name: 'Git' }
        ],
        media: [
            {
                type: 'image',
                url: '/work-experience/quox/screenshot1.png',
            },
            {
                type: 'image',
                url: '/work-experience/quox/screenshot2.png',
            },
            {
                type: 'image',
                url: '/work-experience/quox/screenshot3.png',
            },
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

