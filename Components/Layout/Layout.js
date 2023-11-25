import Link from "next/link";
import Image from "next/image";

// Components
import BtnGreenWhite from "../Module/BtnGreenWhite";

// Icons
import logo from "/Asset/Icons/logo.png";
import angle_bottom from "/Asset/Icons/fi-rr-angle-left 6.png";
import icon_menu from "/Asset/Icons/bars-desktop.png";
import icon_menu_phone from "/Asset/Icons/bars-mobile.png";
import angle_left from "/Asset/Icons/fi-rr-angle-left 1.png";
import handshake from "/Asset/Icons/handshake 1.png";

const Layout = ({ children }) => {
  return (
    <>
      <header className="sm:bg-[#fcfcfc] relative max-w-screen-2xl w-full h-28 flex flex-row justify-between items-center min-h-full px-4 sm:px-8 mx-auto">
        <div className="sm:hidden z-[99] flex w-10 h-10 rounded-xl border-2 p-2.5 border-solid border-black cursor-pointer ">
          <Image src={icon_menu_phone} width={20} height={20} />
        </div>
        <div className="w-fit min-h-full z-[99] flex flex-row justify-start items-center ">
          <div className="w-fit h-fit flex flex-row justify-start items-center">
            <Image
              src={logo}
              className="sm:w-[52px] sm:h-14 w-9 h-10"
              alt="logo"
            />
            <div className="hidden sm:flex rounded-sm bg-black w-10 h-1 rotate-90 "></div>
          </div>
          <ul className="hidden sm:flex w-fit min-h-full  flex-row justify-start items-center ">
            <li className=" relative ">
              <Link href="/" className=" font-medium ">
                نمونه کار ها
              </Link>
              <div className=" absolute -bottom-3 right-0 flex flex-row justify-start items-center ">
                <div className="rounded-sm bg-[#49B486] w-2 h-1 rotate-0 ml-1 "></div>
                <div className="rounded-sm bg-[#232323] w-8 h-1 rotate-0  "></div>
              </div>
            </li>
            <li className="mr-10 w-fit min-h-full">
              <div className="cursor-pointer w-full min-h-full  flex flex-row justify-start items-center ">
                <span className="text-[#BBB] font-medium ">خدمات ما</span>
                <Image
                  src={angle_bottom}
                  width={14}
                  height={14}
                  className="mr-4"
                />
              </div>
            </li>
          </ul>
        </div>
        <div className="w-fit min-h-full sm:flex hidden flex-row justify-end items-center ">
          <BtnGreenWhite icon={angle_left} content="درخواست همکاری" />
          <div className="w-12 h-12 rounded-xl border-2 p-2.5 border-solid mr-5 border-black cursor-pointer ">
            <Image src={icon_menu} width={28} height={28} />
          </div>
        </div>
        <button
          className=" sm:hidden flex bg-[#49B486] shadow-Green w-10 h-10  p-2.5  rounded-2xl
          flex-row justify-center items-center "
        >
          <Image
            src={handshake}
            className=" bg-transparent "
            width={20}
            height={20}
          />
        </button>
      </header>
      {children}
    </>
  );
};

export default Layout;
