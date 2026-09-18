import { Link, Navigate, useParams } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi2';
import { getCaseStudy } from '../data/caseStudiesData';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { CaseStudyHeader } from '../components/caseStudy/CaseStudyHeader';
import { CaseStudyGallery } from '../components/caseStudy/CaseStudyGallery';
import { CaseStudySections } from '../components/caseStudy/CaseStudySections';
import { CaseStudyDesignSystemPanel } from '../components/caseStudy/CaseStudyDesignSystemPanel';

/**
 * Gallery-first layout: the screens come before the prose, decision sections
 * alternate sides, and the stack is demoted to a line at the very bottom.
 * Layout variants are prototyped at /lab before they land here.
 */
export function CaseStudyDetail() {
  const { slug } = useParams();
  const study = getCaseStudy(slug);

  useDocumentMeta({
    title: study ? `${study.title} — Case Study` : 'Case Study — Egemen Günel',
    description: study?.tagline ?? 'Case study.',
    path: `/case-studies/${slug ?? ''}`,
    image: study?.cover,
  });

  if (!study) return <Navigate to="/case-studies" replace />;

  const hasBody = study.sections.length > 0;

  return (
    <article className="pt-10 md:pt-14">
      <Link
        to="/case-studies"
        className="group inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors"
      >
        <HiOutlineArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
        All case studies
      </Link>

      <div className="mt-8">
        <CaseStudyHeader study={study} />
      </div>

      {study.gallery && <CaseStudyGallery items={study.gallery} />}

      {study.summary && (
        <div className="mt-16 grid md:grid-cols-3 gap-8 md:gap-10">
          {(
            [
              ['Problem', study.summary.problem],
              ['Approach', study.summary.approach],
              ['Outcome', study.summary.outcome],
            ] as const
          ).map(([label, value]) => (
            <div key={label}>
              <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                {label}
              </h2>
              <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">{value}</p>
            </div>
          ))}
        </div>
      )}

      {study.metrics && study.metrics.length > 0 && (
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
          {study.metrics.map((metric) => (
            <div key={metric.label} className="p-4 rounded-xl bg-white border border-gray-200/80">
              <div className="text-xl md:text-2xl font-semibold text-gray-900">{metric.value}</div>
              <div className="mt-1 text-xs text-gray-400 leading-relaxed">{metric.label}</div>
            </div>
          ))}
        </div>
      )}

      {hasBody ? (
        <div className="mt-20">
          <CaseStudySections sections={study.sections} />
        </div>
      ) : (
        <div className="mt-16 p-6 rounded-2xl border border-dashed border-gray-300 max-w-2xl">
          <h2 className="text-sm font-medium text-gray-900">
            This write-up is still being written.
          </h2>
          <p className="mt-2 text-sm text-gray-500 leading-relaxed">
            The app itself is real and linked above — the long-form breakdown of the decisions
            behind it is in progress.
          </p>
        </div>
      )}

      {study.designSystem && (
        <div className="mt-20">
          <CaseStudyDesignSystemPanel system={study.designSystem} />
        </div>
      )}

      <div className="mt-16 pt-8 border-t border-gray-200/70">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
          Built with
        </span>
        <p className="mt-2 text-sm text-gray-500">{study.stack.join(' · ')}</p>
      </div>
    </article>
  );
}

export default CaseStudyDetail;
