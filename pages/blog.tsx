import { useEffect, useState } from "react";
import animationPixelsAndBubbles from "../utils/animationPixelsAndBubbles";
import BlogCard from "../components/UI/BlogCard";
import Blogs from "./../utils/blogs.json";
import classnames from "classnames";

export default function () {
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    animationPixelsAndBubbles();
  },[]);

  const filtered = () => {
    if (filter === "all") {
      return Blogs;
    } else if (filter === "wapgee") {
      return Blogs.filter(blog => blog.site.includes("wapgee"))
    } else if (filter === "css-tricks") {
      return Blogs.filter(blog => blog.site.includes("css-tricks"))
    }
  }

  return (
    <div>
      <div className="jumbotron bubble-header">
        <div className="bubbles"></div>
        <div className="content">
          <h1>Blog</h1>
          <p>
            Find the best blogs, articles and tutorials about frontend
            development from all over the web.
          </p>
        </div>
      </div>
      <div className="p-3 pl-5"  >
        <button
          type="button"
          className={classnames({
            "btn mr-2": true,
            "btn-primary": filter === "all",
          })}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          type="button"
          className={classnames({
            "btn mr-2": true,
            "btn-primary": filter === "wapgee",
            "btn-light": filter !== "wapgee",
          })}
          onClick={() => setFilter("wapgee")}
        >
          Wapgee
        </button>
        <button
          type="button"
          className={classnames({
            btn: true,
            "btn-primary": filter === "css-tricks",
            "btn-light": filter !== "css-tricks",
          })}
          onClick={() => setFilter("css-tricks")}
        >
          CSS Tricks
        </button>
      </div>
      <div className="blog-content">
        {filtered().map((blog: any) => {
          return <BlogCard blog={blog}></BlogCard>;
        })}
      </div>
    </div>
  );
}
