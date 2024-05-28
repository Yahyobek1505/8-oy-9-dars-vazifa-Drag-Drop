
import logo from "../assets/logo.svg";
import user from "../assets/user.svg";
import main from "../assets/Asosiy.svg";
import letter from "../assets/sms-tracking.svg";
import taklif from "../assets/Send.svg";
import down from "../assets/down.svg";
function Header() {
  return (
    <>
      <div className="h-[70px] bg-white">
        <div className="pt-[23px] pb-[18px] flex max-w-[1150px] mx-auto">
          <img className="" src={logo} alt="" />
          <div className=" h-[21px] pt-[3px] text-[#92929D] relative">
            <div className="flex justify-around gap-4 cursor-pointer">
              <div className="flex pt-[3px] gap-[2px] translate-x-6">
                <img src={main} alt="" />
                <a>
                  <p className="hover:text-blue-500 hover:underline font-bold text-[14px]  tracking-[0.1px] ">
                    Asosiy
                  </p>
                </a>
              </div>
              <div className=" flex pt-[3px] gap-[4px] translate-x-6">
                <img className="" src={user} alt="" />
                <p className="font-bold hover:text-blue-500 hover:underline text-[14px] leading-[21px] tracking-[0.1px]">
                  Mijozlar bazasi
                </p>
              </div>
              <div className=" flex pt-[3px] gap-[4px]  translate-x-10">
                <img className="" src={letter} alt="" />
                <a>
                  <p className="hover:text-blue-500 hover:underline font-bold text-[14px] leading-[21px] tracking-[0.1px]">
                    Tracking loyihalari
                  </p>
                </a>
              </div>
              <div className=" flex pt-[3px] gap-[4px]  translate-x-10">
                <img className="" src={letter} alt="" />
                <p className="font-bold hover:text-blue-500 hover:underline text-[14px] leading-[21px] tracking-[0.1px]">
                  Sharh olish loyihalari
                </p>
              </div>
              <div className=" flex pt-[3px] gap-[4px]  translate-x-10">
                <img className="" src={taklif} alt="" />
                <p className="font-bold hover:text-blue-500 hover:underline text-[14px] leading-[21px] tracking-[0.1px]">
                  Redirect loyihalari
                </p>
              </div>
            </div>
            <div className="absolute flex items-center gap-5  left-[780px] top-0 ">
              <>
                <img alt="Remy Sharp" src="/src/assets/Profille.svg" />
              </>
              <p className="font-bold w-40 text-[16px] leading-[14px] tracking-[0.1px]  cursor-pointer ">
                Austin Robertson
              </p>
              <img src={down} alt="" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
export default Header;
