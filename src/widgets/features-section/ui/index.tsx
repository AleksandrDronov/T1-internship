import lineImage1 from "/vector-1.svg";
import lineImage2 from "/vector-2.svg";
import lineImage3 from "/vector-3.svg";
import lineImage4 from "/vector-4.svg";

import { FeaturesList } from "./features-list";
import styles from "./styles.module.css";

export function FeaturesSection() {
  return (
    <section className={styles.section}>
      <FeaturesList />
      <img className={styles.line_one} src={lineImage1} alt="" />
      <img className={styles.line_one} src={lineImage2} alt="" />
      <img className={styles.line_two} src={lineImage3} alt="" />
      <img className={styles.line_two} src={lineImage4} alt="" />
    </section>
  );
}
