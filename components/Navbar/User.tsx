import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import Link from "next/link";
import { useState } from "react";

import Modal from "../../components/UI/InviteModal";
import Brand from "./Brand";

export default function () {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);

  const logoutMenu = [
    {
      name: "Signup",
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
    return logoutMenu.map((item: any) => (
      <MenuItem className="loginmenu" onClick={() => setOpen(true)}>
        <Link href={item.path} >{item.name}</Link>
      </MenuItem>
    ));
  };

  return (
    <>
    <Menu
      className="dropdown-menu p-0"
      menuButton={
        <a className="nav-link link" href="#">
          <i className="far fa-user"></i>
        </a>
      }
    >
      {isLoggedIn ? Userlogin(loginMenu) : UserlogOut(logoutMenu)}
    </Menu>
    <Modal
        className="assets-modal invite-modal signup-modal"
        isOpen={open}
        onRequestClose={() => setOpen(false)}
          style={{
            
            content: {
              height: '419px',
              maxWidth: '311px',
            }
          }}
      >
        <button className="closeBtn" onClick={() => setOpen(false)}><i className="fas fa-times"></i></button>
        <div className="signup-header pl-0 border-0">
          <h5>Continue to <Brand></Brand></h5>
        </div>
        <div className="signup-content">
          <p>login in to your by using your<br/> Google or Github account.<br/><br/>Save containers, Invite friends.</p>
          <div className="social-btn google-btn "><i className="fab fa-google"></i><button>Login with Google</button></div>
          <div className="social-btn github-btn"><i className="fab fa-github"></i><button>Login with Github</button></div>
          <p className="signup-footer">by continuing you are agree with our <br /><span>Terms and Conditions</span></p>
        </div>
      </Modal>
    </>
  );
}
