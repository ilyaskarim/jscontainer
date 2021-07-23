import { AppContext } from "next/app";
import { findContainers } from "./../../api/functions";

const Containers = (props: any) => {
  console.log(props);
  return <div>Profile</div>;
};

Containers.getInitialProps = async (obj: AppContext) => {
  findContainers()
  return {};
};

export default Containers;
