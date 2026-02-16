import { motion } from 'framer-motion';
import { Card } from './Card';
import { workExperience } from '../data/workExperienceData';

export function WorkExperience() {
  return (
    <section className="mb-8 md:mb-16">
      <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4 md:mb-5">
        Work Experience
      </h2>
      
      <motion.div 
        className="flex flex-col gap-3 md:gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {workExperience.map((experience, index) => (
          <motion.div
            key={experience.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <Card {...experience} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default WorkExperience;

