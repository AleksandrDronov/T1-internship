import { Typography } from "@/shared/ui/typography";
import clsx from "clsx";
import { Comment } from "../model";
import icon from "./brackets.svg";
import styles from "./styles.module.css";

interface CardCommentProps {
  className?: string;
  comment: Comment;
}

export function CardComment({ className, comment }: CardCommentProps) {
  return (
    <div
      className={clsx(className, styles.container)}
      aria-label="Comment card"
    >
      <div className={styles.header}>
        <Typography variant="b10-web">
          @
          {comment.user.username}
        </Typography>
        <img className={styles.icon} src={icon} alt="" />
      </div>
      <Typography variant="b11-web" color="gray">
        {comment.body}
      </Typography>
    </div>
  );
}
