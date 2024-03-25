import { useMemo } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

interface TypographyProps {
  className?: string;
  variant?:
    | "h1-web"
    | "h2-web"
    | "h3-web"
    | "h4-web"
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
    | "b14-web";
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
  tag?: "h1" | "h2" | "h3" | "h4" | "span" | "p";
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
  tag = "p",
  noWrap = false,
  dots = false,
  children,
  inlineStyles,
}: TypographyProps) {
  const Tag = useMemo(() => tag, [tag]);

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
