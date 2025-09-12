import type { JSXElement } from 'solid-js';
import { For } from 'solid-js';
import type { Project } from '../types/project';
import { PrimaryButton } from '~/shared/components/buttons';
import FoxGame from '../Game/foxGame';
import { DialogState } from '~/shared/components/types/Dialogs';

interface Props {
  project: Project;
  openDialog: (body: JSXElement, state: DialogState) => void;
}

export default function ProjectCard(props: Props): JSXElement {
  console.log(' details = .', props.project.mediaType?.src);
  return (
    <div class="border rounded-lg shadow p-4 flex flex-col gap-4 bg-white dark:bg-gray-900  justify-between">
      {/* Top section: details and image/video */}
      <div class="flex flex-col md:flex-row gap-4 ">
        {/* Left side: details */}
        <div class="flex-1">
          <h3 class="text-xl font-bold">{props.project.title}</h3>
          <p class="text-gray-600 dark:text-gray-300">{props.project.description}</p>
          <ul class="mt-2 list-disc list-inside text-sm text-gray-500 dark:text-gray-400">
            <For each={props.project.learned}>{(item) => <li>{item}</li>}</For>
          </ul>
          <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Pattern used: {props.project.pattern}
          </p>
        </div>

        {/* Right side: image or video */}
        <div class="flex-shrink-0 w-full md:w-1/3">
          {props.project.mediaType?.type === 'image' ? (
            <img
              src={props.project.mediaType?.src}
              alt={props.project.title}
              class="w-full h-auto rounded"
            />
          ) : (
            <iframe
              className="w-full rounded"
              src={props.project.mediaType?.src.replace('watch?v=', 'embed/')}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>

      {/* Bottom: GitHub link */}
      <div class="relative bottom-0 flex justify-between">
        <div class="mt-auto">
          <a
            href={props.project.github}
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-500 hover:underline"
          >
            View on GitHub
          </a>
        </div>
        {typeof props.project.ProjectDialog == 'string' ? (
          <a href={props.project.ProjectDialog}>View Project</a>
        ) : (
          <PrimaryButton
            action={() => props.openDialog(props.project.ProjectDialog, { isOpen: true })}
          >
            View Project
          </PrimaryButton>
        )}
      </div>
    </div>
  );
}
