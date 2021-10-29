exports.up = function (knex) {
  return knex.schema.raw(`
          CREATE TABLE containers (
              id int(11) NOT NULL AUTO_INCREMENT,
              title varchar(255) DEFAULT NULL,
              description text,
              html text,
              css text,
              javascript text,
              parent int(11) DEFAULT NULL,
              assets json DEFAULT NULL,
              access json DEFAULT NULL,
              is_private tinyint(1) DEFAULT NULL,
              html_snippet tinyint(1) DEFAULT NULL,
              slug varchar(255) DEFAULT NULL,
              forkedFrom varchar(255) DEFAULT NULL,
              createdAt datetime NOT NULL,
              updatedAt datetime NOT NULL,
              userId int(11) DEFAULT NULL,
              PRIMARY KEY (id),
              KEY userId (userId),
              CONSTRAINT containers_ibfk_1 FOREIGN KEY (userId) REFERENCES users (id) ON DELETE SET NULL ON UPDATE CASCADE
          ) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
        `);
};

exports.down = function (knex) {
  return knex.schema.dropTable("products").dropTable("users");
};

exports.config = { transaction: false };
