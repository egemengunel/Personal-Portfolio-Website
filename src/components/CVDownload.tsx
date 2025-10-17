import { motion } from 'framer-motion';
import { IoDocumentText } from "react-icons/io5";

const CVDownload = () => {
  const CV_IOS_URL = "https://drive.google.com/file/d/1NbJ0KSxO-7gRAEVFfcJFwbUycVh17pMR/view?usp=sharing";
  const CV_WEB_URL = "https://drive.google.com/file/d/1RVC5S7_SKJzWwz0bYxpQ1SSaKK3CNfAa/view?usp=sharing" 

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="flex justify-center mb-16 gap-4"
    >
      <motion.a
        href={CV_IOS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gray-600 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition-all duration-200 shadow-md hover:shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <IoDocumentText className="mr-2 h-5 w-5" />
          iOS Developer Resume
      </motion.a>

      <motion.a
        href={CV_WEB_URL}
        target="_blank"
        rel="noopener noreferrer"
       className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gray-600 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition-all duration-200 shadow-md hover:shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <IoDocumentText className="mr-2 h-5 w-5" />
          Web Developer Resume
      </motion.a>
    </motion.div>
  );
}

export default CVDownload;