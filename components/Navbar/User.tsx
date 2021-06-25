import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import Link from "next/link";

export default function () {
  return (
    <Menu
      className="react-menu-reset"
      menuButton={
        <a className="nav-link link" href="#">
          <i className="far fa-user"></i>
        </a>
      }
    >
      <MenuItem className="">
        <Link href="/profile">Profile </Link>
      </MenuItem>
    </Menu>
  );
}
