import {
  StyledNavbar,
  StyledNavbarHeader,
  StyledNavbarSearch,
  StyledNavbarLink,
  StyledNavbarUserContainer,
  StyledUpdatesContainer,
  StyledNavbarUserDropdownInfo,
  StyledNavbarUserDropdownMenu,
} from "./NavbarStyles";
import Link from "next/link";
import Router from "next/router";

import { Menu, Dropdown, message } from "antd";

import { Input } from "antd";

const menu = (
  <StyledNavbarUserDropdownMenu>
    <StyledNavbarUserDropdownInfo>
      <h4>Ilyas Karim</h4>
      <h5>ilyas.datoo@gmail.com</h5>
    </StyledNavbarUserDropdownInfo>
    <Menu.Item>
      <Link target="_blank" rel="noopener noreferrer" href="/organization/list">
        Organizations
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link target="_blank" rel="noopener noreferrer" href="/profile/containers">
        Your Containers
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link target="_blank" rel="noopener noreferrer" href="/profile/settings">
        Settings
      </Link>
    </Menu.Item>
    <Menu.Item>
      <a
        onClick={() => {
          localStorage.clear();
          message.info("Logout successfull.");
          Router.push("/login");
        }}
      >
        Logout
      </a>
    </Menu.Item>
  </StyledNavbarUserDropdownMenu>
);

export default function () {
  return (
    <StyledNavbar>
      <Link href="/">
        <StyledNavbarHeader>
          &lt;js<span>Container</span>>
        </StyledNavbarHeader>
      </Link>
      <StyledNavbarSearch>
        <Input placeholder="Search public containers"></Input>
      </StyledNavbarSearch>
      <StyledUpdatesContainer className="mdi mdi-bell jscontainer-updates"></StyledUpdatesContainer>
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
