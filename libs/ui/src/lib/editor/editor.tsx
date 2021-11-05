import { useState, useEffect } from "react";
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
import {
  APIURL,
  ContainerSettings,
  NotFound,
  setContainerFormData,
  setNotFoundContainer,
  useContainerQuery,
} from "@jscontainer/ui";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

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
  const params: { [key: string]: any } = useParams();
  const dispatch = useDispatch();
  const [fileName, setFileName] = useState<"javascript" | "css" | "html">(
    "html"
  );
  const { refetch: fetchContainer } = useContainerQuery(params.slug);
  const [settingsDialog, setSettingsDialog] = useState<boolean>(false);
  const [containerInfoDrawer, setContainerInfoDrawer] = useState(false);
  const containerFromRedux = useSelector(
    (state: any) => state.container.formData
  );
  const notFoundContainer = useSelector(
    (state: any) => state.container.notFound
  );

  useEffect(() => {
    if (params.slug) {
      fetchContainer().then((resp) => {
        const viewContainer = resp?.data?.data?.data?.viewContainer;
        if (viewContainer) {
          dispatch(setContainerFormData(viewContainer));
          dispatch(setNotFoundContainer(false));
        } else {
          dispatch(setNotFoundContainer(true));
        }
      });
    }
  }, []);

  if (notFoundContainer) {
    return <NotFound></NotFound>;
  }

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
                value={containerFromRedux.html}
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
                value={containerFromRedux.css}
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
                value={containerFromRedux.javascript}
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
        {containerFromRedux && containerFromRedux.slug && (
          <iframe
            className={styles.previewFrame}
            src={APIURL + "/preview/" + containerFromRedux.slug}
          ></iframe>
        )}
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
            value={containerFromRedux.title}
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
            value={containerFromRedux.description}
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
