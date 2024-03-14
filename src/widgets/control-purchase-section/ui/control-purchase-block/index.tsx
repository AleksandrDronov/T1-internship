import { Typography } from "@/shared/ui/typography";
import { CardOrder, orders } from "@/entities/order";
import styles from "./styles.module.css";

export function ControlPurchaseBlock() {
  return (
    <div className={styles.container}>
      <Typography className={styles.title} variant="h2-web" tag="h2">
        Control
        {" "}
        <span className={styles.highlight}>Purchases</span>
        {" "}
        Via
        Dashboard
      </Typography>
      <ul className={styles.list}>
        {orders.map((order, index) => (
          <li key={order.id}>
            <CardOrder order={order} shadow={index === 0} />
          </li>
        ))}
      </ul>
    </div>
  );
}
