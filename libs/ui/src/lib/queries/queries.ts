export const createContainerQuery = `
    mutation($input: [createContainerInput!]) {
        createContainer(input: $input) {
        returning {
            id
            access
            access
            id
        }
        }
    }
`;

export const updateContainerQuery = `
    mutation($input: updateContainerInput, $where: ContainerFilterInput!) {
        updateContainer(input: $input, where: $where) {
        returning {
            id
            access
            access
            id
        }
        }
    }  
`;

export const viewContainerQuery = `
    query ViewContainer{
    viewContainer(where: { id: { _eq: 67 } }) {
        id
    }
    }
`;

export const deleteContainerQuery = `
    mutation($where: ContainerFilterInput!) {
        deleteContainer(where: $where) {
        message
        }
    }
`;
