import { useState } from "react";
import { Link } from "react-router-dom";
import { CardArticle } from "@/features/open-article";
import { useGetArticlesQuery } from "@/entities/article";
import { Typography } from "@/shared/ui/typography";
import { Button } from "@/shared/ui/button";
import arrow from "./back.svg";
import styles from "./styles.module.css";

const MAX_ARTICLES_PER_PAGE = 12;

export function ArticlesList() {
  const [skipCount, setSkipCount] = useState(0);
  const {
    data = { posts: [], total: 0 },
    isLoading,
    isError,
    isFetching,
  } = useGetArticlesQuery({ skip: skipCount });

  const onNexPageClick = () => {
    setSkipCount(skipCount + MAX_ARTICLES_PER_PAGE);
  };

  const onPreviousPageClick = () => {
    setSkipCount(skipCount - MAX_ARTICLES_PER_PAGE);
  };

  if (isLoading) {
    return (
      <Typography className={styles.title} variant="h3-web" align="center">
        Loading...
      </Typography>
    );
  }

  if (isError) {
    return (
      <Typography className={styles.title} variant="h3-web" align="center">
        Error! Failed to load articles
      </Typography>
    );
  }

  if (!data.posts?.length) {
    return (
      <Typography className={styles.title} variant="h3-web" align="center">
        No articles found
      </Typography>
    );
  }

  return (
    <>
      <ul className={styles.list}>
        {data.posts.map((article) => (
          <li key={article.id}>
            <Link className={styles.link} to={String(article.id)}>
              <CardArticle article={article} isFetching={isFetching} />
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.buttons}>
        <Button
          variant="tertiary"
          aria-label="Previous page"
          onClick={onPreviousPageClick}
          disabled={skipCount <= 0}
        >
          <img className={styles.arrow} src={arrow} alt="" />
        </Button>
        <Button
          variant="tertiary"
          aria-label="Next page"
          onClick={onNexPageClick}
          disabled={skipCount + data.posts.length >= data.total}
        >
          <img src={arrow} alt="" />
        </Button>
      </div>
    </>
  );
}
