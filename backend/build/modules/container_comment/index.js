"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: "ContainerComment",
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
      type ContainerComment {
        id: Int
        comment_raw: String
        comment_compiled: String
        created_by_id: Int
        created_by: User
        organization_id: Int
        organization: Organization
        container_id: Int
        container: Container
        created_at: String
        updated_at: String
      }
      input ContainerCommentInput {
        id: Int
        comment_raw: String
        comment_compiled: String
        created_by_id: Int
        organization_id: Int
        container_id: Int
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
            tableName: "storage",
            fields: {
                comment_raw: {
                    type: "STRING"
                },
                comment_compiled: {
                    type: "STRING"
                },
                created_by_id: {
                    type: "INTEGER"
                },
                organization_id: {
                    type: "INTEGER"
                },
                container_id: {
                    type: "INTEGER"
                },
            },
        },
    },
};
//# sourceMappingURL=index.js.map