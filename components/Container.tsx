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

let timeout: any;

export default function Container(props: any) {
  const [containerLocal, setContainerLocal] = useState({
    id: null,
    html: "",
    slug: "",
    css: "",
    javascript: "",
    title: "",
    description: "",
    html_5_snippet: false,
    private: false,
    access: [],
    assets: [],
  });

  useEffect(() => {
    Tabs(".tabs-language", {
      byDefaultTab: "html",
      onChange: () => {},
    });

    Tabs(".tabs-menu", {
      byDefaultTab: "assets",
      onChange: () => {},
    });
  }, []);

  const handleInputChange = (e: any) => {
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
      saveContainer(containerLocal)
        .then(() => {
          toast.success("Container Saved");
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
    });
  }, [containerLocal]);

  return (
    <>
      <Head>
        <title>Untitled Container &middot; JS Container</title>
      </Head>
      <div className="home-section">
        <div className="home-content">
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
                    <a data-tab="html" className="tab-header-item" href="#">
                      Html
                    </a>
                  </li>
                  <li>
                    <a data-tab="css" className="tab-header-item" href="#">
                      Css
                    </a>
                  </li>
                  <li>
                    <a
                      data-tab="javascript"
                      className="tab-header-item"
                      href="#"
                    >
                      Javascript
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div className="tab-content-item" data-tab-content="html">
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
                      setContainerLocal({
                        ...containerLocal,
                        html: e,
                      });
                      clearTimeout(timeout);
                      timeout = setTimeout(() => {
                        EventBus.$emit("saveContainer");
                      }, 1100);
                    }}
                  />
                </div>
                <div className="tab-content-item" data-tab-content="css">
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
                      setContainerLocal({
                        ...containerLocal,
                        css: e,
                      });
                      clearTimeout(timeout);
                      timeout = setTimeout(() => {
                        EventBus.$emit("saveContainer");
                      }, 1100);
                    }}
                  />
                </div>
                <div className="tab-content-item" data-tab-content="javascript">
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
                      setContainerLocal({
                        ...containerLocal,
                        javascript: e,
                      });
                      clearTimeout(timeout);
                      timeout = setTimeout(() => {
                        EventBus.$emit("saveContainer");
                      }, 1100);
                    }}
                  />
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
                  ></Settings>
                </div>
              </div>
            </div>
          </div>
          <div className="code-section section-comn-pd ">
            <div className="preview-frame">
              <Preview containerLocal={containerLocal}></Preview>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
