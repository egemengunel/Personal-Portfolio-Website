import { SocialLinks } from './SocialLinks';

export function Header() {
  return (
    <header className="text-center max-w-4xl mx-auto px-4">
      <div className="mb-6 md:mb-8">
        <img
          src="/profile.jpeg"
          alt="Profile"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto border-4 border-gray-200 dark:border-gray-700"
        />
        <h1 className="text-4xl md:text-5xl font-bold mt-4 md:mt-6 mb-4 md:mb-6 leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Egemen Günel
        </h1>
      </div>

      <div className="space-y-4 md:space-y-6 text-gray-600 dark:text-gray-300">
        <p className="text-lg md:text-xl font-medium">
          Hey 👋, I'm a Computer Science student at{" "}
          <span className="text-blue-500 dark:text-blue-400">
            Opole University of Technology
          </span>
          , pursuing innovative solutions at the intersection of mobile and web technologies.
        </p>

        <div className="space-y-3 md:space-y-4">
          <p className="text-base md:text-lg">
            I specialize in{" "}
            <span className="text-blue-500 dark:text-blue-400">Swift Development</span>,{" "}
            <span className="text-purple-500 dark:text-purple-400">Web Technologies</span>, and{" "}
            <span className="text-green-500 dark:text-green-400">Computer Science</span>{" "}
            principles, bringing ideas to life through clean, efficient code.
          </p>

          <p className="text-base md:text-lg">
            Currently diving deep into iOS and visionOS development, exploring the future of spatial computing with{" "}
            <span className="font-medium">Reality Composer Pro</span> and{" "}
            <span className="font-medium">RealityKit</span>.
          </p>

          <p className="text-base md:text-lg">
            Simultaneously, I'm crafting modern web experiences using cutting-edge technologies while maintaining a strong focus on user experience and performance.
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-6 md:mt-8">
        <SocialLinks />
      </div>
    </header>
  );
}