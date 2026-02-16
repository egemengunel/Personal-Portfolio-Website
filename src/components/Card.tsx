import { useState } from 'react';
import type { Project } from '../types/project';
import { DetailModal } from './DetailModal';
import { HiOutlineArrowRight } from 'react-icons/hi2';

export function Card(project: Project) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Get the icon - either custom image or first tech stack icon
  const Icon = project.techStack[0]?.icon;
  const hasCustomIcon = !!project.icon;

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="flex gap-3.5 md:gap-5 p-4 md:p-5 rounded-2xl bg-white border border-gray-200/80 hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer group"
      >
        {/* Icon Section */}
        <div className="flex-shrink-0">
          {hasCustomIcon ? (
            <img 
              src={project.icon} 
              alt={`${project.title} icon`}
              className="w-10 h-10 md:w-12 md:h-12 rounded-xl object-cover"
            />
          ) : (
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-900 flex items-center justify-center">
              {Icon && (
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              )}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1 min-w-0 flex flex-col">
          <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-0.5">
            {project.title}
          </h3>
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed flex-1">
            {project.description}
          </p>
          
          {/* Link at bottom right */}
          <div className="flex justify-end mt-2">
            <span className="flex items-center gap-1 text-xs md:text-sm text-gray-400 group-hover:text-gray-600 transition-colors">
              {project.link === '#' ? 'View Details' : 'View Project'}
              <HiOutlineArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 transition-transform group-hover:translate-x-0.5" />
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
