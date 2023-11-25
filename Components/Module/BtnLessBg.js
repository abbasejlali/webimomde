import Image from "next/image";

const BtnLessBg = ({ content, styleCustomize, icon, iconStyle }) => {
  return (
    <button
      className={` ${styleCustomize} font-medium text-lg py-[12px] px-[24px]  
      rounded-[18px] border-[1.5px] border-solid flex flex-row justify-center items-center `}
    >
      {content}
      {icon ? <Image src={icon} className={`${iconStyle}`} /> : null}
    </button>
  );
};

export default BtnLessBg;
