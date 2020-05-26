export default {
  name: "Organization",
  graphql: {
    crud: {
      query: {
        generate: true,
        operations: "*",
      },
      mutation: {
        generate: true,
        operations: "*",
      },
    },
    schema: `
      type Organization {
        id: Int
        title: String
        url: String
        created_by: Int
        created_by_id: Int
        is_deleted: Int
        created_at: String
        updated_at: String
      }
      input OrganizationInput {
        id: Int
        title: String!
        url: String
        is_deleted: Int
        created_by_id: Int
      }
    `,
    mutation: {
      schema: ``,
      resolvers: {},
    },
    query: {
      schema: ``,
      resolvers: {},
    },
  },

  restApi: {
    endpoints: [],
  },
  database: {
    sql: {
      tableName: "organization",
      fields: {
        title: {
          type: "STRING",
        },
        url: {
          type: "STRING",
        },
        is_deleted: {
          type: "INTEGER",
        },
        created_by_id: {
          type: "INTEGER",
        },
      },
    },
  },
};
