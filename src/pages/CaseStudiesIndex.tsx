import { motion } from 'framer-motion';
import { caseStudies } from '../data/caseStudiesData';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function CaseStudiesIndex() {
  useDocumentMeta({
    title: 'Case Studies · Egemen Günel',
    description:
      'Longer write-ups on the design and engineering decisions behind the apps I build: what the constraint was, what I rejected, and what shipped.',
    path: '/case-studies',
  });

  return (
    <div className="pt-10 md:pt-14">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">Case Studies</h1>
      <p className="mt-3 text-sm md:text-base text-gray-500 leading-relaxed max-w-2xl">
        Longer write-ups on the decisions behind the apps: what the constraint was, what I tried,
        what I rejected, and what actually shipped. Design and code are the same job here, so both
        show up.
      </p>

      <motion.div
        className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
          >
            <CaseStudyCard study={study} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default CaseStudiesIndex;
