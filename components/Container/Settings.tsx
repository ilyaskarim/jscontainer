import { useDispatch } from "react-redux";
import { setContainer } from "../../Redux/container.reducer";
import Switch from "../UI/Switch";

export default function () {
  const dispatch = useDispatch();

  const handleChange = (e: Event) => {
    if(e.target.name === 'snippet') {
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
        <Switch label="Html5 snippet" name="snippet" handleChange={handleChange} />
      </div>
      <Switch label="Private" name="private" handleChange={handleChange} />
    </div>
  );
}
