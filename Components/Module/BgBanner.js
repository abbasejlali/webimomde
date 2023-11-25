import Image from "next/image";

// Imgs
import bg_banner from "/Asset/Images/Vector 8.png";
import bg_banner_big from "/Asset/Images/Vector 1.png";

const BgBanner = () => {
  return (
    <>
      <Image
        src={bg_banner}
        className="!absolute -top-[40px] -right-[145px] z-[0] "
        width={310}
        height={117}
      />
      <Image
        src={bg_banner_big}
        className="hidden sm:flex !absolute -top-[25px] -right-[28px] -z-10 "
        width={537}
        height={203}
      />
    </>
  );
};

export default BgBanner;
