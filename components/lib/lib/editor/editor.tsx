import { useState, useEffect } from "react";
import classnames from "classnames";
import {
  Tab,
  Tabs,
  Icon,
  Dialog,
  Drawer,
  Classes,
  Button,
} from "@blueprintjs/core";
import {
  ContainerInfo,
  ContainerPreview,
  ContainerSettings,
  NotFound,
  MonacoEditor,
} from "../../index";
import { useDispatch, useSelector } from "react-redux";

import styles from "./editor.module.scss";
import toast from "react-hot-toast";
import { Tooltip2 } from "@blueprintjs/popover2";
import {
  cancelRequestCreateContainer,
  requestCreateContainer,
} from "../redux/redux";
import interact from "interactjs";

/* eslint-disable-next-line */
export interface EditorProps {}

export function Editor(props: EditorProps) {
  const dispatch = useDispatch();
  const [fileName, setFileName] = useState<
    "javascript" | "typescript" | "css" | "html"
  >("html");
  const [settingsDialog, setSettingsDialog] = useState<boolean>(false);
  const [containerInfoDrawer, setContainerInfoDrawer] = useState(false);
  const containerFromRedux = useSelector(
    (state: any) => state.container.formData
  );
  const theme = useSelector((state: any) => state.container.theme);
  const notFoundContainer = useSelector(
    (state: any) => state.container.notFound
  );

  const handleOnKeyDown = (e: KeyboardEvent) => {
    if (e.metaKey || e.ctrlKey) {
      if (e.key === "s") {
        if (document.activeElement?.classList.contains("inputarea")) {
          e.preventDefault();
          dispatch(cancelRequestCreateContainer());
          dispatch(requestCreateContainer());
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
    if (
      !document
        .querySelector(".editors")
        .classList.contains("resize-initialize")
    ) {
      interact(".editors").resizable({
        edges: { top: false, left: false, bottom: false, right: true },
        listeners: {
          move: function (event) {
            if (event.buttons === 0) {
              return;
            }

            let { x, y } = event.target.dataset;

            x = (parseFloat(x) || 0) + event.deltaRect.left;
            y = (parseFloat(y) || 0) + event.deltaRect.top;

            document
              .querySelector(".preview")
              .setAttribute(
                "style",
                `width: ${window.outerWidth - event.rect.right}px`
              );

            Object.assign(event.target.style, {
              width: `${event.rect.right}px`,
              transform: `translate(${x}px, ${y}px)`,
            });

            Object.assign(event.target.dataset, { x, y });
          },
        },
      });
      document.querySelector(".editors").classList.add("resize-initialize");
    }
  }, []);

  if (notFoundContainer) {
    return <NotFound></NotFound>;
  }

  return (
    <>
      <div
        className={classnames({
          [styles.editor]: true,
          editor: true,
          [styles.dark]: theme === "dark",
        })}
      >
        <div
          className={classnames({
            [styles.editors]: true,
            editors: true,
          })}
        >
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
                fileName === "html" && (
                  <>
                    <MonacoEditor language="html" name={"html"}></MonacoEditor>
                  </>
                )
              }
            />
            <Tab
              id="css"
              title="CSS"
              panel={
                fileName === "css" && (
                  <MonacoEditor language="css" name={"css"}></MonacoEditor>
                )
              }
            />
            <Tab
              id="javascript"
              title={
                containerFromRedux.typescript ? "Typescript" : "Javascript"
              }
              panel={
                containerFromRedux.typescript === 1 ||
                containerFromRedux.typescript === true ? (
                  <>
                    <MonacoEditor
                      language="javscript"
                      name={"javscript"}
                    ></MonacoEditor>
                  </>
                ) : (
                  <MonacoEditor
                    language="typescript"
                    name={"javascript"}
                  ></MonacoEditor>
                )
              }
            />
            <Tabs.Expander />
            <Tooltip2 content={`Copy ${fileName} code`}>
              <a
                onClick={() => {
                  window.navigator.clipboard.writeText(
                    containerFromRedux[fileName]
                  );
                  toast.success("Copied HTML to Clipboard.");
                }}
              >
                <Icon icon={"duplicate"} />
              </a>
            </Tooltip2>
            <a onClick={() => setContainerInfoDrawer(true)}>
              <Icon icon={"info-sign"} />
            </a>
            <a onClick={() => setSettingsDialog(true)}>
              <Icon icon={"cog"} />
            </a>
          </Tabs>
        </div>
        <ContainerPreview></ContainerPreview>
      </div>
      <>
        {/* Dialogs */}
        <Dialog
          isOpen={settingsDialog}
          className={theme === "dark" && "bp3-dark"}
          onClose={() => setSettingsDialog(false)}
          title="Container Settings"
        >
          <ContainerSettings />
          <br />
          <div className={Classes.DIALOG_FOOTER}>
            <div className={Classes.DIALOG_FOOTER_ACTIONS}>
              <Button
                onClick={() => {
                  dispatch(requestCreateContainer());
                  setSettingsDialog(false);
                }}
              >
                Close
              </Button>
            </div>
          </div>
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
          <ContainerInfo></ContainerInfo>
        </Drawer>
      </>
    </>
  );
}

export default Editor;
