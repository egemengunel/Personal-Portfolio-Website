import { SocialLinks } from './SocialLinks';

export function Header() {
  return (
    <header className="text-center max-w-4xl mx-auto px-4">
      <div className="mb-4 md:mb-8">
        <img
          src="/profile.jpeg"
          alt="Profile"
          className="w-20 h-20 md:w-32 md:h-32 rounded-full mx-auto border-4 border-gray-200 dark:border-gray-700"
          loading="eager"
          decoding="async"
          width={128}
          height={128}
        />
        <h1 className="text-3xl md:text-5xl font-bold mt-3 md:mt-6 mb-3 md:mb-6 leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Egemen Günel
        </h1>
      </div>

      <div className="space-y-3 md:space-y-6 text-gray-600 dark:text-gray-300">
        <p className="text-base md:text-xl leading-relaxed">
          Hey 👋 I'm a Computer Engineering student at{" "}
          <span className="text-blue-500 dark:text-blue-400">
            Opole University of Technology
          </span>{" "}
          with a passion for exploring all things technology. Currently, I'm focusing on web development and iOS development, where I enjoy building personal projects alongside my university coursework. My Swift projects and this website are great examples of this hands-on approach.
        </p>

        <p className="text-sm md:text-lg leading-relaxed">
          I'm always looking to discover and learn new technologies. In the future, I would love to dive deeper into{" "}
          <span className="text-purple-500 dark:text-purple-400">Machine Learning</span> algorithms, integrate{" "}
          <span className="text-green-500 dark:text-green-400">RealityKit</span> into my projects, and create spatial applications for{" "}
          <span className="text-blue-500 dark:text-blue-400">visionOS</span>. Embracing the latest advancements in technology is what drives me forward.
        </p>
      </div>

      <div className="flex justify-center gap-6 mt-6 md:mt-8">
        <SocialLinks />
      </div>
    </header>
  );
}