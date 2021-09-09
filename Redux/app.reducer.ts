import { createSlice } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";

const initialState = {
  status: 200,
};

export const app = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setStatus } = app.actions;

export const getStatus = (state: any) => {
  return state.app.status;
};

export default app.reducer;
