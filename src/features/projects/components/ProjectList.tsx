import type { JSX } from 'solid-js';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function ProjectList(): JSX.Element {
  return (
    <section class="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </section>
  );
}
