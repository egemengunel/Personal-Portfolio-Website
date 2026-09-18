import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';

const CaseStudiesIndex = lazy(() => import('./pages/CaseStudiesIndex'));
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="case-studies" element={<CaseStudiesIndex />} />
          <Route path="case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
