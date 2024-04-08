import clsx from "clsx";
import styles from "./styles.module.css";

interface TypographyProps {
  className?: string;
  variant?:
    | "h1-web"
    | "h2-web"
    | "h3-web"
    | "h4-web"
    | "h5-web"
    | "h6-web"
    | "logo-header"
    | "logo-footer"
    | "b1-web"
    | "b2-web"
    | "b3-web"
    | "b4-web"
    | "b5-web"
    | "b6-web"
    | "b7-web"
    | "b8-web"
    | "b9-web"
    | "b10-web"
    | "b11-web"
    | "b12-web"
    | "b13-web"
    | "b14-web"
    | "b15-web"
    | "b16-web"
    | "b17-web"
    | "b18-web"
    | "b19-web"
  color?:
    | "black"
    | "white"
    | "violet"
    | "violet-light"
    | "gray"
    | "gray-dark"
    | "gray-medium"
    | "gray-light"
    | "yellow"
    | "red";
  align?: "left" | "center" | "right";
  tag?: "h1" | "h2" | "h3" | "h4" | "span" | "p" | "div";
  noWrap?: boolean;
  dots?: boolean;
  children: string | number | React.ReactNode;
  inlineStyles?: React.CSSProperties;
}

export function Typography({
  className,
  variant = "h1-web",
  color = "black",
  align = "left",
  tag: Tag = "p",
  noWrap = false,
  dots = false,
  children,
  inlineStyles,
}: TypographyProps) {
  return (
    <Tag
      style={inlineStyles}
      className={clsx(
        className,
        styles.text,
        styles[variant],
        styles[color],
        styles[align],
        noWrap && styles.noWrap,
        dots && styles.dots,
      )}
    >
      {children}
    </Tag>
  );
}
