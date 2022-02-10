import type { NextPage, GetServerSideProps } from "next";
import AppFooter from "../components/footer";
import AppHeader from "../components/header";
import AppHead from "../components/head";
import Timeline from "../components/timeline";

const Home: NextPage<{ isMobile: boolean }> = ({ isMobile }) => {
  return (
    <div>
      <AppHead />
      <AppHeader isMobile={isMobile} />

      <Timeline isMobile={isMobile} />

      {/* <div>Google ads vertical banners</div>
      <div>video</div>
      <div>Google ads sticky banner</div> */}
      <AppFooter isMobile={isMobile} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  //? Check a device type
  let isMobile = false;

  const agent = context.req.headers["user-agent"]?.toLowerCase() || "";
  if (/android/.exec(agent) || /iphone/.exec(agent)) isMobile = true;

  return {
    props: {
      isMobile,
    },
  };
};
