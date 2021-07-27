import { Menu, MenuItem } from "@szhsin/react-menu";
import Link from "next/link";
import { useSelector } from "react-redux";
import User, { AccountInformation } from "../../components/Navbar/User";
import ContainerItem from "../../components/UI/ContainerItem";
import { getCurrentUser, getIsAuthenticated } from "../../Redux/user.reducer";
import containerData from "./profile.json";

export default function MyProfile(props: any) {

  const isAuthenticated = useSelector(getIsAuthenticated);
  const currentUser = useSelector(getCurrentUser);
  console.log('currentUser props', props)

  const loginMenu = [
    {
      name: currentUser.name,
      path: "/profiile",
      userName: currentUser.google_displayName,
      userImage: currentUser.google_photo,
      user: true,
    },
    {
      name: "Containers",
      path: "/containers",
      user: false,
    },
    {
      name: "Profile",
      path: "/profiile",
      user: false,
    },
    {
      name: "Logout",
      path: "/logout",
      user: false,
    },
  ];
  return (
      <div className="profile-section">
        <div className="side-bar">
          {loginMenu.map((item: any, index: number) => (
            <MenuItem className="menuList" key={index}>
              <Link href={item.path}>
                {item.user ? <AccountInformation item={item} /> : <>{item.name}</>}
              </Link>
            </MenuItem>))}
        </div>
        <div className="profile-content">
          <div className="content-header"><h1>Container</h1></div>
          <div className="content">
            <div className="row">
              {containerData.map((item, key: number) => {
                return(
                  <div className="col-lg-4 col-xl-4 ">
                    <ContainerItem data={item} key={key} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
    </div>
  );
}
