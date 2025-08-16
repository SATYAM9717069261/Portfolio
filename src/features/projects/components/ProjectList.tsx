import type { JSX } from 'solid-js';
import { For } from 'solid-js';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function ProjectList(): JSX.Element {
  return (
    <section class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <For each={projects}>{(project) => <ProjectCard project={project} />}</For>
    </section>
  );
}
