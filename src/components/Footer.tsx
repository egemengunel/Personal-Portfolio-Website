import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer className="border-t border-gray-200/70 mt-8">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="text-sm text-gray-400 order-2 sm:order-1">
          Made with love by Egemen.
        </p>
        <div className="order-1 sm:order-2">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
