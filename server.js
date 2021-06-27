const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
// const sequelize = require("./api/database").default;

app.prepare().then(async () => {
  const server = express();

  // await sequelize.authenticate();
  // sequelize.sync({force: true})
  // console.log("Connection to the database has been established successfully.");

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Custom Ready on http://localhost:${port}`);
  });
});
