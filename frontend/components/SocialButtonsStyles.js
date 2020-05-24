import styled from "styled-components";
import { Button } from "antd";

const socialButtonStyle = `
  border: 0px;
  border-radius: 0px;
  outline: none !important;
`;

export const SocialButtonIcon = styled.span`
  font-weight: bold;
  position: relative;
  left: -7px;
  font-size: 17px;
`;
export const SocialButtonText = styled.span`
  position: relative;
  top: -2px;
  font-size: 13px;
`;

export const GoogleSocialbuttonStyle = styled(Button)`
  background: #cb412e;
  color: white;
  ${socialButtonStyle}
  &:hover {
    background: #ac3221;
    color: white;
  }
`;
export const GithubSocialbuttonStyle = styled(Button)`
  background: #2b2b2b;
  color: white;
  ${socialButtonStyle}
  &:hover {
    background: #2b2b2b;
    color: white;
  }
`;
