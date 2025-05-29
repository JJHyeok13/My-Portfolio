export interface ProjectDetail {
  slug: string;
  mainColor: string;
  icon?: string;
  title: string;
  description: string;
  date: string;
  member?: string;
  background?: string;
  skills: string[];
  role: {
    title: string;
    content: string;
    image?: string;
  }[];
  references: {
    title: string;
    link: string;
  }[];
}
