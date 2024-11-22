import { motion } from 'framer-motion';

export function Footer() {
  return (
    <motion.footer 
      className="text-center py-8 text-sm dark:text-gray-400 text-gray-600"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <p>
        Made with <span className="text-red-500">❤️</span> by Egemen Günel
      </p>
      <p className="mt-1">
        at Wrocław and Opole, Poland
      </p>
    </motion.footer>
  );
}

export default Footer;