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
    title: 'Egemen Günel · Design & iOS Engineer',
    description:
      'Design & iOS engineer. I design iOS apps and then build them, in Sketch and in SwiftUI. Three apps on the App Store, with case studies on the decisions behind them.',
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
