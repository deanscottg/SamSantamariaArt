import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../../components/Layout";
import Router from "next/router";
import { useState } from "react";
import Loader from "../../components/loader";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setIsLoading(true);
    console.log("Event is starting");
  });
  Router.events.on("routeChangeComplete", (url) => {
    setIsLoading(false);
    console.log("Event has ended");
  });
  if (isLoading) return <Loader />;

  return (
    <div className="bg-gradient-to-br from-gray-400 to-gray-200 bg-auto">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
