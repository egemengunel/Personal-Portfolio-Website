import { useEffect } from 'react';

export function usePerformanceMonitor(componentName: string) {
  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      console.debug(`${componentName} render time: ${endTime - startTime}ms`);
    };
  }, [componentName]);
}