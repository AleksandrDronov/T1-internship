export interface Comment {
  id: number;
  body: string;
  user: {
    username: string
  }
}

export interface Comments {
  comments: Comment[]
}
