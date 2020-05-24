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

import { PlaygroundLayoutContainer, PlaygroundLayoutSidebar, PlaygroundEditorContainer, PlaygroundEditorTabscontainer, PlaygroundCodeMirrorContainer,PlaygroundPreview } from "./PlaygroundLayoutStyles";

import PlaygroundSidebar from "./PlaygroundSidebar";

export default function () {
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
                    value="<h1>I ♥ react-codemirror2</h1>"
                    options={{
                      mode: "xml",
                      theme: "eclipse",
                      lineNumbers: true,
                    }}
                    onChange={(editor, data, value) => {}}
                  />
                </PlaygroundCodeMirrorContainer>
              )}
            </TabPane>
            <TabPane tab={<span>CSS</span>} key="css">
              {CodeMirror && (
                <PlaygroundCodeMirrorContainer>
                  <CodeMirror
                    value="body {font-family: Arial;}"
                    options={{
                      mode: "css",
                      theme: "eclipse",
                      lineNumbers: true,
                    }}
                    onChange={(editor, data, value) => {}}
                  />
                </PlaygroundCodeMirrorContainer>
              )}
            </TabPane>
            <TabPane tab={<span>Javascript</span>} key="javascript">
              {CodeMirror && (
                <PlaygroundCodeMirrorContainer>
                  <CodeMirror
                    value="const a = 12;"
                    options={{
                      mode: "javascript",
                      theme: "eclipse",
                      lineNumbers: true,
                    }}
                    onChange={(editor, data, value) => {}}
                  />
                </PlaygroundCodeMirrorContainer>
              )}
            </TabPane>
          </PlaygroundEditorTabscontainer>
        </PlaygroundEditorContainer>
        <PlaygroundPreview>
          Preview
        </PlaygroundPreview>
      </PlaygroundLayoutContainer>
    </div>
  );
}
