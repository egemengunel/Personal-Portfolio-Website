import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { MOCK } from './mockCaseStudy';
import { DesignSystemSection } from './DesignSystemBlocks';

/**
 * B — Gallery first.
 * Title, then the work immediately — a full-bleed horizontal scroller of App
 * Store sheets before any prose. Written reasoning sits underneath.
 */
export function VariantGallery() {
  return (
    <article className="pt-12 md:pt-16">
      <header className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[0.95]">
          {MOCK.title}
        </h1>
        <p className="mt-5 text-xl md:text-2xl text-gray-500 leading-snug">{MOCK.tagline}</p>
      </header>

      {/* Work first — bleeds past the container on both sides */}
      <div className="mt-10 -mx-4 md:-mx-8 lg:-mx-16">
        <div className="flex gap-4 overflow-x-auto px-4 md:px-8 lg:px-16 pb-4 snap-x snap-mandatory">
          {MOCK.gallery.map((shot) => (
            <figure
              key={shot.url}
              className="snap-start flex-shrink-0 w-[78vw] sm:w-[60vw] md:w-[42vw] lg:w-[32vw]"
            >
              <img
                src={shot.url}
                alt=""
                className="w-full rounded-2xl border border-gray-200/80 bg-white"
              />
              <figcaption className="mt-3 text-sm text-gray-400 leading-relaxed">
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Facts, kept to one quiet row */}
      <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-400 border-y border-gray-200/70 py-4">
        <span>{MOCK.role}</span>
        <span className="text-gray-300">·</span>
        <span>{MOCK.timeframe}</span>
        <span className="text-gray-300">·</span>
        <span>{MOCK.platform}</span>
        <a
          href={MOCK.appStore}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-gray-900 font-medium hover:text-gray-500 transition-colors ml-auto"
        >
          View on App Store
          <HiOutlineArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-8 md:gap-10">
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

      {/* Decisions, alternating text and image */}
      <div className="mt-16 space-y-16">
        {MOCK.sections.map((section, i) => (
          <section
            key={section.id}
            className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
              i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
            }`}
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {section.body.map((p, j) => (
                  <p key={j} className="text-base text-gray-600 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <img
              src={section.media}
              alt=""
              className="w-full rounded-2xl border border-gray-200/80"
            />
          </section>
        ))}

        <DesignSystemSection />
      </div>

      <div className="mt-16 pt-8 border-t border-gray-200/70">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Built with</span>
        <p className="mt-2 text-sm text-gray-500">{MOCK.stack.join(' · ')}</p>
      </div>
    </article>
  );
}
