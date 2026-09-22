import { IconType } from 'react-icons';

export interface Project {
  title: string;
  /**
   * Role held on the work, e.g. "Co-Founder, Lead iOS Engineer". Work
   * experience entries carry one; projects generally do not. Kept separate
   * from `description` so the card can render the role as a meta line and
   * leave the description free to be prose.
   */
  role?: string;
  /** e.g. "Jan 2026 to Jun 2026". Right-aligned on the card above sm. */
  period?: string;
  description: string;
  link: string;
  linkText?: string; // Custom link text (default: "View on GitHub")
  linkIcon?: string; // Link icon: 'appstore' for Apple icon, or image URL for custom icon
  icon?: string; // Card display icon
  /**
   * Slug of the case study covering this work, if one exists. The card then
   * offers a second way in, to the long-form page rather than the modal.
   */
  caseStudySlug?: string;
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