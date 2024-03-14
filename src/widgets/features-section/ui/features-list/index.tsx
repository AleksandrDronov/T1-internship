import { Typography } from "@/shared/ui/typography";
import styles from "./styles.module.css";

export function FeaturesList() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Typography className={styles.title} variant="h3-web" tag="h3" color="white" align="center">
          10K+
        </Typography>
        <Typography variant="b5-web" color="violet-light" align="center">
          Satisfied Costumers
          {" "}
          <br />
          All Great Over The World
        </Typography>
      </li>
      <li className={styles.item}>
        <Typography className={styles.title} variant="h3-web" tag="h3" color="white" align="center">
          4M
        </Typography>
        <Typography variant="b5-web" color="violet-light" align="center">
          Healthy Dishes Sold
          {" "}
          <br />
          Including Milk Shakes Smooth
        </Typography>
      </li>
      <li className={styles.item}>
        <Typography className={styles.title} variant="h3-web" tag="h3" color="white" align="center">
          99.99%
        </Typography>
        <Typography variant="b5-web" color="violet-light" align="center">
          Reliable Customer Support
          {" "}
          <br />
          We Provide Great Experiences
        </Typography>
      </li>
    </ul>
  );
}
