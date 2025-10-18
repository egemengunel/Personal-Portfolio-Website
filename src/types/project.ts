import { IconType } from 'react-icons';

export interface Project {
  title: string;
  description: string;
  link: string;
  techStack: {
    name: string;
    icon: IconType;
  }[];
  media: {
    type: 'image' | 'video';
    url: string;
    thumbnail?: string;
  }[];
  features: {
    title: string;
    description: string;
  }[];
}