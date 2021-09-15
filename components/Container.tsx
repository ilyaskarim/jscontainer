import React, { useEffect, useState } from "react";
import Tabs from "./../utils/tabs";
import Editor from "@monaco-editor/react";
import Assets from "./Container/Assets";
import Settings from "./Container/Settings";
import Head from "next/head";
import { EventBus } from "../utils/eventBus";
import { saveContainer } from "../services";
import toast from "react-hot-toast";
import Preview from "./Preview";
import { Router, useRouter } from "next/dist/client/router";
import interact from "interactjs";

let timeout: any;

export default function Container(props: any) {
  const router = useRouter();
  const [tab, setTab] = useState("html");

  const [hasChangedFields, setHasChangedFields] = useState(false);
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
    access: [],
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

  useEffect(() => {
    Tabs(".tabs-language", {
      byDefaultTab: "html",
      onChange: () => {},
    });

    Tabs(".tabs-menu", {
      byDefaultTab: "assets",
      onChange: () => {},
    });

    handleResize();
  }, []);

  const handleInputChange = (e: any) => {
    setHasChangedFields(true);
    setContainerLocal({
      ...containerLocal,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any | null) => {
    if (e) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (props.container) {
      setContainerLocal({
        ...props.container,
        assets: JSON.parse(props.container.assets),
        access: JSON.parse(props.container.access),
      });
    }
  }, [props]);

  useEffect(() => {
    EventBus.$off("saveContainer");
    EventBus.$on("saveContainer", () => {
      if (hasChangedFields) {
        saveContainer(containerLocal)
          .then((resp) => {
            if (router.pathname === "/" || resp.data.redirect) {
              const slug = resp.data.data.slug;
              router.push(`/c/${slug}`);
            }
            toast.success("Container Saved", {
              position: "bottom-center",
            });

            setHasChangedFields(false);
          })
          .catch((e) => {
            toast.error(e.message, {
              position: "bottom-center",
            });
          })
          .finally(() => {
            EventBus.$emit("saveContainerFinish");
            EventBus.$emit("runContainer");
          });
      } else {
        toast("Please change something");
        EventBus.$emit("saveContainerFinish");
      }
    });
  }, [containerLocal, hasChangedFields]);

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
            <form action="" onSubmit={(e) => handleSubmit(null)}>
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
            <div className="tabs bg-gray tabs-language">
              <div className="tab-header">
                <ul>
                  <li>
                    <a
                      data-tab="html"
                      onClick={() => setTab("html")}
                      className="tab-header-item"
                      href="#"
                    >
                      Html
                    </a>
                  </li>
                  <li>
                    <a
                      data-tab="css"
                      onClick={() => setTab("css")}
                      className="tab-header-item"
                      href="#"
                    >
                      Css
                    </a>
                  </li>
                  <li>
                    <a
                      data-tab="javascript"
                      className="tab-header-item"
                      onClick={() => setTab("javascript")}
                      href="#"
                    >
                      Javascript
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div className="tab-content-item" data-tab-content="html">
                  {tab === "html" && (
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
                        setHasChangedFields(true);
                        setContainerLocal({
                          ...containerLocal,
                          html: e,
                        });
                        if (containerLocal.id) {
                          clearTimeout(timeout);
                          timeout = setTimeout(() => {
                            EventBus.$emit("saveContainer");
                          }, 1100);
                        }
                      }}
                    />
                  )}
                </div>
                <div className="tab-content-item" data-tab-content="css">
                  {tab === "css" && (
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
                        setHasChangedFields(true);
                        setContainerLocal({
                          ...containerLocal,
                          css: e,
                        });
                        if (containerLocal.id) {
                          clearTimeout(timeout);
                          timeout = setTimeout(() => {
                            EventBus.$emit("saveContainer");
                          }, 1100);
                        }
                      }}
                    />
                  )}
                </div>
                <div className="tab-content-item" data-tab-content="javascript">
                  {tab === "javascript" && (
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
                        setHasChangedFields(true);
                        setContainerLocal({
                          ...containerLocal,
                          javascript: e,
                        });
                        if (containerLocal.id) {
                          clearTimeout(timeout);
                          timeout = setTimeout(() => {
                            EventBus.$emit("saveContainer");
                          }, 1100);
                        }
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row1">
          <div className="action-section section-comn-pd">
            <div className="tabs bg-gray tabs-menu">
              <div className="tab-header">
                <ul>
                  <li>
                    <a data-tab="assets" className="tab-header-item" href="#">
                      Assets
                    </a>
                  </li>
                  <li>
                    <a data-tab="settings" className="tab-header-item" href="#">
                      Settings
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div
                  className="tab-content-item scroll-bar assets-scroll"
                  data-tab-content="assets"
                >
                  <Assets
                    assets={containerLocal.assets}
                    onChange={(links: any) => {
                      setHasChangedFields(true);
                      setContainerLocal({
                        ...containerLocal,
                        assets: links,
                      });
                    }}
                  ></Assets>
                </div>
                <div
                  className="tab-content-item check_settings"
                  data-tab-content="settings"
                >
                  <Settings
                    containerLocal={containerLocal}
                    setContainerLocal={setContainerLocal}
                    onChange={() => {
                      setHasChangedFields(true);
                    }}
                  ></Settings>
                </div>
              </div>
            </div>
          </div>
          <div className="code-section preview-section section-comn-pd ">
            <div className="preview-frame">
              <Preview containerLocal={containerLocal}></Preview>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
