import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import "@blueprintjs/core/lib/css/blueprint.css";
import "normalize.css/normalize.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { Toaster } from "react-hot-toast";

import App from "./app/app";
import { StoreProvider, QueryClientProvider } from "@jscontainer/ui";

ReactDOM.render(
  <StrictMode>
    <QueryClientProvider>
      <StoreProvider>
        <Toaster />
        <App />
      </StoreProvider>
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById("root")
);
