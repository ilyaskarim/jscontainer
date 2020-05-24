import { configureStore } from "@reduxjs/toolkit";
import playgroundReducer from "./modules/playground";

let reducers = {
  playground: playgroundReducer,
};

export default configureStore({
  reducer: reducers,
});
