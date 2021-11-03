import { createSlice } from "@reduxjs/toolkit";

const state = {
  formData: {
    html: "",
    css: "",
    javascript: "",
    html_5_snippet: "",
    assets: "[]",
    access: "[]",
    title: "",
    description: "",
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
