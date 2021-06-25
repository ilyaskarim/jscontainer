import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../scss/app/buttons.scss";
import "@szhsin/react-menu/dist/index.css";
import "../scss/app/common.scss";
import "../scss/app/layout.scss";
import "../scss/app/navbar.scss";
import "../scss/app/tabs.scss";
import "../scss/app/welcome.scss";
import "../scss/app/modal.scss";
import "../scss/app/inputField.scss";
import "monaco-editor/esm/vs/base/browser/ui/actionbar/actionbar.css";
import Head from "next/head";
import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="/pb/css/main.min.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Navbar></Navbar>
        <div className="app-container">
          <Component {...pageProps} />
        </div>
        {router.route !== "/" ? <Footer></Footer> : <></>}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-W5P9HVY0C7"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-W5P9HVY0C7');
            `,
          }}
        />
      </body>
    </div>
  );
}

export default MyApp;
