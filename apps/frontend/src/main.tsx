import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import "@blueprintjs/core/lib/css/blueprint.css";
import "normalize.css/normalize.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { Toaster } from "react-hot-toast";

import App from "./app/app";
import { StoreProvider } from "@jscontainer/ui";

ReactDOM.render(
  <StrictMode>
    <StoreProvider>
      <Toaster />
      <App />
    </StoreProvider>
  </StrictMode>,
  document.getElementById("root")
);
