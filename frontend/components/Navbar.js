import { StyledNavbar, StyledNavbarHeader, StyledNavbarSearch, StyledNavbarLink, StyledNavbarUserContainer, StyledNavbarUserDropdownInfo, StyledNavbarUserDropdownMenu } from "./NavbarStyles";

import { Menu, Dropdown } from "antd";

import { Input } from "antd";

const menu = (
  <StyledNavbarUserDropdownMenu>
    <StyledNavbarUserDropdownInfo>
      <h4>Ilyas Karim</h4>
      <h5>ilyas.datoo@gmail.com</h5>
    </StyledNavbarUserDropdownInfo>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        Your Containers
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Organizations
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Settings
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Logout
      </a>
    </Menu.Item>
  </StyledNavbarUserDropdownMenu>
);

export default function () {
  return (
    <StyledNavbar>
      <a href="/" >
        <StyledNavbarHeader>JSContainer</StyledNavbarHeader>
      </a>
      <StyledNavbarSearch>
        <Input placeholder="Search public containers"></Input>
      </StyledNavbarSearch>
      <StyledNavbarLink className="space-to-right">Create Organization</StyledNavbarLink>
      <Dropdown overlay={menu}>
        <StyledNavbarUserContainer className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <img src="https://randomuser.me/api/portraits/men/35.jpg" />
          Ilyas Karim
        </StyledNavbarUserContainer>
      </Dropdown>
    </StyledNavbar>
  );
}
