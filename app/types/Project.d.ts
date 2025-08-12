export interface Project {
  id: number;
  title: string;
  description: string;
  subDescription: string[];
  year: string;
  href: string;
  logo: string;
  image: string;
  tags: {
    id: number;
    name: string;
    path: string;
  }[];
}
