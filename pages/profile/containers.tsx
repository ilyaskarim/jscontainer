import { AppContext } from "next/app";
import { findContainers } from "./../../api/functions";
import { get } from "lodash"

const Containers = (props: any) => {
  console.log(props.containers);
  return <div>Containers</div>;
};

Containers.getInitialProps = async (obj: AppContext) => {
  const offset = get(obj, 'ctx.req.query.offset', 0);
  const limit = get(obj, 'ctx.req.query.limit', 20);
  const containers = await findContainers({
    limit, offset
  }, (obj.ctx.req as any).sequelize);

  return {
    containers: {
      containers,
      pagination: {
        limit, offset
      },
    }
  };
};

export default Containers;
