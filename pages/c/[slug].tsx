import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { iContainer } from "../../types/container";
import {
  Layout,
  Editor,
  CustomHead,
  axios,
  viewContainerQuery,
  setContainerFormData,
  setNotFoundContainer,
} from "./../../components/lib/index";

export default function ContainerSlug(props: { containerFromAPI: iContainer }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if ((props.containerFromAPI as any) === "null") {
      dispatch(setNotFoundContainer(true));
      return;
    }
    if (props.containerFromAPI) {
      // @ts-ignore
      var containerFromAPI = JSON.parse(props.containerFromAPI as string);
      if (containerFromAPI) {
        dispatch(setContainerFormData(containerFromAPI));
        dispatch(setNotFoundContainer(false));
      }
    } else {
      dispatch(setNotFoundContainer(true));
    }
  }, []);

  return (
    <Layout showFooter={false} isContainerPage={true}>
      <CustomHead />
      <Editor />
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const slug = context.params.slug;
  const containerFromAPI = await axios.post(`http://localhost:3000/graphql`, {
    query: viewContainerQuery,
    variables: {
      slug: slug,
    },
  });
  return {
    props: {
      containerFromAPI: JSON.stringify(
        containerFromAPI?.data?.data?.viewContainer
      ),
    },
  };
};
