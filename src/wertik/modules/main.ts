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
      {
        path: "/preview/:id",
        handler: async (req, res) => {
          res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                This is a preview from previewer
            </body>
            </html>
          `);
        },
      },
    ],
  },
};
