import type { JSX } from 'solid-js';
import type { Project } from '../types/project';

interface Props {
  project: Project;
}

export default function ProjectCard(props: Props): JSX.Element {
  return (
    <div class="border rounded-lg shadow p-4 flex flex-col gap-4 bg-white dark:bg-gray-900">
      {/* Top section: details and image/video */}
      <div class="flex flex-col md:flex-row gap-4">
        {/* Left side: details */}
        <div class="flex-1">
          <h3 class="text-xl font-bold">{props.project.title}</h3>
          <p class="text-gray-600 dark:text-gray-300">{props.project.description}</p>
          <ul class="mt-2 list-disc list-inside text-sm text-gray-500 dark:text-gray-400">
            {props.project.learned.map((item) => (
              <li>{item}</li>
            ))}
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
            <video src={props.project.mediaType?.src} controls class="w-full rounded" />
          )}
        </div>
      </div>

      {/* Bottom: GitHub link */}
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
    </div>
  );
}
