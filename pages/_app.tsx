import "../styles/globals.scss";
import type { AppProps, AppContext } from "next/app";
import "../scss/app/buttons.scss";
import "@szhsin/react-menu/dist/index.css";
import "../scss/app/common.scss";
import "../scss/app/layout.scss";
import "../scss/app/navbar.scss";
import "../scss/app/tabs.scss";
import "../scss/app/welcome.scss";
import "../scss/app/modal.scss";
import "../scss/app/playgrounds.scss";
import "../scss/app/inputField.scss";
import "../scss/app/card.scss";
import "../scss/app/blog.scss";
import "../scss/app/profile.scss";
import "../scss/app/dropdown.scss";
import "../scss/app/containerItem.scss";
import "../scss/app/containerNotFound.scss";
import "monaco-editor/esm/vs/base/browser/ui/actionbar/actionbar.css";
import Head from "next/head";
import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { Toaster } from "react-hot-toast";
import { Provider, useDispatch } from "react-redux";
import store from "../Redux/store";
import { setCurrentUser } from "../Redux/user.reducer";
import {get} from "lodash"

const MyApp = ({ Component, pageProps }: AppProps) => {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    if (
      window.location.hostname.includes("jscontainer.com") &&
      window.location.href.startsWith("http:")
    ) {
      window.location.href = window.location.href.replace("http:", "https:");
    }
    if (pageProps.user && pageProps.isAuthenticated === true) {
      dispatch(
        setCurrentUser({
          user: pageProps.user,
          isAuthenticated: pageProps.isAuthenticated
        })
      );
    }
  }, []);
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;800&display=swap" rel="stylesheet" />
        {/*<link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <div className={''} >
        <Navbar></Navbar>
        <div
          className={`app-container ${
            router.route === "/" ? "container-page" : ""
            }`}
        >
          <Component {...pageProps} />
        </div>
        {router.route !== "/" && router.route.startsWith("/c/") === false ? <Footer></Footer> : <></>}

        {process.env.NODE_ENV === "production" && (
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=UA-64991398-3"
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'UA-64991398-3');
          `,
              }}
            />
          </>
        )}
      </div>
      <Toaster></Toaster>
    </div>
  );
}


const AppContainer = (props: any) => {
  return (
    <Provider store={store}>
      <MyApp {...props} />
    </Provider>
  );
};

AppContainer.getInitialProps = async (obj: AppContext) => {
  // let pageProps=  await obj.Component.getInitialProps(obj)
  let pageProps = await get(obj,'Component.getInitialProps', () => {})(obj)
  return {
    pageProps: {
      user: (obj.ctx.req as any)?.user,
      isAuthenticated: (obj.ctx.req as any)?.isAuthenticated(),
      ...pageProps
    },
  };
};


export default AppContainer;
