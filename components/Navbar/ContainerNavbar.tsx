import Button from "../UI/Button";
import User from "./User";
import Brand from "./Brand";
import NavLink from "./NavLinks";
import { saveContainer } from "../../services";
import { useState } from "react";
import { EventBus } from "../../utils/eventBus";
import { useSelector } from "react-redux";
import { getStatus } from "../../Redux/app.reducer";

export default function () {
  const [loading, setLoading] = useState(false);
  const status = useSelector(getStatus);

  EventBus.$on("saveContainerFinish", () => {
    setLoading(false);
  });

  return (
    <>
      <div className="list_left">
        <Brand></Brand>
        {status === 200 && (
          <>{EventBus.$on() &&

          
            <a
              className="primary-clr link"
              href="#"
              onClick={() => {
                EventBus.$emit("runContainer");
              }}
            >
              Run
            </a>}
            <Button
              className="btn btn-primary btn-sm custom-btn"
              loading={loading}
              onClick={() => {
                setLoading(true);
                EventBus.$emit("saveContainer");
              }}
            >
              Save
            </Button>
          </>
        )}
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
