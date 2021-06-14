import Tabs from "./tabs";
import Container from "./container";
import {
  setupHTMLEditor,
  setupCSSEditor,
  setupJavascriptEditor,
} from "./cm.js";

(() => {
  Tabs(".tabs-language", {
    byDefaultTab: "html",
    onChange: (newTab, previousTab) => {
      if (newTab === "html") {
        setupHTMLEditor();
      } else if (newTab === "css") {
        setupCSSEditor();
      } else if (newTab === "javascript") {
        setupJavascriptEditor();
      }
    },
  });

  Tabs(".tabs-menu", {
    byDefaultTab: "assets",
    onChange: (newTab, previousTab) => {},
  });

  new Container();
})();
