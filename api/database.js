require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
  }
);

const User = sequelize.define("user", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  is_activated: DataTypes.BOOLEAN,
  color_theme: DataTypes.STRING,
});

const Container = sequelize.define("container", {
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  html: DataTypes.TEXT,
  css: DataTypes.TEXT,
  javascript: DataTypes.TEXT,
  parent: DataTypes.INTEGER,
  assets: DataTypes.TEXT,
  isPrivate: DataTypes.BOOLEAN,
  htmlSnippet: DataTypes.BOOLEAN,
});

const ContainerInvite = sequelize.define("container_invite", {
  name: DataTypes.TEXT
});

User.hasMany(Container);
Container.belongsTo(User);
Container.hasMany(ContainerInvite)
User.hasMany(ContainerInvite)
ContainerInvite.belongsTo(User)
ContainerInvite.belongsTo(Container)

exports.default = sequelize;
exports.User = User;
exports.Container = Container;
exports.ContainerInvite = ContainerInvite;
