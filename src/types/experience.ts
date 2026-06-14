export type Category = 'Impact & Leadership' | 'Creative Direction' | 'Tech & Systems' | 'Stage Presence';

export interface ExperienceCard {
  id: string;
  category: Category;
  title: string;
  role: string;
  date: string;
  location: string;
  description: string;
  responsibilities: string[];
  results: string;
  image: string;
  link?: string;
  documentation?: {
    image: string;
    caption?: string;
    link?: string;
  }[];
}
