import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.slice";
import projectsReducer from "./projects/projects.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    projects: projectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
