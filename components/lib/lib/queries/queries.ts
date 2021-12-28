export const containerFields = `id
title
description
html
css
typescript
javascript
html_snippet
slug
assets
access
createdAt
updatedAt`;

export const createContainerQuery = `
    mutation($input: [createContainerInput!]) {
        createContainer(input: $input) {
        returning {
            ${containerFields}
        }
        }
    }
`;

export const updateContainerQuery = `
    mutation($input: updateContainerInput, $where: ContainerFilterInput!) {
        updateContainer(input: $input, where: $where) {
        returning {
            ${containerFields}
        }
        }
    }  
`;

export const viewContainerQuery = `
    query ViewContainer($slug: String!) {
    viewContainer(where: { slug: { _eq: $slug } }) {
        ${containerFields}
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


export const listContainersQuery = `
    query listContainers {
        listContainer {
            list {
                id
                html
                css
                javascript
                title
            }
        }
    }
`