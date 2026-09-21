import { SiSwift, SiTypescript, SiVuedotjs, SiNuxtdotjs, SiTailwindcss, SiGit, SiFigma, SiXcode, SiSupabase } from 'react-icons/si';
import { TbBrain } from 'react-icons/tb';
import type { Project } from '../types/project';

export const workExperience: Project[] = [
    {
        title: "Lucid",
        role: "Co-Founder, Lead iOS Engineer",
        period: "Jan 2026 to present",
        description: "A study app that turns uploaded notes, slides and PDFs into flashcards, quizzes, and answers from a chat assistant. I designed it and led the iOS build; the backend is my co-founder's. Swift 6, MVVM on @Observable, a typed NetworkClient, and Supabase auth.",
        link: "https://apps.apple.com/us/app/lucid-ai-flashcards-quiz/id6766661083",
        linkText: "View on App Store",
        linkIcon: "appstore",
        icon: "/icons/lucid-icon.png",
        caseStudySlug: "lucid",
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
        role: "Independent iOS Engineer",
        period: "Jan 2026 to Mar 2026",
        description: "Photograph a room and get photorealistic redesigns back, shaped by the style and colour you pick. Replicate runs the model behind Supabase Edge Functions that keep the API key server-side, and RevenueCat gates the Pro styles. Design and build both mine.",
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
        title: "Cosmo Papers",
        role: "Independent iOS Engineer",
        period: "Oct 2025 to Jul 2026",
        description: "A space-wallpapers app built on NASA's Astronomy Picture of the Day, rebuilt for v2.0 around the full 1995 to present archive, on-device natural-language search, Home Screen widgets, and a Cosmo Plus subscription. SwiftUI and MVVM with a coordinator, Core Data, and iOS 26 Liquid Glass throughout.",
        link: "https://cosmopapers.app",
        linkText: "View on App Store",
        linkIcon: "appstore",
        icon: "/icons/cosmo-papers-icon.png",
        caseStudySlug: "cosmo-papers",
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
                description: "On-device smart search powered by Apple's NaturalLanguage framework understands queries the way you'd say them out loud, 'aurora over mountains' or 'Saturn', with built-in voice search and live inline highlighting."
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
        title: "WeDance",
        role: "Fullstack Web Developer Intern",
        period: "Jun 2025 to Sep 2025",
        description: "A dance community platform in Nuxt and Vue. I built the real-time chat on Server-Sent Events with connection recovery, a Facebook event import pipeline, and a calendar sync with iCal parsing, scheduled jobs, and an admin approval step.",
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
];
