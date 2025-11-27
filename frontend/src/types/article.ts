export type Article = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string[];
  category: string;
  author: string;
  publishedAt: string;
  imageUrl?: string | null;
  tags: string[];
  featured?: boolean;
  breaking?: boolean;
};

export type ArticleGroup = {
  hero: Article | null;
  spotlight: Article[];
  categories: Record<string, Article[]>;
  trending: Article[];
};


