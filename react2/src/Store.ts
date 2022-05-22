import { configureStore } from "@reduxjs/toolkit";
import reimReducer from "./Slices/ReimSlice";
import userReducer from "./Slices/UserSlice";

export const store = configureStore({
    reducer: {
      user: userReducer,
      reim: reimReducer
    }
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;