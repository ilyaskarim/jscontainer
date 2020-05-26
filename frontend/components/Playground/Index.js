import { Tabs, Input } from "antd";
import { Collapse } from "antd";

let CodeMirror = null;
if (typeof window !== "undefined" && typeof window.navigator !== "undefined") {
  CodeMirror = require("react-codemirror2").UnControlled;
  require("codemirror/mode/xml/xml");
  require("codemirror/mode/javascript/javascript");
  require("codemirror/mode/css/css");
}

const { TabPane } = Tabs;

import { PlaygroundLayoutContainer, PlaygroundLayoutSidebar, PlaygroundEditorContainer, PlaygroundEditorTabscontainer, PlaygroundCodeMirrorContainer, PlaygroundPreview } from "./PlaygroundLayoutStyles";

import PlaygroundSidebar from "./PlaygroundSidebar";

import { useSelector, useDispatch } from "react-redux";
import { getPlaygroundInstance, setPlaygroundInstance } from "../../store/modules/playground";

import Preview from "./Preview";

export default function () {
  const dispatch = useDispatch();
  const playgroundInstance = useSelector(getPlaygroundInstance);
  return (
    <div>
      <PlaygroundLayoutContainer>
        <PlaygroundLayoutSidebar>
          <PlaygroundSidebar></PlaygroundSidebar>
        </PlaygroundLayoutSidebar>
        <PlaygroundEditorContainer>
          <PlaygroundEditorTabscontainer animated={false} defaultActiveKey="2">
            <TabPane tab={<span>HTML</span>} key="html">
              {CodeMirror && (
                <PlaygroundCodeMirrorContainer>
                  <CodeMirror
                    value="asd"
                    options={{
                      mode: "xml",
                      theme: "eclipse",
                      lineNumbers: true,
                    }}
                    onChange={(editor, data, value) => {
                      dispatch(
                        setPlaygroundInstance({
                          raw_html: value,
                        })
                      );
                    }}
                  />
                </PlaygroundCodeMirrorContainer>
              )}
            </TabPane>
            <TabPane tab={<span>CSS</span>} key="css">
              {CodeMirror && (
                <PlaygroundCodeMirrorContainer>
                  <CodeMirror
                    value=""
                    options={{
                      mode: "css",
                      theme: "eclipse",
                      lineNumbers: true,
                    }}
                    onChange={(editor, data, value) => {
                      dispatch(
                        setPlaygroundInstance({
                          raw_css: value,
                        })
                      );
                    }}
                  />
                </PlaygroundCodeMirrorContainer>
              )}
            </TabPane>
            <TabPane tab={<span>Javascript</span>} key="javascript">
              {CodeMirror && (
                <PlaygroundCodeMirrorContainer>
                  <CodeMirror
                    value=""
                    options={{
                      mode: "javascript",
                      theme: "eclipse",
                      lineNumbers: true,
                    }}
                    onChange={(editor, data, value) => {
                      dispatch(
                        setPlaygroundInstance({
                          raw_js: value,
                        })
                      );
                    }}
                  />
                </PlaygroundCodeMirrorContainer>
              )}
            </TabPane>
          </PlaygroundEditorTabscontainer>
        </PlaygroundEditorContainer>
        <PlaygroundPreview>
          <Preview></Preview>
        </PlaygroundPreview>
      </PlaygroundLayoutContainer>
    </div>
  );
}
