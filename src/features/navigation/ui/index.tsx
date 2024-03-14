import clsx from "clsx";
import { Typography } from "@/shared/ui/typography";
import { CustomLink } from "@/shared/ui/link";
import styles from "./styles.module.css";

interface NavigationProps {
  variant?: "header" | "footer";
}

export function Navigation({ variant = "header" }: NavigationProps) {
  return (
    <nav>
      <ul
        className={clsx(styles.navigation, {
          [styles.header]: variant === "header",
          [styles.footer]: variant === "footer",
        })}
      >
        <li>
          <CustomLink to="/recipes">
            <Typography variant="b1-web" color="gray-dark" tag="span">
              Recipes
            </Typography>
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/faq">
            <Typography variant="b1-web" color="gray-dark" tag="span">
              FAQ
            </Typography>
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/blog">
            <Typography variant="b1-web" color="gray-dark" tag="span">
              Blog
            </Typography>
          </CustomLink>
        </li>
      </ul>
    </nav>
  );
}
