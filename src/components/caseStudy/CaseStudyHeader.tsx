import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import type { CaseStudy } from '../../types/caseStudy';

/** Title, tagline and a single quiet line of facts. No eyebrow, date or icon. */
export function CaseStudyHeader({ study }: { study: CaseStudy }) {
  return (
    <header>
      <h1 className="text-5xl md:text-[4.25rem] font-bold tracking-tight text-gray-900 leading-none">
        {study.title}
      </h1>

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
