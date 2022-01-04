import {
  createContainerQuery,
  viewContainerQuery,
  axios,
  updateContainerQuery,
  listContainersQuery,
} from "../../index";
import randomstring from "random-string";
import { useQuery, useMutation } from "react-query";
import { omit } from "lodash";
import { iContainer } from "../../../../types/container";

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

export const useContainersListQuery = () => {
  return useQuery("listContainers", () => {
    return axios.post("/graphql", {
      query: listContainersQuery,
      variables: {
        page: 1,
        limit: 15,
      },
    });
  });
};

export const useContainerUpdateMutation = () => {
  return useMutation("updateContainer", (containerData: iContainer) => {
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
  return useMutation(
    "createContainer",
    (containerData: iContainer) => {
      containerData = {
        ...containerData,
        parent: containerData.id,
        slug: randomstring({
          length: 12,
        }),
      };
      delete containerData["id"];
      return axios.post("/graphql", {
        query: createContainerQuery,
        variables: {
          input: [omit(containerData, ["id", "createdAt", "updatedAt"])],
        },
      });
    },
    {
      retry: false,
    }
  );
};
