import Container from "../../components/Container";
import { useRouter } from "next/dist/client/router";
import ContainerNotFound from "../../components/Container/ContainerNotFound";
import { AppContext } from "next/app";

const ContainerView = (props: any) => {
  return props.container ? (
    <Container></Container>
  ) : (
    <ContainerNotFound></ContainerNotFound>
  );
};

ContainerView.getInitialProps = async (obj: AppContext) => {
  const container = await (obj.ctx.req as any).models.Container.findOne({
    where: {
      slug: (obj.ctx.req as any).params["0"].replace("/c/", "") || "",
    },
    include: [
      {
        model: (obj.ctx.req as any).models.ContainerInvite,
      },
      {
        model: (obj.ctx.req as any).models.ContainerAsset,
      },
    ],
  });
  return {
    container,
  };
};

export default ContainerView;
