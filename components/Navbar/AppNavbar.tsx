import User from "./User";
import Brand from "./Brand";
import NavLink from "./NavLinks";

export default function AppNavbar() {
  return (
    <>
      <div className="list_left">
        <Brand></Brand>
      </div>
      <div className=" form-inline" id="navbarTogglerDemo02">
        <ul className="d-flex listRight">
          <NavLink></NavLink>
          <li className="nav-item">
            <User></User>
          </li>
        </ul>
      </div>
    </>
  );
}
