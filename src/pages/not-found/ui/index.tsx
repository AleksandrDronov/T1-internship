import { Typography } from "@/shared/ui/typography";
import styles from "./styles.module.css";

export function NotFoundPage() {
  return (
    <main>
      <Typography
        className={styles.title}
        variant="h1-web"
        tag="h1"
        align="center"
      >
        404 Page&nbsp;Not&nbsp;Found
      </Typography>
    </main>
  );
}
