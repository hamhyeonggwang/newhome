export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image?: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  tags: string[];
  published: boolean;
}

export interface CreateBlogPost {
  title: string;
  excerpt: string;
  content: string;
  image?: File;
  category: string;
  author: string;
  tags: string[];
} 