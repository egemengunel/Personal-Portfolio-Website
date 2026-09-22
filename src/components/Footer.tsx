import { Link } from 'react-router-dom';
import { SocialLinks } from './SocialLinks';
import { NAME, ROLE, LOCATION, CV_URL } from '../data/identity';

export function Footer() {
  return (
    <footer className="border-t border-gray-200/70">
      <div className="max-w-5xl mx-auto px-4 py-10 md:py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-900">{NAME}</p>
            <p className="mt-1 text-sm text-gray-400">{ROLE}</p>
            <p className="mt-0.5 text-sm text-gray-400">{LOCATION}</p>
          </div>

          <nav className="flex flex-col gap-2 text-sm">
            <Link to="/" className="text-gray-400 hover:text-gray-700 transition-colors">
              Home
            </Link>
            <Link
              to="/case-studies"
              className="text-gray-400 hover:text-gray-700 transition-colors"
            >
              Case Studies
            </Link>
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-700 transition-colors"
            >
              Resume
            </a>
            <a
              href="mailto:egemengunel@gmail.com"
              className="text-gray-400 hover:text-gray-700 transition-colors"
            >
              egemengunel@gmail.com
            </a>
          </nav>

          <div className="sm:text-right">
            <SocialLinks className="sm:justify-end" />
          </div>
        </div>

        <p className="mt-10 pt-6 border-t border-gray-200/70 text-sm text-gray-400">
          Made with love by Egemen.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
