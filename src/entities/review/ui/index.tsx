import { Typography } from "@/shared/ui/typography";
import clsx from "clsx";
import { Review } from "../model";
import icon from "./brackets.svg";
import styles from "./styles.module.css";

interface CardReviewProps {
  className?: string;
  hasIcon?: boolean;
  review: Review;
}

export function CardReview({
  className,
  hasIcon = false,
  review,
}: CardReviewProps) {
  return (
    <div className={clsx(className, styles.container)}>
      <div className={styles.header}>
        <Typography variant="b10-web">{review.username}</Typography>
        {hasIcon && <img className={styles.icon} src={icon} alt="" />}
      </div>
      <Typography variant="b11-web" color="gray">
        {review.review}
      </Typography>
    </div>
  );
}
