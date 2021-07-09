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
          <p>Playgrounds to ehance your productivty:</p>
        </div>
      </div>
    </div>
  );
}
