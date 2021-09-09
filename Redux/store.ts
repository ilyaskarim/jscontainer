import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user.reducer";
import appReducer from "./app.reducer";

let reducers: any = {
  user: userReducer,
  app: appReducer,
};

export default configureStore({
  reducer: reducers,
});
