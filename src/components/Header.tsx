import { SocialLinks } from './SocialLinks';

export function Header() {
  return (
    <header className="text-center max-w-4xl mx-auto px-4">
      <div className="mb-4 md:mb-8">
      <div className="w-20 h-20 md:w-32 md:h-32 rounded-full mx-auto border-4 border-black overflow-hidden">
          <img
            src="/profile.jpeg"
            alt="Profile"
            className="w-full h-full object-cover scale-150"
            loading="eager"
            decoding="async"
            width={128}
            height={128}
          />
</div>
        <h1 className="text-3xl md:text-5xl font-bold mt-3 md:mt-6 mb-3 md:mb-6 leading-relaxed text-gray-900 dark:text-white">
          Egemen Günel
        </h1>
      </div>

      <div className="space-y-3 md:space-y-6 text-gray-700 text-lg md:text-xl font-semibold">
        <p className="leading-relaxed">
          Hello 👋, I'm a Computer Engineering student at{" "}
          <strong className="font-bold text-blue-500 dark:text-blue-400">
            Opole University of Technology,
          </strong>{" "}
          specializing in iOS and full-stack web development. I've published my own app on the App Store, contributed to an established web platform during my internship at WeDance, and am currently developing a respiratory health app using SwiftUI and machine learning for my thesis.
        </p>

        <p className="text-sm md:text-lg leading-relaxed">
        My passion lies in creating polished user experiences through clean code and thoughtful design. I enjoy working with{" "}
          <span className="font-bold text-purple-500 dark:text-purple-400">Swift, SwiftUI,</span>
          {" "}
          <span className="font-bold text-green-500 dark:text-green-400">TypeScript</span> and modern web frameworks like {" "}
          <span className="font-bold text-blue-500 dark:text-blue-400">Vue and Nuxt.</span>When I'm not coding, you'll find me exploring new technologies and refining my UI animation skills.
        </p>
        <p className="text-sm md:text-lg leading-relaxed">
        I'm currently looking for opportunities where I can apply my skills in iOS or web development while continuing to grow as a developer.
        </p>
      </div>

      <div className="flex justify-center gap-6 mt-6 md:mt-8">
        <SocialLinks />
      </div>
    </header>
  );
}