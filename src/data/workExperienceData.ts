import { SiSwift, SiTypescript, SiVuedotjs, SiNuxtdotjs, SiTailwindcss, SiGit, SiFigma, SiXcode, SiSupabase } from 'react-icons/si';
import { TbBrain } from 'react-icons/tb';
import type { Project } from '../types/project';

export const workExperience: Project[] = [
    {
        title: "Lucid",
        description: "Co-Founder, Lead iOS Engineer | Jan. 2026 - June 2026",
        link: "https://apps.apple.com/us/app/lucid-ai-flashcards-quiz/id6766661083",
        linkText: "View on App Store",
        linkIcon: "appstore",
        icon: "/icons/lucid-icon.png",
        techStack: [
            { icon: SiSwift, name: 'Swift' },
            { icon: SiSwift, name: 'SwiftUI' },
            { icon: TbBrain, name: 'AI Assistant' },
            { icon: SiSupabase, name: 'Supabase' },
            { icon: SiXcode, name: 'Xcode' },
            { icon: SiGit, name: 'Git' }
        ],

        media: [
            {
                type: 'image',
                url: '/work-experience/lucid/lucid-1.png',
            },
            {
                type: 'image',
                url: '/work-experience/lucid/lucid-2.png',
            },
            {
                type: 'image',
                url: '/work-experience/lucid/lucid-3.png',
            },
            {
                type: 'image',
                url: '/work-experience/lucid/lucid-4.png',
            }
        ],
        features: [
            {
                title: "Lucid Study Assistant",
                description: "A dedicated Chat tab backed by a conversational AI assistant with persistent chat history, so you can ask questions and work through material interactively."
            },
            {
                title: "Collections",
                description: "Organize study material into collections and drill them in a focused, distraction-free study view built entirely in SwiftUI."
            },
            {
                title: "Quizzes&Flashcards",
                description: "Turn collections into interactive quizzes with stateful answer feedback that reinforces recall and tracks how you respond to each question."
            },
            {
                title: "Modern Architecture",
                description: "Built with Swift 6 on an MVVM + @Observable architecture with environment-based dependency injection, a typed NetworkClient service layer, and Supabase-backed authentication."
            }
        ]
    },
    {
        title: "HomeSketch",
        description: "Independent iOS Engineer | Jan. 2026 - Mar. 2026",
        link: "https://gethomesketch.app",
        linkText: "View on App Store",
        linkIcon: "appstore",
        icon: "/icons/homesketch-icon.png",
        techStack: [
            { icon: SiSwift, name: 'Swift' },
            { icon: SiSwift, name: 'SwiftUI' },
            { icon: TbBrain, name: 'Replicate AI' },
            { icon: SiXcode, name: 'Xcode' },
            { icon: SiGit, name: 'Git' }
        ],
        media: [
            {
                type: 'image',
                url: '/projects/homesketch/homesketch-1.png',
            },
            {
                type: 'image',
                url: '/projects/homesketch/homesketch-2.png',
            },
            {
                type: 'image',
                url: '/projects/homesketch/homesketch-3.png',
            },
            {
                type: 'image',
                url: '/projects/homesketch/homesketch-4.png',
            }
        ],
        features: [
            {
                title: "AI Room Redesign",
                description: "Upload a photo of any room and receive photorealistic AI-generated redesigns powered by the Replicate API, shaped by custom prompts built from your style and color selections."
            },
            {
                title: "Style & Color Customization",
                description: "Choose from a curated set of interior design styles and color palettes to personalize your AI prompt, with Pro-exclusive options gated behind the subscription paywall."
            },
            {
                title: "Supabase Backend & API Proxy",
                description: "Supabase Edge Functions written in TypeScript securely proxy all Replicate API calls, keeping secrets server-side while handling image uploads and storage."
            },
            {
                title: "Subscription & Monetization",
                description: "RevenueCat powers the in-app subscription system with entitlement checks, driving conversion through locked premium styles and color palettes."
            }
        ]
    },
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
                url: '/work-experience/quox/Quox-1.png',
            },
            {
                type: 'image',
                url: '/work-experience/quox/Quox-2.png',
            },
            {
                type: 'image',
                url: '/work-experience/quox/Quox-3.png',
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

