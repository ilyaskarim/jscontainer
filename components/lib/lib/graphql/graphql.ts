import {
  createContainerQuery,
  viewContainerQuery,
  axios,
  updateContainerQuery,
} from "../../index";
import randomstring from "random-string";
import { useQuery, useMutation } from "react-query";
import { omit } from "lodash";

export const useContainerQuery = (slug: string) => {
  return useQuery(
    "viewContainer",
    () => {
      return axios.post("/graphql", {
        query: viewContainerQuery,
        variables: {
          slug: slug,
        },
      });
    },
    {
      enabled: false,
    }
  );
};

export const useContainerUpdateMutation = () => {
  return useMutation("updateContainer", (containerData: any) => {
    return axios.post("/graphql", {
      query: updateContainerQuery,
      variables: {
        input: omit(containerData, ["id", "createdAt", "updatedAt", "parent"]),
        where: {
          id: {
            _eq: containerData.id,
          },
        },
      },
    });
  });
};

export const useContainerCreateMutation = () => {
  return useMutation("createContainer", (containerData: any) => {
    containerData = {
      ...containerData,
      parent: containerData.id,
      slug: randomstring({
        length: 12,
      }),
    };
    return axios.post("/graphql", {
      query: createContainerQuery,
      variables: {
        input: [omit(containerData, ["id", "createdAt", "updatedAt"])],
      },
    });
  });
};
