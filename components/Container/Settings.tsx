import { useDispatch, useSelector } from "react-redux";

import Switch from "../UI/Switch";

export default function (props: any) {
  const handleChange = (e: any) => {
    if (e.target.name === "snippet") {
      props.setContainerLocal({
        ...props.containerLocal,
        html_5_snippet: e.target.checked,
      });
    } else {
      props.setContainerLocal({
        ...props.containerLocal,
        private: e.target.checked,
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
          defaultChecked={props.containerLocal.html_5_snippet}
        />
      </div>
      <Switch
        label="Private"
        name="private"
        handleChange={handleChange}
        defaultChecked={props.containerLocal.private}
      />
    </div>
  );
}
