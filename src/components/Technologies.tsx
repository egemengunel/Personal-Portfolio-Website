import { motion } from 'framer-motion';
import { 
  SiSwift,  
  SiTailwindcss, 
  SiJavascript,
  SiTypescript,
  SiGit,
  SiPrisma,
  SiPython,
  SiFigma,
  SiXcode
} from 'react-icons/si';

const TechIcons = {
  Current: {
    SiSwift, SiJavascript, SiTypescript, SiPython
  },
  Tools: {
    SiGit, SiPrisma, SiFigma, SiXcode, SiTailwindcss
  }
};

const languages = [
  { icon: TechIcons.Current.SiSwift, name: 'Swift' },
  { icon: TechIcons.Current.SiJavascript, name: 'JavaScript' },
  { icon: TechIcons.Current.SiTypescript, name: 'TypeScript' },
  { icon: TechIcons.Current.SiPython, name: 'Python' }
 
];

const tools = [
  { icon: TechIcons.Tools.SiGit, name: 'Git' },
  { icon: TechIcons.Tools.SiPrisma, name: 'Prisma' },
  { icon: TechIcons.Tools.SiFigma, name: 'Figma' },
  { icon: TechIcons.Tools.SiXcode, name: 'XCode' },
  { icon: TechIcons.Tools.SiTailwindcss, name: 'Tailwind' },
];

const TechGrid = ({ technologies }: { technologies: typeof languages }) => (
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

const Technologies = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold mb-8 text-center dark:text-white text-gray-900">
        Technologies I Work With:
      </h2>
      <TechGrid technologies={languages} />
      <h2 className="text-2xl font-bold mt-16 mb-8 text-center dark:text-white text-gray-900">
       Tools I Use:
      </h2>
      <TechGrid technologies={tools} />
    </motion.div>
  );
}

export default Technologies;