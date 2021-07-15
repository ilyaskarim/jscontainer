import { createSlice } from "@reduxjs/toolkit";

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
      state.container = {...state.container, ...action.payload};
    },
    addAsset(state, action) {
      state.assets = [...state.assets, ...action.payload];
    },
    removeAsset(state, action) {
      state.assets = [...state.assets, ...action.payload];
    },
    addAccess(state, action) {
      state.access = [...state.access, action.payload];
    },
    removeAccess(state, action) {

    },
    save() {},
  },
});

export const {
  setContainer,
  addAccess,
  addAsset,
  removeAsset,
  removeAccess,
  save,
} = containerSlice.actions;

export const getcontainer = (state: iContainerState) => {
  return state.container;
};
export const getassets = (state: iContainerState) => {
  return state.assets;
};
export const getaccess = (state: iContainerState) => {
  return state.access;
};

export default containerSlice.reducer;
