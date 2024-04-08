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
}

export function CardUser({
  className,
  firstName,
  lastName,
  image,
  isLoading,
  isError,
}: CardUserProps) {
  if (isLoading) {
    return (
      <Typography variant="b18-web">Loading...</Typography>
    );
  }

  if (isError) {
    return (
      <Typography variant="b18-web">Error</Typography>
    );
  }
  return (
    <div
      className={clsx(className, styles.container)}
      aria-label="User card"
    >
      <img className={styles.image} src={image} alt={`Avatar of ${firstName} ${lastName}`} />
      <div>
        <Typography variant="b17-web" color="gray-medium">
          Written By
        </Typography>
        <Typography variant="b18-web">
          {firstName}
          {" "}
          {lastName}
        </Typography>
      </div>
    </div>
  );
}
