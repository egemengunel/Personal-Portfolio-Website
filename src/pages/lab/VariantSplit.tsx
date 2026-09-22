import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { MOCK } from './mockCaseStudy';
import { Palette, TypeScale, ComponentSpecimens } from './DesignSystemBlocks';

const NAV = [
  { id: 'overview', label: 'Overview' },
  { id: 'colour', label: 'Colour had to mean something' },
  { id: 'feedback', label: 'What I rejected' },
  { id: 'system', label: 'The system behind it' },
  { id: 'screens', label: 'Screens' },
];

/**
 * C — Sticky split.
 * A left rail that stays put (identity, facts, section nav) against a right
 * column that is almost entirely visual. Collapses to one column on mobile.
 */
export function VariantSplit() {
  return (
    <div className="pt-12 md:pt-16 grid md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] gap-10 md:gap-14">
      {/* Rail */}
      <aside className="md:sticky md:top-24 md:self-start">
        <img src={MOCK.icon} alt="" className="w-14 h-14 rounded-2xl" />
        <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          {MOCK.title}
        </h1>
        <p className="mt-3 text-sm text-gray-500 leading-relaxed">{MOCK.tagline}</p>

        <dl className="mt-6 space-y-3 text-sm">
          <div>
            <dt className="text-xs font-medium text-gray-400 uppercase tracking-wider">Role</dt>
            <dd className="mt-0.5 text-gray-600">{MOCK.role}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-gray-400 uppercase tracking-wider">When</dt>
            <dd className="mt-0.5 text-gray-600">{MOCK.timeframe}</dd>
          </div>
        </dl>

        <a
          href={MOCK.appStore}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 transition-colors"
        >
          View on App Store
          <HiOutlineArrowUpRight className="w-3.5 h-3.5" />
        </a>

        <nav className="mt-8 hidden md:block border-t border-gray-200/70 pt-5 space-y-2">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block text-sm text-gray-400 hover:text-gray-900 transition-colors leading-snug"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-8 hidden md:block">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
            Built with
          </span>
          <p className="mt-1.5 text-xs text-gray-400 leading-relaxed">{MOCK.stack.join(' · ')}</p>
        </div>
      </aside>

      {/* Content */}
      <div className="min-w-0 space-y-14">
        <section id="overview" className="scroll-mt-24 space-y-5">
          {(
            [
              ['Problem', MOCK.summary.problem],
              ['Approach', MOCK.summary.approach],
              ['Outcome', MOCK.summary.outcome],
            ] as const
          ).map(([label, value]) => (
            <div key={label}>
              <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                {label}
              </h2>
              <p className="mt-1.5 text-base md:text-lg text-gray-600 leading-relaxed">{value}</p>
            </div>
          ))}
        </section>

        {MOCK.sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              {section.heading}
            </h2>
            <div className="mt-3 space-y-4">
              {section.body.map((p, i) => (
                <p key={i} className="text-base text-gray-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <img
              src={section.media}
              alt=""
              className="mt-6 w-full rounded-2xl border border-gray-200/80"
            />
          </section>
        ))}

        <section id="system" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            The system behind it
          </h2>
          <div className="mt-6 space-y-8">
            <Palette compact />
            <TypeScale />
            <ComponentSpecimens />
          </div>
        </section>

        <section id="screens" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Screens</h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {MOCK.gallery.map((shot) => (
              <figure key={shot.url}>
                <img
                  src={shot.url}
                  alt=""
                  className="w-full rounded-2xl border border-gray-200/80 bg-white"
                />
                <figcaption className="mt-2.5 text-sm text-gray-400 leading-relaxed">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
