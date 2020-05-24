import styled from "styled-components";

export const SidebarCollapse = styled.div`
  .ant-collapse {
    border: 0px !important;
  }
  .ant-collapse-header {
    padding: 5px 32px !important;
    padding-left: 13px !important;
  }
  .ant-collapse-content-box,
  .ant-collapse-content {
    padding: 5px;
    input {
      margin-bottom: 5px;
    }
  }

  .ant-tabs-nav-wrap {
    height: 45px;
    position: relative;
    top: -16px;
  }
  .ant-tabs-nav-container {
    height: 29px;
  }
`;
export const PlaygroundLayoutSidebarPrivacyText = styled.p`
  font-size: 12px;
  margin: 0;
`;
