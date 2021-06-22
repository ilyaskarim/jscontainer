import Editor from "@monaco-editor/react";

export default (props: { [key: string]: any }) => (
  <Editor
    height="calc(100vh - 280px)"
    defaultLanguage="javascript"
    loading="Loading editor please wait."
    {...props}
  />
);
