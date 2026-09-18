import { useState } from 'react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { VariantEditorial } from './lab/VariantEditorial';
import { VariantGallery } from './lab/VariantGallery';
import { VariantSplit } from './lab/VariantSplit';

/**
 * Throwaway route at /lab for comparing case-study layouts with placeholder
 * copy and real screenshots. Not linked from anywhere. Delete this file and
 * src/pages/lab/ once a direction is picked.
 */

const VARIANTS = [
  { id: 'editorial', label: 'A · Editorial', note: 'Big title, one opening image, narrow prose, wide figures.', render: VariantEditorial },
  { id: 'gallery', label: 'B · Gallery first', note: 'The work before the words — a bleeding scroller of App Store sheets.', render: VariantGallery },
  { id: 'split', label: 'C · Sticky split', note: 'Facts pinned in a left rail, right column almost entirely visual.', render: VariantSplit },
] as const;

export function LayoutLab() {
  const [active, setActive] = useState<(typeof VARIANTS)[number]['id']>('editorial');
  useDocumentMeta({
    title: 'Layout lab',
    description: 'Internal layout comparison.',
    path: '/lab',
  });

  const current = VARIANTS.find((v) => v.id === active)!;
  const Render = current.render;

  return (
    <>
      <div className="sticky top-14 md:top-16 z-30 -mx-4 px-4 py-3 bg-amber-50/90 backdrop-blur border-b border-amber-200/70">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-amber-700 uppercase tracking-wider mr-1">
            Layout lab
          </span>
          {VARIANTS.map((variant) => (
            <button
              key={variant.id}
              onClick={() => setActive(variant.id)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                active === variant.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-500 border border-gray-200 hover:text-gray-900'
              }`}
            >
              {variant.label}
            </button>
          ))}
        </div>
        <p className="mt-2 text-xs text-amber-700/80">{current.note} Placeholder copy throughout.</p>
      </div>

      <Render />
    </>
  );
}

export default LayoutLab;
