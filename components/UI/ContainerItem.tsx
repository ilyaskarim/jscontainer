import moment from "moment";
import Link from "next/link";
import Button from "./Button";

export default function (props: any) {
  const { title, description, updatedAt, slug } = props.data;
  const link = `/c/${slug}`;
  return (
    <a href={link}>
      <div className="container-item mb-3">
        <h4>{title}</h4>
        <p className="mb-2">{description}</p>
        <div className="container-date">
          Last updated: {moment(updatedAt).fromNow()}
        </div>
        <a href={link}>
          <Button className="btn custom-btn rounded-0">View</Button>
        </a>
      </div>
    </a>
  );
}
