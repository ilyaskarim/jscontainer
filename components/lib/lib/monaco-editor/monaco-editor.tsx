import MonacoReactEditor from "@monaco-editor/react";
import { useDispatch, useSelector } from "react-redux";
import {
  requestUpdateContainer,
  setChangedFields,
  setContainerFormData,
} from "../..";

let timeout: any;

/* eslint-disable-next-line */
export interface MonacoEditorProps {
  name: string;
  children?: any;
  language: string;
}

export const MonacoEditor = (props: MonacoEditorProps) => {
  const dispatch = useDispatch();
  const containerFromRedux = useSelector(
    (state: any) => state.container.formData
  );
  const theme = useSelector((state: any) => state.container.theme);

  return (
    <MonacoReactEditor
      height="calc(100vh - 130px)"
      loading={"Loading editor please wait"}
      value={containerFromRedux[props.name]}
      language={props.language}
      options={{
        minimap: {
          enabled: false,
        },
      }}
      theme={theme === "dark" ? "vs-dark" : ""}
      onChange={(e: string | undefined) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          if (containerFromRedux.id) {
            dispatch(requestUpdateContainer());
          }
        }, 450);
        dispatch(setChangedFields(props.name));
        dispatch(
          setContainerFormData({
            [props.name]: e ? e : "",
          })
        );
      }}
    />
  );
};
