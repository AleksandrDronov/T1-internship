import mobileImage from "/mobile.svg";
import mobileImageWebp from "/mobile.webp";

import { DownloadBlock } from "./download-block";
import styles from "./styles.module.css";

export function DownloadAppSection() {
  return (
    <section className={styles.section}>
      <picture className={styles.picture}>
        <source srcSet={mobileImageWebp} type="image/webp" />
        <img
          className={styles.image}
          src={mobileImage}
          loading="lazy"
          alt="Mobile phone with our app"
        />
      </picture>
      <DownloadBlock />
    </section>
  );
}
