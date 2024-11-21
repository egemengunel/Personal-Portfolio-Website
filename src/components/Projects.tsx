import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: "AdoptMe Website",
    description: "A responsive web application built with PHP that simplifies the pet adoption process, featuring user authentication and favorites system.",
    link: "https://github.com/egemengunel/AdoptMe-Website"
  },
  {
    title: "APOD Daily",
    description: "A SwiftUI application that displays NASA's Astronomy Picture of the Day using their API.",
    link: "https://github.com/egemengunel/APOD-Daily"
  },
  {
    title: "Traveled Website",
    description: "A .NET-based travel journal website with improved features and modern web development tools.",
    link: "https://github.com/egemengunel/Traveled-Website-Project"
  },
  {
    title: "Travel Journal",
    description: "The original Travel Journal website built with PHP, featuring destination tracking and gallery functionality.",
    link: "https://github.com/egemengunel/Travel-Journal"
  }
];

export function Projects() {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
  );
}