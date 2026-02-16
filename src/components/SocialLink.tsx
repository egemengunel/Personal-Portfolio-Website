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
      className="text-gray-400 hover:text-gray-700 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={label}
    >
      <Icon size={18} />
    </motion.a>
  );
}