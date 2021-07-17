import { createSlice } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";
import { saveContaienr } from "../services";

export interface iAsset {
  id: number;
  url: string;
}

export interface iAccess {
  id: number;
  invited_by: number;
  name: string;
}

export interface iContainerState {
  container: {
    html: string;
    css: string;
    javascript: string;
    title: string;
    description: string;
    html_5_snippet: Boolean;
    private: Boolean;
  };
  assets: Array<iAsset>;
  access: Array<iAccess>;
}

const initialState: iContainerState = {
  container: {
    html: "",
    css: "",
    javascript: "",
    title: "",
    description: "",
    html_5_snippet: false,
    private: false,
  },
  assets: [],
  access: [],
};

export const containerSlice = createSlice({
  name: "container",
  initialState: initialState,
  reducers: {
    setContainer(state, action) {
      state.container = { ...state.container, ...action.payload };
    },
    addAsset(state, action) {
      state.assets = [...state.assets, ...action.payload];
    },
    removeAsset(state, action) {
      const index = state.assets.findIndex((c: iAsset) => c == action.payload);
      if (index > -1) state.assets.splice(index, 1);
    },
    addAccess(state, action) {
      state.access = [...state.access, action.payload];
    },
    removeAccess(state, action) {
      const index = state.access.findIndex((c) => c == action.payload);
      if (index > -1) state.access.splice(index, 1);
    },
  },
});

export const {
  setContainer,
  addAccess,
  addAsset,
  removeAsset,
  removeAccess,
  saveContainer,
} = containerSlice.actions;

export const getcontainer = (state: RootStateOrAny) => {
  return state.container;
};
export default containerSlice.reducer;
