import { lazy, Suspense, memo } from 'react';
import { Header } from './components/Header';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { ErrorBoundary } from './components/ErrorBoundary';

// Group lazy loaded components
const LazyComponents = {
  Projects: lazy(() => import('./components/Projects').then(m => ({ default: m.Projects }))),
  Technologies: lazy(() => import('./components/Technologies')),
  Footer: lazy(() => import('./components/Footer')),
  CVDownload: lazy(() => import('./components/CVDownload'))
};

// Memoize static components
const MemoizedHeader = memo(Header);
const MemoizedThemeToggle = memo(ThemeToggle);

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
          <div className="max-w-4xl mx-auto px-4 py-16">
            <MemoizedHeader />
            <Suspense fallback={<div className="animate-pulse h-16 bg-gray-200 dark:bg-gray-800 rounded" />}>
              <LazyComponents.CVDownload />
              <LazyComponents.Technologies />
              <LazyComponents.Projects />
              <LazyComponents.Footer />
            </Suspense>
            <div className="fixed bottom-6 right-6">
              <MemoizedThemeToggle />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;