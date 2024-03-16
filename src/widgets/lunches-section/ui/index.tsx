import { Typography } from "@/shared/ui/typography";
import { CardProduct, products } from "@/entities/product";
import styles from "./styles.module.css";

export function LunchesSection() {
  return (
    <section className={styles.section}>
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
      <ul className={styles.list}>
        {products.map((product) => (
          <li key={product.id}>
            <CardProduct product={product} className={styles.card} />
          </li>
        ))}
      </ul>
    </section>
  );
}
