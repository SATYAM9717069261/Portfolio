import type { JSXElement } from 'solid-js';
export type MediaType = 'image' | 'video';

export interface ProjectMedia {
  type: MediaType;
  src: string;
}

export interface Project {
  title: string;
  description: string;
  learned: string[];
  pattern: string;
  tech: string[];
  github: string;
  mediaType?: ProjectMedia;
  ProjectDialog: JSXElement | null;
}
