import { useState, useEffect } from "react";
import classnames from "classnames";
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
  Position,
} from "@blueprintjs/core";
import {
  APIURL,
  ContainerSettings,
  NotFound,
  setChangedFields,
  setContainerFormData,
  setNotFoundContainer,
  useContainerQuery,
} from "../../index";
import { useDispatch, useSelector } from "react-redux";

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

import styles from "./editor.module.scss";
import toast from "react-hot-toast";
import { Tooltip2 } from "@blueprintjs/popover2";
import { useRouter } from "next/router";
import { requestSaveContainer } from "../redux/redux";

/* eslint-disable-next-line */
export interface EditorProps {}

export function Editor(props: EditorProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [fileName, setFileName] = useState<
    "javascript" | "typescript" | "css" | "html"
  >("html");
  const { refetch: fetchContainer, isLoading: isLoadingContainer } =
    useContainerQuery(router.query.slug as string);
  const [settingsDialog, setSettingsDialog] = useState<boolean>(false);
  const [containerInfoDrawer, setContainerInfoDrawer] = useState(false);
  const containerFromRedux = useSelector(
    (state: any) => state.container.formData
  );
  const theme = useSelector((state: any) => state.container.theme);
  const notFoundContainer = useSelector(
    (state: any) => state.container.notFound
  );

  const javascriptProps = {
    loading: "Loading editor please wait",
    height: "calc(100vh - 50px)",
    theme: theme === "dark" ? "vs-dark" : "",
    options: {
      minimap: {
        enabled: false,
      },
    },
    value: containerFromRedux.javascript,

    onChange: (e: string | undefined) => {
      dispatch(setChangedFields("javascript"));
      files.javascript.value = e ? e : "";
      dispatch(
        setContainerFormData({
          javascript: e ? e : "",
        })
      );
    },
  };

  const handleOnKeyDown = (e: KeyboardEvent) => {
    if (e.metaKey || e.ctrlKey) {
      if (e.key === "s") {
        if (document.activeElement?.classList.contains("inputarea")) {
          e.preventDefault();
          dispatch(requestSaveContainer());
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleOnKeyDown);

    return () => {
      document.removeEventListener("keydown", handleOnKeyDown);
    };
  }, [containerFromRedux]);

  useEffect(() => {
    if (router.query.slug) {
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
  }, [router]);

  if (isLoadingContainer) {
    return <Spinner className={styles.loader} intent="primary"></Spinner>;
  }

  if (notFoundContainer) {
    return <NotFound></NotFound>;
  }

  return (
    <div
      className={classnames({
        [styles.editor]: true,
        [styles.dark]: theme === "dark",
      })}
    >
      <div className={styles.editors}>
        <Tabs
          id="TabsExample"
          onChange={(e: "javascript" | "typescript" | "css" | "html") =>
            setFileName(e)
          }
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
                  minimap: {
                    enabled: false,
                  },
                }}
                theme={theme === "dark" ? "vs-dark" : ""}
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
                  minimap: {
                    enabled: false,
                  },
                }}
                theme={theme === "dark" ? "vs-dark" : ""}
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
            title={containerFromRedux.typescript ? "Typescript" : "Javascript"}
            panel={
              containerFromRedux.typescript === 1 ||
              containerFromRedux.typescript === true ? (
                <>
                  <MonacoReactEditor
                    {...javascriptProps}
                    defaultLanguage="typescript"
                  />
                </>
              ) : (
                <MonacoReactEditor
                  {...javascriptProps}
                  defaultLanguage="javascript"
                />
              )
            }
          />
          <Tabs.Expander />
          <a onClick={() => setContainerInfoDrawer(true)}>
            <Icon icon={"info-sign"} />
          </a>
          <a onClick={() => setSettingsDialog(true)}>
            <Icon icon={"cog"} />
          </a>
        </Tabs>
      </div>
      {containerFromRedux.slug && (
        <div className={styles.preview}>
          <div className={styles.previewHeader}>
            <Tooltip2
              content="Copy container link to clipboard"
              position={Position.BOTTOM}
            >
              <a
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
              value={
                window.location.origin + "/preview/" + containerFromRedux.slug
              }
              size={45}
              small={true}
            />
            &nbsp; &nbsp;
            <Tooltip2
              content="Copy container preview URL to clipboard"
              position={Position.BOTTOM}
            >
              <a
                className={styles.previewURLCopy}
                onClick={() => {
                  window.navigator.clipboard.writeText(
                    `${window.location.origin}/preview/${containerFromRedux.slug}`
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
              src={
                window.location.origin + "/preview/" + containerFromRedux.slug
              }
              id="previewIframe"
            ></iframe>
          )}
        </div>
      )}

      {/* Dialogs */}
      <Dialog
        isOpen={settingsDialog}
        className={theme === "dark" && "bp3-dark"}
        onClose={() => setSettingsDialog(false)}
        title="Container Settings"
      >
        <ContainerSettings />
      </Dialog>
      <Drawer
        className={theme === "dark" && "bp3-dark"}
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
