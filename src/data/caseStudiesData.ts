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
    platforms: ['iOS', 'iPadOS'],
    icon: '/icons/antenna-icon.png',
    stack: ['Swift 6', 'SwiftUI', 'Core ML', 'Vision', 'SwiftData', 'Supabase'],
    summary: {
      problem:
        "The category has one app built with care and a long tail of thin wrappers that open straight into a camera feed. Nobody in it had decided what an identification app should feel like to use.",
      approach:
        "Answer the danger question first, report conditions instead of threats, and keep one tile shape doing conditions, camera coaching and results so the whole app reads as one thing.",
      outcome:
        "Not shipped. The design was drawn twice and thrown out once, after the first version put a full-screen photograph of a recluse on the home screen and I did not want to open my own app.",
    },
    designSystem: {
      heading: 'Two greens and Apple\u2019s palette',
      note:
        "These two are the whole brand. Everything else on screen is a system semantic: the gray ramp, the background and label hierarchies in light and dark, and the verdict states, which are Apple\u2019s green, orange and red rather than anything of mine. That last one is the reason for a rule. Brand green and the system harmless green sit close enough together that brand green is banned anywhere near a verdict, because a green accent beside a severity word reads as a safety signal. Type works the same way: twelve styles that are named Dynamic Type styles with a weight on top, not point sizes.",
      palette: [
        { name: 'Accent', value: '#00B91C' },
        { name: 'Accent text', value: '#00450A' },
      ],
    },
    sections: [
      {
        id: 'the-category',
        heading: 'One serious app, and a lot of camera feeds',
        body: [
          "Antenna is a bug identifier, and it will be my fourth app on the App Store. I started it because the keyword research said there was room. There is one serious app in the category, Picture Insect, built over years, with a real encyclopedia behind it and an interface somebody clearly designed. Then there is everything else.",
          "Everything else opens straight into a camera feed. The same handful of SF Symbols, the same layout, no personality, and a language model sitting where the identification should be, which is not what a language model is for. None of them look like anyone made a decision.",
          "So the bar was to build the second app in this category that someone opens and can tell was designed. That is the whole brief.",
        ],
      },
      {
        id: 'first-design',
        heading: 'The design that scared me off my own app',
        body: [
          "The first version of Antenna lives in a folder called Deprecated now, and there are two passes in there. The original was Sketch only and never coded, lean enough on color that it was closer to wireframes. The second added the color and the styling, and that one got built.",
          "Both came out of Lucid. I had been living in that app for months, and it is colorful and it is playful, and I wanted the opposite for the next one. Muted, native elements, text doing the work, nothing decorative.",
          "Home was a banner across the top with your location and one useful line, then a large card carrying the most dangerous species around you that season, then Your Finds with a small insight underneath.",
          "The card is what killed it. I was implementing the carousel, I had it running on real species for my own area, and it filled the screen with a hornet and then a recluse. I wanted to close the app. It is my app and I wanted to close it.",
          "Anyone frightened of spiders would have deleted it there. No warning, no setting, nothing at all between opening the app and a full-width photograph of the thing they are afraid of. An identification app cannot open like that.",
          "So I stopped, went back to Sketch, moved every screen into Deprecated and redrew the app from scratch. The camera screens were the only thing worth keeping.",
        ],
        media: [
          {
            type: 'image',
            url: '/case-studies/antenna/2026-09/home-before.webp',
            compareWith: '/case-studies/antenna/2026-09/home-after.webp',
            compareLabels: ['Deprecated', 'Now'],
            caption: 'Both screens as you first see them. The old one opens on the most dangerous thing near you, photographed at full width.',
          },
          {
            type: 'image',
            url: '/case-studies/antenna/2026-09/detail-before.webp',
            compareWith: '/case-studies/antenna/2026-09/detail-after.webp',
            compareLabels: ['Deprecated', 'Now'],
            caption: 'The venomous result, before and after. The verdict still comes first. Everything under it became tiles.',
          },
          {
            type: 'image',
            url: '/case-studies/antenna/2026-09/behaviour-before.webp',
            compareWith: '/case-studies/antenna/2026-09/behaviour-after.webp',
            compareLabels: ['Deprecated', 'Now'],
            caption: 'Behaviour and Habitat. Paragraphs answering why it is there became icons with three-word labels.',
          },
        ],
      },
      {
        id: 'dashboard-not-alarm',
        heading: 'A dashboard, not an alarm',
        body: [
          "What replaced it reports conditions instead of threats. Your location and the weather, how active species are around you right now, humidity with what it means for mosquito breeding, sting risk, and how this season compares to a normal year. Thirty-eight active species, six of them can sting or bite. That is the same information the old card carried, without a photograph of any of them.",
          "The only bugs on the screen now are the ones you found yourself, as thumbnails in Your Finds. You opted into those by photographing them.",
          "The corner radius went from 8 to 24 in the same pass. Eight reads clinical, and this is an app people point at something that frightens them. It should feel calm and a little soft rather than like an instrument.",
        ],
        media: [
          {
            type: 'image',
            url: '/case-studies/antenna/2026-09/widget-active-species.webp',
            surfaceTint: '#DBEFE6',
            caption: 'The tile the screen opens on. A count, a word for it, and the one line that matters: six of them can sting or bite.',
          },
          {
            type: 'image',
            url: '/case-studies/antenna/2026-09/widget-peak-activity.webp',
            surfaceTint: '#DBEFE6',
            span: 'half',
            caption: 'When they are out today. The dotted line is what comes next.',
          },
          {
            type: 'image',
            url: '/case-studies/antenna/2026-09/widget-humidity.webp',
            surfaceTint: '#DBEFE6',
            span: 'half',
            caption: 'Humidity, and what it means rather than what it is.',
          },
          {
            type: 'image',
            url: '/case-studies/antenna/2026-09/widget-your-finds.webp',
            surfaceTint: '#DBEFE6',
            caption: 'The only bugs on the screen are the ones you photographed yourself.',
          },
          {
            type: 'image',
            url: '/case-studies/antenna/2026-09/widget-gauge.webp',
            surfaceTint: '#DBEFE6',
            span: 'half',
            caption: 'This season against a normal one.',
          },
          {
            type: 'image',
            url: '/case-studies/antenna/2026-09/widget-sting-risk.webp',
            surfaceTint: '#DBEFE6',
            span: 'half',
            caption: 'Sting risk, and the one instruction that follows from it.',
          },
        ],
      },
      {
        id: 'color-in-the-background',
        heading: 'The color moved to the background',
        body: [
          "Lucid\u2019s rule was that the color is mine and the structure is Apple\u2019s. Antenna is the reverse, and that is deliberate.",
          "The palette is Apple\u2019s semantics, and the catalog holds two brand values: a green for surfaces and a deeper green for text on light. Everything on the content layer is glass, so it takes its color from whatever sits behind it rather than carrying any of its own. I wanted to subtract color from the elements themselves, which is the thing Lucid does most of.",
          "What sits behind it is a sky. It tracks the local clock and the season, so the app is lighter at midday than at dusk, and it stops whenever the system says to spend nothing: Reduce Motion, Low Power Mode, a scene that is not in front. It is ported from SwiftUI Sky, an MIT-licensed project, rather than written from scratch.",
          "It is also not in the design system file at all, which is a gap I know about and have not closed.",
        ],
        media: [
          {
            type: 'image',
            url: '/case-studies/antenna/2026-09/home-dark.webp',
            caption: 'Dark. The tiles hold no color of their own, so the sky behind them is what changes.',
          },
        ],
      },
      {
        id: 'one-shape',
        heading: 'One shape carries the whole app',
        body: [
          "The tile is the unit. A small label with an icon, one large value, and a line underneath saying what it means. Humidity, 54%, ideal conditions for mosquito breeding.",
          "The same object does three unrelated jobs. It reports conditions on Home. It coaches the camera: fill the frame, one bug not the whole leaf. Get closer, as close as is safe. Hold steady, brace your arm or lean in. And it answers questions on a result: what to do, nothing, to move it cup it and release it outside. Will there be more, possibly.",
          "That last one is a link. It opens Behaviour and Habitat, which answers why it is there and how to keep it out with icons and three-word labels instead of paragraphs.",
          "Using one shape for conditions, coaching and answers is what makes it feel like one app. It also means the camera is not its own country with its own visual language, which is where most of these apps come apart.",
        ],
        media: [
          {
            type: 'image',
            url: '/case-studies/antenna/2026-09/widget-humidity.webp',
            span: 'half',
            surfaceTint: '#DBEFE6',
            caption: 'A condition.',
          },
          {
            type: 'image',
            url: '/case-studies/antenna/2026-09/widget-framing.webp',
            span: 'half',
            surfaceTint: '#DBEFE6',
            caption: 'An instruction.',
          },
          {
            type: 'image',
            url: '/case-studies/antenna/2026-09/widget-what-to-do.webp',
            span: 'half',
            surfaceTint: '#DBEFE6',
            caption: 'An answer.',
          },
        ],
      },
      {
        id: 'shutter',
        heading: 'The shutter stays grey until the frame is right',
        body: [
          "Framing is the biggest lever on accuracy in this category, and accuracy is what the one-star reviews are about. So the coaching is not advice you can ignore.",
          "Live detection runs on the preview and drives three states: nothing found, move closer, hold steady. The tile at the top of the viewfinder says which one you are in, and the shutter is only armed in the last of them. The app will not take the photograph it cannot read.",
          "It is a small piece of rudeness that buys a lot. Every wrong identification in this category starts with a picture of a leaf.",
        ],
        media: [
          {
            type: 'image',
            url: '/case-studies/antenna/2026-09/camera-move-closer.webp',
            compareWith: '/case-studies/antenna/2026-09/camera-hold-steady.webp',
            compareLabels: ['Move closer', 'Hold steady'],
            caption: 'Same table, two states. The shutter is grey on the left and white on the right.',
          },
        ],
      },
      {
        id: 'not-sure',
        heading: 'Not sure about this one',
        body: [
          "Coughylyzer put a 0 to 100 score on a model that missed most of what mattered, and the number read as a measurement. That is the mistake I was not going to make twice.",
          "Antenna has no score. Confidence changes the shape of the answer rather than sitting underneath it as a caveat. A high match gives you the verdict first, harmless or use caution or venomous, and then the name. As the match falls the screen becomes a shortlist instead: not sure about this one, three candidates with their own percentages and their own verdicts, and a line under them saying one option here can bite, treat it as the riskiest until you are sure.",
          "I tried confidence bars under each candidate, colored by severity, and took them out. A shorter bar for a lower match reads as this one matters less, and on a screen where the 12% match is the False Widow, that is exactly backwards.",
          "The identification runs on device against a bundled model, so the app is not asking a language model what it is looking at.",
        ],
        media: [
          {
            type: 'image',
            url: '/case-studies/antenna/2026-09/low-confidence-after.webp',
            caption: 'No score and no gauge. Three candidates with their own verdicts, and a line telling you which one to assume until you know.',
          },
        ],
      },
      {
        id: 'iphone-duo',
        heading: 'Designing for a phone that folds',
        body: [
          "The iPhone Duo shipped in the middle of September and the design templates landed about a week later. Antenna is laid out for both of its displays already, the outer one and the inner one.",
          "It is early and there is no hardware to check it on. But a fold asks the questions this app is already asking: which tiles survive on the narrow outer screen, and what the extra width on the inside actually buys you beyond more of the same.",
          "The answer so far is that the width is not for more tiles, it is for one tile to say more. Opened up, Peak Activity becomes the whole day: the peak window, how it compares to typical, when it goes quiet, and a line telling you to cover up if you are out after seven. Your Finds gets a second row. Nothing appears that was not already on the phone.",
          "These are work in progress. The hardware is weeks old and the design templates are newer than that, so what ships may not look like this.",
        ],
        media: [
          {
            type: 'image',
            url: '/case-studies/antenna/2026-09/duo-outer.webp',
            compareWith: '/case-studies/antenna/2026-09/duo-inner.webp',
            compareLabels: ['Outer', 'Inner'],
            compareLayout: 'rows',
            caption: 'Closed, the grid narrows and the camera moves into the accessory strip beside the cutout. Opened, the same grid splits and one tile expands into the space.',
          },
        ],
      },
      {
        id: 'where-it-is',
        heading: 'Where it is',
        body: [
          "Antenna is not shipped. The camera, the on-device identification, the chat and the collection are built. The paywall is deliberately last, and onboarding is drawn but not built.",
          "Two things I already know are wrong. Telling it apart, the section that shows you similar species, may not survive, because it is the one screen where I cannot say what question it answers. And the humidity tile reads %54 rather than 54%, in the Sketch file and in the code, which is the same drift I wrote about in Coughylyzer turning up again in a project where I thought I knew better.",
          "The design is at the point where the next thing to change it should be somebody using it, not more drawing.",
        ],
      },
    ],
  },
  {
    slug: 'lucid',
    title: 'Lucid',
    tagline: 'A study app that had to feel playful without becoming a toy.',
    role: 'Design & iOS engineering',
    timeframe: 'Jan 2026 to present',
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
    summary: {
      problem:
        'Studying meant three apps. One for flashcards, one for quizzes, one for asking a chatbot a question. None of them shared a source, so the same lecture slides had to go in three times to be useful three ways.',
      approach:
        'One app built on a single pile of study material, colorful enough that opening it does not feel like more work, without looking like nobody designed it.',
      outcome:
        'v1.0 shipped 7 June 2026 in 13 languages. 82% of the people who start onboarding finish it. v1.1 followed on 1 September and took the sign-in wall out of onboarding entirely.',
    },
    metrics: [
      { label: 'First-time downloads, last 30 days', value: '192' },
      { label: 'Onboarding completion', value: '81.6%' },
      { label: 'Guests who sign in after arriving', value: '19 of 23' },
    ],
    designSystem: {
      heading: 'Foundations',
      note:
        'Thirteen brand colors, each with a hand-tuned dark variant rather than an inversion, and twelve text styles that map onto Dynamic Type instead of fixed point sizes. The sizes below are what those styles render at the default text size. They grow when the reader\u2019s does.',
      palette: [
        { name: 'Red', value: '#F97C7C' },
        { name: 'Orange', value: '#FFC389' },
        { name: 'Yellow', value: '#FCBB6F' },
        { name: 'Green', value: '#AAD28C' },
        { name: 'Blue', value: '#9BAFFF' },
        { name: 'Purple', value: '#A797FF' },
        { name: 'Pink', value: '#FE8BD1' },
        { name: 'Light Pink', value: '#FAB8B8' },
        { name: 'Dominant Orange', value: '#F7AA90' },
        { name: 'Dominant Green', value: '#86B795' },
        { name: 'Muted Orange', value: '#FAC9B8' },
        { name: 'Muted Green', value: '#C5DECD' },
        { name: 'Beige', value: '#E5D4C0' },
      ],
      typeScale: [
        { label: 'Heading 1', sample: 'Collections', size: '2.125rem', weight: 700 },
        { label: 'Heading 2', sample: 'Say hello to Lucid.', size: '1.75rem', weight: 700 },
        { label: 'Heading 3', sample: 'What are your goals?', size: '1.75rem', weight: 400 },
        { label: 'Heading 4', sample: 'Name your flashcards', size: '1.375rem', weight: 700 },
        { label: 'Heading 5', sample: 'Select a collection', size: '1.25rem', weight: 600 },
        { label: 'Heading 6', sample: 'Your subjects', size: '1.25rem', weight: 400 },
        { label: 'Body 1', sample: 'Talk with your notes', size: '1.0625rem', weight: 600 },
        { label: 'Body 2', sample: 'Lucid will adapt to your study style.', size: '1.0625rem', weight: 400 },
        { label: 'Body 3', sample: 'Prepare for exams', size: '1rem', weight: 600 },
        { label: 'Body 4', sample: 'Organize your materials into folders.', size: '1rem', weight: 400 },
        { label: 'Body 5', sample: 'Review concepts with customized cards.', size: '0.9375rem', weight: 600 },
        { label: 'Body 6', sample: 'By continuing, you agree to our terms.', size: '0.8125rem', weight: 600 },
      ],
    },
    sections: [
      {
        id: 'color-and-structure',
        heading: 'The color is mine, the structure is Apple\u2019s',
        body: [
          'Lucid started because a friend and I were students and we were tired of studying across three apps. One for flashcards, one for quizzes, one for asking a chatbot a question. None of them shared a source, so the same lecture slides had to go in three times to be useful three ways. He works on the backend, I do the design and all of the client side.',
          'Studying is a daunting task on its own, and I wanted Lucid to feel like it was on your side rather than like more of the same work. So the app is colorful, and it is colorful on purpose.',
          'The rule I settled on is that the color is mine and the structure is Apple\u2019s. Every icon in the app is an SF Symbol. The tab bar is a real UITabBarController. The sheets are native half sheets. The primary buttons use the system glass prominent style. There is not one hardcoded point size in the type scale: all twelve text styles are named Dynamic Type styles with a weight on top, so the whole app grows when someone turns their text size up.',
          'So almost nothing structural is decorated. The playfulness is all in color, in shape, and in how big things are. Large collection cards with a gradient and a stroke, big icons, secondary colors sitting underneath the glass elements on top of them. That is what makes it read as expressive rather than as a toy. Underneath the gradients it behaves exactly like the apps that are already on your phone.',
        ],
      },
      {
        id: 'create-button',
        heading: 'I dropped into UIKit for one button',
        body: [
          'The Create button in the tab bar is not a tab. Tapping it opens a half sheet with three options: a new collection, a quiz, or flashcards. Creating something should not be a destination you navigate to and then have to back out of. A sheet you can swipe away is not a burden and it does not take you off the screen you were already on.',
          'On iOS 26 Apple added a tab role for search that changes the whole tab bar layout. The search item gets pulled out to the right as its own action button and the real tabs move over to the leading side, so they are no longer three items centered at the bottom. I wanted that treatment, but for a plus button rather than for search.',
          'SwiftUI would not do it. That role wants to show a view, and I wanted a sheet. Presenting one from there blocked the main thread and deselected whatever tab you were on, so you tapped plus and lost your place. That is not an implementation, it is a bug with a nice appearance.',
          'So the tab bar is a real UITabBarController. Create is an empty view controller that never appears, and the delegate intercepts the selection and presents the sheet instead. There is some hacking in there and I am not going to pretend otherwise.',
          'Since I was already in that file I handled iOS 18 too, which has no floating tab bar and no role that would give me the same thing. There, Create sits in the center, which is where Instagram and TikTok put it, so it is a position people already understand. It does mean the button is in a different place depending on which iOS you are running. I decided that was fine, because in both cases it is in the place that version of iOS has taught people to look.',
        ],
        media: [
          {
            type: 'image',
            url: '/case-studies/lucid/2026-09/tabbar-ios26.webp',
            compareWith: '/case-studies/lucid/2026-09/tabbar-ios18.webp',
            compareLabels: ['iOS 26 & 27', 'iOS 18'],
            compareLayout: 'rows',
            caption: 'The same three destinations. On iOS 26 Create is pulled out to the right as its own button and the tabs move left. On iOS 18 there is no layout that does that, so Create sits in the center.',
          },
        ],
      },
      {
        id: 'flashcards',
        heading: 'You make a flashcard by making a flashcard',
        body: [
          'Anki does flashcard creation as front and back text fields. I have not spent enough time in Quizlet to say what their study mode looks like and they may well have real cards there, so my claim is about the creation path specifically. That is the part everyone treats as a form.',
          'Two text fields is the fast path, and it is what you get when the instruction is just to build a flashcard section. Cards that stack on top of each other and flip when you tap them take a precision that does not survive that instruction.',
          'In Lucid you type on the card. There is a Flip button above it, because the card is holding a focused text field and tap to flip would fight the keyboard, and on the back you type the definition. You swipe the card away and it joins the stack. Before you have typed anything the card does a small flip on its own to show Enter a term on one side and Enter a definition on the other, so the gesture demonstrates itself instead of being explained, and chevrons glow at both edges to show that swiping is what comes next.',
          'The physicality carries into studying, and there the card is not holding a text field any more, so you just tap it to turn it over. The cards sit in a stack and you swipe one away to get the next. It is a stack you handle, not a list that happens to contain terms.',
          'I will come back to this one at the end, because the creation path is also the thing I would most like to change.',
        ],
        media: [
          {
            type: 'image',
            url: '/case-studies/lucid/2026-09/flash-term.webp',
            compareWith: '/case-studies/lucid/2026-09/flash-definition.webp',
            compareLabels: ['Term', 'Definition'],
            caption: 'The empty card is the form. Flip it over and the placeholder changes.',
          },
          {
            type: 'image',
            url: '/case-studies/lucid/2026-09/flash-swipe.webp',
            span: 'half',
            caption: 'Swiping the finished card away is how you get the next one. The card behind it is the stack you are building.',
          },
          {
            type: 'image',
            url: '/case-studies/lucid/2026-09/flash-study.webp',
            span: 'half',
            caption: 'Studying uses the same cards. No text field here, so a tap turns it over.',
          },
        ],
      },
      {
        id: 'collection-color',
        heading: 'One color choice repaints the screen',
        body: [
          'When you create a collection you pick an icon and a color. That color is not just a label on a list row. It becomes the collection\u2019s detail view. The background is a linear gradient running from the color you picked down into the system background, and the Add Study Materials button takes the same color.',
          'The cards carry it too. A collection card is a large gradient with a stroke and a border, the icon large in one corner and the name large in the other. They are deliberately big. I did not want a list of small rows, because a list makes every subject look the same, and this is the screen where your own material lives.',
          'That is why there are thirteen brand colors and why each one has a hand-tuned dark variant rather than an inverted one. Every color in the set has to hold up as a full screen gradient behind real text, not just as a swatch two centimeters wide.',
        ],
        media: [
          {
            type: 'image',
            url: '/case-studies/lucid/2026-09/collection-physics.webp',
            compareWith: '/case-studies/lucid/2026-09/collection-anatomy.webp',
            compareLabels: ['Physics', 'Anatomy'],
            caption: 'Same screen, same layout. The only thing that changed is the color picked when the collection was created.',
          },
        ],
      },
      {
        id: 'onboarding',
        heading: 'Seven onboarding steps, and what they are for',
        body: [
          'Lucid\u2019s onboarding is seven steps and it is animated the whole way through. Decorative cards, a carousel, collection cards that blur and get replaced, documents and images and quiz cards sliding in on top of them so it looks like there is something inside. It is more production than most apps this size bother with, and that is on purpose. It is the first thing anyone sees and it sets the expectation that the rest was made with the same care.',
          'Two of those steps ask questions. What your goals are, and how you learn best. It would be fair to assume those are decoration.',
          'They are not. Those answers, along with the institution you pick, choose which suggested prompts appear in the chat input on the main screen. Every prompt in the catalog is tagged with the goals and study methods it belongs to. Give me a quick pep talk only appears if you said you wanted to stay motivated. Draft an outline for my paper only appears if you said university or graduate school. They go to the backend as well and affect how the AI answers, though that part is my friend\u2019s side rather than mine.',
          'The last step used to be a wall. Sign in with Apple, with no way past it.',
          'We put PostHog in to look at that funnel. Around 82% of the people who start onboarding finish it, so the seven steps were not where anyone was leaving. The drop is immediately after onboarding, not inside it. Whether the steps work and whether a hard sign-in belongs at the end of them are two different questions though, so we took the wall out. Signing in is no longer part of onboarding and you can use Lucid as a guest.',
          'Signing in is still offered, as a quiet line on the very first screen for people who already have an account. What replaced the wall is ten separate prompts that appear at the points where signing in is obviously worth something, each with its own wording. Your chats disappear when you are signed out. Sign in to keep this chat in your history. When you hit a limit it tells you what signing in would give you and that it is free. It is a better trade than one wall, because instead of asking before you have seen anything it asks at the moment you would lose something.',
          'The number is in now. In a cohort of 81 people who arrived during a paid test in September, 58 were still guests, which reads like the prompts are failing until you look at when the other 23 signed in. Four of them signed in on arrival. The other nineteen signed in later, a median of seven and a half minutes in, at the prompt that fires the moment their first upload finishes processing. Signing in turned out to be a milestone people reach rather than a gate they pass, and the guests are mostly people who never got far enough to be asked.',
        ],
        media: [
          {
            type: 'image',
            url: '/case-studies/lucid/2026-09/onboarding-goals.webp',
            compareWith: '/case-studies/lucid/2026-09/onboarding-methods.webp',
            compareLabels: ['Goals', 'How you learn'],
            caption: 'The two steps that ask questions. Review faster, Stay organized and Build a study habit are selected here.',
          },
        ],
      },
      {
        id: 'first-session',
        heading: 'Half the people who arrived did nothing at all',
        body: [
          'In September we put money behind the app for eleven days. Eighty-one people created an account over those days, and forty-two of them never sent a message, never uploaded a file and never took a photo. Not a slow start. Nothing at all. The ones who did something did it almost immediately: a median of about three minutes to a first upload, twenty-four of twenty-seven inside the first hour, and nobody came back on a later day to bring material.',
          'That is the finding that changes what you design. There is no dormant group to win back with a notification or an email, because the decision gets made in the first session and it is final. Anything that fixes this has to land inside the first few minutes, and the place to put it is the empty collection. 44% of the collections created in that window are still empty. Someone opens a folder for their subject, names it, and never puts anything in it. That is a person who understood the app well enough to start and found nothing to do next.',
          'The thresholds for the test were written in August, before any money went out, so the decision at the end would not be made on how the results felt. The row we landed on reads installs but no activation, which means the funnel is the problem and more spending only amplifies a leak. So we stopped. The channel works, the product underneath it does not convert yet, and buying more arrivals would have bought more of the same silence.',
          'One thing in that data I have not resolved. Of the thirty-nine people who did anything at all, twelve used Lucid as a plain AI chat and never brought any material in. That is either a failure to say what the product is, or it is a second product hiding inside this one.',
        ],
      },
      {
        id: 'chat-input',
        heading: 'The chat input was the weakest thing I shipped',
        body: [
          'Most of the feedback on Lucid\u2019s design has been positive, so the part worth pointing at is the part I was not happy with.',
          'In the first version the chat screen had four suggestion cards sitting above the text field, each a rectangle with an icon and a line of text. Two problems with that. They read as the primary actions on the screen when they were only meant to be shortcuts. And the text field underneath them was glass on a near white background, so the input, the thing the entire screen exists for, ended up as the quietest element on it.',
          'So I rebuilt the input as one component. The suggestions moved inside it as a scrollable row of chips along the top edge, with the placeholder under them and an @ button and a send button in the same container. Now the input is the largest and most defined thing above the tab bar, which is what it should have been in the first place.',
          'Tagging changed with it. It used to render inline in the text, so @Mathematics appeared in your sentence in that collection\u2019s color. Now tagging puts a chip in that same top row with an x to remove it. The row has one job and swaps what it holds: suggestions before you type, the tagged collection after. It is easier to see what context your question is carrying, and easier to take it back.',
        ],
        media: [
          {
            type: 'image',
            url: '/case-studies/lucid/2026-09/chat-input-before.webp',
            compareWith: '/case-studies/lucid/2026-09/chat-input-after.webp',
            compareLabels: ['Before', 'After'],
            caption: 'Four cards outranking the field they sit above, against one component that holds the suggestions, the placeholder, the tag button and send.',
          },
        ],
      },
      {
        id: 'what-id-change',
        heading: 'What I would change',
        body: [
          'The manual flashcard path, and I know that contradicts what I said earlier about flashcard creation.',
          'The sheet gives you two ways in, generate them automatically or make them yourself. On the manual path you land on a single card, type a term, flip it, type a definition, swipe it away to add it to the stack, and tap Save flashcards when you are done. I added every hint I could think of: the self-flip, the glowing chevrons, the Flip button.',
          'It is still cognitively loaded. There is one card in the middle of the screen and a Save flashcards button at the bottom, and I do not think it is obvious enough that the card is one of many or that swiping is how you get the next one. Someone can type a single card, tap save, and never find out that a stack was the point.',
          'I still would not go back to two text fields labeled front and back. That is the easy answer, and it is easy because it gives up on the thing that makes the feature worth using. But two text fields is a pattern people already understand, and being understood counts for something. So it is a real trade and I picked the side that is harder to teach.',
          'I do not have the better idea yet. There is probably a piece of UI that makes these are a stack and you are building it obvious without turning the card back into a form. I would like to find it.',
        ],
        media: [
          {
            type: 'image',
            url: '/case-studies/lucid/2026-09/flash-term.webp',
            caption: 'This is the screen I am arguing with. One card, one button, and nothing on it says that a stack is what you are here to build.',
          },
        ],
      },
    ],
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
        "v2.0 shipped 7 July 2026. It did not spike on launch. Impressions rose 62% in the first month while downloads moved 3%, and the app has grown steadily in the two months since. That gap is the store page failing to convert attention the product already has, which is the next thing I would fix.",
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
          "It lasts about three seconds. I spent time on it because it is the one moment the app has the screen to itself, with no photographs on it yet, and the only chance to say what kind of app this is before the content starts doing that job.",
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
          "The design and the build drifted apart, because there was no step in my process where the file I drew and the asset catalog got reconciled, and nobody but me ever read the strings. Every accent moved between Sketch and the asset catalog: the teal went from #33CCCC to #66C8CA, the blue from #2980B9 to #437EB4, the navy from #2C3E50 to #2F3D4E. I was correcting each one by eye in Xcode until it looked right on a real screen, and never went back to update the file I drew it in. The padding on the results cards drifted the same way. Nobody made me reconcile them and I did not.",
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
