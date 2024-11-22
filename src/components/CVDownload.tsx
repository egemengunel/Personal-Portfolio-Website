import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const CVDownload = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="flex justify-center mb-16"
    >
      <motion.a
        href="/EgemenGunel_CV.pdf"
        download
        className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaDownload className="mr-2 h-5 w-5" />
        Download My Resume
      </motion.a>
    </motion.div>
  );
}

export default CVDownload;