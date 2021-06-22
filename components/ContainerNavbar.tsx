import Button from "./../components/UI/Button"
export default function () {
    return (<nav className="navbar ">
        <div className="list_left">
          <a className="navbar-brand primary-clr " href="#">
            Js <span>Container</span>
          </a>
          <a className="primary-clr link" href="">
            Run
          </a>
          <Button loading={false} type="button" className="btn btn-primary btn-sm custom-btn" >Save</Button>
        </div>

        <div className=" form-inline" id="navbarTogglerDemo02">
          <ul className="d-flex listRight">
            <li className="nav-item ">
              <a className="nav-link link"  href="/terms-and-conditions" >
                Terms and Condition
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link" href="/playgrounds">
                Playgrounds
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link" href="/about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link" href="#">
                <i className="far fa-user"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>)
}