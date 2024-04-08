import { configureStore } from "@reduxjs/toolkit";
import { addCommentSlice } from "@/features/add-comment";
import { apiClient } from "@/shared/api";

export const store = configureStore({
  reducer: {
    [apiClient.reducerPath]: apiClient.reducer,
    comments: addCommentSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiClient.middleware),
});
