import type { CaseStudySection } from '../../types/caseStudy';

/**
 * Decision sections. Text and image alternate sides, and the image height is
 * capped so it reads alongside the paragraph rather than towering over it.
 */
export function CaseStudySections({ sections }: { sections: CaseStudySection[] }) {
  return (
    <div className="space-y-20">
      {sections.map((section, i) => {
        const media = section.media?.[0];
        const imageRight = i % 2 === 0;

        if (!media) {
          return (
            <section key={section.id} id={section.id} className="scroll-mt-24 max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph, j) => (
                  <p key={j} className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          );
        }

        return (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-24 grid md:grid-cols-2 gap-8 md:gap-14 items-center"
          >
            <div className={imageRight ? 'md:order-1' : 'md:order-2'}>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph, j) => (
                  <p key={j} className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <figure className={imageRight ? 'md:order-2' : 'md:order-1'}>
              {media.compareWith ? (
                <div className="grid grid-cols-2 gap-3">
                  {[media.url, media.compareWith].map((src, k) => (
                    <div key={src}>
                      <img
                        src={src}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="w-full rounded-xl border border-gray-200/80 bg-white"
                      />
                      {media.compareLabels?.[k] && (
                        <p className="mt-2 text-xs text-gray-400 text-center">
                          {media.compareLabels[k]}
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
                  className="mx-auto w-auto max-w-full max-h-[22rem] md:max-h-[26rem] rounded-2xl border border-gray-200/80 bg-white"
                />
              )}
              {media.caption && (
                <figcaption className="mt-3 text-sm text-gray-400 leading-relaxed text-center">
                  {media.caption}
                </figcaption>
              )}
            </figure>
          </section>
        );
      })}
    </div>
  );
}

export default CaseStudySections;
