import { createSlice } from "@reduxjs/toolkit";

const state = {
  formData: {
    html: "<!-- HTML -->",
    css: "/* CSS */",
    javascript: "// Javascript",
    html_snippet: 1,
    assets: `[]`,
    access: "[]",
    title: "wow",
    description: "desc",
    slug: "",
    parent: null,
    forkedFrom: null,
    userId: null,
    typescript: 0,
  },
  notFound: false,
  theme: "dark",
  libraiesList: [],
  changedFields: [] as Array<string>,
};

export default createSlice({
  name: "Container",
  initialState: state,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
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
    setAssets: (state, action) => {
      state.formData.assets = action.payload;
    },
    setLibrariesList: (state, action) => {
      state.libraiesList = action.payload;
    },
  },
});
