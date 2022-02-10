import Head from "next/head";
import { global, header } from "../../config/colors";
import { GlobalStyle } from "../globalStyles/GlobalStyles";

function AppHead() {
  return (
    <>
      <Head>
        <title> Plan your time</title>
        <meta
          name="description"
          content="PlanYourTime is a simple timline based application."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content={header.background} />
      </Head>

      <GlobalStyle />
    </>
  );
}

export default AppHead;
