import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface SocialLinkProps {
  href: string;
  icon: IconType;
  label: string;
}

export function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={label}
    >
      <Icon size={24} />
    </motion.a>
  );
}