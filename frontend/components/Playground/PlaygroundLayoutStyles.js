import styled from "styled-components";
import { Tabs } from "antd";

export const PlaygroundLayoutContainer = styled.div`
  height: calc(100vh - 51px);
  display: flex;
`;

export const PlaygroundLayoutSidebar = styled.div`
  border-right: 1px solid #eee;
  width: 182px;
`;

export const PlaygroundEditorContainer = styled.div`
  width: 50%;
  border-right: 1px solid #eee;
`;

export const PlaygroundEditorTabscontainer = styled(Tabs)`
  .ant-tabs-nav-wrap {
    padding-left: 11px;
  }
`;

export const PlaygroundCodeMirrorContainer = styled.div`
  position: relative;
  top: -16px;
  .CodeMirror {
    height: calc(100vh - 95px);
  }
`;
