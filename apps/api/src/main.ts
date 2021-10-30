/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import * as wertik from "wertik-js/lib/next";
import * as express from "express";

const app = express();

console.log(wertik);

app.get("/api", (req, res) => {
  res.send({ message: "Welcome to api!" });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on("error", console.error);
