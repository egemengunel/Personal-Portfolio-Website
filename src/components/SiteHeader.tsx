import { NavLink, Link } from 'react-router-dom';
import { HiOutlineDocumentText } from 'react-icons/hi2';
import { SocialLinks } from './SocialLinks';

const CV_URL =
  'https://drive.google.com/file/d/1uYTpi3LnS2Y2sedLcY6NKhL9QkH85I35/view?usp=share_link';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'text-sm transition-colors',
    isActive ? 'text-gray-900 font-medium' : 'text-gray-400 hover:text-gray-700',
  ].join(' ');

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200/70 bg-gray-50/85 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 h-14 md:h-16 flex items-center justify-between gap-4">
        {/* Left — identity, and the way home from any page */}
        <Link to="/" className="flex items-center gap-2.5 min-w-0 group">
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
            <img
              src="/profile.jpeg"
              alt="Egemen Günel"
              className="w-full h-full object-cover scale-150"
              loading="eager"
              decoding="async"
              width={36}
              height={36}
            />
          </div>
          <span className="flex items-baseline gap-2 min-w-0">
            <span className="text-sm md:text-base font-semibold text-gray-900 truncate group-hover:text-gray-600 transition-colors">
              Egemen Günel
            </span>
            <span className="hidden sm:inline text-gray-300 font-light">|</span>
            <span className="hidden sm:inline text-sm text-gray-400">iOS Developer</span>
          </span>
        </Link>

        {/* Right — nav, resume, socials */}
        <nav className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
          <NavLink to="/case-studies" className={navLinkClass}>
            Case Studies
          </NavLink>

          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors"
          >
            <HiOutlineDocumentText className="w-4 h-4" />
            <span>Resume</span>
          </a>

          {/* Socials live in the footer on small screens, where there is room */}
          <span className="hidden md:inline w-px h-4 bg-gray-200" />
          <span className="hidden md:flex">
            <SocialLinks />
          </span>
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
