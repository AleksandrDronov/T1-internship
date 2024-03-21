import { Typography } from "@/shared/ui/typography";
import { ArticlesList } from "./articles-list";
import styles from "./styles.module.css";

export function ArticlesSection() {
  return (
    <section className={styles.section}>
      <Typography
        className={styles.title}
        variant="h4-web"
        align="center"
        tag="h1"
      >
        Latest
        {" "}
        <span className={styles.highlight}>Articles</span>
      </Typography>
      <ArticlesList />
    </section>
  );
}
