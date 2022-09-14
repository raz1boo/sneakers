import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { sneakersReducer } from "./reducers/sneakers.slice";
import { themeReducer } from "./reducers/theme.slice";

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

const rootReducer = combineReducers({
  themeReducer,
  sneakersReducer,
});

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<typeof rootReducer>;
