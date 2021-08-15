import Button from "../UI/Button";
import User from "./User";
import Brand from "./Brand";
import NavLink from "./NavLinks";
import { saveContainer } from "../../services";
import { useState } from "react";
import { EventBus } from "../../utils/eventBus";

export default function () {
  const [loading, setLoading] = useState(false);

  EventBus.$on("saveContainerFinish", () => {
    setLoading(false);
  })

  return (
    <>
      <div className="list_left">
        <Brand></Brand>
        <a className="primary-clr link" href="#">
          Run
        </a>
        <Button
          className="btn btn-primary btn-sm custom-btn"
          loading={loading}
          onClick={() => {
            setLoading(true);
            EventBus.$emit("saveContainer")

          }}
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
