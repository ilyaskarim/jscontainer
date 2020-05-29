import Head from "next/head";
import Navbar from "../components/Navbar";
import { Provider } from "react-redux";
import GlobalStyle from "./../src/styles/GlobalStyle";
import AppFooter from "../components/AppFooter";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/eclipse.css";

import store from "../store/store";
import { withApollo, initApolloClient } from "../src/apollo";
import { useEffect } from "react";

if (process.browser == true) {
  window.HW_config = {
    selector: ".jscontainer-updates", // CSS selector where to inject the badge
    account: "xD3R8y",
  };
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // <script async src="https://cdn.headwayapp.co/widget.js"></script>
    let s = document.createElement("script");
    s.src = "https://cdn.headwayapp.co/widget.js";
    document.body.append(s);
  }, []);
  return (
    <html>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.2.4/antd.min.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.2.45/css/materialdesignicons.min.css"
        />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet"></link>
        <GlobalStyle></GlobalStyle>
        <title>JS Container</title>
      </Head>
      <body style={{ fontFamily: "Open Sans" }}>
        <Provider store={store}>
          <Navbar></Navbar>
          <Component {...pageProps} />
          {/* <AppFooter></AppFooter> */}
        </Provider>
      </body>
    </html>
  );
}
export default withApollo(MyApp);
