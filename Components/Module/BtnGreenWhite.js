import Image from "next/image";
import Link from "next/link";

const BtnGreenWhite = ({ content, icon }) => {
  return (
    <>
      <Link
        href="/"
        className={`bg-[#49B486] shadow-Green h-12 text-[#fcfcfc] font-medium text-lg py-3 px-4  rounded-2xl
         flex flex-row justify-center items-center `}
      >
        {content}
        <Image
          src={icon}
          className="mr-3 bg-transparent text-[#fcfcfc] "
          width={16}
          height={16}
        />
      </Link>
    </>
  );
};

export default BtnGreenWhite;
