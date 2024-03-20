import clsx from "clsx";
import { Typography } from "@/shared/ui/typography";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Recipe } from "../model";
import starImage from "./star.svg";
import bookmarkImage from "./bookmark.svg";
import styles from "./styles.module.css";

type CardProductProps = Omit<Recipe, "id"> & {
  className?: string;
}

export function CardProduct({ className, ...product }: CardProductProps) {
  return (
    <div className={clsx(className, styles.container)} aria-label="Product card">
      <img className={styles.image} src={product.image} alt={product.name} />
      <Button className={styles.bookmark} variant="tertiary" aria-label="Add to bookmarks">
        <img src={bookmarkImage} alt="" />
      </Button>
      <div className={styles.content}>
        <Badge variant="primary">
          <Typography variant="b8-web" color="yellow">
            {product.cuisine}
          </Typography>
        </Badge>
        <Typography variant="b7-web" dots noWrap>
          {product.name}
        </Typography>
        <div className={styles.raiting}>
          <Typography variant="b9-web" color="gray-medium">
            {product.cookTimeMinutes}
            min
            {" "}
            •
          </Typography>
          <img src={starImage} alt="" />
          <Typography variant="b9-web" color="gray-medium">
            {product.rating}
          </Typography>
        </div>
      </div>
    </div>
  );
}
