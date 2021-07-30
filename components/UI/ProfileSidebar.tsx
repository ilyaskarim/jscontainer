import { AccountInformation } from "../Navbar/User";
import { Menu, MenuItem } from "@szhsin/react-menu";

const ProfileSidebar = function (props: any) {
  const currentUser = props.currentUser;
  const loginMenu = [
    {
      name: currentUser && currentUser.name,
      path: "/profile/1",
      userName: currentUser && currentUser.google_displayName,
      userImage: currentUser && currentUser.google_photo,
      user: true,
    },
    {
      name: "Containers",
      path: "/profile/1/",
      user: false,
    },
    {
      name: "Profile",
      path: "/profile/1?profile",
      user: false,
    },
    {
      name: "Logout",
      path: "/logout",
      user: false,
    },
  ];
  return (
    <div className="side-bar">
      {loginMenu.map((item: any, index: number) => (
        <MenuItem className="menuList" key={index}>
          <a href={item.path}>
            {item.user ? <AccountInformation item={item} /> : <>{item.name}</>}
          </a>
        </MenuItem>
      ))}
    </div>
  );
};

export default ProfileSidebar;
