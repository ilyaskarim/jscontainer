import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getPlaygroundInstance } from "../../store/modules/playground";
import { StyledIframe } from "./PreviewStyles";

const getBlobURL = (code, type) => {
  const blob = new Blob([code], { type });
  return URL.createObjectURL(blob);
};

const getGeneratedPageURL = ({ html, css, js, js_links, css_links }) => {
  const source = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        ${css || ""}
      </style>
      ${
        css_links
          ? css_links
              .map((link) => {
                return `<link rel="stylesheet"   href='${link}' />`;
              })
              .join("\n")
          : ""
      }
    </head>
    <body>
      <div>
        ${html || ""}
      </div>
      ${
        js_links
          ? js_links
              .map((link) => {
                return `<script src='${link}'></script>`;
              })
              .join("\n")
          : ""
      }
      <script>
        ${js || ""}
      </script>
    </body>
    </html>
  `;

  return getBlobURL(source, "text/html");
};

export default function () {
  const [url, setUrl] = useState("");
  const playground = useSelector(getPlaygroundInstance);

  const generatePreview = () => {
    const blobUrl = getGeneratedPageURL({
      html: playground.raw_html,
      css: playground.raw_css,
      js: playground.raw_js,
      css_links: playground.css_links,
      js_links: playground.js_links,
    });
    setUrl(blobUrl);
  };

  useEffect(() => {
    generatePreview();
  }, [playground]);

  useEffect(() => {
    generatePreview();
  }, [])

  return <StyledIframe src={url}></StyledIframe>;
}
