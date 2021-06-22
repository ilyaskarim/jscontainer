import { useEffect } from "react";
import Tabs from "./../utils/tabs";
import Editor from "./Editor";
import ContainerNavbar from "./../components/ContainerNavbar";
import Button from "./UI/Button";

export default function () {

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
      <ContainerNavbar></ContainerNavbar>
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
                <div className="url_box">
                  <a className="url_link" href="#">
                    https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js
                  </a>
                  <div className="url_icons">
                    <a href="">
                      <i className="fas fa-times"></i>
                    </a>
                    <a href="">
                      {" "}
                      <i className="fas fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="tab-content-item check_settings"
                data-tab-content="settings"
              >
                <div className="form-check form-switch">
                  <div className="switch_btn">
                    <label className="switch mr-2">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                    <span className="switch_label" id="flexSwitchCheckChecked">
                      Html5 snippet
                    </span>
                  </div>
                </div>
                <div className="switch_btn">
                  <label className="switch mr-2">
                    <input type="checkbox" name="html5snippet" />
                    <span className="slider round"></span>
                  </label>
                  <span className="switch_label">Private</span>
                </div>
              </div>
              <div className="tab-content-item" data-tab-content="access">
                <div className="access">
                  <div className="scroll-bar">
                    {[1, 2, 3, 4, 5].map((c) => {
                      return (
                        <div className="d-inline-block p-10 mr-2 p-1 invited-user">
                          ilyas@gmail.com
                          <span className="close d-inline-block ml-1 text-sm p-1 ">
                            &times;
                          </span>
                        </div>
                      );
                    })}
                    <Button className="btn btn-primary btn-xs" >Invite</Button>
                  </div>
                </div>
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
