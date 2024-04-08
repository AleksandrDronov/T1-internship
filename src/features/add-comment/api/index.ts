import { Comment } from "@/entities/comment";
import { apiClient } from "@/shared/api";
import { CommentBody } from "./types";

const addCommentApi = apiClient.injectEndpoints({
  endpoints: (build) => ({
    addComment: build.mutation<Comment, CommentBody>({
      query: (body) => ({
        url: "/comments/add",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAddCommentMutation } = addCommentApi;
