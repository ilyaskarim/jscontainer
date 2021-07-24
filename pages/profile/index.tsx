import ContainerItem from "../../components/UI/ContainerItem";

export default function MyProfile() {
  const containerData = [
    
    {
      title: "The title here",
      para: "The description here The description hereThe description hereThe description here",
      date: "12 march 2021",
      id: 1,
      
    },
    {
      title: "The title here",
      para: "The description here The description hereThe description hereThe description here",
      date: "12 march 2021",
      id: 2,
    },
    {
      title: "The title here",
      para: "The description here The description hereThe description hereThe description here",
      date: "12 march 2021",
      id: 3,
    },
    {
      title: "The title here",
      para: "The description here The description hereThe description hereThe description here",
      date: "12 march 2021",
      id: 4,
    },
    {
      title: "The title here",
      para: "The description here The description hereThe description hereThe description here",
      date: "12 march 2021",
      id: 5,
    },
    {
      title: "The title here",
      para: "The description here The description hereThe description hereThe description here",
      date: "12 march 2021",
      id: 6,
    },
  ];
  return (
      <div className="profile-section">
        <div className="side-bar">
          
        </div>
        <div className="profile-content">
          <div className="content-header"><h1>Container</h1></div>
          <div className="content">
            <div className="row">
              {console.log({containerData})}
              {containerData.map((item, key: number) => {
                return(

                  <div className="col-3">
                  <ContainerItem data={item} key={key} />
                </div>
                  )
              })}
            </div>
          </div>
        </div>
    </div>
  );
}
