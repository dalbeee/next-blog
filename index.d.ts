export interface IPost {
  title: string;
  content: string;
  id: number;
  categories: {
    type: string;
    id: string;
  };
  created_at?: number;
}

export interface ICategory {
  name: string;
  type: string;
  posts: number;
}
