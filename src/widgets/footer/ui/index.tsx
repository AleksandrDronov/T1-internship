import { Logo } from "@/shared/ui/logo";
import { Navigation } from "@/features/navigation";
import { Typography } from "@/shared/ui/typography";
import { CustomLink } from "@/shared/ui/link";
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
            <CustomLink to="#" hasOpacity={false}>
              <img src={instagramIcon} alt="Instagram" />
            </CustomLink>
          </li>
          <li>
            <CustomLink to="#" hasOpacity={false}>
              <img src={linkedinIcon} alt="LinkedIn" />
            </CustomLink>
          </li>
          <li>
            <CustomLink to="#" hasOpacity={false}>
              <img src={facebookIcon} alt="Facebook" />
            </CustomLink>
          </li>
          <li>
            <CustomLink to="#" hasOpacity={false}>
              <img src={twitterIcon} alt="Twitter" />
            </CustomLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
