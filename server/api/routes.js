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
          include: [],
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
        const assets = JSON.parse(container.assets);
        const css = [];
        const js = [];
        assets &&
          assets.forEach((url) => {
            if (!url) {
              return;
            }
            if (url.endsWith(".js")) {
              js.push(`<script src='${url}' ></script>`);
            } else if (url.endsWith(".css")) {
              css.push(`<link rel="stylesheet" href="${url}">`);
            }
          });
        const byDefaultCSS = `
            <style>
              body {
                margin: 0
              }
            </style>
          `;
        const html_snippet = !!container.html_snippet;

        if (html_snippet) {
          res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>${container.title}</title>
            <meta name="description" content="${container.description}">
            ${byDefaultCSS}
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
        </script>
        </html>
        `);
        } else {
          res.send(`
          ${byDefaultCSS}
          ${css.join("\n")}
          <style>
          ${container.css}
      </style>
      <body>
          ${container.html}
      </body>
      ${js.join("\n")}
      <script>
          ${container.javascript}
      </script>
          `);
        }
      } catch (e) {
        console.log(e);
        res.status(500).send(e.message);
      }
    });

    server.post("/api/container/save", async (req, res) => {
      try {
        const body = req.body;
        const save = await saveContainer(
          req.body.container,
          req.sequelize,
          req.user
        );
        res.status(save.status).json(save);
      } catch (e) {
        console.log(e);
        res.status(500).send(e.message);
      }
    });

    resolve(true);
  });
};
