import type { CaseStudyMedia, CaseStudySection } from '../../types/caseStudy';

/**
 * No card, no border, no white fill. Exports carry their own rounded device
 * corners and a transparent margin, so a filled box behind one draws a second
 * rectangle around a shape that already has edges. Screens sit on the page.
 */
const chrome = 'rounded-[1.75rem]';

/**
 * Phone screens are sized by height, exactly like the gallery: a capped height
 * with the width left to the aspect ratio puts a lone screen and the two halves
 * of a compare pair on the same baseline, and stops a section that mixes them
 * from looking like two unrelated sets. Never set a width here as well — an
 * explicit width plus a max-height squashes the image instead of scaling it.
 */
const byHeight = `mx-auto w-auto max-w-full max-h-[22rem] md:max-h-[26rem] ${chrome}`;
/**
 * Stacked compare panels. Height-capped like everything else so the two halves
 * of a pair share a baseline, but free to fill the column when the crop is wide
 * enough that width binds first, which is what a tab bar or a single control
 * does. The cap is low enough that a landscape panel still fits the column.
 */
const byStacked = `mx-auto w-auto max-w-full max-h-[20rem] ${chrome}`;

/** How many of the media column's six tracks a figure occupies. */
const spanClass = {
  full: 'col-span-6',
  half: 'col-span-3',
  third: 'col-span-2',
} as const;

/** One figure: a single image, or a labelled before/after pair. */
function Figure({ media, className = '' }: { media: CaseStudyMedia; className?: string }) {
  const stacked = media.compareLayout === 'rows';

  return (
    <figure className={className}>
      {media.compareWith ? (
        <div className={stacked ? 'space-y-4' : 'grid grid-cols-2 gap-3 items-end'}>
          {[media.url, media.compareWith].map((src, k) => (
            <div key={src}>
              <img
                src={src}
                alt=""
                loading="lazy"
                decoding="async"
                className={stacked ? byStacked : byHeight}
              />
              {media.compareLabels?.[k] && (
                <p className="mt-2 text-xs text-gray-400 text-center">{media.compareLabels[k]}</p>
              )}
            </div>
          ))}
        </div>
      ) : media.surfaceTint ? (
        <div
          className="rounded-[1.75rem] px-6 py-7"
          style={{ background: `linear-gradient(180deg, ${media.surfaceTint}, transparent)` }}
        >
          <img src={media.url} alt="" loading="lazy" decoding="async" className={byHeight} />
        </div>
      ) : (
        <img src={media.url} alt="" loading="lazy" decoding="async" className={byHeight} />
      )}
      {media.caption && (
        <figcaption className="mt-3 text-sm text-gray-400 leading-relaxed text-center">
          {media.caption}
        </figcaption>
      )}
    </figure>
  );
}

/**
 * Decision sections. A section with imagery splits into two columns and
 * alternates which side the imagery falls on; a section without imagery runs
 * the full width of the article rather than hugging one edge. The two columns
 * start at the same line — centering the shorter one leaves the first screen
 * floating somewhere beside the third paragraph, with no image next to the
 * heading it belongs to.
 */
export function CaseStudySections({ sections }: { sections: CaseStudySection[] }) {
  return (
    <div className="space-y-20">
      {sections.map((section, i) => {
        const media = section.media ?? [];
        const imageRight = i % 2 === 0;

        const heading = (
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
            {section.heading}
          </h2>
        );
        const body = (
          <div className="mt-4 space-y-4">
            {section.body.map((paragraph, j) => (
              <p key={j} className="text-base md:text-lg text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        );

        if (media.length === 0) {
          return (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              {heading}
              {body}
            </section>
          );
        }

        return (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-24 grid md:grid-cols-2 gap-8 md:gap-14 items-start"
          >
            <div className={imageRight ? 'md:order-1' : 'md:order-2'}>
              {heading}
              {body}
            </div>

            <div
              className={`grid grid-cols-6 gap-x-5 gap-y-10 items-start ${
                imageRight ? 'md:order-2' : 'md:order-1'
              }`}
            >
              {media.map((item) => (
                <Figure
                  key={item.url}
                  media={item}
                  className={spanClass[item.span ?? 'full']}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default CaseStudySections;
