import Button from "./Button";

export default function (props: any) {
  const { item } = props;
  return (
    <>
      <a className="playground-card" href="#" >
        <div className="">
          <div className="content">
            <h3>{item.title}</h3>
            <p>{item.para}</p>
            <Button>Explore</Button>
          </div>
        </div>
      </a>
    </>
  );
}
