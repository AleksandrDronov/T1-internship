/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";
import { Comment } from "@/entities/comment";
import { SliceStore } from "./types";

const initialState: SliceStore = {
  comments: [],
};

export const addCommentSlice = createSlice({
  name: "addComment",
  initialState,
  reducers: {
    addCommentStore(state, action: PayloadAction<Comment>) {
      state.comments = [...state.comments, action.payload];
    },
    addCommentsStore: (state, action: PayloadAction<Comment[]>) => {
      state.comments = action.payload;
    },
  },
});

export const {
  addCommentStore,
  addCommentsStore,
} = addCommentSlice.actions;
