import { Link, LinkProps } from "react-router-dom";
import clsx from "clsx";
import styles from "./styles.module.css";

interface CustomLinkProps extends LinkProps {
  className?: string;
  hasOpacity?: boolean;
  children: string | JSX.Element | React.ReactNode;
}
export function CustomLink({
  children,
  className,
  hasOpacity = true,
  ...props
}: CustomLinkProps) {
  return (
    <Link
      className={clsx(className, styles.link, {
        [styles.link_hover]: hasOpacity,
      })}
      {...props}
    >
      {children}
    </Link>
  );
}
