import { useRef } from "react";
import { Typography } from "@/shared/ui/typography";
import { useScrollTo } from "@/shared/hooks/useScrollTo";
import { LunchesList } from "./lunches-list";
import styles from "./styles.module.css";

export function LunchesSection() {
  const ref = useRef<null | HTMLElement>(null);

  useScrollTo("recipes", ref);

  return (
    <section className={styles.section} ref={ref}>
      <Typography className={styles.title} variant="h4-web" align="center">
        Our Top
        {" "}
        <span className={styles.highlight}>Lunch</span>
      </Typography>
      <LunchesList />
    </section>
  );
}
