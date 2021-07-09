export default function () {
    return (
      <div>
        <div className="form-check form-switch">
          <div className="switch_btn">
            <label className="switch mr-2">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <span className="switch-label" id="flexSwitchCheckChecked">
              Html5 snippet
            </span>
          </div>
        </div>
        <div className="switch_btn">
          <label className="switch mr-2">
            <input type="checkbox" name="html5snippet" />
            <span className="slider round"></span>
          </label>
          <span className="switch-label">Private</span>
        </div>
      </div>
    );
}