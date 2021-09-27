import Button from "../UI/Button";
import User from "./User";
import Brand from "./Brand";
import NavLink from "./NavLinks";
import { EventBus } from "../../utils/eventBus";
import { useDispatch, useSelector } from "react-redux";
import {
  getContainerData,
  getHasChangedFields,
  getSavingContainer,
  getStatus,
  saveContainerIntoDB,
  setHasChangedFields,
  setSavingContainer,
} from "../../Redux/app.reducer";
import toast from "react-hot-toast";

export default function () {
  const loading = useSelector(getSavingContainer);
  const containerData = useSelector(getContainerData);
  const status = useSelector(getStatus);
  const hasChangedFields = useSelector(getHasChangedFields);
  const dispatch = useDispatch();

  return (
    <>
      <div className="list_left">
        <Brand></Brand>
        {status === 200 && (
          <>
            <a
              className="primary-clr link"
              href="#"
              onClick={() => {
                EventBus.$emit("runContainer");
              }}
            >
              Run
            </a>
            <Button
              className="btn btn-primary btn-sm custom-btn"
              loading={loading}
              onClick={() => {
                if (hasChangedFields) {
                  dispatch(setSavingContainer(true));
                  saveContainerIntoDB(containerData).finally(() => {
                    dispatch(setSavingContainer(false));
                    dispatch(setHasChangedFields(false));
                  });
                } else {
                  toast("Please change something", {
                    position: "bottom-center",
                  });
                }
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
