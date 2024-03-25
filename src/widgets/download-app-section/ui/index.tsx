import mobileImage from "/mobile.svg";

import { DownloadBlock } from "./download-block";
import styles from "./styles.module.css";

export function DownloadAppSection() {
  return (
    <section className={styles.section}>
      <img
        className={styles.image}
        src={mobileImage}
        alt="Mobile phone with our app"
      />
      <DownloadBlock />
    </section>
  );
}
