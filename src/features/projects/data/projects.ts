import type { Project } from '../types/game';
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
    description:
      'A virtual pet game where the fox cycles through states like sleeping, hungry, eating, pooping, celebrating, and dead. Built using a custom finite state machine with JavaScript timers and event handling.',
    learned: ['Finite State Machines', 'Encapsulation in JavaScript', 'Game Loop with Timers'],
    pattern: 'State Management with Object-based FSM',
    mediaType: {
      type: 'video',
      src: 'https://youtu.be/nwr-DYoME_E'
    },
    github: 'https://github.com/SATYAM9717069261/Portfolio/tree/main/src/features/projects/Game',
    tech: ['JavaScript', 'HTML', 'CSS'],
    ProjectDialog: FoxGame
  },
  {
    title: 'Music App',
    description:
      'A Spotify-like music streaming app with features such as play, pause, next/previous track, search for songs and artists, and user authentication (login & signup).',
    learned: [
      'Full-stack development with Next.js & Prisma',
      'Implementing authentication and session management',
      'Building an audio player with play/pause/next/previous functionality',
      'Styling responsive UI with Tailwind CSS',
      'Deploying full-stack apps on Vercel'
    ],
    pattern: 'Component-based architecture with Next.js API routes',
    mediaType: {
      type: 'video',
      src: 'https://youtu.be/1gJbvLZKWsM'
    },
    github: 'https://github.com/SATYAM9717069261/Spotify_Clone.git',
    tech: ['Next.js', 'Tailwind CSS', 'Prisma', 'Vercel'],
    ProjectDialog: null
  }
];
