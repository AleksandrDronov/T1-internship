export interface Article {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}

export interface Articles {
  posts: Article[];
  total: number;
}
