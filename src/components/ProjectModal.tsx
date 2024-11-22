import { useState } from 'react';
import { FaGithub, FaTimes } from 'react-icons/fa';
import type { Project } from '../types/project';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [mediaLoaded, setMediaLoaded] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
        <div className="relative bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl">
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 left-4 z-10 p-2 rounded-full bg-gray-900/50 hover:bg-gray-900/70 text-white transition-colors"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            <div className="absolute top-4 right-4 z-10 flex flex-wrap justify-end gap-2 max-w-[60%]">
              {project.techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-900/50 hover:bg-gray-900/70 text-white transition-colors"
                >
                  <tech.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>

            {project.media.map((media) => (
              <div key={media.url} className="relative">
                {media.type === 'video' ? (
                  <video
                    src={media.url}
                    poster={media.thumbnail}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full rounded-t-lg"
                    onLoadedData={() => setMediaLoaded(true)}
                  >
                    <source src={media.url} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={media.url}
                    alt={media.caption}
                    className="w-full rounded-t-lg"
                    loading="lazy"
                    onLoad={() => setMediaLoaded(true)}
                  />
                )}
              </div>
            ))}
          </div>
          
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">{project.title}</h2>
              {project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>View on GitHub</span>
                </a>
              )}
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              {project.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-lg bg-gray-50 dark:bg-gray-700/50"
                >
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
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
}

export default ProjectModal;