import { Logo } from "@/shared/ui/logo";
import { Navigation } from "@/features/navigation";
import { Typography } from "@/shared/ui/typography";
import instagramIcon from "/instagram.svg";
import linkedinIcon from "/linkedin.svg";
import facebookIcon from "/fb.svg";
import twitterIcon from "/twitter.svg";
import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container_top}>
        <Logo variant="footer" />
        <Navigation variant="footer" />
      </div>
      <div className={styles.container_bottom}>
        <Typography variant="b14-web" color="gray-medium">
          © 2023 EATLY All Rights Reserved.
        </Typography>
        <ul className={styles.socials}>
          <li>
            <img src={instagramIcon} alt="Instagram" />
          </li>
          <li>
            <img src={linkedinIcon} alt="LinkedIn" />
          </li>
          <li>
            <img src={facebookIcon} alt="Facebook" />
          </li>
          <li>
            <img src={twitterIcon} alt="Twitter" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
