import { apiClient } from "@/shared/api";
import { Articles } from "../model";

const articlesApi = apiClient.injectEndpoints({
  endpoints: (build) => ({
    getArticles: build.query<Articles, { skip: number }>({
      query: (params) => ({
        url: `posts?limit=12&skip=${params.skip}&select=title,reactions,id,body,tags`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetArticlesQuery, useLazyGetArticlesQuery } = articlesApi;
