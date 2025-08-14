import type { JSX } from 'solid-js';
import ThemeToggle from '../../../shared/components/ThemeToggle';
import { profile } from '../ data/profile';

export default function Header(): JSX.Element {
  return (
    <header class="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800">
      <div>
        <h1 class="text-2xl font-bold">{profile.name}</h1>
        <p class="text-gray-600 dark:text-gray-300">{profile.about}</p>
      </div>

      <div class="flex items-center gap-4">
        <a
          href={profile.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          class="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Resume
        </a>

        <ThemeToggle />
      </div>
    </header>
  );
}
