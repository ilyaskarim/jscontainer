import { useDispatch, useSelector } from "react-redux";
import { setContainer, getcontainer } from "../../Redux/container.reducer";

import Switch from "../UI/Switch";

export default function () {
  const dispatch = useDispatch();
  const containerFromRedux = useSelector(getcontainer);
  const { container } = containerFromRedux;

  const handleChange = (e: any) => {
    if (e.target.name === "snippet") {
      dispatch(
        setContainer({
          html_5_snippet: e.target.checked,
        })
      );
    } else {
      dispatch(
        setContainer({
          private: e.target.checked,
        })
      );
    }
  };
  return (
    <div>
      <div className="form-check form-switch">
        <Switch
          label="Html5 snippet"
          name="snippet"
          handleChange={handleChange}
          defaultChecked={container.html_5_snippet}
        />
      </div>
      <Switch
        label="Private"
        name="private"
        defaultChecked={container.private}
        handleChange={handleChange}
      />
    </div>
  );
}
