import { createSlice } from "@reduxjs/toolkit";

export const playgroundReducer = createSlice({
  name: "playground",
  initialState: {
    instance: {},
  },
  reducers: {
    setPlaygroundInstance: (state, payload) => {
      let keys = Object.keys(payload.payload);
      let instance = { ...state.instance };
      keys.forEach((attribute) => {
        instance[attribute] = payload.payload[attribute];
      });
      state.instance = instance;
    },
  },
});

export const { setPlaygroundInstance } = playgroundReducer.actions;

export const getPlaygroundInstance = (state) => {
  return state.playground.instance || null;
};

export default playgroundReducer.reducer;
