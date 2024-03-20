import { Link, LinkProps } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import clsx from "clsx";
import styles from "./styles.module.css";

interface CustomLinkProps extends LinkProps {
  anchor?: boolean;
  className?: string;
  hasOpacity?: boolean;
  children: string | JSX.Element;
}
export function CustomLink({
  children,
  className,
  to,
  hasOpacity = true,
  anchor = false,
  ...props
}: CustomLinkProps) {
  const classLink = clsx(className, styles.link, {
    [styles.link_hover]: hasOpacity,
  });

  if (anchor) {
    return (
      <AnchorLink
        className={classLink}
        href={`#${to}`}
      >
        {children}
      </AnchorLink>
    );
  }

  return (
    <Link
      className={classLink}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}
