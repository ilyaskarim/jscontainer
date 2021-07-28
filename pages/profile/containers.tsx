import { AppContext } from "next/app";
import { findContainers } from "./../../api/functions";
import { get } from "lodash";
import ContainerItem from "../../components/UI/ContainerItem";

const Containers = (props: any) => {
  const containers = props.containers.containers.rows;

  return (
    <div className="container-section">
      <div className="row">  
        {containers?.map((item: any, index: number) => {
          return (
            <div className="col-lg-3 col-xl-3 " key={index}>
              <ContainerItem data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

Containers.getInitialProps = async (obj: AppContext) => {
  const offset = get(obj, "ctx.req.query.offset", 0);
  const limit = get(obj, "ctx.req.query.limit", 20);
  const containers = await findContainers(
    {
      limit,
      offset,
    },
    (obj.ctx.req as any).sequelize
  );

  return {
    containers: {
      containers,
      pagination: {
        limit,
        offset,
      },
    },
  };
};

export default Containers;
