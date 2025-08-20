import type { JSXElement } from 'solid-js';
import { For } from 'solid-js';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function ProjectList(props: any): JSXElement {
  return (
    <section class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      <For each={projects}>
        {(project) => <ProjectCard project={project} openDialog={props.openDialog} />}
      </For>
    </section>
  );
}
