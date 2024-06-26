import { CardComment, useGetCommentsQuery } from "@/entities/comment";
import { Typography } from "@/shared/ui/typography";
import { Slider } from "@/shared/ui/slider";
import styles from "./styles.module.css";

export function CommentsList() {
  const { data, isLoading, isError } = useGetCommentsQuery();

  if (isLoading) {
    return (
      <Typography className={styles.title} variant="h3-web" align="center">
        Loading...
      </Typography>
    );
  }

  if (isError) {
    return (
      <Typography className={styles.title} variant="h3-web" align="center">
        Error! Failed to load comments
      </Typography>
    );
  }

  if (!data?.comments?.length) {
    return (
      <Typography className={styles.title} variant="h3-web" align="center">
        No comments
      </Typography>
    );
  }

  return (
    <div className={styles.container}>
      <Slider>
        {data.comments.map((comment) => (
          <CardComment
            className={styles.card}
            comment={comment}
            key={comment.id}
          />
        ))}
      </Slider>
    </div>
  );
}
