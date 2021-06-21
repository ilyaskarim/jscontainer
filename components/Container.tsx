import { useEffect } from "react";
import Tabs from "./../utils/tabs";

export default function () {
  useEffect(() => {
    Tabs(".tabs-language", {
      byDefaultTab: "html",
      onChange: ()=> {},
    });

    Tabs(".tabs-menu", {
      byDefaultTab: "assets",
      onChange: () => {},
    });
  }, []);

  return (
    <div className="home_section">
      <nav className="navbar ">
        <div className="list_left">
          <a className="navbar-brand primary-clr " href="#">
            Js <span>Container</span>
          </a>
          <a className="primary-clr link" href="">
            Run
          </a>
          <button type="button" className="btn btn-primary btn-sm custom-btn">
            Save
          </button>
        </div>

        <div className=" form-inline" id="navbarTogglerDemo02">
          <ul className="d-flex listRight">
            <li className="nav-item ">
              <a className="nav-link link" href="#">
                Terms and Condition
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link" href="#">
                Playgrounds
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link" href="#">
                <i className="far fa-user"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
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
                  <a className="url_link" href="">
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
                  <ul className="list_emails scroll-bar">
                    <li>
                      ilyas@gmail.com<span className="close">&times;</span>
                    </li>
                    <li>
                      ilyas@gmail.com<span className="close">&times;</span>
                    </li>
                    <li>
                      ilyas@gmail.com<span className="close">&times;</span>
                    </li>
                    <li>
                      ilyas@gmail.com<span className="close">&times;</span>
                    </li>
                    <li>
                      ilyas@gmail.com<span className="close">&times;</span>
                    </li>
                    <li>
                      ilyas@gmail.com<span className="close">&times;</span>
                    </li>
                    <li>
                      ilyas@gmail.com<span className="close">&times;</span>
                    </li>
                  </ul>
                  <input
                    type="email"
                    name="email"
                    placeholder="User email address"
                    id=""
                  />
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
                <div id="html-container" className="content-editor">
                  loading...
                </div>
              </div>
              <div className="tab-content-item" data-tab-content="css">
                <div id="css-container" className="content-editor">
                  loading...
                </div>
              </div>
              <div className="tab-content-item" data-tab-content="javascript">
                <div id="javascript-container" className="content-editor">
                  loading...
                </div>
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
