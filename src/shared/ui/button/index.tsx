import clsx from "clsx";
import styles from "./styles.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
}

export function Button({
  children,
  className,
  type = "button",
  variant = "primary",
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, className, styles[variant], {
        [styles.disabled]: disabled,
      })}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
