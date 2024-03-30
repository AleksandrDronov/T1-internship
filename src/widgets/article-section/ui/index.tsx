import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  AddComment,
  useAppDispatch,
  useAppSelector,
  addCommentsStore,
} from "@/features/add-comment";
import { useGetArticleQuery } from "@/entities/article";
import { CardUser, useGetUserQuery } from "@/entities/user";
import { useGetCommentsForArticleQuery } from "@/entities/comment";
import { Typography } from "@/shared/ui/typography";
import { Button } from "@/shared/ui/button";
import { CommentsList } from "./comments-list";
import icon from "./star.svg";
import styles from "./styles.module.css";

export function ArticleSection() {
  const { id } = useParams();
  const {
    data: articleData,
    isLoading: isArticleLoading,
    isError: isArticleError,
  } = useGetArticleQuery(id);
  const {
    data: userData,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useGetUserQuery(articleData?.userId, { skip: !articleData?.userId });
  const {
    data: commentData,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
  } = useGetCommentsForArticleQuery(id, { skip: !articleData?.id });
  const { comments } = useAppSelector((state) => state.comments);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (commentData) {
      dispatch(addCommentsStore(commentData.comments));
    }
  }, [commentData, dispatch]);

  if (isArticleLoading) {
    return (
      <Typography className={styles.title} variant="h3-web" align="center">
        Loading...
      </Typography>
    );
  }

  if (isArticleError) {
    return (
      <Typography className={styles.title} variant="h3-web" align="center">
        Error! Failed to load article
      </Typography>
    );
  }

  if (!articleData?.id) {
    return (
      <Typography className={styles.title} variant="h3-web" align="center">
        Article not found
      </Typography>
    );
  }

  return (
    <section className={styles.section}>
      <Typography variant="h5-web" tag="h1">
        {articleData.title}
      </Typography>
      <div className={styles.header}>
        <CardUser
          firstName={userData?.firstName}
          lastName={userData?.lastName}
          image={userData?.image}
          isLoading={isUserLoading}
          isError={isUserError}
        />
        <div>
          <div className={styles.icon_container}>
            <Typography variant="b9-web" color="gray-medium">
              {articleData.reactions}
            </Typography>
            <img src={icon} alt="" />
          </div>
          <Typography variant="b17-web" color="gray-medium" align="right">
            {articleData.tags.map((tag) => `#${tag}`).join(", ")}
          </Typography>
        </div>
      </div>
      <Typography variant="b19-web">{articleData.body}</Typography>
      <Button className={styles.button} variant="secondary" isLink to="/blog">
        <div className={styles.button_content}>
          <svg
            width="30"
            height="34"
            viewBox="0 0 30 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.75 16.9999H6.25"
              stroke="#6C5FBC"
              strokeWidth="2.53684"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.9998 26.9165L6.24976 16.9998L14.9998 7.08317"
              stroke="#6C5FBC"
              strokeWidth="2.53684"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          All Articles
        </div>
      </Button>
      <CommentsList
        comments={comments}
        isLoading={isCommentsLoading}
        isError={isCommentsError}
      />
      <AddComment postId={articleData.id} />
    </section>
  );
}
