import clsx from "clsx";
import { Typography } from "@/shared/ui/typography";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Product } from "../model";
import starImage from "./star.svg";
import bookmarkImage from "./bookmark.svg";
import styles from "./styles.module.css";

interface CardProductProps {
  className?: string;
  product: Product;
}

export function CardProduct({ className, product }: CardProductProps) {
  return (
    <div className={clsx(className, styles.container)} aria-label="Product card">
      <img src={product.image} alt={product.title} />
      <Button className={styles.bookmark} variant="tertiary" aria-label="Add to bookmarks">
        <img src={bookmarkImage} alt="" />
      </Button>
      <div className={styles.content}>
        <Badge variant="primary">
          <Typography variant="b8-web" color="yellow">
            {product.productType}
          </Typography>
        </Badge>
        <Typography variant="b7-web" dots noWrap>
          {product.title}
        </Typography>
        <div className={styles.raiting}>
          <Typography variant="b9-web" color="gray-medium">
            {product.deliveryTime}
            {" "}
            •
          </Typography>
          <img src={starImage} alt="" />
          <Typography variant="b9-web" color="gray-medium">
            {product.raiting}
          </Typography>
        </div>
      </div>
    </div>
  );
}
