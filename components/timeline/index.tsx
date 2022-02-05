import dynamic from "next/dynamic";

// const MobileComponent = dynamic(() => import("./AppFooterMobile"));
const DesktopComponent = dynamic(() => import("./TimelineDesktop"));

function index({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      {/* {isMobile && <MobileComponent />} */}
      {!isMobile && <DesktopComponent />}
    </>
  );
}

export default index;
