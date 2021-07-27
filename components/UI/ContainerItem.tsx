import Button from "./Button";

export default function ({data}) {
        const {title, para, date} = data;
    return <div className="container_item mb-3">
            <h4>{title}</h4>
            <p className="mb-2">{para}</p>
            <div className="container-date">{date}</div>
            <Button className="custom-btn rounded-0">View</Button>
    </div>;
  }
  