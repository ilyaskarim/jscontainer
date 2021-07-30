import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import { NextPageContext } from "next";
import { useRouter } from "next/dist/client/router";

import Link from "next/link";
import { useState } from "react";

import Modal from "../../components/UI/InviteModal";
import Brand from "./Brand";
import Icon from "../Icons/SvgIcons";
import { getCurrentUser, getIsAuthenticated } from "../../Redux/user.reducer";
import { useSelector } from "react-redux";

export const AccountInformation = ({ item }: any) => {
  return (
    <>
      <img src={item.userImage} alt="img" />
      <div className="dropDown-content">
        <h5 className="mb-0">{item.name}</h5>
        <span>{item.userName}</span>
      </div>
    </>
  );
};

function User(props: any) {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const currentUser = useSelector(getCurrentUser);
  const [open, setOpen] = useState(false);
  const logoutMenu = [
    {
      name: "Signup",
      path: "#",
    },
    {
      name: "Login",
      path: "#",
    },
  ];
  const loginMenu = [
    {
      name: currentUser.name,
      path: "/profiile",
      userName: currentUser.google_displayName,
      userImage: currentUser.google_photo,
      user: true,
    },
    {
      name: "Profile",
      path: "/profile",
      user: false,
    },
    {
      name: "Containers",
      path: "/profile/containers",
      user: false,
    },
    {
      name: "Logout",
      path: "/logout",
      user: false,
    },
  ];
  const Userlogin = (loginMenu: any) => {
    const router = useRouter();

    return loginMenu.map((item: any, index: number) => (
      <MenuItem
        className="menuList"
        key={index}
        onClick={() => router.push(item.path)}
      >
        {/* <Link href="/hello"> */}
        {item.user ? <AccountInformation item={item} /> : <>{item.name}</>}
        {/* </Link> */}
      </MenuItem>
    ));
  };

  const UserlogOut = (logoutMenu: any) => {
    return logoutMenu.map((item: any, index: number) => (
      <MenuItem className="loginmenu" onClick={() => setOpen(true)} key={index}>
        <Link href={item.path} passHref>
          {item.name}
        </Link>
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
        {isAuthenticated ? Userlogin(loginMenu) : UserlogOut(logoutMenu)}
      </Menu>
      <Modal
        className="assets-modal invite-modal signup-modal"
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        style={{
          content: {
            height: "419px",
            maxWidth: "331px",
          },
        }}
      >
        <button className="closeBtn" onClick={() => setOpen(false)}>
          <i className="fas fa-times"></i>
        </button>
        <div className="signup-header pl-0 border-0">
          <h5>
            Continue to <Brand></Brand>
          </h5>
        </div>
        <div className="signup-content">
          <p>
            login in to your by using your
            <br /> Google or Github account.
            <br />
            <br />
            Save containers, Invite friends.
          </p>
          <a className="social-btn google-btn " href="/auth/google/">
            <span>
              <Icon google width="28px" height="28px" />
            </span>
            <button>Login with Google</button>
          </a>
          <a className="social-btn github-btn" href="/auth/github/">
            <span>
              <i className="fab fa-github"></i>
            </span>
            <button>Login with Github</button>
          </a>
          <p className="signup-footer">
            by continuing you are agree with our <br />
            <span>Terms and Conditions</span>
          </p>
        </div>
      </Modal>
    </>
  );
}

export default User;
