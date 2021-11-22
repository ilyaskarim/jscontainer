import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import containerReducer from "./container.reducer";

export const Store = configureStore({
  reducer: {
    container: containerReducer.reducer,
  },
});

export const {
  setContainerFormData,
  setLibrariesList,
  setNotFoundContainer,
  setChangedFields,
  resetChangedFields,
  setAssets,
  requestCreateContainer,
  requestContainerRefresh,
  resetFormData,
} = containerReducer.actions;

export const StoreProvider = (props: { children: React.ReactNode }) => (
  <Provider store={Store}>{props.children}</Provider>
);
