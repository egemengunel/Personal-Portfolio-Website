import { motion } from 'framer-motion';
import { SocialLinks } from './SocialLinks';

export function Header() {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <motion.div
          className="relative w-40 h-40 mx-auto mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src="/profile.jpeg"
            alt="Profile"
            loading="eager"
            decoding="async"
            className="relative z-10 w-full h-full rounded-full object-cover border-4 dark:border-gray-700/50 border-gray-200/50"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-200/50 to-gray-200/50 dark:from-blue-500/10 dark:to-purple-500/10 blur-md" />
        </motion.div>
        
        <h1 className="text-4xl font-bold mb-4 dark:text-white text-gray-900">Egemen Günel</h1>
        <p className="text-xl dark:text-gray-400 text-gray-600 mb-6">
          Hey👋, I'm a Computer Science student at Opole University of Technology, based in Wrocław, Poland.
        </p>
        <p className="dark:text-gray-400 text-gray-600 mb-4">
          I'm passionate about{' '}
          <span className="text-blue-500 dark:text-blue-400">Swift Development</span>{' '}
          <span className="text-purple-500 dark:text-purple-400">Web Technologies</span>{' '}
          <span className="text-green-500 dark:text-green-400">Computer Science</span>
        </p>
        <p className="dark:text-gray-400 text-gray-600 mb-8 max-w-2xl mx-auto">
          Currently focused on iOS and visionOS development, exploring spatial computing 
          with Reality Composer Pro and RealityKit. Working on an exciting SwiftUI project 
          while expanding my knowledge in modern web technologies.
        </p>
      </motion.div>
      <SocialLinks />
    </>
  );
}