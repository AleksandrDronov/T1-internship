import clsx from "clsx";
import { Typography } from "@/shared/ui/typography";
import { Order } from "../model";
import styles from "./styles.module.css";

interface CardOrderProps {
  className?: string;
  order: Order;
  shadow?: boolean;
}

export function CardOrder({ className, shadow, order }: CardOrderProps) {
  return (
    <div
      className={clsx(className, styles.container, {
        [styles.shadow]: shadow,
      })}
    >
      <div className={styles.content}>
        <img src={order.image} alt={order.title} />
        <div className={styles.description}>
          <Typography className={styles.title} variant="b2-web" dots noWrap>
            {order.title}
          </Typography>
          <Typography
            color={order.status === "Cancelled" ? "red" : undefined}
            variant="b4-web"
            dots
            noWrap
          >
            {order.status}
          </Typography>
        </div>
      </div>
      <Typography variant="b4-web" color="gray">
        {order.date}
      </Typography>
    </div>
  );
}
