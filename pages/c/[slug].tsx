import Container from "../../components/Container";
import ContainerNotFound from "../../components/Container/ContainerNotFound";

const ContainerView = (props: any) => {
  return props.container ? (
    <Container container={props.container}></Container>
  ) : (
    <ContainerNotFound></ContainerNotFound>
  );
};

export async function getServerSideProps(context: any) {
  const userId = context.req?.user?.id;

  const container = await context.req.models.Container.findOne({
    where: {
      slug: context.params.slug,
    },
  });

  if (container.is_private === 1 || container.is_private === true  && userId !== container.userId ) {
    return {
      props: {
        status: 404
      }
    }
  }

  return {
    props: {
      container: JSON.parse(JSON.stringify(container)),
      status: container ? 200 : 404,
    },
  };
}

export default ContainerView;
