import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import Link from "next/link";
import { useState } from "react";

export default function () {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutMenu = [
    {
      name: "SignUp",
      path: "/profiile",
    },
    {
      name: "Login",
      path: "/profiile",
    },
  ];
  const loginMenu = [
    {
      name: "ilyas Karim",
      path: "/profiile",
      userName: "@iamdattoo",
      user: true,
    },
    {
      name: "Profile",
      path: "/profiile",
      user: false,
    },
    {
      name: "Containers",
      path: "/containers",
      user: false,
    },
    {
      name: "Logout",
      path: "/logout",
      user: false,
    },
  ];

  const Userlogin = (loginMenu: any) => {
    return loginMenu.map((item) => (
      <MenuItem className="menuList">
        <Link href={item.path}>
          {item.user ? (
            <>
              <img
                src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"
                alt="img"
              />
              <div>
                <h5 className="mb-0">{item.name}</h5>
                <span>{item.userName}</span>
              </div>
            </>
          ) : (
            <>{item.name}</>
          )}
        </Link>
      </MenuItem>
    ));
  };

  const UserlogOut = (logoutMenu: any) => {
    return logoutMenu.map((item) => (
      <MenuItem className="loginmenu">
        <Link href={item.path}>{item.name}</Link>
      </MenuItem>
    ));
  };

  return (
    <Menu
      className="dropdown-menu p-0"
      menuButton={
        <a className="nav-link link" href="#">
          <i className="far fa-user"></i>
        </a>
      }
    >
      {console.log({isLoggedIn})}
      {isLoggedIn ? Userlogin(loginMenu) : UserlogOut(logoutMenu)}
    </Menu>
  );
}
