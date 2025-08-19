import type { Project } from '../types/project';
import FoxGame from '~/features/projects/Game/foxGame';

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio site to showcase my work and skills.',
    learned: ['SolidJS', 'Tailwind CSS', 'TypeScript'],
    pattern: 'Component-based Architecture',
    github: 'https://github.com/yourusername/portfolio',
    mediaType: {
      type: 'image',
      src: '/videos/todo-demo.mp4'
    },
    tech: ['SolidJS', 'Tailwind CSS', 'TypeScript'],
    ProjectDialog: null
  },
  {
    title: 'Fox Game',
    description: 'A todo application with state management.',
    learned: ['SolidJS', 'TypeScript', 'LocalStorage API'],
    pattern: 'State Management with Signals',
    mediaType: {
      type: 'video',
      src: '/videos/todo-demo.mp4'
    },
    github: 'https://github.com/yourusername/todo-app',
    tech: ['SolidJS', 'TypeScript', 'LocalStorage API'],
    ProjectDialog: FoxGame
  }
];
