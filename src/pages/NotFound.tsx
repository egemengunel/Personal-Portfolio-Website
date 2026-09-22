import { Link } from 'react-router-dom';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function NotFound() {
  useDocumentMeta({
    title: 'Not found · Egemen Günel',
    description: 'That page does not exist.',
    path: '/404',
  });

  return (
    <div className="pt-16 md:pt-24 pb-12">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">Page not found</h1>
      <p className="mt-3 text-sm md:text-base text-gray-500 max-w-md leading-relaxed">
        That link does not point anywhere on this site.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors"
      >
        Back to the homepage
      </Link>
    </div>
  );
}

export default NotFound;
