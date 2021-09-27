import { createSlice } from "@reduxjs/toolkit";
import { saveContainer } from "../services";
import router from "next/router";
import toast from "react-hot-toast";

export const saveContainerIntoDB = (containerData: any) => {
  const fn = saveContainer(containerData);

  fn.then((resp) => {
    const slug = resp.data.data.slug;
    router.push(`/c/${slug}`);
    toast.success("Container Saved", {
      position: "bottom-center",
    });
  }).catch((e) => {
    toast.error(e.message, {
      position: "bottom-center",
    });
  });

  return fn;
};

const initialState = {
  status: 200,
  containerData: {},
  savingContainer: false,
  hasChangedFields: false,
};

export const app = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setHasChangedFields: (state, action) => {
      state.hasChangedFields = action.payload;
    },
    setContainerData: (state, action) => {
      state.containerData = action.payload;
    },
    setSavingContainer: (state, action) => {
      state.savingContainer = action.payload;
    },
  },
});

export const {
  setStatus,
  setContainerData,
  setSavingContainer,
  setHasChangedFields,
} = app.actions;

export const getStatus = (state: any) => {
  return state.app.status;
};

export const getContainerData = (state: any) => {
  return state.app.containerData;
};

export const getSavingContainer = (state: any) => {
  return state.app.savingContainer;
};

export const getHasChangedFields = (state: any) => {
  return state.app.hasChangedFields;
};

export default app.reducer;
