
export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  image: string;
  benefits: string[];
  process: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
}
