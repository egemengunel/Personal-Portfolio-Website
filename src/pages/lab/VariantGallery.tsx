import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { MOCK } from './mockCaseStudy';
import { DesignSystemSection } from './DesignSystemBlocks';

/**
 * B — Gallery first, with A's title block.
 *
 * Icon sits inline with the app name; no "Case Study" eyebrow and no date.
 * The work comes before the words — a full-bleed scroller of screens — and the
 * decision sections alternate left/right with the image height capped so it
 * reads alongside the paragraph rather than towering over it.
 */
export function VariantGallery() {
  return (
    <article className="pt-12 md:pt-16">
      {/* Title — icon inline with the app name */}
      <header>
        {/* Font size lives on the row so the icon can be sized in em. The system
            font's cap height measures ~0.705em, so 0.7em keeps the icon just
            under the cap of the "L" at every breakpoint. */}
        <div className="flex items-center gap-3 md:gap-4 text-4xl md:text-6xl">
          <img
            src={MOCK.icon}
            alt=""
            className="h-[0.7em] w-[0.7em] rounded-[22%] flex-shrink-0 shadow-sm"
          />
          <h1 className="font-bold tracking-tight text-gray-900 leading-none">
            {MOCK.title}
          </h1>
        </div>

        <p className="mt-5 text-lg md:text-xl text-gray-500 leading-snug max-w-3xl">
          {MOCK.tagline}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-400">
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

      {/* The work, before the words — bleeds past the container on both sides */}
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

      {/* Summary */}
      <div className="mt-16 grid md:grid-cols-3 gap-8 md:gap-10">
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

      {/* Decisions — image and text alternate sides and sit at a similar height */}
      <div className="mt-20 space-y-20">
        {MOCK.sections.map((section, i) => {
          const imageRight = i % 2 === 0;
          return (
            <section key={section.id} className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
              <div className={imageRight ? 'md:order-1' : 'md:order-2'}>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.body.map((p, j) => (
                    <p key={j} className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              <figure className={imageRight ? 'md:order-2' : 'md:order-1'}>
                <img
                  src={section.media}
                  alt=""
                  className="mx-auto w-auto max-h-[22rem] md:max-h-[26rem] rounded-2xl border border-gray-200/80 bg-white"
                />
                <figcaption className="mt-3 text-sm text-gray-400 leading-relaxed text-center">
                  Placeholder caption — say what the reader should notice.
                </figcaption>
              </figure>
            </section>
          );
        })}

        <DesignSystemSection />
      </div>

      <div className="mt-16 pt-8 border-t border-gray-200/70">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Built with</span>
        <p className="mt-2 text-sm text-gray-500">{MOCK.stack.join(' · ')}</p>
      </div>
    </article>
  );
}
