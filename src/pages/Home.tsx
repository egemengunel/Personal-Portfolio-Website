import { lazy } from 'react';
import { HomeIntro } from '../components/HomeIntro';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const WorkExperience = lazy(() =>
  import('../components/WorkExperience').then((m) => ({ default: m.WorkExperience }))
);
const Projects = lazy(() =>
  import('../components/Projects').then((m) => ({ default: m.Projects }))
);

export function Home() {
  useDocumentMeta({
    title: 'Egemen Günel · iOS Developer',
    description:
      'Swift & iOS engineer building polished, design-led apps. Published work on the App Store, with case studies on the decisions behind them.',
    path: '/',
  });

  return (
    <>
      <HomeIntro />
      <WorkExperience />
      <Projects />
    </>
  );
}

export default Home;
