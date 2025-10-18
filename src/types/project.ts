import { IconType } from 'react-icons';

export interface Project {
  title: string;
  description: string;
  link: string;
  linkText?: string; // Custom link text (default: "View on GitHub")
  linkIcon?: string; // Link icon: 'appstore' for Apple icon, or image URL for custom icon
  icon?: string; // Card display icon
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