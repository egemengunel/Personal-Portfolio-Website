import { Link } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi2';

const whatIDo = [
  'Native app development with Swift, SwiftUI, and UIKit across iOS and macOS',
  'On-device machine learning using Core ML and Create ML for real-time inference',
  'Custom animations, transitions, and design systems — from Liquid Glass effects to reusable component libraries',
  'Figma-to-code workflows with pixel-perfect UI implementation',
  'API integration, local data persistence, and offline-first architecture',
];

const skills = [
  'Swift & SwiftUI',
  'iOS Development & Design',
  'REST API Integration',
  'Local Data Persistence',
  'Custom Animations & UI',
];

export function HomeIntro() {
  return (
    <section className="pt-10 md:pt-14">
      <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-2xl">
        Swift &amp; iOS Engineer specializing in intuitive user experiences and responsive
        applications. Computer Engineering graduate from Opole University of Technology with
        published work on the App Store.
      </p>

      <div className="mt-8">
        <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
          What I Do
        </h2>
        <ul className="space-y-2 text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl">
          {whatIDo.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="text-gray-300 mt-1 text-xs">&#9679;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
          Skills &amp; Expertise
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full text-xs md:text-sm font-medium text-gray-500 bg-gray-100 border border-gray-200/80"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 mb-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 max-w-2xl">
        <p className="text-sm md:text-base text-gray-500 leading-relaxed">
          Open to iOS roles where I can ship polished products that people love using.
        </p>
        <Link
          to="/case-studies"
          className="group inline-flex items-center gap-1.5 text-sm md:text-base font-medium text-gray-900 hover:text-gray-600 transition-colors flex-shrink-0"
        >
          Read the case studies
          <HiOutlineArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}

export default HomeIntro;
