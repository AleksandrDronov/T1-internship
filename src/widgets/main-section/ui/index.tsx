import graphImage from "/graph.svg";
import foodImage from "/food.svg";
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
        <img src={foodImage} alt="Plate with vegetables and fish" />
        <img className={styles.graph} src={graphImage} alt="" />
        <img className={styles.arrow} src={arrowImage} alt="" />
        <img className={styles.lines_upper} src={linesImage1} alt="" />
        <img className={styles.lines_lower} src={linesImage2} alt="" />
        <CardOrder className={styles.card} order={order} shadow />
      </div>
    </section>
  );
}
