import { Link, Navigate, useParams } from 'react-router-dom';
import { HiOutlineArrowLeft, HiOutlineArrowUpRight } from 'react-icons/hi2';
import { getCaseStudy } from '../data/caseStudiesData';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import type { CaseStudyMedia } from '../types/caseStudy';

function Figure({ media }: { media: CaseStudyMedia }) {
  return (
    <figure className="mt-6">
      {media.compareWith ? (
        <div className="grid grid-cols-2 gap-3">
          {[media.url, media.compareWith].map((src, i) => (
            <div key={src}>
              <img
                src={src}
                alt=""
                loading="lazy"
                decoding="async"
                className="w-full rounded-xl border border-gray-200/80 bg-white"
              />
              {media.compareLabels?.[i] && (
                <p className="mt-2 text-xs text-gray-400 text-center">
                  {media.compareLabels[i]}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <img
          src={media.url}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full rounded-xl border border-gray-200/80 bg-white"
        />
      )}
      {media.caption && (
        <figcaption className="mt-3 text-sm text-gray-400 leading-relaxed max-w-2xl">
          {media.caption}
        </figcaption>
      )}
    </figure>
  );
}

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

  return (
    <article className="pt-10 md:pt-14">
      <Link
        to="/case-studies"
        className="group inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors"
      >
        <HiOutlineArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
        All case studies
      </Link>

      {/* Hero */}
      <header className="mt-6 flex items-start gap-4">
        {study.icon && (
          <img
            src={study.icon}
            alt=""
            className="w-14 h-14 md:w-16 md:h-16 rounded-2xl object-cover flex-shrink-0"
          />
        )}
        <div className="min-w-0">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">{study.title}</h1>
          <p className="mt-2 text-sm md:text-base text-gray-500 leading-relaxed max-w-2xl">
            {study.tagline}
          </p>
        </div>
      </header>

      {/* Facts */}
      <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-5 max-w-3xl">
        <div>
          <dt className="text-xs font-medium text-gray-400 uppercase tracking-wider">Role</dt>
          <dd className="mt-1.5 text-sm text-gray-600 leading-relaxed">{study.role}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium text-gray-400 uppercase tracking-wider">Timeframe</dt>
          <dd className="mt-1.5 text-sm text-gray-600">{study.timeframe}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium text-gray-400 uppercase tracking-wider">Platform</dt>
          <dd className="mt-1.5 text-sm text-gray-600">{study.platforms.join(', ')}</dd>
        </div>
        {study.links && study.links.length > 0 && (
          <div>
            <dt className="text-xs font-medium text-gray-400 uppercase tracking-wider">Live</dt>
            <dd className="mt-1.5 flex flex-col gap-1">
              {study.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-gray-900 hover:text-gray-500 transition-colors"
                >
                  {link.label}
                  <HiOutlineArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ))}
            </dd>
          </div>
        )}
      </dl>

      {/* Stack */}
      <div className="mt-6 flex flex-wrap gap-2">
        {study.stack.map((item) => (
          <span
            key={item}
            className="px-3 py-1 rounded-full text-xs font-medium text-gray-500 bg-gray-100 border border-gray-200/80"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Summary — the version for someone who reads 20 seconds and leaves */}
      {study.summary && (
        <div className="mt-10 p-5 md:p-6 rounded-2xl bg-white border border-gray-200/80 max-w-3xl">
          <dl className="space-y-4">
            {(
              [
                ['Problem', study.summary.problem],
                ['Approach', study.summary.approach],
                ['Outcome', study.summary.outcome],
              ] as const
            ).map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                  {label}
                </dt>
                <dd className="mt-1.5 text-sm md:text-base text-gray-600 leading-relaxed">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {/* Metrics */}
      {study.metrics && study.metrics.length > 0 && (
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
          {study.metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-4 rounded-xl bg-white border border-gray-200/80"
            >
              <div className="text-xl md:text-2xl font-semibold text-gray-900">
                {metric.value}
              </div>
              <div className="mt-1 text-xs text-gray-400 leading-relaxed">{metric.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Body */}
      {study.sections.length > 0 ? (
        <div className="mt-12 space-y-14">
          {study.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-4 max-w-2xl">
                {section.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm md:text-base text-gray-600 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.media?.map((media) => (
                <Figure key={media.url} media={media} />
              ))}
            </section>
          ))}
        </div>
      ) : (
        <div className="mt-12 p-6 rounded-2xl border border-dashed border-gray-300 max-w-2xl">
          <h2 className="text-sm font-medium text-gray-900">
            This write-up is still being written.
          </h2>
          <p className="mt-2 text-sm text-gray-500 leading-relaxed">
            The app itself is real and linked above — the long-form breakdown of the decisions
            behind it is in progress.
          </p>
        </div>
      )}
    </article>
  );
}

export default CaseStudyDetail;
