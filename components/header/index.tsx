import dynamic from "next/dynamic";

const MobileComponent = dynamic(() => import("./AppHeaderMobile"));
const DesktopComponent = dynamic(() => import("./AppHeaderDesktop"));

function index({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      {isMobile && <MobileComponent />}
      {!isMobile && <DesktopComponent />}
    </>
  );
}

export default index;
