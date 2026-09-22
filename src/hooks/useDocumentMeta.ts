import { useEffect } from 'react';

export const SITE_URL = 'https://egemengunel.dev';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/profile.jpeg`;

interface DocumentMeta {
  title: string;
  description: string;
  /** Path only, e.g. "/case-studies/lucid". */
  path: string;
  image?: string;
}

const setMeta = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

/**
 * Keeps the tab title and share tags in sync with the active route.
 *
 * Caveat: social crawlers do not run JavaScript, so this fixes the browser tab
 * and anything that renders after hydration — not the card Slack or LinkedIn
 * builds from the raw HTML. Per-route share cards need prerendering; see the
 * note in README under "Deploying".
 */
export function useDocumentMeta({ title, description, path, image }: DocumentMeta) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const ogImage = image ? (image.startsWith('http') ? image : `${SITE_URL}${image}`) : DEFAULT_OG_IMAGE;

    document.title = title;
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    setMeta('meta[property="og:image"]', 'property', 'og:image', ogImage);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, path, image]);
}
