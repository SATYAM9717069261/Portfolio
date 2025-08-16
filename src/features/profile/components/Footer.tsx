import type { JSX } from 'solid-js';
import { profile } from '../data/profile';

export default function Footer(): JSX.Element {
  return (
    <footer class="p-4 bg-gray-100 dark:bg-gray-800 text-center fixed bottom-0 left-0 right-0">
      <p class="text-sm">📞 {profile.phone}</p>

      <nav class="flex justify-center gap-4 mt-2">
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-500 hover:underline"
        >
          GitHub
        </a>
        <a
          href={profile.socials.codechef}
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-500 hover:underline"
        >
          CodeChef
        </a>
        <a
          href={profile.socials.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-500 hover:underline"
        >
          LeetCode
        </a>
        <a
          href={profile.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-500 hover:underline"
        >
          LinkedIn
        </a>
      </nav>
    </footer>
  );
}
