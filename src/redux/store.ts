import { configureStore } from "@reduxjs/toolkit";
import filter from "./filter/slice";
import pizza from "./pizza/slice";
import { useDispatch } from "react-redux";
import cart from "./cart/slice";

export const store = configureStore({ reducer: { filter, cart, pizza } });

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
