import { useState } from "react";
import { Textarea } from "@/shared/ui/textarea";
import { Typography } from "@/shared/ui/typography";
import { Button } from "@/shared/ui/button";
import { useAddCommentMutation } from "../api";
import { useAppDispatch } from "../model/types";
import { addCommentStore } from "../model";
import styles from "./styles.module.css";

interface AddCommentProps {
  postId: number;
}

export function AddComment({
  postId,
} : AddCommentProps) {
  const [value, setValue] = useState("");
  const [addComment, { isLoading }] = useAddCommentMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const data = await addComment({ body: value, postId, userId: 10 }).unwrap();
      dispatch(addCommentStore(data));
    } catch (error) {
      throw new Error("Server Error");
    } finally {
      setValue("");
    }
  };

  return (
    <div className={styles.container}>
      <Typography variant="h5-web" tag="h2">
        Add
        {" "}
        <span className={styles.highlight}>comment</span>
      </Typography>
      <form onSubmit={onSubmit}>
        <Textarea
          className={styles.textarea}
          placeholder="ENTER YOUR COMMENT"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          name="comment"
          id="comment"
        />
        <Button className={styles.button} type="submit" disabled={!value || isLoading}>
          Send
        </Button>
      </form>
    </div>
  );
}
