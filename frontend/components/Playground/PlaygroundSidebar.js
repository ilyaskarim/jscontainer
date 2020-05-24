import { useState } from "react";
import { Collapse } from "antd";
import { Tabs, Input } from "antd";
import { SidebarCollapse, PlaygroundLayoutSidebarPrivacyText } from "./PlaygroundSidebarStyles";
import { Switch, message } from "antd";

const { TabPane } = Tabs;
const { Search } = Input;

const ResourcesCrud = (props) => {
  let forType = props.forType;
  const [CSSLinks, setCSSLinks] = useState([]);
  const [JSLinks, setJSLinks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  let list = forType == "css" ? CSSLinks : JSLinks;
  return (
    <div>
      {list.map((name) => {
        let split = name.split("/");
        let fileName = split[split.length - 1];
        return <p>{fileName}</p>;
      })}
      <Input
        value={inputValue}
        onChange={(e) => {
          e.persist();
          setInputValue(e.target.value);
        }}
        onPressEnter={(e) => {
          e.persist();
          let val = e.target.value;
          let split = val.split(".");
          let ext = split[split.length - 1];
          if (ext == "js" || ext == "css") {
            if (forType == "css") {
              setCSSLinks([...CSSLinks, e.target.value]);
            } else {
              setJSLinks([...JSLinks, e.target.value]);
            }
            setInputValue("");
          } else {
            message.error("Only CSS or JS file allowed.");
          }
        }}
        placeholder="Add resource"
      />
    </div>
  );
};

export default function () {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <SidebarCollapse>
      <Collapse accordion={true} defaultActiveKey={["1"]} onChange={() => {}}>
        <Collapse.Panel showArrow={false} header="Details" key="1">
          <Input
            value={title}
            onChange={(e) => {
              e.persist();
              setTitle(e.target.value);
            }}
            placeholder="Untitled container"
          />
          <Input.TextArea
            value={description}
            onChange={(e) => {
              e.persist();
              setDescription(e.target.value);
            }}
            placeholder="Small description about container"
          />
        </Collapse.Panel>
        <Collapse.Panel showArrow={false} header="Resources" key="2">
          <Tabs animated={false} defaultActiveKey="1" onChange={() => {}}>
            <TabPane tab="Css" key="Css">
              <ResourcesCrud forType="Css" />
            </TabPane>
            <TabPane tab="Javascript" key="Javascript">
              <ResourcesCrud forType="Javascript" />
            </TabPane>
          </Tabs>
        </Collapse.Panel>
        <Collapse.Panel showArrow={false} header="Privacy" key="3">
          <PlaygroundLayoutSidebarPrivacyText>Make Private</PlaygroundLayoutSidebarPrivacyText>
          <Switch size="small" defaultChecked />
          <PlaygroundLayoutSidebarPrivacyText>Show in search</PlaygroundLayoutSidebarPrivacyText>
          <Switch size="small" defaultChecked />
        </Collapse.Panel>
      </Collapse>
    </SidebarCollapse>
  );
}
