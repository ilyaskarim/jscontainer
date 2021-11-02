import { useState } from "react";
import MonacoReactEditor from "@monaco-editor/react";
import { Tab, Tabs, Icon, Dialog, InputGroup } from "@blueprintjs/core";
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

import styles from "./editor.module.less";

/* eslint-disable-next-line */
export interface EditorProps {}

export function Editor(props: EditorProps) {
  const [fileName, setFileName] = useState<"javascript" | "css" | "html">(
    "html"
  );
  const [settingsDialog, setSettingsDialog] = useState<boolean>(false);

  const file = files[fileName];

  return (
    <div className={styles.editor}>
      <div className={styles.editors}>
        <Tabs
          id="TabsExample"
          onChange={(e: "javascript" | "css" | "html") => setFileName(e)}
          className={styles.tabs}
          selectedTabId={fileName}
        >
          <Tab
            id="html"
            title="Html"
            panel={
              <MonacoReactEditor
                loading={"Loading editor please wait"}
                height="calc(100vh - 50px)"
                path={file.name}
                options={{
                  lineNumbers: "off",
                  minimap: {
                    enabled: false,
                  },
                }}
                defaultLanguage={file.language}
                defaultValue={file.value}
                onChange={(e: string | undefined) => {
                  if (e) {
                    files.html.value = e;
                  }
                }}
              />
            }
          />
          <Tab
            id="css"
            title="CSS"
            panel={
              <MonacoReactEditor
                loading={"Loading editor please wait"}
                height="calc(100vh - 50px)"
                path={file.name}
                options={{
                  lineNumbers: "off",
                  minimap: {
                    enabled: false,
                  },
                }}
                defaultLanguage={file.language}
                defaultValue={file.value}
                onChange={(e: string | undefined) => {
                  if (e) {
                    files.css.value = e;
                  }
                }}
              />
            }
          />
          <Tab
            id="javascript"
            title="Javascript"
            panel={
              <MonacoReactEditor
                loading={"Loading editor please wait"}
                height="calc(100vh - 50px)"
                path={file.name}
                options={{
                  lineNumbers: "off",
                  minimap: {
                    enabled: false,
                  },
                }}
                defaultLanguage={file.language}
                defaultValue={file.value}
                onChange={(e: string | undefined) => {
                  if (e) {
                    files.javascript.value = e;
                  }
                }}
              />
            }
          />
          <Tabs.Expander />
          <a href="javascript:void(0)" onClick={() => setSettingsDialog(true)}>
            <Icon icon={"cog"} />
          </a>
        </Tabs>
      </div>
      <div className={styles.preview}>
        <div className={styles.previewHeader}>
          <a href="javascript:void(0)" className={styles.previewURLCopy}>
            <Icon icon="link" />
          </a>
          <InputGroup
            placeholder={window.location.host}
            size={20}
            small={true}
          />
        </div>
      </div>

      {/* Dialogs */}
      <Dialog
        isOpen={settingsDialog}
        onClose={() => setSettingsDialog(false)}
        title="Container Settings"
      >
        <Tabs id="TabsExample" selectedTabId="settings">
          <Tab id="settings" title="Angular" panel={<div>settings</div>} />
          <Tab id="assets" title="Angular" panel={<div>assets</div>} />
        </Tabs>
      </Dialog>
      {/* Dialogs */}
    </div>
  );
}

export default Editor;
