import { SocialLinks } from './SocialLinks';
import CVDownload from './CVDownload';

export function Header() {
  return (
    <header className="text-left max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10 mb-6 md:mb-8">
        {/* Profile Picture Section */}
        <div className="flex-shrink-0 self-center md:self-start">
          <div className="w-24 h-24 md:w-40 md:h-40 rounded-full mx-auto md:mx-0 border-4 border-black overflow-hidden">
            <img
              src="/profile.jpeg"
              alt="Profile"
              className="w-full h-full object-cover scale-150"
              loading="eager"
              decoding="async"
              width={160}
              height={160}
            />
          </div>
        </div>

        {/* Text Content Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
            Egemen Günel
          </h1>

          <div className="space-y-3 md:space-y-4 text-gray-700 text-base md:text-lg">
            <p className="leading-relaxed">
              Hey there, I'm Egemen! Currently finishing up my Computer Engineering degree at{" "}
              <strong className="font-semibold">Opole University of Technology</strong> in Poland. Most of my time goes into building iOS apps (got one on the App Store!) and tinkering with web projects. Last summer, I interned at WeDance where I built features that help dancing community come together as one.
            </p>

            <p className="leading-relaxed">
              I'm currently working on my thesis project{" "}
              <strong className="font-semibold">Coughylyzer</strong>. It's an iOS app that listens to breathing patterns and tries to identify respiratory issues. Been wrestling with machine learning models for months (turns out coughs are complicated!), but I've had way more fun designing the UI with the new{" "}
              <strong className="font-semibold">iOS 26 liquid glass effects</strong>.I am absolutely loveing the new glass animations and morphs.
            </p>

            <p className="leading-relaxed">
              When my eyes need a break from screens, you'll usually find me cruising around the city on electric scooters or diving into Billie Eilish's latest album. Currently hunting for iOS or web dev roles where I can keep building things people actually use.
            </p>
          </div>

          <CVDownload />

          <div className="flex justify-center md:justify-start gap-6 mt-6 md:mt-8">
            <SocialLinks />
          </div>
        </div>
      </div>
    </header>
  );
}