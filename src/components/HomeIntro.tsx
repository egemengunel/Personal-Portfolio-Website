import { NAME, HEADLINE, INTRO, LOCATION, AVAILABILITY } from '../data/identity';

/**
 * Two columns above md so the list is not a single long scroll on a phone.
 * Each line is one thing that shows up in the work, not a technology.
 */
const whatIDo = [
  {
    title: 'Design the app',
    body: 'Type scale, colour, component set and motion, drawn in Sketch and Figma against the platform styles rather than beside them.',
  },
  {
    title: 'Build the app',
    body: 'Swift and SwiftUI, with UIKit underneath where SwiftUI refuses. MVVM on @Observable, typed networking, Core Data or @AppStorage for what has to survive a relaunch.',
  },
  {
    title: 'Ship it',
    body: 'App Store review, subscriptions through RevenueCat and Superwall, Supabase behind the parts that need a server, and the release notes after.',
  },
  {
    title: 'Machine learning on device',
    body: 'Core ML and Create ML for classification and search that runs without a round trip, and an interface honest about how sure the model is.',
  },
];

export function HomeIntro() {
  return (
    <section className="pt-12 md:pt-20">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
        {NAME}
      </h1>

      <p className="mt-4 md:mt-5 text-xl md:text-3xl text-gray-500 leading-snug max-w-2xl">
        {HEADLINE}
      </p>

      <p className="mt-4 text-sm md:text-base text-gray-400">
        {LOCATION}
      </p>

      <div className="mt-8 md:mt-10 space-y-4 max-w-2xl">
        {INTRO.map((paragraph) => (
          <p key={paragraph} className="text-sm md:text-base text-gray-600 leading-relaxed">
            {paragraph}
          </p>
        ))}
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          {AVAILABILITY}
        </p>
      </div>

      <div className="mt-10 md:mt-14 mb-12 md:mb-16">
        <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wider">
          What I Do
        </h2>
        <dl className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
          {whatIDo.map((item) => (
            <div key={item.title}>
              <dt className="text-sm md:text-base font-medium text-gray-900">{item.title}</dt>
              <dd className="mt-1 text-sm text-gray-500 leading-relaxed">{item.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default HomeIntro;
