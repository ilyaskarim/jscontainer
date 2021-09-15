import { useEffect, useState } from "react";
import animationPixelsAndBubbles from "../utils/animationPixelsAndBubbles";
import BlogCard from "../components/UI/BlogCard";
import Blogs from "./../utils/blogs.json";
import classnames from "classnames";
import Head from "next/head";

export default function () {
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    animationPixelsAndBubbles();
  }, []);

  const filtered = () => {
    if (filter === "all") {
      return Blogs.map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    } else if (filter === "wapgee") {
      return Blogs.filter((blog) => blog.site.includes("wapgee"));
    } else if (filter === "css-tricks") {
      return Blogs.filter((blog) => blog.site.includes("css-tricks"));
    } else if (filter === "medium") {
      return Blogs.filter((blog) => blog.site.includes("medium"));
    }
  };

  return (
    <>
      <Head>
        <title>Blog &middot; JS Container</title>
      </Head>
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
      <div className="p-3 pl-5">
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
        <button
          type="button"
          className={classnames({
            btn: true,
            "btn-primary": filter === "medium",
            "btn-light": filter !== "medium",
          })}
          onClick={() => setFilter("medium")}
        >
          Medium
        </button>
      </div>
      <div className="blog-content">
        {filtered()?.map((blog: any, key: number) => {
          return <BlogCard key={key} blog={blog}></BlogCard>;
        })}
      </div>
    </>
  );
}
