import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPlaygroundInstance, saveContainer } from "../../store/modules/playground";
import { StyledIframe, StyledPreviewToolbar, StyledRunAutomaticallyCheckbox, StyledPreviewSaveButton } from "./PreviewStyles";
import { Button, message } from "antd";
import { ValidateContainer } from "../../src/helpers/object-validation";

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
  const [automaticallyRun, setAutomaticallyRun] = useState(true);
  const playground = useSelector(getPlaygroundInstance);
  const dispatch = useDispatch();

  const generatePreview = () => {
    if (playground) {
      const blobUrl = getGeneratedPageURL({
        html: playground.raw_html,
        css: playground.raw_css,
        js: playground.raw_js,
        css_links: playground.css_links,
        js_links: playground.js_links,
      });
      setUrl(blobUrl);
    } else {
      console.log(playground);
    }
  };

  useEffect(() => {
    if (automaticallyRun === true) {
      generatePreview();
    }
  }, [playground]);

  useEffect(() => {
    generatePreview();
    setTimeout(() => {
      generatePreview();
    }, 1000);
  }, []);

  return (
    <div>
      <StyledPreviewToolbar>
        <Button onClick={generatePreview}>Run</Button>
        <StyledRunAutomaticallyCheckbox
          value
          checked={automaticallyRun}
          onClick={() => {
            setAutomaticallyRun(!automaticallyRun);
          }}
        >
          Run automatically
        </StyledRunAutomaticallyCheckbox>
        <StyledPreviewSaveButton
          onClick={() => {
            if (playground.raw_html) {
              ValidateContainer(playground)
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                  if (err.forEach) {
                    err.forEach((element) => {
                      message.error(element.message);
                    });
                  }
                });
            } else {
              message.error("Markup is required.");
            }
          }}
        >
          Save
        </StyledPreviewSaveButton>
      </StyledPreviewToolbar>
      <StyledIframe src={url}></StyledIframe>
    </div>
  );
}
