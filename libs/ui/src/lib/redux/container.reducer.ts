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
  changedFields: [] as Array<string>,
};

export default createSlice({
  name: "Container",
  initialState: state,
  reducers: {
    setContainerFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetChangedFields: (state) => {
      state.changedFields = [];
    },
    setChangedFields: (state, action) => {
      if (!state.changedFields.includes(action.payload)) {
        state.changedFields.push(action.payload as string);
      }
    },
    setNotFoundContainer: (state, action) => {
      state.notFound = action.payload;
    },
    setLibrariesList: (state, action) => {
      state.libraiesList = action.payload;
    },
  },
});
