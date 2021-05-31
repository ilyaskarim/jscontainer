export default {
  name: "Main",
  useDatabase: false,
  graphql: {
    crud: {
      query: {
        generate: false,
        operations: "*",
      },
      mutation: {
        generate: false,
        operations: "*",
      },
    },
    schema: ``,
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
    endpoints: [
      {
        path: "/",
        handler: async (req, res) => {
          res.render("containers/welcome");
        },
      },
    ],
  },
};
