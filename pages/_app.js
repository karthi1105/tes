import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/flaticon.css";
import "../styles/fontawesome.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Styles
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";
import GoTop from "../components/Shared/GoTop";

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Electrochemical Workstation | The Electrode Store | Hosur</title>
      </Head>

      <Component {...pageProps} />

      {/* Go Top Button */}
      <GoTop scrollStepInPx="50" delayInMs="10.50" />
    </>
  );
}
