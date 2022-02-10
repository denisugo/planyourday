import dynamic from "next/dynamic";

const MobileComponent = dynamic(() => import("./AppHeaderMobile"), {
  ssr: true,
});
const DesktopComponent = dynamic(() => import("./AppHeaderDesktop"), {
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
