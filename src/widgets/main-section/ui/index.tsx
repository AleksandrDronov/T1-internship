import graphImage from "/graph.svg";
import foodImageSvg from "/food.png";
import foodImageWebp from "/food.webp";
import arrowImage from "/arrow.svg";
import linesImage1 from "/lines-1.svg";
import linesImage2 from "/lines-2.svg";

import { MainBlock } from "./main-block";
import { CardOrder, orders } from "@/entities/order";
import styles from "./styles.module.css";

const order = orders[0];

export function MainSection() {
  return (
    <section className={styles.section}>
      <MainBlock />
      <div className={styles.container}>
        <picture>
          <source srcSet={foodImageWebp} type="image/webp" />
          <img
            className={styles.plate}
            src={foodImageSvg}
            alt="Plate with vegetables and fish"
          />
        </picture>
        <img className={styles.graph} src={graphImage} alt="" />
        <img className={styles.arrow} src={arrowImage} alt="" />
        <img className={styles.lines_lower} src={linesImage2} alt="" />
        <div className={styles.card_container}>
          <CardOrder order={order} shadow />
          <img className={styles.lines_upper} src={linesImage1} alt="" />
        </div>
      </div>
    </section>
  );
}
