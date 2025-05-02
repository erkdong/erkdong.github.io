import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import displayScreenPageReducer from "../features/display-screen/display-screen-page-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    displayScreenPage: displayScreenPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
