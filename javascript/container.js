export default class Container {
  constructor() {
    this.loadIframe();
    this.formData = {
      id: "",
      string_id: "",
      title: "",
      description: "",
      html: {
        content: "",
        settings: {},
      },
      css: {
        content: "",
        settings: {},
      },
      javascript: {
        content: "",
        settings: {},
      },
      assets: [],
      settings: {
        html_5_snippet: false,
        private: false,
      },
      access: [],
    };
  }
  loadIframe() {
    const iframeContainer = document.querySelector(".preview-frame");
    if (iframeContainer) {
      iframeContainer.innerHTML = "";
      setTimeout(() => {
        const previewContainer = document.createElement("iframe");
        previewContainer.src = "/preview/aASDFa";
        iframeContainer.append(previewContainer);
      }, 500);
    }
  }

  save() {}
}
