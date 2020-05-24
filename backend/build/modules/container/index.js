"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: "Container",
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
      type Container {
        id: Int
        title: String
        description: String
        forked_from_container_id: Int
        forked_from_container: Container
        version: String
        js_compiler: String
        js_raw: String
        js_compiled: String
        css_compiler: String
        css_raw: String
        css_compiled: String
        html_compiler: String
        html_raw: String
        html_compiled: String
        organization_id: Int
        organization: Organization
        created_by_id: Int
        created_by: User
        created_at: String
        updated_at: String
      }
      input ContainerInput {
        id: Int
        title: String
        description: String
        forked_from_container_id: Int
        version: String
        js_compiler: String
        js_raw: String
        js_compiled: String
        css_compiler: String
        css_raw: String
        css_compiled: String
        html_compiler: String
        html_raw: String
        html_compiled: String
        organization_id: Int
        created_by_id: Int
        is_deleted: Int
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
                title: {
                    type: "STRING",
                },
                description: {
                    type: "STRING",
                },
                forked_from_container_id: {
                    type: "INTEGER",
                },
                version: {
                    type: "STRING",
                },
                js_compiler: {
                    type: "STRING",
                },
                js_raw: {
                    type: "STRING",
                },
                js_compiled: {
                    type: "STRING",
                },
                css_compiler: {
                    type: "STRING",
                },
                css_raw: {
                    type: "STRING",
                },
                css_compiled: {
                    type: "STRING",
                },
                html_compiler: {
                    type: "STRING",
                },
                html_raw: {
                    type: "STRING",
                },
                html_compiled: {
                    type: "STRING",
                },
                organization_id: {
                    type: "INTEGER",
                },
                created_by_id: {
                    type: "INTEGER",
                },
                is_deleted: {
                    type: "INTEGER",
                },
            },
        },
    },
};
//# sourceMappingURL=index.js.map