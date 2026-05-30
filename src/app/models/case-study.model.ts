export type CaseStudySection =
  | CaseStudyRichTextSection
  | CaseStudyMetricsSection
  | CaseStudyImageSection;

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  timeline: string;
  role: string;
  heroImage: string;
  heroImageAlt: string;
  sections: CaseStudySection[];
}

export interface CaseStudyRichTextSection {
  type: 'rich-text';
  kicker?: string;
  heading: string;
  body: string[];
}

export interface CaseStudyMetricsSection {
  type: 'metrics';
  heading: string;
  items: Array<{
    label: string;
    value: string;
    detail: string;
  }>;
}

export interface CaseStudyImageSection {
  type: 'image';
  heading?: string;
  image: string;
  imageAlt: string;
  caption?: string;
}
