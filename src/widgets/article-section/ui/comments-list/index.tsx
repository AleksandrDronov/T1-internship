import { CardComment, Comment } from "@/entities/comment";
import { Typography } from "@/shared/ui/typography";
import styles from "./styles.module.css";

interface CommentsListProps {
  comments: Comment[];
  isLoading?: boolean;
  isError?: boolean;
}

export function CommentsList({ comments, isLoading, isError }: CommentsListProps) {
  if (isLoading) {
    return (
      <Typography variant="h3-web" align="center">
        Loading...
      </Typography>
    );
  }

  if (isError) {
    return (
      <Typography variant="h3-web" align="center">
        Error! Failed to load comments
      </Typography>
    );
  }

  if (!comments?.length) {
    return (
      <Typography variant="h6-web" align="center">
        No comments yet
      </Typography>
    );
  }

  return (
    <div className={styles.container}>
      <Typography variant="h6-web" tag="h2">
        Comments
      </Typography>
      <ul className={styles.list}>
        {comments.map((comment) => (
          <li key={comment.id}>
            <CardComment comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  );
}
