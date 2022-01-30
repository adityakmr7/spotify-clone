import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import playlistReducer from "./slices/playlist";
import categoryReducer from "./slices/category";
import albumReducer from "./slices/album";

export const store = configureStore({
  reducer: {
    user: userReducer,
    playlist: playlistReducer,
    category: categoryReducer,
    album: albumReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
