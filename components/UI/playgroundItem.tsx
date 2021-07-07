import Button from "./Button";

export default function (props: any) {
  const {item} = props; 
    return <>
        <div className="playgrounds-card">
            <h3>{item.title}</h3>
            <p>{item.para}</p>
            <Button>Explore</Button>
          </div>
        
    </>;
  }
  