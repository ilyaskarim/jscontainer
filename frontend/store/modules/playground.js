import { createSlice } from "@reduxjs/toolkit";
import ApolloClient from "../../src/apollo/index";

export const playgroundReducer = createSlice({
  name: "playground",
  initialState: {
    instance: {
      title: "",
      description: "",
      forked_from_container_id: null,
      version: "",
      js_links: "",
      css_links: "",
      js_compiler: "",
      js_raw: "",
      js_compiled: "",
      css_compiler: "",
      css_raw: "",
      css_compiled: "",
      html_compiler: "",
      html_raw: "<span>wow</span>",
      html_compiled: "",
      organization_id: null,
      show_in_search: true,
      private: false,
      created_by_id: null
    },
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
    saveContainer: async (state) => {
      
    },
  },
});

export const { setPlaygroundInstance, saveContainer } = playgroundReducer.actions;

export const getPlaygroundInstance = (state) => {
  return state.playground.instance || null;
};

export default playgroundReducer.reducer;
