import { Typography } from "@/shared/ui/typography";
import { CommentsList } from "./comments-list";
import styles from "./styles.module.css";

export function CommentsSection() {
  return (
    <section className={styles.section}>
      <Typography
        className={styles.title}
        variant="h4-web"
        tag="h2"
        align="center"
      >
        <span className={styles.highlight}>Customer</span>
        {" "}
        Say
      </Typography>
      <CommentsList />
    </section>
  );
}
