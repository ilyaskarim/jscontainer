import { useEffect } from "react";
import animationPixelsAndBubbles from "../utils/animationPixelsAndBubbles";
import BlogCard from "../components/UI/BlogCard";

export default function () {
  useEffect(() => {
    animationPixelsAndBubbles();
  });
  return (
    <div>
      <div className="jumbotron bubble-header">
        <div className="bubbles"></div>
        <div className="content">
          <h1>Blog</h1>
          <p>Find the best blogs, articles and tutorials about frontend development from all over the web.</p>
        </div>
      </div>
      <div className="blog-content"><BlogCard></BlogCard></div>
    </div>
  );
}
