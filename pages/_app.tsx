import { Toaster } from "react-hot-toast";
import {
  StoreProvider,
  QueryClientProvider,
  GoogleAnalytics,
} from "../components/lib/index";
import "@blueprintjs/core/lib/css/blueprint.css";
import "normalize.css/normalize.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "../styles/global.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (
      window.location.hostname.includes("jscontainer.com") &&
      window.location.href.startsWith("http:")
    ) {
      window.location.href = window.location.href.replace("http:", "https:");
    }
  }, []);

  return (
    <div className={"bp3-dark"}>
      <QueryClientProvider>
        <StoreProvider>
          <Toaster />
          <Component {...pageProps} />
          <GoogleAnalytics />
        </StoreProvider>
      </QueryClientProvider>
    </div>
  );
}

export default MyApp;
