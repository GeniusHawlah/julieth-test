import { AllContextProvider } from "../a-store/context-store/AllContext";
import "../styles/globals.css";

import { Fragment, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <AllContextProvider>
        {/* <Navbar /> */}
        <Component {...pageProps} />
      </AllContextProvider>
    </Fragment>
  );
}

export default MyApp;
  