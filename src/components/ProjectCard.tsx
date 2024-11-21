import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 rounded-lg dark:bg-gray-800/50 bg-gray-100/70 hover:bg-gray-200/80 dark:hover:bg-gray-800/70 transition-colors"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <h3 className="text-xl font-semibold mb-2 dark:text-white text-gray-900">{title}</h3>
      <p className="dark:text-gray-400 text-gray-600 mb-4">{description}</p>
      <div className="flex items-center text-blue-600 dark:text-blue-400">
        <span className="mr-2">View Project</span>
        <FaArrowRight size={14} />
      </div>
    </motion.a>
  );
}