import { ControlPurchaseBlock } from "./control-purchase-block";
import styles from "./styles.module.css";
import image from "/purchase.png";
import imageWebp from "/purchase.webp";

export function ControlPurchaseSection() {
  return (
    <section className={styles.section}>
      <ControlPurchaseBlock />
      <picture className={styles.picture}>
        <source srcSet={imageWebp} type="image/webp" />
        <img className={styles.image} src={image} alt="Purchases list" loading="lazy" />
      </picture>
    </section>
  );
}
