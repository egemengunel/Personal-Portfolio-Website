import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { MOCK } from './mockCaseStudy';
import { DesignSystemSection } from './DesignSystemBlocks';

/**
 * A — Editorial.
 * Big title, one wide opening image, narrow prose column, large figures
 * between sections. Engineering detail is demoted to a quiet line at the end.
 */
export function VariantEditorial() {
  return (
    <article className="pt-12 md:pt-20">
      {/* Title block — the title is the loudest thing on the page */}
      <header className="max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-wider">
          <img src={MOCK.icon} alt="" className="w-5 h-5 rounded" />
          <span>Case Study</span>
          <span className="text-gray-300">·</span>
          <span>{MOCK.timeframe}</span>
        </div>

        <h1 className="mt-5 text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[0.95]">
          {MOCK.title}
        </h1>

        <p className="mt-5 text-xl md:text-2xl text-gray-500 leading-snug">{MOCK.tagline}</p>

        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-400">
          <span>{MOCK.role}</span>
          <span className="text-gray-300">·</span>
          <span>{MOCK.platform}</span>
          <a
            href={MOCK.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-gray-900 font-medium hover:text-gray-500 transition-colors"
          >
            View on App Store
            <HiOutlineArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Opening image, edge to edge of the container */}
      <img
        src={MOCK.hero}
        alt=""
        className="mt-12 w-full rounded-2xl border border-gray-200/80"
      />

      {/* Summary */}
      <div className="mt-14 grid md:grid-cols-3 gap-8 md:gap-10 max-w-4xl">
        {(
          [
            ['Problem', MOCK.summary.problem],
            ['Approach', MOCK.summary.approach],
            ['Outcome', MOCK.summary.outcome],
          ] as const
        ).map(([label, value]) => (
          <div key={label}>
            <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wider">{label}</h2>
            <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">{value}</p>
          </div>
        ))}
      </div>

      {/* Body — narrow measure, wide figures */}
      <div className="mt-16 space-y-16">
        {MOCK.sections.map((section) => (
          <section key={section.id}>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 max-w-2xl">
              {section.heading}
            </h2>
            <div className="mt-4 space-y-4 max-w-2xl">
              {section.body.map((p, i) => (
                <p key={i} className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <figure className="mt-8">
              <img
                src={section.media}
                alt=""
                className="w-full rounded-2xl border border-gray-200/80"
              />
              <figcaption className="mt-3 text-sm text-gray-400 max-w-2xl">
                Placeholder caption — say what the reader should notice here.
              </figcaption>
            </figure>
          </section>
        ))}

        <DesignSystemSection />
      </div>

      {/* Engineering, demoted to the end */}
      <div className="mt-16 pt-8 border-t border-gray-200/70">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Built with</span>
        <p className="mt-2 text-sm text-gray-500">{MOCK.stack.join(' · ')}</p>
      </div>
    </article>
  );
}
