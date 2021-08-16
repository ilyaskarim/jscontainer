import moment from "moment";
import Link from "next/link";
import Button from "./Button";

export default function (props: any) {
  const { title, description, updatedAt, slug, createdAt } = props.data;
  const link = `/c/${slug}`;
  return (
    <a href={link}>
      <div className="container-item mb-3">
        <h4>{title || "Untitled Container"}</h4>
        <p className="mb-2">{description || "no description"}</p>
        <div className="container-date">
          Last updated: {moment(updatedAt).fromNow()}
        </div>
        <div className="container-date">
Created: {moment(createdAt).fromNow()}
        </div>
        <a href={link}>
          <Button className="btn custom-btn rounded-0">View</Button>
        </a>
      </div>
    </a>
  );
}
