import type { CaseStudy } from '../types/caseStudy';

/**
 * Case studies are ordered deliberately — the index renders them in this order,
 * strongest first. `status` drives how the card behaves:
 *   published — written, linked, indexable
 *   writing   — linked, but the page says it is still being written
 *   planned   — listed as a quiet tile, not linked
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: 'antenna',
    title: 'Antenna',
    tagline: 'Telling someone a spider might be venomous when the model is only half sure.',
    role: 'Design & iOS engineering',
    timeframe: '2026 — in progress',
    status: 'writing',
    platforms: ['iOS'],
    icon: '/icons/antenna-icon.png',
    stack: ['Swift', 'SwiftUI', 'Core ML', 'Sketch'],
    sections: [],
  },
  {
    slug: 'lucid',
    title: 'Lucid',
    tagline: 'A study app with an expressive design system, built solo on the client side.',
    role: 'Co-founder, design system & iOS engineering',
    timeframe: 'Jan 2026 — Jun 2026',
    status: 'writing',
    icon: '/icons/lucid-icon.png',
    platforms: ['iOS'],
    stack: ['Swift 6', 'SwiftUI', 'Supabase', 'MVVM + @Observable'],
    links: [
      {
        label: 'View on App Store',
        href: 'https://apps.apple.com/us/app/lucid-ai-flashcards-quiz/id6766661083',
      },
    ],
    gallery: [
      { type: 'image', url: '/work-experience/lucid/lucid-1.png' },
      { type: 'image', url: '/work-experience/lucid/lucid-2.png' },
      { type: 'image', url: '/work-experience/lucid/lucid-3.png' },
      { type: 'image', url: '/work-experience/lucid/lucid-4.png' },
    ],
    sections: [],
  },
  {
    slug: 'cosmo-papers',
    title: 'Cosmo Papers',
    tagline: 'Rebuilding a shipped wallpaper app around 30 years of NASA archive.',
    role: 'Design & iOS engineering',
    timeframe: '2025 — 2026',
    status: 'writing',
    icon: '/icons/cosmo-papers-icon.png',
    cover: '/projects/cosmo-papers/cosmo1.webp',
    platforms: ['iOS'],
    stack: ['SwiftUI', 'Core Data', 'NaturalLanguage', 'RevenueCat', 'Superwall'],
    links: [{ label: 'View on App Store', href: 'https://cosmopapers.app' }],
    gallery: [
      { type: 'image', url: '/projects/cosmo-papers/cosmo1.webp' },
      { type: 'image', url: '/projects/cosmo-papers/cosmo2.webp' },
      { type: 'image', url: '/projects/cosmo-papers/cosmo3.webp' },
      { type: 'image', url: '/projects/cosmo-papers/cosmo4.webp' },
    ],
    sections: [],
  },
  {
    slug: 'coughylyzer',
    title: 'Coughylyzer',
    tagline: 'An expressive take on iOS 26 Liquid Glass, built the week it landed.',
    role: 'Design & iOS engineering',
    timeframe: '2025',
    status: 'writing',
    icon: '/icons/coughylyzer-icon.png',
    cover: '/projects/coughylyzer/coughylyzer1.webp',
    platforms: ['iOS'],
    stack: ['SwiftUI', 'Core ML', 'AVFoundation'],
    gallery: [
      { type: 'image', url: '/projects/coughylyzer/coughylyzer1.webp' },
      { type: 'image', url: '/projects/coughylyzer/coughylyzer2.webp' },
      { type: 'image', url: '/projects/coughylyzer/coughylyzer3.webp' },
      { type: 'image', url: '/projects/coughylyzer/coughylyzer4.webp' },
    ],
    sections: [],
  },
];

export const getCaseStudy = (slug?: string): CaseStudy | undefined =>
  caseStudies.find((study) => study.slug === slug);
