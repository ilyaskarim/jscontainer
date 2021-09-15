import { BelongsTo } from "sequelize/types";
import Button from "../UI/Button";

export default function (props: any) {
  const blog = props.blog;
  return (
    <>
      <a href={blog.link} target="_blank" className={"blog-card"}>
        <div className="blog-card-img">
          <img src={blog.image} alt="" />
        </div>
        <div className="card-content">
          <span className="tags">
            <a href={blog.site}>{blog.site}</a>
          </span>

          <a href={blog.link} target="_blank">
            <h4>{blog.title}</h4>
          </a>
          <p>{blog.description}</p>
          <Button href={blog.link} target="_blank" className="card-btn">
            Read more
          </Button>
        </div>
      </a>
    </>
  );
}
