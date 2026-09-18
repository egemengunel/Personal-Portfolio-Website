import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import type { CaseStudy } from '../../types/caseStudy';

/**
 * Icon sits inline with the app name. The font size lives on the row so the
 * icon can be sized in em: the system font's cap height measures ~0.705em, so
 * 0.7em keeps the icon just under the cap of the first letter at every
 * breakpoint, instead of drifting whenever the title size changes.
 */
export function CaseStudyHeader({ study }: { study: CaseStudy }) {
  return (
    <header>
      <div className="flex items-center gap-3 md:gap-4 text-5xl md:text-[4.25rem]">
        {study.icon && (
          <img
            src={study.icon}
            alt=""
            className="h-[0.7em] w-[0.7em] rounded-[22%] flex-shrink-0 shadow-sm"
          />
        )}
        <h1 className="font-bold tracking-tight text-gray-900 leading-none">{study.title}</h1>
      </div>

      <p className="mt-5 text-lg md:text-xl text-gray-500 leading-snug max-w-3xl">
        {study.tagline}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400">
        <span>{study.role}</span>
        {study.links?.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-gray-900 font-medium hover:text-gray-500 transition-colors"
          >
            {link.label}
            <HiOutlineArrowUpRight className="w-3.5 h-3.5" />
          </a>
        ))}
      </div>
    </header>
  );
}

export default CaseStudyHeader;
