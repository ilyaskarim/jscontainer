exports.up = function (knex) {
  return knex.schema.raw(`
    CREATE TABLE users (
        id int(11) NOT NULL AUTO_INCREMENT,
        name varchar(255) DEFAULT NULL,
        email varchar(255) DEFAULT NULL,
        password varchar(255) DEFAULT NULL,
        last_login_trough varchar(255) DEFAULT NULL,
        is_activated tinyint(1) DEFAULT NULL,
        color_theme varchar(255) DEFAULT NULL,
        github_photo text,
        github_login varchar(255) DEFAULT NULL,
        github_id int(11) DEFAULT NULL,
        github_node_id varchar(255) DEFAULT NULL,
        github_avatar_url varchar(255) DEFAULT NULL,
        github_gravatar_id varchar(255) DEFAULT NULL,
        github_url varchar(255) DEFAULT NULL,
        github_html_url varchar(255) DEFAULT NULL,
        github_followers_url varchar(255) DEFAULT NULL,
        github_following_url varchar(255) DEFAULT NULL,
        github_gists_url varchar(255) DEFAULT NULL,
        github_starred_url varchar(255) DEFAULT NULL,
        github_subscriptions_url varchar(255) DEFAULT NULL,
        github_organizations_url varchar(255) DEFAULT NULL,
        github_repos_url varchar(255) DEFAULT NULL,
        github_events_url varchar(255) DEFAULT NULL,
        github_received_events_url varchar(255) DEFAULT NULL,
        github_type varchar(255) DEFAULT NULL,
        github_site_admin tinyint(1) DEFAULT NULL,
        github_name varchar(255) DEFAULT NULL,
        github_company varchar(255) DEFAULT NULL,
        github_blog varchar(255) DEFAULT NULL,
        github_location varchar(255) DEFAULT NULL,
        github_email varchar(255) DEFAULT NULL,
        github_hireable varchar(255) DEFAULT NULL,
        github_bio varchar(255) DEFAULT NULL,
        github_twitter_username varchar(255) DEFAULT NULL,
        github_public_repos int(11) DEFAULT NULL,
        github_public_gists int(11) DEFAULT NULL,
        github_followers int(11) DEFAULT NULL,
        github_following int(11) DEFAULT NULL,
        github_created_at varchar(255) DEFAULT NULL,
        github_updated_at varchar(255) DEFAULT NULL,
        google_id varchar(255) DEFAULT NULL,
        google_displayName varchar(255) DEFAULT NULL,
        google_name varchar(255) DEFAULT NULL,
        google_email varchar(255) DEFAULT NULL,
        google_photo text,
        source varchar(255) DEFAULT NULL,
        createdAt datetime NOT NULL,
        updatedAt datetime NOT NULL,
        PRIMARY KEY (id)
      ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
    `);
};

exports.down = function (knex) {
  return knex.schema.dropTable("products").dropTable("users");
};

exports.config = { transaction: false };
