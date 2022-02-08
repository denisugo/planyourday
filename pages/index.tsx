import type { NextPage, GetServerSideProps } from "next";
import AppFooter from "../components/footer";
import AppHeader from "../components/header";
import AppHead from "../components/head";
import Timeline from "../components/timeline";

const Home: NextPage<{ isMobile: boolean }> = ({ isMobile }) => {
  return (
    <div>
      {/* TODO: Add title and description */}
      <AppHead />
      <AppHeader isMobile={isMobile} />
      <main>
        <Timeline isMobile={isMobile} />
        <div>Google ads vertical banners</div>
        <div>video</div>
      </main>
      <div>Google ads sticky banner</div>
      {/* TODO: Add copirights */}
      <AppFooter isMobile={isMobile} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      isMobile: false,
    },
  };
};
