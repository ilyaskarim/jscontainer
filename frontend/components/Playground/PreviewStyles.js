import styled from "styled-components";
import { Checkbox, Button } from "antd";

export const StyledIframe = styled.iframe`
  height: calc(100vh - 50px);
  border: 0;
  width: 100vh;
`;

export const StyledPreviewToolbar = styled.div`
  border-bottom: 1px solid #eee;
  height: 45px;
  padding: 6px 7px;
  > button {
    margin-right: 10px;
  }
`;

export const StyledRunAutomaticallyCheckbox = styled(Checkbox)``;

export const StyledPreviewSaveButton = styled(Button)`
  float: right;
`;
