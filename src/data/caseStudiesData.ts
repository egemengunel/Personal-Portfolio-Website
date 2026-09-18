import type { CaseStudy } from '../types/caseStudy';

/**
 * Case studies are ordered deliberately. The index renders them in this order,
 * strongest first. `status` drives how the card behaves:
 *   published: written, linked, indexable
 *   writing:   linked, but the page says it is still being written
 *   planned:   listed as a quiet tile, not linked
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
    tagline: "My first shipped app, rebuilt after the API it depended on stopped being reliable.",
    role: 'Design & iOS engineering',
    timeframe: 'Oct 2025 to Jul 2026',
    status: 'published',
    icon: '/icons/cosmo-papers-icon.png',
    cover: '/projects/cosmo-papers/cosmo1.webp',
    platforms: ['iOS'],
    stack: ['Swift 6', 'SwiftUI', 'Core Data', 'NaturalLanguage', 'Metal', 'Nuke', 'RevenueCat', 'Superwall'],
    links: [{ label: 'View on App Store', href: 'https://cosmopapers.app' }],
    gallery: [
      { type: 'image', url: '/projects/cosmo-papers/cosmo1.webp' },
      { type: 'image', url: '/projects/cosmo-papers/cosmo2.webp' },
      { type: 'image', url: '/projects/cosmo-papers/cosmo3.webp' },
      { type: 'image', url: '/projects/cosmo-papers/cosmo4.webp' },
      { type: 'image', url: '/case-studies/cosmo-papers/2026-09/v2-archive.webp' },
      { type: 'image', url: '/case-studies/cosmo-papers/2026-09/v2-lockscreen.webp' },
      { type: 'image', url: '/case-studies/cosmo-papers/2026-09/v2-favorites.webp' },
    ],
    summary: {
      problem:
        "v1 pulled live from NASA's Astronomy Picture of the Day API. When that API went down, and it went down often, the app showed nothing at all.",
      approach:
        "Bundle the whole archive locally, then rebuild the product around curation instead of around whatever the API returned that day.",
      outcome:
        "v2.0 shipped 7 July 2026. It did not spike on launch. Impressions rose 62% in the first month while downloads moved 3%, and the app has grown steadily in the two months since.",
    },
    metrics: [
      { label: 'Downloads, launch month', value: '184' },
      { label: 'Downloads, last 30 days', value: '251' },
      { label: 'Impressions, launch month', value: '19.2K' },
      { label: 'Impressions, last 30 days', value: '36.4K' },
    ],
    sections: [
      {
        id: 'the-api',
        heading: 'An API I did not control took my only shipped app down',
        body: [
          "Cosmo Papers exists because I wanted to browse NASA's Astronomy Picture of the Day and set the images as my wallpaper. It is the app that got me into iOS in the first place, and it was the first thing I designed and shipped myself.",
          "v1.0 went out on 24 October 2025 and pulled everything live from NASA's APOD API. That turned out to be the mistake. Over the following year there were US government shutdowns and budget cuts, NASA stopped maintaining the API properly, and when it went down my app showed nothing. There was no fallback in it. At the time this was my only app on the App Store and I was sending it to companies as the thing that proved I could build for iOS, and it was just broken, and there was nothing I could do about it from my side.",
          "Even when it worked it was slow, and it would sometimes return a video for the day with no usable source URL, which is a strange thing for an imagery API to do.",
          "I did not decide to cut it in one go. Two weeks after launch I shipped a network failure threshold to handle the outages. Seven months later I started bundling full resolution images offline. Three weeks after that, in v2.0, I removed the API entirely. Looking at my own commit history now, it reads as an eight month retreat from a dependency I kept trying to live with.",
        ],
        media: [
          {
            type: 'image',
            url: '/case-studies/cosmo-papers/2026-09/perf-compare.webp',
            caption: 'v1.1.1 on the left, still rendering, against v2.0 on the right. Once the catalog is local there is nothing to wait for.',
          },
        ],
      },
      {
        id: 'going-local',
        heading: 'Going local changed what the product was',
        body: [
          "Once the whole archive was bundled in the app, the constraint that shaped v1 disappeared. I was no longer limited to whatever the API felt like returning that day.",
          "The first thing that went was the Today tab. An app built on the picture of the day, which no longer fetches today's picture, has no business having a Today tab. What I actually had was every image back to 1995, so the product stopped being a daily feed and became curation.",
          "That let me write my own taxonomy, which APOD does not provide: Aurora, Hubble and Webb, Galaxies, Black Holes and Cosmology, Star Clusters, Nebulae. Explore, which was a flat grid of whatever was newest, became Browse, which is one carousel per category, backed by a grid you can zoom out of to see everything back to 1995 with a scrubber for jumping to a date.",
          "The trade is real and I want to be clear about it. The app will never show today's picture again, and new images only arrive when I ship a build. I decided reliability was worth more than freshness, because an app that is occasionally empty is worse than an app that is always a month behind.",
        ],
        media: [
          {
            type: 'image',
            url: '/case-studies/cosmo-papers/2026-09/v1-today.webp',
            compareWith: '/case-studies/cosmo-papers/2026-09/v2-browse.webp',
            compareLabels: ['v1.1.1', 'v2.0'],
            caption: 'One picture and a wall of text, against a category carousel over the whole archive.',
          },
        ],
      },
      {
        id: 'dark',
        heading: 'Dark was one decision, not three workarounds',
        body: [
          "v1 had no position on appearance at all. It followed whatever the system was set to, and wherever a component broke in dark mode I forced it back to light locally. There were three of those patches by the end, in the vertical action buttons, the onboarding button and the expandable text. Three separate fixes for a decision I had never actually made.",
          "v2 makes the decision once, at the app root, with a single preferredColorScheme call. All three patches went away with it.",
          "The reason is that everything in this app is a photograph of space. Hubble and Webb images are mostly black, and on a light background they never sat right, the wallpaper and the chrome were fighting each other. On dark, the images are the only bright thing on screen, which is what a wallpaper app should be.",
          "The background is not flat black either. It is a subtle gradient from black up into a deep blue, with stars over it, and every so often a shooting star crosses the screen. You have to be looking to catch one.",
        ],
        media: [
          {
            type: 'image',
            url: '/case-studies/cosmo-papers/2026-09/v1-detail.webp',
            compareWith: '/case-studies/cosmo-papers/2026-09/v2-detail.webp',
            compareLabels: ['v1.1.1', 'v2.0'],
            caption: 'The same screen before and after. Actions moved out of a vertical stack on top of the image and got labels.',
          },
        ],
      },
      {
        id: 'one-at-a-time',
        heading: 'One image at a time',
        body: [
          "v1's Explore was a flat grid of whatever was newest. That is fine for a feed and wrong for choosing a wallpaper, because you scan twenty thumbnails at once and commit to none of them.",
          "Browse shows you roughly one image at a time instead, in a carousel per category, with the current image centred and the neighbours peeking in at the edges. I took that from old iTunes. Turning an iPhone 3GS or 4 sideways and flicking through album covers, one at a time, felt like going through a shelf rather than reading a list, and that is the feeling I wanted for picking a wallpaper.",
          "Every swipe fires a haptic, and there is a rubber band haptic when you reach the end of a category. It is a small thing but it makes the images feel like objects you are handling rather than rows you are scrolling.",
          "After about twenty images the carousel ends on a card that says to keep swiping, which takes you into the full category grid. From there you can zoom out to everything back to 1995, grouped by month, with a scrubber for jumping to a date. The grid only reveals the next batch once most of the current batch has actually finished loading, so scrolling never outruns rendering and you are not looking at empty rectangles.",
        ],
        media: [
          {
            type: 'image',
            url: '/case-studies/cosmo-papers/2026-09/v1-explore.webp',
            compareWith: '/case-studies/cosmo-papers/2026-09/v2-carousel.webp',
            compareLabels: ['v1.1.1', 'v2.0'],
            caption: 'A grid of everything, against one image at a time per category.',
          },
        ],
      },
      {
        id: 'search',
        heading: 'Search, and what you are actually buying',
        body: [
          "There was no search in v1 at all. In v2 it is a single field with no filter chips and no sort menu. You type what you want and the app works out what you meant.",
          "The parsing runs on Apple's NaturalLanguage framework. It lemmatizes the query, maps words onto my categories by meaning using word embeddings, and pulls out years, decades and copyright-free intent. I chose it over Foundation Models deliberately. Apple Intelligence would have put a hardware floor of iPhone 15 Pro under the feature, and NaturalLanguage is free, on device, and runs on everything.",
          "Free users get plain text matching. Cosmo Plus gets the query understanding, and it also gets a different field: a glass capsule with a Metal shader running behind it and a placeholder that cycles through example queries, so you learn what the field can do by watching it rather than by reading instructions.",
          "I was careful about what the subscription is sold as. It does not buy the images. Those belong to NASA and to the photographers, they are credited in the app, and many of them are copyrighted and marked personal use only. What you are paying for is the curation, the taxonomy I wrote, the browsing experience and search. I wanted that stated in the app rather than buried in a terms page, because selling someone else's photographs would not be right.",
        ],
        media: [
          {
            type: 'image',
            url: '/case-studies/cosmo-papers/2026-09/v2-search.webp',
            caption: 'One field, no filters. The highlight shows which part of the query was understood as a facet.',
          },
        ],
      },
      {
        id: 'launch-screen',
        heading: 'The launch screen',
        body: [
          "A grey mark on a black screen. A highlight sweeps around it while a gradient rises from the bottom, black into deep blue, and by the time the highlight finishes its pass the mark is lit white and the gradient has filled the screen. Then it hands over to Browse.",
          "It lasts about three seconds and it is the only thing anyone sees before the app itself. I spent time on it because it is the one moment where the app has the screen entirely to itself, with no photographs on it yet, and it is the only chance to say what kind of app this is before the content starts doing that job.",
        ],
        media: [
          {
            type: 'image',
            url: '/case-studies/cosmo-papers/2026-09/v2-launch.webp',
            caption: 'Three frames from the launch animation, about a second apart.',
          },
        ],
      },
      {
        id: 'in-code',
        heading: 'I designed v2 in code, and it shows in places',
        body: [
          "Coughylyzer I designed in Sketch first, colors and type before any UI. Cosmo Papers v2 I did the other way round, in Xcode, on a device, adjusting until it looked right.",
          "Part of that I would defend. The app has exactly one accent color in its asset catalog, and everything else on screen is a photograph. In a wallpaper app the color comes from the content, so there is almost nothing worth tokenizing. A palette would have been ceremony.",
          "The type scale is the part I would not defend. Heading 3, heading 4 and heading 5 are all 32 points, which is three names for one size, and there is a token called body35 sitting between body3 and body4 because at some point I needed a size in between and did not want to renumber everything. That is what a scale looks like when it grows one screen at a time instead of being decided once.",
          "The Sketch file is worse than the code. Cosmo Papers was originally designed in Figma in 2024, and when I moved to Sketch I imported it. The import lost icons, brought grids in wrong, and stacked colors on top of each other. The Foundations page in there still describes v1, which is the version this whole case study is about replacing.",
          "And the archive is frozen. New images only arrive when I ship a build. I still think reliability was the right trade against an API that kept going down, but it means an app built on the Astronomy Picture of the Day cannot show you today's picture. I have not solved that. I chose around it.",
        ],
      },
    ],
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
