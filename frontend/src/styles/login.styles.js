import styled from "styled-components";
import { Input, Button } from "antd";

export const StyledLoginPageContainer = styled.div`
  position: relative;
  width: 370px;
  margin: auto;
  height: calc(100vh - 50px);
  padding-top: 8%;
  text-align: center;
`;

export const StyledLoginPageInput = styled(Input)`
  margin-bottom: 13px;
  border-radius: 6px;
  height: 35px;
  border: 1px solid #eee;
`;

export const StyledLoginPageSubmitButton = styled(Button)`
  width: 100%;
`;

export const StyledLoginPageFormSocialSeparator = styled.div`
  margin: 24px 0;
`;

export const StyledLoginPageSocialButtonsContainer = styled.div`
  display: flex;
  > button {
    width: 47%;
    margin: 8px 5px;
  }
`;
