import clsx from "clsx";
import { Typography } from "@/shared/ui/typography";
import styles from "./styles.module.css";

interface CardUserProps {
  className?: string;
  firstName: string | undefined;
  lastName: string | undefined;
  image: string | undefined;
  isLoading?: boolean;
  isError?: boolean;
  variant?: "primary" | "secondary";
}

export function CardUser({
  className,
  firstName,
  lastName,
  image,
  isLoading,
  isError,
  variant = "primary",
}: CardUserProps) {
  if (isLoading) {
    return (
      <Typography className={styles.title} variant="b18-web">
        Loading...
      </Typography>
    );
  }

  if (isError) {
    return (
      <Typography className={styles.title} variant="b18-web">
        Error
      </Typography>
    );
  }
  return (
    <div
      className={clsx(className, styles[`container-${variant}`])}
      aria-label="User card"
    >
      <img
        className={styles[`image-${variant}`]}
        src={image}
        alt={`Avatar of ${firstName} ${lastName}`}
      />
      <div>
        <Typography
          variant={variant === "primary" ? "b17-web" : "b20-web"}
          color="gray-medium"
        >
          Written By
        </Typography>
        <Typography variant={variant === "primary" ? "b18-web" : "b21-web"}>
          {firstName}
          {" "}
          {lastName}
        </Typography>
      </div>
    </div>
  );
}
