import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { Comment } from "@/entities/comment";

export type SliceStore = {
  comments: Comment[];
};

type RootStore = {
  comments: SliceStore;
};

type Action = {
  payload: Comment | Comment[];
  type: string;
};

export const useAppDispatch: typeof useDispatch<Dispatch<Action>> = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;
