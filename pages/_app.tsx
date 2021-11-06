import { Toaster } from "react-hot-toast";
import { StoreProvider, QueryClientProvider } from "../components/lib/index";
import "@blueprintjs/core/lib/css/blueprint.css";
import "normalize.css/normalize.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className={"bp3-dark"}>
      <QueryClientProvider>
        <StoreProvider>
          <Toaster />
          <Component {...pageProps} />
        </StoreProvider>
      </QueryClientProvider>
    </div>
  );
}

export default MyApp;
