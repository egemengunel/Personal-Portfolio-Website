import { useEffect } from 'react';

export function usePerformanceMonitor(componentName: string) {
  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      // Only log in development
      const isDev = typeof window !== 'undefined' && window.location.hostname === 'localhost';
      if (isDev) {
        console.debug(`${componentName} render time: ${endTime - startTime}ms`);
      }
    };
  }, [componentName]);
}