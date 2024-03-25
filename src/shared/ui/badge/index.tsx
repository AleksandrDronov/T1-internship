import clsx from "clsx";
import styles from "./styles.module.css";

interface BadgeProps {
  className?: string;
  variant?: "primary";
  children: React.ReactNode;
}

export function Badge({
  className,
  variant = "primary",
  children,
}: BadgeProps) {
  return (
    <div className={clsx(className, styles.badge, styles[variant])}>
      {children}
    </div>
  );
}
