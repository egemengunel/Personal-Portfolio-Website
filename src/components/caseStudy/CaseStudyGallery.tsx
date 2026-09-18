import type { CaseStudyMedia } from '../../types/caseStudy';

/**
 * The work before the words.
 *
 * Images are sized by HEIGHT, not width. App Store sheets come in one-panel
 * (ratio ~2.2) and two-panel (~1.1) shapes; a fixed-width card would render
 * the one-panel screens at double the height of everything beside them. Fixing
 * the height instead puts every screen on the same baseline and lets the width
 * vary, which is what the eye actually reads as consistent.
 */
export function CaseStudyGallery({ items }: { items: CaseStudyMedia[] }) {
  if (items.length === 0) return null;

  return (
    <div className="mt-10 -mx-4 md:-mx-8 lg:-mx-16">
      {/* scroll-pl-* must mirror px-*: with `snap-mandatory`, snapping aligns the
          first item to the scrollport edge and scrolls the padding away, so the
          leading gutter vanishes. scroll-padding moves the snap origin inward —
          the CSS counterpart of a ScrollView's horizontal safe-area inset. */}
      <div className="flex gap-4 overflow-x-auto px-4 md:px-8 lg:px-16 scroll-pl-4 md:scroll-pl-8 lg:scroll-pl-16 pb-4 snap-x snap-mandatory">
        {items.map((item) => (
          <figure key={item.url} className="snap-start flex-shrink-0">
            <img
              src={item.url}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-[22rem] sm:h-[26rem] lg:h-[30rem] w-auto rounded-2xl border border-gray-200/80 bg-white"
            />
            {item.caption && (
              <figcaption className="mt-3 max-w-xs text-sm text-gray-400 leading-relaxed">
                {item.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}

export default CaseStudyGallery;
