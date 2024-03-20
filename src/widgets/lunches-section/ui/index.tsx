import { Typography } from "@/shared/ui/typography";
import { LunchesList } from "./lunches-list";
import styles from "./styles.module.css";

export function LunchesSection() {
  return (
    <section className={styles.section} id="recipes">
      <Typography
        className={styles.title}
        variant="h4-web"
        tag="h2"
        align="center"
      >
        Our Top
        {" "}
        <span className={styles.highlight}>Lunch</span>
      </Typography>
      <LunchesList />
    </section>
  );
}
