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
    timeframe: '2026, in progress',
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
    timeframe: 'Jan 2026 to Jun 2026',
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
    timeframe: '2025 to 2026',
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
    tagline: "A cough classifier that is only 66% accurate, and an interface I designed before I knew that.",
    role: 'Design & iOS engineering, bachelor thesis',
    timeframe: 'Oct 2025 to Feb 2026',
    status: 'published',
    icon: '/icons/coughylyzer-icon.png',
    cover: '/projects/coughylyzer/coughylyzer1.webp',
    platforms: ['iOS'],
    stack: ['Swift', 'SwiftUI', 'Core ML', 'AVFoundation', 'Liquid Glass'],
    links: [{ label: 'View on GitHub', href: 'https://github.com/egemengunel/Coughylyzer' }],
    gallery: [
      { type: 'image', url: '/projects/coughylyzer/coughylyzer1.webp' },
      { type: 'image', url: '/projects/coughylyzer/coughylyzer2.webp' },
      { type: 'image', url: '/projects/coughylyzer/coughylyzer3.webp' },
      { type: 'image', url: '/projects/coughylyzer/coughylyzer4.webp' },
    ],
    summary: {
      problem:
        "Health data is private and heavily regulated, so there is very little public cough data to train on. The accuracy ceiling was set before I wrote any code.",
      approach:
        "Train the classifier for my thesis, then build an iOS app around it that shows a result without pretending to be a medical device.",
      outcome:
        "66% accuracy and 0.3761 recall on abnormal coughs, which is roughly where the published work sits. It was never submitted to the App Store.",
    },
    metrics: [
      { label: 'Test accuracy', value: '66%' },
      { label: 'Macro F1, test split', value: '0.5694' },
      { label: 'Abnormal recall', value: '0.3761' },
      { label: 'People in the dataset', value: '2,635' },
    ],
    designSystem: {
      heading: 'The system underneath',
      note: "Three accents, four score bands, and a mesh gradient built out of the accents themselves. These are the values from the shipped asset catalog, not the ones I drew.",
      palette: [
        { name: 'Accent primary', value: '#66C8CA' },
        { name: 'Accent secondary', value: '#437EB4' },
        { name: 'Accent tertiary', value: '#2F3D4E' },
        { name: 'Mesh green', value: '#A3F29E' },
        { name: 'Needs attention', value: '#EC5E73' },
        { name: 'Fair', value: '#F3AF77' },
        { name: 'Good', value: '#FCEC60' },
        { name: 'Excellent', value: '#98E189' },
      ],
      typeScale: [
        { label: 'Heading 1', sample: '83', size: '4rem', weight: 700, tracking: '-0.02em' },
        { label: 'Heading 2', sample: 'Record', size: '4rem', weight: 400, tracking: '-0.02em' },
        { label: 'Heading 3', sample: 'Four Things You Should Know', size: '1.375rem', weight: 700 },
        { label: 'Heading 4', sample: 'Lung Score', size: '1.25rem', weight: 600 },
        { label: 'Heading 5', sample: 'Excellent Score', size: '1.0625rem', weight: 600 },
        { label: 'Body', sample: 'Find a quiet environment with minimal background noise', size: '1.0625rem', weight: 400 },
      ],
    },
    sections: [
      {
        id: 'ceiling',
        heading: 'The ceiling was set by the data, not by me',
        body: [
          "Health data is private and heavily regulated, which is the right call, but it means there is almost no public cough data to train on. The research is thin as well. There are a handful of papers suggesting your cough carries some signal about your respiratory health, and not a lot beyond that.",
          "I trained on Coswara, which is crowdsourced: 2,635 people recorded between April 2020 and February 2022, predominantly in India. I tried merging it with COUGHVID, I tried embedding pipelines and transfer learning with HeAR, and none of it beat a hybrid model that combines a log-mel spectrogram branch with four peak-energy features, trained in phases so the CNN did not overpower the small MLP.",
          "The final model gets 66% accuracy and 0.5694 Macro F1 on the held-out test split, which is roughly where the published work sits. I split the data by participant rather than by clip, so the same person could not appear in both training and test. That is a common way these numbers get inflated.",
          "The number that actually matters is abnormal recall: 0.3761. Out of 218 genuinely abnormal coughs in the test set, the model caught 82 and missed 136. For a screening tool the misses are the serious failure, and my thesis conclusion says it plainly: sensitivity is insufficient for clinical decision-making.",
        ],
      },
      {
        id: 'protocol',
        heading: 'The interface is part of the measurement',
        body: [
          "The app cannot tell whether you actually coughed three times. There is no recording quality validation in it. It takes three clips, picks the highest energy one second segment out of each, and classifies that. If you cough weakly, or a door slams, the segment it picks might not contain a cough at all.",
          "I could not fix that in code inside the scope of the thesis, so I did it in the interface. The guide gives one instruction per screen: find a quiet room, sit upright and hold the phone 30cm from your mouth at chest level, then produce three natural coughs in succession. One step at a time rather than a list, because a list gets skimmed and these steps are the measurement protocol.",
          "Before any of that there are four disclaimers you have to pass through. It cannot diagnose pneumonia or COVID-19, it cannot detect a respiratory emergency, it is not a substitute for professional advice, and talk to a doctor if you have symptoms.",
          "The three recordings get averaged, which is a real accuracy decision, but it is also a UX one. The model runs almost instantly, so I could have shown a result after a single cough. Three recordings with a progress count make the result feel earned, and for health data I think that matters.",
        ],
        media: [
          {
            type: 'image',
            url: '/case-studies/coughylyzer/2026-09/protocol.webp',
            caption: 'Four disclaimers before recording, then one instruction per screen. The guide is doing a job the code does not do.',
          },
        ],
      },
      {
        id: 'designed-first',
        heading: 'I designed this app before I trained the model',
        body: [
          "This is the part I would change. I designed the interface first, and at the time I was picturing a classifier that would mostly get it right. A 0 to 100 score and a gauge made sense for that, because you can put a number on a chart and watch it over time, which you cannot really do with \"likely fine\".",
          "Then the model came back at 66% accuracy and 0.3761 recall on abnormal coughs, and the interface never changed to match it.",
          "The score is built from the model's normal probability: 60 points of base, 30 for the gap between normal and abnormal, and 10 for confidence. I picked those weights because they made the range feel right, not because they came from anything.",
          "Here is what that produces. If the model is completely undecided, both probabilities at 0.5, the score lands on 35 and the app says Needs Attention and tells you to consult a healthcare provider. If the model is confidently wrong, which is the failure mode I actually have, the score lands in the 80s and the app says Excellent Score, clear airways, good lung health. There is no hedge on that screen.",
          "So the cautious path is wired to uncertainty, and my model's errors do not look like uncertainty. They look like confidence. I built a safety mechanism for the wrong failure.",
          "I cannot tell you how the false negatives were distributed across confidence, because the training artifacts were on a rented cloud machine I no longer have access to. If they cluster near 0.5 then the caution path catches some of them. I have no way to check.",
          "If I picked this up again, the first change would be to stop rendering a number at all when confidence is near 0.5, and say the recording was not clear enough instead. A measurement failure and a health finding are different things, and the score collapses them into one.",
        ],
        media: [
          {
            type: 'image',
            url: '/case-studies/coughylyzer/2026-09/result.webp',
            caption: 'A score of 83 reads as a measurement. It is one probability from a model that misses 62% of abnormal coughs.',
          },
        ],
      },
      {
        id: 'liquid-glass',
        heading: "What is Apple's and what is mine",
        body: [
          "Everything glass in here is stock. The tab bar, the buttons, the glass effect on the lung icon, the SF Symbols. I did not rebuild Liquid Glass, I adopted it, and it sits on mesh gradients because that is what Apple's guidelines ask for. Glass wants rich content behind it, and it resamples whatever is underneath so it stays legible.",
          "What is mine is the animated mesh gradient, the gauge, the chart, and the choreography of the recording state. The waveform is a row of glass capsules that move with your voice, and when a recording completes they collapse into a single circle with a checkmark, then expand back out for the next one.",
          "The transition was the hardest part to get right. Morphing four capsules into one circle and back, three times in a row, took more work than I expected, and this was a thesis so I was never going to spend a week on a single animation. I am happy with where it ended up.",
        ],
        media: [
          {
            type: 'image',
            url: '/case-studies/coughylyzer/2026-09/record-morph.webp',
            caption: 'After each recording the waveform capsules collapse into a single circle with a checkmark, then expand back out for the next one.',
          },
        ],
      },
      {
        id: 'what-id-change',
        heading: 'What I would change',
        body: [
          "The design and the build drifted apart. Every accent moved between Sketch and the asset catalog: the teal went from #33CCCC to #66C8CA, the blue from #2980B9 to #437EB4, the navy from #2C3E50 to #2F3D4E. I was correcting each one by eye in Xcode until it looked right on a real screen, and never went back to update the file I drew it in. The padding on the results cards drifted the same way. Nobody made me reconcile them and I did not.",
          "The trend chart formats its x-axis as a weekday abbreviation. Take five recordings on the same Friday and you get five labels reading Fri. It also smooths between points, which I still think is right, because exact values would make it look more precise than it is. The labels are just wrong.",
          "The result explanation is assembled from three strings that were each written to stand alone, so it says \"indicates excellent score\" and then immediately \"indicates excellent respiratory health\", and it says \"continue monitoring your score over time\" twice in the same block.",
          "The Continue button on all three guide screens says Continiue. It has said that the whole time.",
          "Bigger than any of those, the app reduces everything the model produced down to a single number. I would rather show more of what it actually captured, and that needs more interface than a gauge. The guide screens also lean on SF Symbols where small custom animations of someone sitting upright, finding a quiet room and coughing would do the job much better.",
        ],
        media: [
          {
            type: 'image',
            url: '/case-studies/coughylyzer/2026-09/trend-chart.webp',
            caption: 'Five recordings taken minutes apart on the same Friday, drawn as a week of trend.',
          },
        ],
      },
    ],
  },
];

export const getCaseStudy = (slug?: string): CaseStudy | undefined =>
  caseStudies.find((study) => study.slug === slug);
