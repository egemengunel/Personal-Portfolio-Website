import { MOCK } from './mockCaseStudy';

/**
 * The design-system section, rendered as live CSS rather than as a screenshot
 * of a Sketch artboard. Shared by every layout variant so the variants differ
 * only in arrangement.
 */

export function Palette({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`grid gap-3 ${compact ? 'grid-cols-3 sm:grid-cols-6' : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'}`}
    >
      {MOCK.palette.map((swatch) => (
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
  );
}

export function TypeScale() {
  return (
    <div className="divide-y divide-gray-200/70 border-y border-gray-200/70">
      {MOCK.type.map((row) => (
        <div
          key={row.label}
          className="py-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6"
        >
          <span className="w-20 flex-shrink-0 text-xs font-medium text-gray-400 uppercase tracking-wider">
            {row.label}
          </span>
          <span className={`${row.className} text-gray-900 min-w-0 truncate`}>{row.sample}</span>
        </div>
      ))}
    </div>
  );
}

export function ComponentSpecimens() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <button className="px-4 py-2 rounded-full text-sm font-medium text-white bg-gray-900">
        Add study materials
      </button>
      <button className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 bg-gray-100 border border-gray-200">
        Secondary
      </button>
      {MOCK.palette.slice(0, 3).map((swatch) => (
        <span
          key={swatch.name}
          className="px-3 py-1 rounded-full text-xs font-medium text-white"
          style={{ backgroundColor: swatch.value }}
        >
          {swatch.name}
        </span>
      ))}
      <div
        className="h-14 w-24 rounded-xl border border-black/5"
        style={{
          backgroundImage: `linear-gradient(160deg, ${MOCK.palette[0].value}, ${MOCK.palette[2].value})`,
        }}
      />
    </div>
  );
}

export function DesignSystemSection({ title = 'The system behind it' }: { title?: string }) {
  return (
    <section>
      <h2 className="text-lg md:text-xl font-semibold text-gray-900">{title}</h2>
      <p className="mt-2 text-sm md:text-base text-gray-500 leading-relaxed max-w-2xl">
        Placeholder line about what the system had to solve. Swatches and type below are real CSS,
        not screenshots — the page is built out of the system it documents.
      </p>
      <div className="mt-6 space-y-8">
        <Palette />
        <TypeScale />
        <ComponentSpecimens />
      </div>
    </section>
  );
}
