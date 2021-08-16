import { useDispatch, useSelector } from "react-redux";

import Switch from "../UI/Switch";
import { getIsAuthenticated } from "../../Redux/user.reducer";

export default function (props: any) {
  const isAuth = useSelector(getIsAuthenticated)
  const handleChange = (e: any) => {
    if (e.target.name === "snippet") {
      props.setContainerLocal({
        ...props.containerLocal,
        html_snippet: e.target.checked,
      });
    } else {
      props.setContainerLocal({
        ...props.containerLocal,
        is_private: e.target.checked,
      });
    }
  };

  return (
    <div>
      <div className="form-check form-switch">
        <Switch
          label="Html5 snippet"
          name="snippet"
          handleChange={handleChange}
          defaultChecked={props.containerLocal.html_snippet}
        />
      </div>
      {isAuth && <Switch
        label="Private"
        name="is_private"
        handleChange={handleChange}
        defaultChecked={props.containerLocal.is_private}
      />}
    </div>
  );
}
