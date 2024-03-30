import clsx from "clsx";
import LinesEllipsis from "react-lines-ellipsis";
import { Article } from "@/entities/article";
import { CardUser, useGetUserQuery } from "@/entities/user";
import { Typography } from "@/shared/ui/typography";
import icon from "./star.svg";
import styles from "./styles.module.css";

interface CardArticleProps {
  className?: string;
  article: Article;
  isFetching?: boolean;
}

export function CardArticle({
  className,
  article,
  isFetching,
}: CardArticleProps) {
  const {
    data: userData,
    isLoading,
    isError,
  } = useGetUserQuery(article.userId);

  return (
    <article
      className={clsx(className, styles.container, {
        [styles.skeleton]: isFetching,
      })}
      aria-label="Article card"
    >
      {!isFetching && (
        <>
          <Typography variant="b15-web" tag="h2" dots noWrap>
            {article.title}
          </Typography>
          <div className={styles.header}>
            <CardUser
              variant="secondary"
              firstName={userData?.firstName}
              lastName={userData?.lastName}
              image={userData?.image}
              isLoading={isLoading}
              isError={isError}
            />
            <div className={styles.icon}>
              <Typography variant="b9-web" color="gray-medium">
                {article.reactions}
              </Typography>
              <img src={icon} alt="" />
            </div>
          </div>
          <Typography
            className={styles.tags}
            variant="b8-web"
            color="gray-medium"
          >
            {article.tags.map((tag) => `#${tag}`).join(", ")}
          </Typography>
          <LinesEllipsis
            text={article.body}
            className={styles.body}
            maxLine="3"
            ellipsis="..."
            basedOn="words"
          />
        </>
      )}
    </article>
  );
}
