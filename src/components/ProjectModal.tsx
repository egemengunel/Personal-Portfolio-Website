import { FaGithub, FaTimes } from 'react-icons/fa';
import type { Project } from '../types/project';
import { useState, useCallback, useEffect, memo } from 'react';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = memo(function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [handleEscape]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-2 md:p-4">
        <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
        <div className="relative bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl">
          <div className="p-4 md:p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="flex items-start justify-between">
                <h2 className="text-xl md:text-2xl font-bold">{project.title}</h2>
                <button
                  onClick={onClose}
                  className="p-1.5 md:p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <FaTimes className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-3 md:gap-4 md:items-center md:justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 md:px-3 md:py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-sm"
                      title={tech.name}
                    >
                      <tech.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      <span className="text-xs md:text-sm font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
                
                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <FaGithub className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-xs md:text-sm">View on GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="relative">
            {project.media.map((item, index) => (
              <div key={index} className="relative">
                {item.type === 'video' ? (
                  <>
                    {isVideoLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                      </div>
                    )}
                    <div className="relative pt-[56.25%]">
                      <iframe
                        src={`${item.url}&autoplay=1&controls=0&loop=1&background=1&muted=1`}
                        className="absolute inset-0 w-full h-full rounded-lg"
                        allow="autoplay; fullscreen; picture-in-picture"
                        onLoad={() => setIsVideoLoading(false)}
                      ></iframe>
                    </div>
                  </>
                ) : (
                  <img
                    src={item.url}
                    alt={item.caption}
                    className="w-full"
                    loading="lazy"
                  />
                )}
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.caption}</p>
              </div>
            ))}
          </div>

          <div className="p-3 md:p-6">
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 md:mb-6">
              {project.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
              {project.features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-3 md:p-6 rounded-lg bg-gray-50 dark:bg-gray-700/50"
                >
                  <h3 className="text-base md:text-xl font-semibold mb-1.5 md:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProjectModal;