import React, { useCallback, useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import Assets from "./Container/Assets";
import Settings from "./Container/Settings";
import Head from "next/head";
import { EventBus } from "../utils/eventBus";
import toast from "react-hot-toast";
import Preview from "./Preview";
import { Router, useRouter } from "next/dist/client/router";
import interact from "interactjs";
import { useDispatch, useSelector } from "react-redux";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import {
  getHasChangedFields,
  saveContainerIntoDB,
  setContainerData,
  setHasChangedFields,
  setSavingContainer,
} from "../Redux/app.reducer";
import ModalCharkra from "./UI/ModalCharkra";

let timeout: any;

export default function Container(props: any) {
  const [settingsModalOpen, setSettingsModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const hasChangedFields = useSelector(getHasChangedFields);

  const [containerLocal, setContainerLocal] = useState({
    id: null,
    html: "",
    slug: "",
    css: "",
    javascript: "",
    title: "",
    description: "",
    html_snippet: true,
    is_private: false,
    // access: [],
    assets: [],
  });

  const handleResize = () => {
    interact(".resizable").resizable({
      edges: { top: true, left: true, bottom: true, right: true },
      listeners: {
        move: function (event: any) {
          let { x, y } = event.target.dataset;

          x = (parseFloat(x) || 0) + event.deltaRect.left;
          y = (parseFloat(y) || 0) + event.deltaRect.top;

          Object.assign(event.target.style, {
            width: `${event.rect.width}px`,
            height: `${event.rect.height}px`,
            transform: `translate(${x}px, ${y}px)`,
          });

          Object.assign(event.target.dataset, { x, y });
        },
      },
    });
  };

  const saveContainer = () => {
    if (hasChangedFields) {
      dispatch(setSavingContainer(true));
      saveContainerIntoDB(containerLocal).finally(() => {
        dispatch(setSavingContainer(false));
        dispatch(setHasChangedFields(false));
      });
    } else {
      toast("Please change something", {
        position: "bottom-center",
      });
    }
  };

  const handleCTRLSave = useCallback(
    (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "s") {
        if (e.metaKey || e.ctrlKey) {
          e.preventDefault();
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            saveContainer();
          }, 300);
        }
      }
    },
    [containerLocal, hasChangedFields]
  );

  const handleInputChange = (e: any) => {
    dispatch(setHasChangedFields(true));
    setContainerLocal({
      ...containerLocal,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any | null) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (props.container) {
      setContainerLocal({
        ...props.container,
        assets: JSON.parse(props.container.assets),
      });
    }
  }, [props]);

  useEffect(() => {
    dispatch(setContainerData(containerLocal));
    window.addEventListener("keydown", handleCTRLSave);

    return () => {
      window.removeEventListener("keydown", handleCTRLSave);
    };
  }, [containerLocal, hasChangedFields, hasChangedFields]);

  return (
    <>
      <Head>
        <title>
          {props?.container?.title ||
            containerLocal.title ||
            "Untitled Container"}{" "}
          &middot; JS Container
        </title>
      </Head>
      <div className="home-section">
        <div className="home-content resizable">
          <div className="form-section  section-comn-pd">
            <form action="" onSubmit={(e) => handleSubmit(e)}>
              <input
                type="text"
                name="title"
                className="bg-gray"
                value={containerLocal.title}
                placeholder="Untitled Container"
                onChange={(e) => handleInputChange(e)}
              />
              <div className="form-floating">
                <textarea
                  name="description"
                  className="form-control"
                  placeholder="description"
                  value={containerLocal.description}
                  id="floatingTextarea"
                  onChange={(e) => handleInputChange(e)}
                ></textarea>
              </div>
            </form>
          </div>
          <div className="code-section section-comn-pd">
            <span
              className="mdi mdi-cog"
              onClick={() => {
                setSettingsModalOpen(true);
              }}
            ></span>
            <Tabs>
              <TabList>
                <Tab>Html</Tab>
                <Tab>Css</Tab>
                <Tab>Javascript</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Editor
                    height="calc(100vh - 280px)"
                    loading="Loading editor please wait."
                    options={{
                      minimap: {
                        enabled: false,
                      },
                    }}
                    defaultLanguage="html"
                    defaultValue={containerLocal.html}
                    onChange={(e: any) => {
                      dispatch(setHasChangedFields(true));
                      setContainerLocal({
                        ...containerLocal,
                        html: e,
                      });
                      if (containerLocal.id) {
                        clearTimeout(timeout);
                        timeout = setTimeout(() => {
                          saveContainer();
                        }, 1100);
                      }
                    }}
                  />
                </TabPanel>
                <TabPanel>
                  <Editor
                    height="calc(100vh - 280px)"
                    loading="Loading editor please wait."
                    options={{
                      minimap: {
                        enabled: false,
                      },
                    }}
                    defaultLanguage="css"
                    defaultValue={containerLocal.css}
                    onChange={(e: any) => {
                      dispatch(setHasChangedFields(true));
                      setContainerLocal({
                        ...containerLocal,
                        css: e,
                      });
                      if (containerLocal.id) {
                        clearTimeout(timeout);
                        timeout = setTimeout(() => {
                          saveContainer();
                        }, 1100);
                      }
                    }}
                  />
                </TabPanel>
                <TabPanel>
                  <Editor
                    height="calc(100vh - 280px)"
                    loading="Loading editor please wait."
                    options={{
                      minimap: {
                        enabled: false,
                      },
                    }}
                    defaultLanguage="javascript"
                    defaultValue={containerLocal.javascript}
                    onChange={(e: any) => {
                      dispatch(setHasChangedFields(true));
                      setContainerLocal({
                        ...containerLocal,
                        javascript: e,
                      });
                      if (containerLocal.id) {
                        clearTimeout(timeout);
                        timeout = setTimeout(() => {
                          saveContainer();
                        }, 1100);
                      }
                    }}
                  />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>

        <div className="row1">
          <div className="code-section preview-section section-comn-pd ">
            <div className="preview-frame">
              {process.browser && containerLocal.slug && (
                <div className="preview-header">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="preview"
                    value={`${window.location.host}/preview/${containerLocal.slug}`}
                  />
                  <div className="actions">
                    <button
                      className="btn btn-light btn-sm mr-2"
                      title="Copy Link"
                      onClick={() => {
                        window.navigator.clipboard.writeText(
                          `${window.location.host}/preview/${containerLocal.slug}`
                        );
                        toast.success("Link copied to clipboard", {
                          position: "bottom-center",
                        });
                      }}
                    >
                      <i className="mdi mdi-content-copy"></i>
                    </button>
                    <button
                      className="btn btn-light btn-sm"
                      title="Run"
                      onClick={() => {
                        EventBus.$emit("runContainer");
                      }}
                    >
                      <i className="mdi mdi-refresh"></i>
                    </button>
                  </div>
                </div>
              )}
              <Preview containerLocal={containerLocal}></Preview>
            </div>
          </div>
        </div>
      </div>
      <ModalCharkra
        isOpen={settingsModalOpen}
        onClose={() => setSettingsModalOpen(false)}
        footer={true}
        title="Container Settings"
      >
        <Tabs>
          <TabList>
            <Tab>Assets</Tab>
            <Tab>Settings</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Assets
                assets={containerLocal.assets}
                onChange={(links: any) => {
                  dispatch(setHasChangedFields(true));
                  setContainerLocal({
                    ...containerLocal,
                    assets: links,
                  });
                }}
              ></Assets>
            </TabPanel>
            <TabPanel>
              <Settings
                containerLocal={containerLocal}
                setContainerLocal={setContainerLocal}
                onChange={() => {
                  dispatch(setHasChangedFields(true));
                }}
              ></Settings>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </ModalCharkra>
    </>
  );
}
