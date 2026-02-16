import { SocialLinks } from './SocialLinks';
import { HiOutlineDocumentText } from 'react-icons/hi2';

const CV_URL = "https://drive.google.com/file/d/1uYTpi3LnS2Y2sedLcY6NKhL9QkH85I35/view?usp=share_link";

export function Header() {
  return (
    <header className="max-w-5xl mx-auto px-4">
      {/* Top bar — photo, name, socials, resume */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0 sm:justify-between mb-8">
        {/* Left — photo + name */}
        <div className="flex items-center gap-3 justify-center sm:justify-start">
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
            <img
              src="/profile.jpeg"
              alt="Egemen Günel"
              className="w-full h-full object-cover scale-150"
              loading="eager"
              decoding="async"
              width={44}
              height={44}
            />
          </div>
          <div className="flex items-baseline gap-2">
            <h1 className="text-lg md:text-xl font-semibold text-gray-900">Egemen Günel</h1>
            <span className="text-gray-300 font-light">|</span>
            <span className="text-sm md:text-base text-gray-400 font-normal">iOS Developer</span>
          </div>
        </div>

        {/* Right — socials + resume */}
        <div className="flex items-center gap-4 justify-center sm:justify-end">
          <SocialLinks />
          <span className="w-px h-4 bg-gray-200" />
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors"
          >
            <HiOutlineDocumentText className="w-4 h-4" />
            <span>Resume</span>
          </a>
        </div>
      </div>

      {/* Bio */}
      <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-2xl">
        Swift & iOS Engineer specializing in intuitive user experiences and responsive applications. Computer Engineering graduate from Opole University of Technology with published work on the App Store.
      </p>

      {/* What I Do */}
      <div className="mt-8">
        <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">What I Do</h2>
        <ul className="space-y-2 text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl">
          <li className="flex items-start gap-2.5">
            <span className="text-gray-300 mt-1 text-xs">&#9679;</span>
            <span>Native app development with Swift, SwiftUI, and UIKit across iOS and macOS</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-gray-300 mt-1 text-xs">&#9679;</span>
            <span>On-device machine learning using Core ML and Create ML for real-time inference</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-gray-300 mt-1 text-xs">&#9679;</span>
            <span>Custom animations, transitions, and design systems — from Liquid Glass effects to reusable component libraries</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-gray-300 mt-1 text-xs">&#9679;</span>
            <span>Figma-to-code workflows with pixel-perfect UI implementation</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-gray-300 mt-1 text-xs">&#9679;</span>
            <span>API integration, local data persistence, and offline-first architecture</span>
          </li>
        </ul>
      </div>

      {/* Skills & Expertise */}
      <div className="mt-8">
        <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Skills & Expertise</h2>
        <div className="flex flex-wrap gap-2">
          {['Swift & SwiftUI', 'iOS Development & Design', 'REST API Integration', 'Local Data Persistence', 'Custom Animations & UI'].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full text-xs md:text-sm font-medium text-gray-500 bg-gray-100 border border-gray-200/80"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <p className="text-sm md:text-base text-gray-500 leading-relaxed mt-8 mb-10 max-w-2xl">
        Open to iOS roles where I can ship polished products that people love using.
      </p>
    </header>
  );
}
