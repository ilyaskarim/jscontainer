let isHTMLInitialize = false;
let isCSSInitialize = false;
let isJSInitialize = false;

export const setupHTMLEditor = () => {
  if (isHTMLInitialize === false) {
    document.getElementById("html-container").innerHTML = "";
    var editor = monaco.editor.create(
      document.getElementById("html-container"),
      {
        value: "<!-- Write your html -->",
        language: "html",
        automaticLayout: true,
        theme: "vs",
      }
    );
    isHTMLInitialize = true;
  }
};
export const setupCSSEditor = () => {
  if (isCSSInitialize === false) {
    document.getElementById("css-container").innerHTML = "";
    var editor = monaco.editor.create(
      document.getElementById("css-container"),
      {
        value: "/* Write your css */",
        language: "css",
        automaticLayout: true,
        theme: "vs",
      }
    );
    isCSSInitialize = true;
  }
};

export const setupJavascriptEditor = () => {
  if (isJSInitialize === false) {
    document.getElementById("javascript-container").innerHTML = "";
    var editor = monaco.editor.create(
      document.getElementById("javascript-container"),
      {
        value: "/* Write your javascript */",
        language: "javascript",
        automaticLayout: true,
        theme: "vs",
      }
    );
    isJSInitialize = true;
  }
};
