import moment from "moment";
import Link from "next/link";
import Button from "./Button";

export default function (props: any) {
  const { title, description, updatedAt } = props.data;
  return (
    <div className="container_item mb-3">
      <h4>{title}</h4>
      <p className="mb-2">{description}</p>
      <div className="container-date">
        {moment(updatedAt).format("MM/DD/YYYY")}
      </div>
      <Link href="/about">
        <Button className="custom-btn rounded-0">View</Button>
      </Link>
    </div>
  );
}
