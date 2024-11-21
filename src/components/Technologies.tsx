import { motion } from 'framer-motion';
import { 
  SiPhp, 
  SiSwift, 
  SiDotnet, 
  SiReact, 
  SiTailwindcss, 
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiMysql,
  SiCsharp,
  SiPython,
  SiFigma,
  SiXcode
} from 'react-icons/si';
import { TbAugmentedReality } from 'react-icons/tb';

const currentTechnologies = [
  { icon: SiPhp, name: 'PHP' },
  { icon: SiSwift, name: 'Swift/SwiftUI' },
  { icon: SiJavascript, name: 'JavaScript' },
  { icon: SiHtml5, name: 'HTML5' },
  { icon: SiCss3, name: 'CSS3' },
  { icon: SiGit, name: 'Git' },
  { icon: SiMysql, name: 'MySQL' },
  { icon: SiFigma, name: 'Figma' },
  { icon: SiXcode, name: 'Xcode' }
];

const learningTechnologies = [
 { icon: SiPython, name: 'Python' },
  { icon: SiCsharp, name: 'C#' },
  { icon: SiDotnet, name: '.NET' },
  { icon: SiReact, name: 'React' },
  { icon: SiTailwindcss, name: 'Tailwind' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: TbAugmentedReality, name: 'RealityKit' },
  { 
    icon: TbAugmentedReality, 
    name: 'Reality Composer Pro',
    className: "transform rotate-180"
  }
];

const TechGrid = ({ technologies }: { technologies: typeof currentTechnologies }) => (
  <div className="flex flex-wrap justify-center gap-6">
    {technologies.map((tech) => (
      <motion.div
        key={tech.name}
        className="flex flex-col items-center w-24"
        whileHover={{ scale: 1.1 }}
      >
        <tech.icon 
          className="w-8 h-8 md:w-10 md:h-10 dark:text-gray-400 text-gray-600 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" 
        />
        <span className="mt-2 text-sm dark:text-gray-400 text-gray-600 text-center">
          {tech.name}
        </span>
      </motion.div>
    ))}
  </div>
);

export function Technologies() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold mb-8 text-center dark:text-white text-gray-900">
        Technologies I Work With
      </h2>
      <TechGrid technologies={currentTechnologies} />
      <h2 className="text-2xl font-bold mt-16 mb-8 text-center dark:text-white text-gray-900">
        Technologies I'm Learning
      </h2>
      <TechGrid technologies={learningTechnologies} />
    </motion.div>
  );
}