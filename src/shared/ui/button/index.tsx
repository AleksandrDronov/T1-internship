import clsx from "clsx";
import { LinkProps, To } from "react-router-dom";
import { CustomLink } from "../link";
import styles from "./styles.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
  isLink?: boolean;
  to?: To;
  children: React.ReactNode;
}

export function Button({
  children,
  className,
  type = "button",
  variant = "primary",
  disabled = false,
  isLink = false,
  to,
  ...props
}: ButtonProps & Omit<LinkProps, "to">) {
  if (isLink) {
    return (
      <CustomLink
        className={clsx(className, styles.button, styles[variant])}
        hasOpacity={false}
        to={to || ""}
        {...props}
      >
        {children}
      </CustomLink>
    );
  }

  return (
    <button
      className={clsx(styles.button, className, styles[variant], {
        [styles.disabled]: disabled,
      })}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
