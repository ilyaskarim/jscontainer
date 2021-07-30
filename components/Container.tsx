import { useEffect, useState } from "react";
import Tabs from "./../utils/tabs";
import Editor from "./Editor";
import Assets from "./Container/Assets";
import Settings from "./Container/Settings";
import Access from "./Container/Access";
import { useDispatch, useSelector } from "react-redux";
import { getcontainer, setContainer } from "../Redux/container.reducer";
import Head from "next/head";

export default function Container() {
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

  const dispatch = useDispatch();

  const handleInputChange = (e: any) => {
    dispatch(
      setContainer({
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e: any | null) => {
    if (e) {
      e.preventDefault();
    }
  };

  const handleHtmlChange = (e: any) => {
    dispatch(
      setContainer({
        html: (e?.target as any).value,
      })
    );
  };
  const handleCssChange = (e: any) => {
    dispatch(
      setContainer({
        css: (e?.target as any).value,
      })
    );
  };

  const handleJsChange = (e: any) => {
    dispatch(
      setContainer({
        javascript: (e?.target as any).value,
      })
    );
  };

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
                placeholder="Untitled Container"
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
                    name="html"
                    defaultLanguage="html"
                    defaultValue="<!-- Write HTML -->"
                    onChange={(e: any) => handleHtmlChange(e)}
                  ></Editor>
                </div>
                <div className="tab-content-item" data-tab-content="css">
                  <Editor
                    defaultLanguage="css"
                    defaultValue="/* Write CSS */"
                    onChange={(e: any) => handleCssChange(e)}
                  ></Editor>
                </div>
                <div className="tab-content-item" data-tab-content="javascript">
                  <Editor
                    defaultLanguage="javascript"
                    defaultValue="/* Write Javascript */"
                    onChange={(e: any) => handleJsChange(e)}
                  ></Editor>
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
                  <li>
                    <a data-tab="access" className="tab-header-item" href="#">
                      Access
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div
                  className="tab-content-item scroll-bar assets-scroll"
                  data-tab-content="assets"
                >
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
          <div className="code-section section-comn-pd ">
            <div className="preview-frame">
              preview will be here.
              {/* <iframe src="/preview/x3ad793sgxz3i2" frameBorder="0"></iframe> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
