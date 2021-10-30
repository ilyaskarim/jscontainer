import wertik, { useGraphql } from "wertik-js/lib/next";

wertik({
  port: process.env.port || 3333,
  graphql: useGraphql(),
});
