import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import type { Project } from '../types/project';
import { ProjectModal } from './ProjectModal';

export function ProjectCard(project: Project) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        onClick={() => setIsModalOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="block p-4 md:p-6 rounded-lg dark:bg-gray-800/50 bg-gray-100/70 hover:bg-gray-200/80 dark:hover:bg-gray-800/70 transition-colors cursor-pointer"
        initial={false}
        animate={{
          scale: isHovered ? 1.02 : 1,
          transition: { duration: 0.2 }
        }}
      >
        <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 dark:text-white text-gray-900">
          {project.title}
        </h3>
        <p className="text-sm md:text-base dark:text-gray-400 text-gray-600 mb-3 md:mb-4">
          {project.description}
        </p>
        <div className="flex items-center text-blue-600 dark:text-blue-400">
          <span className="text-sm md:text-base mr-2">
            {project.link === '#' ? 'View Details' : 'View Project'}
          </span>
          <FaArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
        </div>
      </motion.div>

      {isModalOpen && (
        <ProjectModal
          project={project}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}

export default ProjectCard;