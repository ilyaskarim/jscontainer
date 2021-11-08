require("dotenv").config();

module.exports = {
  development: {
    client: "mysql",
    connection: {
      database: process.env.DB_DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    },
    migrations: {
      tableName: "migrations_node",
    },
  },
};
