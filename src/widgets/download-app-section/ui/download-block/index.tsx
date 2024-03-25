import arrow from "/vector-5.svg";

import { Typography } from "@/shared/ui/typography";
import { Button } from "@/shared/ui/button";
import styles from "./styles.module.css";

export function DownloadBlock() {
  return (
    <div className={styles.container}>
      <Typography variant="h2-web" tag="h2">
        Premium
        {" "}
        <span className={styles.highlight}>Quality</span>
        {" "}
        For Your Health
      </Typography>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Typography variant="b6-web" color="gray">
            Premium quality food is made with ingredients that are packed with
            essential vitamins, minerals.
          </Typography>
        </li>
        <li>
          <Typography variant="b6-web" color="gray">
            These foods promote overall wellness by support healthy digestion
            and boosting immunity
          </Typography>
        </li>
      </ul>
      <div className={styles.button_container}>
        <Button className={styles.button} variant="primary">
          <div className={styles.button_content}>
            Download
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.59259 13.0001H20.7811"
                stroke="white"
                strokeWidth="2.25773"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.1865 5.41675L20.7808 13.0001L13.1865 20.5834"
                stroke="white"
                strokeWidth="2.25773"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Button>
        <img className={styles.arrow} src={arrow} alt="" />
      </div>
    </div>
  );
}
