import { Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";

let CodeMirror = null;
if (typeof window !== "undefined" && typeof window.navigator !== "undefined") {
  CodeMirror = require("react-codemirror2").UnControlled;
  require("codemirror/mode/xml/xml");
  require("codemirror/mode/javascript/javascript");
  require("codemirror/mode/css/css");
}

const { TabPane } = Tabs;

import {
  PlaygroundLayoutContainer,
  PlaygroundLayoutSidebar,
  PlaygroundEditorContainer,
  PlaygroundEditorTabscontainer,
  PlaygroundCodeMirrorContainer,
  PlaygroundPreview,
} from "./PlaygroundLayoutStyles";

import PlaygroundSidebar from "./PlaygroundSidebar";

import { getPlaygroundInstance, setPlaygroundInstance } from "../../store/modules/playground";

import Preview from "./Preview";

export default function (props) {
  const dispatch = useDispatch();
  const playground = useSelector(getPlaygroundInstance);
  const containerId = props.containerId;

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
                    // value={playground ? playground.html_raw : ""}
                    options={{
                      mode: "xml",
                      theme: "eclipse",
                      lineNumbers: true,
                    }}
                    onChange={(editor, data, value) => {
                      dispatch(
                        setPlaygroundInstance({
                          html_raw: value,
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
                          css_raw: value,
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
                          js_raw: value,
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
