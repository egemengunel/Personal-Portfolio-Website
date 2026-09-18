/**
 * Placeholder content for the layout lab at /lab. Not real copy — it exists so
 * the layouts can be judged with realistic text lengths in them. Delete this
 * directory once a layout is chosen.
 */

export const MOCK = {
  title: 'Lucid',
  tagline: 'A study app that had to feel playful without becoming a toy.',
  role: 'Co-founder · Design system & iOS',
  timeframe: 'Jan — Jun 2026',
  platform: 'iOS',
  appStore: 'https://apps.apple.com/us/app/lucid-ai-flashcards-quiz/id6766661083',
  icon: '/icons/lucid-icon.png',

  summary: {
    problem:
      'Study apps look like spreadsheets. The material is already dry, and the interface was making it drier — every screen was a list of grey rows.',
    approach:
      'Give every subject its own colour identity and let that colour carry through the whole session, so the app feels like the subject rather than a container for it.',
    outcome:
      'Collections became the thing people opened the app for. Placeholder outcome line — real numbers go here.',
  },

  hero: '/work-experience/lucid/lucid-2.png',

  gallery: [
    { url: '/work-experience/lucid/lucid-2.png', caption: 'Collections carry a per-subject gradient that follows you into the session.' },
    { url: '/work-experience/lucid/lucid-3.png', caption: 'Quiz feedback is stateful — the card itself answers back.' },
    { url: '/work-experience/lucid/lucid-4.png', caption: 'The chat tab had to feel like a study partner, not a support widget.' },
    { url: '/work-experience/lucid/lucid-1.png', caption: 'Empty states do the teaching.' },
  ],

  sections: [
    {
      id: 'colour',
      heading: 'Colour had to mean something',
      body: [
        'The first version used one accent for the whole app. It was calm and completely forgettable — every subject looked identical, so nothing in the interface told you where you were.',
        'Placeholder paragraph. This is roughly the length a real body paragraph runs, so the measure and leading can be judged honestly rather than against one short line of filler text.',
      ],
      media: '/work-experience/lucid/lucid-2.png',
    },
    {
      id: 'feedback',
      heading: 'What I rejected',
      body: [
        'Placeholder paragraph describing an approach that was tried and abandoned, and the specific reason it failed. This is the part hiring managers actually read.',
      ],
      media: '/work-experience/lucid/lucid-3.png',
    },
  ],

  palette: [
    { name: 'Chemistry', value: '#F472B6' },
    { name: 'History', value: '#7FB89B' },
    { name: 'Mathematics', value: '#8B7DF0' },
    { name: 'Languages', value: '#F5A97F' },
    { name: 'Ink', value: '#1F2937' },
    { name: 'Paper', value: '#FAFAF9' },
  ],

  type: [
    { label: 'Display', sample: 'Collections', className: 'text-4xl font-bold tracking-tight' },
    { label: 'Title', sample: 'Organic Chemistry', className: 'text-2xl font-semibold' },
    { label: 'Body', sample: 'Every subject sorted, every session tracked.', className: 'text-base' },
    { label: 'Caption', sample: '24 cards · last studied Tuesday', className: 'text-xs text-gray-400' },
  ],

  stack: ['Swift 6', 'SwiftUI', 'Supabase', 'MVVM + @Observable'],
};
