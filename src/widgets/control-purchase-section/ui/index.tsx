import { ControlPurchaseBlock } from "./control-purchase-block";
import styles from "./styles.module.css";
import image from "/purchase.svg";

export function ControlPurchaseSection() {
  return (
    <section className={styles.section}>
      <ControlPurchaseBlock />
      <img className={styles.image} src={image} alt="Purchases list" />
    </section>
  );
}
