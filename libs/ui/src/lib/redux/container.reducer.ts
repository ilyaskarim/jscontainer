import { createSlice } from "@reduxjs/toolkit";

const state = {
  formData: {
    html: "",
    css: "",
    javascript: "",
    html_snippet: 1,
    assets: `["http://localhost:/app.js","http://localhost:/app2.js","http://localhost:/app3.js","http://localhost:/app5.js","http://localhost:/app4.js"]`,
    access: "[]",
    title: "wow",
    description: "desc",
    slug: "",
    parent: null,
    forkedFrom: null,
    userId: null,
  },
  notFound: false,
  libraiesList: [],
};

export default createSlice({
  name: "Container",
  initialState: state,
  reducers: {
    setContainerFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setNotFoundContainer: (state, action) => {
      state.notFound = action.payload;
    },
    setLibrariesList: (state, action) => {
      state.libraiesList = action.payload;
    },
  },
});
