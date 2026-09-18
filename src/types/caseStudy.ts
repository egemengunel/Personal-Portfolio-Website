export type CaseStudyStatus = 'published' | 'writing' | 'planned';

export interface CaseStudyMedia {
  type: 'image' | 'video';
  url: string;
  /** Shown under the image — say what the reader should notice, not what it is. */
  caption?: string;
  /** Renders two images side by side for before/after comparisons. */
  compareWith?: string;
  compareLabels?: [string, string];
}

export interface CaseStudySection {
  id: string;
  heading: string;
  /** One string per paragraph. */
  body: string[];
  media?: CaseStudyMedia[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  /** One line, concrete. Appears on the card and under the title. */
  tagline: string;
  role: string;
  timeframe: string;
  status: CaseStudyStatus;
  /** App icon — reuses the existing /icons assets where one exists. */
  icon?: string;
  /** Wide image for the detail hero and social cards. */
  cover?: string;
  platforms: string[];
  stack: string[];
  links?: { label: string; href: string }[];
  /** The three-sentence version, for readers who skim and leave. */
  summary?: {
    problem: string;
    approach: string;
    outcome: string;
  };
  /** Hard numbers if they exist. Omit rather than invent. */
  metrics?: { label: string; value: string }[];
  sections: CaseStudySection[];
}
