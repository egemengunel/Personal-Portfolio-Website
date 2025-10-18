import { SocialLinks } from './SocialLinks';

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
              Hello, I'm a Computer Engineering student at{" "}
              <strong className="font-semibold">
                Opole University of Technology
              </strong>, specializing in iOS and full-stack web development. I've published my own app on the App Store, contributed to an established web platform during my internship at WeDance, and am currently developing a respiratory health app using SwiftUI and machine learning for my thesis.
            </p>

            <p className="leading-relaxed">
              My passion lies in creating polished user experiences through clean code and thoughtful design. I enjoy working with{" "}
              <strong className="font-semibold">Swift, SwiftUI</strong>,{" "}
              <strong className="font-semibold">TypeScript</strong> and modern web frameworks like{" "}
              <strong className="font-semibold">Vue and Nuxt</strong>. When I'm not coding, you'll find me exploring new technologies and refining my UI animation skills.
            </p>

            <p className="leading-relaxed">
              I'm currently looking for opportunities where I can apply my skills in iOS or web development while continuing to grow as a developer.
            </p>
          </div>

          <div className="flex justify-center md:justify-start gap-6 mt-6 md:mt-8">
            <SocialLinks />
          </div>
        </div>
      </div>
    </header>
  );
}