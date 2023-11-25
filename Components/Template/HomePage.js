// Modules
import BannerHome from "../Module/BannerHome";
import BgBanner from "../Module/BgBanner";
import DesBanner from "../Module/DesBanner";

const HomePage = () => {
  return (
    <>
      <BgBanner />
      <div className="relative z-[99]">
        <BannerHome />
        <DesBanner />
      </div>
    </>
  );
};

export default HomePage;
