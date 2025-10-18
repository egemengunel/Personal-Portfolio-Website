import { useState } from 'react';
import type { Project } from '../types/project';
import { DetailModal } from './DetailModal';

export function Card(project: Project) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Get the first tech stack icon as the main icon
  const Icon = project.techStack[0]?.icon;

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="flex gap-4 md:gap-6 p-4 md:p-6 rounded-lg bg-gray-100 hover:bg-gray-200 border-2 border-transparent hover:border-gray-300 transition-all cursor-pointer group"
      >
        {/* Icon Section */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gray-900 flex items-center justify-center">
            {Icon && (
              <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 min-w-0 flex flex-col">
          <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-gray-900">
            {project.title}
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-3 flex-1">
            {project.description}
          </p>
          
          {/* Link at bottom right */}
          <div className="flex justify-end">
            <span className="text-sm md:text-base text-gray-900 underline decoration-2 underline-offset-4 group-hover:text-black transition-colors">
              {project.link === '#' ? 'View Details' : 'View Project'}
            </span>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <DetailModal
          project={project}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}

export default Card;

