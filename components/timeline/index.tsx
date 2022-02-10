import dynamic from "next/dynamic";

const MobileComponent = dynamic(() => import("./TimelineMobile"), {
  ssr: true,
});
const DesktopComponent = dynamic(() => import("./TimelineDesktop"), {
  ssr: true,
});

function index({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      {isMobile && <MobileComponent />}
      {!isMobile && <DesktopComponent />}
    </>
  );
}

export default index;
