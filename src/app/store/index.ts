import { configureStore } from "@reduxjs/toolkit";
import { apiClient } from "@/shared/api";

export const store = configureStore({
  reducer: {
    [apiClient.reducerPath]: apiClient.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiClient.middleware),
});
