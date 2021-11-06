import { has } from "lodash";
import * as ts from "typescript";

function tsCompile(
  source: string,
  options: ts.TranspileOptions = null
): string {
  if (null === options) {
    options = { compilerOptions: { module: ts.ModuleKind.CommonJS } };
  }
  return ts.transpileModule(source, options).outputText;
}

export const containerPreview = (express) => {
  express.get("/preview/:slug", async function (req, res) {
    try {
      const container =
        await req.wertik.modules.Container.tableInstance.findOne({
          where: {
            slug: req.params.slug,
          },
          include: [],
        });

      if (container.typescript === 1 || container.typescript === true) {
        container.javascript = tsCompile(container.javascript);
      }

      if (!container) {
        res.status(404).send("Container not found");
      }
      if (has(req.query, "json")) {
        res.status(200).json({
          container: container,
        });
        return;
      }
      const assets =
        typeof container.assets === "object"
          ? container.assets
          : JSON.parse(container.assets || "[]");
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
};
