import Head from "next/head";
import Navbar from "../components/Navbar";
import { Provider } from "react-redux";
import GlobalStyle from "./../src/styles/GlobalStyle";
import AppFooter from "../components/AppFooter";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/eclipse.css";

import store from "../store/store";
import { withApollo, initApolloClient } from '../src/apollo'


function MyApp({ Component, pageProps }) {
  return (
    <html>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.2.4/antd.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.2.45/css/materialdesignicons.min.css" />
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
export default withApollo(MyApp)
