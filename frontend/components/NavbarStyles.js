import styled from "styled-components";
import { Menu } from "antd";

export const StyledNavbar = styled.div`
  border-bottom: 1px solid #eee;
  display: flex;
  padding: 0 25px;
  height: 50px;
`;

export const StyledNavbarHeader = styled.h3`
  font-size: 15px;
  font-weight: bold;
  position: relative;
  top: 12px;
  width: 134px;
`;

export const StyledNavbarSearch = styled.div`
  position: relative;
  padding-left: inherit;
  top: 8px;
  width: 30%;
  input {
    border-radius: 57px;
  }
`;

export const StyledNavbarLink = styled.a`
  margin-left: auto;
  position: relative;
  top: 13px;
  color: #676767;
  &.space-to-right {
    margin-right: 19px;
  }
`;

export const StyledNavbarUserContainer = styled.a`
  padding-top: 8px;
  img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 7px;
  }
`;
export const StyledNavbarUserDropdownMenu = styled(Menu)`
  width: 200px;
  position: relative;
  left: 10px;
`;
export const StyledNavbarUserDropdownInfo = styled.div`
  border-bottom: 1px solid #eee;
  padding: 10px 10px;
  h4 {
    color: #404040;
  }
  h5 {
    opacity: 0.7;
  }
  h4,
  h5 {
    margin: 0;
  }
`;
