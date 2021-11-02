import wertik, { useGraphql, useModule, useDatabase } from "wertik-js/lib/next";

wertik({
  port: process.env.port || 3333,
  graphql: useGraphql(),
  database: {
    jscontainer: useDatabase({
      name: "jscontainer",
      password: "pass",
      username: "root",
      host: "localhost",
      port: 3306,
    }),
  },
  modules: {
    User: useModule({
      useDatabase: true,
      name: "User",
      database: "jscontainer",
      table: "users",
    }),
    Container: useModule({
      useDatabase: true,
      name: "Container",
      database: "jscontainer",
      table: "containers",
    }),
  },
});
