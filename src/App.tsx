import { lazy, Suspense, memo } from 'react';
import { Header } from './components/Header';
import { ErrorBoundary } from './components/ErrorBoundary';

// Group lazy loaded components
const LazyComponents = {
  WorkExperience: lazy(() => import('./components/WorkExperience').then(m => ({ default: m.WorkExperience }))),
  Projects: lazy(() => import('./components/Projects').then(m => ({ default: m.Projects }))),
  Footer: lazy(() => import('./components/Footer')),
  CVDownload: lazy(() => import('./components/CVDownload'))
};

// Memoize static components
const MemoizedHeader = memo(Header);

function App() {
  return (
    <ErrorBoundary>
  
        <div className="min-h-screen bg-gray-50 text-gray-900">
          <div className="max-w-4xl mx-auto px-4 py-16">
            <MemoizedHeader />
            <Suspense fallback={<div className="animate-pulse h-16 bg-gray-200 rounded" />}>
              <LazyComponents.CVDownload />
              <LazyComponents.WorkExperience />
              <LazyComponents.Projects />
              <LazyComponents.Footer />
            </Suspense>
            <div className="fixed bottom-6 right-6">
              
            </div>
          </div>
        </div>
 
    </ErrorBoundary>
  );
}

export default App;