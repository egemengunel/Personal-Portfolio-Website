import { lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';

const Projects = lazy(() => import('./components/Projects').then(module => ({ default: module.Projects })));
const Technologies = lazy(() => import('./components/Technologies'));
const Footer = lazy(() => import('./components/Footer'));
const CVDownload = lazy(() => import('./components/CVDownload'));

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <Header />
          <Suspense fallback={<div className="h-16" />}>
            <CVDownload />
            <Technologies />
            <Projects />
            <Footer />
          </Suspense>
          <div className="fixed bottom-6 right-6">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;