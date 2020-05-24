import styled from "styled-components";
import { Input, Button } from "antd";

export const StyledLoginPageContainer = styled.div`
  position: relative;
  width: 370px;
  margin: auto;
  height: calc(100vh - 50px);
  padding-top: 4%;
  text-align: center;
`;

export const StyledLoginPageInput = styled(Input)`
  margin-bottom: 13px;
  border-radius: 6px;
  height: 35px;
  border: 1px solid #d4cece;
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

export const StyledLoginPageForgetPasswordText = styled.a`
  float: right;
  margin-bottom: 10px;
`;

export const StyledLoginPageHeadingText = styled.h2`
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 21px;
`;

export const StyledLoginPageNewToAppText = styled.p`
  margin-top: 17px;
  margin-bottom: -8px;
`;
