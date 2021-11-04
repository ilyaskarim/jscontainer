import {
  createContainerQuery,
  viewContainerQuery,
  axios,
} from "@jscontainer/ui";
import { useQuery, useMutation } from "react-query";

export const useContainerQuery = () => {
  return useQuery("viewContainer", () => {
    return axios.post("http://localhost:3333/graphql", {
      query: viewContainerQuery,
      variables: {
        slug: slug,
      },
    });
  });
};

export const useContainerUpdateMutation = () => {};

export const useContainerCreateMutation = () => {
  return useMutation("createContainer", (containerData: any) => {
    return axios.post("http://localhost:3333/graphql", {
      query: createContainerQuery,
      variables: {
        input: [containerData],
      },
    });
  });
};
