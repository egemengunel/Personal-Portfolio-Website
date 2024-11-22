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
        className="block p-8 rounded-lg dark:bg-gray-800/50 bg-gray-100/70 hover:bg-gray-200/80 dark:hover:bg-gray-800/70 transition-colors cursor-pointer"
        initial={false}
        animate={{
          scale: isHovered ? 1.02 : 1,
          transition: { duration: 0.2 }
        }}
      >
        <h3 className="text-2xl font-semibold mb-4 dark:text-white text-gray-900">
          {project.title}
        </h3>
        <p className="text-lg dark:text-gray-400 text-gray-600 mb-6">
          {project.description}
        </p>
        <div className="flex items-center text-blue-600 dark:text-blue-400">
          <span className="mr-2 text-lg">
            {project.link === '#' ? 'View Details' : 'View Project'}
          </span>
          <FaArrowRight size={16} />
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