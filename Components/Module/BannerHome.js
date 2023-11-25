import Image from "next/image";

// Modules
import Btn3dText from "./Btn3dText";
import BtnLessBg from "./BtnLessBg";

// Icons
import star from "/Asset/Icons/Group 8308 (1).png";
import phone_call from "/Asset/Icons/phone-call (1) 1.png";
import angle_left from "/Asset/Icons/fi-rr-angle-left 8.png";

// Imgs
import Phone_banner from "/Asset/Images/Group 8309.png";
import bg_Phone_banner from "/Asset/Images/Group 7491.png";

const BannerHome = () => {
  return (
    <div
      className="max-w-screen-2xl lg:mt-[125px] mt-[96px] w-full h-full flex lg:flex-row flex-col 
     lg:justify-between justify-start lg:items-start items-center min-h-fit px-4 lg:px-8 mx-auto"
    >
      <div className="lg:w-fit w-full flex flex-col justify-start lg:items-start items-center">
        <Btn3dText
          content="تیم وبیمود"
          styleCustomize="bg-[#49B486] shadow-Green3D  text-[#fcfcfc]"
        />
        <div className="flex lg:flex-col flex-row mt-[14px] justify-start items-start">
          <h2 className="lg:text-[64px] text-[20px] font-[700] ">وبیمود</h2>
          <h3 className="lg:text-[64px] text-[20px] lg:font-[400] font-[700] ">
            واقعی کردن{" "}
            <span className="text-[#49B486] relative lg:text-[64px] text-[20px] font-[700] ">
              ایده ها
              <Image
                src={star}
                className="absolute lg:w-[24px] w-[12px] lg:h-32px h-16px lg:-top-[25px] -top-[14px] lg:-left-[28px] -left-[12px] "
              />
            </span>
          </h3>
        </div>
        <p
          className="text-[#BBBBBB] lg:mt-[60px] mt-4 lg:text-[28px] text-[16px] font-[400] 
          lg:text-justify text-center max-w-[562px] 
          lg:leading-[56px] leading-[26px] 
        "
        >
          بهترین خدمات برنامه نویسی ، طراحی سایت ، طراحی لوگو ، انیمیشن و... با
          تیم حرفه ای وبیمود کسب و کار خود را به سطح بالاتری ببرید !
        </p>
        <div className="w-full flex lg:mt-[72px] mb-[94px] lg:mb-0 mt-[32px] lg:flex-row flex-col justify-start items-center">
          <Btn3dText
            content="ارتباط با ما"
            styleCustomize="bg-[#49B486] shadow-Green3D lg:text-[24px] text-[18px]
            !px-[24px] !py-[14px] lg:w-fit w-full mb-[24px] lg:mb-0 !rounded-[18px] text-[#fcfcfc]"
            icon={phone_call}
            iconStyle="ml-[18px] lg:w-[24px] lg:h-[24px] w-[20px] h-[20px] "
          />
          <BtnLessBg
            content="نمونه کار های ما"
            styleCustomize="lg:text-[24px] text-[18px] lg:w-fit w-full
             shadow-[0px 0px 24px 0px rgba(252, 252, 252, 0.32)] lg:mr-[35px] mr-0 text-[#2B96CC] border-[#2B96CC]"
            icon={angle_left}
            iconStyle="mr-[30px] w-[16px] h-[16px]"
          />
        </div>
      </div>
      <div className="flex flex-col justify-start lg:items-end items-center">
        <Image
          src={Phone_banner}
          className="relative animate-wiggle"
          width={606}
          height={621}
          alt="img banner"
          style={{
            animationDirection: "alternate",
            animationFillMode: "forwards",
          }}
        />
        <Image src={bg_Phone_banner} width={517} height={323} alt="bg banner" />
      </div>
    </div>
  );
};

export default BannerHome;
