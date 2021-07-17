import Button from "../UI/Button";
import User from "./User";
import Brand from "./Brand";
import NavLink from "./NavLinks";
import { useDispatch } from "react-redux";
import { saveContainer } from "../../Redux/container.reducer";

export default function () {
  const dispatch = useDispatch();

  return (
    <>
      <div className="list_left">
        <Brand></Brand>
        <a className="primary-clr link" href="">
          Run
        </a>
        <Button
          className="btn btn-primary btn-sm custom-btn"
          onClick={() => dispatch(saveContainer)}
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
