import Head from "next/head";
import { global, header } from "../../config/colors";
import { GlobalStyle } from "../globalStyles/GlobalStyles";

function AppHead() {
  return (
    <>
      <Head>
        <title> Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content={header.background} />
      </Head>

      <GlobalStyle />
    </>
  );
}

export default AppHead;
