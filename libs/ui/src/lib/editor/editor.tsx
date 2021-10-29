import React, { useState } from "react";
import ReactDOM from "react-dom";

import MonacoReactEditor from "@monaco-editor/react";

const files = {
  javascript: {
    name: "javascript",
    language: "javascript",
    value: "",
  },
  css: {
    name: "style.css",
    language: "css",
    value: "",
  },
  html: {
    name: "index.html",
    language: "html",
    value: "",
  },
};

import "./editor.module.less";

/* eslint-disable-next-line */
export interface EditorProps {}

export function Editor(props: EditorProps) {
  const [fileName, setFileName] = useState<"javascript" | "css" | "html">(
    "javascript"
  );

  const file = files[fileName];

  return (
    <div>
      <button
        disabled={fileName === "javascript"}
        onClick={() => setFileName("javascript")}
      >
        javascript
      </button>
      <button disabled={fileName === "css"} onClick={() => setFileName("css")}>
        style.css
      </button>
      <button
        disabled={fileName === "html"}
        onClick={() => setFileName("html")}
      >
        index.html
      </button>
      <MonacoReactEditor
        height="80vh"
        theme="vs-dark"
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
      />
    </div>
  );
}

export default Editor;
