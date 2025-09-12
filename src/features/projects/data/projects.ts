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
    ProjectDialog: 'https://satyamportfolio1.netlify.app'
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
    ProjectDialog: 'https://music-dsme5r8p1-satyam9717069261s-projects.vercel.app/artist/2'
  },
  {
    title: 'Text Search',
    description:
      'A React + Vite app that highlights multiple keywords in a paragraph using a Trie (prefix tree). It efficiently handles overlapping matches and ensures clean highlighting with bold tags.',
    learned: ['Trie Data Structure', 'Efficient String Matching', 'React State Management'],
    pattern: 'Keyword Highlighting with Trie-based Search',
    mediaType: {
      type: 'image',
      src: 'https://raw.githubusercontent.com/SATYAM9717069261/textSearch/main/public/demo.png'
    },
    github: 'https://github.com/SATYAM9717069261/textSearch',
    tech: ['React', 'Vite', 'JavaScript'],
    ProjectDialog: 'https://satyam9717069261.github.io/textSearch/'
  },

  {
    title: 'Worker.js',
    description:
      'A demonstration project showing how to use Web Workers for parallel computation in the browser. Tasks are added to a work queue and executed by a worker thread without blocking the main thread. The system also supports prioritization — if a high-priority task arrives, it will run immediately after the current task finishes. Built to showcase scenarios like running heavy computations or logging on the frontend without UI lag.',
    learned: [
      'Web Workers for Parallelism',
      'Task Queue Implementation',
      'Priority Scheduling',
      'Non-blocking Frontend Computation'
    ],
    pattern: 'Parallel Task Execution with Worker Queues',
    mediaType: {
      type: 'image',
      src: 'https://raw.githubusercontent.com/SATYAM9717069261/Worker.js/main/public/screenshot.png'
    },
    github: 'https://github.com/SATYAM9717069261/Worker.js',
    tech: ['JavaScript', 'Web Workers', 'React'],
    ProjectDialog: ''
  }
];
