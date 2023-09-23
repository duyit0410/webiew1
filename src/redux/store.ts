import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import modal from "./ModalSlice";
import auth from "./AuthSlice";


export const store = configureStore({
  reducer: combineReducers({
    modal,
    auth
  }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

