import { CardProduct, useGetProductsQuery } from "@/entities/product";
import { Typography } from "@/shared/ui/typography";
import styles from "./styles.module.css";

export function LunchesList() {
  const {
    data: products = { recipes: [] },
    isLoading,
    isError,
  } = useGetProductsQuery();

  if (isLoading) {
    return (
      <Typography className={styles.title} variant="h3-web" align="center">
        Loading...
      </Typography>
    );
  }
  if (isError) {
    return (
      <Typography className={styles.title} variant="h3-web" align="center">
        An error has occurred!
      </Typography>
    );
  }

  const topProducts = [...products.recipes]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <ul className={styles.list}>
      {topProducts.map((product) => (
        <li key={product.id}>
          <CardProduct
            name={product.name}
            image={product.image}
            cuisine={product.cuisine}
            cookTimeMinutes={product.cookTimeMinutes}
            rating={product.rating}
            className={styles.card}
          />
        </li>
      ))}
    </ul>
  );
}
