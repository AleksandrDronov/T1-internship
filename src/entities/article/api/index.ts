import { apiClient } from "@/shared/api";
import { Articles, Article } from "../model";

const articlesApi = apiClient.injectEndpoints({
  endpoints: (build) => ({
    getArticles: build.query<Articles, { skip: number }>({
      query: (params) => ({
        url: `posts?limit=12&skip=${params.skip}`,
        method: "GET",
      }),
    }),
    getArticle: build.query<Article, string | undefined>({
      query: (id) => ({
        url: `posts/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetArticlesQuery, useGetArticleQuery } = articlesApi;
