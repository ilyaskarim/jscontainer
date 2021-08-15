const faker = require("faker");
const randomstring = require("randomstring");
const sequelize = require("sequelize");
const { has } = require("lodash");
const {
  findContainers,
  RemoveAsset,
  RemoveInvite,
  AddAsset,
  AddInvite,
  saveContainer,
} = require("./functions");

exports.default = function (server) {
  return new Promise((resolve, reject) => {
    server.get("/fake-data", async (req, res) => {
      for (let index = 0; index < 100; index++) {
        const id = index + 1;
        const user = await req.models.User.create({
          name: faker.name.findName(),
          email: `ilyas+${id}@gmail.com`,
          password: "passpass",
          is_activated: true,
          color_theme: "light",
        });
        for (let CID = 0; CID < 20; CID++) {
          const Container = await req.models.Container.create({
            title: `${user.name} Container`,
            description: `${user.name} Container description`,
            html: "Some html",
            css: "Some css",
            is_private: true,
            javascript: "some javascript",
            userId: user.id,
            slug: randomstring.generate({
              length: 14,
              charset: "asdfghzxc12345679ia89sda8d9ad89",
            }),
          });
        }
      }
      res.send("Fake data inserted");
    });

    server.get("/api/containers", async (req, res) => {
      try {
        const search = req.query.search;
        if (!req.query.limit || !req.query.offset) {
          res.status(405).json({
            message: "Limit and offset required",
          });
        }
        res.status(200).json({
          containers: await findContainers(
            {
              offset: +req.query.offset,
              limit: +req.query.limit,
              where: search
                ? {
                    title: {
                      [sequelize.Op.like]: `%${search}%`,
                    },
                  }
                : {},
            },
            req.sequelize
          ),
          pagination: {
            offset: +req.query.offset,
            limit: +req.query.limit,
          },
          message: "Containers",
        });
      } catch (e) {
        console.log(e);
        res.status(500).send(e.message);
      }
    });

    server.get("/api/container/:slug", async (req, res) => {
      try {
        res.status(200).json({
          container: await req.models.Container.findOne({
            where: {
              slug: req.params.slug,
            },
          }),
          message: "Container",
        });
      } catch (e) {
        console.log(e);
        res.status(500).send(e.message);
      }
    });

    server.get("/preview/:slug", async (req, res) => {
      try {
        const container = await req.models.Container.findOne({
          where: {
            slug: req.params.slug,
          },
          include: [
          ],
        });
        if (!container) {
          res.status(404).send("Container not found");
        }
        if (has(req.params, "json")) {
          res.status(200).json({
            container: container,
          });
          return;
        }
        const assets = JSON.parse(container.assets)
        const css = [];
        const js = [];
        assets && assets.forEach(({ url }) => {
            if (!url) {
              return;
            }
            if (url.endsWith(".js")) {
              js.push(`<script src='${url}' ></script>`);
            } else if (url.endsWith(".css")) {
              css.push(`<link rel="stylesheet" href="${url}">`);
            }
          });
        res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>${container.title}</title>
            <meta name="description" content="${container.description}">
            ${css.join("\n")}
        </head>
        <style>
            ${container.css}
        </style>
        <body>
            ${container.html}
        </body>
        ${js.join("\n")}
        <script>
            ${container.javascript}
        <script>
        </html>
        `);
      } catch (e) {
        console.log(e);
        res.status(500).send(e.message);
      }
    });

    server.post("/api/container/save", async (req, res) => {
      try {
        const body = req.body;
        const save= await saveContainer(req.body.container, req.sequelize)
        res.status(save.status).json(save);
      } catch (e) {
        console.log(e);
        res.status(500).send(e.message);
      }
    });

    resolve(true);
  });
};
