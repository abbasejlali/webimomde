import Image from "next/image";

const Btn3dText = ({ content, styleCustomize, icon, iconStyle }) => {
  return (
    <button
      className={` ${styleCustomize}  font-medium text-lg py-2 px-3  
      rounded-tr-xl rounded-tl-xl rounded-bl-xl flex flex-row justify-center items-center `}
    >
      {icon ? <Image src={icon} className={`${iconStyle}`} /> : null}
      {content}
    </button>
  );
};

export default Btn3dText;
