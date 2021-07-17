import { useEffect } from "react";
import animationPixelsAndBubbles from "../utils/animationPixelsAndBubbles";

export default function () {
  useEffect(() => {
    animationPixelsAndBubbles();
  },[]);
  return (
    <div>
      <div className="jumbotron bubble-header">
        <div className="bubbles"></div>
        <div className="content">
          <h1>About US</h1>
          <p>About JS Container:</p>
        </div>
      </div>
      <div className={'about-header'} >
        <p>
          Js Container is web app to store html, css and javascript code. We call each instance as container. Features
        </p>
        <ul>
          <li>Unlimited containers.</li>
          <li>Free unlimited private Containers.</li>
          <li>Invite your friends to Containers.</li>
          <li>Saves your Containers to github repos and invite same invited users to github repo who have same email used in Github. <code>this feature is coming soon</code></li>
        </ul>
      </div>
    </div>
  );
}
