import { useEffect, useState } from "react";
import Tabs from "./../utils/tabs";
import Editor from "./Editor";
import ContainerNavbar from "./Navbar/ContainerNavbar";
import Assets from "./Container/Assets";
import Settings from "./Container/Settings";
import Access from "./Container/Access";
import Navbar from "./Navbar/Navbar";

export default function () {

  const [container, setContainer] = useState({
    title: "",
    description: "",  
    html: "",
    css: "",
    javascript: "",
    assets: [],
    html_5_snippet: false,
    private: false,
    access: [],
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

  return (
    <div className="home_section">
      <div className="xyz">
        <div className="item-1  comn_pd  ">
          <input type="text" className="bg-gray" placeholder="title" />
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="description"
              id="floatingTextarea"
            ></textarea>
          </div>
        </div>
        <div className="item-2 comn_pd">
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
                <li>
                  <a data-tab="access" className="tab-header-item" href="#">
                    Access
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content">
              <div className="tab-content-item" data-tab-content="assets">
                <Assets></Assets>
              </div>
              <div
                className="tab-content-item check_settings"
                data-tab-content="settings"
              >
                <Settings></Settings>
              </div>
              <div className="tab-content-item" data-tab-content="access">
                <Access></Access>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row1">
        <div className="item-3 comn_pd">
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
                  <a data-tab="javascript" className="tab-header-item" href="#">
                    Javascript
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content">
              <div className="tab-content-item" data-tab-content="html">
                <Editor
                  defaultLanguage="html"
                  defaultValue="<!-- write somthing -->"
                ></Editor>
              </div>
              <div className="tab-content-item" data-tab-content="css">
                <Editor
                  defaultLanguage="css"
                  defaultValue="/* Write Something */"
                ></Editor>
              </div>
              <div className="tab-content-item" data-tab-content="javascript">
                <Editor
                  defaultLanguage="javascript"
                  defaultValue="/* Write something */"
                ></Editor>
              </div>
            </div>
          </div>
        </div>
        <div className="item-4 comn_pd ">
          <div className="preview-frame"></div>
        </div>
      </div>
    </div>
  );
}
