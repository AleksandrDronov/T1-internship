import clsx from "clsx";
import LinesEllipsis from "react-lines-ellipsis";
import { Typography } from "@/shared/ui/typography";
import { Article } from "../model";
import icon from "./star.svg";
import styles from "./styles.module.css";

interface CardArticleProps {
  className?: string;
  article: Article;
}

export function CardArticle({ className, article }: CardArticleProps) {
  return (
    <div
      className={clsx(className, styles.container)}
      aria-label="Article card"
    >
      <Typography variant="b15-web" dots noWrap>
        {article.title}
      </Typography>
      <div className={styles.header}>
        <Typography variant="b8-web" color="gray-medium">
          {article.tags.map((tag) => `#${tag}`).join(", ")}
        </Typography>
        <div className={styles.icon_container}>
          <Typography variant="b9-web" color="gray-medium">
            {article.reactions}
          </Typography>
          <img src={icon} alt="" />
        </div>
      </div>
      <LinesEllipsis
        text={article.body}
        className={styles.body}
        maxLine="3"
        ellipsis="..."
        basedOn="words"
      />
    </div>
  );
}
