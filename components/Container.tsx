import { useEffect, useState } from "react";
import Tabs from "./../utils/tabs";
import Editor from "./Editor";
import Assets from "./Container/Assets";
import Settings from "./Container/Settings";
import Access from "./Container/Access";
import { useDispatch, useSelector } from "react-redux";
import { getcontainer, setContainer } from "../Redux/container.reducer";

export default function Container() {
  const containerFromRedux = useSelector(getcontainer);

  useEffect(() => {
    Tabs(".tabs-language", {
      byDefaultTab: "html",
      onChange: () => { },
    });

    Tabs(".tabs-menu", {
      byDefaultTab: "assets",
      onChange: () => { },
    });
  }, []);

  const dispatch = useDispatch();

  const handleInputChange = (e: any) => {
    dispatch(
      setContainer({
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e: Event | null) => {
    if (e) {
      e.preventDefault();
    }
  };

  const handleHtmlChange = (e: Event) => {
    dispatch(
      setContainer({
        html: (e?.target as any).value,
      })
    );
  }
  const handleCssChange = (e: Event) => {
    dispatch(
      setContainer({
        css: (e?.target as any).value,
      })
    );
  }

  const handleJsChange = (e: Event) => {
    dispatch(
      setContainer({
        javascript: (e?.target as any).value,
      })
    );
  }

  return (
    <div className="home_section">
      <pre>{JSON.stringify(containerFromRedux, null, 2)}</pre>
      <div className="home_content">
        <div className="form-section  section_comn_pd">
          <form action="" onSubmit={(e) => handleSubmit(null)}>
            <input
              type="text"
              name="title"
              className="bg-gray"
              placeholder="title"
              onKeyUp={(e) => handleInputChange(e)}
            />
            <div className="form-floating">
              <textarea
                name="description"
                className="form-control"
                placeholder="description"
                id="floatingTextarea"
                onChange={(e) => handleInputChange(e)}
              ></textarea>
            </div>
          </form>
        </div>
        <div className="code-section section_comn_pd">
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
                  name="html"
                  defaultLanguage="html"
                  defaultValue="<!-- Write HTML -->"
                  onChange={(e: Event) => handleHtmlChange(e)}
                ></Editor>
              </div>
              <div className="tab-content-item" data-tab-content="css">
                <Editor
                  defaultLanguage="css"
                  defaultValue="/* Write CSS */"
                  onChange={(e: Event) => handleCssChange(e)}
                ></Editor>
              </div>
              <div className="tab-content-item" data-tab-content="javascript">
                <Editor
                  defaultLanguage="javascript"
                  defaultValue="/* Write Javascript */"
                  onChange={(e: Event) => handleJsChange(e)}
                ></Editor>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row1">
        <div className="action_section section_comn_pd">
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
              <div className="tab-content-item scroll-bar assets-scroll" data-tab-content="assets">
                <Assets></Assets>
              </div>
              <div
                className="tab-content-item check_settings"
                data-tab-content="settings"
              >
                <Settings></Settings>
              </div>
              <div
                className="tab-content-item scroll-bar"
                data-tab-content="access"
              >
                <Access></Access>
              </div>
            </div>
          </div>
        </div>
        <div className="code-section section_comn_pd ">
          <div className="preview-frame">
            <iframe src="/preview/x3ad793sgxz3i2" frameBorder="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
