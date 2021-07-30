import { MenuItem } from "@szhsin/react-menu";
import Link from "next/link";
import { useSelector } from "react-redux";
import { AccountInformation } from "../../components/Navbar/User";
import { getCurrentUser, getIsAuthenticated } from "../../Redux/user.reducer";

export default function MyProfile(props: any) {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const currentUser = useSelector(getCurrentUser);

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
    <div className="side-bar">
      {loginMenu.map((item: any, index: number) => (
        <MenuItem className="menuList" key={index}>
          <Link href={item.path}>
            {item.user ? <AccountInformation item={item} /> : <>{item.name}</>}
          </Link>
        </MenuItem>
      ))}
    </div>
  );
}
