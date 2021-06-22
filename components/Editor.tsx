import Editor from "@monaco-editor/react";

export default (props: { [key: string]: any }) => (
  <Editor
    height="90vh"
    defaultLanguage="javascript"
    loading="Loading editor please wait."
    {...props}
  />
);
