import MonacoReactEditor from "@monaco-editor/react";
import { useRef, useState } from "react";
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

  const cssFormat = (s: string) => {
    s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
    s = s.replace(/;\s*;/g, ";");
    s = s.replace(/\,[\s\.\#\d]*{/g, "{");
    s = s.replace(/([^\s])\{([^\s])/g, "$1 {\n\t$2");
    s = s.replace(/([^\s])\}([^\n]*)/g, "$1\n}\n$2");
    s = s.replace(/([^\s]);([^\s\}])/g, "$1;\n\t$2");
    return s;
  };

  return (
    <MonacoReactEditor
      onMount={(editor: any) => {
        editor.onDidBlurEditorText(() => {
          if (props.name === "css") {
            dispatch(
              setContainerFormData({
                css: cssFormat(editor.getValue()),
              })
            );
          } else {
            editor._actions["editor.action.formatDocument"].run();
          }
        });
      }}
      height="calc(100vh - 130px)"
      loading={"Loading editor please wait"}
      value={containerFromRedux[props.name]}
      defaultLanguage={props.language}
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
        }, 1500);
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
