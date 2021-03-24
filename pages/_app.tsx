import Head from "next/head";
import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>coding palette</title>
      </Head>
      <div className="flex justify-center h-auto min-h-screen bg-gray-100">
        <div className="w-11/12 2xl:w-3/5">
          <Header />
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
