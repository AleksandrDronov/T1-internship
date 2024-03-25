import { useMemo } from "react";
import { Typography } from "../typography";
import logoHeader from "/logo-header.svg";
import logoFooter from "/logo-footer.svg";
import styles from "./styles.module.css";

interface LogoProps {
  variant?: "header" | "footer";
}

export function Logo({ variant = "header" }: LogoProps) {
  const logo = useMemo(
    () => (variant === "header" ? logoHeader : logoFooter),
    [variant],
  );

  return (
    <div className={styles.logo}>
      <img src={logo} alt="Logo" />
      <Typography
        variant={variant === "header" ? "logo-header" : "logo-footer"}
        color="violet"
      >
        eatly
      </Typography>
    </div>
  );
}
