import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** React Router keeps the scroll position across navigations; a portfolio should not. */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
