import { createSlice } from "@reduxjs/toolkit";

const state = {
  formData: {
    html: "wow",
    css: "style",
    javascript: "log",
    html_5_snippet: true,
    assets: "[]",
    access: "[]",
    title: "wow",
    description: "desc",
    slug: "",
    parent: null,
    forkedFrom: null,
    userId: null,
  },
  libraiesList: [],
};

export default createSlice({
  name: "Container",
  initialState: state,
  reducers: {
    setContainerFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setLibrariesList: (state, action) => {
      state.libraiesList = action.payload;
    },
  },
});
