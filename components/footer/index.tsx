import dynamic from "next/dynamic";

const MobileComponent = dynamic(() => import("./AppFooterMobile"), {
  ssr: true,
});
const DesktopComponent = dynamic(() => import("./AppFooterDesktop"), {
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
