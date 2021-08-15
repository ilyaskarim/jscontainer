const { datatype } = require("faker");
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
  last_login_trough: DataTypes.STRING,
  is_activated: DataTypes.BOOLEAN,
  color_theme: DataTypes.STRING,
  github_photo: DataTypes.TEXT,
  github_login: DataTypes.STRING,
  github_id: DataTypes.INTEGER,
  github_node_id: DataTypes.STRING,
  github_avatar_url: DataTypes.STRING,
  github_gravatar_id: DataTypes.STRING,
  github_url: DataTypes.STRING,
  github_html_url: DataTypes.STRING,
  github_followers_url: DataTypes.STRING,
  github_following_url: DataTypes.STRING,
  github_gists_url: DataTypes.STRING,
  github_starred_url: DataTypes.STRING,
  github_subscriptions_url: DataTypes.STRING,
  github_organizations_url: DataTypes.STRING,
  github_repos_url: DataTypes.STRING,
  github_events_url: DataTypes.STRING,
  github_received_events_url: DataTypes.STRING,
  github_type: DataTypes.STRING,
  github_site_admin: DataTypes.BOOLEAN,
  github_name: DataTypes.STRING,
  github_company: DataTypes.STRING,
  github_blog: DataTypes.STRING,
  github_location: DataTypes.STRING,
  github_email: DataTypes.STRING,
  github_hireable: DataTypes.STRING,
  github_bio: DataTypes.STRING,
  github_twitter_username: DataTypes.STRING,
  github_public_repos: DataTypes.INTEGER,
  github_public_gists: DataTypes.INTEGER,
  github_followers: DataTypes.INTEGER,
  github_following: DataTypes.INTEGER,
  github_created_at: DataTypes.STRING,
  github_updated_at: DataTypes.STRING,

  google_id: DataTypes.STRING,
  google_displayName: DataTypes.STRING,
  google_name: DataTypes.STRING,
  google_email: DataTypes.STRING,
  google_photo: DataTypes.TEXT,

  source: DataTypes.STRING,
});

const Container = sequelize.define("container", {
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  html: DataTypes.TEXT,
  css: DataTypes.TEXT,
  javascript: DataTypes.TEXT,
  parent: DataTypes.INTEGER,
  assets: DataTypes.JSON,
  access: DataTypes.JSON,
  is_private: DataTypes.BOOLEAN,
  html_snippet: DataTypes.BOOLEAN,
  slug: DataTypes.STRING,
  forkedFrom: DataTypes.INTEGER,
});

User.hasMany(Container);
Container.belongsTo(User);

exports.default = sequelize;

exports.models = {
  Container,
  User,
};
