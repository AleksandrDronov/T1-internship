export interface Article {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: number;
}

export interface Articles {
  posts: Article[];
  total: number;
}
