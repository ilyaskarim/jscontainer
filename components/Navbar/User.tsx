import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";

export default function () {
  return (
    <Menu
      menuButton={
        <a className="nav-link link" href="#">
          <i className="far fa-user"></i>
        </a>
      }
    >
      <MenuItem>Profile</MenuItem>
      <MenuItem>Dark Mode</MenuItem>
      <MenuItem>Logout</MenuItem>
    </Menu>
  );
}
