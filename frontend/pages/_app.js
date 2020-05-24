import Head from "next/head";
import Navbar from "../components/Navbar";
function MyApp({ Component, pageProps }) {
  return (
    <html>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.2.4/antd.min.css" />
        <title>JS Container</title>
      </Head>
      <body>
        <Navbar></Navbar>
        <Component {...pageProps} />
      </body>
    </html>
  );
}
export default MyApp;
