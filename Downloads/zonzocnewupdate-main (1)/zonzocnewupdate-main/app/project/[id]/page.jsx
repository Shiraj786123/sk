import ProjectDetails from '@/src/views/ProjectDetails';

export function generateMetadata({ params }) {
  return {
    title: `Project #${params.id} | ZonzocTech Case Study`,
    description: 'Explore this ZonzocTech project — real results from AI-powered web development and SEO.',
  };
}

export default function ProjectPage({ params }) {
  return <ProjectDetails id={params.id} />;
}
