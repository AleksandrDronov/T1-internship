import { apiClient } from "@/shared/api";
import { User } from "../model";

const userApi = apiClient.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<User, number | undefined>({
      query: (id) => ({
        url: `users/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserQuery } = userApi;
