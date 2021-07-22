import { useEffect } from "react";
import animationPixelsAndBubbles from "../utils/animationPixelsAndBubbles";
import Head from "next/head";

export default function () {
  useEffect(() => {
    animationPixelsAndBubbles();
  }, []);
  return (
    <>
      <Head>
        <title>About US &middot; JS Container</title>
      </Head>
      <div className="jumbotron bubble-header">
        <div className="bubbles"></div>
        <div className="content">
          <h1>About US</h1>
          <p>About JS Container:</p>
        </div>
      </div>
      <div className={'about-header'}  contentEditable={true}>
        <p>
          JS Container is a web app to store html, css and javascript code. We call each instance as container. Features include
        </p>
        <ul>
          <li>Unlimited containers.</li>
          <li>Free unlimited private Containers.</li>
          <li>Invite your friends to Containers.</li>
          <li>Collaboration on Containers. <code>this feature is coming soon</code></li>
          <li>Saves your Containers to github repos and invite same invited users to github repo who have same email used in Github. <code>this feature is coming soon</code></li>
        </ul>
      </div>
    </>
  );
}
