import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SiteHeader } from '../components/SiteHeader';
import { ScrollToTop } from '../components/ScrollToTop';
import Footer from '../components/Footer';

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <ScrollToTop />
      <SiteHeader />
      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-4 pb-16">
          <Suspense
            fallback={<div className="animate-pulse h-64 mt-12 bg-gray-200/70 rounded-2xl" />}
          >
            <Outlet />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
