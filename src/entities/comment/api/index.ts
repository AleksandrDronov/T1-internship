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
  }),
});

export const { useGetCommentsQuery } = commentsApi;
