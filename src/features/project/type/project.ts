export interface Project {
  type: "TEAM" | "PERSONAL";
  title: string;
  subtitle: string;
  description?: string;
  icon: string;
  skills: string[];
}
