import { FaGithub, FaApple } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import type { Project } from '../types/project';
import { useCallback, useEffect, memo } from 'react';

interface DetailModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export const DetailModal = memo(function DetailModal({ project, isOpen, onClose }: DetailModalProps) {
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
      <div className="min-h-screen md:flex md:items-center md:justify-center md:p-4">
        <div className="fixed inset-0 bg-black/40 hidden md:block" onClick={onClose} />
        <div className="relative bg-white md:bg-white/95 md:backdrop-blur-xl md:rounded-2xl w-full md:max-w-7xl min-h-screen md:min-h-0 md:max-h-[90vh] flex flex-col md:shadow-2xl md:border md:border-white/20">
          
          {/* Header - Frosted glass bar */}
          <div className="sticky top-0 z-10 px-5 py-4 md:px-8 md:py-5 border-b border-gray-200/60 flex-shrink-0 bg-white/70 backdrop-blur-2xl md:rounded-t-2xl">
            <div className="flex items-center justify-between">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">{project.title}</h2>
              <div className="flex items-center gap-2.5">
                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-1.5 md:px-4 md:py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/80 hover:bg-white/80 transition-all text-gray-700 hover:text-gray-900"
                  >
                    {project.linkIcon === 'appstore' ? (
                      <FaApple className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    ) : project.linkIcon ? (
                      <img src={project.linkIcon} alt="" className="w-3.5 h-3.5 md:w-4 md:h-4 rounded grayscale brightness-0 object-contain" />
                    ) : (
                      <FaGithub className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    )}
                    <span className="text-xs md:text-sm font-medium">{project.linkText || 'View on GitHub'}</span>
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-black/5 transition-all flex-shrink-0"
                >
                  <IoCloseOutline className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Two-column body */}
          <div className="flex flex-col md:flex-row flex-1 min-h-0 overflow-y-auto md:overflow-hidden">
            
            {/* Left side - Description & Skills */}
            <div className="w-full md:w-1/2 p-5 md:p-8 md:overflow-y-auto border-b md:border-b-0 md:border-r border-gray-200/60">
              
              {/* Project Description */}
              <div className="mb-8">
                <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Project description</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-5">
                  {project.description}
                </p>
                
                {/* Features as description bullets */}
                <div className="space-y-3">
                  {project.features.map((feature) => (
                    <div key={feature.title} className="text-sm md:text-base text-gray-600 leading-relaxed">
                      <span className="font-medium text-gray-800">{feature.title}:</span>{' '}
                      {feature.description}
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills and Deliverables */}
              <div>
                <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Skills and deliverables</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-sm bg-gray-50/80 hover:bg-gray-100 transition-colors"
                      title={tech.name}
                    >
                      <tech.icon className="w-3.5 h-3.5 text-gray-500" />
                      <span className="text-xs md:text-sm font-medium text-gray-600">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Scrollable Images */}
            <div className="w-full md:w-1/2 md:overflow-y-auto bg-gray-50/50">
              <div className="p-5 md:p-8 space-y-4">
                {project.media.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl overflow-hidden bg-white shadow-sm flex items-center justify-center"
                  >
                    <img
                      src={item.url}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="max-w-full max-h-[70vh] h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default DetailModal;
