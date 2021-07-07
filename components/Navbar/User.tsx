import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import Link from "next/link";
import { useState } from "react";



export default function () {
  const [isLoggedIn, setIsLoggedIn]=useState(false);
  const userlogin = (props: any) => {
    return (
      <>
        <Link href="/profile">Signup </Link>
        <Link href="/profile">Login </Link>
      
      </>
    )
  }
  const userlogOut= (props: any) => {
    return (
      <>
        <Link href="/profile"><img src="" alt="" /> <>
          <h5>Ilyas Karim</h5>
          <span>@iamdattoo</span>
        </></Link>
        <Link href="/profile">Profile </Link>
        <Link href="/profile">Containers </Link>
        <Link href="/profile" >Logout </Link>
      </>
    )
  }
  
  return (
    <Menu
      className=""
      menuButton={
        <a className="nav-link link" href="#">
          <i className="far fa-user"></i>
        </a>
      }
    >
      <MenuItem className="">
        {isLoggedIn ? userlogin : userlogOut}
        <Link href="/profile">Profile </Link>
      </MenuItem>
    </Menu> 
  );
}
