import { Typography } from "@/shared/ui/typography";
import { Button } from "@/shared/ui/button";
import styles from "./styles.module.css";

export function MainBlock() {
  return (
    <div className={styles.container}>
      <Typography className={styles.subtitle} variant="b2-web" color="gray-light">
        <span className={styles.line} />
        OVER 1000 USERS
      </Typography>
      <Typography variant="h1-web" tag="h1">
        Enjoy Foods All Over The
        {" "}
        <span className={styles.highlight}>World</span>
      </Typography>
      <Typography className={styles.description} variant="b3-web" color="gray">
        EatLy help you set saving goals, earn cash back offers, Go to disclaimer
        for more details and get paychecks up to two days early. Get a
        {" "}
        <span className={styles.description_highlight}>$20 bonus.</span>
      </Typography>
      <div className={styles.buttons}>
        <Button variant="primary">Get Started</Button>
        <Button variant="secondary">Go Pro</Button>
      </div>
    </div>
  );
}
