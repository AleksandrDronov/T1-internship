import { Logo } from "@/shared/ui/logo";
import { CustomLink } from "@/shared/ui/link";
import { Navigation } from "@/features/navigation";
import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <CustomLink to="/" hasOpacity={false}>
        <Logo />
      </CustomLink>
      <Navigation />
    </header>
  );
}
