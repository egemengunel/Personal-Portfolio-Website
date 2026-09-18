import { Link } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi2';
import type { CaseStudy } from '../types/caseStudy';

const statusLabel: Record<CaseStudy['status'], string | null> = {
  published: null,
  writing: 'In progress',
  planned: 'Planned',
};

function CardBody({ study }: { study: CaseStudy }) {
  const label = statusLabel[study.status];

  return (
    <>
      <div className="flex items-start justify-between gap-3">
        {study.icon ? (
          <img
            src={study.icon}
            alt=""
            className="w-11 h-11 rounded-xl object-cover flex-shrink-0"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-11 h-11 rounded-xl bg-gray-900 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm font-semibold">
              {study.title.charAt(0)}
            </span>
          </div>
        )}

        {label && (
          <span className="px-2 py-0.5 rounded-full text-[11px] font-medium text-gray-400 bg-gray-100 border border-gray-200/80 flex-shrink-0">
            {label}
          </span>
        )}
      </div>

      <div className="mt-4 sm:mt-auto sm:pt-4">
        <h3 className="text-base font-semibold text-gray-900">{study.title}</h3>
        <p className="mt-1 text-sm text-gray-400 leading-relaxed line-clamp-3">
          {study.tagline}
        </p>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-200/70 flex items-center justify-between gap-2">
        <span className="text-xs text-gray-400 truncate">{study.timeframe}</span>
        {study.status !== 'planned' && (
          <HiOutlineArrowRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:text-gray-600" />
        )}
      </div>
    </>
  );
}

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const base =
    'flex flex-col sm:aspect-square p-4 md:p-5 rounded-2xl bg-white border transition-all';

  if (study.status === 'planned') {
    return (
      <div
        className={`${base} border-dashed border-gray-200 opacity-60`}
        aria-label={`${study.title}, case study planned`}
      >
        <CardBody study={study} />
      </div>
    );
  }

  return (
    <Link
      to={`/case-studies/${study.slug}`}
      className={`${base} group border-gray-200/80 hover:border-gray-300 hover:shadow-sm`}
    >
      <CardBody study={study} />
    </Link>
  );
}

export default CaseStudyCard;
