import { FaGithub, FaTimes, FaChevronLeft, FaChevronRight, FaApple } from 'react-icons/fa';
import type { Project } from '../types/project';
import { useState, useCallback, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DetailModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export const DetailModal = memo(function DetailModal({ project, isOpen, onClose }: DetailModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

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

  // Navigation handlers
  const nextImage = useCallback(() => {
    setDirection(1); // Moving forward
    setCurrentImageIndex((prev) => 
      prev === project.media.length - 1 ? 0 : prev + 1
    );
  }, [project.media.length]);

  const prevImage = useCallback(() => {
    setDirection(-1); // Moving backward
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.media.length - 1 : prev - 1
    );
  }, [project.media.length]);

  const goToImage = useCallback((index: number) => {
    setDirection(index > currentImageIndex ? 1 : -1);
    setCurrentImageIndex(index);
  }, [currentImageIndex]);

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoPlaying || project.media.length <= 1) return;

    const interval = setInterval(() => {
      nextImage();
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextImage, project.media.length]);

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swiped left - go to next
      nextImage();
    }
    if (touchStart - touchEnd < -75) {
      // Swiped right - go to previous
      prevImage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-2 md:p-4">
        <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
        <div className="relative bg-white rounded-lg w-full max-w-4xl">
          <div className="p-4 md:p-6 border-b border-gray-200">
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="flex flex-col">
                <div className="flex items-start justify-between">
                  <h2 className="text-xl md:text-2xl font-bold">{project.title}</h2>
                  <button
                    onClick={onClose}
                    className="p-1.5 md:p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <FaTimes className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>

                <p className="text-sm md:text-base text-gray-600">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-3 md:gap-4 md:items-center md:justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 md:px-3 md:py-2 rounded-full bg-gray-100 text-sm"
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
                    className="flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    {project.linkIcon === 'appstore' ? (
                      <FaApple className="w-4 h-4 md:w-5 md:h-5" />
                    ) : project.linkIcon ? (
                      <img src={project.linkIcon} alt="" className="w-4 h-4 md:w-5 md:h-5 rounded grayscale brightness-0 object-contain" />
                    ) : (
                      <FaGithub className="w-4 h-4 md:w-5 md:h-5" />
                    )}
                    <span className="text-xs md:text-sm">{project.linkText || 'View on GitHub'}</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Image Carousel */}
          <div 
            className="relative bg-gray-50 overflow-hidden rounded-lg"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Image Display */}
            <div className="relative aspect-video flex items-center justify-center bg-gray-50 pt-4 md:pt-6">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.img
                  key={currentImageIndex}
                  src={project.media[currentImageIndex].url}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -100 }}
                  transition={{ duration: 0.3 }}
                  loading="lazy"
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              {project.media.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all"
                    aria-label="Previous image"
                  >
                    <FaChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all"
                    aria-label="Next image"
                  >
                    <FaChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              {project.media.length > 1 && (
                <div className="absolute top-2 md:top-4 right-2 md:right-4 px-3 py-1.5 rounded-full bg-black/50 text-white text-xs md:text-sm">
                  {currentImageIndex + 1} / {project.media.length}
                </div>
              )}
            </div>

            {/* Dot Indicators */}
            {project.media.length > 1 && (
              <div className="flex justify-center gap-2 py-4 bg-gray-50">
                {project.media.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'bg-gray-900 w-6'
                        : 'bg-gray-400 hover:bg-gray-600'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}

          </div>

          <div className="p-3 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
              {project.features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-3 md:p-6 rounded-lg bg-gray-50"
                >
                  <h3 className="text-base md:text-xl font-semibold mb-1.5 md:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
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

export default DetailModal;

