import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options = {}) {
  const optionsRef = useRef(options);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, {
      root: null,
      threshold: 0.1,
      ...optionsRef.current
    });

    observer.observe(currentElement);
    return () => observer.disconnect();
  }, []);

  return { ref: elementRef, isVisible };
}