import Button from "../UI/Button";
import User from "./User";
import Brand from "./Brand";
import NavLink from "./NavLinks";

export default function () {
  return (
    <>
      <div className="list_left">
        <Brand></Brand>
        <a className="primary-clr link" href="">
          Run
        </a>
        <Button
          loading={false}
          type="button"
          className="btn btn-primary btn-sm custom-btn"
        >
          Save
        </Button>
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
