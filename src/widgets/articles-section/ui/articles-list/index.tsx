import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CardArticle, useLazyGetArticlesQuery } from "@/entities/article";
import { Typography } from "@/shared/ui/typography";
import { Button } from "@/shared/ui/button";
import arrow from "./back.svg";
import styles from "./styles.module.css";

export function ArticlesList() {
  const [getArticles,
    {
      data = { posts: [], total: 0 },
      isLoading,
      isError,
    }] = useLazyGetArticlesQuery();
  const [skipCount, setSkipCount] = useState(0);

  useEffect(() => {
    getArticles({ skip: skipCount });
  }, [getArticles, skipCount]);

  const onNexPageClick = () => {
    if (skipCount + data.posts.length >= data.total) return;
    setSkipCount(skipCount + 12);
  };

  const onPreviousPageClick = () => {
    if (skipCount <= 0) return;
    setSkipCount(skipCount - 12);
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
        An error has occurred!
      </Typography>
    );
  }

  return (
    <>
      <ul className={styles.list}>
        {data.posts.map((article) => (
          <li key={article.id}>
            <Link className={styles.link} to={String(article.id)}>
              <CardArticle article={article} />
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
