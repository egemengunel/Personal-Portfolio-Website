import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../types/project';
import { DetailModal } from './DetailModal';
import { HiOutlineArrowRight } from 'react-icons/hi2';

export function Card(project: Project) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Falls back to the first tech stack icon when an entry has no app icon.
  const Icon = project.techStack[0]?.icon;
  const hasCustomIcon = !!project.icon;

  return (
    <>
      {/*
        The whole card is clickable, but it is not itself a button: a card that
        links to a case study would then nest one interactive element inside
        another. Instead the Details button stretches over the card with
        `after:inset-0`, and the case study link sits above it on z-10.
      */}
      <article className="group relative flex gap-3.5 md:gap-5 p-4 md:p-5 rounded-2xl bg-white border border-gray-200/80 hover:border-gray-300 hover:shadow-sm transition-colors">
        <div className="flex-shrink-0">
          {hasCustomIcon ? (
            <img
              src={project.icon}
              alt=""
              className="w-10 h-10 md:w-12 md:h-12 rounded-xl object-cover"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-900 flex items-center justify-center">
              {Icon && <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />}
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-[15px] md:text-base font-semibold text-gray-900">
              {project.title}
            </h3>
            {project.period && (
              <span className="hidden sm:inline text-xs text-gray-400 flex-shrink-0">
                {project.period}
              </span>
            )}
          </div>

          {(project.role || project.period) && (
            <p className="mt-0.5 text-xs md:text-[13px] text-gray-500">
              {project.role}
              {/* Above sm the period is right-aligned on the title row instead. */}
              {project.period && (
                <span className="sm:hidden">
                  {project.role ? ' · ' : ''}
                  {project.period}
                </span>
              )}
            </p>
          )}

          <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="mt-3 flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1 text-[13px] md:text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors after:absolute after:inset-0 after:rounded-2xl after:content-['']"
            >
              Details
              <HiOutlineArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>

            {project.caseStudySlug && (
              <Link
                to={`/case-studies/${project.caseStudySlug}`}
                className="relative z-10 text-[13px] md:text-sm text-gray-400 hover:text-gray-700 transition-colors"
              >
                Case study
              </Link>
            )}
          </div>
        </div>
      </article>

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
