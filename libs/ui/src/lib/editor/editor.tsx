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
  Overlay,
  Spinner,
} from "@blueprintjs/core";
import {
  APIURL,
  ContainerSettings,
  NotFound,
  setChangedFields,
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
import toast from "react-hot-toast";
import { Tooltip2 } from "@blueprintjs/popover2";

/* eslint-disable-next-line */
export interface EditorProps {}

export function Editor(props: EditorProps) {
  const params: { [key: string]: any } = useParams();
  const dispatch = useDispatch();
  const [fileName, setFileName] = useState<"javascript" | "css" | "html">(
    "html"
  );
  const { refetch: fetchContainer, isLoading: isLoadingContainer } =
    useContainerQuery(params.slug);
  const [settingsDialog, setSettingsDialog] = useState<boolean>(false);
  const [containerInfoDrawer, setContainerInfoDrawer] = useState(false);
  const containerFromRedux = useSelector(
    (state: any) => state.container.formData
  );
  const notFoundContainer = useSelector(
    (state: any) => state.container.notFound
  );

  // const handleOnKeyDown = (e: KeyboardEvent) => {
  //   if (e.metaKey || e.ctrlKey) {
  //     if (e.key === "s") {
  //       if (document.activeElement?.classList.contains("inputarea")) {
  //         e.preventDefault();
  //         createContainer(containerFromRedux);
  //       }
  //     }
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("keydown", handleOnKeyDown);

  //   return () => {
  //     document.removeEventListener("keydown", handleOnKeyDown);
  //   };
  // }, [containerFromRedux]);

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

  if (isLoadingContainer) {
    return <Spinner className={styles.loader} intent="primary"></Spinner>;
  }

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
                  dispatch(setChangedFields("html"));
                  files.html.value = e ? e : "";
                  dispatch(
                    setContainerFormData({
                      html: e ? e : "",
                    })
                  );
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
                  dispatch(setChangedFields("css"));
                  files.css.value = e ? e : "";
                  dispatch(
                    setContainerFormData({
                      css: e ? e : "",
                    })
                  );
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
                defaultLanguage="typescript"
                onChange={(e: string | undefined) => {
                  dispatch(setChangedFields("javascript"));
                  files.javascript.value = e ? e : "";
                  dispatch(
                    setContainerFormData({
                      javascript: e ? e : "",
                    })
                  );
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
      {containerFromRedux.slug && (
        <div className={styles.preview}>
          <div className={styles.previewHeader}>
            <Tooltip2 content="Copy container link to clipboard">
              <a
                href="javascript:void(0)"
                className={styles.previewURLCopy}
                onClick={() => {
                  window.navigator.clipboard.writeText(window.location.href);
                  toast.success("Copied to clipboard!", {
                    position: "bottom-center",
                  });
                }}
              >
                <Icon icon="link" />
              </a>
            </Tooltip2>
            <InputGroup
              value={`${APIURL}/preview/${containerFromRedux.slug}`}
              size={45}
              small={true}
            />
            &nbsp; &nbsp;
            <Tooltip2 content="Copy container preview URL to clipboard">
              <a
                href="javascript:void(0)"
                className={styles.previewURLCopy}
                onClick={() => {
                  window.navigator.clipboard.writeText(
                    `${APIURL}/preview/${containerFromRedux.slug}`
                  );
                  toast.success("Copied preview URL to clipboard!", {
                    position: "bottom-center",
                  });
                }}
              >
                <Icon icon="duplicate" />
              </a>
            </Tooltip2>
          </div>
          {containerFromRedux && containerFromRedux.slug && (
            <iframe
              key={containerFromRedux.id}
              className={styles.previewFrame}
              src={APIURL + "/preview/" + containerFromRedux.slug}
              id="previewIframe"
            ></iframe>
          )}
        </div>
      )}

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
              dispatch(setChangedFields("title"));
              dispatch(
                setContainerFormData({
                  title: e.target.value,
                })
              );
            }}
            placeholder="Untitled container"
          ></InputGroup>

          <br />
          <TextArea
            value={containerFromRedux.description}
            onChange={(e) => {
              dispatch(setChangedFields("description"));
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
    </div>
  );
}

export default Editor;
