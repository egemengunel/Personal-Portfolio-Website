import type { CaseStudyDesignSystem } from '../../types/caseStudy';

/**
 * Renders the design system as live CSS wherever possible — swatches and type
 * are real styles, so the page is built out of the system it documents. Only
 * component sheets that cannot be reproduced in CSS come in as images.
 */
export function CaseStudyDesignSystemPanel({ system }: { system: CaseStudyDesignSystem }) {
  const { heading = 'The system behind it', note, palette, typeScale, media } = system;

  return (
    <section id="system" className="scroll-mt-24">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
        {heading}
      </h2>
      {note && (
        <p className="mt-3 text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">{note}</p>
      )}

      <div className="mt-8 space-y-10">
        {palette && palette.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {palette.map((swatch) => (
              <div key={swatch.name}>
                <div
                  className="aspect-square rounded-xl border border-black/5 shadow-sm"
                  style={{ backgroundColor: swatch.value }}
                />
                <div className="mt-2 text-xs font-medium text-gray-900">{swatch.name}</div>
                <div className="text-xs text-gray-400 font-mono">{swatch.value}</div>
              </div>
            ))}
          </div>
        )}

        {typeScale && typeScale.length > 0 && (
          <div className="divide-y divide-gray-200/70 border-y border-gray-200/70">
            {typeScale.map((row) => (
              <div
                key={row.label}
                className="py-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6"
              >
                <span className="w-20 flex-shrink-0 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  {row.label}
                </span>
                <span
                  className="text-gray-900 min-w-0 truncate"
                  style={{
                    fontSize: row.size,
                    fontWeight: row.weight,
                    letterSpacing: row.tracking,
                  }}
                >
                  {row.sample}
                </span>
                {row.maps && (
                  <span className="sm:ml-auto flex-shrink-0 text-xs text-gray-400 font-mono">
                    {row.maps}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}

        {media && media.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4">
            {media.map((item) => (
              <figure key={item.url}>
                <img
                  src={item.url}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-[1.75rem]"
                />
                {item.caption && (
                  <figcaption className="mt-2.5 text-sm text-gray-400 leading-relaxed">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default CaseStudyDesignSystemPanel;
