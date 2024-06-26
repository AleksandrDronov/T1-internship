import { apiClient } from "@/shared/api";
import { Products } from "./types";

const productsApi = apiClient.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<Products, void>({
      query: () => ({
        url: "recipes/meal-type/lunch/",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
