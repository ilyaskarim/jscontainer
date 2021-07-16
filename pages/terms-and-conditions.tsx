import { useEffect } from "react";
import animationPixelsAndBubbles from "../utils/animationPixelsAndBubbles";

export default function () {
  useEffect(() => {
    animationPixelsAndBubbles();
  });
  return (
    <div>
      <div className="jumbotron bubble-header">
        <div className="bubbles"></div>
        <div className="content">
          <h1>Terms and Conditions</h1>
          <p>JS container Terms and Conditions:</p>
        </div>
      </div>
    </div>
  );
}
