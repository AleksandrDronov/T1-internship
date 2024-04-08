import { apiClient } from "@/shared/api";
import { Comments } from "../model";

const commentsApi = apiClient.injectEndpoints({
  endpoints: (build) => ({
    getComments: build.query<Comments, void>({
      query: () => ({
        url: "comments?limit=6",
        method: "GET",
      }),
    }),
    getCommentsForArticle: build.query<Comments, string | undefined>({
      query: (id) => ({
        url: `comments/post/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCommentsQuery, useGetCommentsForArticleQuery } = commentsApi;
