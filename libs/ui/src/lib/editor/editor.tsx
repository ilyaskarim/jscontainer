import { useState } from "react";
import MonacoReactEditor from "@monaco-editor/react";
import {
  Tab,
  Tabs,
  Icon,
  Dialog,
  InputGroup,
  Drawer,
  TextArea,
} from "@blueprintjs/core";
import { ContainerSettings, setContainerFormData } from "@jscontainer/ui";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const [fileName, setFileName] = useState<"javascript" | "css" | "html">(
    "html"
  );
  const [settingsDialog, setSettingsDialog] = useState<boolean>(false);
  const [containerInfoDrawer, setContainerInfoDrawer] = useState(false);

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
                options={{
                  lineNumbers: "off",
                  minimap: {
                    enabled: false,
                  },
                }}
                defaultLanguage="html"
                onChange={(e: string | undefined) => {
                  if (e) {
                    files.html.value = e;
                    dispatch(
                      setContainerFormData({
                        html: e,
                      })
                    );
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
                options={{
                  lineNumbers: "off",
                  minimap: {
                    enabled: false,
                  },
                }}
                defaultLanguage="css"
                onChange={(e: string | undefined) => {
                  if (e) {
                    files.css.value = e;
                    dispatch(
                      setContainerFormData({
                        css: e,
                      })
                    );
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
                options={{
                  lineNumbers: "off",
                  minimap: {
                    enabled: false,
                  },
                }}
                defaultLanguage="javascript"
                onChange={(e: string | undefined) => {
                  if (e) {
                    files.javascript.value = e;
                    dispatch(
                      setContainerFormData({
                        javascript: e,
                      })
                    );
                  }
                }}
              />
            }
          />
          <Tabs.Expander />
          <a
            href="javascript:void(0)"
            onClick={() => setContainerInfoDrawer(true)}
          >
            <Icon icon={"info-sign"} />
          </a>
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
        <iframe
          className={styles.previewFrame}
          src="http://localhost:4a200/asdfasdf"
        ></iframe>
      </div>

      {/* Dialogs */}
      <Dialog
        isOpen={settingsDialog}
        onClose={() => setSettingsDialog(false)}
        title="Container Settings"
      >
        <ContainerSettings />
      </Dialog>
      <Drawer
        isOpen={containerInfoDrawer}
        usePortal={true}
        size={300}
        onClose={() => setContainerInfoDrawer(false)}
        position="left"
        title="Container Info"
        canEscapeKeyClose={true}
      >
        <div className={styles.containerInfo}>
          <InputGroup
            onChange={(e) => {
              dispatch(
                setContainerFormData({
                  title: e.target.value,
                })
              );
            }}
            placeholder="Title"
          ></InputGroup>

          <br />
          <TextArea
            onChange={(e) => {
              dispatch(
                setContainerFormData({
                  description: e.target.value,
                })
              );
            }}
            placeholder="Description"
          ></TextArea>
        </div>
      </Drawer>
      {/* Dialogs */}
    </div>
  );
}

export default Editor;
