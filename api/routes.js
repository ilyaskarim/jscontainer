const faker = require("faker");
const randomstring = require("randomstring");
const sequelize = require("sequelize");
const { has } = require("lodash");
const {
  SaveContainer,
  FindContainers,
  RemoveAsset,
  RemoveInvite,
  AddAsset,
  AddInvite,
} = require("./functions").default();

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
          containers: await req.models.Container.findAndCountAll({
            offset: +req.query.offset,
            limit: +req.query.limit,
            where: search
              ? {
                  title: {
                    [sequelize.Op.like]: `%${search}%`,
                  },
                }
              : {},
            include: [
              {
                model: req.models.ContainerAsset,
                attributes: ["id", "url", "name", "version"],
              },
              {
                model: req.models.ContainerInvite,
              },
            ],
          }),
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
            include: [
              {
                model: req.models.ContainerAsset,
                attributes: ["id", "url"],
              },
              {
                model: req.models.ContainerInvite,
                include: [
                  {
                    model: req.models.User,
                    attributes: ["id", "email"],
                  },
                ],
              },
            ],
          }),
          message: "Container",
        });
      } catch (e) {
        console.log(e);
        res.status(500).send(e.message);
      }
    });

    server.get("/api/container/preview/:slug", async (req, res) => {
      try {
        const container = await req.models.Container.findOne({
          where: {
            slug: req.params.slug,
          },
          include: [
            {
              model: req.models.ContainerAsset,
            },
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
        const css = [];
        const js = [];
        container &&
          container.container_assets.forEach(({ url }) => {
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
        let assets = [];
        let invites = [];
        let create;

        if (body.container && body.container.slug) {
          create = await req.models.Container.findOne({
            where: {
              slug: req.body.container.slug,
            },
            include: [
              { model: req.models.ContainerAsset },
              { model: req.models.ContainerInvite },
            ],
          });
        } else {
          create = await req.models.Container.create({
            ...body.container,
            slug: randomstring.generate({
              length: 14,
              charset: "asdfghzxc12345679ia89sda8d9ad89",
            }),
          });
        }

        for (const link of body.assets || []) {
          let createAsset = await req.models.ContainerAsset.create({
            url: link,
            containerId: create.id,
          });
          assets.push(createAsset);
        }

        for (const link of body.assets || []) {
          let createAsset = await req.models.ContainerAsset.create({
            url: link,
            containerId: create.id,
          });
          assets.push(createAsset);
        }

        for (const email of body.access || []) {
          const user = await req.models.User.findOne({
            where: {
              email: email,
            },
          });
          if (user) {
            let createInvite = await req.models.ContainerInvite.create({
              containerId: create.id,
              userId: user.id,
            });
            invites.push(createInvite);
          }
        }

        res.status(200).json({
          container: create,
          assets: assets,
          invites: invites,
          message: "Container created successfully",
          isForked: false,
        });
      } catch (e) {
        console.log(e);
        res.status(500).send(e.message);
      }
    });

    server.post("/api/container/:slug/invite", async (req, res) => {
      try {
        const container = await req.models.Container.findOne({
          where: {
            slug: req.params.slug,
          },
        });
        const body = req.body.emails.split(",");
        for (const email of body) {
          const user = await req.models.User.findOne({
            where: {
              email: email,
            },
          });
          if (user) {
            await req.models.ContainerInvite.create({
              containerId: container.id,
              userId: user.id,
            });
          }
        }
        res.status(200).json({
          message: "Invited successfully",
        });
      } catch (e) {
        console.log(e);
        res.status(500).send(e.message);
      }
    });

    server.post("/api/container/:slug/add-asset", async (req, res) => {
      try {
        const container = await req.models.Container.findOne({
          where: {
            slug: req.params.slug,
          },
        });
        const asset = await req.models.ContainerAsset.create({
          url: req.body.url,
          containerId: container.id,
        });
        res.status(200).json({
          message: "Asset successfully created.",
          asset: asset,
        });
      } catch (e) {
        console.log(e);
        res.status(500).send(e.message);
      }
    });

    server.post("/api/container/:slug/remove-invite/:id", async (req, res) => {
      try {
        await req.models.ContainerInvite.destroy({
          where: {
            id: req.params.id,
          },
        });
        res.status(200).json({
          message: "User removed",
        });
      } catch (e) {
        console.log(e);
        res.status(500).send(e.message);
      }
    });

    server.post("/api/remove-asset/:id", async (req, res) => {
      try {
        await req.models.ContainerAsset.destroy({
          where: {
            id: req.params.id,
          },
        });
        res.status(200).json({
          message: "Asset Removed",
        });
      } catch (e) {
        console.log(e);
        res.status(500).send(e.message);
      }
    });

    resolve(true);
  });
};
