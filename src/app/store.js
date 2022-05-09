import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import projectReducer from "../features/projects/projectSlice";
import userReducer from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    projects: projectReducer,
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
