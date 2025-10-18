import { motion } from 'framer-motion';
import { Card } from './Card';
import { projects } from '../data/projectsData';

export function Projects() {
  return (
    <section className="mb-8 md:mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-left mb-6 md:mb-8 text-gray-900">
        My Projects
      </h2>
      
      <motion.div 
        className="flex flex-col gap-3 md:gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            <Card {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;