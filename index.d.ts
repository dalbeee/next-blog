export interface IPost {
  title: string;
  content: string;
  id: number;
  created_at?: number;
}

export interface ICategory {
  name: string;
  type: string;
  posts: number;
}
