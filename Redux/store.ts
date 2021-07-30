import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user.reducer";
import containerReducer from "./container.reducer";

let reducers: any = {
  user: userReducer,
  container: containerReducer,
};

export default configureStore({
  reducer: reducers,
});
