export type CaseStudyStatus = 'published' | 'writing' | 'planned';

export interface CaseStudyMedia {
  type: 'image' | 'video';
  url: string;
  /** Shown under the image — say what the reader should notice, not what it is. */
  caption?: string;
  /** Renders two images side by side for before/after comparisons. */
  compareWith?: string;
  compareLabels?: [string, string];
  /**
   * How a compare pair is arranged. Tall phone screens read best side by side;
   * wide crops (a tab bar, a single control) need to be stacked, because two of
   * them in one column render too small to see what changed.
   */
  compareLayout?: 'columns' | 'rows';
  /**
   * Lets two figures share one row of the media column instead of stacking.
   * Not the same thing as a compare pair: that is one figure with two panels
   * and a single caption, this is two independent figures that each keep
   * their own.
   */
  span?: 'half';
}

export interface CaseStudySection {
  id: string;
  heading: string;
  /** One string per paragraph. */
  body: string[];
  media?: CaseStudyMedia[];
}

export interface CaseStudyTypeSpecimen {
  label: string;
  sample: string;
  /** CSS font-size, e.g. "2.25rem". Kept as a value so the data stays free of class names. */
  size: string;
  weight?: number;
  tracking?: string;
}

export interface CaseStudyDesignSystem {
  heading?: string;
  note?: string;
  /** Rendered as live CSS swatches, not screenshots of Sketch artboards. */
  palette?: { name: string; value: string }[];
  typeScale?: CaseStudyTypeSpecimen[];
  /** Component sheets exported from Sketch, where live CSS will not do. */
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
  /** Wide image for social cards. */
  cover?: string;
  /**
   * Screens shown before any prose. Sized by height rather than width, so
   * single-panel and two-panel App Store sheets sit on the same baseline.
   */
  gallery?: CaseStudyMedia[];
  designSystem?: CaseStudyDesignSystem;
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
