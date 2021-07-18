import Container from "../../components/Container";
import { useRouter } from "next/dist/client/router";
import ContainerNotFound from "../../components/Container/ContainerNotFound";

const ContainerView = (props: any) => {
  const router = useRouter();
  const slug = router.query.slug;
  return props.container ? (
    <Container slug={slug as string}></Container>
  ) : (
    <ContainerNotFound></ContainerNotFound>
  );
};

ContainerView.getInitialProps = async (obj: any) => {
  const container = await obj.ctx.req.models.Container.findOne({
    where: {
      slug: obj.ctx.req.params["0"].replace("/c/", "") || "",
    },
    include: [
      {
        model: obj.ctx.req.models.ContainerInvite,
      },
      {
        model: obj.ctx.req.models.ContainerAsset,
      },
    ],
  });
  return {
    container,
  };
};

export default ContainerView;
