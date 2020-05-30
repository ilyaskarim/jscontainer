import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getPlaygroundInstance, saveContainer, setPlaygroundInstance } from "../../store/modules/playground";
import { StyledIframe, StyledPreviewToolbar, StyledRunAutomaticallyCheckbox, StyledPreviewSaveButton } from "./PreviewStyles";
import { Button, message } from "antd";
import validateBeforeSave from "../../src/helpers/validateBeforeSave";
import { createApolloClient } from "../../src/apollo/index";
import changeVersion from "../../src/helpers/changeVersion";
import { CreateContainerMutation } from "../../src/graphql/container-queries";

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
  const apolloClient = createApolloClient();

  const generatePreview = () => {
    if (playground) {
      const blobUrl = getGeneratedPageURL({
        html: playground.html_raw,
        css: playground.css_raw,
        js: playground.js_raw,
        css_links: playground.css_links,
        js_links: playground.js_links,
      });
      setUrl(blobUrl);
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
    }, 5);
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
            let playgroundInstance = { ...playground };
            if (validateBeforeSave(playground)) {
              playgroundInstance.version = changeVersion(playground.version);
              dispatch(setPlaygroundInstance(playgroundInstance));
              apolloClient.mutate({
                mutation: CreateContainerMutation,
                variables: {
                  input: playgroundInstance,
                },
              });
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
