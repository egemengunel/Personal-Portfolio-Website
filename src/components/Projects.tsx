import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projectsData';

export function Projects() {
  return (
    <section className="mb-8 md:mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        My Projects
      </h2>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-3 md:px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;